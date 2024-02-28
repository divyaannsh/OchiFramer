import React from 'react';

function Footer() {
  return (
    <div className='flex gap-5 text-white w-full h-screen bg-zinc-900 p-20 font-["Founders_Grotesk_X-Condensed"]'>
      <div className='w-1/2 h-full flex flex-col justify-between'>
        <div className='heading'>
          <h1 className='text-[8vw] font-semibold uppercase leading-none -mb-0.5'>Eye-</h1>
          <h1 className='text-[8vw] font-semibold uppercase leading-none -mb-0.5'>Opening</h1>
        </div>
        <svg width="72" height="30" viewBox="0 0 72 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* SVG paths */}
        </svg>
      </div>
      <div className="w-1/2">
        <h1 className="text-[5vw] uppercase leading-none font-semibold font-['Founders_Grotesk_X-Condensed']">
          Presentations
        </h1>
        <div className="dets font-['Founders_Grotesk_X-Condensed'] mt-10">
          <a className="block text-xl font-light ['Founders_Grotesk_X-Condensed']" href="https://www.linkedin.com/in/divyansh-srivastav-a00127221/">
          LinkedIn 
          </a>
          <a className="block text-xl font-light ['Founders_Grotesk_X-Condensed']" href="">
            Instagram
          </a>
          <a className="block text-xl font-light ['Founders_Grotesk_X-Condensed']" href="https://twitter.com/SpongeeBob17">
            Twitter
          </a>

          <p className="block text-xl font-light ['Founders_Grotesk_X-Condensed']">
          Made with ❤️ by Divyansh Srivastava
        </p>
        </div>
        
        
      </div>
    </div>
  );
}

export default Footer;
