const fs = require("fs");

const INPUT = "app/data/questions.ts";
const OUTPUT = "app/data/questions.converted.ts";

let raw = fs.readFileSync(INPUT, "utf8");

// =========================
// 1. CORE CONVERTER
// =========================
function convertMath(text = "") {
  return text

    // fractions trước (quan trọng)
    .replace(/\(([^()]+)\)\/\(([^()]+)\)/g, "\\frac{$1}{$2}")
    .replace(/(\d+)\/(\d+)/g, "\\frac{$1}{$2}")

    // roots
    .replace(/√(\w+)/g, "\\sqrt{$1}")

    // Greek
    .replace(/α/g, "\\alpha")
    .replace(/β/g, "\\beta")
    .replace(/γ/g, "\\gamma")
    .replace(/θ/g, "\\theta")
    .replace(/π/g, "\\pi")

    // sets
    .replace(/∈/g, "\\in")
    .replace(/∉/g, "\\notin")
    .replace(/⊂/g, "\\subset")
    .replace(/⊆/g, "\\subseteq")
    .replace(/∩/g, "\\cap")
    .replace(/∪/g, "\\cup")

    // logic
    .replace(/⇒/g, "\\Rightarrow")
    .replace(/⇔/g, "\\Leftrightarrow")
    .replace(/∀/g, "\\forall")
    .replace(/∃/g, "\\exists")

    // compare
    .replace(/≤/g, "\\le")
    .replace(/≥/g, "\\ge")
    .replace(/≠/g, "\\neq")

    // power
    .replace(/²/g, "^2")
    .replace(/³/g, "^3")

    // functions
    .replace(/\bsin\b/g, "\\sin")
    .replace(/\bcos\b/g, "\\cos")
    .replace(/\btan\b/g, "\\tan")
    .replace(/\bcot\b/g, "\\cot")

    // R \ {1}
    .replace(/R\\\{([^}]*)\\\}/g, "\\mathbb{R}\\setminus\\{$1\\}")

    // R, N, Z, Q
    .replace(/\bR\b/g, "\\mathbb{R}")
    .replace(/\bN\b/g, "\\mathbb{N}")
    .replace(/\bZ\b/g, "\\mathbb{Z}")
    .replace(/\bQ\b/g, "\\mathbb{Q}");
}

// =========================
// 2. FIND ALL STRINGS
// =========================
raw = raw.replace(
  /"(question|text|explanation|answer)"\s*:\s*"([^"]*)"/g,
  (match, key, value) => {
    return `"${key}": "$$${convertMath(value)}$$"`;
  }
);

// =========================
// 3. FIX DOUBLE WRAP
// =========================
raw = raw
  .replace(/\$\$\$\$/g, "$$")
  .replace(/\$\$\$\$/g, "$$");

// =========================
// 4. WRITE FILE
// =========================
fs.writeFileSync(OUTPUT, raw, "utf8");

console.log("✅ DONE: Math converted");
console.log("📄 File:", OUTPUT);