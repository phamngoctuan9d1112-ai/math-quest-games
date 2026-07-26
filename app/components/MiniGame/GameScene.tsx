"use client";

import { useEffect, useMemo, useState } from "react";

import Player from "./Player";
import NPC from "./NPC";
import HUD from "./HUD";
import QuestionModal from "./QuestionModal";
import { npcQuestions } from "./questions";

const VIEW_WIDTH = 1366;
const VIEW_HEIGHT = 768;

const MAP_WIDTH = 3000;
const MAP_HEIGHT = 2000;

export default function GameScene() {



    const [playerX, setPlayerX] = useState(500);
    const [playerY, setPlayerY] = useState(500);


    const [completedNpc, setCompletedNpc] =
        useState<number[]>([]);

    const [currentNpc, setCurrentNpc] =
        useState<number | null>(null);

    const [showQuestion, setShowQuestion] =
        useState(false);


    const cameraX = Math.min(
        Math.max(playerX - VIEW_WIDTH / 2, 0),
        MAP_WIDTH - VIEW_WIDTH
    );

    const cameraY = Math.min(
        Math.max(playerY - VIEW_HEIGHT / 2, 0),
        MAP_HEIGHT - VIEW_HEIGHT
    );


    useEffect(() => {

        function key(e: KeyboardEvent) {

            const speed = 8;

            switch (e.key) {

                case "ArrowUp":
                case "w":
                case "W":

                    setPlayerY(y =>
                        Math.max(0, y - speed)
                    );

                    break;

                case "ArrowDown":
                case "s":
                case "S":

                    setPlayerY(y =>
                        Math.min(MAP_HEIGHT, y + speed)
                    );

                    break;

                case "ArrowLeft":
                case "a":
                case "A":

                    setPlayerX(x =>
                        Math.max(0, x - speed)
                    );

                    break;

                case "ArrowRight":
                case "d":
                case "D":

                    setPlayerX(x =>
                        Math.min(MAP_WIDTH, x + speed)
                    );

                    break;
            }

        }

        window.addEventListener("keydown", key);

        return () =>
            window.removeEventListener("keydown", key);

    }, []);



    const nearNpc = useMemo(() => {

        return npcQuestions.find(n =>

            Math.abs(playerX - n.x) < 70 &&
            Math.abs(playerY - n.y) < 70 &&
            !completedNpc.includes(n.id)

        );

    }, [playerX, playerY, completedNpc]);


    useEffect(() => {

        function handleE(e: KeyboardEvent) {

            if (!nearNpc) return;

            if (e.key === "e" || e.key === "E") {

                setCurrentNpc(nearNpc.id);

                setShowQuestion(true);

            }

        }

        window.addEventListener("keydown", handleE);

        return () =>
            window.removeEventListener(
                "keydown",
                handleE
            );

    }, [nearNpc]);

 

    const npc =
        npcQuestions.find(
            n => n.id === currentNpc
        );

 

    return (

        <div
            className="
            relative
            w-full
            h-full
            overflow-hidden
            bg-black
            "
        >

            

            <div
                className="absolute"
                style={{

                    width: MAP_WIDTH,

                    height: MAP_HEIGHT,

                    transform:
                        `translate(${-cameraX}px,${-cameraY}px)`

                }}
            >

                
                <img

                    src="/images/minimap.png"

                    className="
                    absolute
                    left-0
                    top-0
                    w-full
                    h-full
                    select-none
                    pointer-events-none
                    "

                />

                

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

              

                <Player

                    x={playerX}

                    y={playerY}

                />

            </div>

            

            <HUD world={1} />

            

            {nearNpc && (

                <div

                    className="
                    absolute
                    left-1/2
                    bottom-10
                    -translate-x-1/2

                    bg-black/70

                    px-6

                    py-3

                    rounded-xl

                    text-white

                    font-bold
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

                    onClose={() =>
                        setShowQuestion(false)
                    }

                    onCorrect={() => {

                        setCompletedNpc(prev => [

                            ...prev,

                            npc.id

                        ]);

                        setShowQuestion(false);

                    }}

                />

            )}

        </div>

    );

}