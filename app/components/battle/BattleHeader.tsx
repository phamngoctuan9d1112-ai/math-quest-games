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

        <div className="p-8 border-b border-[#6E4E20]">

            <div className="flex justify-between items-center">

                <h1
                    className="
                    text-2xl
                    md:text-4xl
                    font-bold
                    text-white
                    "
                >
                    🚀 Math Quest
                </h1>

                <button

                    onClick={() => setMusicOn(!musicOn)}

                    className="
                    bg-slate-200
                    hover:bg-slate-300
                    px-3
                    py-2
                    rounded-xl
                    text-xl
                    "

                >

                    {musicOn ? "🔊" : "🔇"}

                </button>

            </div>

        </div>

    );

}