"use client";
import ShopCard from "./ShopCard";
import ShopSidebar from "./ShopSidebar";
import ShopBanner from "./ShopBanner";
import { useState } from "react";
import { shopItems } from "../data/shopItems";

type ShopProps = {
  coins: number;

  onBuyHeart: () => void;
  inventory:string[];
  onBuyDog: () => void;
  onBuyCat: () => void;
  onBuyDragonPet: () => void;

  onBuyWizard: () => void;
  onBuyHero: () => void;
  onBuyDragon: () => void;
  onBuyKing: () => void;

  onClose: () => void;
};

export default function Shop({
  coins,
  
  onBuyHeart,
  inventory,
  onBuyDog,
  onBuyCat,
  onBuyDragonPet,

  onBuyWizard,
  onBuyHero,
  onBuyDragon,
  onBuyKing,

  onClose,
}: ShopProps) {
  const [activeTab, setActiveTab] = useState("featured");

const filteredItems =
    activeTab === "featured"
        ? shopItems
        : shopItems.filter(item => item.category === activeTab);
        const buyActions = {
  heart: onBuyHeart,

  dog: onBuyDog,
  cat: onBuyCat,
  dragonPet: onBuyDragonPet,

  wizard: onBuyWizard,
  hero: onBuyHero,
  dragon: onBuyDragon,
  king: onBuyKing,

  shield: () => alert("Chưa có chức năng"),
  book: () => alert("Chưa có chức năng"),
  scroll: () => alert("Chưa có chức năng"),
  magic: () => alert("Chưa có chức năng"),
  potion: () => alert("Chưa có chức năng"),

  phoenix: () => alert("Chưa có chức năng"),
  robot: () => alert("Chưa có chức năng"),

  sword: () => alert("Chưa có chức năng"),
  axe: () => alert("Chưa có chức năng"),
  staff: () => alert("Chưa có chức năng"),

  vip: () => alert("Chưa có chức năng"),
};
  return (
    <main
className="
fixed
inset-0
z-50

bg-gradient-to-br
from-[#071226]
via-[#0b1738]
to-[#101b46]

flex

overflow-hidden
"
>
 <ShopSidebar
    activeTab={activeTab}
    onChange={setActiveTab}
/>
   <div
className="
flex-1

flex
flex-col

overflow-hidden

bg-[#08152f]
"
>
<div
className="
relative

overflow-hidden

px-12
py-8
min-h-[170px]

bg-gradient-to-r

from-[#071630]
via-[#18356d]
to-[#5a2cb5]

border-b

border-cyan-400/20
"
>



<div className="shop-stars"/>

<div
className="
absolute

left-[-120px]
top-[-120px]

w-[340px]
h-[340px]

rounded-full

bg-cyan-400/20

blur-[120px]
"/>

<div
className="
absolute

right-[-140px]
bottom-[-150px]

w-[380px]
h-[380px]

rounded-full

bg-purple-500/20

blur-[130px]
"/>



<div className="shop-header-shine"/>



<div
className="
relative

z-20

flex

items-center

justify-between

gap-8

flex-wrap
"
>



<div>

<div
className="
inline-flex

items-center

gap-2

rounded-full

bg-yellow-500/20

border

border-yellow-400/30

px-4

py-2

text-yellow-300

font-bold

text-sm

mb-5
"
>

👑 Royal Shop

</div>

<h1
className="
text-4xl

font-black

tracking-wide

text-white
"
>

🏪 Cửa Hàng Hoàng Gia

</h1>

<p
className="
mt-3

text-cyan-100

text-base

max-w-xl
"
>

Trang bị Pet, Avatar và các vật phẩm hiếm để tăng sức mạnh trong hành trình chinh phục Vương Quốc Toán Học.

</p>

</div>



<div
className="
bg-white/10

backdrop-blur-2xl

rounded-3xl

border

border-white/20

px-6
py-4

min-w-[260px]

shadow-2xl
"
>

<div
className="
text-cyan-100

text-sm

uppercase

tracking-widest
"
>

Số Coin

</div>

<div
className="
mt-3

flex

items-center

gap-4
"
>

<div
className="
w-12
h-12
text-2xl

rounded-full

bg-yellow-400/20

flex

items-center

justify-center


"
>

💰

</div>

<div>

<div
className="
text-4xl

font-black

text-yellow-300
"
>

{coins}

</div>

<div
className="
text-slate-300

text-sm
"
>

Coin khả dụng

</div>

</div>

</div>

</div>

</div>



<div
className="
absolute

bottom-0

left-0

right-0

h-px

bg-gradient-to-r

from-transparent

via-cyan-300/60

to-transparent
"
/>

</div>

<div
className="
flex-1

overflow-y-auto

px-12
pb-12
"
>
  
 <div className="pt-6">

    <ShopBanner/>

</div> 

<div
className="
flex
items-center
justify-between

mt-8
mb-8
"
>

<div
className="
flex
items-center
gap-3
"
>

<span className="text-3xl">
⭐
</span>

<h2
className="
text-3xl
font-black
text-white
"
>

Vật phẩm nổi bật

</h2>

</div>

<button
className="
text-yellow-300
font-bold
hover:text-yellow-200
"
>

Xem tất cả →

</button>

</div>

<div
className="
grid
grid-cols-1
md:grid-cols-2
lg:grid-cols-3
2xl:grid-cols-4
gap-5
"
>

{filteredItems.map((item) => {

    const owned = inventory.includes(item.id);

    return (

        <ShopCard
            key={item.id}
            icon={item.icon}
            title={item.title}
            description={item.description}
            price={item.price}
            rarity={item.rarity}
            color={item.color}
            onBuy={buyActions[item.action]}
            owned={owned}
            stackable={item.stackable}
        />

    );

})}

</div>



        <button
  onClick={onClose}
  className="
    w-full
    mt-6
    bg-gray-800
    hover:bg-red-600
    hover:scale-105
    hover:shadow-xl
    active:scale-95
    transition-all
    duration-300
    text-white
    py-3
    rounded-xl
    font-bold
    cursor-pointer
  "
>
  ❌ Đóng Shop
</button>

</div>  

</div>  



</main>
  );
}