const fs = require("fs");
const path = require("path");

// ĐƯỜNG DẪN FILE CÂU HỎI
const INPUT_FILE = "./app/data/questions.ts";
const OUTPUT_FILE = "./app/data/questions.converted.ts";

let content = fs.readFileSync(INPUT_FILE, "utf8");

function convertMath(text) {
  return text

    // ===== Greek =====
    .replace(/α/g, "\\alpha")
    .replace(/β/g, "\\beta")
    .replace(/γ/g, "\\gamma")
    .replace(/θ/g, "\\theta")
    .replace(/π/g, "\\pi")

    // ===== Tập số =====
    .replace(/\bR\b/g, "\\mathbb{R}")
    .replace(/\bN\b/g, "\\mathbb{N}")
    .replace(/\bZ\b/g, "\\mathbb{Z}")
    .replace(/\bQ\b/g, "\\mathbb{Q}")

    // ===== Tập hợp =====
    .replace(/∈/g, "\\in")
    .replace(/∉/g, "\\notin")
    .replace(/⊂/g, "\\subset")
    .replace(/⊆/g, "\\subseteq")
    .replace(/∩/g, "\\cap")
    .replace(/∪/g, "\\cup")

    // ===== So sánh =====
    .replace(/≤/g, "\\le")
    .replace(/≥/g, "\\ge")
    .replace(/≠/g, "\\neq")

    // ===== Logic =====
    .replace(/⇒/g, "\\Rightarrow")
    .replace(/⇔/g, "\\Leftrightarrow")
    .replace(/∀/g, "\\forall")
    .replace(/∃/g, "\\exists")

    // ===== Căn =====
    .replace(/√([a-zA-Z0-9]+)/g, "\\sqrt{$1}")

    // ===== log =====
    .replace(/log₂/g, "\\log_2")
    .replace(/log₃/g, "\\log_3")
    .replace(/log₁₀/g, "\\log_{10}")

    // ===== sin cos tan cot =====
    .replace(/\bsin\b/g, "\\sin")
    .replace(/\bcos\b/g, "\\cos")
    .replace(/\btan\b/g, "\\tan")
    .replace(/\bcot\b/g, "\\cot")

    // ===== mũ =====
    .replace(/²/g, "^2")
    .replace(/³/g, "^3")

    // ===== phân số (a+b)/(c+d) =====
    .replace(
      /\(([^()]+)\)\/\(([^()]+)\)/g,
      "\\frac{$1}{$2}"
    )

    // ===== phân số số học =====
    .replace(
      /(\d+)\/(\d+)/g,
      "\\frac{$1}{$2}"
    )

    // ===== R\{1} =====
    .replace(
      /\\mathbb\{R\}\\\{([^}]*)\\\}/g,
      "\\mathbb{R}\\setminus\\{$1\\}"
    )

    .replace(
      /R\\\{([^}]*)\\\}/g,
      "\\mathbb{R}\\setminus\\{$1\\}"
    );
}

// Chỉ convert bên trong question, text, explanation, options, answer dạng string
content = content.replace(
  /"(.*?)"/gs,
  (match, inner) => {
    const converted = convertMath(inner);
    return `"${converted}"`;
  }
);

fs.writeFileSync(
  OUTPUT_FILE,
  content,
  "utf8"
);

console.log("✅ Convert hoàn tất!");
console.log(`📄 File mới: ${OUTPUT_FILE}`);