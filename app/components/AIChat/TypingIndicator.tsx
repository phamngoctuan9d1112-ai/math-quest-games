"use client";

export default function TypingIndicator() {
  return (
    <div className="flex justify-start px-4 py-3">

      <div
        className="
        bg-zinc-800
        rounded-2xl
        px-4
        py-3
        "
      >

        <div className="flex gap-2">

          <span
            className="
            w-2
            h-2
            rounded-full
            bg-zinc-400
            animate-bounce
            "
          />

          <span
            className="
            w-2
            h-2
            rounded-full
            bg-zinc-400
            animate-bounce
            [animation-delay:150ms]
            "
          />

          <span
            className="
            w-2
            h-2
            rounded-full
            bg-zinc-400
            animate-bounce
            [animation-delay:300ms]
            "
          />

        </div>

      </div>

    </div>
  );
}