"use client";

import { useCallback, useState } from "react";
import GameScene from "./GameScene";
import { quest } from "./quests";
import { MINIGAME_REWARD } from "../rewards";

type Props = {
    onClose: () => void;
    // Hôm nay còn được nhận thưởng không (mỗi ngày 1 lần)
    rewardAvailable?: boolean;
    // Gọi khi người chơi hoàn thành nhiệm vụ và được nhận thưởng
    onReward?: (reward: { xp: number; coins: number }) => void;
};

export default function MiniGame({
    onClose,
    rewardAvailable = false,
    onReward,
}: Props) {

    const [done, setDone] = useState(false);
    const [gotReward, setGotReward] = useState(false);
    const [round, setRound] = useState(0);

    const handleComplete = useCallback(() => {
        setDone(true);

        if (rewardAvailable) {
            setGotReward(true);
            onReward?.(MINIGAME_REWARD);
        }
    }, [rewardAvailable, onReward]);

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
                cursor-pointer
                "
            >
                Thoát
            </button>

            <GameScene
                key={round}
                onComplete={handleComplete}
                onExit={onClose}
            />

            {done && (
                <div className="absolute inset-0 z-[60] bg-black/80 flex items-center justify-center p-4">
                    <div className="bg-zinc-900 text-white rounded-2xl p-8 w-[480px] max-w-full text-center">
                        <h2 className="text-3xl font-black">🎉 Hoàn thành!</h2>

                        <p className="mt-3 text-gray-300">{quest.title}</p>

                        {gotReward ? (
                            <p className="mt-5 text-yellow-300 font-bold text-xl">
                                +{MINIGAME_REWARD.xp} XP · +{MINIGAME_REWARD.coins} 🪙
                            </p>
                        ) : (
                            <p className="mt-5 text-gray-400">
                                Hôm nay bạn đã nhận thưởng mini game rồi. Quay lại vào ngày mai nhé!
                            </p>
                        )}

                        <div className="mt-8 flex gap-3">
                            <button
                                onClick={() => {
                                    setDone(false);
                                    setGotReward(false);
                                    setRound(r => r + 1);
                                }}
                                className="flex-1 bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-bold cursor-pointer"
                            >
                                Chơi lại
                            </button>

                            <button
                                onClick={onClose}
                                className="flex-1 bg-red-600 hover:bg-red-700 py-3 rounded-xl font-bold cursor-pointer"
                            >
                                Thoát
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
