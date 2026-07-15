import { useState } from "react";
import { worldNames } from "../data/worldNames";
import Footer from "./Footer";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import Logo from "./dashboard/Logo";
import LeftMenu from "./dashboard/LeftMenu";
import PlayerCard from "./dashboard/PlayerCard";
import RightPanel from "./dashboard/RightPanel";

const supabase = createClient();
import { useEffect } from "react";

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
  onChestInventory: () => void;
  coins: number;
  userName: string;
  formulaShards: number;
  onLogout: () => void;
  onLeaderboard: () => void;
  email: string;
  onShop: () => void;
  onAchievements: () => void;
  onChest: () => void;
  onInventory: () => void;
  
};

export default function WorldSelect({
  worlds,
  onSelect,
  level,
  streak,
  rank,
  onChest,
  userName,
  onChestInventory,
  formulaShards,
  coins,
  onLogout,
  email,
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
  const [darkMode, setDarkMode] =
  useState(false);
  
  const [showPasswordModal, setShowPasswordModal] =
  useState(false);
  const [newPassword, setNewPassword] = useState("");
const [loadingPassword, setLoadingPassword] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [showProfile, setShowProfile] =
  useState(false);
  const router = useRouter();
  const [provider, setProvider] =
useState<string>("");
  const ADMIN_EMAIL =
  "phamngoctuan9d1112@gmail.com";
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

useEffect(() => {
  async function getUser() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const p =
      user?.app_metadata?.provider || "";

    setProvider(p);
  }

  getUser();
}, []);

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

async function handleChangePassword() {
  if (newPassword.length < 6) {
    alert("Mật khẩu phải từ 6 ký tự trở lên");
    return;
  }

  try {
    setLoadingPassword(true);

    const { error } =
      await supabase.auth.updateUser({
        password: newPassword,
      });

    if (error) throw error;

    alert("Đổi mật khẩu thành công!");

    setNewPassword("");
    setShowPasswordModal(false);

  } catch (err: any) {
    alert(err.message);
  } finally {
    setLoadingPassword(false);
  }
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
world-card
active:scale-95
ring-2
ring-yellow-200/20
w-[140px]
h-[170px]
md:w-[170px]
md:h-[200px]
            rounded-3xl
            text-white
            font-bold
            shadow-[0_15px_35px_rgba(0,0,0,.35)]
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
from-yellow-300
via-yellow-500
to-orange-600
border
border-yellow-200/40
hover:scale-105
hover:-translate-y-3
hover:rotate-1
hover:shadow-[0_20px_40px_rgba(255,215,0,.55)]
                `
                : `
                bg-gradient-to-br
from-gray-700
to-gray-900
opacity-70
grayscale
cursor-not-allowed
                `
            }
          `}
        >
          <div className="text-5xl drop-shadow-lg">
    {world.unlocked ? "🌍" : "🔒"}
</div>

<div className="mt-3 text-lg font-black">
    LEVEL {world.id}
</div>

<div
    className="
    mt-1
    text-xs
    opacity-90
    text-center
    px-2
    leading-tight
    "
>
    {worldNames[world.id]}
</div>

<div className="mt-3 text-yellow-100">
    ⭐⭐⭐⭐⭐
</div>
        </button>
      ))}
    </div>
  );
}

  return (
  <main className="relative min-h-screen overflow-hidden">
    {/* Background */}

<div className="absolute inset-0">

  {/* gradient */}

  <div
    className="
    absolute
    inset-0
    bg-gradient-to-br
    from-sky-500
    via-indigo-700
    to-purple-900
    "
  />

  {/* stars */}

  <div className="stars"></div>

  {/* glow */}

  <div className="glow1"></div>

  <div className="glow2"></div>

</div>

<div className="relative z-10">
    <div className="max-w-7xl mx-auto">

      {/* HEADER */}
<div className="mb-10">
       <div
className="
grid
grid-cols-1
xl:grid-cols-[240px_1fr_260px]
gap-8
items-start
"
>

          {/* LEFT */}
          <LeftMenu
    onShop={onShop}
    onAchievements={onAchievements}
    onChest={onChest}
    onChestInventory={onChestInventory}
/>

<div className="flex flex-col items-center">

    <Logo />

    <div className="mt-8 w-full">
        <PlayerCard
            userName={userName}
            email={email}
            level={level}
            rank={rank}
            coins={coins}
            formulaShards={formulaShards}
            streak={streak}
        />
    </div>

</div>
          </div>

          {/* RIGHT */}
          <div className="hidden md:flex justify-end gap-3">
            
            
            <RightPanel
    streak={streak}
    onLeaderboard={onLeaderboard}
    onLogout={onLogout}
/>

            {email === ADMIN_EMAIL && (
  <button
    onClick={() => router.push("/admin")}
    className="
      bg-red-500
      text-white
      px-4
      py-2
      rounded-xl
      font-bold
    "
  >
    Admin
  </button>
)}

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
    🔥 {streak}
  </span>

  <span className="text-[11px]">
    Chuỗi
  </span>
</button>

    <button
  onClick={() => setShowProfile(true)}
  className="flex flex-col items-center"
>
  <span className="text-xl">👤</span>

  <span className="text-[11px]">
    Tôi
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
    max-w-md
    md:max-w-xl
    max-h-[90vh]
    overflow-y-auto
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

{showProfile && (
  <div
    onClick={() => setShowProfile(false)}
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
        max-w-md
        bg-white
        rounded-3xl
        p-6
        shadow-2xl
      "
    >
      {/* Header */}
      <div className="flex justify-between items-center">

        <h2 className="text-2xl font-black">
          👤 Hồ sơ
        </h2>

        <button
          onClick={() => setShowProfile(false)}
          className="
            w-8
            h-8
            rounded-full
            bg-gray-200
          "
        >
          ✕
        </button>

      </div>

      {/* Avatar */}
      <div className="text-center mt-6">

        <div className="text-6xl">
  👤
</div>

        <h3 className="font-bold text-xl mt-2">
  {userName}
</h3>

<p className="text-gray-500">
  {email}
</p>

<div className="mt-4 space-y-2">

  <div className="bg-yellow-100 p-3 rounded-xl">
    ⭐ Level {level}
  </div>

  <div className="bg-green-100 p-3 rounded-xl">
    {rank}
  </div>

  <div className="bg-orange-100 p-3 rounded-xl">
    🪙 {coins} Coin
  </div>

  <div className="bg-red-100 p-3 rounded-xl">
    🔥 {streak} ngày
  </div>

</div>

      </div>

      {/* Menu */}
      <div className="mt-6 space-y-3">

        <button
  onClick={() => setShowEmail(!showEmail)}
  className="
    w-full
    bg-gray-200
    py-3
    rounded-xl
    font-bold
  "
>
  📧 Email
</button>

{showEmail && (
  <div className="border rounded-xl p-3">
    {email}
  </div>
)}

       {provider !== "google" && (
  <button
    onClick={() =>
      setShowPasswordModal(true)
    }
    className="
      w-full
      bg-gray-200
      py-3
      rounded-xl
      font-bold
    "
  >
    🔒 Đổi mật khẩu
  </button>
)}

        <button
  onClick={() => router.push("/privacy")}
  className="
    w-full
    bg-gray-200
    py-3
    rounded-xl
    font-bold
  "
>
  📜 Quyền riêng tư
</button>

        <button
  onClick={() =>
    setDarkMode(!darkMode)
  }
  className="
    w-full
    bg-slate-100
    p-4
    rounded-xl
    flex
    justify-between
  "
>
  <span>🌙 Chế độ tối</span>

  <span>
    {darkMode ? "Bật" : "Tắt"}
  </span>
</button>
      </div>

      {/* Logout */}
      <button
        onClick={onLogout}
        className="
          mt-6
          w-full
          bg-red-500
          hover:bg-red-600
          text-white
          py-3
          rounded-xl
          font-bold
        "
      >
        🚪 Đăng xuất
      </button>

    </div>
  </div>
)}



{showPasswordModal && (
  <div
    className="
      fixed
      inset-0
      bg-black/70
      flex
      items-center
      justify-center
      z-[999]
    "
  >
    <div
      className="
        bg-white
        p-6
        rounded-3xl
        w-full
        max-w-md
      "
    >
      <h2 className="text-2xl font-bold mb-4">
        🔒 Đổi mật khẩu
      </h2>

      <input
  type="password"
  value={newPassword}
  onChange={(e) =>
    setNewPassword(e.target.value)
  }
  placeholder="Mật khẩu mới"
  className="
    w-full
    border
    p-3
    rounded-xl
  "
/>

      <button
  onClick={handleChangePassword}
  disabled={loadingPassword}
  className="
    mt-4
    w-full
    bg-blue-500
    text-white
    py-3
    rounded-xl
  "
>
  {loadingPassword
    ? "Đang cập nhật..."
    : "Cập nhật"}
</button>

      <button
        onClick={() =>
          setShowPasswordModal(false)
        }
        className="
          mt-2
          w-full
          bg-gray-300
          py-3
          rounded-xl
        "
      >
        Đóng
      </button>
    </div>
  </div>
)}





</main>

);
}