import OpenAI from "openai";
import { createClient } from "@supabase/supabase-js";
import crypto from "crypto";

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY!,
  baseURL: "https://api.groq.com/openai/v1",
});

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      type,
      question,
      options = [],
      subQuestions = [],
    } = body;


    const questionHash = crypto
      .createHash("sha256")
      .update(JSON.stringify(body))
      .digest("hex");




    const { data: cached } = await supabase
      .from("ai_answers")
      .select("answer")
      .eq("question_hash", questionHash)
      .maybeSingle();

    if (cached) {
      console.log("CACHE HIT");

      return Response.json({
        success: true,
        answer: cached.answer,
        cached: true,
      });
    }

    console.log("CACHE MISS");


    let prompt = "";



    if (type === "multiple-choice") {
      prompt = `
Bạn là giáo viên Toán THPT Việt Nam.

Hãy giải bài toán sau.

Đề:

${question}

Các đáp án:

${options
  .map((o: string, i: number) => `${String.fromCharCode(65 + i)}. ${o}`)
  .join("\n")}

Yêu cầu:

1. Phân tích đề.
2. Giải từng bước.
3. Phân tích từng đáp án.
4. Chỉ ra đáp án đúng.
5. Giải thích vì sao các đáp án còn lại sai.
`;
    }



    else if (type ==="true-false") {
      prompt = `
Bạn là giáo viên Toán THPT Việt Nam.

Đề:

${question}

Các mệnh đề:

${subQuestions
  .map(
    (q: any) =>
      `${q.label}) ${q.text}`
  )
  .join("\n")}

Yêu cầu:

Với MỖI mệnh đề:

- Phân tích.
- Chứng minh.
- Kết luận Đúng hay Sai.

Không được bỏ qua mệnh đề nào.

Cuối cùng tổng kết:

a) ...

b) ...

c) ...

d) ...
`;
    }



    else {
      prompt = `
Bạn là giáo viên Toán THPT.

Đề:

${question}

Yêu cầu:

- Giải từng bước.
- Trình bày rõ ràng.
- Nếu có nhiều cách giải thì chọn cách ngắn nhất.
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
              "Bạn là giáo viên Toán THPT Việt Nam. Luôn giải đúng, rõ ràng, từng bước.",
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
      .from("ai_answers")
      .insert({
        question_hash: questionHash,
        question: JSON.stringify(body),
        answer,
      });

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