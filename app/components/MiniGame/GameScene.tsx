"use client";

import { useEffect, useState } from "react";

import Player from "./Player";
import NPC from "./NPC";
import HUD from "./HUD";
import QuestionModal from "./QuestionModal";

import { npcQuestions } from "./questions";

export default function GameScene() {

const [completedCount, setCompletedCount] =
useState(0);

    const [playerX, setPlayerX] = useState(500);
    const [playerY, setPlayerY] = useState(450);


    const [currentNpc, setCurrentNpc] =
        useState<number | null>(null);

    const [showQuestion, setShowQuestion] =
        useState(false);
const VIEW_WIDTH = 1366;
const VIEW_HEIGHT = 768;

const MAP_WIDTH = 3000;
const MAP_HEIGHT = 2000;

const cameraX = Math.min(
    Math.max(playerX - VIEW_WIDTH / 2, 0),
    MAP_WIDTH - VIEW_WIDTH
);

const cameraY = Math.min(
    Math.max(playerY - VIEW_HEIGHT / 2, 0),
    MAP_HEIGHT - VIEW_HEIGHT
);
    const [completedNpc, setCompletedNpc] =
        useState<number[]>([]);


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


    const npc =
        npcQuestions.find(
            n => n.id === currentNpc
        );



    const nearNpc =
        npcQuestions.find(n => {

            return (

                Math.abs(playerX - n.x) < 70 &&
                Math.abs(playerY - n.y) < 70 &&
                !completedNpc.includes(n.id)

            );

        });



    return (

        <div
            className="
            relative
            w-full
            h-full
            overflow-hidden
            "
        >
<div
    className="
    absolute
    "
    style={{
        left: -cameraX,
        top: -cameraY,
    }}
>

    <img
        src="/images/minimap.png"
    />

</div>

            <HUD world={1} />

            

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

x={VIEW_WIDTH/2}

y={VIEW_HEIGHT/2}

/>

            {/* Gợi ý */}

            {nearNpc && (

                <div
                    className="
                    absolute
                    bottom-10
                    style={{

left:VIEW_WIDTH/2,

top:VIEW_HEIGHT/2+80

}}
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

    setCompletedNpc(prev=>[

        ...prev,

        npc.id

    ]);

    setCompletedCount(c=>c+1);

    setShowQuestion(false);

}}

                />

            )}

        </div>

    );

}