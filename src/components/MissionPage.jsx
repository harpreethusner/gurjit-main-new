import React from "react";
import { motion } from "framer-motion";

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
  return (
    <section className="relative bg-gradient-to-b from-white via-gray-50/30 to-white py-20 md:py-28 lg:py-32 px-4 sm:px-8 lg:px-16 flex flex-col items-center justify-center w-full overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#9A7B50]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#9A7B50]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative w-full max-w-7xl flex flex-col-reverse lg:flex-row items-center lg:items-center justify-between gap-16 md:gap-20 lg:gap-24">
        {/* Left: Main Content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="w-full lg:flex-1 flex flex-col gap-10 md:gap-12"
        >
          {/* Label with enhanced vertical separator */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center gap-5 group"
          >
            <div className="relative">
              <div className="w-1.5 h-14 md:h-20 bg-gradient-to-b from-[#9A7B50] via-[#B8956A] to-[#9A7B50] flex-shrink-0 rounded-full shadow-lg shadow-[#9A7B50]/20" />
              <div className="absolute top-0 left-0 w-1.5 h-14 md:h-20 bg-[#9A7B50] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
            </div>
            <span className="text-xs md:text-sm tracking-[0.35em] font-Urbanist text-[#9A7B50] uppercase font-semibold letter-spacing-wider">
              Interior Design & Turnkey Execution Studio
            </span>
          </motion.div>

          {/* Main Heading with enhanced typography */}
          <motion.div variants={fadeInUp} className="flex flex-col gap-8 md:gap-10">
            <h3 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-Urbanist text-gray-900 leading-[1.08] tracking-tight">
              Designing spaces with intent.
              <br />
              <span className="relative inline-block">
                <span className="relative z-10 text-[#9A7B50]">
                  Executing them with precision.
                </span>
                <span className="absolute bottom-2 left-0 right-0 h-3 bg-[#9A7B50]/15 -z-0 transform -skew-x-12" />
              </span>
            </h3>

            {/* Description Content with improved spacing */}
            <motion.div variants={fadeInUp} className="flex flex-col gap-6 md:gap-7 pt-3">
              <p className="text-lg md:text-xl lg:text-2xl text-gray-700 font-Urbanist leading-relaxed max-w-2xl font-light">
                At Gurjot Shan Designs, we specialise in end-to-end interior
                design and turnkey execution, delivering refined, functional,
                and timeless spaces. With over 20 years of industry experience,
                we take complete responsibility — from concept to final
                handover.
              </p>

              {/* Enhanced Bullet Points */}
              <div className="flex flex-wrap items-center gap-4 md:gap-5 pt-3">
                {["Homes", "Offices", "Commercial environments"].map((item, index) => (
                  <motion.span
                    key={index}
                    variants={fadeInUp}
                    className="relative group/bullet"
                  >
                    <span className="relative z-10 text-lg md:text-xl lg:text-2xl text-gray-800 font-Urbanist font-medium px-4 py-2 rounded-lg transition-all duration-300 group-hover/bullet:text-[#9A7B50] group-hover/bullet:bg-[#9A7B50]/5">
                      {item}
                      {index < 2 && <span className="text-[#9A7B50] mx-2">•</span>}
                    </span>
                  </motion.span>
                ))}
              </div>

              {/* Enhanced Closing Statement */}
              <motion.p
                variants={fadeInUp}
                className="text-xl md:text-2xl lg:text-3xl text-[#9A7B50] font-Urbanist leading-relaxed italic font-medium pt-4 relative pl-6 border-l-2 border-[#9A7B50]/30"
              >
                Designed thoughtfully. Delivered seamlessly.
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right: Enhanced Experience Card */}
        <motion.div
          variants={imageVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative w-full max-w-lg lg:max-w-md xl:max-w-lg flex-shrink-0 group"
        >
          {/* Enhanced glow effect */}
          <div className="absolute -inset-6 bg-gradient-to-br from-[#9A7B50]/25 via-[#9A7B50]/10 to-transparent rounded-[40px] blur-2xl opacity-70 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
          <div className="absolute -inset-3 bg-gradient-to-tr from-[#FACC6B]/20 via-transparent to-[#1A1A1A]/20 rounded-[36px] blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
          
          {/* Main Card */}
          <div className="relative bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#111827] rounded-[32px] overflow-hidden shadow-2xl border border-white/10 backdrop-blur-sm">
            {/* Enhanced pattern overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(154,123,80,0.15),_transparent_50%),radial-gradient(circle_at_70%_80%,_rgba(250,204,107,0.12),_transparent_50%)] opacity-100" />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(255,255,255,0.03)_0%,_transparent_50%)]" />

            {/* Animated border glow */}
            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-r from-[#9A7B50]/0 via-[#9A7B50]/20 to-[#9A7B50]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm" />

            <div className="relative p-10 md:p-12 lg:p-14 flex flex-col gap-10 justify-between min-h-[400px] md:min-h-[440px]">
              {/* Enhanced Since badge section */}
              <div className="flex justify-between items-start gap-6">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="flex flex-col gap-3"
                >
                  <p className="text-xs md:text-sm tracking-[0.4em] font-Urbanist uppercase text-gray-400 font-medium">
                    Since
                  </p>
                  <p className="text-4xl md:text-5xl font-bold font-Urbanist bg-gradient-to-br from-[#FACC6B] via-[#F1C27D] to-[#E0A42B] bg-clip-text text-transparent drop-shadow-lg">
                    2005
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.7, type: "spring" }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-[#FACC6B]/40 blur-2xl rounded-full animate-pulse" />
                  <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full border-2 border-[#FACC6B]/70 bg-gradient-to-br from-black/60 via-black/40 to-black/60 backdrop-blur-sm flex flex-col items-center justify-center text-center shadow-[0_0_30px_rgba(250,204,107,0.3)] group-hover:shadow-[0_0_40px_rgba(250,204,107,0.5)] transition-all duration-500 group-hover:scale-105 group-hover:border-[#FACC6B]">
                    <span className="text-[11px] md:text-xs tracking-[0.25em] uppercase text-gray-300 font-Urbanist font-medium">
                      Over
                    </span>
                    <span className="text-4xl md:text-5xl font-bold text-white font-Urbanist leading-none mt-1 bg-gradient-to-b from-white to-gray-200 bg-clip-text text-transparent">
                      20
                    </span>
                    <span className="text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-gray-300 font-Urbanist mt-1 font-medium">
                      Years
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Enhanced Supporting text + stats */}
              <div className="space-y-8">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="text-base md:text-lg text-gray-200/95 font-Urbanist leading-relaxed font-light"
                >
                  A boutique studio crafting warm, sophisticated interiors that
                  balance aesthetics with everyday comfort. Every project is
                  managed end-to-end with obsessive attention to detail.
                </motion.p>

                {/* Enhanced Stats Grid */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="grid grid-cols-3 gap-5 pt-2"
                >
                  {[
                    { value: "250+", label: "Projects" },
                    { value: "3", label: "Cities" },
                    { value: "100%", label: "Turnkey" },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                      className="flex flex-col gap-2 group/stat"
                    >
                      <p className="text-3xl md:text-4xl font-bold text-white font-Urbanist bg-gradient-to-br from-white via-gray-100 to-gray-200 bg-clip-text text-transparent group-hover/stat:from-[#FACC6B] group-hover/stat:via-[#F1C27D] group-hover/stat:to-[#E0A42B] transition-all duration-300">
                        {stat.value}
                      </p>
                      <p className="text-[11px] md:text-xs uppercase tracking-[0.2em] text-gray-400 font-Urbanist font-medium group-hover/stat:text-gray-300 transition-colors duration-300">
                        {stat.label}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionPage;
