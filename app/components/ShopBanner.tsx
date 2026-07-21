interface ShopBannerProps {
    onBuy: () => void;
}

export default function ShopBanner({
    onBuy,
}: ShopBannerProps) {
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
      

        <div>

          <div className="text-5xl mb-4">
            👑
          </div>

          <h2
            className="
            text-4xl

            font-black

            text-white
            "
          >
            GÓI HOÀNG GIA
          </h2>

          <p
            className="
            text-xl

            text-yellow-200

            mt-3
            "
          >
chọn khám phá để xem chi tiết gói
          </p>
<button
    onClick={() => {
        console.log("CLICK");
        onBuy();
    }}
>
    Khám phá →
</button>

        </div>


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