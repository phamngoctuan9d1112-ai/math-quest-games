import OpenAI from "openai";
import fs from "fs-extra";
import path from "path";
import dotenv from "dotenv";
import { pdfToImages } from "./pdf-to-images.js";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});
async function convertPdf(
  pdfName
) {

  const images =
    await pdfToImages(
      `pdf/${pdfName}`
    );

  const content = [];

  content.push({
    type: "text",
    text: `
Đọc toàn bộ đề.

Xuất JSON:

{
  "stage1": [],
  "stage2": [],
  "stage3": []
}

Quy tắc:

- multiple-choice
- true-false
- short-answer

Sinh id tự động.

Giữ nguyên công thức toán.

Chỉ trả JSON.
`
  });

  for (const img of images) {

    const base64 =
      await fs.readFile(img, {
        encoding: "base64"
      });

    content.push({
      type: "image_url",
      image_url: {
        url:
          `data:image/png;base64,${base64}`
      }
    });
  }

  const result =
    await openai.chat.completions.create({
      model: "gpt-5",
      messages: [
        {
          role: "user",
          content
        }
      ]
    });

  return result.choices[0]
    .message.content;
}
const files =
  await fs.readdir("pdf");

for (const file of files) {

  if (!file.endsWith(".pdf"))
    continue;

  console.log(
    "Processing",
    file
  );

  const json =
    await convertPdf(file);

  const jsonName =
    file.replace(
      ".pdf",
      ".json"
    );

  await fs.writeFile(
    path.join(
      "data/questions",
      jsonName
    ),
    json,
    "utf8"
  );

  console.log(
    "Saved",
    jsonName
  );
}
