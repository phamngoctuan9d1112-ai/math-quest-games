const fs = require('fs');
const path = require('path');

// Định nghĩa đường dẫn đến thư mục chứa câu hỏi
const targetDir = path.join(__dirname, 'src', 'data', 'question');

// Tự động tạo thư mục nếu chưa tồn tại
if (!fs.existsSync(targetDir)){
    fs.mkdirSync(targetDir, { recursive: true });
}

// Chạy vòng lặp tạo 79 file tương ứng với 79 World
for (let w = 1; w <= 79; w++) {
    let grade = 10;
    if (w >= 27 && w <= 61) grade = 11;
    if (w >= 62) grade = 12;

    const template = {
        worldId: w,
        grade: grade,
        stages: {
            stage1: { type: "multiple_choice", questions: [] },
            stage2: { type: "true_false", questions: [] },
            stage3: { type: "short_answer", questions: [] }
        }
    };

    fs.writeFileSync(
        path.join(targetDir, `world-${w}.json`), 
        JSON.stringify(template, null, 2), 
        'utf-8'
    );
}
console.log("✅ Đã khởi tạo thành công 79 file JSON trống tại src/data/question/");