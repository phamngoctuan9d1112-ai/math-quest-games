"use client";

import { useEffect, useState } from "react";

import Player from "./Player";
import NPC from "./NPC";
import HUD from "./HUD";
import QuestionModal from "./QuestionModal";

import { npcQuestions } from "./questions";

export default function GameScene() {

    //----------------------------------------
    // Player
    //----------------------------------------

    const [playerX, setPlayerX] = useState(500);
    const [playerY, setPlayerY] = useState(450);

    //----------------------------------------
    // NPC
    //----------------------------------------

    const [currentNpc, setCurrentNpc] =
        useState<number | null>(null);

    const [showQuestion, setShowQuestion] =
        useState(false);

    const [completedNpc, setCompletedNpc] =
        useState<number[]>([]);

    //----------------------------------------
    // Di chuyển
    //----------------------------------------

    useEffect(() => {

        function handleKey(e: KeyboardEvent) {

            const speed = 8;

            switch (e.key) {

                case "ArrowUp":
                case "w":
                case "W":
                    setPlayerY(y => y - speed);
                    break;

                case "ArrowDown":
                case "s":
                case "S":
                    setPlayerY(y => y + speed);
                    break;

                case "ArrowLeft":
                case "a":
                case "A":
                    setPlayerX(x => x - speed);
                    break;

                case "ArrowRight":
                case "d":
                case "D":
                    setPlayerX(x => x + speed);
                    break;

            }

        }

        window.addEventListener(
            "keydown",
            handleKey
        );

        return () =>
            window.removeEventListener(
                "keydown",
                handleKey
            );

    }, []);

    //----------------------------------------
    // Nhấn E
    //----------------------------------------

    useEffect(() => {

        function handleE(e: KeyboardEvent) {

            if (e.key !== "e" && e.key !== "E")
                return;

            const npc = npcQuestions.find(n => {

                return (

                    Math.abs(playerX - n.x) < 70 &&
                    Math.abs(playerY - n.y) < 70 &&
                    !completedNpc.includes(n.id)

                );

            });

            if (!npc) return;

            setCurrentNpc(npc.id);

            setShowQuestion(true);

        }

        window.addEventListener(
            "keydown",
            handleE
        );

        return () =>
            window.removeEventListener(
                "keydown",
                handleE
            );

    }, [playerX, playerY, completedNpc]);

    //----------------------------------------
    // NPC hiện tại
    //----------------------------------------

    const npc =
        npcQuestions.find(
            n => n.id === currentNpc
        );

    //----------------------------------------
    // NPC gần nhất
    //----------------------------------------

    const nearNpc =
        npcQuestions.find(n => {

            return (

                Math.abs(playerX - n.x) < 70 &&
                Math.abs(playerY - n.y) < 70 &&
                !completedNpc.includes(n.id)

            );

        });

    //----------------------------------------
    // Render
    //----------------------------------------

    return (

        <div
            className="
            relative
            w-full
            h-full
            overflow-hidden
            "
        >

            <img
                src="/images/minimap.png"
                className="
                absolute
                inset-0
                w-full
                h-full
                object-cover
                "
            />

            <HUD world={1} />

            {/* NPC */}

            {npcQuestions.map(n => (

                <NPC
                    key={n.id}
                    x={n.x}
                    y={n.y}
                    completed={
                        completedNpc.includes(n.id)
                    }
                />

            ))}

            {/* Player */}

            <Player
                x={playerX}
                y={playerY}
            />

            {/* Gợi ý */}

            {nearNpc && (

                <div
                    className="
                    absolute
                    bottom-10
                    left-1/2
                    -translate-x-1/2

                    bg-black/80

                    text-white

                    px-5
                    py-3

                    rounded-xl
                    "
                >

                    Nhấn E để nói chuyện

                </div>

            )}

            {/* Modal */}

            {npc && (

                <QuestionModal

                    open={showQuestion}

                    question={npc.question}

                    options={npc.options}

                    answer={npc.answer}

                    onClose={() => {

                        setShowQuestion(false);

                    }}

                    onCorrect={() => {

                        setCompletedNpc(prev => [

                            ...prev,

                            npc.id,

                        ]);

                        setShowQuestion(false);

                    }}

                />

            )}

        </div>

    );

}