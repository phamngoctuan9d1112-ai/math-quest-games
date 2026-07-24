"use client";

import { AIHeaderProps } from "./types";

export default function AIHeader({
  onClose,
}: AIHeaderProps) {
  return (
    <div
      className="
      flex
      items-center
      justify-between
      border-b
      border-zinc-700
      px-5
      py-4
      bg-zinc-900
      rounded-t-2xl
      "
    >
      <div className="flex items-center gap-3">

        <div
          className="
          w-11
          h-11
          rounded-full
          bg-blue-600
          flex
          items-center
          justify-center
          text-xl
          "
        >
          🤖
        </div>

        <div>

          <h2
            className="
            text-white
            font-bold
            text-lg
            "
          >
            Quest AI
          </h2>

          <p
            className="
            text-zinc-400
            text-sm
            "
          >
            Gia sư Toán của MathQuest
          </p>

        </div>

      </div>

      <button
        onClick={onClose}
        className="
        w-10
        h-10
        rounded-full
        hover:bg-zinc-800
        transition
        text-zinc-400
        text-xl
        "
      >
        ✕
      </button>
    </div>
  );
}