"use client";
import MathText from "../MathText";
type Props = {

    question:any;

    tfAnswers: Record<string, "Đúng" | "Sai">

    setTfAnswers: React.Dispatch<
React.SetStateAction<
Record<string,"Đúng"|"Sai">
>>

    checkTrueFalseAnswer:()=>void;

    showTFAnswer:boolean;

    setShowTFAnswer:any;

    current:number;

    questions:any[];

    setCurrent:any;

    moveToNextQuestion:()=>void;

};

export default function TrueFalseQuestion({

    question,

    tfAnswers,

    setTfAnswers,

    checkTrueFalseAnswer,

    showTFAnswer,

    setShowTFAnswer,

    current,

    questions,

    setCurrent,

    moveToNextQuestion

}:Props){

    return (

        <>

        


  <div className="mt-6 space-y-4">
    {question?.subQuestions?.map((sub: any) => (
      <div key={sub.label} className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <span className="text-slate-700 text-base">
          <strong className="text-indigo-600 font-bold">{sub.label}</strong> <MathText text={sub.text} />
        </span>
        
        {/* Cặp nút Đúng / Sai cho từng ý */}
        <div className="flex gap-2 w-full sm:w-auto">
          <button
            onClick={() => setTfAnswers((prev: Record<string, string>) => ({
    ...prev,
    [sub.label]: "Đúng"
}))}
            className={`flex-1 sm:flex-none px-4 py-2 rounded-lg font-bold border transition text-sm ${tfAnswers[sub.label] === "Đúng" ? "bg-green-500 text-white border-green-600" : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50"}`}
          >
            Đúng
          </button>
          <button
            onClick={() => setTfAnswers((prev: Record<string, string>) => ({
    ...prev,
    [sub.label]: "Sai"
}))}
            className={`flex-1 sm:flex-none px-4 py-2 rounded-lg font-bold border transition text-sm ${tfAnswers[sub.label] === "Sai" ? "bg-red-500 text-white border-red-600" : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50"}`}
          >
            Sai
          </button>
        </div>
      </div>
    ))}

    
    {/* Nút nộp bài, chỉ sáng lên khi người chơi tích đủ đáp án cho cả 4 ý a,b,c,d */}
    <button
      onClick={checkTrueFalseAnswer}
      disabled={Object.keys(tfAnswers).length < (question?.subQuestions?.length || 4)}
      className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed text-white py-3 rounded-xl font-bold mt-4 shadow-md transition text-lg"
    >
      Nộp bài Đúng / Sai
    </button>
  </div>

  {showTFAnswer && (
  <div className="mt-4 bg-red-50 border-2 border-red-300 rounded-xl p-4">

    <h3 className="font-bold text-red-600">
      Đáp án đúng
    </h3>

    {question?.subQuestions?.map(
      (sub: any) => (
        <div
          key={sub.label}
          className="mt-2"
        >
          <strong>
            {sub.label}
          </strong>
          : {sub.correctAnswer}
        </div>
      )
    )}

    <button
      onClick={() => {
        setShowTFAnswer(false);
        setTfAnswers({});

        const nextIndex =
          current + 1;

        if (
          nextIndex >=
          questions.length
        ) {
          moveToNextQuestion();
        } else {
          setCurrent(nextIndex);
        }
      }}
      className="
      mt-4
      w-full
      bg-blue-500
      text-white
      py-2
      rounded-xl
      "
    >
      Tiếp tục
    </button>
  </div>
)}


        </>

    );

}
