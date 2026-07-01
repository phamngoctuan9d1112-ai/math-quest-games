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
grid
grid-cols-2
sm:grid-cols-3
md:grid-cols-4
lg:grid-cols-5
gap-3
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
              w-full
aspect-square
max-w-[120px]
md:w-32
md:h-32
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
            <div className="text-2xl md:text-3xl">
              {world.unlocked ? "🌍" : "🔒"}
            </div>

            <div className="mt-2 text-xs md:text-sm font-bold">
              World {world.id}
            </div>

            <div className="text-[10px] md:text-xs text-center px-2">
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
w-full
min-h-screen
bg-gradient-to-br
from-blue-600
via-purple-600
to-pink-600
px-2
sm:px-4
md:px-6
py-4
"
>
      {/* Header */}

      



    <div
  className="
  flex
  flex-col
  md:grid
  md:grid-cols-3
  gap-4
  mb-8
  "
>

  {/* BÊN TRÁI */}
  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
    <button
      onClick={onShop}
      className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-2 md:px-6 md:py-3 rounded-xl font-bold"
    >
      🛒 Shop
    </button>

    <button
      onClick={onAchievements}
      className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 md:px-6 md:py-3 rounded-xl font-bold"
    >
      🏆 Thành tích
    </button>
  </div>

  {/* CHÍNH GIỮA */}
  <div className="text-center">
    <h1
  className="
  text-2xl sm:text-3xl md:text-6xl
  font-bold
  text-white
  "
>
      🌎 Math Quest
    </h1>
  </div>

  {/* BÊN PHẢI */}
  <div className="flex justify-center gap-2 md:justify-end">

    <button
      onClick={onLeaderboard}
      className="bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-xl"
      title="Bảng xếp hạng"
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


<div className="text-center text-white">
        

        <p className="text-xl mt-2">
          Toán THPT qua trò chơi
        </p>

        <div
   className="
mt-4
flex
flex-wrap
justify-center
gap-2
text-xs
sm:text-sm
md:text-lg
font-bold
">

          <span>⭐ Level {level}</span>
          <span>{rank}</span>
          <span>🪙 {coins}</span>
        </div>

        </div>
        

      {/* TOÁN 10 */}

      <section className="mt-10 md:mt-16">
        <h2 className="text-2xl md:text-4xl text-white font-bold text-center mb-8">
          📘 Toán 10
        </h2>

        {renderWorldGroup(world10)}
      </section>

      {/* TOÁN 11 */}

      <section className="mt-12 md:mt-20">
        <h2 className="text-2xl md:text-4xl text-white font-bold text-center mb-8">
          📗 Toán 11
        </h2>

        {renderWorldGroup(world11)}
      </section>

      {/* TOÁN 12 */}

      <section className="mt-20 mb-20">
        <h2 className="text-2xl md:text-4xl text-white font-bold text-center mb-8">
          📕 Toán 12
        </h2>

        {renderWorldGroup(world12)}
      </section>
    </main>
  );
}