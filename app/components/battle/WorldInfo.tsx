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

<div
className="
mt-3

rounded-2xl

border
border-yellow-500

bg-[#102033]

shadow-[0_0_15px_rgba(255,210,70,.2)]

p-3

sm:p-4
"
>

    {/* World */}

    <div
    className="
    flex
    items-center
    justify-between
    "
    >

        <div>

            <p
            className="
            text-yellow-300

            text-sm

            sm:text-base

            font-bold
            "
            >
                🌍 World {selectedWorld}
            </p>

            <p
            className="
            text-gray-300

            text-xs

            sm:text-sm
            "
            >
                Chặng {currentSubNode}
            </p>

        </div>
</div>

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
    px-3
    py-2

    rounded-xl

    bg-[#20344d]

    border
    border-yellow-500

    text-yellow-300

    text-xs

    sm:text-sm

    font-bold

    hover:bg-[#2a4565]

    transition
    "
>
    ⬅ Quay lại
</button>
    </div>
    
    </div>

);
}