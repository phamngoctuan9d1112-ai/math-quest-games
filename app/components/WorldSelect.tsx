import { useState } from "react";
import { worldNames } from "../data/worldNames";
import Footer from "./Footer";

type World = {
  id: number;
  name: string;
  unlocked: boolean;
};

type Props = {
  worlds: World[];
  onSelect: (id: number) => void;
  streak: number;
  level: number;
  rank: string;
  coins: number;
  formulaShards: number;
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
  streak,
  rank,
  formulaShards,
  coins,
  onLogout,
  onShop,
  onAchievements,
  onLeaderboard,
  onInventory,
}: Props) {
  const world10 = worlds.filter((w) => w.id >= 1 && w.id <= 26);
  const world11 = worlds.filter((w) => w.id >= 27 && w.id <= 61);
  const world12 = worlds.filter((w) => w.id >= 62 && w.id <= 79);
  const streakStyle =
  getStreakStyle(streak);
  const [showStreakModal, setShowStreakModal] =
  useState(false);
  const weekDays = [
  "T2",
  "T3",
  "T4",
  "T5",
  "T6",
  "T7",
  "CN",
];
const today = new Date().getDay();
const todayIndex =
  today === 0
    ? 6
    : today - 1;

function isActiveDay(index: number) {
  if (streak <= 0) return false;

  const activeDays =
    Math.min(streak, 7);

  const start =
    (todayIndex - activeDays + 7 + 1) % 7;

  if (start <= todayIndex) {
    return (
      index >= start &&
      index <= todayIndex
    );
  }

  return (
    index >= start ||
    index <= todayIndex
  );
}

  function getStreakStyle(streak: number) {

  if (streak >= 30) {
    return {
      icon: "💜🔥",
      color: "text-purple-500",
      bg: "bg-purple-100",
      label: "Huyền thoại"
    };
  }

  if (streak >= 14) {
    return {
      icon: "🔥",
      color: "text-red-500",
      bg: "bg-red-100",
      label: "Bùng cháy"
    };
  }

  if (streak >= 7) {
    return {
      icon: "🔥",
      color: "text-orange-500",
      bg: "bg-orange-100",
      label: "Nóng"
    };
  }

  if (streak >= 3) {
    return {
      icon: "🔥",
      color: "text-yellow-500",
      bg: "bg-yellow-100",
      label: "Khởi động"
    };
  }

  return {
    icon: "🔥",
    color: "text-gray-500",
    bg: "bg-gray-200",
    label: "Mới bắt đầu"
  };
}

  function renderWorldGroup(group: World[]) {
  return (
    <div
  className="
    grid
    grid-cols-2
    sm:grid-cols-2
    md:grid-cols-4
    lg:grid-cols-5
    xl:grid-cols-6
    gap-6
    justify-items-center
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
            w-[110px]
            h-[110px]
            md:w-[130px]
            md:h-[130px]
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
    pb-28
    md:pb-8
  "
>
    <div className="max-w-7xl mx-auto">

      {/* HEADER */}
      <div
        className="
          bg-black/10
          backdrop-blur-sm
          rounded-3xl
          p-5
          mb-12
        "
      >
        <div className=" flex flex-col items-center md:grid md:grid-cols-3 " >

          {/* LEFT */}
          <div className="hidden md:flex gap-3 flex-wrap">
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
                shadow-lg
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
                shadow-lg
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
                text-3xl
                sm:text-4xl
                md:text-6xl
                font-black
                text-white
              "
            >
              🌎 Math Quest
            </h1>

            <p className="text-white/90 text-lg mt-3">
              Toán THPT qua trò chơi
            </p>

            <div
              className="
                mt-5
                flex
                justify-center
                flex-wrap
                gap-6
                text-sm md:text-lg
                font-bold
                text-white
              "
            >
              <span>⭐ Level {level}</span>
              <span> {rank}</span>
              <span>🪙 {coins}</span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="hidden md:flex justify-end gap-3">
            
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
                shadow-lg
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
                shadow-lg
              "
            >
              ↩️
            </button>
            <button
  onClick={() => setShowStreakModal(true)}
  className={`
    ${streakStyle.bg}
    px-4
    py-2
    rounded-xl
    font-bold
    flex
    items-center
    gap-2
    hover:scale-105
    transition
  `}
>
  <span
    className={`
      text-2xl
      ${streakStyle.color}
    `}
  >
    {streakStyle.icon}
  </span>

  <span>
    {streak} ngày
  </span>

  <span
    className={streakStyle.color}
  >
    {streakStyle.label}
  </span>
</button>
          </div>
        </div>
      </div>

      {/* TOÁN 10 */}
      <section className="mb-20">
        <h2
          className="
            text-center
            text-white
            text-3xl
            md:text-5xl
            font-black
            mb-10
          "
        >
          📘 Toán 10
        </h2>

        {renderWorldGroup(world10)}
      </section>

      {/* TOÁN 11 */}
      <section className="mb-20">
        <h2
          className="
            text-center
            text-white
            text-3xl
            md:text-5xl
            font-black
            mb-10
          "
        >
          📗 Toán 11
        </h2>

        {renderWorldGroup(world11)}
      </section>

      {/* TOÁN 12 */}
      <section className="mb-20">
        <h2
          className="
            text-center
            text-white
            text-3xl
            md:text-5xl
            font-black
            mb-10
          "
        >
          📕 Toán 12
        </h2>

        {renderWorldGroup(world12)}
      </section>
    </div>
    <Footer />

{/* MOBILE NAVBAR */}
<div
  className="
  fixed
  bottom-0
  left-0
  right-0
  md:hidden
  bg-white
  border-t
  border-gray-200
  shadow-2xl
  z-50
  "
>
  <div
    className="
    grid
    grid-cols-5
    py-2
    "
  >

    <button
      onClick={onShop}
      className="flex flex-col items-center"
    >
      <span className="text-xl">🛒</span>
      <span className="text-[11px]">
        Shop
      </span>
    </button>

    <button
      onClick={onAchievements}
      className="flex flex-col items-center"
    >
      <span className="text-xl">🏆</span>
      <span className="text-[11px]">
        Thành tích
      </span>
    </button>

    <button
      onClick={onLeaderboard}
      className="flex flex-col items-center"
    >
      <span className="text-xl">🥇</span>
      <span className="text-[11px]">
        xếp hạng
      </span>
    </button>

    <button
  onClick={() => setShowStreakModal(true)}
  className="
  flex
  flex-col
  items-center
  "
>
  <span
    className={`
      text-lg
      font-bold
      ${
        streak > 0
          ? "text-orange-400"
          : "text-gray-500"
      }
    `}
  >
    🧩 {formulaShards}
  </span>

  <span className="text-[11px]">
    Chuỗi
  </span>
</button>

    <button
      onClick={onLogout}
      className="flex flex-col items-center"
    >
      <span className="text-xl">↩️</span>
      <span className="text-[11px]">
        Thoát
      </span>
    </button>

  </div>
</div>

{showStreakModal && (
  <div
  onClick={() => setShowStreakModal(false)}
  className="
  fixed
  inset-0
  bg-black/70
  flex
  items-center
  justify-center
  z-[999]
  px-4
  "
>
    <div
  onClick={(e) => e.stopPropagation()}
  className="
  w-full
  max-w-md md:max-w-xl
  bg-slate-900
  rounded-3xl
  p-6
  text-white
  shadow-2xl
  "
>
      {/* Header */}
      <div className="flex justify-between items-center mb-5">

<h2 className="text-2xl font-black">
  🧩 Bộ Sưu Tập Công Thức
</h2>
        <button
          onClick={() => setShowStreakModal(false)}
          className="
          w-8
          h-8
          rounded-full
          bg-slate-700
          "
        >
          ✕
        </button>

      </div>

      {/* Số ngày */}
      <div
        className="
        bg-slate-800
        rounded-2xl
        p-5
        text-center
        mb-5
        "
      >
        <div
          className="
          text-5xl
          font-black
          text-orange-400
          "
        >
          🧩 {formulaShards}
        </div>

        <div className="text-slate-400 mt-2">
          mảnh công thức đã thu thập
        </div>
      </div>

      {/* 7 ngày */}

      <div className="text-center mt-4">
  <div className="text-orange-400 font-bold">
    🔥 Chuỗi hiện tại: {streak} ngày
  </div>

  <div className="text-slate-400 text-sm mt-1">
    Hoàn thành ít nhất 1 màn mỗi ngày
    để duy trì chuỗi.
  </div>
</div>

      <div
        className="
        bg-slate-800
        rounded-2xl
        p-4
        mb-5
        "
      >
        <div className="flex justify-between">

          {weekDays.map(
            (day, index) => (
              <div
                key={day}
                className="
                flex
                flex-col
                items-center
                gap-2
                "
              >
                <span className="text-xs">
                  {day}
                </span>
                <div
                className={`
  w-10
  h-10
  rounded-full
  flex
  items-center
  justify-center
  ${
    isActiveDay(index)
      ? "bg-orange-500"
      : "bg-slate-600"
  }
  ${
    index === todayIndex
      ? "ring-4 ring-yellow-400"
      : ""
  }
`}
>
                  {index === todayIndex
  ? "⭐"
  : isActiveDay(index)
  ? "🔥"
  : "💧"}
                </div>
              </div>
            )
          )}

        </div>
      </div>

      {/* Mảnh Công Thức */}
<div
  className="
  bg-gradient-to-r
  from-cyan-500/20
  to-blue-500/20
  border
  border-cyan-400/30
  rounded-2xl
  p-4
  mb-5
  "
>
  <h3
    className="
    text-xl
    font-black
    text-cyan-300
    mb-3
    "
  >
    🧩 Mảnh Công Thức
  </h3>

  <div
    className="
    w-full
    h-4
    bg-slate-700
    rounded-full
    overflow-hidden
    mb-3
    "
  >
    <div
      className="
      h-full
      bg-gradient-to-r
      from-cyan-400
      to-blue-500
      rounded-full
      "
      style={{
        width: `${Math.min(
          (formulaShards / 30) * 100,
          100
        )}%`,
      }}
    />
  </div>

  <div className="text-slate-300">
    {formulaShards}/30 mảnh
  </div>

  <div className="text-cyan-200 mt-2">
    Thu thập đủ 30 mảnh để ghép
    Công Thức Huyền Thoại
  </div>
</div>

      {/* Phần thưởng */}
      <div
        className="
        bg-slate-800
        rounded-2xl
        p-4
        mb-5
        "
      >
        <h3 className="font-bold mb-2">
          🎁 Phần thưởng
        </h3>

        <div>🧩 10 mảnh → +100 Coin</div>
        <div>🧩 20 mảnh → Avatar đặc biệt</div>
        <div>🧩 30 mảnh → 📜 Công Thức Huyền Thoại</div>
      </div>

      <button
        onClick={() => setShowStreakModal(false)}
        className="
        w-full
        py-3
        rounded-xl
        bg-orange-500
        hover:bg-orange-600
        font-bold
        "
      >
        Đã hiểu
      </button>
    </div>
  </div>
)}

</main>
);
}