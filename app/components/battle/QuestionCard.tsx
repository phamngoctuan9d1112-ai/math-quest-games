"use client";

import MathText from "../MathText";

type QuestionCardProps = {
    question: string;
};

export default function QuestionCard({
    question,
}: QuestionCardProps) {

    return (

<div
className="
mt-8

rounded-3xl

border-2
border-yellow-700

bg-[#102033]

shadow-xl

overflow-hidden
"
>

<div
className="
bg-[#16283F]

border-b
border-yellow-700

py-3

text-center
"
>

<h2
className="
text-yellow-300
text-xl
font-bold
tracking-wide
"
>

📖 CÂU HỎI

</h2>

</div>

<div
className="
p-8

min-h-[150px]

flex
items-center
justify-center
"
>

<div
className="
text-2xl
font-bold
text-white
leading-relaxed
text-center
"
>

<MathText text={question}/>

</div>

</div>

</div>

);

}