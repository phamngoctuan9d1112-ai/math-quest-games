"use client";

import MathText from "../MathText";

type QuestionCardProps = {

    question:string;

};

export default function QuestionCard({

    question,

}:QuestionCardProps){

return(

<div
className="
max-w-3xl
mx-auto
mt-8
text-center
text-2xl
font-bold
"
>

<MathText text={question}/>

</div>

);

}