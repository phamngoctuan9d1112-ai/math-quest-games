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

   const [showQuestion, setShowQuestion] =
    useState(false);
const npcX = 500;
const npcY = 350;

const [playerX, setPlayerX] = useState(500);
const [playerY, setPlayerY] = useState(400);
const nearNpc =

Math.abs(playerX - npcX) < 70 &&

Math.abs(playerY - npcY) < 70;
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

            <NPC

x={npcX}

y={npcY}

/>
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
          <Player
    x={playerX}
    y={playerY}
/>

        </div>
    );
}