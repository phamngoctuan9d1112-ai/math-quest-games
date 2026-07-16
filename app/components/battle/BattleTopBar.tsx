"use client";

type BattleTopBarProps = {

    selectedWorld:number | null;

    currentSubNode:number | null;

    current:number;

    total:number;

    onBack:()=>void;

};

export default function BattleTopBar({

    selectedWorld,

    currentSubNode,

    current,

    total,

    onBack,

}:BattleTopBarProps){

return(

<div className="space-y-5">

<p className="text-center text-yellow-300 font-bold">

🌍 World {selectedWorld} - Chặng {currentSubNode}

</p>

<div className="flex justify-center">

<button

onClick={onBack}

className="

bg-[#7B3F00]

hover:bg-[#8E5315]

px-6

py-2

rounded-xl

font-bold

"

>

⬅️ Quay lại

</button>

</div>

<p className="text-center">

Câu {current+1} / {total}

</p>

<div className="h-3 rounded-full bg-slate-700 overflow-hidden">

<div

className="bg-yellow-400 h-full transition-all"

style={{

width:`${total>0?((current+1)/total)*100:0}%`

}}

>

</div>

</div>

</div>

);

}