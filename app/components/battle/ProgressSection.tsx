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

        <p className="text-center mt-2">
          Câu {current + 1} / {questions.length}
        </p>

        <div
  className="
    w-full
    bg-gray-300
    rounded-full

    h-2
    md:h-4

    mt-3
  "
>
          <div
  className="
    bg-green-500

    h-2
    md:h-4

    rounded-full
    transition-all
  "
          style={{ width: `${questions.length > 0 ? ((current + 1) / questions.length) * 100 : 0}%` }} />
        </div>

       

        </>

    );

}