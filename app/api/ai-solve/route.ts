import OpenAI from "openai";
import { createClient } from "@supabase/supabase-js";
import crypto from "crypto";
import { normalizeQuestion } from "../../lib/normalizeQuestion";
const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY!,
  baseURL: "https://api.groq.com/openai/v1",
});

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);


function createHash(text: string) {
  return crypto
    .createHash("sha256")
    .update(text.trim())
    .digest("hex");
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      type,
      question,
      options = [],
      subQuestions = [],
    } = body;

const normalized = JSON.stringify({
  type,
  question: normalizeQuestion(question),
  options,
  subQuestions,
});

const questionHash = createHash(normalized);

    console.log("Question Hash:", questionHash);

 
    const { data: cache } = await supabase
      .from("ai_cache")
      .select("*")
      .eq("question_hash", questionHash)
      .maybeSingle();

    if (cache) {
      console.log("✅ CACHE HIT");

      await supabase
        .from("ai_cache")
        .update({
          usage_count: cache.usage_count + 1,
          updated_at: new Date().toISOString(),
        })
        .eq("id", cache.id);

      return Response.json({
        success: true,
        answer: cache.answer,
        cached: true,
      });
    }

    console.log("❌ CACHE MISS");



    let prompt = "";



    if (type === "multiple-choice") {
      prompt = `
Bạn là giáo viên Toán THPT Việt Nam.

Hãy giải bài toán sau.

Đề bài:

${question}

Các đáp án:

${options
  .map((o: string, i: number) => `${String.fromCharCode(65 + i)}. ${o}`)
  .join("\n")}

Yêu cầu:

1. Phân tích đề.
2. Giải từng bước.
3. Phân tích từng đáp án.
4. Chỉ rõ đáp án đúng.
5. Giải thích vì sao các đáp án còn lại sai.
`;
    }


    else if (type === "true-false") {
      prompt = `
Bạn là giáo viên Toán THPT Việt Nam.

Đề bài:

${question}

Các mệnh đề:

${subQuestions
  .map((q: any) => `${q.label}) ${q.text}`)
  .join("\n")}

Yêu cầu:

Giải TẤT CẢ các mệnh đề.

Đối với mỗi mệnh đề:

- Phân tích.
- Chứng minh.
- Kết luận Đúng hay Sai.

Sau cùng tổng kết theo mẫu:

a) Đúng/Sai

b) Đúng/Sai

c) Đúng/Sai

d) Đúng/Sai
`;
    }



    else {
      prompt = `
Bạn là giáo viên Toán THPT Việt Nam.

Đề bài:

${question}

Yêu cầu:

- Giải từng bước.
- Giải thích rõ ràng.
- Trình bày đẹp.
- Nếu có nhiều cách giải hãy chọn cách ngắn gọn nhất.
- Cuối cùng ghi đáp số.
`;
    }

    const completion =
      await client.chat.completions.create({
        model: "llama-3.3-70b-versatile",
        temperature: 0.2,
        messages: [
          {
            role: "system",
            content:
              "Bạn là giáo viên Toán THPT Việt Nam. Luôn giải đúng, trình bày từng bước rõ ràng.",
          },
          {
            role: "user",
            content: prompt,
          },
        ],
      });

    const answer =
      completion.choices[0]?.message?.content ??
      "Không có phản hồi.";


    await supabase
  .from("ai_cache")
  .insert({
    question_hash: questionHash,
    question: normalized,
    answer,
    source: "groq",
  });
    console.log("💾 Saved cache");


    return Response.json({
      success: true,
      answer,
      cached: false,
    });

  } catch (err: any) {
    console.error(err);

    return Response.json({
      success: false,
      error: err.message,
    });
  }
}