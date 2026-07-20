export default function ShopSidebar() {
  return (
    <aside
      className="
      w-[280px]
      bg-gradient-to-b
      from-[#08132f]
      to-[#0d1738]

      border-r
      border-white/10

      flex
      flex-col
      "
    >
      {/* Logo */}
      <div className="p-8">

        <h2
          className="
          text-4xl
          font-black
          text-yellow-400
          "
        >
          👑 Royal Shop
        </h2>

        <p
          className="
          text-slate-300
          mt-2
          "
        >
          Cửa Hàng Hoàng Gia
        </p>

      </div>

      {/* Menu */}

      <nav className="px-4 flex-1">

        <button className="shop-menu active">
          🔥 Nổi bật
        </button>

        <button className="shop-menu">
          🐶 Pet & Thú cưng
        </button>

        <button className="shop-menu">
          🧑 Avatar
        </button>

        <button className="shop-menu">
          ⚔️ Vũ khí
        </button>

        <button className="shop-menu">
          🧪 Vật phẩm
        </button>

        <button className="shop-menu">
          💎 Gói đặc biệt
        </button>

        <button className="shop-menu">
          🏆 Thành tựu
        </button>

      </nav>

      {/* Card cuối */}

      <div className="p-5">

        <div
          className="
          rounded-3xl

          bg-gradient-to-br
          from-[#1b245a]
          to-[#232b70]

          border
          border-white/10

          p-5
          "
        >
          <div className="text-5xl">
            👑
          </div>

          <h3
            className="
            text-yellow-300
            font-bold
            mt-3
            "
          >
            Thẻ Hoàng Gia
          </h3>

          <p
            className="
            text-slate-300
            text-sm
            mt-2
            "
          >
            Nhận thêm 20% Coin mỗi ngày
          </p>

          <button
            className="
            mt-5

            w-full

            rounded-xl

            py-3

            bg-indigo-500

            hover:bg-indigo-600

            text-white

            font-bold

            transition
            "
          >
            Xem chi tiết
          </button>

        </div>

      </div>

    </aside>
  );
}