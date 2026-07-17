"use client";

import MathText from "../MathText";
import Image from "next/image";

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

rounded-2xl

border-2
border-yellow-500

shadow-[0_0_18px_rgba(255,210,70,.25)]

bg-[#102033]

shadow-xl

overflow-hidden
"
>

<div
className="
flex
items-center
justify-center
gap-3

bg-gradient-to-r
from-[#2a3f5f]
to-[#1c2940]

border-b
border-yellow-500

py-3
"
>

<Image
    src="/icons/book.png"
    alt="Book"
    width={28}
    height={28}
/>

<h2
className="
text-yellow-300
text-lg
font-bold
tracking-[4px]
uppercase
"
>

Câu hỏi

</h2>

</div>

<div
className="
p-5

min-h-[110px]

flex
items-center
justify-center
"
>

<div
className="
text-xl
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