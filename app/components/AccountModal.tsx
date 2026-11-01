"use client";

import { useEffect, useState, type FormEvent } from "react";
import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

const MIN_PASSWORD_LENGTH = 6;

const PROVIDER_LABEL: Record<string, string> = {
  google: "Google",
  facebook: "Facebook",
  azure: "Microsoft",
  email: "Email + mật khẩu",
};

type Notice = { type: "error" | "success"; text: string };

function toVietnamese(message: string): string {
  const m = message.toLowerCase();

  if (m.includes("different from the old") || m.includes("same password"))
    return "Mật khẩu mới phải khác mật khẩu hiện tại.";
  if (m.includes("reauthenticat") || m.includes("recently") || m.includes("nonce"))
    return "Vì lý do bảo mật, hãy đăng xuất rồi đăng nhập lại trước khi đặt mật khẩu.";
  if (m.includes("password should be at least"))
    return `Mật khẩu cần có ít nhất ${MIN_PASSWORD_LENGTH} ký tự.`;
  if (m.includes("weak") || m.includes("easy to guess") || m.includes("pwned"))
    return "Mật khẩu quá dễ đoán, hãy chọn mật khẩu khác.";
  if (m.includes("rate limit") || m.includes("too many"))
    return "Bạn thao tác quá nhiều lần, vui lòng thử lại sau ít phút.";

  return message;
}

type Props = {
  onClose: () => void;
};

export default function AccountModal({ onClose }: Props) {
  const [email, setEmail] = useState<string | null>(null);
  const [providers, setProviders] = useState<string[]>([]);
  const [loadingUser, setLoadingUser] = useState(true);

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [saving, setSaving] = useState(false);
  const [notice, setNotice] = useState<Notice | null>(null);

  useEffect(() => {
    (async () => {
      const { data } = await supabase.auth.getUser();
      const user = data.user;

      setEmail(user?.email ?? null);
      setProviders(
        ((user?.app_metadata?.providers as string[] | undefined) ?? [])
      );
      setLoadingUser(false);
    })();
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (saving) return;

    if (password.length < MIN_PASSWORD_LENGTH) {
      setNotice({
        type: "error",
        text: `Mật khẩu cần có ít nhất ${MIN_PASSWORD_LENGTH} ký tự.`,
      });
      return;
    }
    if (password !== confirm) {
      setNotice({ type: "error", text: "Hai mật khẩu chưa giống nhau." });
      return;
    }

    setSaving(true);
    setNotice(null);

    // Thêm đăng nhập bằng email + mật khẩu vào tài khoản (kể cả tài khoản tạo bằng Google/Facebook)
    const { error } = await supabase.auth.updateUser({ password });

    setSaving(false);

    if (error) {
      setNotice({ type: "error", text: toVietnamese(error.message) });
      return;
    }

    setPassword("");
    setConfirm("");
    setNotice({
      type: "success",
      text: `Đã lưu mật khẩu. Từ giờ bạn có thể đăng nhập bằng email ${email} và mật khẩu này.`,
    });
  }

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[9999] p-4">
      <div className="bg-slate-900 text-white rounded-3xl w-[480px] max-w-full max-h-[90vh] overflow-y-auto p-8">
        <h2 className="text-3xl font-black text-center">⚙️ Tài khoản</h2>

        {loadingUser ? (
          <p className="mt-6 text-center text-gray-400">Đang tải...</p>
        ) : (
          <>
            <div className="mt-6 space-y-2 text-sm">
              <div>
                <span className="text-gray-400">Email: </span>
                {email ?? "Không có"}
              </div>
              <div>
                <span className="text-gray-400">Đang liên kết: </span>
                {providers.length > 0
                  ? providers.map((p) => PROVIDER_LABEL[p] ?? p).join(", ")
                  : "—"}
              </div>
            </div>

            <h3 className="mt-6 text-xl font-bold">🔑 Đặt mật khẩu đăng nhập</h3>
            <p className="mt-1 text-sm text-gray-400">
              Đặt mật khẩu để đăng nhập bằng email, không cần phụ thuộc Google hay
              Facebook. Tiến độ chơi vẫn giữ nguyên.
            </p>

            {!email ? (
              <p className="mt-4 rounded-xl bg-yellow-900/40 border border-yellow-700 p-3 text-sm text-yellow-200">
                Tài khoản này chưa có địa chỉ email nên không đặt được mật khẩu.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-4">
                {notice && (
                  <div
                    className={`mb-3 rounded-xl p-3 text-sm ${
                      notice.type === "error"
                        ? "bg-red-900/40 border border-red-700 text-red-200"
                        : "bg-green-900/40 border border-green-700 text-green-200"
                    }`}
                  >
                    {notice.text}
                  </div>
                )}

                <input
                  type="password"
                  placeholder={`Mật khẩu mới (tối thiểu ${MIN_PASSWORD_LENGTH} ký tự)`}
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-xl bg-slate-800 border border-slate-600 text-white p-3 mb-3"
                />

                <input
                  type="password"
                  placeholder="Nhập lại mật khẩu mới"
                  autoComplete="new-password"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  className="w-full rounded-xl bg-slate-800 border border-slate-600 text-white p-3 mb-3"
                />

                <button
                  type="submit"
                  disabled={saving}
                  className="w-full bg-green-600 hover:bg-green-700 disabled:opacity-60 py-3 rounded-xl font-bold cursor-pointer"
                >
                  {saving ? "Đang lưu..." : "Lưu mật khẩu"}
                </button>
              </form>
            )}
          </>
        )}

        <button
          onClick={onClose}
          className="mt-6 w-full bg-red-500 hover:bg-red-600 py-3 rounded-xl font-bold cursor-pointer"
        >
          Đóng
        </button>
      </div>
    </div>
  );
}
