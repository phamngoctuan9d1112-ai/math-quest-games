"use client";

import { useState } from "react";
import { REWARD_INFO, type RewardKey } from "./rewards";

type Chest = {
  id: number | string;
  type: string;
  opened: boolean;
  reward?: string | null;
};

type Props = {
  chests: Chest[];
  onOpen: (chest: Chest) => void | Promise<void>;
  onClose: () => void;
};

const CHEST_LABEL: Record<string, string> = {
  bronze: "🟫 Rương Đồng",
  silver: "⬜ Rương Bạc",
  gold: "🟨 Rương Vàng",
};

export default function ChestRoom({ chests, onOpen, onClose }: Props) {
  const [openingId, setOpeningId] = useState<number | string | null>(null);

  // Rương chưa mở lên trước
  const sorted = [...chests].sort((a, b) => Number(a.opened) - Number(b.opened));

  async function handleOpen(chest: Chest) {
    if (openingId !== null) return;
    setOpeningId(chest.id);
    try {
      await onOpen(chest);
    } finally {
      setOpeningId(null);
    }
  }

  return (
    <main className="fixed inset-0 bg-black/70 flex items-center justify-center z-[9999] p-4">
      <div className="bg-slate-900 text-white rounded-3xl w-[700px] max-w-full max-h-[90vh] overflow-y-auto p-8">
        <h1 className="text-4xl font-black text-center mb-8">🎁 Phòng Rương</h1>

        {sorted.length === 0 ? (
          <div className="text-center text-gray-400 text-xl">Bạn chưa có rương nào.</div>
        ) : (
          <div className="space-y-4">
            {sorted.map((chest) => {
              const info = chest.reward ? REWARD_INFO[chest.reward as RewardKey] : undefined;
              return (
                <div
                  key={chest.id}
                  className="flex justify-between items-center bg-slate-800 rounded-2xl p-5"
                >
                  <div>
                    <div className="text-2xl font-bold">{CHEST_LABEL[chest.type] ?? "🎁 Rương"}</div>
                    <div className="text-gray-400">
                      {chest.opened
                        ? info
                          ? `Đã mở · nhận ${info.emoji} ${info.name}`
                          : "Đã mở"
                        : "Chưa mở"}
                    </div>
                  </div>

                  {!chest.opened && (
                    <button
                      onClick={() => handleOpen(chest)}
                      disabled={openingId !== null}
                      className="bg-yellow-500 hover:bg-yellow-600 disabled:opacity-50 text-white px-6 py-3 rounded-xl font-bold cursor-pointer"
                    >
                      {openingId === chest.id ? "Đang mở..." : "Mở"}
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        )}

        <button
          onClick={onClose}
          className="mt-8 w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl cursor-pointer"
        >
          Đóng
        </button>
      </div>
    </main>
  );
}
