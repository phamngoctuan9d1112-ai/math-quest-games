"use client";

import Image from "next/image";

type BattleHeaderProps = {

    musicOn: boolean;

    setMusicOn: React.Dispatch<React.SetStateAction<boolean>>;

};

export default function BattleHeader({

    musicOn,

    setMusicOn,

}: BattleHeaderProps) {

    return (

     <div
className="
flex
justify-between
items-center
px-6
py-4
border-b
border-yellow-700
bg-[#0d1b2d]
"
>

   <div className="flex items-center gap-4">

    <Image
        src="/icons/castle.png"
        alt="Castle"
        width={60}
        height={60}
    />

    <h1
        className="
        text-4xl
        font-extrabold
        text-yellow-300
        tracking-wide
        "
    >
        Math Quest
    </h1>

</div>
    <button
        onClick={() => setMusicOn(!musicOn)}
        className="
        w-10
h-10
        rounded-xl
        bg-slate-700
        hover:bg-slate-600
        "
    ><Image
    src={
        musicOn
        ? "/icons/speaker.png"
        : "/icons/speaker-off.png"
    }
    alt="Music"
    width={24}
    height={24}
/>
    </button>

</div>

    );

}