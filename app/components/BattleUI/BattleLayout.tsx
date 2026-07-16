"use client";

import { ReactNode } from "react";

interface BattleLayoutProps {
  children: ReactNode;
}

export default function BattleLayout({
  children,
}: BattleLayoutProps) {
  return (
    <main
      className="
      relative
      min-h-screen
      overflow-hidden
      bg-[#071220]
      "
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('/images/backgrounds/castle.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Container */}
      <div
        className="
        relative
        z-10
        flex
        justify-center
        items-center
        min-h-screen
        p-8
        "
      >
        <div
          className="
          w-full
          max-w-[1450px]
          min-h-[900px]

          rounded-[30px]

          border-[3px]
          border-[#b78937]

          bg-[#08192a]/95

          shadow-2xl

          overflow-hidden
          "
        >
          {children}
        </div>
      </div>
    </main>
  );
}