"use client";

import { HUDProps } from "./types";

export default function HUD({
    hp,
    coins,
}: HUDProps) {
    return (
        <div
            className="
            h-16
            bg-zinc-900
            border-b
            border-zinc-700
            flex
            items-center
            justify-between
            px-6
            text-white
            "
        >
            <div>

                ❤️ {hp}

            </div>

            <div>

                🪙 {coins}

            </div>
        </div>
    );
}