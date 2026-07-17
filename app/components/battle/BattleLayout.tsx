"use client";

export default function BattleLayout({
    children,
}:{
    children:React.ReactNode;
}){

return(

<div
className="
min-h-screen
bg-black
flex
justify-center
items-start
py-10
px-4
"
>

<div
className="
w-full
max-w-[900px]

rounded-[28px]

border-[3px]
border-yellow-700

bg-[#091625]

shadow-[0_0_60px_rgba(0,0,0,0.8)]

overflow-hidden

origin-top
scale-90
"
>

{children}

</div>

</div>

);

}