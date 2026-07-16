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

{options.map((option)=>(

<button

key={String(option)}

onClick={()=>onAnswer(option)}

className="
bg-white
border-2
border-slate-300

rounded-3xl

p-6

text-lg

font-bold

shadow-lg

hover:bg-indigo-50

hover:border-indigo-500

transition

flex

items-center

justify-center

"

>

<MathText
text={String(option)}
/>

</button>

))}

</div>

);

}