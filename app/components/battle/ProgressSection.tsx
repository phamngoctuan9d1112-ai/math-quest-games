"use client";

import Image from "next/image";

type ProgressSectionProps = {

    message: string;

    showCorrectAnswer: boolean;

    question: any;

    current: number;

    questions: any[];
    

};

export default function ProgressSection({

    message,

    showCorrectAnswer,

    question,

    current,

    questions,

}: ProgressSectionProps){

    return (

        <>
{message && (
  <div className="bg-yellow-100 text-black p-3 rounded-xl mt-4 text-center">
    {message}
  </div>
)}

{showCorrectAnswer && (
  <div className="mt-4 bg-red-50 border-2 border-red-300 rounded-xl p-4">
    <h3 className="font-bold text-red-600">
      ❌ Đáp án đúng:
    </h3>

    <p className="text-lg font-bold text-slate-800 mt-2">
      {question?.answer}
    </p>

    {question?.explanation && (
      <div className="mt-3">
        <h4 className="font-bold text-amber-700">
          💡 Giải thích:
        </h4>

        <p className="text-slate-700 whitespace-pre-line">
          {question.explanation}
        </p>
      </div>
    )}
  </div>
)}

       <div className="text-center mb-4">

<p className="text-white text-xl font-semibold">

Câu {current + 1} / {questions.length}

</p>

</div>

       <div className="flex items-center gap-4 mt-5">

   <div className="flex items-center">

<Image
    src="/icons/shield.png"
    alt="Shield"
    width={42}
    height={42}
/>

</div>

    <div
className="
flex-1

h-3

rounded-full

border-2
border-yellow-500

bg-[#1b2233]

overflow-hidden

shadow-inner
"
>
        <div
className="
h-full

bg-gradient-to-r
from-lime-400
via-green-500
to-emerald-600
shadow-[0_0_12px_rgba(34,197,94,.5)]

transition-all
duration-500
"
            style={{
                width: `${
                    questions.length
                        ? ((current + 1) / questions.length) * 100
                        : 0
                }%`,
            }}
        />
    </div>

    <div className="text-yellow-400 text-2xl">
        ◆
    </div>

</div>

       

        </>

    );

}