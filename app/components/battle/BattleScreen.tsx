"use client";
import StatusBar from "../StatusBar";
import BattleHeader from "./BattleHeader";

type BattleScreenProps = {

    hearts:number;

    coins:number;

    xp:number;

    musicOn:boolean;

    setMusicOn:React.Dispatch<React.SetStateAction<boolean>>;

}

export default function BattleScreen({
  hearts,

    coins,

    xp,

    musicOn,

    setMusicOn,
}: BattleScreenProps) {
  return (

<div
className="
min-h-screen
bg-slate-900
p-8
text-white
"
>

<BattleHeader
    musicOn={musicOn}
    setMusicOn={setMusicOn}
/>


<StatusBar
    hearts={hearts}
    coins={coins}
    xp={xp}
/>


</div>

);
}