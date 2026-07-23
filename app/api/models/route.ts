import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function GET() {
  try {
    const models = await ai.models.list();

    return Response.json(models);
  } catch (e: any) {
    return Response.json({
      error: e.message,
    });
  }
}