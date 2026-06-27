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
  const borderColor =
    rarity === "Rare"
      ? "border-blue-400"
      : rarity === "Epic"
      ? "border-purple-500"
      : rarity === "Legendary"
      ? "border-yellow-400"
      : "border-slate-700";

  return (
    <div
      className={`
        bg-gradient-to-br
        from-slate-800
        to-slate-900
        rounded-3xl
        p-6
        shadow-xl
        border
        ${borderColor}
        hover:scale-105
        hover:shadow-yellow-500/40
        hover:shadow-2xl
        transition
      `}
    >
      {/* HOT */}
      <div className="flex justify-end">
        <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full font-bold">
          HOT
        </span>
      </div>

      {/* Icon */}
      <div className="text-6xl text-center">
        {icon}
      </div>

      {/* Tên */}
      <h2 className="text-xl font-bold text-white text-center mt-4">
        {title}
      </h2>

      {/* Độ hiếm */}
      <div className="text-center mt-2">
        <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full font-bold">
          {rarity}
        </span>
      </div>

      {/* Mô tả */}
      <p className="text-gray-300 text-center mt-3">
        {description}
      </p>

      {/* Giá */}
      <p className="text-yellow-400 text-xl font-bold text-center mt-4">
        {price} Coin
      </p>

      {/* Nút mua */}
      <button
        onClick={onBuy}
        className={`
          w-full
          mt-5
          py-3
          rounded-xl
          font-bold
          text-white
          transition
          hover:scale-105
          active:scale-95
          ${color}
        `}
      >
        🛒 Mua
      </button>
    </div>
  );
}