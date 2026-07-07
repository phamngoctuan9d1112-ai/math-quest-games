// test-openai.js

import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const res = await client.responses.create({
  model: "gpt-5-mini",
  input: "hello"
});

console.log(res.output_text);