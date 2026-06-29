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
onLogout: () => void;
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
onLogout,
  onShop,
  onAchievements,
  onLeaderboard,

  onExam,
  onInventory,
}: Props) {

  const world10 = worlds.filter(
    (w) => w.id >= 1 && w.id <= 26
  );

  const world11 = worlds.filter(
    (w) => w.id >= 27 && w.id <= 61
  );

  const world12 = worlds.filter(
    (w) => w.id >= 62 && w.id <= 79
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

      



    {/* Bên trái */}
    <div className="left-buttons flex gap-4 justify-start">

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
    <div className="title text-center">

        <h1 className="text-6xl font-bold">
               🌎 Math Quest
        </h1>

        

    </div>

    {/* Bên phải */}
    <div className="right-buttons flex gap-4 justify-end">

       <div className="relative group">
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
      transition
    "
  >
     🏅
  </button>

  <div
    className="
      absolute
      top-full
      mt-2
      left-1/2
      -translate-x-1/2
      bg-black
      text-white
      text-sm
      px-3
      py-1
      rounded-lg
      opacity-0
      group-hover:opacity-100
      transition
      whitespace-nowrap
      pointer-events-none
      z-50
    "
  >
    Bảng xếp hạng
  </div>
        </div>
<div className="grid grid-cols-[1fr_auto_1fr] items-center">

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
<div className="relative group">
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
      transition
    "
  >
    📲
  </button>

  <div
    className="
      absolute
      top-full
      mt-2
      left-1/2
      -translate-x-1/2
      bg-black
      text-white
      text-sm
      px-3
      py-1
      rounded-lg
      opacity-0
      group-hover:opacity-100
      transition
      whitespace-nowrap
      pointer-events-none
      z-50
    "
  >
    Đăng xuất
  </div>
</div>

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