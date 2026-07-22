"use client";

import ShopBanner from "../ShopBanner";
import ShopCard from "../ShopCard";

type Props = {
  coins: number;

  inventory: string[];

  activeTab: string;

  filteredItems: any[];

  showMobileMenu: boolean;

  setShowMobileMenu: (v: boolean) => void;

  setActiveTab: (tab: string) => void;

  buyItem: (
    item: string,
    price: number
  ) => void;

  onBuyPremium: () => void;

  onClose: () => void;
};

export default function ShopMobile({
  coins,
  inventory,
  activeTab,
  filteredItems,
  showMobileMenu,
  setShowMobileMenu,
  setActiveTab,
  buyItem,
  onBuyPremium,
  onClose,
}: Props) {
  return (
    <div
className="
h-screen
flex
flex-col
bg-[#071226]
overflow-hidden
"
>

      {/* HEADER */}

      <div className="px-4 pt-4">

  <div
  className="
  relative
  overflow-hidden

  rounded-2xl

  bg-gradient-to-r
  from-[#152d63]
  via-[#244b92]
  to-[#30539d]

  border
  border-cyan-400/20

  px-4
  py-3

  flex
  items-center
  justify-between

  shadow-xl
"
>

          <button
            onClick={() =>
              setShowMobileMenu(true)
            }
         className="
text-white
text-3xl
font-bold
"
          >
            ☰
          </button>

          <div
            className="
            flex
            items-center
            gap-3
          "
          >

            <span className="text-2xl">
              👑
            </span>

            <div>

              <div
                className="
                text-yellow-300
                font-black
                text-xl
              "
              >
                Royal Shop
              </div>

              <div
                className="
                text-slate-200
                text-[10px]
              "
              >
                Cửa Hàng Hoàng Gia
              </div>

            </div>

          </div>

          <div
            className="
        rounded-2xl

bg-gradient-to-r
from-[#6d38dd]
to-[#8b52ff]

px-3
py-2

text-center

shadow-md

min-w-[82px]
          "
          >

            <div
              className="
              text-yellow-300
              font-black
              text-2xl
            "
            >
              {coins}
            </div>

            <div
              className="
              text-white
              text-xs
            "
            >
              Coin
            </div>

          </div>

        </div>

      </div>

      {/* HERO */}

      <div className="px-4 pt-4">

        <div
          className="
          relative

          overflow-hidden

          rounded-[26px]

          bg-gradient-to-br
          from-[#143f75]
          via-[#2d4d9d]
          to-[#6d35df]

          p-5

          shadow-2xl
        "
        >

          <div
            className="
            inline-flex

            items-center

            gap-2

            rounded-full

            border

            border-yellow-400

            bg-yellow-500/10

           px-3
py-1

            text-yellow-300

            font-bold
          "
          >

            👑 Royal Shop

          </div>

          <div className="mt-5 text-5xl">
            🏪
          </div>

          <h1
            className="
            mt-5

            text-white

            text-[30px]

            leading-tight

            font-black
          "
          >
            Cửa Hàng
            <br />
            Hoàng Gia
          </h1>

          <p
            className="
            mt-5

            text-slate-200

            text-sm
leading-6
          "
          >
            Trang bị Pet, Avatar,
            Vũ khí và các vật phẩm
            hiếm để tăng sức mạnh
            trong hành trình khám phá
            Vương Quốc Toán Học.
          </p>

          <div
            className="
            absolute

            right-[-70px]

            top-[-70px]

            w-[220px]

            h-[220px]

            rounded-full

            bg-cyan-300/10

            blur-[90px]
          "
          />

          <div
            className="
            absolute

            left-[-80px]

            bottom-[-90px]

            w-[240px]

            h-[240px]

            rounded-full

            bg-blue-300/10

            blur-[120px]
          "
          />

        </div>

      </div>

      {/* PREMIUM */}

      <div className="px-4 pt-5">

        <ShopBanner
          onBuy={onBuyPremium}
        />

      </div>

      {/* TITLE */}

      <div
        className="
        px-4

        pt-5

        pb-3

        flex

        items-center

        justify-between
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
            text-white

            text-2xl

            font-black
          "
          >

            Vật phẩm nổi bật

          </h2>

        </div>

        <button
          className="
          text-yellow-300
          font-bold
        "
        >
          Xem tất cả →
        </button>

      </div>

      {/* ITEMS */}

      <div
        className="
        flex-1

        overflow-y-auto

        px-4

        pb-36
      "
      >

        <div
          className="
          grid

          grid-cols-2

          gap-4
        "
        >
            {filteredItems.map((item) => (

  <div
    key={item.id}
    className="
    relative

    transition-all

    duration-300

    hover:scale-[1.02]
    "
  >

    <ShopCard
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

  </div>

))}

</div>

</div>

{/* ================= MOBILE SIDEBAR ================= */}

{showMobileMenu && (

<>

<div

onClick={() => setShowMobileMenu(false)}

className="
fixed
inset-0
bg-black/70
backdrop-blur-sm
z-[100]
"
/>

<div

className="
fixed

left-0
top-0
bottom-0

w-[300px]

bg-[#08152f]

border-r
border-cyan-400/20

shadow-[0_20px_60px_rgba(0,0,0,.45)]

z-[101]

overflow-y-auto
"

>

<div
className="
p-6

border-b

border-cyan-400/20
"
>

<div
className="
text-3xl

font-black

text-yellow-300
"
>

👑 Royal Shop

</div>

<div
className="
text-slate-400

mt-2
"
>

Cửa Hàng Hoàng Gia

</div>

</div>

<div className="p-4 space-y-3">

{[
{
icon:"🔥",
title:"Nổi bật",
key:"featured",
},

{
icon:"🐶",
title:"Pet",
key:"pet",
},

{
icon:"🧑",
title:"Avatar",
key:"avatar",
},

{
icon:"⚔️",
title:"Vũ khí",
key:"weapon",
},

{
icon:"🧪",
title:"Vật phẩm",
key:"item",
},

{
icon:"💎",
title:"Đặc biệt",
key:"premium",
},

].map((menu)=>(

<button

key={menu.key}

onClick={()=>{
setActiveTab(menu.key);
setShowMobileMenu(false);
}}

className={`
w-full

rounded-2xl

px-5
py-4

flex
items-center
gap-4

transition-all

${
activeTab===menu.key

?

"bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500 text-yellow-300"

:

"text-slate-300 hover:bg-white/5"

}

`}

>

<div className="text-3xl">

{menu.icon}

</div>

<div
className="
font-bold
text-lg
"
>

{menu.title}

</div>

</button>

))}

</div>

</div>

</>

)}
      {/* ================= BOTTOM NAV ================= */}

      <div
        className="
        fixed
        bottom-0
        left-0
        right-0

        bg-[#18284d]/95
        backdrop-blur-xl

        border-t
        border-cyan-400/20

        shadow-[0_-10px_40px_rgba(0,0,0,.45)]

        z-[90]
        "
      >

        <div
          className="
          grid
          grid-cols-6

          py-3
          "
        >

          {[
            {
              icon: "🔥",
              label: "Hot",
              key: "featured",
            },

            {
              icon: "🐶",
              label: "Pet",
              key: "pet",
            },

            {
              icon: "🧑",
              label: "Avatar",
              key: "avatar",
            },

            {
              icon: "⚔️",
              label: "Vũ khí",
              key: "weapon",
            },

            {
              icon: "🧪",
              label: "Item",
              key: "item",
            },

            {
              icon: "💎",
              label: "VIP",
              key: "premium",
            },

          ].map((tab) => (

            <button
              key={tab.key}

              onClick={() =>
                setActiveTab(tab.key)
              }

              className="
              flex
              flex-col
              items-center
              justify-center

              gap-1

              transition-all
              duration-300
              "
            >

              <div
                className={`
                w-12
                h-12

                rounded-2xl

                flex
                items-center
                justify-center

                text-2xl

                transition-all

                ${
                  activeTab === tab.key
                    ? "bg-gradient-to-r from-yellow-500 to-orange-500 scale-110 shadow-lg"
                    : "bg-white/5"
                }
                `}
              >

                {tab.icon}

              </div>

              <div
                className={`
                text-[11px]
                font-semibold

                ${
                  activeTab === tab.key
                    ? "text-yellow-300"
                    : "text-slate-400"
                }
                `}
              >

                {tab.label}

              </div>

            </button>

          ))}

        </div>

      </div>

      {/* CLOSE SHOP */}

      <button
        onClick={onClose}
        className="
        fixed

        right-5
        bottom-28

        w-14
        h-14

        rounded-full

        bg-red-500

        text-white

        text-2xl

        shadow-2xl

        active:scale-95

        transition
        "
      >

        ✕

      </button>

    </div>

  );
}