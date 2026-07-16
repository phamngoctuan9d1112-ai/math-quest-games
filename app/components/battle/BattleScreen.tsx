"use client";
import StatusBar from "../StatusBar";

type BattleScreenProps = {
  hearts: number;
  coins: number;
  xp: number;
};

export default function BattleScreen({
  hearts,
  coins,
  xp,
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

<h1 className="text-4xl font-bold mb-6">
⚔️ Battle
</h1>


<StatusBar
    hearts={hearts}
    coins={coins}
    xp={xp}
/>


</div>

);
}