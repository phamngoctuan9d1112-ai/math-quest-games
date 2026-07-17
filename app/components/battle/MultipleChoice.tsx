"use client";

import MathText from "../MathText";

type MultipleChoiceProps = {

    options:(string|number)[];

    onAnswer:(value:string|number)=>void;

};

export default function MultipleChoice({

    options,

    onAnswer,

}:MultipleChoiceProps){

    const labels = ["A", "B", "C", "D"];

return(


<div
className="
max-w-5xl
mx-auto
grid
grid-cols-1
md:grid-cols-2
gap-6
mt-10
"
>


{options.map((option, index) => (

<button

key={String(option)}

onClick={()=>onAnswer(option)}

className="
bg-[#1B2F4B]
border-2
border-[#B8860B]

rounded-[28px]

py-8
px-8

text-base

font-bold

shadow-xl



hover:shadow-2xl

hover:bg-[#28486D]

hover:shadow-yellow-500/20

hover:border-yellow-300

transition

duration-200

hover:scale-[1.02]

active:scale-95

flex

items-center

justify-center

"

>

<div className="flex items-center gap-4 w-full">

  <div
className="
w-12
h-12

rounded-xl

border-2
border-yellow-600

bg-[#163150]

text-yellow-300

font-extrabold
text-xl

flex
items-center
justify-center

shadow-lg

shrink-0
"
>
    {labels[index]}
</div>
  <div className="flex-1">

<div
className="
text-white
text-xl
font-semibold
leading-relaxed
"
>

<MathText text={String(option)} />

</div>

</div>

</div>

</button>

))}

</div>

);

}