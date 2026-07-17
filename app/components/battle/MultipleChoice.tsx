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
max-w-4xl
mx-auto
grid
grid-cols-1
md:grid-cols-2
gap-4
mt-8
"
>

{options.map((option, index) => (

<button

key={String(option)}

onClick={()=>onAnswer(option)}

className="
bg-[#16283F]
border-2
border-yellow-700

rounded-3xl

p-6

text-lg

font-bold

shadow-xl

hover:shadow-2xl

hover:bg-[#1F3550]

hover:shadow-yellow-500/20

hover:border-yellow-500

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
    w-10
    h-10

    rounded-full

    bg-yellow-500

    flex
    items-center
    justify-center

    text-black
    font-bold
    "
  >
    {labels[index]}
  </div>

  <div className="flex-1 text-left">
    <MathText text={String(option)} />
  </div>

</div>

</button>

))}

</div>

);

}