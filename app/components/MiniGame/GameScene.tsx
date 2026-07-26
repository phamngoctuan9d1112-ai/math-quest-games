"use client";

import { useEffect, useMemo, useState } from "react";

import Player from "./Player";
import NPC from "./NPC";
import HUD from "./HUD";
import QuestionModal from "./QuestionModal";
import { npcQuestions } from "./questions";
import { walls } from "./collision";
import { loadCollision } from "./CollisionLoader";
const VIEW_WIDTH = 1366;
const VIEW_HEIGHT = 768;

const MAP_WIDTH = 3000;
const MAP_HEIGHT = 2000;

export default function GameScene() {



    const [playerX, setPlayerX] = useState(700);
    const [playerY, setPlayerY] = useState(470);
const [collisionCtx, setCollisionCtx] =
useState<CanvasRenderingContext2D | null>(null);

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

function isBlocked(
    nextX:number,
    nextY:number
){

    const playerSize=50;

    return walls.some(w=>{

        return (

            nextX+playerSize>w.x &&

            nextX<w.x+w.width &&

            nextY+playerSize>w.y &&

            nextY<w.y+w.height

        );

    });

}
useEffect(() => {

    loadCollision().then(setCollisionCtx);

}, []);
function canMove(x: number, y: number) {

    if (!collisionCtx) return false;

    const pixel =
        collisionCtx
        .getImageData(
            Math.floor(x),
            Math.floor(y),
            1,
            1
        ).data;

    // pixel trắng
    return (
        pixel[0] > 200 &&
        pixel[1] > 200 &&
        pixel[2] > 200
    );

}
  

        function handleKey(e: KeyboardEvent) {

    const speed = 8;

    switch (e.key) {

        case "ArrowUp":
        case "w":
        case "W": {

            const nextY = playerY - speed;

            if (canMove(playerX, nextY)) {

                setPlayerY(nextY);

            }

            break;
        }

        case "ArrowDown":
        case "s":
        case "S": {

            const nextY = playerY + speed;

            if (canMove(playerX, nextY)) {

                setPlayerY(nextY);

            }

            break;
        }

        case "ArrowLeft":
        case "a":
        case "A": {

            const nextX = playerX - speed;

            if (canMove(nextX, playerY)) {

                setPlayerX(nextX);

            }

            break;
        }

        case "ArrowRight":
        case "d":
        case "D": {

            const nextX = playerX + speed;

            if (canMove(nextX, playerY)) {

                setPlayerX(nextX);

            }

            break;
        }

    }
}
       



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