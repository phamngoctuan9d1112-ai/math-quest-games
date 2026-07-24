"use client";

import { motion } from "framer-motion";
import MarkdownRenderer from "./MarkdownRenderer";
import { MessageBubbleProps } from "./types";

export default function MessageBubble({
  message,
}: MessageBubbleProps) {
  const isUser = message.role === "user";

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 12,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`flex w-full mb-5 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`flex items-start gap-3 max-w-[85%] ${
          isUser ? "flex-row-reverse" : ""
        }`}
      >
       

        <div
          className="
          w-10
          h-10
          rounded-full
          flex
          items-center
          justify-center
          text-xl
          shrink-0
          bg-zinc-800
          border
          border-zinc-700
          "
        >
          {isUser ? "👤" : "🤖"}
        </div>

        {/* Bubble */}

        <div
          className={`
          rounded-2xl
          px-5
          py-4
          shadow-lg
          break-words
          ${
            isUser
              ? "bg-blue-600 text-white"
              : "bg-zinc-800 text-zinc-100 border border-zinc-700"
          }
          `}
        >
          <MarkdownRenderer
            content={message.content}
          />
        </div>
      </div>
    </motion.div>
  );
}