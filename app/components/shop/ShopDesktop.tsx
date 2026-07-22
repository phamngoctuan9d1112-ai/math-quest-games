"use client";

import ShopSidebar from "../ShopSidebar";
import ShopBanner from "../ShopBanner";
import ShopCard from "../ShopCard";

type Props = {
  coins: number;

  inventory: string[];

  activeTab: string;

  filteredItems: any[];

  setActiveTab: (tab: string) => void;

  buyItem: (
    item: string,
    price: number
  ) => void;

  onBuyPremium: () => void;

  onClose: () => void;
};

export default function ShopDesktop({
  coins,
  inventory,
  activeTab,
  filteredItems,
  setActiveTab,
  buyItem,
  onBuyPremium,
  onClose,
}: Props) {
  return (
    <div className="flex h-full">

      {/* Sidebar */}

      <ShopSidebar
        activeTab={activeTab}
        onChange={setActiveTab}
      />

      {/* Main */}

      <div
        className="
        flex-1
        flex
        flex-col
        overflow-hidden
        bg-[#08152f]
      "
      >

        {/* ================= HEADER ================= */}

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

          <div className="shop-stars" />

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
          "
          />

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
          "
          />

          <div className="shop-header-shine" />

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

            {/* Left */}

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

                Trang bị Pet, Avatar và các vật phẩm hiếm để tăng sức mạnh
                trong hành trình chinh phục Vương Quốc Toán Học.

              </p>

            </div>

            {/* Coin */}

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

        {/* ================= CONTENT ================= */}

        <div
          className="
          flex-1

          overflow-y-auto

          px-12
          pb-12
        "
        >

          <div className="pt-6">

            <ShopBanner
              onBuy={onBuyPremium}
            />

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
                owned={inventory.includes(item.id)}
                stackable={item.stackable}
                onBuy={() =>
                  buyItem(item.id, item.price)
                }
              />

            ))}

          </div>

          {/* Close Button */}

          <button
            onClick={onClose}
            className="
            w-full

            mt-8

            bg-gray-800

            hover:bg-red-600

            hover:scale-[1.02]

            active:scale-95

            transition-all

            duration-300

            text-white

            py-4

            rounded-2xl

            font-bold

            text-lg

            shadow-xl
          "
          >

            ❌ Đóng Shop

          </button>

        </div>

      </div>

    </div>
  );
}