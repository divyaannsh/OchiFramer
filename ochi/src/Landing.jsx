import React from "react";

function Landing() {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-40 px-20">
         {["We Create" , " Eye Opening" , " Presentations"].map((item, index) => (
            <div key={index} className="masker">
                 <h1 className="uppercase text-9xl leading-[5.5vw] tracking-tighter font-['Founder_Grotesk'] font-medium">
                    {item}
                 </h1>
            </div>
         ))}
      </div>
    </div>
  );
}

export default Landing;
