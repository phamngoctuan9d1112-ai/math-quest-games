"use client";

import { useState } from "react";
import { createBrowserClient }
from "@supabase/ssr";

const supabase =
createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function AuthModal({
  onClose,
}: {
  onClose: () => void;
}) {

  const [email,setEmail] =
    useState("");

  const [password,setPassword] =
    useState("");

  const [loading,setLoading] =
    useState(false);

  async function signUp() {

    setLoading(true);

    const { error } =
      await supabase.auth.signUp({
        email,
        password,
      });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert(
      "Đăng ký thành công"
    );
  }

  async function signIn() {

    setLoading(true);

    const { data, error } =
await supabase.auth.signInWithPassword({
  email,
  password,
});

console.log(
  "LOGIN DATA",
  data
);

console.log(
  "LOGIN ERROR",
  error
);
    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }
  }

  async function signInGoogle() {

    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo:
          `${window.location.origin}/auth/callback`,
      },
    });
  }

  return (
    <div
      className="
      fixed
      inset-0
      bg-black/70
      flex
      items-center
      justify-center
      z-[9999]
      "
    >
      <div
        className="
        bg-white
        rounded-3xl
        p-8
        w-[400px]
        max-w-[95%]
        "
      >
        <h2
          className="
          text-3xl
          font-black
          text-center
          mb-6
          "
        >
          🚀 Math Quest
        </h2>

        <input
          placeholder="Email"
          value={email}
          onChange={(e)=>
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
          onChange={(e)=>
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
          onClick={signIn}
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
          onClick={signUp}
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
          onClick={signInGoogle}
          className="
          w-full
          bg-red-500
          text-white
          py-3
          rounded-xl
          "
        >
          Google
        </button>

        <button
          onClick={onClose}
          className="
          w-full
          mt-4
          text-gray-500
          "
        >
          Đóng
        </button>
      </div>
    </div>
  );
}