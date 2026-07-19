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
    ? false 
    : xp >= a.xpRequired;

          return (
              <div
  key={a.id}
 className={`
rounded-3xl
p-5
md:p-7

border

transition-all
duration-300

hover:-translate-y-1
hover:shadow-[0_0_45px_rgba(255,215,120,.18)]

${
  unlocked
    ? `
      bg-[#121a31]
      border-yellow-400/30
      shadow-[0_0_30px_rgba(255,215,100,.12)]
    `
    : `
      bg-[#0d1324]
      border-slate-700
      opacity-80
    `
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
font-extrabold
text-yellow-100
tracking-wide
"
>
                      {a.name}
                    </h2>

                    <p
className="
text-xs
sm:text-sm
md:text-base
text-slate-400
mt-1
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
text-lg
text-amber-300
"
>
                    {a.xpRequired} Điểm
                  </div>

                  {unlocked ? (

<span
className="
inline-flex
items-center
px-3
py-1
mt-2
rounded-full
bg-emerald-500/15
border
border-emerald-400/20
text-emerald-300
text-sm
font-semibold
"
>
✓ Đã mở khóa
</span>

) : (

<span
className="
inline-flex
items-center
px-3
py-1
mt-2
rounded-full
bg-red-500/10
border
border-red-400/20
text-red-300
text-sm
font-semibold
"
>
🔒 Chưa đạt
</span>

)}

                </div>

              </div>

              {/* Progress */}

              <div className="mt-5">

               <div
className="
relative
w-full
h-3
md:h-4

overflow-hidden

rounded-full

bg-[#1b2947]

border
border-white/5

shadow-inner
"
>
<div
className="
h-full

rounded-full

bg-gradient-to-r
from-yellow-300
via-amber-400
to-orange-400

transition-all
duration-700

shadow-[0_0_20px_rgba(255,220,120,.45)]
"
                    style={{
  width: `${Math.min(
    100,
    (xp / Math.max(a.xpRequired, 1)) * 100
  )}%`,
}}
                  />

                </div>

               <div
className="
mt-3

flex
justify-between

text-sm
"
>

<span className="text-slate-400">

Tiến độ

</span>

<span className="font-bold text-yellow-200">

{Math.min(xp,a.xpRequired)} / {a.xpRequired}

</span>

</div>

              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}