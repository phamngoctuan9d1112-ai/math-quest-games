"use client";

import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
  initial={{
    opacity: 0,
  }}
  animate={{
    opacity: 1,
  }}
  exit={{
    opacity: 0,
  }}
  className="
  min-h-screen
  flex
  flex-col
  items-center
  justify-center
  bg-gradient-to-br
  from-slate-900
  via-indigo-900
  to-purple-900
  text-white
  "
>
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "linear",
        }}
        className="text-8xl"
      >
        ⚽
      </motion.div>

      <h1
        className="
        text-5xl
        font-black
        mt-6
        "
      >
        Math Quest
      </h1>

      <p className="mt-3 text-lg text-gray-300">
        Đang tải dữ liệu...
      </p>

      <div
        className="
        w-72
        h-3
        bg-white/20
        rounded-full
        overflow-hidden
        mt-8
        "
      >
        <motion.div
          className="
          h-full
          bg-green-400
          "
          animate={{
            x: ["-100%", "300%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
        />
      </div>
    </motion.div>
  );
}