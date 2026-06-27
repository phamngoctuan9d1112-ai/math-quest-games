"use client";

import { useState } from "react";

interface StartScreenProps {
  onStart: () => void;
  onLogin: () => void;
  isLoggedIn: boolean;
  onLogout: () => void;
}

export default function StartScreen({
  onStart,
  onLogin,
  isLoggedIn,
  onLogout,
}: StartScreenProps) {
  const [showGuide, setShowGuide] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-950 text-white gap-6 px-4">
        {/* Tiêu đề */}
        <div className="text-center space-y-2">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            ⚔️ Math Quest
          </h1>

          <p className="text-slate-400 text-lg">
            Chinh phục toán học, thăng hạng bản thân
          </p>
        </div>

        {/* Các nút */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-3xl justify-center mt-4">

          {/* Bắt đầu */}
          <button
            onClick={onStart}
            className="bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all text-white px-8 py-4 rounded-xl font-bold text-xl shadow-lg"
          >
            🚀 Bắt đầu chơi
          </button>

          {/* Hướng dẫn */}
          <button
            onClick={() => setShowGuide(true)}
            className="bg-green-600 hover:bg-green-700 hover:scale-105 transition-all text-white px-8 py-4 rounded-xl font-bold text-xl shadow-lg"
          >
            📖 Hướng dẫn
          </button>

          {/* Đăng nhập / Đăng xuất */}
          {!isLoggedIn ? (
            <button
              onClick={onLogin}
              className="bg-white text-slate-900 hover:bg-slate-100 hover:scale-105 transition-all px-8 py-4 rounded-xl font-bold text-xl shadow-lg"
            >
              🚀 Đăng nhập Google
            </button>
          ) : (
            <button
              onClick={onLogout}
              className="bg-red-600 hover:bg-red-700 hover:scale-105 transition-all text-white px-8 py-4 rounded-xl font-bold text-xl shadow-lg"
            >
              🚪 Đăng xuất
            </button>
          )}
        </div>
      </div>

      {/* Popup Hướng dẫn */}
      {showGuide && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

          <div className="bg-white text-black rounded-3xl w-[750px] max-w-[95%] p-8 shadow-2xl">

            <h1 className="text-4xl font-bold text-center mb-8">
              📖 Hướng Dẫn Chơi
            </h1>

            <div className="space-y-5 text-lg">

              <div>🎯 Trả lời đúng câu hỏi để nhận <b>XP</b> và <b>Coin</b>.</div>

              <div>❤️ Bạn có <b>3 mạng</b>, trả lời sai sẽ mất 1 mạng.</div>

              <div>🪙 Coin dùng để mua thú cưng, avatar và vật phẩm trong Shop.</div>

              <div>🐶 Pet giúp bạn nhận thêm Coin khi trả lời đúng.</div>

              <div>🌍 Mỗi World gồm 3 chặng, vượt qua Boss để mở khóa World mới.</div>

              <div>🏆 Tăng Điểm để lên Level và mở khóa Thành tích.</div>

              <div>🎓 Chế độ Luyện Thi THPT gồm 50 câu hỏi ngẫu nhiên.</div>

              <div>👑 Mục tiêu cuối cùng là chinh phục toàn bộ World và trở thành Chúa Tể Toán Học.</div>

            </div>

            <button
              onClick={() => setShowGuide(false)}
              className="w-full mt-10 bg-red-500 hover:bg-red-600 hover:scale-105 transition-all text-white py-4 rounded-xl font-bold text-xl"
            >
              Đã hiểu
            </button>

          </div>

        </div>
      )}
    </>
  );
}