"use client";

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

    <h1 className="text-3xl font-bold text-yellow-300">

        🏰 Math Quest

    </h1>

    <button
        onClick={() => setMusicOn(!musicOn)}
        className="
        w-10
h-10
        rounded-xl
        bg-slate-700
        hover:bg-slate-600
        "
    >
        {musicOn ? "🔊" : "🔇"}
    </button>

</div>

    );

}