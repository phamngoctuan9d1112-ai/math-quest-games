"use client";

import ShopBanner from "../ShopBanner";
import ShopCard from "../ShopCard";

type Props = {
  coins: number;

  inventory: string[];

  activeTab: string;

  filteredItems: any[];

  showMobileMenu: boolean;

  setShowMobileMenu: (v: boolean) => void;

  setActiveTab: (tab: string) => void;

  buyItem: (
    item: string,
    price: number
  ) => void;

  onBuyPremium: () => void;

  onClose: () => void;
};

export default function ShopMobile({
  coins,
  inventory,
  activeTab,
  filteredItems,
  showMobileMenu,
  setShowMobileMenu,
  setActiveTab,
  buyItem,
  onBuyPremium,
  onClose,
}: Props) {

  return (

<div
className="
h-full
overflow-y-scroll
touch-pan-y
pb-[180px]
"
>

{/* ====================================================== */}

{/* HEADER */}

{/* ====================================================== */}

<div className="px-4 pt-4">

<div
className="
relative

overflow-hidden

rounded-[26px]

bg-gradient-to-r
from-[#19396f]
via-[#2553a0]
to-[#3665ca]

border
border-cyan-300/20

shadow-[0_20px_50px_rgba(0,0,0,.35)]

px-4
py-3

flex
items-center
justify-between
"
>

<div
className="
absolute
right-[-40px]
top-[-40px]

w-28
h-28

rounded-full

bg-cyan-300/10

blur-[50px]
"
/>

<button

onClick={()=>setShowMobileMenu(true)}

className="
relative

z-10

w-11
h-11

rounded-xl

bg-white/10

backdrop-blur

text-2xl
text-white

flex
items-center
justify-center

active:scale-95
"

>

☰

</button>

<div
className="
relative

z-10

flex

items-center

gap-3
"
>

<div
className="
w-10
h-10

rounded-xl

bg-yellow-400/15

flex
items-center
justify-center

text-xl
"
>

👑

</div>

<div>

<div
className="
text-yellow-300

font-black

text-[15px]
leading-none
"
>

Royal Shop

</div>

<div
className="
mt-1

text-[10px]

text-slate-100
"
>

Cửa Hàng Hoàng Gia

</div>

</div>

</div>

<div
className="
relative

z-10

rounded-xl

bg-white/10

backdrop-blur

px-3
py-2

min-w-[76px]

text-center
"
>

<div
className="
text-yellow-300

font-black

text-xl
"
>

{coins}

</div>

<div
className="
text-[10px]

text-slate-100
"
>

Coin

</div>

</div>

</div>

</div>

{/* ====================================================== */}

{/* HERO */}

{/* ====================================================== */}

<div className="px-4 pt-4">

<div
className="
relative

overflow-hidden

rounded-[28px]

bg-gradient-to-br

from-[#184a87]
via-[#315cbc]
to-[#6a49df]

shadow-[0_20px_50px_rgba(0,0,0,.35)]

px-5
py-5
"
>

<div
className="
absolute
right-[-60px]
top-[-60px]

w-40
h-40

rounded-full

bg-cyan-300/10

blur-[70px]
"
/>

<div
className="
absolute
left-[-60px]
bottom-[-60px]

w-44
h-44

rounded-full

bg-blue-300/10

blur-[90px]
"
/>

<div className="relative z-10">

<div
className="
inline-flex

items-center

gap-2

rounded-full

bg-yellow-400/10

border

border-yellow-400/30

px-3
py-1

text-[11px]

font-bold

text-yellow-200
"
>

👑 Royal Shop

</div>

<div
className="
mt-4

flex

items-start

gap-4
"
>

<div className="text-4xl">

🏪

</div>

<div>

<h1
className="
text-white

font-black

text-[20px]

leading-tight
"
>

Cửa Hàng
<br/>

Hoàng Gia

</h1>

<p
className="
mt-2

text-[11px]

leading-5

text-slate-100

max-w-[220px]
"
>

Mua Pet, Avatar, Vũ khí và vật phẩm hiếm nhằm tăng sức mạnh trong hành trình chinh phục Vương Quốc Toán Học.

</p>

</div>

</div>

</div>

</div>

</div>

{/* ====================================================== */}

{/* PREMIUM */}

{/* ====================================================== */}

<div className="px-4 pt-4">

<ShopBanner
onBuy={onBuyPremium}
/>

</div>
{/* ===================================================== */}

{/* TITLE */}

{/* ===================================================== */}

<div
className="
px-4

pt-6
pb-4

flex
items-center
justify-between
"
>

<div
className="
flex
items-center
gap-2
"
>

<div
className="
w-10
h-10

rounded-xl

bg-yellow-500/15

flex
items-center
justify-center

text-xl
"
>

⭐

</div>

<div>

<div
className="
text-white
font-black
text-xl
leading-none
"
>

Vật phẩm nổi bật

</div>

<div
className="
text-slate-400
text-xs
mt-1
"
>

{filteredItems.length} vật phẩm

</div>

</div>

</div>

<button
className="
text-yellow-300

text-sm

font-bold

active:scale-95

transition
"
>

Xem tất cả →

</button>

</div>

{/* ===================================================== */}

{/* GRID */}

{/* ===================================================== */}

<div
className="
px-4
pb-32
"
>

<div
className="
grid

grid-cols-2

gap-3
"
>

{filteredItems.map((item)=>(

<div

key={item.id}

className="
group

transition-all

duration-300

active:scale-95
"

>

<div
className="
group
transition-all
duration-300
active:scale-95
"
>

<ShopCard

icon={item.icon}

title={item.title}

description={item.description}

price={item.price}

rarity={item.rarity}

color={item.color}

owned={inventory.includes(item.id)}

stackable={item.stackable}

onBuy={()=>

buyItem(item.id,item.price)

}

/>

</div>

</div>

))}

</div>

</div>
{/* ===================================================== */}

{/* MOBILE SIDEBAR */}

{/* ===================================================== */}

{showMobileMenu && (

<>

<div

onClick={() => setShowMobileMenu(false)}

className="
fixed
inset-0

bg-black/70
backdrop-blur-md

z-[100]
"

/>

<div

className="
fixed

left-0
top-0
bottom-0

w-[290px]

bg-[#0b1633]

border-r
border-cyan-500/20

shadow-[0_30px_80px_rgba(0,0,0,.6)]

z-[101]

overflow-y-auto
"

>

<div
className="
p-6

border-b

border-white/10
"
>

<div className="text-3xl">

👑

</div>

<div
className="
mt-3

text-white

font-black

text-2xl
"
>

Royal Shop

</div>

<div
className="
text-slate-400

text-sm

mt-1
"
>

Cửa hàng hoàng gia

</div>

</div>

<div className="p-4 space-y-2">

{[
["🔥","Nổi bật","featured"],
["🐶","Pet","pet"],
["🧑","Avatar","avatar"],
["⚔️","Vũ khí","weapon"],
["🧪","Vật phẩm","item"],
["💎","VIP","premium"],
].map(([icon,title,key])=>(

<button

key={String(key)}

onClick={()=>{
setActiveTab(String(key));
setShowMobileMenu(false);
}}

className={`

w-full

rounded-2xl

flex

items-center

gap-4

px-5

py-4

transition-all

duration-300

${
activeTab===key

?

"bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg scale-[1.02]"

:

"bg-white/5 text-slate-300 active:bg-white/10"

}

`}

>

<div className="text-2xl">

{icon}

</div>

<div className="font-bold">

{title}

</div>

</button>

))}

</div>

</div>

</>

)}

{/* ===================================================== */}

{/* FLOATING CLOSE */}

{/* ===================================================== */}

<button

onClick={onClose}

className="
fixed

right-5
bottom-24

w-14
h-14

rounded-full

bg-gradient-to-br

from-red-500
to-red-700

shadow-[0_10px_30px_rgba(255,0,0,.4)]

text-white

text-2xl

active:scale-90

transition

z-[95]
"

>

✕

</button>

{/* ===================================================== */}

{/* BOTTOM NAV */}

{/* ===================================================== */}

<div

className="
fixed

bottom-0
left-0
right-0

z-[90]

px-3
pb-4
pt-2

bg-gradient-to-t

from-[#071226]
to-[#071226]/90

backdrop-blur-3xl
"

>

<div

className="
rounded-3xl

bg-[#17274d]/95

border

border-cyan-400/15

shadow-[0_10px_40px_rgba(0,0,0,.45)]

grid

grid-cols-6

py-2
"

>

{[
["🔥","featured"],
["🐶","pet"],
["🧑","avatar"],
["⚔️","weapon"],
["🧪","item"],
["💎","premium"],
].map(([icon,key])=>(

<button

key={String(key)}

onClick={()=>setActiveTab(String(key))}

className="
flex

flex-col

items-center

justify-center

py-2

transition
"

>

<div

className={`
w-11
h-11

rounded-2xl

flex

items-center

justify-center

text-xl

transition-all

${
activeTab===key

?

"bg-gradient-to-br from-yellow-400 to-orange-500 text-white scale-110 shadow-lg"

:

"bg-white/5 text-slate-400"

}

`}

>

{icon}

</div>

<div

className={`
mt-1

text-[10px]

font-bold

${
activeTab===key

?

"text-yellow-300"

:

"text-slate-500"

}

`}

>

{key}

</div>

</button>

))}

</div>

</div>

</div>
  )}