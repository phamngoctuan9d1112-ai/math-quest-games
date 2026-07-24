"use client";

import { useRef } from "react";
import { ChatInputProps } from "./types";

export default function ChatInput({
  value,
  loading,
  onChange,
  onSend,
}: ChatInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  function handleInput(e: React.ChangeEvent<HTMLTextAreaElement>) {
    onChange(e.target.value);

    if (!textareaRef.current) return;

    textareaRef.current.style.height = "0px";
    textareaRef.current.style.height =
      textareaRef.current.scrollHeight + "px";
  }

  function handleKeyDown(
    e: React.KeyboardEvent<HTMLTextAreaElement>
  ) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();

      if (!loading && value.trim()) {
        onSend();
      }
    }
  }

  return (
    <div
      className="
      border-t
      border-zinc-700
      bg-zinc-900
      px-5
      py-4
      "
    >
      <div
        className="
        flex
        items-end
        gap-3
        "
      >
        <textarea
          ref={textareaRef}
          rows={1}
          value={value}
          disabled={loading}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
          placeholder="Hỏi Quest AI bất cứ điều gì..."
          className="
          flex-1
          resize-none
          rounded-xl
          bg-zinc-800
          px-4
          py-3
          text-white
          outline-none
          max-h-40
          overflow-y-auto
          "
        />

        <button
          disabled={loading || !value.trim()}
          onClick={onSend}
          className="
          w-12
          h-12
          rounded-full
          bg-blue-600
          hover:bg-blue-500
          disabled:bg-zinc-700
          disabled:cursor-not-allowed
          text-white
          text-xl
          transition
          "
        >
          ➤
        </button>
      </div>

      <div
        className="
        mt-2
        text-xs
        text-zinc-500
        "
      >
        Enter để gửi • Shift + Enter xuống dòng
      </div>
    </div>
  );
}