"use client";

import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Image from "next/image";

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

      <Image
    src="/icons/torch-left.png"
    alt="Torch Left"
    width={90}
    height={220}
    className="
        fixed
        left-6
        top-1/2
        -translate-y-1/2
        pointer-events-none
        z-20
    "
/>

<div
    className="
        fixed
        left-10
        top-1/2
        -translate-y-1/2

        w-40
        h-40

        rounded-full

        bg-yellow-300/25
animate-pulse

        blur-3xl

        pointer-events-none

        z-10
    "
/>

<Image
    src="/icons/torch-right.png"
    alt="Torch Right"
    width={90}
    height={220}
    className="
        fixed
        right-6
        top-1/2
        -translate-y-1/2
        pointer-events-none
        z-20
    "
/>
 
 <div
    className="
        fixed
        left-10
        top-1/2
        -translate-y-1/2

        w-40
        h-40

        rounded-full

        bg-yellow-300/25
animate-pulse

        blur-3xl

        pointer-events-none

        z-10
    "
/>

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
          <div className="flex min-h-[900px]">

    <Sidebar/>

    <div className="flex-1">

        {children}

    </div>

</div>
        </div>
      </div>
    </main>
  );
}