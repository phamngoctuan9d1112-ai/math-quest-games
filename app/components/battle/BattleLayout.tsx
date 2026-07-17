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

pt-6
pb-10

overflow-auto
"
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