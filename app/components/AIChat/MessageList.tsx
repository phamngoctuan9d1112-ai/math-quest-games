"use client";

import { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";
import { MessageListProps } from "./types";

export default function MessageList({
  messages,
}: MessageListProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <div
      className="
      flex-1
      overflow-y-auto
      px-6
      py-6
      bg-zinc-900
      "
    >
      {messages.map((message) => (
        <MessageBubble
          key={message.id}
          message={message}
        />
      ))}

      <div ref={bottomRef} />
    </div>
  );
}