export type ChatRole = "user" | "assistant";

export interface ChatMessage {
  id: string;
  role: ChatRole;
  content: string;
  createdAt?: string;
}

export interface ChatSession {
  id: string;
  title: string;
  created_at: string;
  updated_at: string;
}

export interface AIChatProps {
  onClose: () => void;
}

export interface AIHeaderProps {
  onClose: () => void;
}

export interface MessageListProps {
  messages: ChatMessage[];
}

export interface MessageBubbleProps {
  message: ChatMessage;
}

export interface ChatInputProps {
  value: string;
  loading: boolean;
  onChange: (value: string) => void;
  onSend: () => void;
}