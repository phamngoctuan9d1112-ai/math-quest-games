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
          placeholder="✍️ Nhập đáp án..."
          className="
w-full

rounded-[24px]

border-2
border-yellow-600

bg-[#1B2F4B]

text-white
text-2xl
font-bold

text-center

py-5
px-6

placeholder:text-slate-400

focus:outline-none
focus:border-yellow-300
focus:ring-4
focus:ring-yellow-500/20

transition
"
        />
        <button
          onClick={checkShortAnswer}
          disabled={!shortAnswer.trim()}
          className={`
w-full

mt-6

py-5

rounded-[24px]

text-xl
font-bold

border-2

transition-all
duration-300

${
!shortAnswer.trim()

?

"bg-slate-700 border-slate-600 text-slate-400 cursor-not-allowed"

:

"bg-[#D6A431] border-yellow-200 text-slate-900 hover:bg-yellow-400 hover:scale-[1.02] active:scale-95 shadow-xl"
}
`}     >
          Kiểm tra đáp án
        </button>
      </>
    ) : (
      // Khung hiển thị phần Giải thích chi tiết sau khi người chơi bấm nộp bài
      <div className="
mt-6

rounded-[28px]

border-2
border-yellow-700

bg-[#102033]

shadow-xl

overflow-hidden

animate-fade-in
">
       <div
className="
bg-[#16283F]

border-b
border-yellow-700

py-4

text-center
"
>

<h3
className="
text-yellow-300

text-xl

font-bold
"
>

📜 LỜI GIẢI CHI TIẾT

</h3>

</div>
       <div
className="
p-8

text-white

text-lg

leading-8
"
>

<MathText
text={question?.explanation || ""}
/>

</div>
        <button
          onClick={handleNextShortQuestion}
          className="
w-full

mt-4

py-5

rounded-[24px]

bg-[#D6A431]

border-2
border-yellow-200

text-slate-900

text-xl
font-bold

transition-all
duration-300

hover:bg-yellow-400
hover:scale-[1.02]

active:scale-95

shadow-xl
"      >
          Tiếp tục sang câu kế tiếp ➡️
        </button>
      </div>
    )}
  </div>


        </>

    );

}