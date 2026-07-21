"use client";
import ShopCard from "./ShopCard";
import ShopSidebar from "./ShopSidebar";
import ShopBanner from "./ShopBanner";
import { useState } from "react";

type ShopProps = {
  coins: number;

  onBuyHeart: () => void;

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
  const shopItems = [
  {
    id: 1,
    category: "item",
    icon: "❤️",
    title: "Tim",
    description: "+1 mạng",
    price: 20,
    rarity: "Common",
    color: "bg-red-500 hover:bg-red-600",
    onBuy: onBuyHeart,
  },

  {
    id: 2,
    category: "pet",
    icon: "🐶",
    title: "Chó Toán",
    description: "+1 Coin mỗi câu",
    price: 100,
    rarity: "Rare",
    color: "bg-blue-500 hover:bg-blue-600",
    onBuy: onBuyDog,
  },

  {
    id: 3,
    category: "pet",
    icon: "🐱",
    title: "Mèo Toán",
    description: "+2 Coin mỗi câu",
    price: 200,
    rarity: "Epic",
    color: "bg-purple-500 hover:bg-purple-600",
    onBuy: onBuyCat,
  },

  {
    id: 4,
    category: "pet",
    icon: "🐉",
    title: "Rồng Huyền Thoại",
    description: "+5 Coin mỗi câu",
    price: 500,
    rarity: "Legendary",
    color: "bg-yellow-500 hover:bg-yellow-600",
    onBuy: onBuyDragonPet,
  },

  {
    id: 5,
    category: "avatar",
    icon: "🧙",
    title: "Pháp Sư",
    description: "Avatar",
    price: 50,
    rarity: "Common",
    color: "bg-green-500 hover:bg-green-600",
    onBuy: onBuyWizard,
  },

  {
    id: 6,
    category: "avatar",
    icon: "🦸",
    title: "Siêu Anh Hùng",
    description: "Avatar",
    price: 100,
    rarity: "Rare",
    color: "bg-cyan-500 hover:bg-cyan-600",
    onBuy: onBuyHero,
  },

  {
    id: 7,
    category: "avatar",
    icon: "🐉",
    title: "Avatar Rồng",
    description: "Avatar",
    price: 200,
    rarity: "Epic",
    color: "bg-orange-500 hover:bg-orange-600",
    onBuy: onBuyDragon,
  },

  {
    id: 8,
    category: "avatar",
    icon: "👑",
    title: "Vua Toán",
    description: "Avatar VIP",
    price: 500,
    rarity: "Legendary",
    color: "bg-yellow-600 hover:bg-yellow-700",
    onBuy: onBuyKing,
  },
];
const filteredItems =
    activeTab === "featured"
        ? shopItems
        : shopItems.filter(item => item.category === activeTab);
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

{filteredItems.map((item) => (
    <ShopCard
        key={item.id}
        icon={item.icon}
        title={item.title}
        description={item.description}
        price={item.price}
        rarity={item.rarity}
        color={item.color}
        onBuy={item.onBuy}
    />
))}

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