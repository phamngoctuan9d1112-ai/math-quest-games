"use client";

import { REWARD_INFO, type RewardKey } from "./rewards";

type Props = {
  // Danh sách phần thưởng đã nhận từ các rương (mỗi phần tử là mã vật phẩm, ví dụ "potion")
  items: string[];
  onClose: () => void;
};

export default function ChestInventory({ items, onClose }: Props) {
  const grouped = Array.from(
    items.reduce((map, key) => map.set(key, (map.get(key) ?? 0) + 1), new Map<string, number>())
  );

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[9999] p-4">
      <div className="bg-slate-900 text-white rounded-3xl p-8 w-[700px] max-w-full max-h-[85vh] overflow-y-auto">
        <h2 className="text-3xl font-black text-center mb-6">🎒 Vật phẩm từ rương</h2>

        {grouped.length === 0 ? (
          <p className="text-center text-gray-400">Chưa có vật phẩm nào</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {grouped.map(([key, count]) => {
              const info = REWARD_INFO[key as RewardKey] ?? { emoji: key, name: "Vật phẩm" };
              return (
                <div
                  key={key}
                  className="relative bg-slate-800 rounded-2xl p-4 flex flex-col items-center shadow"
                >
                  <div className="text-5xl">{info.emoji}</div>
                  <div className="mt-2 text-sm font-bold text-gray-200">{info.name}</div>
                  <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs font-bold rounded-full px-2 py-0.5">
                    ×{count}
                  </span>
                </div>
              );
            })}
          </div>
        )}

        <button
          onClick={onClose}
          className="mt-8 w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-bold cursor-pointer"
        >
          Đóng
        </button>
      </div>
    </div>
  );
}
