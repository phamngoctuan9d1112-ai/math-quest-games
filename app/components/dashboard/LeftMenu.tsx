"use client";

type Props = {
  onShop: () => void;
  onAchievements: () => void;
  onChest: () => void;
  onChestInventory: () => void;
};

export default function LeftMenu({
  onShop,
  onAchievements,
  onChest,
  onChestInventory,
}: Props) {
  const menus = [
    {
      icon: "🛒",
      title: "Cửa hàng",
      color: "from-pink-500 to-red-500",
      onClick: onShop,
    },
    {
      icon: "🏆",
      title: "Thành tích",
      color: "from-yellow-400 to-orange-500",
      onClick: onAchievements,
    },
    {
      icon: "🎁",
      title: "Rương quà",
      color: "from-green-500 to-emerald-600",
      onClick: onChest,
    },
    {
      icon: "🎒",
      title: "Túi đồ",
      color: "from-cyan-500 to-blue-600",
      onClick: onChestInventory,
    },
  ];

  return (
    <div className="space-y-5">
      {menus.map((item) => (
        <button
          key={item.title}
          onClick={item.onClick}
          className={`
            group
            w-full
            rounded-3xl
            bg-gradient-to-r
            ${item.color}
            text-white
            p-5
            shadow-xl
            transition-all
            duration-300
            hover:scale-105
            hover:-translate-y-1
            active:scale-95
          `}
        >
          <div className="flex items-center gap-4">
            <div
              className="
                w-14
                h-14
                rounded-2xl
                bg-white/20
                flex
                items-center
                justify-center
                text-3xl
                backdrop-blur
              "
            >
              {item.icon}
            </div>

            <div className="text-left">
              <div className="font-black text-lg">
                {item.title}
              </div>

              <div className="text-sm opacity-80">
                Mở ngay
              </div>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}