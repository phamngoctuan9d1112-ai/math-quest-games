"use client";

import MathText from "../MathText";

type QuestionCardProps = {
    question: any;
};

export default function QuestionCard({
    question,
}: QuestionCardProps) {

    if (!question) return null;

    return (
        <div
            className="
            max-w-3xl
            mx-auto
            mt-8
            text-center
            text-2xl
            font-bold
            "
        >
            <MathText text={question.question} />
        </div>
    );
}