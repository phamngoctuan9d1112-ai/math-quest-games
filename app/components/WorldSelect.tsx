import { worldNames } from "../data/worldNames";

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

  onLogout: () => void;
  onLeaderboard: () => void;

  onShop: () => void;
  onAchievements: () => void;

  onInventory: () => void;
};

export default function WorldSelect({
  worlds,
  onSelect,
  level,
  rank,
  coins,
  onLogout,
  onShop,
  onAchievements,
  onLeaderboard,
}: Props) {
  const world10 = worlds.filter((w) => w.id >= 1 && w.id <= 26);
  const world11 = worlds.filter((w) => w.id >= 27 && w.id <= 61);
  const world12 = worlds.filter((w) => w.id >= 62 && w.id <= 79);

  function renderWorldGroup(group: World[]) {
    return (
      <div
        className="
          grid
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-5
          gap-4
          justify-items-center
          w-full
          max-w-6xl
          mx-auto
        "
      >
        {group.map((world) => (
          <button
            key={world.id}
            disabled={!world.unlocked}
            onClick={() => {
              if (world.unlocked) {
                onSelect(world.id);
              }
            }}
            className={`
              aspect-square
              w-full
              max-w-[110px]
              md:max-w-[125px]

              rounded-3xl
              text-white
              font-bold
              shadow-xl
              transition-all
              duration-300

              flex
              flex-col
              items-center
              justify-center

              ${
                world.unlocked
                  ? `
                    bg-gradient-to-br
                    from-yellow-400
                    to-orange-500
                    hover:scale-105
                    hover:shadow-2xl
                  `
                  : `
                    bg-gray-500
                    cursor-not-allowed
                  `
              }
            `}
          >
            <div className="text-xl md:text-3xl">
              {world.unlocked ? "🌍" : "🔒"}
            </div>

            <div className="mt-1 text-xs md:text-sm font-bold">
              World {world.id}
            </div>

            <div className="text-[10px] md:text-xs text-center px-2 leading-tight">
              {worldNames[world.id]}
            </div>
          </button>
        ))}
      </div>
    );
  }

  return (
    <main
      className="
        min-h-screen
        bg-gradient-to-br
        from-blue-600
        via-purple-600
        to-pink-600

        w-full
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto

          px-3
          sm:px-5
          md:px-8

          py-5
        "
      >
        {/* HEADER */}

        <div
          className="
            flex
            flex-col

            lg:grid
            lg:grid-cols-3

            gap-4
            mb-8
          "
        >
          {/* LEFT */}

          <div
            className="
              flex
              flex-wrap
              gap-2
              justify-center
              lg:justify-start
            "
          >
            <button
              onClick={onShop}
              className="
                bg-yellow-500
                hover:bg-yellow-600
                text-white
                px-4
                py-2
                rounded-xl
                font-bold
              "
            >
              🛒 Shop
            </button>

            <button
              onClick={onAchievements}
              className="
                bg-green-500
                hover:bg-green-600
                text-white
                px-4
                py-2
                rounded-xl
                font-bold
              "
            >
              🏆 Thành tích
            </button>
          </div>

          {/* CENTER */}

          <div className="text-center">
            <h1
              className="
                text-3xl
                sm:text-4xl
                lg:text-6xl

                font-bold
                text-white
              "
            >
              🌎 Math Quest
            </h1>

            <p
              className="
                text-sm
                sm:text-lg
                mt-3
                text-white
              "
            >
              Toán THPT qua trò chơi
            </p>

            <div
              className="
                mt-3
                flex
                flex-wrap
                justify-center
                gap-3

                text-xs
                sm:text-sm
                md:text-lg

                font-bold
                text-white
              "
            >
              <span>⭐ Level {level}</span>
              <span>👑 {rank}</span>
              <span>🪙 {coins}</span>
            </div>
          </div>

          {/* RIGHT */}

          <div
            className="
              flex
              justify-center
              lg:justify-end
              gap-2
            "
          >
            <button
              onClick={onLeaderboard}
              title="Bảng xếp hạng"
              className="
                bg-red-500
                hover:bg-red-600
                text-white

                w-12
                h-12

                rounded-xl
              "
            >
              🏅
            </button>

            <button
              onClick={onLogout}
              title="Đăng xuất"
              className="
                bg-red-500
                hover:bg-red-600

                text-white

                w-12
                h-12

                rounded-xl
              "
            >
              ↩️
            </button>
          </div>
        </div>

        {/* TOÁN 10 */}

        <section className="mt-8 md:mt-12">
          <h2
            className="
              text-2xl
              md:text-4xl

              text-white
              font-bold
              text-center

              mb-8
            "
          >
            📘 Toán 10
          </h2>

          {renderWorldGroup(world10)}
        </section>

        {/* TOÁN 11 */}

        <section className="mt-12 md:mt-20">
          <h2
            className="
              text-2xl
              md:text-4xl

              text-white
              font-bold
              text-center

              mb-8
            "
          >
            📗 Toán 11
          </h2>

          {renderWorldGroup(world11)}
        </section>

        {/* TOÁN 12 */}

        <section className="mt-12 md:mt-20 pb-16">
          <h2
            className="
              text-2xl
              md:text-4xl

              text-white
              font-bold
              text-center

              mb-8
            "
          >
            📕 Toán 12
          </h2>

          {renderWorldGroup(world12)}
        </section>
      </div>
    </main>
  );
}