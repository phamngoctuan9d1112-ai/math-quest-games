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

        x: 470,
        y: 460,

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

        x: 820,
        y: 350,

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

        x: 1200,
        y: 500,

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

        x: 1500,
        y: 750,

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