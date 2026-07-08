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
      fixed
      bottom-5
      right-5
      z-50
      "
    >
      {message && (
        <div
          className="
          bg-white
          rounded-2xl
          shadow-xl
          p-3
          mb-2
          max-w-[220px]
          text-sm
          font-semibold
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
          className="
             w-20
            md:w-32
            "
        />
      </motion.div>
    </div>
  );
}