"use client";

type Props = {
    x: number;
    y: number;
    name: string;
};

export default function NPC({
    x,
    y,
    name,
}: Props) {
    return (
        <div
            className="absolute"
            style={{
                left: x,
                top: y,
            }}
        >
            <img
                src="/images/npc.png"
                className="w-10 h-10"
            />

            <div
                className="
                text-xs
                text-white
                text-center
                "
            >
                {name}
            </div>
        </div>
    );
}