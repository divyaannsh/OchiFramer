import { FaArrowUpLong } from "react-icons/fa6";

function Landing() {
  return (
    <div className="w-full h-screen bg-zinc-900 bg-cover pt-1">
      <div className="textstructure mt-52 px-20">
        {["We Create", " Eye-Opening", " Presentations"].map((item, index) => (
          <div key={index} className="masker">
            <div className="w-fit flex items-center">
              {index === 1 && (
                <div className="w-[9vw] h-[5vw] bg - bg-red-500" >
                  {/* Red background for "Eye-Opening" */}
                </div>
              )}
              <h1 className="uppercase text-[7.5vw] leading-[6.8vw] tracking-tighter font-['Founder_Grotesk'] font-bold">
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center py-5 px-20">
        {["For Public and Private companies", "From the First Pitch to the IPO"].map((item, index) => (
          <p key={index} className="text-md font-light tracking-tight leading-none">
            {item}
          </p>
        ))}

        <div className="start flex items-center gap-3">
          <div className="px-3 py-1 border-[1px] border-zinc-400 font-light text-sm uppercase rounded-full flex items-center">
            Start Project
           
          </div>
          <div className="ml-2 w-8 h-8 flex items-center justify-center border-[1px] border-zinc-400">
              <span className="rotate-[45deg]">
                <FaArrowUpLong />
              </span>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
