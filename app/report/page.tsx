"use client";

import { useState } from "react";

export default function ReportPage() {

  const [message, setMessage] =
    useState("");

  return (
    <main className="max-w-xl mx-auto p-10">

      <h1 className="text-4xl font-bold mb-8">
        Báo cáo :
        Hãy giúp chúng tôi cải thiện Math Quest
      </h1>

      <input
        type="email"
        placeholder="Email của bạn"
        className="
          w-full
          border
          rounded-xl
          p-3
          mb-4
        "
      />

      <textarea
        value={message}
        onChange={(e) =>
          setMessage(e.target.value)
        }
        placeholder="Mô tả lỗi..."
        className="
          w-full
          border
          rounded-xl
          p-3
          h-40
        "
      />

      <button
        className="
          mt-4
          bg-red-500
          text-white
          px-6
          py-3
          rounded-xl
        "
      >
        Gửi báo cáo
      </button>

    </main>
  );
}