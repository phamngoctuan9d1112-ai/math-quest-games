"use client";

import { useState } from "react";

import GameScene from "./GameScene";
import HUD from "./HUD";
import PauseMenu from "./PauseMenu";

import { MiniGameProps } from "./types";

export default function MiniGame({
    onClose,
}: MiniGameProps) {

    const [paused, setPaused] = useState(false);

    return (

        <div
            className="
            fixed
            inset-0
            z-[99999]
            bg-black
            flex
            flex-col
            "
        >

            <HUD
                hp={5}
                coins={0}
            />

            <GameScene />

            <div
                className="
                h-16
                bg-zinc-900
                border-t
                border-zinc-700
                flex
                items-center
                justify-between
                px-6
                "
            >

                <button
                    onClick={() => setPaused(true)}
                    className="
                    bg-blue-600
                    hover:bg-blue-700
                    text-white
                    px-5
                    py-2
                    rounded-lg
                    "
                >
                    ⏸ Tạm dừng
                </button>

                <button
                    onClick={onClose}
                    className="
                    bg-red-600
                    hover:bg-red-700
                    text-white
                    px-5
                    py-2
                    rounded-lg
                    "
                >
                    ❌ Thoát
                </button>

            </div>

            {paused && (

                <PauseMenu

                    onResume={() => setPaused(false)}

                    onExit={onClose}

                />

            )}

        </div>

    );

}