"use client";

import { useEffect, useRef } from "react";
import { Send } from "lucide-react";
import { ChatInputProps } from "./types";

export default function ChatInput({
  value,
  loading,
  onChange,
  onSend,
}: ChatInputProps) {

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {

    const textarea = textareaRef.current;

    if (!textarea) return;

    textarea.style.height = "0px";

    textarea.style.height = textarea.scrollHeight + "px";

  }, [value]);

  return (

    <div
      className="
      border-t
      border-zinc-800
      bg-zinc-900
      p-4
      "
    >

      <div
        className="
        flex
        items-end
        gap-3
        bg-zinc-800
        rounded-2xl
        p-3
        "
      >

        <textarea

          ref={textareaRef}

          value={value}

          disabled={loading}

          rows={1}

          placeholder="Hỏi Quest AI..."

          onChange={(e) => onChange(e.target.value)}

          onKeyDown={(e) => {

            if (
              e.key === "Enter" &&
              !e.shiftKey
            ) {

              e.preventDefault();

              if (!loading) {

                onSend();

              }

            }

          }}

          className="
          flex-1
          bg-transparent
          outline-none
          resize-none
          max-h-40
          text-white
          placeholder:text-zinc-400
          "
        />

        <button

          onClick={onSend}

          disabled={loading || !value.trim()}

          className="
          w-11
          h-11
          rounded-xl
          bg-blue-600
          hover:bg-blue-500
          disabled:bg-zinc-700
          disabled:cursor-not-allowed
          flex
          items-center
          justify-center
          transition
          "
        >

          <Send
            size={18}
            className="text-white"
          />

        </button>

      </div>

      <div
        className="
        text-xs
        text-zinc-500
        mt-2
        text-center
        "
      >
        Enter để gửi • Shift + Enter xuống dòng
      </div>

    </div>

  );

}