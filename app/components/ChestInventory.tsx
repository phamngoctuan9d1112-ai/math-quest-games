"use client";

import { supabase } from "../lib/supabase";

type Props = {
  items: string[];
  onClose: () => void;
};

export default function ChestInventory({
  items,
  onClose,
}: Props) {
  
  return (
    <div
      className="
      fixed
      inset-0
      bg-black/70
      flex
      items-center
      justify-center
      z-[9999]
      "
    >
      <div
        className="
        bg-black
        rounded-3xl
        p-8
        w-[700px]
        max-w-[95%]
        max-h-[85vh]
        overflow-y-auto
        "
      >
        <h2
          className="
          text-3xl
          font-black
          text-center
          mb-6
          "
        >
          🎒 Chest Inventory
        </h2>

        {items.length === 0 ? (
          <p className="text-center text-gray-500">
            Chưa có vật phẩm nào
          </p>
        ) : (
          <div
            className="
            grid
            grid-cols-4
            gap-4
            "
          >
            {items.map((item, index) => (
              <div
                key={index}
                className="
                bg-slate-100
                rounded-2xl
                p-4
                flex
                flex-col
                items-center
                shadow
                "
              >
                <div className="text-5xl">
                  {item}
                </div>

                <div className="mt-2 text-sm font-bold">
                  Item #{index + 1}
                </div>
              </div>
            ))}
          </div>
        )}

        <button
          onClick={onClose}
          className="
          mt-8
          w-full
          bg-red-500
          hover:bg-red-600
          text-white
          py-3
          rounded-xl
          font-bold
          "
        >
          Đóng
        </button>
      </div>
    </div>
  );
}