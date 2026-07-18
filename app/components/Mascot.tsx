"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  state:
    | "idle"
    | "happy"
    | "sad"
    | "celebrate"
    | "thinking";

  message?: string;
};

export default function Mascot({
  state,
  message,
}: Props) {
  return (
    <div
className="
flex
flex-col
items-center
z-50
"
>
      {message && (
    <div
        className="
        mb-2

        max-w-[220px]
        md:max-w-[260px]

        rounded-2xl

        bg-white/95

        px-4
        py-2

        text-center

        text-xs
        md:text-sm

        font-semibold

        shadow-xl
        "
    >
        {message}
    </div>
)}

      <motion.div
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
      >
        <Image
    src={`/mascot/${state}.png`}
    alt="Mascot"
    width={160}
    height={160}
    className="
    w-16
    sm:w-20
    md:w-24
    lg:w-32

    h-auto
    "
/>
      </motion.div>
    </div>
  );
}