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
      md:grid-cols-4
      xl:grid-cols-5
      gap-6
      justify-items-center
      max-w-[1100px]
      mx-auto
      "
    >
      {group.map((world) => (
        <button
          key={world.id}
          disabled={!world.unlocked}
          onClick={() => {
            if (world.unlocked) onSelect(world.id);
          }}
          className={`
            w-[130px]
            h-[130px]
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
                `
                : `
                bg-gray-500
                cursor-not-allowed
                `
            }
          `}
        >
          <div className="text-3xl">
            {world.unlocked ? "🌍" : "🔒"}
          </div>

          <div className="mt-2 text-sm font-bold">
            World {world.id}
          </div>

          <div className="text-xs text-center px-2 leading-tight">
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
    px-4
    py-8
    "
  >
    <div className="max-w-[1200px] mx-auto">

      {/* HEADER */}

      <div
        className="
        flex
        flex-col
        lg:flex-row
        justify-between
        items-center
        gap-6
        mb-12
        "
      >
        {/* LEFT */}

        <div className="flex gap-3 flex-wrap justify-center">
          <button
            onClick={onShop}
            className="
            bg-yellow-500
            hover:bg-yellow-600
            text-white
            px-5
            py-3
            rounded-xl
            font-bold
            transition
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
            px-5
            py-3
            rounded-xl
            font-bold
            transition
            "
          >
            🏆 Thành tích
          </button>
        </div>

        {/* CENTER */}

        <div className="text-center">
          <h1
            className="
            text-4xl
            md:text-6xl
            font-bold
            text-white
            "
          >
            🌎 Math Quest
          </h1>

          <p className="text-white text-lg mt-3">
            Toán THPT qua trò chơi
          </p>

          <div
            className="
            mt-4
            flex
            flex-wrap
            justify-center
            gap-4
            text-lg
            font-bold
            text-white
            "
          >
            <span>⭐ Level {level}</span>
            <span>{rank}</span>
            <span>🪙 {coins}</span>
          </div>
        </div>

        {/* RIGHT */}

        <div className="flex gap-3">
          <button
            onClick={onLeaderboard}
            className="
            bg-red-500
            hover:bg-red-600
            text-white
            w-12
            h-12
            rounded-xl
            flex
            items-center
            justify-center
            text-xl
            "
          >
            🏅
          </button>

          <button
            onClick={onLogout}
            className="
            bg-red-500
            hover:bg-red-600
            text-white
            w-12
            h-12
            rounded-xl
            flex
            items-center
            justify-center
            text-xl
            "
          >
            ↩️
          </button>
        </div>
      </div>

      {/* TOÁN 10 */}

      <section className="mb-20">
        <h2 className="text-center text-white text-4xl font-bold mb-10">
          📘 Toán 10
        </h2>

        {renderWorldGroup(world10)}
      </section>

      {/* TOÁN 11 */}

      <section className="mb-20">
        <h2 className="text-center text-white text-4xl font-bold mb-10">
          📗 Toán 11
        </h2>

        {renderWorldGroup(world11)}
      </section>

      {/* TOÁN 12 */}

      <section className="mb-20">
        <h2 className="text-center text-white text-4xl font-bold mb-10">
          📕 Toán 12
        </h2>

        {renderWorldGroup(world12)}
      </section>

    </div>
  </main>
);
}