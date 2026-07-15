type Props = {
  streak: number;
  onLeaderboard: () => void;
  onLogout: () => void;
};

function getStreakText(streak: number) {
  if (streak >= 30) return "Huyền thoại";
  if (streak >= 14) return "Bùng cháy";
  if (streak >= 7) return "Rất tốt";
  if (streak >= 3) return "Đang duy trì";
  return "Mới bắt đầu!";
}

export default function RightPanel({
  streak,
  onLeaderboard,
  onLogout,
}: Props) {
  return (
    <div className="flex flex-col gap-6">

      {/* Hàng nút */}
      <div className="flex justify-center gap-4">

        <button
          onClick={onLeaderboard}
          className="
            w-20
            h-20
            rounded-3xl
            bg-gradient-to-br
            from-pink-500
            to-red-600
            text-4xl
            shadow-xl
            hover:scale-105
            transition
          "
        >
          🏅
        </button>

        <button
          onClick={onLogout}
          className="
            w-20
            h-20
            rounded-3xl
            bg-gradient-to-br
            from-sky-500
            to-indigo-600
            text-4xl
            shadow-xl
            hover:scale-105
            transition
          "
        >
          ↩️
        </button>

      </div>

      {/* Chuỗi đăng nhập */}

      <div
        className="
        rounded-[32px]
        bg-gradient-to-br
        from-[#241d48]
        to-[#121428]
        border
        border-orange-400/20
        p-8
        shadow-xl
        text-center
        "
      >
        <div className="text-6xl">
          🔥
        </div>

        <div
          className="
          text-yellow-300
          font-black
          text-5xl
          mt-4
          "
        >
          {streak}
        </div>

        <div
          className="
          text-2xl
          text-white
          font-bold
          "
        >
          ngày
        </div>

        <div
          className="
          mt-4
          text-white/70
          text-lg
          "
        >
          {getStreakText(streak)}
        </div>

      </div>

    </div>
  );
}