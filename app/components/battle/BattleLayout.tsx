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
absolute
inset-0
bg-black/55
"
/>

<div
className="
relative
z-10

w-full
max-w-[1100px]

rounded-[28px]

border-[3px]
border-yellow-700

bg-[#091625]/90

backdrop-blur-md

shadow-[0_0_80px_rgba(0,0,0,.8)]

overflow-hidden

scale-[0.82]
origin-top
"
>

{children}

</div>

</div>
);

}