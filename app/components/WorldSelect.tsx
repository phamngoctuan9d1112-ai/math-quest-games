import { worldNames } from "../data/worldNames";
import WorldNode from "./WorldNode";

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

  onLeaderboard: () => void;

  onShop: () => void;
  onAchievements: () => void;

  onInventory: () => void;

  onExam: () => void;
};

export default function WorldSelect({
  worlds,
  onSelect,

  level,
  rank,
  coins,

  onShop,
  onAchievements,
  onLeaderboard,

  onExam,
  onInventory,
}: Props) {

  const world10 = worlds.filter(
    (w) => w.id >= 1 && w.id <= 20
  );

  const world11 = worlds.filter(
    (w) => w.id >= 21 && w.id <= 40
  );

  const world12 = worlds.filter(
    (w) => w.id >= 41 && w.id <= 60
  );

  function renderWorldGroup(group: World[]) {
    return (
      <div
        className="
        flex
        flex-wrap
        justify-center
        gap-6
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
              w-32
              h-32
              rounded-3xl
              text-white
              font-bold
              shadow-2xl
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
                  hover:scale-110
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

            <div className="text-xs text-center px-2">
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
      p-6
      "
    >
      {/* Header */}

      


<div className="w-full flex items-center justify-between">

    {/* Bên trái */}
    <div className="flex gap-4">

        <button
    onClick={onShop}
    className="
        bg-yellow-500
        hover:bg-yellow-600
        hover:scale-105
        hover:shadow-xl
        active:scale-95
        transition-all
        duration-300
        text-white
        px-6
        py-3
        rounded-xl
        font-bold
        cursor-pointer
    "
>
    🛒 Shop
</button>

        <button
    onClick={onAchievements}
    className="
        bg-green-500
        hover:bg-green-600
        hover:scale-105
        hover:shadow-xl
        transition-all
        duration-300
        text-white
        px-6 py-3
        rounded-xl
        font-bold
        cursor-pointer
    "
>
    🏆 Thành tích
</button>

    </div>

    {/* Chính giữa */}
    <div className="text-center">

        <h1 className="text-6xl font-bold">
               🌎 Math Quest
        </h1>

        

    </div>

    {/* Bên phải */}
    <div className="flex gap-4">

        <button
    onClick={onLeaderboard}
    className="
        bg-yellow-500
        hover:bg-yellow-600
        hover:scale-105
        hover:shadow-xl
        transition-all
        duration-300
        text-white
        px-6 py-3
        rounded-xl
        font-bold
        cursor-pointer
    "
>
    🏅 Bảng xếp hạng
</button>

        <button
    onClick={onExam}
    className="
        bg-red-500
        hover:bg-red-600
        hover:scale-105
        hover:shadow-xl
        transition-all
        duration-300
        text-white
        px-6 py-3
        rounded-xl
        font-bold
        cursor-pointer
    "
>
    🎓 Luyện Thi THPT
</button>
    </div>

</div>


<div className="text-center text-white">
        

        <p className="text-xl mt-2">
          Toán THPT qua trò chơi
        </p>

        <div className="mt-4 flex justify-center gap-6 text-lg font-bold">
          <span>⭐ Level {level}</span>
          <span>{rank}</span>
          <span>🪙 {coins}</span>
        </div>

        </div>
        

      {/* TOÁN 10 */}

      <section className="mt-16">
        <h2 className="text-4xl text-white font-bold text-center mb-8">
          📘 Toán 10
        </h2>

        {renderWorldGroup(world10)}
      </section>

      {/* TOÁN 11 */}

      <section className="mt-20">
        <h2 className="text-4xl text-white font-bold text-center mb-8">
          📗 Toán 11
        </h2>

        {renderWorldGroup(world11)}
      </section>

      {/* TOÁN 12 */}

      <section className="mt-20 mb-20">
        <h2 className="text-4xl text-white font-bold text-center mb-8">
          📕 Toán 12
        </h2>

        {renderWorldGroup(world12)}
      </section>
    </main>
  );
}