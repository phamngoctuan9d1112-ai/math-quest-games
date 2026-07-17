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

px-3
py-2

sm:px-4
sm:py-3

lg:px-6
lg:py-4

border-b
border-yellow-700

bg-[#0d1b2d]
"
>

   <div className="flex items-center gap-4">

   <Image
    src="/icons/castle.png"
    alt="Castle"
    width={48}
    height={48}
    className="
    w-8
    h-8

    sm:w-10
    sm:h-10

    lg:w-14
    lg:h-14
    "
/>
    <h1
        className="
text-xl

sm:text-2xl

lg:text-4xl

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
w-9
h-9

sm:w-10
sm:h-10

lg:w-12
lg:h-12

rounded-xl

bg-slate-700

hover:bg-slate-600

transition
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