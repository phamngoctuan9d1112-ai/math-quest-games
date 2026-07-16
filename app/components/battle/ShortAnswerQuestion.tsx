"use client";

import MathText from "../MathText";


type ShortAnswerQuestionProps = {

    question: any;

    shortAnswer: string;

    setShortAnswer: React.Dispatch<React.SetStateAction<string>>;

    showExplanation: boolean;

    checkShortAnswer: () => void;

    handleNextShortQuestion: () => void;

};
export default function ShortAnswerQuestion({

    question,

    shortAnswer,

    setShortAnswer,

    showExplanation,

    checkShortAnswer,

    handleNextShortQuestion,

}: ShortAnswerQuestionProps) {

    return (

        <>
  <div className="mt-6 space-y-4">
    {!showExplanation ? (
      // Khung nhập câu trả lời tự luận ngắn
      <>
        <input
          type="text"
          value={shortAnswer}
          onChange={(e) => setShortAnswer(e.target.value)}
          placeholder="Nhập đáp án số hoặc từ ngắn vào đây..."
          className="w-full border-2 border-slate-300 rounded-xl p-4 text-center text-xl font-bold focus:border-blue-500 outline-none text-black bg-slate-50 shadow-inner"
        />
        <button
          onClick={checkShortAnswer}
          disabled={!shortAnswer.trim()}
          className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-200 disabled:text-slate-400 text-white py-4 rounded-xl font-bold text-lg shadow-md transition"
        >
          Kiểm tra đáp án
        </button>
      </>
    ) : (
      // Khung hiển thị phần Giải thích chi tiết sau khi người chơi bấm nộp bài
      <div className="bg-amber-50 border-2 border-amber-200 p-5 rounded-2xl space-y-3 animate-fade-in text-left">
        <h3 className="font-bold text-amber-800 text-lg flex items-center gap-2">
          💡 Lời giải chi tiết:
        </h3>
        <p className="text-slate-700 leading-relaxed whitespace-pre-line font-medium text-base">
          <MathText
  text={question?.explanation || ""}
/>
        </p>
        <button
          onClick={handleNextShortQuestion}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold text-lg transition mt-4 shadow-md"
        >
          Tiếp tục sang câu kế tiếp ➡️
        </button>
      </div>
    )}
  </div>


        </>

    );

}