type World = {
  id: number;
  name: string;
  unlocked: boolean;
};

type Props = {
  worlds: World[];
  onSelect: (id: number) => void;

  level: number;
  rank: string;
  coins: number;

  onShop: () => void;
  onAchievements: () => void;
};

export default function WorldSelect({
  worlds,
  onSelect,

  level,
  rank,
  coins,

  onShop,
  onAchievements,
}: Props) {
  return (
    <main
      className="
      min-h-screen
      bg-gradient-to-br
      from-blue-600
      via-purple-600
      to-pink-600
      p-6
      relative
      "
    >
      {/* Góc phải */}

      <div className="absolute top-5 right-5 flex gap-3">

        

      </div>

      {/* Tiêu đề */}

    <div className="text-center text-white">

  <h1 className="text-5xl font-bold">
    🌎 Math Quest
  </h1>

</div>

      {/* MAP */}

      <div className="mt-20 flex flex-wrap justify-center gap-4">

        {worlds.map((world, index) => (

          <div
            key={world.id}
            className="
            flex
            items-center
            "
          >

            <button
              disabled={!world.unlocked}
              onClick={() => {
                if (world.unlocked) {
                  onSelect(world.id);
                }
              }}
              className={`
              w-24
              h-24
              rounded-full
              text-white
              font-bold
              shadow-2xl
              transition-all
              duration-300

              ${
                world.unlocked
                  ? `
                  bg-gradient-to-br
                  from-yellow-400
                  to-orange-500

                  hover:scale-110
                  `
                  : `
                  bg-gray-500
                  cursor-not-allowed
                  `
              }
              `}
            >
              {world.unlocked
                ? "🌍"
                : "🔒"}

              <br />

              W{world.id}
            </button>

            {index <
              worlds.length - 1 && (
              <div
                className="
                w-8
                h-2
                bg-white
                rounded-full
                "
              />
            )}

          </div>

        ))}

      </div>

    </main>
  );
}