"use client";

import { MessageBubbleProps } from "./types";
import MarkdownRenderer from "./MarkdownRenderer";
export default function MessageBubble({
  message,
}: MessageBubbleProps) {
  const isUser = message.role === "user";

  return (
    <div
      className={`w-full flex mb-5 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {!isUser && (
        <div
          className="
          w-10
          h-10
          rounded-full
          bg-blue-600
          flex
          items-center
          justify-center
          text-lg
          mr-3
          shrink-0
          "
        >
          🤖
        </div>
      )}

      <div
        className={`
        max-w-[80%]
        rounded-2xl
        px-5
        py-4
        whitespace-pre-wrap
        break-words
        leading-7
        shadow-lg
        ${
          isUser
            ? "bg-blue-600 text-white rounded-br-md"
            : "bg-zinc-800 text-zinc-100 rounded-bl-md"
        }
        `}
      >
        <MarkdownRenderer
    content={message.content}
/>
      </div>

      {isUser && (
        <div
          className="
          w-10
          h-10
          rounded-full
          bg-green-600
          flex
          items-center
          justify-center
          text-lg
          ml-3
          shrink-0
          "
        >
          👤
        </div>
      )}
    </div>
  );
}