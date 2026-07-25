import OpenAI from "openai";
import { createClient } from "@supabase/supabase-js";

import { ChatCompletionMessageParam } from "openai/resources/chat/completions";
const client = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY!,
  baseURL: "https://openrouter.ai/api/v1",
});

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    const { sessionId, message } = await req.json();

    if (!sessionId || !message) {
      return Response.json(
        {
          success: false,
          error: "Thiếu sessionId hoặc message",
        },
        {
          status: 400,
        }
      );
    }



    const { data: history, error } = await supabase
      .from("chat_messages")
      .select("role, content")
      .eq("session_id", sessionId)
      .order("created_at", {
        ascending: true,
      });

    if (error) {
      console.error(error);

      return Response.json(
        {
          success: false,
          error: error.message,
        },
        {
          status: 500,
        }
      );
    }


    const systemPrompt = `
Bạn là Quest AI.

Bạn là giáo viên Toán THPT Việt Nam.

Nhiệm vụ:

- Giải toán THPT.
- Giải thích công thức.
- Chứng minh.
- Hướng dẫn từng bước.
- Không trả lời lan man.
- Trình bày đẹp bằng Markdown.
- Công thức Toán dùng KaTeX.
`;


  const messages: ChatCompletionMessageParam[] = [
      {
        role: "system",
        content: systemPrompt,
      },
      ...(history ?? []).map((m) => ({
        role: m.role as "user" | "assistant",
        content: m.content,
      })),
    ];


 const completion =
  await client.chat.completions.create({
    model: "deepseek/deepseek-chat-v3-0324:free",

    temperature: 0.2,

    messages,

   
  });
    const aiMessage =
      completion.choices[0]?.message?.content ??
      "Xin lỗi, mình chưa có câu trả lời.";



    await supabase
      .from("chat_messages")
      .insert({
        session_id: sessionId,
        role: "assistant",
        content: aiMessage,
      });


    await supabase
      .from("chat_sessions")
      .update({
        updated_at: new Date().toISOString(),
      })
      .eq("id", sessionId);

  

    return Response.json({
      success: true,
      message: aiMessage,
    });

  } catch (err: any) {
    console.error(err);

    return Response.json(
      {
        success: false,
        error: err.message,
      },
      {
        status: 500,
      }
    );
  }
}