import React from 'react';
import { motion } from 'framer-motion';
function Marquee() {
  return (
    <div className='w-full h-screen py-20 rounded-tr-3xl bg-[#004D43]'>
      <div className='text border-t-2 border-b-2 border-zinc-300 flex gap-10  overflow-hidden whitespace-nowrap'>
        <h1 className='text-[24vw] leading-none font-["Founders_Grotesk_X-Condensed"] uppercase pt-10 mb-[7vw] font-semibold'>
          We Are Ochi
        </h1>
        <h1 className='text-[24vw] leading-none font-["Founders_Grotesk_X-Condensed"] uppercase pt-10 mb-[7vw] font-semibold'>
          We Are Ochi
        </h1>
      </div>
    </div>
  );
}

export default Marquee;
