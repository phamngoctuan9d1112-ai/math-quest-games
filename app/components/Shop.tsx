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
bg-gradient-to-r
from-yellow-500
to-orange-500
text-white
p-6
"
>

<h1 className="text-4xl font-bold">
🛒 Cửa Hàng
</h1>

<p className="mt-2 text-xl">
💰 Coin hiện có:
<span className="font-bold ml-2">
{coins}
</span>
</p>

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

</div>   {/* đóng div flex-1 overflow-y-auto */}

</div>   {/* đóng khung shop */}

</main>
  );
}