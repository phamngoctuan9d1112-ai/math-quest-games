"use client";

type WorldInfoProps = {
    selectedWorld: number | null;
    currentSubNode: number | null;

    setCurrent: React.Dispatch<
        React.SetStateAction<number>
    >;

    setTfAnswers: React.Dispatch<
        React.SetStateAction<
            Record<string, "Đúng" | "Sai">
        >
    >;

    setShortAnswer: React.Dispatch<
        React.SetStateAction<string>
    >;

    setShowExplanation: React.Dispatch<
        React.SetStateAction<boolean>
    >;

    setSelectedSubMap: React.Dispatch<
        React.SetStateAction<number | null>
    >;

    setCurrentSubNode: React.Dispatch<
        React.SetStateAction<number | null>
    >;
};
export default function WorldInfo({

    selectedWorld,

    currentSubNode,

    setCurrent,

    setTfAnswers,

    setShortAnswer,

    setShowExplanation,

    setSelectedSubMap,

    setCurrentSubNode,

}: WorldInfoProps) {

    return (

<>
    <p className="text-center mt-4 text-sm font-semibold text-indigo-600">
        🌍 World {selectedWorld} - Chặng {currentSubNode}
    </p>

    <div className="flex justify-center mt-2">
        <button
            onClick={() => {

                setCurrent(0);

                setTfAnswers({});

                setShortAnswer("");

                setShowExplanation(false);

                setSelectedSubMap(selectedWorld);

                setCurrentSubNode(null);

            }}
            className="
                bg-slate-600
                hover:bg-slate-700
                text-white
                px-4
                py-2
                rounded-xl
                text-sm
                font-bold
                transition
            "
        >
            ⬅️ Quay lại chọn chặng
        </button>
    </div>
</>

);

}