"use client";

import { motion,  } from "framer-motion";
import { useEffect, useState } from "react";

type Story = {

    title: string;

    image: string;

    text: string;

};

export default function StoryModal(
   
    {

    story,

    onNext,

}
:

{

    story: Story;

    onNext:()=>void;

    

})

{

     const [displayText, setDisplayText] = useState("");

    useEffect(() => {

        setDisplayText("");

        let i = 0;

        const timer = setInterval(() => {

            i++;

            setDisplayText(story.text.slice(0, i));

            if (i >= story.text.length) {
                clearInterval(timer);
            }

        }, 20);

        return () => clearInterval(timer);

    }, [story]);


    return(

        <div className="fixed inset-0 z-[9999]">

    <img
        src="/story/background.jpg"
        className="absolute inset-0 w-full h-full object-cover"
    />

    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

    <div className="relative flex items-center justify-center h-full">

            <motion.div
            
    initial={{
        opacity: 0,
        scale: 0.9,
        y: 40,
    }}
    animate={{
        opacity: 1,
        scale: 1,
        y: 0,
    }}
    transition={{
        duration: 0.5,
    }}
    className="
    relative
    w-[1050px]
    max-w-[92%]
    rounded-3xl
    border-4
    border-[#d9b96f]
    shadow-yellow-300/20
    overflow-hidden
    bg-[#081B39]
    shadow-2xl
    p-10
    "
>
    <div
className="
absolute
top-0
left-0
right-0
h-2
bg-gradient-to-r
from-yellow-400
via-yellow-200
to-yellow-400
"
/>

<div className="absolute top-5 left-5 text-yellow-300 text-3xl">
✦
</div>

<div className="absolute top-5 right-5 text-yellow-300 text-3xl">
✦
</div>

<div className="absolute bottom-5 left-5 text-yellow-300 text-3xl">
✦
</div>

<div className="absolute bottom-5 right-5 text-yellow-300 text-3xl">
✦
</div>

                <h2
    className="
    text-7xl
    drop-shadow-[0_0_15px_rgba(255,230,120,0.7)]
    font-serif
    font-extrabold
    text-center
    text-yellow-100
    tracking-widest
    mb-10
    "
>

                    {story.title}

                </h2>

                <div
className="
mx-auto
mb-8

w-60
h-[3px]

bg-gradient-to-r
from-transparent
via-yellow-300
to-transparent
"
/>

                <div className="grid grid-cols-2 gap-10 items-center">

    <motion.img
        
        initial={{
    opacity: 0,
    x: -40,
}}


animate={{
    opacity:1,
    x:0,
    scale:[1,1.05,1]
}}

transition={{
    duration:8,
    repeat:Infinity
}}
        className="
        w-full
        rounded-xl
        shadow-2xl
        border-4
        shadow-yellow-200/20
        rounded-2xl
        border-yellow-400
        "
    />

    <motion.p
    initial={{
    opacity: 0,
    x: 40,
}}

animate={{
    opacity: 1,
    x: 0,
}}

transition={{
    delay: 0.2,
    duration: 0.5,
}}
        className="
        whitespace-pre-line
        text-[28px]
        font-light
        tracking-wide
        leading-10
        text-gray-100
        "
    >
        {displayText}
    </motion.p>

</div>

                <motion.button
                whileHover={{
    scale: 1.05,
}}

whileTap={{
    scale: 0.95,
}}
                    onClick={onNext}

                    className="
mt-12

mx-auto

block

px-20

py-4

rounded-2xl

font-bold

text-2xl

bg-gradient-to-b

from-[#3f87ff]

to-[#2056d9]

border-2

border-yellow-300

shadow-lg

shadow-blue-400/40

text-white
"

                >

                    Tiếp tục

                </motion.button>

                <div
    className="
    absolute
    w-[1150px]
    h-[700px]
    rounded-full
    bg-blue-400/20
    blur-[120px]
    "
/>

            </motion.div>

        </div>
        </div>

    );

}