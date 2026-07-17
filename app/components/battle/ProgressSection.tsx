"use client";

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

    <div className="text-5xl">
        🛡️
    </div>

    <div
        className="
        flex-1
        h-5
        rounded-full
        border-2
        border-yellow-700
        bg-slate-900
        overflow-hidden
        "
    >
        <div
            className="h-full bg-green-500 transition-all duration-500"
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