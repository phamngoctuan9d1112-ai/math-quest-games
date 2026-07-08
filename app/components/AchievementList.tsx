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
  rounded-2xl
  p-3
  sm:p-4
  md:p-8
  bg-cover
  bg-center
  "
>
      <h1
  className="
  text-2xl
  sm:text-3xl
  md:text-4xl
  font-bold
  text-center
  mb-5
  md:mb-8
  "
>
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
    rounded-2xl
    p-3
    sm:p-4
    md:p-6
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
              <div
  className="
  flex
  flex-col
  md:flex-row
  gap-3
  md:gap-0
  "
>

                <div className="flex items-center gap-2 md:gap-5">

                  <div
  className="
  text-3xl
  sm:text-4xl
  md:text-5xl
  "
>
                    {unlocked ? "🏅" : "🔒"}
                  </div>

                  <div>

                    <h2
  className="
  text-base
  sm:text-lg
  md:text-2xl
  font-bold
  "
>
                      {a.name}
                    </h2>

                    <p
  className="
  text-xs
  sm:text-sm
  md:text-base
  text-gray-700
  "
>
                      {a.description}
                    </p>

                  </div>

                </div>

                <div
  className="
  text-left
  md:text-right
  "
>

                  <div
  className="
  font-bold
  text-sm
  sm:text-base
  md:text-lg
  "
>
                    {a.xpRequired} Điểm
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

                <div
  className="
  w-full
  bg-white
  rounded-full
  h-2
  md:h-4
  "
>

                  <div
  className="
  bg-green-500
  h-2
  md:h-4
  rounded-full
  transition-all
  "
                    style={{
  width: `${Math.min(
    100,
    (xp / Math.max(a.xpRequired, 1)) * 100
  )}%`,
}}
                  />

                </div>

                <p className="text-right mt-2 text-sm">

                  {Math.min(xp, a.xpRequired)} / {a.xpRequired} Điểm

                </p>

              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}