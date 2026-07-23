type Props = {
  icon: string;
  title: string;
  description: string;
  price: number;
  color: string;
  rarity: string;
  owned: boolean;
  stackable: boolean;
  onBuy: () => void;
};

export default function ShopCard({
  icon,
  title,
  description,
  price,
  color,
  rarity,
  owned,
  stackable,
  onBuy,
}: Props) {
  const border =
    rarity === "Legendary"
      ? "border-yellow-400 shadow-yellow-500/30"
      : rarity === "Epic"
      ? "border-purple-500 shadow-purple-500/30"
      : rarity === "Rare"
      ? "border-cyan-400 shadow-cyan-500/30"
      : "border-slate-600";

  const rarityColor =
    rarity === "Legendary"
      ? "bg-yellow-500 text-black"
      : rarity === "Epic"
      ? "bg-purple-500 text-white"
      : rarity === "Rare"
      ? "bg-cyan-500 text-white"
      : "bg-slate-600 text-white";

  return (
    <div
  onClick={() => console.log("CARD CLICK")}
      className={`
relative
overflow-hidden

rounded-3xl

border
${border}

bg-gradient-to-b
from-[#203760]
via-[#172844]
to-[#101827]

shadow-xl

transition-all
duration-300

active:scale-95
hover:-translate-y-1
`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,.08),transparent_70%)]" />      {/* HOT */}
      <div className="absolute top-3 right-3 z-30">
        <div
          className="
rounded-full
bg-gradient-to-r
from-red-500
to-pink-500

px-2.5
py-1

text-[10px]
font-bold
text-white

shadow-lg
"
        >
          🔥 HOT
        </div>
      </div>

      {/* ICON */}
      <div
        className="
relative

h-[78px]

flex
items-center
justify-center
"
      >
        <div
          className="
absolute

w-16
h-16

rounded-full

bg-white/10

blur-xl
"
        />

        <div
          className="
relative

text-[52px]

transition-all

duration-300

group-hover:scale-110
"
        >
          {icon}
        </div>
      </div>

      {/* CONTENT */}
      <div className="px-3 pb-3">
        {/* TITLE */}
        <h2
          className="
text-white

font-black

text-lg

text-center

leading-tight
"
        >
          {title}
        </h2>

        {/* RARITY */}
        <div className="flex justify-center mt-2">
          <span
            className={`
px-3
py-1

rounded-full

text-[10px]
font-bold

${rarityColor}
`}
          >
            {rarity}
          </span>
        </div>

        {/* DESCRIPTION */}
        <p
          className="
mt-3

text-center

text-yellow-300

font-bold

text-sm

leading-5

min-h-[40px]
"
        >
          {description}
        </p>

        {/* PRICE */}
        <div
          className="
mt-3

rounded-xl

bg-black/30

border
border-white/10

px-3
py-2

flex

items-center

justify-center

gap-2
"
        >
          <span className="text-lg">🪙</span>

          <span
            className="
text-yellow-300

font-black

text-xl
"
          >
            {price}
          </span>
        </div>

        {/* BUTTON */}
       <button
  onClick={(e) => {
    e.stopPropagation();
    console.log("BUTTON CLICK");
    onBuy();
  }}
          disabled={owned && !stackable}
          className={`
mt-3

w-full

rounded-xl

py-2

font-bold

text-sm

transition-all

duration-300

${
  owned && !stackable
    ? "bg-gray-600 text-white cursor-not-allowed"
    : `${color} hover:brightness-110 active:scale-95`
}
`}
        >
          {owned && !stackable ? "✅ Đã sở hữu" : "🛒 Mua ngay"}
        </button>
      </div>
    </div>
  );
}