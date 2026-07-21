type Props = {
  activeTab: string;
  onChange: (tab: string) => void;
};

export default function ShopSidebar({
  activeTab,
  onChange,
}: Props) {
  const menus = [
  {
    id: "featured",
    icon: "🔥",
    title: "Nổi bật",
  },
  {
    id: "pet",
    icon: "🐶",
    title: "Pet & Thú cưng",
  },
  {
    id: "avatar",
    icon: "🧑",
    title: "Avatar",
  },
  {
    id: "weapon",
    icon: "⚔️",
    title: "Vũ khí",
  },
  {
    id: "item",
    icon: "🧪",
    title: "Vật phẩm",
  },
  {
    id: "bundle",
    icon: "💎",
    title: "Gói đặc biệt",
  },
  {
    id: "achievement",
    icon: "🏆",
    title: "Thành tựu",
  },
];
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
    
      <div className="p-8">

        <h2
          className="
          text-3xl
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

    

    <div className="space-y-2 mt-8">
  {menus.map((menu) => (
    <button
      key={menu.id}
      onClick={() => onChange(menu.id)}
      className={`
        w-full
        flex
        items-center
        gap-3

        px-5
        py-4

        rounded-2xl

        transition-all
        duration-300

        ${
          activeTab === menu.id
            ? "bg-yellow-500/20 border border-yellow-400 text-yellow-300"
            : "text-slate-300 hover:bg-white/5"
        }
      `}
    >
      <span className="text-xl">{menu.icon}</span>

      <span className="font-semibold">
        {menu.title}
      </span>
    </button>
  ))}
</div>

   

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