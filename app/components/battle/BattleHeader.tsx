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

        <div className="
flex
items-center
justify-between

px-8
py-6

border-b
border-yellow-700

bg-[#0d1b2d]
">

            <div className="flex justify-between items-center">

                <h1 className="text-5xl font-bold text-yellow-200">
Math Quest
</h1>

                <button

                    onClick={() => setMusicOn(!musicOn)}

                    className="
w-14
h-14

rounded-xl

bg-slate-700

hover:bg-slate-600

transition
"

                >

                    {musicOn ? "🔊" : "🔇"}

                </button>

            </div>

        </div>

    );

}