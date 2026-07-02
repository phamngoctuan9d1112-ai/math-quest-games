"use client";

import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

export default function MathText({
  text,
}: {
  text: string;
}) {
  return (
    <div className="whitespace-pre-line">
      <InlineMath math={convertMath(text)} />
    </div>
  );
}

function convertMath(text: string) {
  return text

    // Tập số
    .replace(/\bR\b/g, "\\mathbb{R}")
    .replace(/\bN\b/g, "\\mathbb{N}")
    .replace(/\bZ\b/g, "\\mathbb{Z}")
    .replace(/\bQ\b/g, "\\mathbb{Q}")

    // R\{1}
    .replace(
      /\\mathbb\{R\}\\\{([^}]*)\\\}/g,
      "\\mathbb{R}\\setminus\\{$1\\}"
    )

    .replace(
      /R\\\{([^}]*)\\\}/g,
      "\\mathbb{R}\\setminus\\{$1\\}"
    )

    // x² x³
    .replace(/²/g, "^2")
    .replace(/³/g, "^3")

    // α β γ
    .replace(/α/g, "\\alpha")
    .replace(/β/g, "\\beta")
    .replace(/γ/g, "\\gamma")
    .replace(/θ/g, "\\theta")

    // ∈ ∉
    .replace(/∈/g, "\\in")
    .replace(/∉/g, "\\notin")

    // ⊂ ⊆
    .replace(/⊂/g, "\\subset")
    .replace(/⊆/g, "\\subseteq")

    // ∩ ∪
    .replace(/∩/g, "\\cap")
    .replace(/∪/g, "\\cup")

    // ≤ ≥
    .replace(/≤/g, "\\le")
    .replace(/≥/g, "\\ge")

    // ⇒ ⇔
    .replace(/⇒/g, "\\Rightarrow")
    .replace(/⇔/g, "\\Leftrightarrow")

    // ∀ ∃
    .replace(/∀/g, "\\forall")
    .replace(/∃/g, "\\exists")

    // √x
    .replace(/√(\w+)/g, "\\sqrt{$1}")

    // (a+b)/(c+d)
    .replace(
    /\(([^()]+)\)\/\(([^()]+)\)/g,
    "\\frac{$1}{$2}"
    )

    // a/b
    .replace(
    /(\d+)\/(\d+)/g,
    "\\frac{$1}{$2}"
    )

    .replace(/sin/g, "\\sin")
    .replace(/cos/g, "\\cos")
    .replace(/tan/g, "\\tan")
    .replace(/cot/g, "\\cot")

    .replace(/log₂/g, "\\log_2")
    .replace(/log₃/g, "\\log_3")
    .replace(/log₁₀/g, "\\log_{10}") 



    // π
    .replace(/π/g, "\\pi");
}