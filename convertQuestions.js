const fs = require("fs");

let content = fs.readFileSync("./app/data/questions.ts", "utf8");

// ví dụ convert
content = content.replace(/sinα/g, "$\\sin\\alpha$");

fs.writeFileSync("./app/data/questions.ts", content);

console.log("Done");