type Props = {
  icon: string;
  title: string;
  description: string;
  price: number;
  color: string;
  rarity: string;
  onBuy: () => void;
};

export default function ShopCard({
  icon,
  title,
  description,
  price,
  color,
  rarity,
  onBuy,
}: Props) {

  const border =
    rarity === "Legendary"
      ? "border-yellow-400 shadow-yellow-400/30"
      : rarity === "Epic"
      ? "border-purple-500 shadow-purple-500/30"
      : rarity === "Rare"
      ? "border-cyan-400 shadow-cyan-400/30"
      : "border-slate-600 shadow-slate-700/20";

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
className={`
shop-card

relative

overflow-hidden

rounded-3xl

border

${border}

bg-gradient-to-b

from-[#17233d]
to-[#111827]

shadow-xl

transition-all

duration-300

hover:-translate-y-2

hover:scale-[1.03]

hover:shadow-2xl
`}
>

<div className="shop-card-stars"/>

<div className="shop-card-glow"/>

<div className="absolute right-4 top-4 z-20">

<span
className="
bg-red-500

text-white

text-xs

font-bold

px-3

py-1

rounded-full
"
>

HOT

</span>

</div>

<div className="p-7 relative z-10">

<div
className="
mx-auto

w-24

h-24

rounded-full

bg-white/5

border

border-white/10

flex

items-center

justify-center

text-6xl

mb-6
"
>

{icon}

</div>

<h2
className="
text-3xl

font-black

text-center

text-white
"
>

{title}

</h2>

<div className="flex justify-center mt-4">

<span
className={`
px-4

py-1

rounded-full

text-xs

font-bold

${rarityColor}
`}
>

{rarity}

</span>

</div>

<p
className="
mt-5

text-center

text-slate-300

leading-7

min-h-[56px]
"
>

{description}

</p>

<div
className="
mt-6

text-center
"
>

<div className="text-sm text-slate-400">

Giá

</div>

<div
className="
text-4xl

font-black

text-yellow-300

mt-1
"
>

{price}

<span className="text-xl ml-2">

🪙

</span>

</div>

</div>

<button
onClick={onBuy}
className={`
mt-8

w-full

rounded-2xl

py-4

font-bold

text-lg

text-white

transition-all

duration-300

hover:scale-105

active:scale-95

${color}
`}
>

🛒 Mua ngay

</button>

</div>

</div>

  );
}