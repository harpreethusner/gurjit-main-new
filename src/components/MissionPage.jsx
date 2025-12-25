import React from "react";
import { motion } from "framer-motion";

// Animation Variants
const imageVariant = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const textVariant = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeInUp = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const MissionPage = () => {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-32 px-4 sm:px-8 lg:px-16 flex flex-col items-center justify-center w-full">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-start lg:items-center justify-center gap-12 md:gap-16 lg:gap-20">
        {/* Left: Experience Card with Animation */}
        <motion.div
          variants={imageVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative w-full lg:w-auto flex-shrink-0 flex flex-col min-h-[500px] md:min-h-[600px] group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#9A7B50]/20 to-[#9A7B50]/5 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300" />
          <div className="relative w-full h-full min-h-[500px] md:min-h-[600px] max-w-lg md:max-w-xl lg:max-w-2xl bg-center bg-cover bg-[url('assets/images/1.jpg')] rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="relative h-full flex flex-col justify-between p-8 md:p-10">
              <div className="text-right">
                <p className="text-white/90 text-xs md:text-sm tracking-[0.25em] font-semibold font-Urbanist uppercase mb-2">
                  Since
                </p>
                <p className="text-[#F1C27D] text-3xl md:text-4xl font-bold font-Urbanist">2005</p>
              </div>
              <div className="space-y-3">
                <h2 className="text-9xl md:text-[12rem] font-extrabold text-white font-Urbanist leading-none">
                  20
                </h2>
                <p className="text-white text-sm md:text-base tracking-[0.2em] uppercase font-semibold font-Urbanist">
                  Years Experience
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Content with Animation */}
        <motion.div
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="w-full lg:flex-1 flex flex-col gap-8 md:gap-10"
        >
          {/* Label with vertical separator */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center gap-4"
          >
            <div className="w-1 h-12 md:h-16 bg-[#9A7B50] flex-shrink-0"></div>
            <span className="text-xs md:text-sm tracking-[0.3em] font-Urbanist text-[#9A7B50] uppercase font-semibold">
              Interior Design & Turnkey Execution Studio
            </span>
          </motion.div>

          {/* Main Heading */}
          <div className="flex flex-col gap-6 md:gap-8">
            <h3 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-Urbanist text-gray-900 leading-[1.1]">
              Designing spaces with intent.
              <br />
              <span className="text-[#9A7B50]">Executing them with precision.</span>
            </h3>

            {/* Description Content */}
            <div className="flex flex-col gap-5 md:gap-6 pt-2">
              <p className="text-base md:text-lg lg:text-xl text-gray-700 font-Urbanist leading-relaxed max-w-2xl">
                At Gurjot Shan Designs, we specialise in end-to-end interior design and turnkey execution, delivering refined, functional, and timeless spaces. With over 20 years of industry experience, we take complete responsibility — from concept to final handover.
              </p>
              
              {/* Bullet Points */}
              <div className="flex flex-wrap items-center gap-3 md:gap-4 pt-2">
                <span className="text-base md:text-lg lg:text-xl text-gray-800 font-Urbanist font-medium">
                  Homes.
                </span>
                <span className="text-base md:text-lg lg:text-xl text-gray-800 font-Urbanist font-medium">
                  Offices.
                </span>
                <span className="text-base md:text-lg lg:text-xl text-gray-800 font-Urbanist font-medium">
                  Commercial environments.
                </span>
              </div>

              {/* Closing Statement */}
              <p className="text-lg md:text-xl lg:text-2xl text-[#9A7B50] font-Urbanist leading-relaxed italic font-medium pt-2">
                Designed thoughtfully. Delivered seamlessly.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionPage;
