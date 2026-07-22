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
z-0

overflow-hidden

rounded-[26px]

bg-gradient-to-br
from-[#33206e]
via-[#4c39b8]
to-[#7158ff]

border
border-yellow-400/20

shadow-[0_10px_35px_rgba(0,0,0,.35)]

h-[96px]
"
    >
      {/* Glow */}

      <div
        className="
absolute
right-[-30px]
top-[-30px]

w-28
h-28

rounded-full

bg-yellow-300/20

blur-[55px]
"
      />

      <div
        className="
absolute
left-[-20px]
bottom-[-20px]

w-24
h-24

rounded-full

bg-cyan-300/10

blur-[45px]
"
      />

      {/* Content */}

      <div
        className="
relative

h-full

flex

items-center

gap-4

px-4
"
      >
        {/* LEFT */}

        <div className="flex-1">

          <div
            className="
inline-flex

items-center

gap-1

rounded-full

bg-yellow-400/15

border

border-yellow-300/30

px-2.5
py-1

text-[9px]

font-bold

text-yellow-200
"
          >
            👑 PREMIUM
          </div>

          <h2
            className="
mt-1

text-white

font-black

text-lg

leading-none
"
          >
            Gói Hoàng Gia
          </h2>

       
          <button
            onClick={onBuy}
            className="
mt-2

rounded-full

bg-gradient-to-r
from-yellow-400
to-orange-500

px-3
py-1.5

text-[10px]

font-bold

text-black

shadow-lg

transition-all

duration-300

active:scale-95

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

w-16
h-16

shrink-0

flex

items-center

justify-center
"
        >
          <div
            className="
absolute

w-14
h-14

rounded-full

bg-yellow-300/20

blur-xl
"
          />

          <div
            className="
relative

text-[50px]

drop-shadow-[0_0_10px_rgba(255,220,0,.4)]
"
          >
            💰
          </div>

        </div>

      </div>

      {/* Decorations */}

      <div
        className="
absolute

top-3
right-16

text-[10px]

opacity-50
"
      >
        ⭐
      </div>

      <div
        className="
absolute

bottom-2
right-24

text-[10px]

opacity-40
"
      >
        ✨
      </div>

      <div
        className="
absolute

top-6
right-8

text-xs

opacity-50
"
      >
        🪙
      </div>

    </section>
  );
}