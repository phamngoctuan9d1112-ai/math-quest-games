"use client";

import { useEffect, useMemo, useState } from "react";

import Player from "./Player";
import NPC from "./NPC";
import HUD from "./HUD";
import QuestionModal from "./QuestionModal";
import {

    loadCollisionMap,

    canMove,

} from "./collision";
import { npcQuestions } from "./questions";

const VIEW_WIDTH = 1366;
const VIEW_HEIGHT = 768;
import {

MAP_WIDTH,

MAP_HEIGHT,

} from "./collision";

const PLAYER_SPEED = 6;

export default function GameScene() {

    //---------------------------------------------------
    // PLAYER
    //---------------------------------------------------

    const [playerX, setPlayerX] = useState(630);
    const [playerY, setPlayerY] = useState(470);

    //---------------------------------------------------
    // NPC
    //---------------------------------------------------

    const [completedNpc, setCompletedNpc] = useState<number[]>([]);

    const [currentNpc, setCurrentNpc] = useState<number | null>(null);

    const [showQuestion, setShowQuestion] = useState(false);

    //---------------------------------------------------
    // CAMERA
    //---------------------------------------------------

    const cameraX = Math.min(
        Math.max(playerX - VIEW_WIDTH / 2, 0),
        Math.max(MAP_WIDTH - VIEW_WIDTH, 0)
    );

    const cameraY = Math.min(
        Math.max(playerY - VIEW_HEIGHT / 2, 0),
        Math.max(MAP_HEIGHT - VIEW_HEIGHT, 0)
    );

    //---------------------------------------------------
    // MOVE
    //---------------------------------------------------
useEffect(()=>{

    loadCollisionMap();

},[]);
   useEffect(() => {

    function move(e: KeyboardEvent) {

        let nextX = playerX;

        let nextY = playerY;

        switch (e.key) {

            case "ArrowUp":
            case "w":
            case "W":

                nextY -= PLAYER_SPEED;

                break;

            case "ArrowDown":
            case "s":
            case "S":

                nextY += PLAYER_SPEED;

                break;

            case "ArrowLeft":
            case "a":
            case "A":

                nextX -= PLAYER_SPEED;

                break;

            case "ArrowRight":
            case "d":
            case "D":

                nextX += PLAYER_SPEED;

                break;

            default:
                return;

        }

        //----------------------------------
        // kiểm tra collision
        //----------------------------------

        const left = nextX + 12;

        const right = nextX + 38;

        const top = nextY + 12;

        const bottom = nextY + 48;

        if (

            canMove(left, top) &&

            canMove(right, top) &&

            canMove(left, bottom) &&

            canMove(right, bottom)

        ) {

            setPlayerX(nextX);

            setPlayerY(nextY);

        }

    }

    window.addEventListener("keydown", move);

    return () =>

        window.removeEventListener("keydown", move);

}, [playerX, playerY]);

    //---------------------------------------------------
    // NPC gần người chơi
    //---------------------------------------------------

    const nearNpc = useMemo(() => {

        return npcQuestions.find(n =>

            !completedNpc.includes(n.id) &&

            Math.abs(playerX - n.x) < 60 &&

            Math.abs(playerY - n.y) < 60

        );

    }, [playerX, playerY, completedNpc]);

    //---------------------------------------------------
    // E TALK
    //---------------------------------------------------

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

    //---------------------------------------------------
    // CURRENT NPC
    //---------------------------------------------------

    const npc = npcQuestions.find(n => n.id === currentNpc);

    //---------------------------------------------------
    // RENDER
    //---------------------------------------------------

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