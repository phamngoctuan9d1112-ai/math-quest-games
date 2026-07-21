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
        overflow-hidden
        rounded-3xl
        border
        ${border}

        bg-gradient-to-b
        from-[#1a2d4f]
        via-[#16233d]
        to-[#101827]

        h-[310px]

        flex
        flex-col

        shadow-xl

        transition-all
        duration-300

        hover:-translate-y-2
        hover:shadow-2xl
        group
      `}
    >
      {/* EFFECT */}
      <div className="shop-card-stars" />
      <div className="shop-card-glow" />
      <div className="shop-card-shine" />

      {/* HOT */}
      <div className="absolute top-4 right-4 z-30">
        <span className="
            flex
            items-center
            gap-1

            px-3
            py-1

            rounded-full

            bg-gradient-to-r
            from-red-500
            to-pink-500

            text-white
            text-[11px]
            font-bold

            shadow-lg
            shadow-red-500/40
        ">
          🔥 HOT
        </span>
      </div>

      {/* IMAGE */}
      <div
        className="
          h-[105px]

          flex
          items-center
          justify-center

          relative

          bg-gradient-to-b
          from-[#193760]
          to-[#132544]
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
            text-5xl

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

      {/* CONTENT */}
      <div
        className="
          flex-1

          flex
          flex-col

          px-5
          py-4

          bg-black/15
          backdrop-blur-md
        "
      >
        {/* TITLE */}
        <h2
          className="
            text-xl
            font-black
            text-white
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

              text-[11px]
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

            text-base
            font-bold

            text-yellow-300

            leading-6
          "
        >
          {description}
        </p>

        {/* FOOTER */}
        <div className="mt-auto">
          {/* PRICE */}
          <div
            className="
              mt-4

              rounded-2xl

              bg-black/35

              border
              border-white/10

              py-2

              text-center
            "
          >
            <div className="text-[11px] text-slate-400">
              Giá
            </div>

            <div
              className="
                mt-1

                text-2xl

                font-black

                text-yellow-300
              "
            >
              🪙 {price}
            </div>
          </div>

          {/* BUTTON */}
          <button
            onClick={onBuy}
            className={`
              mt-3

              w-full

              rounded-xl

              py-2.5

              text-sm
              font-bold

              text-white

              transition-all
              duration-300

              hover:scale-[1.03]
              active:scale-95

              ${color}
            `}
          >
            🛒 Mua ngay
          </button>
        </div>
      </div>
    </div>
  );
}