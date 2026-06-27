"use client";

import React from "react";

interface SubMapProps {
  worldId: number;
  currentProgress: number; // 1, 2, hoặc 3
  onSelectNode: (nodeId: number) => void;
  onBack: () => void;
}

export default function SubMap({ worldId, currentProgress, onSelectNode, onBack }: SubMapProps) {
  // Tọa độ X, Y được thiết kế uốn lượn zigzag theo hình vẽ tay
  const nodes = [
    { id: 1, name: "Chặng 1: Nhận Biết", x: 80, y: 300, icon: "🌱" },
    { id: 2, name: "Chặng 2: Thông Hiểu", x: 340, y: 200, icon: "📖" },
    { id: 3, name: "Chặng 3: Vận Dụng", x: 140, y: 90, icon: "⚡" },
  ];

  return (
    <div className="w-full flex justify-center items-center my-6">
      {/* Khung bản đồ cố định kích thước, không bị ảnh hưởng bởi CSS của page.tsx */}
      <div className="w-[450px] h-[500px] bg-[#fdf5e6] p-6 rounded-[2rem] shadow-2xl border-4 border-[#8b5e3c] relative overflow-hidden select-none flex flex-col justify-between">
        
        {/* Header Bản đồ */}
        <div className="relative z-10 flex justify-between items-center border-b border-[#8b5e3c]/20 pb-3">
          <button 
            onClick={onBack}
            className="bg-[#8b5e3c] hover:bg-[#724c2f] text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-all active:scale-95"
          >
            ⬅ Trở Về
          </button>
          <h2 className="text-md font-black uppercase text-[#5c3a21]">
            🗺️ Bản Đồ Ải {worldId}
          </h2>
          <div className="w-12"></div>
        </div>

        {/* Khu vực vẽ map tuyệt đối */}
        <div className="relative w-full h-[360px]">
          
          {/* Đường vẽ SVG uốn cong S qua 3 điểm */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
            <path
              d="M 80 300 C 200 330, 360 270, 340 200 C 320 130, 60 120, 140 90"
              fill="none"
              stroke="#8b5e3c"
              strokeWidth="5"
              strokeDasharray="10 8"
              strokeLinecap="round"
            />
          </svg>

          {/* Vòng lặp các Node mốc điểm */}
          {nodes.map((node) => {
            const isUnlocked = node.id <= currentProgress + 1;
            const isCompleted = node.id <= currentProgress;

            return (
              <div
                key={node.id}
                className="absolute flex flex-col items-center -translate-x-1/2 -translate-y-1/2"
                style={{ 
                  left: `${node.x}px`, 
                  top: `${node.y}px`,
                  zIndex: 10 
                }}
              >
                {/* Nút bấm tròn */}
                <button
                  disabled={!isUnlocked}
                  onClick={() => onSelectNode(node.id)}
                  className={`
                    w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold shadow-md border-4 border-[#5c3a21] transition-all duration-300 relative
                    ${isCompleted 
                      ? "bg-gradient-to-br from-amber-400 to-orange-500 text-white" 
                      : isUnlocked 
                      ? "bg-gradient-to-br from-emerald-400 to-teal-600 text-white cursor-pointer scale-110 hover:scale-125 ring-4 ring-emerald-300/50" 
                      : "bg-stone-300 border-stone-400 cursor-not-allowed opacity-50"
                    }
                  `}
                >
                  <span>
                    {isCompleted ? "⭐" : isUnlocked ? node.icon : "🔒"}
                  </span>

                  {/* Vòng quét hiệu ứng map */}
                  {isUnlocked && !isCompleted && (
                    <span className="absolute -inset-1.5 rounded-full border-2 border-dashed border-emerald-500 animate-spin opacity-60" />
                  )}
                </button>

                {/* Nhãn chữ dưới nút */}
                <div className="mt-1.5 bg-[#fffcf5] border border-[#8b5e3c]/40 px-2 py-0.5 rounded shadow-sm">
                  <p className="text-[10px] font-black text-[#5c3a21] whitespace-nowrap">
                    {node.name}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="text-center text-[10px] font-bold text-[#8b5e3c]/60 pt-2 border-t border-dashed border-[#8b5e3c]/20">
          📜 Hãy đi theo nét đứt để chinh phục bài học!
        </div>
      </div>
    </div>
  );
}