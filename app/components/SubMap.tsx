"use client";

import React from "react";

interface SubMapProps {
  worldId: number;
  currentProgress: number;
  onSelectNode: (nodeId: number) => void;
  onBack: () => void;
}

export default function SubMap({
  worldId,
  currentProgress,
  onSelectNode,
  onBack,
}: SubMapProps) {
  const nodes = [
    {
      id: 1,
      name: "Chặng 1: Nhận Biết",
      x: 20,
      y: 78,
      icon: "🌱",
    },
    {
      id: 2,
      name: "Chặng 2: Thông Hiểu",
      x: 80,
      y: 50,
      icon: "📖",
    },
    {
      id: 3,
      name: "Chặng 3: Vận Dụng",
      x: 35,
      y: 20,
      icon: "⚡",
    },
  ];

  return (
    <div className="w-full flex justify-center items-center px-3 py-6">
      <div
        className="
          w-full
          max-w-[500px]
          h-[620px]
          bg-[#fdf5e6]
          rounded-[2rem]
          border-4
          border-[#8b5e3c]
          shadow-2xl
          p-5
          flex
          flex-col
          relative
          overflow-hidden
          select-none
        "
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#8b5e3c]/20 pb-3 z-20">
          <button
            onClick={onBack}
            className="
              bg-[#8b5e3c]
              hover:bg-[#724c2f]
              text-white
              text-sm
              font-bold
              px-3
              py-2
              rounded-lg
              transition
            "
          >
            ← Trở Về
          </button>

          <h2 className="font-black text-[#5c3a21] text-lg uppercase">
            🗺️ Bản Đồ Chặng {worldId}
          </h2>

          <div className="w-[70px]" />
        </div>

        {/* Map Area */}
        <div className="relative flex-1 mt-4">
          {/* Đường đi */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path
              d="
                M 20 78
                C 45 90, 92 68, 80 50
                C 68 30, 18 28, 35 20
              "
              fill="none"
              stroke="#8b5e3c"
              strokeWidth="1.8"
              strokeDasharray="4 3"
              strokeLinecap="round"
            />
          </svg>

          {/* Nodes */}
          {nodes.map((node) => {
            const isCompleted = node.id <= currentProgress;
            const isUnlocked = node.id <= currentProgress + 1;

            return (
              <div
                key={node.id}
                className="absolute flex flex-col items-center"
                style={{
                  left: `${node.x}%`,
                  top: `${node.y}%`,
                  transform: "translate(-50%, -50%)",
                  zIndex: 10,
                }}
              >
                <button
                  disabled={!isUnlocked}
                  onClick={() => onSelectNode(node.id)}
                  className={`
                    relative
                    w-16
                    h-16
                    rounded-full
                    flex
                    items-center
                    justify-center
                    text-2xl
                    border-4
                    shadow-lg
                    transition-all
                    duration-300
                    ${
                      isCompleted
                        ? "bg-gradient-to-br from-amber-400 to-orange-500 border-[#5c3a21] text-white"
                        : isUnlocked
                        ? "bg-gradient-to-br from-emerald-400 to-teal-600 border-[#5c3a21] text-white hover:scale-110"
                        : "bg-stone-300 border-stone-400 text-white opacity-60"
                    }
                  `}
                >
                  {isCompleted
                    ? "⭐"
                    : isUnlocked
                    ? node.icon
                    : "🔒"}

                  {isUnlocked && !isCompleted && (
                    <span
                      className="
                        absolute
                        -inset-2
                        rounded-full
                        border-2
                        border-dashed
                        border-emerald-500
                        animate-spin
                        opacity-60
                      "
                    />
                  )}
                </button>

                <div
                  className="
                    mt-2
                    px-3
                    py-1
                    rounded-lg
                    bg-white/90
                    border
                    border-[#8b5e3c]/30
                    shadow
                  "
                >
                  <p
                    className="
                      text-[11px]
                      font-black
                      text-[#5c3a21]
                      whitespace-nowrap
                    "
                  >
                    {node.name}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div
          className="
            border-t
            border-dashed
            border-[#8b5e3c]/20
            pt-3
            text-center
            text-xs
            font-bold
            text-[#8b5e3c]/70
          "
        >
          📜 Hãy đi theo nét đứt để chinh phục bài học!
        </div>
      </div>
    </div>
  );
}