"use client";

import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

import "katex/dist/katex.min.css";

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
      {text}
    </ReactMarkdown>
  );
}
function autoMath(text: string) {
  return text
    .replace(/sinα/g, "$\\sin\\alpha$")
    .replace(/cosα/g, "$\\cos\\alpha$")
    .replace(/tanα/g, "$\\tan\\alpha$")
    .replace(/cotα/g, "$\\cot\\alpha$")
    .replace(/α/g, "\\alpha")
    .replace(/β/g, "\\beta")
    .replace(/γ/g, "\\gamma")
    .replace(/θ/g, "\\theta")

    .replace(/⇒/g, "\\Rightarrow")
    .replace(/⇔/g, "\\Leftrightarrow")

    .replace(/≤/g, "\\le")
    .replace(/≥/g, "\\ge")

    .replace(/∈/g, "\\in")
    .replace(/∉/g, "\\notin");
}