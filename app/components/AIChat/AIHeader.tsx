"use client";

import { X } from "lucide-react";
import { motion } from "framer-motion";
import { AIHeaderProps } from "./types";

export default function AIHeader({
  onClose,
}: AIHeaderProps) {

  return (

    <div
      className="
      h-20
      px-6
      border-b
      border-zinc-800
      bg-zinc-900
      flex
      items-center
      justify-between
      "
    >

      <div
        className="
        flex
        items-center
        gap-4
        "
      >

        <motion.div

          animate={{
            rotate: [0, 5, -5, 0],
          }}

          transition={{
            repeat: Infinity,
            duration: 3,
          }}

          className="
          w-12
          h-12
          rounded-full
          bg-blue-600
          flex
          items-center
          justify-center
          text-2xl
          "
        >

          🤖

        </motion.div>

        <div>

          <div
            className="
            font-bold
            text-white
            text-lg
            "
          >

            Quest AI

          </div>

          <div
            className="
            flex
            items-center
            gap-2
            text-sm
            text-green-400
            "
          >

            <span
              className="
              w-2
              h-2
              rounded-full
              bg-green-500
              animate-pulse
              "
            />

            Đang trực tuyến

          </div>

        </div>

      </div>

      <button

        onClick={onClose}

        className="
        w-10
        h-10
        rounded-xl
        hover:bg-zinc-800
        transition
        flex
        items-center
        justify-center
        "
      >

        <X
          size={20}
          className="text-white"
        />

      </button>

    </div>

  );

}