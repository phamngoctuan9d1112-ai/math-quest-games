type Achievement = {
  id: number;
  name: string;
  description: string;
  xpRequired: number;
  condition?: (world: number) => boolean;
};

type Props = {
  achievements: Achievement[];
  xp: number;
};

export default function AchievementList({
  achievements,
  xp,
}: Props) {
  return (
    <div
  className="
  w-full
  min-h-screen
  rounded-3xl
  p-8
  bg-cover
  bg-center
  "
  style={{
    backgroundImage: "url('/backgrounds/achievement-bg.jpg')",
  }}
>
      <h1 className="text-4xl font-bold text-center mb-8">
        🏆 Thành Tích
      </h1>

      <div className="grid gap-6">
        {achievements.map((a) => {
          const unlocked =
  a.condition
    ? false // tạm thời, sẽ truyền currentWorld sau
    : xp >= a.xpRequired;

          return (
              <div
  key={a.id}
  className={`
    rounded-3xl
    p-6
    shadow-2xl
    backdrop-blur-md
    border
    transition-all
    duration-300
    hover:scale-[1.02]

    ${
      unlocked
        ? "bg-gradient-to-r from-yellow-400 to-orange-500 border-yellow-300"
        : "bg-white/80 border-gray-300"
    }
  `}
>
              <div className="flex items-center justify-between">

                <div className="flex items-center gap-5">

                  <div className="text-5xl">
                    {unlocked ? "🏅" : "🔒"}
                  </div>

                  <div>

                    <h2 className="text-2xl font-bold">
                      {a.name}
                    </h2>

                    <p className="text-gray-700">
                      {a.description}
                    </p>

                  </div>

                </div>

                <div className="text-right">

                  <div className="font-bold text-lg">
                    {a.xpRequired} XP
                  </div>

                  {unlocked ? (
                    <span className="text-green-700 font-bold">
                      Đã mở khóa
                    </span>
                  ) : (
                    <span className="text-red-600 font-bold">
                      Chưa đạt
                    </span>
                  )}

                </div>

              </div>

              {/* Progress */}

              <div className="mt-5">

                <div className="w-full bg-white rounded-full h-4">

                  <div
                    className="bg-green-500 h-4 rounded-full transition-all"
                    style={{
  width: `${Math.min(
    100,
    (xp / Math.max(a.xpRequired, 1)) * 100
  )}%`,
}}
                  />

                </div>

                <p className="text-right mt-2 text-sm">

                  {Math.min(xp, a.xpRequired)} / {a.xpRequired} XP

                </p>

              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}