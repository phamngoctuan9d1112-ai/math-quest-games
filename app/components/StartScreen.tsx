"use client";

import { useEffect, useState, type FormEvent } from "react";
import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

const MIN_PASSWORD_LENGTH = 6;

type SocialProvider = "google" | "facebook" | "azure"; // azure = Microsoft
type AuthMode = "login" | "signup";
type Notice = { type: "error" | "success"; text: string };

// Dịch các lỗi hay gặp của Supabase sang tiếng Việt
function toVietnamese(message: string): string {
  const m = message.toLowerCase();

  if (m.includes("invalid login credentials"))
    return "Email hoặc mật khẩu không đúng.";
  if (m.includes("email not confirmed"))
    return "Email chưa được xác nhận. Hãy mở hộp thư (kể cả mục Spam) và bấm vào liên kết xác nhận.";
  if (m.includes("already registered"))
    return "Email này đã được đăng ký. Hãy chuyển sang Đăng nhập.";
  if (m.includes("password should be at least"))
    return `Mật khẩu cần có ít nhất ${MIN_PASSWORD_LENGTH} ký tự.`;
  if (m.includes("not authorized"))
    return "Hệ thống chưa gửi được email xác nhận tới địa chỉ này. Bạn hãy dùng đăng nhập Google/Facebook hoặc báo admin.";
  if (m.includes("rate limit") || m.includes("too many") || m.includes("security purposes"))
    return "Bạn thao tác quá nhiều lần, vui lòng thử lại sau ít phút.";
  if (m.includes("error sending") || m.includes("sending confirmation"))
    return "Không gửi được email xác nhận. Vui lòng thử lại sau hoặc báo admin.";
  if (m.includes("invalid email") || m.includes("unable to validate email"))
    return "Địa chỉ email không hợp lệ.";
  if (m.includes("provider is not enabled") || m.includes("unsupported provider"))
    return "Hình thức đăng nhập này chưa được bật. Vui lòng chọn cách khác.";

  return message;
}
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
  const [mode, setMode] = useState<AuthMode>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState<string | null>(null);
  const [notice, setNotice] = useState<Notice | null>(null);

  // Nhà cung cấp nào đã được bật trong Supabase (Google luôn hiện như trước)
  const [enabledProviders, setEnabledProviders] = useState<
    Partial<Record<SocialProvider, boolean>>
  >({ google: true });

  // Khi mở khung đăng nhập, hỏi Supabase xem Facebook / Microsoft đã bật chưa.
  // Chưa bật thì ẩn nút, tránh người chơi bị đưa tới trang lỗi của Supabase.
  useEffect(() => {
    if (!showAuthModal) return;

    let cancelled = false;

    (async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SUPABASE_URL}/auth/v1/settings`,
          {
            headers: {
              apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
            },
          }
        );
        if (!res.ok) return;

        const settings = await res.json();
        if (cancelled) return;

        setEnabledProviders({
          google: true,
          facebook: settings?.external?.facebook === true,
          azure: settings?.external?.azure === true,
        });
      } catch {
        // Không lấy được cấu hình: chỉ giữ nút Google
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [showAuthModal]);

  function openAuth() {
    setMode("login");
    setNotice(null);
    setShowAuthModal(true);
  }

  function switchMode(next: AuthMode) {
    setMode(next);
    setNotice(null);
    setPassword("");
    setConfirmPassword("");
  }

  const handleSignUp = async () => {
    if (password.length < MIN_PASSWORD_LENGTH) {
      setNotice({
        type: "error",
        text: `Mật khẩu cần có ít nhất ${MIN_PASSWORD_LENGTH} ký tự.`,
      });
      return;
    }
    if (password !== confirmPassword) {
      setNotice({ type: "error", text: "Hai mật khẩu chưa giống nhau." });
      return;
    }

    setLoading("submit");
    setNotice(null);

    const { data, error } = await supabase.auth.signUp({
      email: email.trim(),
      password,
      options: { emailRedirectTo: window.location.origin },
    });

    setLoading(null);

    if (error) {
      setNotice({ type: "error", text: toVietnamese(error.message) });
      return;
    }

    // Email đã đăng ký từ trước: Supabase không báo lỗi mà trả về user không có identities
    if (data.user && data.user.identities && data.user.identities.length === 0) {
      setNotice({
        type: "error",
        text: "Email này đã được đăng ký. Hãy chuyển sang Đăng nhập.",
      });
      return;
    }

    // Dự án tắt xác nhận email: đã đăng nhập luôn
    if (data.session) {
      window.location.reload();
      return;
    }

    setMode("login");
    setPassword("");
    setConfirmPassword("");
    setNotice({
      type: "success",
      text: "Đăng ký thành công! Hãy mở email, bấm vào liên kết xác nhận rồi quay lại đăng nhập.",
    });
  };

  const handleLogin = async () => {
    setLoading("submit");
    setNotice(null);

    await supabase.auth.signOut();

    const { error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    if (error) {
      setLoading(null);
      setNotice({ type: "error", text: toVietnamese(error.message) });
      return;
    }

    window.location.reload();
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (loading) return;
    if (mode === "login") handleLogin();
    else handleSignUp();
  };

  // Google, Facebook, Microsoft dùng chung một hàm
  const handleOAuth = async (provider: SocialProvider) => {
    setLoading(provider);
    setNotice(null);

    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      // Microsoft bắt buộc xin quyền "email" thì mới nhận được địa chỉ email
      options: provider === "azure" ? { scopes: "email" } : undefined,
    });

    // Thành công thì trình duyệt tự chuyển sang trang đăng nhập của nhà cung cấp
    if (error) {
      setLoading(null);
      setNotice({ type: "error", text: toVietnamese(error.message) });
    }
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

          <p className="text-slate-400 text-base sm:text-lg px-2">
            Chinh phục toán học, thăng hạng bản thân
          </p>
          <p className="text-slate-400 text-lg">
          Đăng nhập hoặc tạo tài khoản để bắt đầu
         </p>
        </div>
        
        <div
  className="
  relative
  z-10
  grid
  grid-cols-2
  md:flex
  gap-6
  sm:gap-8
  mt-8
  sm:mt-10
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
  onClick={openAuth}
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
  mt-12
  sm:mt-20
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
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-3">

          <div className="bg-white text-black rounded-3xl w-[750px] max-w-full max-h-[92dvh] overflow-y-auto p-5 sm:p-8 shadow-2xl">

            <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8">
              📖 Hướng Dẫn Chơi
            </h1>

            <div className="space-y-4 sm:space-y-5 text-base sm:text-lg">

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
              className="w-full mt-8 sm:mt-10 bg-red-500 hover:bg-red-600 hover:scale-105 transition-all text-white py-3 sm:py-4 rounded-xl font-bold text-lg sm:text-xl cursor-pointer"
            >
              Đã hiểu
            </button>

          </div>

        </div>
      )}

      {showAuthModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white text-gray-900 rounded-3xl p-6 w-full max-w-md max-h-[92dvh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-1 text-center">
              {mode === "login" ? "🚀 Đăng nhập" : "✨ Tạo tài khoản"}
            </h2>

            <p className="text-center text-sm text-gray-500 mb-4">
              {mode === "login"
                ? "Chào mừng bạn quay lại Math Quest!"
                : "Chỉ mất vài giây để bắt đầu."}
            </p>

            {notice && (
              <div
                className={`mb-4 rounded-xl p-3 text-sm ${
                  notice.type === "error"
                    ? "bg-red-50 text-red-700 border border-red-200"
                    : "bg-green-50 text-green-700 border border-green-200"
                }`}
              >
                {notice.text}
              </div>
            )}

            {/* Đăng nhập nhanh bằng mạng xã hội */}
            <div className="space-y-3">
              <button
                type="button"
                onClick={() => handleOAuth("google")}
                disabled={loading !== null}
                className="w-full flex items-center justify-center gap-3 border border-gray-300 bg-white hover:bg-gray-50 disabled:opacity-60 py-3 rounded-xl font-semibold cursor-pointer"
              >
                <svg viewBox="0 0 48 48" className="w-5 h-5">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                </svg>
                {loading === "google" ? "Đang chuyển hướng..." : "Tiếp tục với Google"}
              </button>

              {enabledProviders.facebook && (
              <button
                type="button"
                onClick={() => handleOAuth("facebook")}
                disabled={loading !== null}
                className="w-full flex items-center justify-center gap-3 bg-[#1877F2] hover:bg-[#166fe0] disabled:opacity-60 text-white py-3 rounded-xl font-semibold cursor-pointer"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.34l-.53 3.49h-2.8V24C19.62 23.1 24 18.1 24 12.07" />
                </svg>
                {loading === "facebook" ? "Đang chuyển hướng..." : "Tiếp tục với Facebook"}
              </button>
              )}

              {enabledProviders.azure && (
                <button
                  type="button"
                  onClick={() => handleOAuth("azure")}
                  disabled={loading !== null}
                  className="w-full flex items-center justify-center gap-3 border border-gray-300 bg-white hover:bg-gray-50 disabled:opacity-60 py-3 rounded-xl font-semibold cursor-pointer"
                >
                  <svg viewBox="0 0 23 23" className="w-5 h-5">
                    <path fill="#f35325" d="M1 1h10v10H1z" />
                    <path fill="#81bc06" d="M12 1h10v10H12z" />
                    <path fill="#05a6f0" d="M1 12h10v10H1z" />
                    <path fill="#ffba08" d="M12 12h10v10H12z" />
                  </svg>
                  {loading === "azure" ? "Đang chuyển hướng..." : "Tiếp tục với Microsoft"}
                </button>
              )}
            </div>

            <div className="flex items-center gap-3 my-5 text-sm text-gray-400">
              <div className="flex-1 h-px bg-gray-200" />
              hoặc dùng email
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            {/* Email + mật khẩu */}
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 bg-white text-gray-900 p-3 rounded-xl mb-3"
              />

              <input
                type="password"
                placeholder={
                  mode === "signup"
                    ? `Mật khẩu (tối thiểu ${MIN_PASSWORD_LENGTH} ký tự)`
                    : "Mật khẩu"
                }
                autoComplete={mode === "login" ? "current-password" : "new-password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 bg-white text-gray-900 p-3 rounded-xl mb-3"
              />

              {mode === "signup" && (
                <input
                  type="password"
                  placeholder="Nhập lại mật khẩu"
                  autoComplete="new-password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full border border-gray-300 bg-white text-gray-900 p-3 rounded-xl mb-3"
                />
              )}

              <button
                type="submit"
                disabled={loading !== null}
                className={`w-full ${
                  mode === "login"
                    ? "bg-blue-500 hover:bg-blue-600"
                    : "bg-green-500 hover:bg-green-600"
                } disabled:opacity-60 text-white py-3 rounded-xl font-semibold cursor-pointer`}
              >
                {loading === "submit"
                  ? "Vui lòng đợi..."
                  : mode === "login"
                  ? "Đăng nhập"
                  : "Tạo tài khoản"}
              </button>
            </form>

            <p className="text-center text-sm text-gray-600 mt-4">
              {mode === "login" ? (
                <>
                  Chưa có tài khoản?{" "}
                  <button
                    type="button"
                    onClick={() => switchMode("signup")}
                    className="text-green-600 font-semibold hover:underline cursor-pointer"
                  >
                    Đăng ký
                  </button>
                </>
              ) : (
                <>
                  Đã có tài khoản?{" "}
                  <button
                    type="button"
                    onClick={() => switchMode("login")}
                    className="text-blue-600 font-semibold hover:underline cursor-pointer"
                  >
                    Đăng nhập
                  </button>
                </>
              )}
            </p>

            <button
              type="button"
              onClick={() => setShowAuthModal(false)}
              className="w-full mt-4 bg-gray-200 hover:bg-gray-300 py-3 rounded-xl cursor-pointer"
            >
              Đóng
            </button>
          </div>
        </div>
      )}

    </>
  );
}