"use client";

import { useState } from "react";
import { supabase } from "../lib/supabase";
import { useEffect } from "react";
interface StartScreenProps {
  onStart: () => void;
  onLogin: () => void;
  isLoggedIn: boolean;
  currentUserId: string | null;
  onLogout: () => void;
}

export default function StartScreen({
  onStart,
  onLogin,
  onLogout,
  currentUserId,
  isLoggedIn,
}: StartScreenProps) {
  const [showGuide, setShowGuide] = useState(false);
  const [showAuthModal, setShowAuthModal] =
  useState(false);
  const [email, setEmail] = useState("");
const [password, setPassword] = useState("");


const handleSignUp = async () => {
    const { error } =
      await supabase.auth.signUp({
        email,
        password,
      });

    if (error) {
      alert(error.message);
      return;
    }

    alert(
      "Đăng ký thành công. Kiểm tra email xác thực."
    );
  };

  const handleLogin = async () => {

  await supabase.auth.signOut();

  const { data, error } =
    await supabase.auth.signInWithPassword({
      email,
      password,
    });

  if (error) {
    alert(error.message);
    return;
  }

  window.location.reload();
};

  const handleGoogleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };

  

  return (
    <>

    
      <div
  className="
  relative
  flex
  flex-col
  items-center
  justify-center
  min-h-screen
  bg-gradient-to-br
  from-slate-950
  via-blue-950
  to-indigo-950
  text-white
  gap-6
  px-4
  overflow-hidden
"
>
        {/* Hiệu ứng nền */}
        <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full" />

        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full" />

        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-500/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
        </div>
        {/* Tiêu đề */}
        <div className="relative z-10 text-center space-y-2">
          <div className="flex items-center justify-center gap-4">

  <div className="relative z-10 text-center">

  <div
    className="
      inline-block
      px-4
      py-2
      rounded-full
      bg-blue-500/10
      border
      border-blue-500/30
      text-blue-300
      text-sm
      mb-6
    "
  >
    🚀 Nền tảng học Toán THPT
  </div>

  <div
  className="
  flex
  flex-col
  md:flex-row
  items-center
  justify-center
  gap-4
"
>
  <div className="text-6xl md:text-7xl">
    ⚔️
  </div>

  <h1
    className="
    text-5xl
    sm:text-6xl
    md:text-8xl
    font-black
    bg-gradient-to-r
    from-cyan-400
    via-blue-400
    to-purple-500
    bg-clip-text
    text-transparent
    "
  >
    Math Quest
  </h1>
</div>

</div>

</div>

          <p className="text-slate-400 text-lg">
            Chinh phục toán học, thăng hạng bản thân
          </p>
          <p className="text-slate-400 text-lg">
          Nhấn đăng nhập bằng Google để Bắt Đầu
         </p>
        </div>
        
        <div
  className="
  relative
  z-10
  grid
  grid-cols-2
  md:flex
  gap-8
  mt-10
"
>
  

  <div className="text-center col-span-2 md:col-span-1">
    <div className="text-3xl font-bold text-cyan-400">
      79
    </div>
    <div className="text-slate-400">
      Worlds
    </div>
  </div>

  <div className="text-center">
    <div className="text-3xl font-bold text-green-400">
      500+
    </div>
    <div className="text-slate-400">
      Câu hỏi
    </div>
  </div>

  <div className="text-center">
    <div className="text-3xl font-bold text-yellow-400">
      THPT
    </div>
    <div className="text-slate-400">
      Chương trình
    </div>
  </div>

</div>

        {/* Các nút */}
        <div
  className="
  relative
  z-10
  flex
  flex-col
  sm:flex-row
  gap-4
  mt-10
  w-full
  max-w-md
"
>
          {/* Bắt đầu */}
         

          {/* Hướng dẫn */}
          <button
  onClick={() => setShowGuide(true)}
  className="
  flex-1
  py-4
  rounded-2xl
  bg-white/10
  backdrop-blur-md
  border
  border-white/20
  text-white
  font-bold
  text-lg
  hover:bg-white/20
  transition-all
"
>
  📖 Hướng dẫn
</button>

          {/* Đăng nhập / Đăng xuất */}
          {isLoggedIn ? (
  <button
    onClick={onStart}
    className="
      px-10
      py-5
      rounded-2xl
      bg-gradient-to-r
      from-green-500
      to-emerald-500
      text-white
      font-bold
      text-xl
      shadow-xl
      hover:scale-105
      transition-all
    "
  >
    🎮 Vào Game
  </button>
) : (
  <button
  onClick={() => setShowAuthModal(true)}
  className="
  flex-1
  py-4
  rounded-2xl
  bg-gradient-to-r
  from-blue-500
  to-cyan-500
  text-white
  font-bold
  text-lg
  shadow-xl
  hover:scale-105
  transition-all
"
>
  🚀 Bắt đầu miễn phí
</button>
)}
        </div>

          <footer
  className="
  mt-20
  w-full
  border-t
  border-white/10
  bg-black/20
  backdrop-blur-md
"
>
  <div
    className="
    max-w-7xl
    mx-auto
    px-6
    py-4
    flex
    flex-wrap
    justify-center
    gap-6
    text-sm
    text-slate-400
  "
  >
    <a
  href="/privacy"
  className="hover:text-white transition"
>
  Chính sách bảo mật
</a>

    <a
  href="/terms"
  className="hover:text-white transition"
>
  Điều khoản
</a>

    

    <a
  href="/report"
  className="hover:text-white transition"
>
  Báo cáo lỗi
</a>
  </div>
</footer>

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

              <div>🔥 Đăng nhập mỗi ngày để nhận phần thưởng và giữ chuỗi</div>

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

      {showAuthModal && (
  <div
    className="
      fixed
      inset-0
      bg-black/70
      flex
      items-center
      justify-center
      z-50
    "
  >
    <div
      className="
        bg-white
        rounded-3xl
        p-6
        w-full
        max-w-md
      "
    >
      <h2
        className="
          text-2xl
          font-bold
          mb-4
          text-center
        "
      >
        🚀 Đăng nhập
      </h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
        className="
          w-full
          border
          p-3
          rounded-xl
          mb-3
        "
      />

      <input
        type="password"
        placeholder="Mật khẩu"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
        className="
          w-full
          border
          p-3
          rounded-xl
          mb-4
        "
      />

      <button
        onClick={handleLogin}
        className="
          w-full
          bg-blue-500
          text-white
          py-3
          rounded-xl
          mb-3
        "
      >
        Đăng nhập
      </button>

      <button
        onClick={handleSignUp}
        className="
          w-full
          bg-green-500
          text-white
          py-3
          rounded-xl
          mb-3
        "
      >
        Đăng ký
      </button>

      <button
        onClick={handleGoogleLogin}
        className="
          w-full
          bg-red-500
          text-white
          py-3
          rounded-xl
          mb-3
        "
      >
        Google
      </button>

      <button
        onClick={() =>
          setShowAuthModal(false)
        }
        className="
          w-full
          bg-gray-300
          py-3
          rounded-xl
        "
      >
        Đóng
      </button>
    </div>
  </div>
)}

    </>
  );
}