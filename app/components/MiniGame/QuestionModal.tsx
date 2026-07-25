"use client";

type Props = {

    open:boolean;

    onClose:()=>void;

};

export default function QuestionModal({

    open,

    onClose,

}:Props){

    if(!open) return null;

    return(

<div

className="
fixed
inset-0

bg-black/70

flex

items-center

justify-center

z-50
"

>

<div

className="
bg-zinc-900

rounded-2xl

p-8

w-[500px]
"

>

<h2

className="
text-2xl

font-bold

text-white

mb-5
"

>

Câu hỏi

</h2>

<div

className="
text-white

mb-6
"

>

2 + 2 bằng bao nhiêu?

</div>

<div

className="
space-y-3
"

>

<button

className="
w-full

py-3

rounded-xl

bg-blue-600

text-white
"

>

3

</button>

<button

className="
w-full

py-3

rounded-xl

bg-blue-600

text-white
"

>

4

</button>

<button

className="
w-full

py-3

rounded-xl

bg-blue-600

text-white
"

>

5

</button>

</div>

<button

onClick={onClose}

className="
mt-5

w-full

bg-red-500

py-3

rounded-xl

text-white
"

>

Đóng

</button>

</div>

</div>

);

}