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
    const { question, options } = await req.json();
const questionHash = crypto
  .createHash("sha256")
  .update(question + JSON.stringify(options))
  .digest("hex");
  const { data: cached } = await supabase
  .from("ai_answers")
  .select("answer")
  .eq("question_hash", questionHash)
  .single();

if (cached) {
  console.log("CACHE HIT");

  return Response.json({
    success: true,
    answer: cached.answer,
  });
}
    const prompt = `
Bạn là giáo viên Toán THPT Việt Nam.

Giải bài toán sau từng bước.

Đề bài:

${question}

Đáp án:

${JSON.stringify(options)}

Yêu cầu:

- Phân tích đề.
- Giải từng bước.
- Nếu là trắc nghiệm thì phân tích từng đáp án.
- Cuối cùng kết luận đáp án đúng.
`;

    const completion = await client.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    const answer =
      completion.choices[0]?.message?.content ?? "Không có phản hồi.";
await supabase
  .from("ai_answers")
  .insert({
    question_hash: questionHash,
    question,
    answer,
  });
    return Response.json({
      success: true,
      answer,
    });

  } catch (err: any) {
    console.error(err);

    return Response.json({
      success: false,
      error: err.message,
    });
  }
}