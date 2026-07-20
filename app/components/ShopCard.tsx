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
      ? "border-yellow-400 shadow-yellow-400/30 shop-legendary"
      : rarity === "Epic"
      ? "border-purple-500 shadow-purple-500/20 shop-epic"
      : rarity === "Rare"
      ? "border-cyan-400 shadow-cyan-400/20 shop-rare"
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
      className={`
        relative
        group
        overflow-hidden
        rounded-3xl
        border
        ${border}

        bg-gradient-to-b
        from-[#162443]
        to-[#101828]

        shadow-xl
        hover:shadow-2xl
        hover:-translate-y-2

        transition-all
        duration-300

        h-[330px]
      `}
    >
      {/* hiệu ứng nền */}
      <div className="shop-card-stars" />
      <div className="shop-card-glow" />
      <div className="shop-card-shine" />

      {/* HOT */}
      <div className="absolute top-4 right-4 z-30">
        <span
          className="
            px-3
            py-1

            rounded-full

            text-xs
            font-bold

            text-white

            bg-gradient-to-r
            from-red-500
            to-pink-500

            shadow-lg
            shadow-red-500/40
          "
        >
          🔥 HOT
        </span>
      </div>

      {/* ẢNH */}
      <div
        className="
          relative

          h-[130px]

          flex
          items-center
          justify-center

          overflow-hidden

          bg-gradient-to-b
          from-[#163760]
          to-[#0d1830]
        "
      >
        <div
          className="
            absolute
            inset-0

            bg-[radial-gradient(circle_at_center,rgba(255,255,255,.12),transparent_70%)]
          "
        />

        <div
          className="
            text-7xl

            relative
            z-20

            transition-all
            duration-300

            group-hover:scale-110
            group-hover:-translate-y-1
          "
        >
          {icon}
        </div>
      </div>

      {/* PANEL */}
      <div
        className="
          flex
          flex-col

          h-[calc(100%-130px)]

          bg-black/15

          backdrop-blur-xl

          px-5
          py-4
        "
      >
        {/* tên */}
        <h2
          className="
            text-2xl
            font-black
            text-white
            text-center
          "
        >
          {title}
        </h2>

        {/* rarity */}
        <div className="flex justify-center mt-2">
          <span
            className={`
              px-3
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

        {/* mô tả */}
        <p
          className="
            mt-3

            text-center

            text-lg
            font-bold

            text-yellow-300
          "
        >
          {description}
        </p>

        {/* giá */}
        <div
          className="
            mt-auto

            rounded-xl

            bg-black/30

            border
            border-white/10

            py-3

            text-center
          "
        >
          <div className="text-xs text-slate-400">
            Giá
          </div>

          <div
            className="
              mt-1

              text-3xl
              font-black

              text-yellow-300
            "
          >
            🪙 {price}
          </div>
        </div>

        {/* button */}
        <button
          onClick={onBuy}
          className={`
            mt-4

            w-full

            rounded-xl

            py-2.5

            font-bold

            text-white

            transition-all
            duration-300

            hover:scale-105
            active:scale-95

            ${color}
          `}
        >
          Mua ngay
        </button>
      </div>
    </div>
  );
}