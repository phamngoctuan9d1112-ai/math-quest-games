const fs = require("fs");

const inputFile = "app/data/questions.ts";
const outputFile = "app/data/questions.converted.ts";

let content = fs.readFileSync(inputFile, "utf8");

function convertMath(text) {
  return text

    // phân số dạng (a+b)/(c+d)
    .replace(
      /\(([^()]+)\)\/\(([^()]+)\)/g,
      (_, a, b) => `$\\frac{${a}}{${b}}$`
    )

    // phân số dạng 3/5
    .replace(
      /(\d+)\/(\d+)/g,
      (_, a, b) => `$\\frac{${a}}{${b}}$`
    )

    // số mũ
    .replace(/x²/g, "$x^2$")
    .replace(/x³/g, "$x^3$")

    // ký hiệu Hy Lạp
    .replace(/π/g, "$\\pi$")
    .replace(/α/g, "$\\alpha$")
    .replace(/β/g, "$\\beta$")
    .replace(/γ/g, "$\\gamma$")
    .replace(/θ/g, "$\\theta$")

    // tập số
    .replace(/\bR\b/g, "$\\mathbb{R}$")
    .replace(/\bN\b/g, "$\\mathbb{N}$")
    .replace(/\bZ\b/g, "$\\mathbb{Z}$")
    .replace(/\bQ\b/g, "$\\mathbb{Q}$")

    // quan hệ tập hợp
    .replace(/∈/g, "$\\in$")
    .replace(/∉/g, "$\\notin$")
    .replace(/⊂/g, "$\\subset$")
    .replace(/⊆/g, "$\\subseteq$")
    .replace(/∩/g, "$\\cap$")
    .replace(/∪/g, "$\\cup$")

    // bất đẳng thức
    .replace(/≤/g, "$\\le$")
    .replace(/≥/g, "$\\ge$")

    // logic
    .replace(/⇒/g, "$\\Rightarrow$")
    .replace(/⇔/g, "$\\Leftrightarrow$")
    .replace(/∀/g, "$\\forall$")
    .replace(/∃/g, "$\\exists$")

    // lượng giác
    .replace(/\bsin\b/g, "$\\sin$")
    .replace(/\bcos\b/g, "$\\cos$")
    .replace(/\btan\b/g, "$\\tan$")
    .replace(/\bcot\b/g, "$\\cot$")

    // căn
    .replace(
      /√([a-zA-Z0-9]+)/g,
      (_, x) => `$\\sqrt{${x}}$`
    );
}

content = content.replace(
  /question:\s*"([\s\S]*?)"/g,
  (match, text) => {
    const converted = convertMath(text);
    return `question: "${converted}"`;
  }
);

content = content.replace(
  /text:\s*"([\s\S]*?)"/g,
  (match, text) => {
    const converted = convertMath(text);
    return `text: "${converted}"`;
  }
);

content = content.replace(
  /explanation:\s*"([\s\S]*?)"/g,
  (match, text) => {
    const converted = convertMath(text);
    return `explanation: "${converted}"`;
  }
);

fs.writeFileSync(outputFile, content);

console.log("✅ Created:", outputFile);