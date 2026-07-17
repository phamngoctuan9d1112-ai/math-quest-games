type Props = {
  hearts: number;
  coins: number;
  xp: number;
};

export default function StatusBar({
  hearts,
  coins,
  xp,
}: Props) {
  return (
    <div
      className="
      flex
      justify-center
      gap-2

      sm:gap-3

      lg:gap-5
      "
    >
      <div
        className="
        flex
        items-center
        gap-1

        px-3
        py-2

        rounded-xl

        bg-red-500/15

        border
        border-red-400/40
        "
      >
        <span className="text-lg">❤️</span>

        <span
          className="
          text-white
          font-bold

          text-sm

          sm:text-base
          "
        >
          {hearts}
        </span>
      </div>

      <div
        className="
        flex
        items-center
        gap-1

        px-3
        py-2

        rounded-xl

        bg-yellow-500/15

        border
        border-yellow-400/40
        "
      >
        <span className="text-lg">🪙</span>

        <span
          className="
          text-white
          font-bold

          text-sm

          sm:text-base
          "
        >
          {coins}
        </span>
      </div>

      <div
        className="
        flex
        items-center
        gap-1

        px-3
        py-2

        rounded-xl

        bg-cyan-500/15

        border
        border-cyan-400/40
        "
      >
        <span className="text-lg">⭐</span>

        <span
          className="
          text-white
          font-bold

          text-sm

          sm:text-base
          "
        >
          {xp}
        </span>
      </div>
    </div>
  );
}