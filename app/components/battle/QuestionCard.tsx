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
mt-4 md:mt-8

rounded-xl md:rounded-2xl

border-2
border-yellow-500

bg-[#102033]

shadow-lg
md:shadow-xl

overflow-hidden
"
>

<div
className="
flex
items-center
justify-center
gap-2

bg-gradient-to-r
from-[#2a3f5f]
to-[#1c2940]

border-b
border-yellow-500

py-2

md:py-3
"
>

<Image
    src="/icons/book.png"
    alt="Book"
    width={24}
    height={24}
    className="
    w-5
    h-5

    md:w-7
    md:h-7
    "
/>

<h2
className="
text-yellow-300

text-sm

md:text-lg

font-bold

tracking-[2px]

md:tracking-[4px]

uppercase
"
>

Câu hỏi

</h2>

</div>

<div
className="
px-4
py-4

md:px-6
md:py-6

min-h-[80px]

md:min-h-[120px]

flex
items-center
justify-center
"
>

<div
className="
text-base

md:text-xl

font-bold

text-white

leading-7

md:leading-relaxed

text-center
"
>

<MathText text={question}/>

</div>

</div>

</div>

);

}