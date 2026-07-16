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
    border-yellow-500
    bg-[#081B39]
    shadow-2xl
    p-10
    "
>

                <h2
    className="
    text-6xl
    font-extrabold
    text-center
    text-yellow-100
    tracking-widest
    mb-10
    "
>

                    {story.title}

                </h2>

                <div className="grid grid-cols-2 gap-10 items-center">

    <motion.img
        src={story.image}
        initial={{
    opacity: 0,
    x: -40,
}}

animate={{
    opacity: 1,
    x: 0,
}}

transition={{
    duration: 0.6,
}}
        className="
        w-full
        rounded-xl
        shadow-2xl
        border-2
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
        text-2xl
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
mt-10
mx-auto
block
px-16
py-4
rounded-xl
text-2xl
font-bold
bg-gradient-to-r
from-blue-700
to-blue-500
hover:scale-105
transition
text-white
border-2
border-yellow-300
shadow-xl
"

                >

                    Tiếp tục

                </motion.button>

            </motion.div>

        </div>
        </div>

    );

}