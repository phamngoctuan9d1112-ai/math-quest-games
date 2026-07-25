"use client";

import GameScene from "./GameScene";

type Props = {
    onClose: () => void;
};

export default function MiniGame({
    onClose,
}: Props) {
    return (
        <div
            className="
            fixed
            inset-0
            bg-black
            z-[9999]
            "
        >
            <button
                onClick={onClose}
                className="
                absolute
                top-5
                right-5
                bg-red-600
                px-4
                py-2
                rounded-xl
                text-white
                z-50
                "
            >
                Thoát
            </button>

            <GameScene />
        </div>
    );
}