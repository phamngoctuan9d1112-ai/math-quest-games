"use client";

import MathText from "../MathText";

type MultipleChoiceProps = {

    options:(string|number)[];

    onAnswer:(value:string|number)=>void;

    hiddenOptions:number[];

};

export default function MultipleChoice({

    options,

    onAnswer,

    hiddenOptions,

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

gap-3

md:gap-5

mt-4

md:mt-8
"
>


{options.map((option, index) => {

    if (hiddenOptions.includes(index)) {

        return null;

    }

    return (

<button

key={String(option)}

onClick={()=>onAnswer(option)}

className="
bg-[#1B2F4B]

border-2
border-[#B8860B]

rounded-xl

md:rounded-[28px]

px-4
py-3

md:px-8
md:py-6

font-bold

shadow-lg

hover:bg-[#28486D]

hover:border-yellow-300

hover:shadow-yellow-500/20

transition-all

duration-200

hover:scale-[1.02]

active:scale-95

flex

items-start
"

>

<div
className="
flex
items-start

gap-3

w-full
"
>

<div
className="
w-10
h-10

md:w-12
md:h-12

rounded-full

border-2
border-yellow-300

bg-gradient-to-b
from-[#F8D56B]
via-[#D6A22A]
to-[#8F5A00]

text-[#2b1800]

font-extrabold

text-base

md:text-xl

flex
items-center
justify-center

shadow-[0_0_12px_rgba(255,215,0,.45)]

shrink-0
"
>
    {labels[index]}
</div>
  <div className="flex-1">

<div
className="
flex-1

text-white

text-sm

sm:text-base

md:text-lg

font-semibold

leading-6

md:leading-8

break-words

overflow-hidden
"
>

<MathText text={String(option)} />

</div>

</div>

</div>

</button>

);

})}

</div>

);

}