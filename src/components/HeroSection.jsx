import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const textFromTop = {
  hidden: { y: -50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeInUp = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const buttonVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen w-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[#000000a6] z-0" />
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-32 py-24 md:py-32">
        <div className="flex flex-col items-center justify-center text-center space-y-8 md:space-y-12">
          {/* Company Name */}
          <motion.h1
            variants={textFromTop}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-Urbanist text-white tracking-tight"
          >
            Gurjot Shan Designs
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-Urbanist text-[#9A7B50] font-semibold tracking-wide"
          >
            Interior Design & Turnkey Execution Studio
          </motion.p>

          {/* Main Tagline */}
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-Urbanist text-white/90 font-light max-w-4xl mx-auto leading-relaxed"
          >
            Designing spaces with intent. Executing them with precision.
          </motion.p>

          {/* Description */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
            className="space-y-4 max-w-4xl mx-auto"
          >
            <p className="text-base sm:text-lg md:text-xl text-white/80 font-Urbanist leading-relaxed">
              At Gurjot Shan Designs, we specialise in end-to-end interior design and turnkey execution, delivering refined, functional, and timeless spaces. With over 20 years of industry experience, we take complete responsibility — from concept to final handover.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 pt-4">
              <p className="text-lg sm:text-xl md:text-2xl font-Urbanist text-white font-medium">
                Homes. Offices. Commercial environments.
              </p>
            </div>
            
            <p className="text-lg sm:text-xl md:text-2xl font-Urbanist text-white/90 font-light italic">
              Designed thoughtfully. Delivered seamlessly.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={buttonVariant}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/MakeAppoinment")}
              className="group px-8 py-4 bg-[#9A7B50] text-white font-Urbanist font-semibold text-base md:text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#8A6B40] flex items-center gap-2"
            >
              Book a Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/ourportfolio")}
              className="group px-8 py-4 bg-transparent border-2 border-white text-white font-Urbanist font-semibold text-base md:text-lg rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center gap-2"
            >
              View Our Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

