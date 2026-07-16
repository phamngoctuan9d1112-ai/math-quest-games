"use client";

export default function Sidebar() {
  return (
    <aside
      className="
      w-[120px]
      bg-[#081421]
      border-r-2
      border-[#b88a36]

      flex
      flex-col
      items-center

      py-8

      gap-8
      "
    >
      {/* Logo */}

      <div
        className="
        w-20
        h-20

        rounded-full

        bg-[#11253a]

        border-2
        border-[#d2a54a]

        flex
        items-center
        justify-center

        text-4xl
        "
      >
        🏰
      </div>

      <button
        className="
        w-16
        h-16

        rounded-2xl

        bg-[#11253a]

        hover:bg-[#193451]

        transition
        "
      >
        👑
      </button>

      <button
        className="
        w-16
        h-16

        rounded-2xl

        bg-[#11253a]

        hover:bg-[#193451]

        transition
        "
      >
        📖
      </button>

      <button
        className="
        w-16
        h-16

        rounded-2xl

        bg-[#11253a]

        hover:bg-[#193451]

        transition
        "
      >
        ⚙️
      </button>
    </aside>
  );
}