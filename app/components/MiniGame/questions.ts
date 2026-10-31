export type NPCQuestion = {
    id: number;

    x: number;
    y: number;

    question: string;

    options: string[];

    answer: number;
};

export const npcQuestions: NPCQuestion[] = [

    {
        id: 1,

        x: 556,
        y: 492,

        question: "2 + 2 bằng bao nhiêu?",

        options: [
            "3",
            "4",
            "5",
            "6",
        ],

        answer: 1,
    },

    {
        id: 2,

        x: 888,
        y: 348,

        question: "5 × 5 bằng bao nhiêu?",

        options: [
            "20",
            "25",
            "30",
            "15",
        ],

        answer: 1,
    },

    {
        id: 3,

        x: 1212,
        y: 568,

        question: "10 − 4 bằng bao nhiêu?",

        options: [
            "4",
            "5",
            "6",
            "8",
        ],

        answer: 2,
    },

    {
        id: 4,

        x: 1332,
        y: 696,

        question: "√16 bằng?",

        options: [
            "2",
            "3",
            "4",
            "5",
        ],

        answer: 2,
    },

];