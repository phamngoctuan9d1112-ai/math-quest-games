"use client";

import {
    useEffect,
    useState,
} from "react";

import Player from "./Player";
import NPC from "./NPC";
import HUD from "./HUD";
import QuestionModal from "./QuestionModal";
export default function GameScene() {


const npcX = 490;
const npcY = 500;
const [npcCompleted, setNpcCompleted] =
    useState(false);
const [playerX, setPlayerX] = useState(500);
const [playerY, setPlayerY] = useState(400);
const nearNpc =

Math.abs(playerX - npcX) < 70 &&

Math.abs(playerY - npcY) < 70;
const [showQuestion, setShowQuestion] = useState(false);  
useEffect(() => {
  function handleKey(e: KeyboardEvent) {
    const speed = 8;

    switch (e.key) {
      case "ArrowUp":
      case "w":
      case "W":
        setPlayerY((y) => y - speed);
        break;

      case "ArrowDown":
      case "s":
      case "S":
        setPlayerY((y) => y + speed);
        break;

      case "ArrowLeft":
      case "a":
      case "A":
        setPlayerX((x) => x - speed);
        break;

      case "ArrowRight":
      case "d":
      case "D":
        setPlayerX((x) => x + speed);
        break;
    }
  }

  window.addEventListener("keydown", handleKey);

  return () =>
    window.removeEventListener(
      "keydown",
      handleKey
    );
}, []);

useEffect(() => {

    function handleE(
        e: KeyboardEvent
    ){

        if(
            (e.key==="e" || e.key==="E")
            && nearNpc
        ){

            setShowQuestion(true);

        }

    }

    window.addEventListener(
        "keydown",
        handleE
    );

    return ()=>{

        window.removeEventListener(
            "keydown",
            handleE
        );

    };

}, [nearNpc]);

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

           {!npcCompleted && (

<NPC
    x={npcX}
    y={npcY}
/>

)}
{nearNpc && !npcCompleted && (

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
          <Player
    x={playerX}
    y={playerY}
/>

<QuestionModal
    open={showQuestion}

    question="2 + 2 bằng bao nhiêu?"

    options={[
        "3",
        "4",
        "5",
        "6",
    ]}

    answer={1}

    onClose={()=>{
        setShowQuestion(false);
    }}

    onCorrect={()=>{
        setNpcCompleted(true);
        setShowQuestion(false);
    }}
/>

        </div>
    );
}