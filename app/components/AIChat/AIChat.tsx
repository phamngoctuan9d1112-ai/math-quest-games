"use client";

import { useState } from "react";

import AIHeader from "./AIHeader";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";
import TypingIndicator from "./TypingIndicator";

import {
  createChatSession,
  saveMessage,
} from "../../lib/chat";

import {
  AIChatProps,
  ChatMessage,
} from "./types";

export default function AIChat({
  onClose,
}: AIChatProps) {

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Xin chào 👋\n\nMình là Quest AI.\n\nMình có thể giúp bạn:\n\n• Giải toán\n• Giải thích công thức\n• Chứng minh\n• Ôn tập",
    },
  ]);

  const [input, setInput] = useState("");

  const [loading, setLoading] =
    useState(false);

  const [sessionId, setSessionId] =
    useState<string | null>(null);

  async function sendMessage() {

    if (!input.trim()) return;

    let currentSession = sessionId;

    //------------------------------------------------

    // Tạo session nếu chưa có

    //------------------------------------------------

    if (!currentSession) {

      const session =
        await createChatSession();

      if (!session) {

        alert("Không thể tạo cuộc trò chuyện.");

        return;

      }

      currentSession = session.id;

      setSessionId(session.id);

    }
const activeSessionId = currentSession!;


    const userMessage: ChatMessage = {

      id: crypto.randomUUID(),

      role: "user",

      content: input,

    };

    setMessages(prev => [

      ...prev,

      userMessage,

    ]);

    await saveMessage(

      activeSessionId,

      "user",

      input,

    );

    const question = input;

    setInput("");

    setLoading(true);

    try {

      const res = await fetch("/api/ai-chat", {

        method: "POST",

        headers: {

          "Content-Type": "application/json",

        },

        body: JSON.stringify({

          sessionId: currentSession,

          message: question,

        }),

      });

      const data = await res.json();

      const aiMessage: ChatMessage = {

        id: crypto.randomUUID(),

        role: "assistant",

        content: data.message,

      };

      setMessages(prev => [

        ...prev,

        aiMessage,

      ]);

      await saveMessage(

        activeSessionId,

        "assistant",

        aiMessage.content,

      );

    } catch {

      setMessages(prev => [

        ...prev,

        {

          id: crypto.randomUUID(),

          role: "assistant",

          content:
            "❌ Không thể kết nối Quest AI.",

        },

      ]);

    }

    setLoading(false);

  }
  return (
  <div
    className="
    fixed
    inset-0
    z-[9999]
    bg-black/60
    backdrop-blur-sm
    flex
    items-center
    justify-center
    p-4
    "
  >
    <div
      className="
      w-full
      max-w-5xl
      h-[90vh]
      rounded-3xl
      overflow-hidden
      bg-zinc-900
      shadow-2xl
      border
      border-zinc-800
      flex
      flex-col
      "
    >

      <AIHeader
        onClose={onClose}
      />

      <MessageList
        messages={messages}
      />

      {loading && (
        <TypingIndicator />
      )}

      <ChatInput
        value={input}
        loading={loading}
        onChange={setInput}
        onSend={sendMessage}
      />

    </div>
  </div>
);
}