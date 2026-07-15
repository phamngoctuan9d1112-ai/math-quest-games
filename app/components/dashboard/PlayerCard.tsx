type Props = {
  userName: string;
  email: string;
  level: number;
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
  coins,
  formulaShards,
  streak,
}: Props) {
  return (
    <div
      className="
      relative
      w-full
      w-full

      rounded-[36px]
      border
      border-indigo-400/40

      bg-gradient-to-br
      from-[#0d1b5d]
      via-[#111f6b]
      to-[#341a88]

      shadow-[0_0_60px_rgba(90,70,255,.35)]

      p-10
      text-white
      "
    >
      <div className="grid grid-cols-[220px_1fr_220px] gap-8 items-center">

    <div className="flex flex-col items-center">

    <div
        className="
        w-40
        h-40
        rounded-full

        bg-gradient-to-br
        from-yellow-300
        via-orange-400
        to-pink-500

        p-1
        "
    >

        <div
            className="
            w-full
            h-full

            rounded-full

            bg-slate-900

            flex
            items-center
            justify-center

            text-7xl
            "
        >
            👦
        </div>

    </div>

    <div
        className="
        mt-8

        bg-gradient-to-r
        from-purple-700
        to-indigo-700

        px-5
        py-2

        rounded-2xl

        font-black
        text-2xl
        "
    >
        {level}
    </div>

</div>

    <div>

    <h1
        className="
        text-5xl
        font-black
        "
    >
        👋 {userName}
    </h1>

    <p
        className="
        text-white/70
        mt-3
        text-xl
        "
    >
        {email}
    </p>

    <div
        className="
        mt-6

        inline-flex

        items-center

        gap-2

        bg-yellow-500/20

        border

        border-yellow-400/30

        rounded-2xl

        px-5

        py-3

        text-yellow-300

        font-bold

        text-2xl
        "
    >
        👑 {rank}
    </div>

</div>

   <div className="space-y-8">

    <div>

        <div className="text-yellow-300 text-5xl">
            ⭐
        </div>

        <div className="text-white/70 mt-2">
            Level
        </div>

        <div className="text-6xl font-black">
            {level}
        </div>

    </div>

    <div>

        <div className="text-pink-400 text-5xl">
            🛡️
        </div>

        <div className="text-white/70 mt-2">
            Rank
        </div>

        <div className="font-bold text-2xl">
            {rank}
        </div>

    </div>

</div>
</div>
    </div>
  );
}