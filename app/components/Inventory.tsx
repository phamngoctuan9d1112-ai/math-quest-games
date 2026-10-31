"use client";

import Avatar from "./Avatar";
import { REWARD_INFO, type RewardKey } from "./rewards";

type Props = {
  inventory: string[];
  weapon: string;
  pet: string;
  avatar: string;
  consumables?: Partial<Record<RewardKey, number>>;
  onClose: () => void;
};

export default function Inventory({
  inventory,
  weapon,
  pet,
  avatar,
  consumables = {},
  onClose,
}: Props) {
  // Gom các vật phẩm trùng nhau: 🗡️ ×3
  const purchased = Array.from(
    inventory.reduce((map, item) => map.set(item, (map.get(item) ?? 0) + 1), new Map<string, number>())
  );

  const ownedConsumables = (Object.keys(REWARD_INFO) as RewardKey[]).filter(
    (key) => (consumables[key] ?? 0) > 0
  );

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4">
      <div className="bg-slate-900 rounded-3xl w-[700px] max-w-full max-h-[90vh] overflow-y-auto p-8 text-white">
        <h1 className="text-4xl font-bold text-center">🎒 Túi Đồ</h1>

        <div className="mt-8">
          <h2 className="text-2xl font-bold">👤 Avatar</h2>
          <Avatar avatar={avatar} size={90} />

          <h2 className="text-2xl font-bold mt-8">⚔ Vũ khí</h2>
          <div className="text-6xl mt-3">{weapon || <span className="text-base text-gray-400">Chưa có</span>}</div>

          <h2 className="text-2xl font-bold mt-8">🐾 Pet</h2>
          <div className="text-6xl mt-3">{pet || <span className="text-base text-gray-400">Chưa có</span>}</div>

          <h2 className="text-2xl font-bold mt-8">🎁 Vật phẩm từ rương</h2>
          {ownedConsumables.length === 0 ? (
            <p className="mt-3 text-gray-400">Chưa có vật phẩm nào. Hãy mở rương để nhận thêm!</p>
          ) : (
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 mt-5">
              {ownedConsumables.map((key) => (
                <div key={key} className="relative bg-slate-800 rounded-2xl p-4 text-center">
                  <div className="text-5xl">{REWARD_INFO[key].emoji}</div>
                  <div className="mt-2 text-xs text-gray-300">{REWARD_INFO[key].name}</div>
                  <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs font-bold rounded-full px-2 py-0.5">
                    ×{consumables[key]}
                  </span>
                </div>
              ))}
            </div>
          )}

          <h2 className="text-2xl font-bold mt-8">📦 Vật phẩm đã mua</h2>
          {purchased.length === 0 ? (
            <p className="mt-3 text-gray-400">Bạn chưa mua vật phẩm nào.</p>
          ) : (
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 mt-5">
              {purchased.map(([item, count]) => (
                <div key={item} className="relative bg-slate-800 rounded-2xl p-4 text-center text-5xl">
                  {item}
                  {count > 1 && (
                    <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs font-bold rounded-full px-2 py-0.5">
                      ×{count}
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        <button
          onClick={onClose}
          className="w-full mt-10 bg-red-500 hover:bg-red-600 py-4 rounded-xl font-bold cursor-pointer"
        >
          Đóng
        </button>
      </div>
    </div>
  );
}
