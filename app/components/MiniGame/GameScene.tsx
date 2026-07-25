"use client";

import {
    useEffect,
    useState,
} from "react";

import Player from "./Player";
import NPC from "./NPC";
import HUD from "./HUD";

export default function GameScene() {

   
const [playerX, setPlayerX] = useState(500);
const [playerY, setPlayerY] = useState(400);
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
                x={450}
                y={220}
                name="Giáo sư"
            />

          <Player
    x={playerX}
    y={playerY}
/>

        </div>
    );
}