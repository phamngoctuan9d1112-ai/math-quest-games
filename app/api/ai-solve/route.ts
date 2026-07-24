import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY!,
  baseURL: "https://api.groq.com/openai/v1",
});

export async function POST(req: Request) {
  try {
    const { question, options } = await req.json();

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