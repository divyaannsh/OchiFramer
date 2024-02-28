import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
      className="text-white w-full  min-h-screen rounded-tl-3xl rounded-tr-3xl py-20 bg-[#004D43]"
    >
      <div className="text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 6 }}
          className="text-[24vw] leading-none  font-semibold font-['Founders_Grotesk_X-Condensed]  uppercase pt-10 mb-20 pr-32"
        >
          We are Ochi
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 6 }}
          className="text-[24vw] leading-none  font-semibold font-['Founders_Grotesk_X-Condensed]  uppercase pt-10 mb-20 pr-32"
        >
          We are Ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;