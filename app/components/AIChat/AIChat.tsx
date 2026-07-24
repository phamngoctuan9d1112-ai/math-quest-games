"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";


import { useEffect } from "react";
import AIHeader from "./AIHeader";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";
import TypingIndicator from "./TypingIndicator";
import { createChatSession } from "../../lib/chat";
import { AIChatProps, ChatMessage } from "./types";

export default function AIChat({
  onClose,
}: AIChatProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Xin chào 👋\n\nMình là Quest AI.\n\nMình có thể giúp bạn:\n\n• Giải toán THPT\n• Giải thích công thức\n• Chứng minh\n• Ôn tập\n• Gợi ý cách làm bài",
    },
  ]);

  const [input, setInput] = useState("");
const [sessionId, setSessionId] = useState<string>();
  const [loading, setLoading] = useState(false);
useEffect(() => {

    async function init() {

        const session = await createChatSession();

        if(session){ 

            setSessionId(session.id);

        }

    }

    init();

},[]);
  async function sendMessage() {
    if (!input.trim()) return;

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);

    const currentInput = input;

    setInput("");

    setLoading(true);

    try {
      const res = await fetch("/api/ai-chat", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          messages: [
            ...messages,
            userMessage,
          ],
        }),
      });

      const data = await res.json();

      const aiMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content:
          data.message ??
          "Xin lỗi, hiện tại mình chưa thể trả lời.",
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content:
            "❌ Không thể kết nối tới Quest AI.",
        },
      ]);
    }

    setLoading(false);
  }

  return (
    <AnimatePresence>
      <motion.div
        className="
        fixed
        inset-0
        z-[9999]
        bg-black/50
        backdrop-blur-sm
        flex
        items-center
        justify-center
        p-4
        "
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
      >
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
            y: 40,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.95,
            y: 40,
          }}
          transition={{
            duration: 0.25,
          }}
          className="
          w-full
          max-w-4xl
          h-[90vh]
          bg-zinc-900
          rounded-2xl
          overflow-hidden
          flex
          flex-col
          shadow-2xl
          "
        >
          <AIHeader onClose={onClose} />

          <MessageList messages={messages} />

          {loading && <TypingIndicator />}

          <ChatInput
            value={input}
            loading={loading}
            onChange={setInput}
            onSend={sendMessage}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}