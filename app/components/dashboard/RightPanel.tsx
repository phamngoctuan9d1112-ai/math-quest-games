"use client";

type Props = {
  streak: number;
  onLeaderboard: () => void;
  onLogout: () => void;
};

export default function RightPanel({
  streak,
  onLeaderboard,
  onLogout,
}: Props) {
  return (
    <div className="space-y-6">
      {/* Daily */}
      <div
        className="
        rounded-3xl
        bg-white/10
        backdrop-blur-xl
        border
        border-white/20
        p-6
        text-white
        shadow-xl
      "
      >
        <h3 className="text-xl font-black mb-4">
          📅 Hôm nay
        </h3>

        <div className="text-4xl text-center">
          🔥
        </div>

        <div className="text-center mt-3">
          <div className="text-3xl font-black">
            {streak}
          </div>

          <div className="text-sm text-slate-300">
            ngày liên tiếp
          </div>
        </div>

        <div className="mt-5">
          <div className="text-sm text-slate-300">
            Nhiệm vụ ngày
          </div>

          <div className="mt-2 rounded-xl bg-white/10 p-3">
            ⭐ Hoàn thành 3 màn chơi
          </div>
        </div>
      </div>

      {/* Leaderboard */}
      <button
        onClick={onLeaderboard}
        className="
        w-full
        rounded-3xl
        bg-gradient-to-r
        from-yellow-400
        to-orange-500
        py-5
        text-white
        font-black
        shadow-xl
        hover:scale-105
        transition
      "
      >
        🏆 Bảng xếp hạng
      </button>

      {/* Logout */}
      <button
        onClick={onLogout}
        className="
        w-full
        rounded-3xl
        bg-red-500
        hover:bg-red-600
        py-4
        text-white
        font-bold
        transition
      "
      >
        🚪 Đăng xuất
      </button>
    </div>
  );
}