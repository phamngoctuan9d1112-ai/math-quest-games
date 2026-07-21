"use client";

interface PremiumModalProps {
  open: boolean;
  isPremium: boolean;
  onClose: () => void;
  onActivate: () => void;
}

export default function PremiumModal({
  open,
  isPremium,
  onClose,
  onActivate,
}: PremiumModalProps) {

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/70 flex items-center justify-center">

      <div className="w-[720px] rounded-3xl overflow-hidden bg-[#101a35] border border-yellow-400 shadow-[0_0_60px_rgba(255,215,0,.25)]">

        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-8 text-center">

          <div className="text-7xl mb-4">
              👑
          </div>

          <h1 className="text-5xl font-black text-white">
              Royal Premium
          </h1>

          <p className="text-white/90 text-xl mt-3">
              Mở khóa toàn bộ sức mạnh của Quest Math
          </p>

        </div>

        <div className="p-10">

          <div className="space-y-5 text-xl">

              <div>✅ Giải thích chi tiết không giới hạn</div>

              <div>✅ Người miễn phí chỉ có 10 lượt/ngày</div>

              <div>✅ Huy hiệu Royal 👑</div>

              <div>✅ Ưu tiên trải nghiệm tính năng mới</div>

              <div>✅ Hỗ trợ phát triển dự án Quest Math ❤️</div>

          </div>

          <div className="mt-10 flex gap-4">

              <button
                  onClick={onClose}
                  className="flex-1 rounded-2xl py-4 bg-slate-700 text-white font-bold hover:bg-slate-600"
              >
                  Để sau
              </button>

              <button
                  onClick={onActivate}
                  disabled={isPremium}
                  className="flex-1 rounded-2xl py-4 bg-yellow-400 hover:bg-yellow-300 text-black font-black"
              >
                  {
                      isPremium
                      ?
                      "Đã kích hoạt"
                      :
                      "Kích hoạt miễn phí"
                  }
              </button>

          </div>

        </div>

      </div>

    </div>
  );
}