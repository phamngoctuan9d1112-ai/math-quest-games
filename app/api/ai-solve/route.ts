import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { question, options } = await req.json();

    const prompt = `
Bạn là giáo viên Toán THPT Việt Nam.

Giải bài từng bước.

Đề:

${question}

Đáp án:

${JSON.stringify(options)}

Yêu cầu:

- Phân tích đề
- Giải từng bước
- Nếu là trắc nghiệm thì phân tích từng đáp án
- Cuối cùng mới kết luận.
`;

    const response = await ai.models.generateContent({
     model: "models/gemini-flash-latest",
      contents: prompt,
    });
console.log(response);
    return Response.json({
      success: true,
      answer: response.text,
    });
  } catch (err: any) {
    console.error(err);

    return Response.json({
      success: false,
      error: err.message,
    });
  }
}