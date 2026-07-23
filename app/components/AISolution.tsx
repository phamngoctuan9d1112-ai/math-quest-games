"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Props {
  open: boolean;
  loading: boolean;
  answer: string;
  onClose: () => void;
}

export default function AISolution({
  open,
  loading,
  answer,
  onClose,
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/60 flex items-center justify-center">

      <div className="w-[90%] max-w-3xl rounded-2xl bg-zinc-900 border border-zinc-700 p-6">

        <div className="flex justify-between items-center mb-5">

          <h2 className="text-2xl font-bold text-white">
            🤖 Gia sư AI
          </h2>

          <button
            onClick={onClose}
            className="text-white text-xl"
          >
            ✕
          </button>

        </div>

        {loading ? (

          <div className="py-20 text-center text-white">

            <div className="text-4xl mb-5 animate-pulse">
                🤖
            </div>

            AI đang giải bài...

          </div>

        ) : (

          <div className="prose prose-invert max-w-none max-h-[70vh] overflow-y-auto">

            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {answer}
            </ReactMarkdown>

          </div>

        )}

      </div>

    </div>
  );
}