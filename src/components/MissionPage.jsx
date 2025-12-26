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
      <section className="relative bg-gradient-to-b from-white via-gray-50/30 to-white py-20 md:py-28 lg:py-32 px-4 sm:px-8 lg:px-16 flex flex-col items-center justify-center w-full overflow-hidden">
        {/* Version Label */}
        <div className="absolute top-4 left-4 z-10 bg-[#9A7B50] text-white px-4 py-2 rounded-lg font-Urbanist font-semibold text-sm shadow-lg">
          ORIGINAL
        </div>

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
                {content.label}
              </span>
            </motion.div>

            {/* Main Heading with enhanced typography */}
            <motion.div variants={fadeInUp} className="flex flex-col gap-8 md:gap-10">
              <h3 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-Urbanist text-gray-900 leading-[1.08] tracking-tight">
                {content.heading}
                <br />
                <span className="relative inline-block">
                  <span className="relative z-10 text-[#9A7B50]">
                    {content.headingHighlight}
                  </span>
                  <span className="absolute bottom-2 left-0 right-0 h-3 bg-[#9A7B50]/15 -z-0 transform -skew-x-12" />
                </span>
              </h3>

              {/* Description Content with improved spacing */}
              <motion.div variants={fadeInUp} className="flex flex-col gap-6 md:gap-7 pt-3">
                <p className="text-lg md:text-xl lg:text-2xl text-gray-700 font-Urbanist leading-relaxed max-w-2xl font-light">
                  {content.description}
                </p>

                {/* Enhanced Bullet Points */}
                <div className="flex flex-wrap items-center gap-4 md:gap-5 pt-3">
                  {content.bullets.map((item, index) => (
                    <motion.span
                      key={index}
                      variants={fadeInUp}
                      className="relative group/bullet"
                    >
                      <span className="relative z-10 text-lg md:text-xl lg:text-2xl text-gray-800 font-Urbanist font-medium px-4 py-2 rounded-lg transition-all duration-300 group-hover/bullet:text-[#9A7B50] group-hover/bullet:bg-[#9A7B50]/5">
                        {item}
                        {index < content.bullets.length - 1 && <span className="text-[#9A7B50] mx-2">•</span>}
                      </span>
                    </motion.span>
                  ))}
                </div>

                {/* Enhanced Closing Statement */}
                <motion.p
                  variants={fadeInUp}
                  className="text-xl md:text-2xl lg:text-3xl text-[#9A7B50] font-Urbanist leading-relaxed italic font-medium pt-4 relative pl-6 border-l-2 border-[#9A7B50]/30"
                >
                  {content.closing}
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

      {/* ALTERNATIVE 1: Side-by-Side with Vertical Stats */}
      <section className="relative bg-gradient-to-b from-white via-gray-50/30 to-white py-20 md:py-28 lg:py-32 px-4 sm:px-8 lg:px-16 flex flex-col items-center justify-center w-full overflow-hidden border-t-2 border-gray-200">
        {/* Version Label */}
        <div className="absolute top-4 left-4 z-10 bg-blue-600 text-white px-4 py-2 rounded-lg font-Urbanist font-semibold text-sm shadow-lg">
          ALT 1: Side-by-Side with Vertical Stats
        </div>

        <div className="relative w-full max-w-7xl flex flex-col lg:flex-row items-start justify-between gap-12 md:gap-16 lg:gap-20">
          {/* Left: Main Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="w-full lg:flex-1 flex flex-col gap-8 md:gap-10"
          >
            {/* Label */}
            <motion.div variants={fadeInUp} className="flex items-center gap-5">
              <div className="w-1.5 h-14 md:h-20 bg-gradient-to-b from-[#9A7B50] via-[#B8956A] to-[#9A7B50] rounded-full" />
              <span className="text-xs md:text-sm tracking-[0.35em] font-Urbanist text-[#9A7B50] uppercase font-semibold">
                {content.label}
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-Urbanist text-gray-900 leading-[1.08] tracking-tight">
                {content.heading}
                <br />
                <span className="text-[#9A7B50]">{content.headingHighlight}</span>
              </h3>
            </motion.div>

            {/* Description */}
            <motion.div variants={fadeInUp} className="flex flex-col gap-6 pt-3">
              <p className="text-lg md:text-xl lg:text-2xl text-gray-700 font-Urbanist leading-relaxed font-light">
                {content.description}
              </p>

              {/* Bullet Points */}
              <div className="flex flex-wrap items-center gap-4 md:gap-5 pt-3">
                {content.bullets.map((item, index) => (
                  <motion.span
                    key={index}
                    variants={fadeInUp}
                    className="text-lg md:text-xl lg:text-2xl text-gray-800 font-Urbanist font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:text-[#9A7B50] hover:bg-[#9A7B50]/5"
                  >
                    {item}
                    {index < content.bullets.length - 1 && <span className="text-[#9A7B50] mx-2">•</span>}
                  </motion.span>
                ))}
              </div>

              {/* Closing Statement */}
              <motion.p
                variants={fadeInUp}
                className="text-xl md:text-2xl lg:text-3xl text-[#9A7B50] font-Urbanist leading-relaxed italic font-medium pt-4 relative pl-6 border-l-2 border-[#9A7B50]/30"
              >
                {content.closing}
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Right: Vertical Stats Column */}
          <motion.div
            variants={imageVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="w-full lg:w-auto lg:flex-shrink-0"
          >
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-10 lg:p-12 border border-gray-200 shadow-lg">
              <div className="flex flex-col gap-8 md:gap-10">
                {content.stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                    className="flex flex-col gap-2 group/stat border-b border-gray-200 pb-6 last:border-b-0 last:pb-0"
                  >
                    {stat.type === "year" && (
                      <p className="text-xs md:text-sm tracking-[0.3em] font-Urbanist uppercase text-gray-500 font-medium">
                        {stat.label}
                      </p>
                    )}
                    <p className="text-4xl md:text-5xl lg:text-6xl font-bold font-Urbanist bg-gradient-to-br from-[#9A7B50] via-[#B8956A] to-[#9A7B50] bg-clip-text text-transparent group-hover/stat:scale-105 transition-transform duration-300">
                      {stat.value}
                    </p>
                    {stat.type !== "year" && (
                      <p className="text-sm md:text-base uppercase tracking-[0.2em] text-gray-600 font-Urbanist font-medium">
                        {stat.label}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ALTERNATIVE 2: Centered Text with Stats Below */}
      <section className="relative bg-gradient-to-b from-white via-gray-50/30 to-white py-20 md:py-28 lg:py-32 px-4 sm:px-8 lg:px-16 flex flex-col items-center justify-center w-full overflow-hidden border-t-2 border-gray-200">
        {/* Version Label */}
        <div className="absolute top-4 left-4 z-10 bg-green-600 text-white px-4 py-2 rounded-lg font-Urbanist font-semibold text-sm shadow-lg">
          ALT 2: Centered Text with Stats Below
        </div>

        <div className="relative w-full max-w-6xl flex flex-col items-center gap-12 md:gap-16">
          {/* Centered Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="w-full flex flex-col items-center gap-8 md:gap-10 text-center"
          >
            {/* Label */}
            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-5">
              <div className="w-1.5 h-14 md:h-20 bg-gradient-to-b from-[#9A7B50] via-[#B8956A] to-[#9A7B50] rounded-full" />
              <span className="text-xs md:text-sm tracking-[0.35em] font-Urbanist text-[#9A7B50] uppercase font-semibold">
                {content.label}
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-Urbanist text-gray-900 leading-[1.08] tracking-tight">
                {content.heading}
                <br />
                <span className="text-[#9A7B50]">{content.headingHighlight}</span>
              </h3>
            </motion.div>

            {/* Description */}
            <motion.div variants={fadeInUp} className="flex flex-col gap-6 pt-3 max-w-3xl">
              <p className="text-lg md:text-xl lg:text-2xl text-gray-700 font-Urbanist leading-relaxed font-light">
                {content.description}
              </p>

              {/* Bullet Points */}
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-5 pt-3">
                {content.bullets.map((item, index) => (
                  <motion.span
                    key={index}
                    variants={fadeInUp}
                    className="text-lg md:text-xl lg:text-2xl text-gray-800 font-Urbanist font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:text-[#9A7B50] hover:bg-[#9A7B50]/5"
                  >
                    {item}
                    {index < content.bullets.length - 1 && <span className="text-[#9A7B50] mx-2">•</span>}
                  </motion.span>
                ))}
              </div>

              {/* Closing Statement */}
              <motion.p
                variants={fadeInUp}
                className="text-xl md:text-2xl lg:text-3xl text-[#9A7B50] font-Urbanist leading-relaxed italic font-medium pt-4"
              >
                {content.closing}
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Stats Row Below */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="w-full"
          >
            <div className="bg-gradient-to-r from-gray-50 via-white to-gray-50 rounded-2xl p-8 md:p-10 border border-gray-200 shadow-lg">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
                {content.stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex flex-col items-center gap-3 text-center group/stat border-r border-gray-200 last:border-r-0 pr-6 last:pr-0 md:pr-0 md:border-r-0"
                  >
                    {stat.type === "year" && (
                      <p className="text-xs tracking-[0.2em] font-Urbanist uppercase text-gray-500 font-medium">
                        {stat.label}
                      </p>
                    )}
                    <p className="text-3xl md:text-4xl lg:text-5xl font-bold font-Urbanist bg-gradient-to-br from-[#9A7B50] via-[#B8956A] to-[#9A7B50] bg-clip-text text-transparent group-hover/stat:scale-110 transition-transform duration-300">
                      {stat.value}
                    </p>
                    {stat.type !== "year" && (
                      <p className="text-xs md:text-sm uppercase tracking-[0.15em] text-gray-600 font-Urbanist font-medium">
                        {stat.label}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ALTERNATIVE 3: Background Gradient with Overlay Content */}
      <section className="relative py-20 md:py-28 lg:py-32 px-4 sm:px-8 lg:px-16 flex flex-col items-center justify-center w-full overflow-hidden border-t-2 border-gray-200">
        {/* Version Label */}
        <div className="absolute top-4 left-4 z-20 bg-purple-600 text-white px-4 py-2 rounded-lg font-Urbanist font-semibold text-sm shadow-lg">
          ALT 3: Background Gradient with Overlay
        </div>

        {/* Background Gradient/Image */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#9A7B50]/10 via-[#B8956A]/5 to-[#9A7B50]/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(154,123,80,0.15),_transparent_50%),radial-gradient(circle_at_70%_50%,_rgba(186,149,106,0.1),_transparent_50%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(154,123,80,0.05)_0%,_transparent_50%)]" />
        </div>

        {/* Overlay Content Panel */}
        <div className="relative w-full max-w-6xl z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/90 backdrop-blur-md rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl border border-white/50"
          >
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col items-center gap-8 md:gap-10 text-center"
            >
              {/* Label */}
              <motion.div variants={fadeInUp} className="flex items-center justify-center gap-5">
                <div className="w-1.5 h-14 md:h-20 bg-gradient-to-b from-[#9A7B50] via-[#B8956A] to-[#9A7B50] rounded-full" />
                <span className="text-xs md:text-sm tracking-[0.35em] font-Urbanist text-[#9A7B50] uppercase font-semibold">
                  {content.label}
                </span>
              </motion.div>

              {/* Heading */}
              <motion.div variants={fadeInUp}>
                <h3 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-Urbanist text-gray-900 leading-[1.08] tracking-tight">
                  {content.heading}
                  <br />
                  <span className="text-[#9A7B50]">{content.headingHighlight}</span>
                </h3>
              </motion.div>

              {/* Description */}
              <motion.div variants={fadeInUp} className="flex flex-col gap-6 pt-3 max-w-3xl">
                <p className="text-lg md:text-xl lg:text-2xl text-gray-700 font-Urbanist leading-relaxed font-light">
                  {content.description}
                </p>

                {/* Bullet Points */}
                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-5 pt-3">
                  {content.bullets.map((item, index) => (
                    <motion.span
                      key={index}
                      variants={fadeInUp}
                      className="text-lg md:text-xl lg:text-2xl text-gray-800 font-Urbanist font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:text-[#9A7B50] hover:bg-[#9A7B50]/5"
                    >
                      {item}
                      {index < content.bullets.length - 1 && <span className="text-[#9A7B50] mx-2">•</span>}
                    </motion.span>
                  ))}
                </div>

                {/* Closing Statement */}
                <motion.p
                  variants={fadeInUp}
                  className="text-xl md:text-2xl lg:text-3xl text-[#9A7B50] font-Urbanist leading-relaxed italic font-medium pt-4"
                >
                  {content.closing}
                </motion.p>
              </motion.div>

              {/* Stats Row Inside Overlay */}
              <motion.div
                variants={fadeInUp}
                className="w-full mt-8 pt-8 border-t border-gray-200"
              >
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
                  {content.stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                      className="flex flex-col items-center gap-2 text-center group/stat border-r border-gray-200 last:border-r-0 pr-6 last:pr-0 md:pr-0 md:border-r-0"
                    >
                      {stat.type === "year" && (
                        <p className="text-xs tracking-[0.2em] font-Urbanist uppercase text-gray-500 font-medium">
                          {stat.label}
                        </p>
                      )}
                      <p className="text-3xl md:text-4xl lg:text-5xl font-bold font-Urbanist bg-gradient-to-br from-[#9A7B50] via-[#B8956A] to-[#9A7B50] bg-clip-text text-transparent group-hover/stat:scale-110 transition-transform duration-300">
                        {stat.value}
                      </p>
                      {stat.type !== "year" && (
                        <p className="text-xs md:text-sm uppercase tracking-[0.15em] text-gray-600 font-Urbanist font-medium">
                          {stat.label}
                        </p>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MissionPage;
