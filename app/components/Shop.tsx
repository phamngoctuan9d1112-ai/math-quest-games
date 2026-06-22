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
      <div className="bg-white p-8 rounded-3xl shadow-2xl w-[700px] max-w-full">

        <h1 className="text-4xl font-bold text-center mb-4">
          🛒 Shop
        </h1>

        <p className="text-center text-2xl font-bold mb-6">
          🪙 Coin: {coins}
        </p>

        

        <div className="grid gap-4">

          {/* Tim */}
          <button
            onClick={onBuyHeart}
            className="bg-red-500 text-white p-4 rounded-xl font-bold"
          >
            ❤️ Mua 1 Tim (20 Coin)
          </button>

          {/* Pets */}
          <button
            onClick={onBuyDog}
            className="bg-green-500 text-white p-4 rounded-xl font-bold"
          >
            🐶 Chó Toán Học (100 Coin)
          </button>

          <button
            onClick={onBuyCat}
            className="bg-blue-500 text-white p-4 rounded-xl font-bold"
          >
            🐱 Mèo Toán Học (200 Coin)
          </button>

          <button
            onClick={onBuyDragonPet}
            className="bg-purple-500 text-white p-4 rounded-xl font-bold"
          >
            🐉 Rồng Toán Học (500 Coin)
          </button>

          {/* Avatar */}
          <button
            onClick={onBuyWizard}
            className="bg-indigo-500 text-white p-4 rounded-xl font-bold"
          >
            🧙 Pháp Sư (50 Coin)
          </button>

          <button
            onClick={onBuyHero}
            className="bg-cyan-500 text-white p-4 rounded-xl font-bold"
          >
            🦸 Siêu Anh Hùng (100 Coin)
          </button>

          <button
            onClick={onBuyDragon}
            className="bg-emerald-500 text-white p-4 rounded-xl font-bold"
          >
            🐉 Avatar Rồng (200 Coin)
          </button>

          <button
            onClick={onBuyKing}
            className="bg-yellow-600 text-white p-4 rounded-xl font-bold"
          >
            👑 Vua Toán (500 Coin)
          </button>
          
        </div>

        <button
          onClick={onClose}
          className="w-full mt-6 bg-gray-800 text-white py-3 rounded-xl font-bold"
        >
          Đóng Shop
        </button>
      </div>
    </main>
  );
}