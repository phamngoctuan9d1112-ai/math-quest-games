"use client";

import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

function convertMath(text: string) {
  return text
    .replace(/sinα/g, "$\\sin\\alpha$")
    .replace(/cosα/g, "$\\cos\\alpha$")
    .replace(/tanα/g, "$\\tan\\alpha$")
    .replace(/cotα/g, "$\\cot\\alpha$")
    .replace(/(\d+)\/(\d+)/g, "$\\\\frac{$1}{$2}$");
}

export default function MathText({
  text,
}: {
  text: string;
}) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkMath]}
      rehypePlugins={[rehypeKatex]}
    >
      {convertMath(text)}
    </ReactMarkdown>
  );
}