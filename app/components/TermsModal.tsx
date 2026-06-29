"use client";

import { useState } from "react";

export default function TermsModal({
  onAccept,
}: {
  onAccept: () => void;
}) {
  const [checked, setChecked] = useState(false);

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-2xl max-w-2xl w-full">
        <h1 className="text-2xl font-bold mb-4">
          Điều khoản sử dụng
        </h1>

        <div className="h-64 overflow-y-auto text-sm space-y-3">
          <p>
            Chào mừng bạn đến với Math Quest.
          </p>

          <p>
            Chúng tôi lưu tiến trình học tập,
            thành tích và thông tin cơ bản từ tài khoản Google.
          </p>

          <p>
            Dữ liệu không được bán cho bên thứ ba.
          </p>
        </div>

        <label className="flex gap-2 mt-4">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) =>
              setChecked(e.target.checked)
            }
          />
          Tôi đồng ý với điều khoản sử dụng.
        </label>

        <button
          disabled={!checked}
          onClick={onAccept}
          className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-xl"
        >
          Đồng ý
        </button>
      </div>
    </div>
  );
}