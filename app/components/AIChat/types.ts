export interface ChatMessage {
  id: string;

  role: "user" | "assistant";

  content: string;

  createdAt?: number;
}

export interface AIChatProps {
  onClose: () => void;
}

export interface AIHeaderProps {
  onClose: () => void;
}

export interface MessageBubbleProps {
  message: ChatMessage;
}

export interface MessageListProps {
  messages: ChatMessage[];
}

export interface ChatInputProps {
  value: string;

  loading: boolean;

  onChange: (value: string) => void;

  onSend: () => void;
}