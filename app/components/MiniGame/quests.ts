import { npcQuestions } from "./questions";

export const quest = {
    title: "Giúp trưởng làng",

    description:
        "Trả lời đúng toàn bộ câu hỏi của các NPC.",

    // Tự lấy theo số NPC thật (trước đây ghi cứng 5 nhưng chỉ có 4 NPC)
    total: npcQuestions.length,
};
