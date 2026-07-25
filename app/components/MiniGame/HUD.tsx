"use client";

type Props = {
    world: number;
};

export default function HUD({
    world,
}: Props) {
    return (
        <div
            className="
            absolute
            top-5
            left-5
            bg-black/60
            rounded-xl
            px-4
            py-2
            text-white
            font-bold
            z-50
            "
        >
            🌍 World {world}
        </div>
    );
}