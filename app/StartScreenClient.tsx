

'use client'

import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

interface StartScreenProps {
  isLoggedIn: boolean
}

export default function StartScreenClient({ isLoggedIn }: StartScreenProps) {
  
  const onLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    })
  }

  const onLogout = async () => {
    await supabase.auth.signOut()
    // Làm mới lại trang để cập nhật lại trạng thái Server Component
    window.location.reload()
  }

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      {/* Lớp làm tối ảnh nền */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-slate-900/80 to-blue-950/80" />

      {/* Nội dung chính luôn nằm trên lớp nền tối */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-6">
        <h1 className="text-5xl font-bold mb-4">Chào mừng tới Game 🎮</h1>

        {/* ĐIỀU KIỆN ẨN/HIỆN NÚT BẤM */}
        {!isLoggedIn ? (
          // Nút này CHỈ HIỆN khi CHƯA đăng nhập
          <button 
            onClick={onLogin}
            className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-xl shadow-lg hover:bg-gray-100 transition"
          >
            Đăng nhập Google 🚀
          </button>
        ) : (
          // Giao diện HIỆN RA khi ĐÃ đăng nhập thành công (Mất nút đăng nhập cũ)
          <div className="flex flex-col items-center gap-4">
            <p className="text-green-400 text-lg font-semibold">🎉 Đăng nhập thành công! Hãy bắt đầu chơi.</p>
            
            <button
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-xl shadow-lg hover:bg-blue-700 transition"
              onClick={() => alert("Bắt đầu vào game ngay thôi!")}
            >
              Vào Chơi Ngay 🕹️
            </button>

            <button 
              onClick={onLogout}
              className="text-gray-400 hover:text-red-400 text-sm underline transition mt-2"
            >
              Đăng xuất
            </button>
          </div>
        )}
      </div>
    </div>
  )
}