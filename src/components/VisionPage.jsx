import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const VisionPage = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className="w-full bg-black text-white py-24 flex flex-row items-center justify-center gap-16 "
    >
      <div className="w-3/4 flex flex-col lg:flex-row gap-20">
        <div className="flex flex-col md:flex-row justify-between w-full items-center gap-8">
          {/* Project Count */}
          <div className="relative group cursor-pointer flex flex-col items-center text-center">
            <div className="text-3xl md:text-4xl font-bold">
              {inView && <CountUp end={1000} duration={2} />}+
            </div>
            <span className="text-lg md:text-xl uppercase font-Urbanist font-light mt-1 relative after:block after:h-[1px] after:w-0 group-hover:after:w-1/2 after:transition-all after:duration-500 after:bg-white after:mx-auto">
              Projects
            </span>
          </div>

          {/* Happy Clients */}
          <div className="relative group cursor-pointer flex flex-col items-center text-center">
            <div className="text-3xl md:text-4xl font-Urbanist font-bold">
              {inView && <CountUp end={50} duration={2} />}+
            </div>
            <span className="font-Urbanist text-lg md:text-xl uppercase font-light mt-1 relative after:block after:h-[1px] after:w-0 group-hover:after:w-1/2 after:transition-all after:duration-500 after:bg-white after:mx-auto">
              Happy Clients
            </span>
          </div>

          {/* Years of Experience */}
          <div className="relative group cursor-pointer flex flex-col items-center text-center">
            <div className="text-3xl md:text-4xl font-bold">
              {inView && <CountUp end={5} duration={2} />}+
            </div>
            <span className="font-Urbanist text-lg md:text-xl uppercase font-light mt-1 relative after:block after:h-[1px] after:w-0 group-hover:after:w-1/2 after:transition-all after:duration-500 after:bg-white after:mx-auto">
              Years
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionPage;
