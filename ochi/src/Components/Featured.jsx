import React from 'react';

function Featured() {
  return (
    <div className='w-full py-20'>
      <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-15'>
        <h1 className='text-xl font-["Neue_MonTreal"] tracking-tight'>
          Featured Projects
        </h1>
      </div>

      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
            
          <div className='cardcontainer  relative rounded-xl w-1/2 h-[75vh] bg-red-500'>
            <h1 className='absolute left-full bg-red-500 -translate-x-1/2  -translate-y-1/2 top-1/2 z-[9]  leading-none tracking-tighter text-8xl'>FYDE</h1>
            <div className='w-full h-full rounded-xl bg-green-600 overflow-hidden'>
                <img  className = "w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
            </div>
            {/* Content for the first card */}
          </div>

          <div className='cardcontainer  rounded-xl w-1/2 h-[75vh] bg-red-500'>
          <div className='w-full h-full rounded-xl bg-green-600 overflow-hidden'>
                <img  className = "w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
            </div>
            {/* Content for the second card */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
