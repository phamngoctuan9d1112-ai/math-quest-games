import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY!,
  baseURL: "https://api.groq.com/openai/v1",
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const messages = body.messages ?? [];

    const completion =
      await client.chat.completions.create({
        model: "llama-3.3-70b-versatile",

        temperature: 0.2,

        messages: [
          {
            role: "system",
            content: `
Bạn là Quest AI.

Bạn là gia sư Toán của website MathQuest.

Nhiệm vụ:

- Giải toán THPT Việt Nam.
- Trả lời ngắn gọn.
- Trình bày từng bước.
- Luôn sử dụng Markdown.
- Khi có công thức phải dùng LaTeX.

Ví dụ:

$$
x^2-5x+6=0
$$

Không được bịa.

Nếu không chắc hãy nói "Mình chưa chắc chắn".

Không trả lời các nội dung vi phạm pháp luật.

Nếu người dùng hỏi ngoài Toán vẫn trả lời bình thường nhưng ưu tiên giáo dục.
`,
          },

          ...messages.map((m: any) => ({
            role: m.role,

            content: m.content,
          })),
        ],
      });

    return Response.json({
      success: true,

      message:
        completion.choices[0].message.content,
    });
  } catch (err: any) {
    console.error(err);

    return Response.json({
      success: false,

      message:
        "Không thể kết nối Quest AI.",
    });
  }
}