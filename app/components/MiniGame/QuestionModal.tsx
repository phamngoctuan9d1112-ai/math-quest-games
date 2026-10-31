"use client";

import { useEffect, useState } from "react";

type Props = {
    open: boolean;
    question: string;
    options: string[];
    answer: number;
    onCorrect: () => void;
    onClose: () => void;
};

export default function QuestionModal({
    open,
    question,
    options,
    answer,
    onClose,
    onCorrect,
}: Props) {

    // null = chưa chọn, "correct" / "wrong" = kết quả vừa chọn
    const [result, setResult] = useState<null | "correct" | "wrong">(null);
    const [picked, setPicked] = useState<number | null>(null);

    // Mở câu hỏi mới thì xoá kết quả cũ
    useEffect(() => {
        setResult(null);
        setPicked(null);
    }, [open, question]);

    function choose(index: number) {
        if (result === "correct") return;

        setPicked(index);
        setResult(index === answer ? "correct" : "wrong");
    }

    function finish() {
        onCorrect();
        onClose();
    }

    // Phím 1-4 để chọn nhanh, Enter để tiếp tục
    useEffect(() => {
        if (!open) return;

        function onKey(e: KeyboardEvent) {
            if (result === "correct" && e.key === "Enter") {
                finish();
                return;
            }
            const n = Number(e.key);
            if (n >= 1 && n <= options.length) choose(n - 1);
        }

        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    });

    if (!open) return null;

    return (

        <div
            className="
            absolute
            inset-0
            bg-black/70
            flex
            items-center
            justify-center
            z-50
            p-4
            "
        >

            <div
                className="
                bg-zinc-900
                rounded-2xl
                p-6
                sm:p-8
                w-[600px]
                max-w-full
                "
            >

                <h2 className="text-2xl font-bold text-white mb-6">

                    📖 Câu hỏi

                </h2>

                <div className="text-white text-lg mb-6">

                    {question}

                </div>

                <div className="space-y-3">

                    {options.map((item, index) => {
                        const isPicked = picked === index;
                        const color =
                            isPicked && result === "correct"
                                ? "bg-green-600"
                                : isPicked && result === "wrong"
                                    ? "bg-red-600"
                                    : "bg-zinc-700 hover:bg-blue-600";

                        return (
                            <button
                                key={index}
                                onClick={() => choose(index)}
                                disabled={result === "correct"}
                                className={`
                                w-full
                                ${color}
                                py-3
                                rounded-xl
                                text-white
                                cursor-pointer
                                `}
                            >

                                {index + 1}. {item}

                            </button>
                        );
                    })}

                </div>

                {result === "wrong" && (
                    <p className="mt-5 text-red-400 font-semibold">
                        ❌ Chưa đúng, hãy thử lại nhé!
                    </p>
                )}

                {result === "correct" && (
                    <div className="mt-5">
                        <p className="text-green-400 font-semibold">
                            🎉 Chính xác!
                        </p>

                        <button
                            onClick={finish}
                            className="
                            mt-3
                            w-full
                            bg-green-600
                            hover:bg-green-700
                            py-3
                            rounded-xl
                            text-white
                            font-bold
                            cursor-pointer
                            "
                        >
                            Tiếp tục
                        </button>
                    </div>
                )}

                {result !== "correct" && (
                    <button
                        onClick={onClose}
                        className="mt-5 text-sm text-gray-400 hover:text-white cursor-pointer"
                    >
                        Để sau (Esc)
                    </button>
                )}

            </div>

        </div>

    );

}
