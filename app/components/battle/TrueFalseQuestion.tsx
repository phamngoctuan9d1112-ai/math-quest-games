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

        


  <div
className="
mt-5

space-y-3
md:space-y-4
"
>
    {question?.subQuestions?.map((sub: any) => (
      <div key={sub.label} className="
bg-[#1B2F4B]

border-2
border-[#B8860B]

rounded-2xl

p-4
md:p-6

shadow-xl

space-y-3
">
        <span className="text-slate-700 text-base">
          <div className="flex items-center gap-4">

<div
className="
w-9
h-9
md:w-12
md:h-12

rounded-xl

bg-[#163150]

border-2
border-yellow-500

flex
items-center
justify-center

text-yellow-300
text-sm
md:text-base
font-bold
"
>
{sub.label}
</div>

<div className="
flex-1

text-white

text-sm
md:text-lg

leading-6
">

<MathText text={sub.text} />

</div>

</div> 
        </span>
        
        {/* Cặp nút Đúng / Sai cho từng ý */}
        <div
className="
grid
grid-cols-2
gap-4

mt-2
"
>
          <button
            onClick={() => setTfAnswers((prev: Record<string, string>) => ({
    ...prev,
    [sub.label]: "Đúng"
}))}
           className={`
rounded-2xl

py-2.5
md:py-4

font-bold

text-sm
md:text-lg

border-2

transition-all
duration-200

${
tfAnswers[sub.label] === "Đúng"

?

"bg-green-600 border-green-400 text-white shadow-lg"

:

"bg-[#1B2F4B] border-yellow-600 text-yellow-300 hover:bg-[#28486D]"
}
`}
          >
            Đúng
          </button>
          <button
            onClick={() => setTfAnswers((prev: Record<string, string>) => ({
    ...prev,
    [sub.label]: "Sai"
}))}
           className={`
rounded-2xl

py-4

font-bold
text-lg

border-2

transition-all
duration-200

${
tfAnswers[sub.label] === "Sai"

?

"bg-red-600 border-red-400 text-white shadow-lg"

:

"bg-[#1B2F4B] border-yellow-600 text-yellow-300 hover:bg-[#28486D]"
}
`}
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
      className={`
w-full

mt-8

py-5

rounded-[24px]

text-xl
font-bold

transition-all
duration-300

border-2

${
Object.keys(tfAnswers).length < (question?.subQuestions?.length || 4)

?

"bg-slate-700 border-slate-600 text-slate-400 cursor-not-allowed"

:

"bg-[#D6A431] border-yellow-200 text-slate-900 hover:bg-yellow-400 hover:scale-[1.02] active:scale-95 shadow-xl"
}
`}   >
      ⭐ NỘP BÀI ⭐
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
