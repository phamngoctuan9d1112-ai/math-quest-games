"use client";
import Avatar from "../Avatar";
type Props = {
  userName: string;
  email: string;
  level: number;
  avatar: string;
  rank: string;
  coins: number;
  formulaShards: number;
  streak: number;
};

export default function PlayerCard({
  userName,
  email,
  level,
  rank,
   avatar,
  coins,
  formulaShards,
  streak,
}: Props) {
  const xpPercent = Math.min((level % 10) * 10, 100);

  return (
    <div
      className="
rounded-3xl
bg-white/10
backdrop-blur-xl
border
border-white/20
shadow-2xl

p-5
md:p-8

text-white
"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center gap-6">
        <Avatar
    avatar={avatar}
    size={90}
/>

        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-black">
            {userName}
          </h2>

          <p className="text-slate-300 mt-1">
            {email}
          </p>

          <div className="flex flex-wrap gap-3 mt-4 justify-center md:justify-start">
            <span className="bg-orange-400 text-black px-4 py-1 rounded-full font-bold">
              ⭐ Level {level}
            </span>

            <span className="bg-purple-500 px-4 py-1 rounded-full font-bold">
              {rank}
            </span>
          </div>
        </div>
      </div>

      {/* XP */}
      <div className="mt-8">
        <div className="flex justify-between mb-2 text-sm">
          <span>Tiến trình Level</span>
          <span>{xpPercent}%</span>
        </div>

        <div className="w-full h-4 rounded-full bg-slate-700 overflow-hidden">
          <div
            className="
            h-full
            rounded-full
            bg-gradient-to-r
            from-cyan-400
            via-blue-500
            to-purple-500
            transition-all
            duration-700
          "
            style={{
              width: `${xpPercent}%`,
            }}
          />
        </div>
      </div>

      {/* Stats */}

<div
className="
mt-6

grid
grid-cols-3

gap-3
"
>

    {/* Coin */}

    <div
    className="
    bg-white/10

    rounded-2xl

    py-3

    flex
    flex-col
    items-center
    justify-center
    "
    >

        <div className="text-2xl">
            🪙
        </div>

        <div className="mt-1 font-black text-lg">
            {coins}
        </div>

        <div className="text-[11px] text-slate-300">
            Coins
        </div>

    </div>

    {/* Formula */}

    <div
    className="
    bg-white/10

    rounded-2xl

    py-3

    flex
    flex-col
    items-center
    justify-center
    "
    >

        <div className="text-2xl">
            🧩
        </div>

        <div className="mt-1 font-black text-lg">
            {formulaShards}
        </div>

        <div className="text-[11px] text-slate-300">
            Shards
        </div>

    </div>

    {/* Streak */}

    <div
    className="
    bg-white/10

    rounded-2xl

    py-3

    flex
    flex-col
    items-center
    justify-center
    "
    >

        <div className="text-2xl">
            🔥
        </div>

        <div className="mt-1 font-black text-lg">
            {streak}
        </div>

        <div className="text-[11px] text-slate-300">
            Streak
        </div>

    </div>

</div>
    </div>
  );
}