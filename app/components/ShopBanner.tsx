export default function ShopBanner() {
  return (
    <section
      className="
      relative
      overflow-hidden

      rounded-3xl

      border
      border-purple-400/40

      bg-gradient-to-r
      from-[#24175e]
      via-[#2b2b92]
      to-[#4723b6]

      h-[180px]

      mb-10
      "
    >
      {/* Glow */}

      <div
        className="
        absolute

        inset-0

        bg-gradient-to-r

        from-purple-500/10

        via-transparent

        to-yellow-400/10
        "
      />

      {/* Coins */}

      <div className="shop-banner-coins" />

      <div
        className="
        relative

        h-full

        flex

        items-center

        justify-between

        px-12
        "
      >
        {/* Left */}

        <div>

          <div className="text-7xl mb-4">
            👑
          </div>

          <h2
            className="
            text-5xl

            font-black

            text-white
            "
          >
            GÓI HOÀNG GIA
          </h2>

          <p
            className="
            text-2xl

            text-yellow-200

            mt-3
            "
          >
            Nhận ngay 2.000 Coin + Quà tặng đặc biệt
          </p>

          <button
            className="
            mt-8

            rounded-2xl

            px-8

            py-4

            bg-yellow-400

            hover:bg-yellow-300

            text-black

            font-black

            text-xl

            transition
            "
          >
            Mua ngay
          </button>

        </div>

        {/* Right */}

        <div
          className="
          text-[170px]

          select-none

          drop-shadow-[0_0_40px_rgba(255,220,0,.4)]
          "
        >
          💰
        </div>

      </div>
    </section>
  );
}