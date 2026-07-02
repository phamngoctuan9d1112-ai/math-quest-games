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
  const converted = autoMath(text);

  return (
    <ReactMarkdown
      remarkPlugins={[remarkMath]}
      rehypePlugins={[rehypeKatex]}
    >
      {converted}
    </ReactMarkdown>
  );
}

function autoMath(text: string) {
  return text

    // (a+b)/(c+d)
    .replace(
      /\(([^()]+)\)\/\(([^()]+)\)/g,
      (_, a, b) => `$\\frac{${a}}{${b}}$`
    )

    // 3/5
    .replace(
      /\b(\d+)\/(\d+)\b/g,
      (_, a, b) => `$\\frac{${a}}{${b}}$`
    )

    // x² x³
    .replace(/x²/g, "$x^2$")
    .replace(/x³/g, "$x^3$")

    // α β γ θ
    .replace(/α/g, "$\\alpha$")
    .replace(/β/g, "$\\beta$")
    .replace(/γ/g, "$\\gamma$")
    .replace(/θ/g, "$\\theta$")

    // π
    .replace(/π/g, "$\\pi$")

    // tập số
    .replace(/\bR\b/g, "$\\mathbb{R}$")
    .replace(/\bN\b/g, "$\\mathbb{N}$")
    .replace(/\bZ\b/g, "$\\mathbb{Z}$")
    .replace(/\bQ\b/g, "$\\mathbb{Q}$")

    // R{1}
    .replace(
      /R\{([^}]*)\}/g,
      (_, x) =>
        `$\\mathbb{R}\\setminus\\{${x}\\}$`
    )

    // ∈
    .replace(/∈/g, "$\\in$")

    // ∉
    .replace(/∉/g, "$\\notin$")

    // ≤
    .replace(/≤/g, "$\\le$")

    // ≥
    .replace(/≥/g, "$\\ge$")

    // ∩
    .replace(/∩/g, "$\\cap$")

    // ∪
    .replace(/∪/g, "$\\cup$")

    // ⊂
    .replace(/⊂/g, "$\\subset$")

    // ⊆
    .replace(/⊆/g, "$\\subseteq$")

    // ⇒
    .replace(/⇒/g, "$\\Rightarrow$")

    // ⇔
    .replace(/⇔/g, "$\\Leftrightarrow$")

    // ∀
    .replace(/∀/g, "$\\forall$")

    // ∃
    .replace(/∃/g, "$\\exists$")

    // sin cos tan cot
    .replace(/\bsin\b/g, "$\\sin$")
    .replace(/\bcos\b/g, "$\\cos$")
    .replace(/\btan\b/g, "$\\tan$")
    .replace(/\bcot\b/g, "$\\cot$");
}