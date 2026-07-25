"use client";

import { PauseMenuProps } from "./types";

export default function PauseMenu({
    onResume,
    onExit,
}: PauseMenuProps) {
    return (
        <div
            className="
            absolute
            inset-0
            bg-black/60
            flex
            items-center
            justify-center
            "
        >
            <div
                className="
                bg-zinc-900
                rounded-xl
                p-8
                flex
                flex-col
                gap-4
                "
            >
                <button
                    onClick={onResume}
                    className="
                    bg-blue-600
                    text-white
                    px-6
                    py-3
                    rounded-lg
                    "
                >
                    Tiếp tục
                </button>

                <button
                    onClick={onExit}
                    className="
                    bg-red-600
                    text-white
                    px-6
                    py-3
                    rounded-lg
                    "
                >
                    Thoát
                </button>
            </div>
        </div>
    );
}