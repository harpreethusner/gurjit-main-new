import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Enhanced Animation Variants
const imageVariant = {
  hidden: { x: -50, opacity: 0, scale: 0.95 },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

const textVariant = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

const fadeInUp = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const MissionPage = () => {
  // Shared content data
  const content = {
    label: "Interior Design & Turnkey Execution Studio",
    heading: "Designing spaces with intent.",
    headingHighlight: "Executing them with precision.",
    description: "At Gurjot Shan Designs, we specialise in end-to-end interior design and turnkey execution, delivering refined, functional, and timeless spaces. With over 20 years of industry experience, we take complete responsibility — from concept to final handover.",
    bullets: ["Homes", "Offices", "Commercial environments"],
    closing: "Designed thoughtfully. Delivered seamlessly.",
    stats: [
      { value: "2005", label: "Since", type: "year" },
      { value: "20", label: "Years", type: "years" },
      { value: "250+", label: "Projects" },
      { value: "3", label: "Cities" },
      { value: "100%", label: "Turnkey" },
    ]
  };

  return (
    <div className="w-full">
      {/* ORIGINAL VERSION */}

     {/* About Section */}
          <section className="bg-white py-20 md:py-32 px-4 sm:px-8 lg:px-16 flex flex-col items-center justify-center w-full">
            <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-center gap-12 md:gap-16 lg:gap-20">
              {/* Left Card - Experience Card */}
              <motion.div
                variants={imageVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="relative w-full max-w-sm flex flex-col min-h-[470px] group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#9A7B50]/20 to-[#9A7B50]/5 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300" />
                <div className="relative w-full h-full bg-center bg-cover bg-[url('assets/images/1.jpg')] rounded-2xl overflow-hidden shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="relative h-full flex flex-col justify-between p-8">
                    <div className="text-right">
                      <p className="text-white/80 text-xs tracking-[0.2em] font-semibold font-Urbanist uppercase mb-1">
                        Since
                      </p>
                      <p className="text-[#F1C27D] text-2xl font-bold font-Urbanist">2005</p>
                    </div>
                    <div className="space-y-2">
                      <h2 className="text-8xl md:text-9xl font-extrabold text-white/90 font-Urbanist leading-none">
                        20
                      </h2>
                      <p className="text-white/90 text-sm tracking-[0.15em] uppercase font-semibold font-Urbanist">
                        Years Experience
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
    
              {/* Right Text */}
              <motion.div
                variants={textVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="w-full max-w-2xl flex flex-col gap-6"
              >
                <motion.div
                  variants={fadeInUp}
                  className="inline-block leading-none"
                >
                  <span className="text-m tracking-[0.2em] font-Urbanist text-[#9A7B50] uppercase font-semibold relative pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-6 before:bg-[#9A7B50]">
                    Gurjot Shan Designs
                  </span>
                </motion.div>
                <div className="flex flex-col gap-4">
                  <h2 className="text-4xl md:text-3xl lg:text-5xl font-bold font-Urbanist text-gray-900 leading-tight">
                    Interior Design &
                    <br />
                    <span className="text-[#9A7B50]">Turnkey Execution Studio.</span>
                  </h2>
                  <div className="space-y-2">
                    <p className="text-base md:text-lg text-gray-700 font-Urbanist leading-relaxed">
                      Designing spaces with intent. Executing them with precision.
                    </p>
                    <p className="text-base md:text-lg text-gray-700 font-Urbanist leading-relaxed">
                      At Gurjot Shan Designs, we specialise in end-to-end interior design and turnkey execution, delivering refined, functional, and timeless spaces. With over 20 years of industry experience, we take complete responsibility — from concept to final handover.
    
    
    
                      Homes. Offices. Commercial environments.
    
                      Designed thoughtfully. Delivered seamlessly.
                    </p>
    
    
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate("/contactus")}
                    className="group self-start mt-4 px-8 py-4 bg-[#9A7B50] text-white font-Urbanist font-semibold text-base md:text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#8A6B40] flex items-center gap-2"
                  >
                    Let's Connect
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </section>




    </div>
  );
};

export default MissionPage;
