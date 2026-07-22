interface ShopBannerProps {
  onBuy: () => void;
}

export default function ShopBanner({
  onBuy,
}: ShopBannerProps) {
  return (
    <section
      className="
relative
overflow-hidden

rounded-[28px]

bg-gradient-to-br
from-[#36207e]
via-[#4d37b8]
to-[#7357ff]

border
border-yellow-400/20

shadow-[0_15px_40px_rgba(0,0,0,.35)]

h-[120px]
"
    >
      {/* Glow */}

      <div
        className="
absolute
right-[-40px]
top-[-40px]

w-40
h-40

rounded-full

bg-yellow-300/20

blur-[70px]
"
      />

      <div
        className="
absolute
left-[-40px]
bottom-[-40px]

w-32
h-32

rounded-full

bg-cyan-300/10

blur-[60px]
"
      />

      <div
        className="
relative

h-full

flex

items-center

justify-between

px-5
"
      >
        {/* LEFT */}

        <div className="z-10">

          <div
            className="
inline-flex

items-center

gap-2

rounded-full

bg-yellow-400/15

border

border-yellow-300/40

px-3
py-1

text-[10px]

font-bold

text-yellow-200
"
          >
            👑 PREMIUM
          </div>

          <h2
            className="
mt-2

text-white

font-black

text-2xl

leading-none
"
          >
            Gói Hoàng Gia
          </h2>

          <p
            className="
mt-1

text-[11px]

text-slate-100

leading-4

max-w-[160px]
"
          >
            Mở khóa toàn bộ đặc quyền và
            nhận nhiều phần thưởng độc quyền.
          </p>

          <button
            onClick={onBuy}
            className="
mt-3

rounded-full

bg-gradient-to-r
from-yellow-400
to-orange-500

px-4
py-2

text-[11px]

font-bold

text-black

shadow-lg

active:scale-95

transition-all
duration-300

hover:brightness-110
"
          >
            ✨ Khám phá
          </button>
        </div>

        {/* RIGHT */}

        <div
          className="
relative

flex

items-center

justify-center

w-24
h-24

shrink-0
"
        >
          <div
            className="
absolute

w-20
h-20

rounded-full

bg-yellow-300/20

blur-2xl
"
          />

          <div
            className="
relative

text-[70px]

drop-shadow-[0_0_20px_rgba(255,220,0,.45)]
"
          >
            💰
          </div>
        </div>
      </div>

      {/* Decorative coins */}

      <div
        className="
absolute

top-3
right-20

text-sm

opacity-60
"
      >
        🪙
      </div>

      <div
        className="
absolute

bottom-4
right-28

text-xs

opacity-50
"
      >
        ✨
      </div>

      <div
        className="
absolute

top-8
right-10

text-xs

opacity-40
"
      >
        ⭐
      </div>
    </section>
  );
}