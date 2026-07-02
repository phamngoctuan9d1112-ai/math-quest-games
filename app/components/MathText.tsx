"use client";

import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";

export default function MathText({
  text,
}: {
  text: string;
}) {
  return (
    <span>
      <InlineMath math={convertMath(text)} />
    </span>
  );
}

function convertMath(text: string) {
  return text

    // R\{1}
    .replace(
      /R\\\{([^}]*)\}/g,
      "\\mathbb{R}\\setminus\\{$1\\}"
    )

    .replace(
      /N\\\{([^}]*)\}/g,
      "\\mathbb{N}\\setminus\\{$1\\}"
    )

    .replace(
      /Z\\\{([^}]*)\}/g,
      "\\mathbb{Z}\\setminus\\{$1\\}"
    )

    .replace(
      /Q\\\{([^}]*)\}/g,
      "\\mathbb{Q}\\setminus\\{$1\\}"
    )

    // Tập số
    .replace(/\bR\b/g, "\\mathbb{R}")
    .replace(/\bN\b/g, "\\mathbb{N}")
    .replace(/\bZ\b/g, "\\mathbb{Z}")
    .replace(/\bQ\b/g, "\\mathbb{Q}")

    // x² x³
    .replace(/²/g, "^2")
    .replace(/³/g, "^3")

    // Greek
    .replace(/α/g, "\\alpha")
    .replace(/β/g, "\\beta")
    .replace(/γ/g, "\\gamma")
    .replace(/θ/g, "\\theta")
    .replace(/π/g, "\\pi")

    // Tập hợp
    .replace(/∈/g, "\\in")
    .replace(/∉/g, "\\notin")
    .replace(/⊂/g, "\\subset")
    .replace(/⊆/g, "\\subseteq")
    .replace(/∩/g, "\\cap")
    .replace(/∪/g, "\\cup")

    // So sánh
    .replace(/≤/g, "\\le")
    .replace(/≥/g, "\\ge")
    .replace(/≠/g, "\\ne")

    // Logic
    .replace(/⇒/g, "\\Rightarrow")
    .replace(/⇔/g, "\\Leftrightarrow")
    .replace(/∀/g, "\\forall")
    .replace(/∃/g, "\\exists")

    // Căn
    .replace(/√([a-zA-Z0-9]+)/g, "\\sqrt{$1}")

    // Phân số dạng (a+b)/(c+d)
    .replace(
      /\(([^()]+)\)\/\(([^()]+)\)/g,
      "\\frac{$1}{$2}"
    )

    // Phân số số học
    .replace(
      /(\d+)\/(\d+)/g,
      "\\frac{$1}{$2}"
    )

    // Lượng giác
    .replace(/sin/g, "\\sin")
    .replace(/cos/g, "\\cos")
    .replace(/tan/g, "\\tan")
    .replace(/cot/g, "\\cot");
}