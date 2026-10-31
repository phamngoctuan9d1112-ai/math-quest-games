"use client";

type Props = {
    world: number;
    title?: string;
    done?: number;
    total?: number;
    debugText?: string;
};

export default function HUD({
    world,
    title,
    done,
    total,
    debugText,
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
            z-40
            space-y-1
            "
        >
            <div>🌍 World {world}</div>

            {title && total !== undefined && (
                <div className="text-sm font-semibold text-yellow-300">
                    📜 {title}: {done ?? 0}/{total}
                </div>
            )}

            {debugText && (
                <div className="text-xs font-mono text-green-300">{debugText}</div>
            )}
        </div>
    );
}
