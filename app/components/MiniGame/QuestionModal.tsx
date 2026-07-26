"use client";

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

    if (!open) return null;

  function choose(index: number) {

    if (index === answer) {

        alert("🎉 Chính xác!");

        onClose();

        onCorrect();

    } else {

        alert("❌ Sai rồi!");

        onClose();

    }


    }

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
            "
        >

            <div
                className="
                bg-zinc-900
                rounded-2xl
                p-8
                w-[600px]
                "
            >

                <h2 className="text-2xl font-bold text-white mb-6">

                    📖 Câu hỏi

                </h2>

                <div className="text-white mb-6">

                    {question}

                </div>

                <div className="space-y-3">

                   {options.map((item, index) => (

    <button
        key={item}
                            onClick={() => choose(index)}

                            className="
                            w-full
                            bg-zinc-700
                            hover:bg-blue-600
                            py-3
                            rounded-xl
                            text-white
                            "
                        >

                            {item}

                        </button>

                    ))}

                </div>

            </div>

        </div>

    );

}