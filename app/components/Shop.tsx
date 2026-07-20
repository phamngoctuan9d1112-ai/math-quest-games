import ShopCard from "./ShopCard";

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
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-400 to-orange-500 p-6">
     <div
className="
w-[1100px]
max-w-[95vw]
max-h-[90vh]
bg-slate-900
rounded-3xl
shadow-2xl
overflow-hidden
flex
flex-col
"
>
<div
className="
relative

overflow-hidden

px-8
py-8

bg-gradient-to-r
from-[#13234d]
via-[#1d3f84]
to-[#5b2bb5]

border-b
border-cyan-400/20
"
>

<div
className="
absolute

top-[-120px]
right-[-120px]

w-[320px]
h-[320px]

rounded-full

bg-purple-500/30

blur-[100px]
"
/>

<div
className="
absolute

bottom-[-80px]
left-[-80px]

w-[250px]
h-[250px]

rounded-full

bg-cyan-400/20

blur-[90px]
"/>

<div
className="
relative
z-10

flex

items-center

justify-between

flex-wrap

gap-6
">

<div>

<h1
className="
text-5xl
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

text-lg
"
>

Trang bị vật phẩm để chinh phục Vương Quốc Toán Học

</p>

</div>

<div
className="
rounded-2xl

bg-white/10

backdrop-blur-xl

border

border-white/20

px-6
py-4
"
>

  <div className="text-sm text-cyan-100">

Số Coin hiện có

</div>

<div
className="
mt-2

text-4xl

font-black

text-yellow-300
"
>

💰 {coins}

</div>

</div>

</div>

</div>

<div
className="
flex-1
overflow-y-auto
p-6
"
>

<div
className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
xl:grid-cols-4
gap-6
"
>

<ShopCard
    icon="❤️"
    title="Tim"
    description="+1 mạng"
    price={20}
    rarity="Common"
    color="bg-red-500 hover:bg-red-600"
    onBuy={onBuyHeart}
/>
<ShopCard
    icon="🐶"
    title="Chó Toán"
    description="+1 Coin mỗi câu"
    price={100}
    rarity="Rare"
    color="bg-blue-500 hover:bg-blue-600"
    onBuy={onBuyDog}
/>

<ShopCard
    icon="🐱"
    title="Mèo Toán"
    description="+2 Coin mỗi câu"
    price={200}
    rarity="Epic"
    color="bg-purple-500 hover:bg-purple-600"
    onBuy={onBuyCat}
/>

<ShopCard
    icon="🐉"
    title="Rồng Huyền Thoại"
    description="+5 Coin mỗi câu"
    price={500}
    rarity="Legendary"
    color="bg-yellow-500 hover:bg-yellow-600"
    onBuy={onBuyDragonPet}
/>

<ShopCard
    icon="🧙"
    title="Pháp Sư"
    description="Avatar"
    price={50}
    rarity="Common"
    color="bg-green-500 hover:bg-green-600"
    onBuy={onBuyWizard}
/>

<ShopCard
    icon="🦸"
    title="Siêu Anh Hùng"
    description="Avatar"
    price={100}
    rarity="Rare"
    color="bg-cyan-500 hover:bg-cyan-600"
    onBuy={onBuyHero}
/>

<ShopCard
    icon="🐉"
    title="Avatar Rồng"
    description="Avatar"
    price={200}
    rarity="Epic"
    color="bg-orange-500 hover:bg-orange-600"
    onBuy={onBuyDragon}
/>

<ShopCard
    icon="👑"
    title="Vua Toán"
    description="Avatar VIP"
    price={500}
    rarity="Legendary"
    color="bg-yellow-600 hover:bg-yellow-700"
    onBuy={onBuyKing}
/>

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