"use client";

import { useEffect, useMemo, useState } from "react";

import Player from "./Player";
import NPC from "./NPC";
import HUD from "./HUD";
import QuestionModal from "./QuestionModal";
import {

canMove,

MAP_WIDTH,

MAP_HEIGHT,

} from "./collision";
import { npcQuestions } from "./questions";

const VIEW_WIDTH = 1366;
const VIEW_HEIGHT = 768;


const PLAYER_SPEED = 6;

export default function GameScene() {


const [playerX, setPlayerX] = useState(900);
const [playerY, setPlayerY] = useState(120);


const PLAYER_WIDTH = 40;
const PLAYER_HEIGHT = 52;

    const [completedNpc, setCompletedNpc] = useState<number[]>([]);

    const [currentNpc, setCurrentNpc] = useState<number | null>(null);

    const [showQuestion, setShowQuestion] = useState(false);

const cameraX = Math.max(
    0,
    Math.min(
        playerX - VIEW_WIDTH / 2,
        MAP_WIDTH - VIEW_WIDTH
    )
);

const cameraY = Math.max(
    0,
    Math.min(
        playerY - VIEW_HEIGHT / 2,
        MAP_HEIGHT - VIEW_HEIGHT
    )
);

useEffect(()=>{

    console.log(playerX,playerY);

},[playerX,playerY]);

    function tryMove(dx:number,dy:number){

    const nextX = playerX + dx;

    const nextY = playerY + dy;

   if (
    canMove(
        nextX,
        nextY,
        PLAYER_WIDTH
    )
) {

        setPlayerX(nextX);

        setPlayerY(nextY);

    }

}

useEffect(() => {

    function keyDown(e: KeyboardEvent) {

        switch (e.key) {

            case "w":
            case "W":
            case "ArrowUp":

                tryMove(0, -PLAYER_SPEED);

                break;

            case "s":
            case "S":
            case "ArrowDown":

                tryMove(0, PLAYER_SPEED);

                break;

            case "a":
            case "A":
            case "ArrowLeft":

                tryMove(-PLAYER_SPEED, 0);

                break;

            case "d":
            case "D":
            case "ArrowRight":

                tryMove(PLAYER_SPEED, 0);

                break;

        }

    }

    window.addEventListener(
        "keydown",
        keyDown
    );

    return () =>

        window.removeEventListener(
            "keydown",
            keyDown
        );

}, [playerX, playerY]);


   

    const nearNpc = useMemo(() => {

        return npcQuestions.find(n =>

            !completedNpc.includes(n.id) &&

            Math.abs(playerX - n.x) < 60 &&

            Math.abs(playerY - n.y) < 60

        );

    }, [playerX, playerY, completedNpc]);



    useEffect(() => {

        function talk(e: KeyboardEvent) {

            if (!nearNpc) return;

            if (e.key === "e" || e.key === "E") {

                setCurrentNpc(nearNpc.id);

                setShowQuestion(true);

            }

        }

        window.addEventListener("keydown", talk);

        return () => window.removeEventListener("keydown", talk);

    }, [nearNpc]);


    const npc = npcQuestions.find(n => n.id === currentNpc);



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

                    transform: `translate(${-cameraX}px,-${cameraY}px)`

                }}

            >

                <img

                    src="/images/minimap.png"

                    className="absolute left-0 top-0"

                    draggable={false}

                />

                {npcQuestions.map(n => (

                    <NPC

                        key={n.id}

                        x={n.x}

                        y={n.y}

                        completed={completedNpc.includes(n.id)}

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

            {npc && (

                <QuestionModal

                    open={showQuestion}

                    question={npc.question}

                    options={npc.options}

                    answer={npc.answer}

                    onClose={() => setShowQuestion(false)}

                    onCorrect={() => {

                        setCompletedNpc(prev => [...prev, npc.id]);

                        setShowQuestion(false);

                    }}

                />

            )}

        </div>

    );

}