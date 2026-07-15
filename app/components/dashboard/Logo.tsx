"use client";

export default function Logo() {
  return (
    <div
      className="
      rounded-[32px]
      bg-white/10
      backdrop-blur-xl
      border
      border-white/20
      shadow-2xl
      px-8
      py-8
      text-center
      overflow-hidden
      relative
    "
    >
      {/* Glow */}
      <div
        className="
        absolute
        -top-20
        left-1/2
        -translate-x-1/2
        w-72
        h-72
        rounded-full
        bg-cyan-400/20
        blur-3xl
      "
      />

      <div className="relative z-10">

        <div className="text-6xl mb-3">
          🧠
        </div>

        <h1
          className="
          text-5xl
          md:text-6xl
          font-black
          bg-gradient-to-r
          from-yellow-300
          via-orange-400
          to-red-500
          bg-clip-text
          text-transparent
        "
        >
          QUEST MATH
        </h1>

        <p
          className="
          mt-3
          text-lg
          text-slate-200
        "
        >
          Chinh phục Toán học cùng AI
        </p>

       

      </div>
    </div>
  );
}