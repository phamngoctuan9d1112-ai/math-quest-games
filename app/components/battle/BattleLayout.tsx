"use client";

export default function BattleLayout({
    children,
}:{
    children:React.ReactNode;
}){

return(

<div
className="
relative

min-h-screen

flex
justify-center
items-start

py-10
px-4

bg-cover
bg-center
bg-no-repeat
"

style={{
    backgroundImage:
        "url('/backgrounds/battle-bg.jpg')",
}}
>

<div
className="
w-[980px]

origin-top
scale-[0.7]

rounded-[28px]

border-[3px]
border-yellow-700

bg-[#091625]

shadow-[0_0_60px_rgba(0,0,0,0.8)]

overflow-hidden
"
>

{children}

</div>

</div>
);

}