import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import image10 from "../assets/images/image10.jpg";
import image8 from "../assets/images/image8.jpg";
import image3 from "../assets/images/image3.jpg";
import image5 from "../assets/images/image5.jpg";
import image6 from "../assets/images/image6.jpg";
import OurServices from "./OurServices";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Star, Award, Building2, Wrench, MapPin, Target } from "lucide-react";

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

const textFromLeft = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const textFromRight = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const textFromTop = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
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

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();

  return (
    <div
      ref={ref}
      className="flex flex-grow flex-col items-center justify-center bg-gray-50"
    >
      {/* Hero Section */}
      <div className="relative h-[70svh] w-full bg-cover bg-center bg-[url('assets/images/bg1.jpg')]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        <div className="relative h-full w-full flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32">
          <motion.div
            variants={textFromTop}
            initial="hidden"
            animate="visible"
            className="text-center space-y-4"
          >
            <motion.span
              className="block text-white font-Urbanist font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight drop-shadow-2xl"
            >
              About Us
            </motion.span>
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
              className="text-white/90 font-Urbanist text-lg sm:text-xl md:text-2xl font-light max-w-2xl mx-auto"
            >
              Crafting spaces that inspire and transform
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* About Section */}
      <section className="bg-white py-20 md:py-32 px-4 sm:px-8 lg:px-16 flex flex-col items-center justify-center w-full">
        <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-center gap-12 md:gap-16 lg:gap-20">
          {/* Left Card - Experience Card */}
          <motion.div
            variants={imageVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative w-full max-w-sm flex flex-col min-h-[450px] group"
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
              className="inline-block"
            >
              <span className="text-xs tracking-[0.2em] font-Urbanist text-[#9A7B50] uppercase font-semibold relative pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-6 before:bg-[#9A7B50]">
                Our Philosophy
              </span>
            </motion.div>
            <div className="flex flex-col gap-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-Urbanist text-gray-900 leading-tight">
                Good design goes
                <br />
                <span className="text-[#9A7B50]">beyond how a space looks.</span>
              </h2>
              <div className="space-y-4">
                <p className="text-base md:text-lg text-gray-700 font-Urbanist leading-relaxed">
                  Good design is not just about how a space looks — it&apos;s about
                  how well it works, how long it lasts, and how effortlessly it is
                  delivered. Gurjot Shan Designs was founded with this belief.
                </p>
                <p className="text-base md:text-lg text-gray-700 font-Urbanist leading-relaxed">
                  Led by Gurjot Shan, the studio brings together creativity,
                  technical understanding, and execution expertise. Over the
                  years, we have evolved into a design-build studio, trusted by
                  clients who value clarity, commitment, and craftsmanship.
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

      {/* Who We Are Section - Three Versions for Comparison */}
      
      {/* ========== VERSION 1: Classic Split Layout (Single Row) ========== */}
      <section className="bg-white py-20 md:py-32 px-4 sm:px-8 lg:px-16 w-full border-t-4 border-blue-500">
        <div className="w-full max-w-7xl mx-auto">
          {/* Version Label */}
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-blue-500 text-white font-bold font-Urbanist text-sm uppercase tracking-wider rounded">
              Version 1: Classic Split Layout
            </span>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
            {/* Left Image */}
            <motion.div
              variants={imageVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="w-full lg:w-1/3 max-w-md"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                <img
                  src={image10}
                  alt="Team member"
                  className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </motion.div>

            {/* Center Content */}
            <motion.div
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="w-full lg:w-1/3 flex flex-col items-center text-center gap-6 px-4"
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="block h-[1px] w-12 bg-[#9A7B50]/60" />
                <div className="h-12 w-12 rounded-full bg-[#1f1a17] text-[#F1C27D] flex items-center justify-center shadow-lg">
                  <Star className="w-6 h-6" />
                </div>
                <span className="block h-[1px] w-12 bg-[#9A7B50]/60" />
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-Urbanist text-[#1f1a17]">
                Who We Are
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#9A7B50] to-transparent" />
              <ul className="text-base md:text-lg text-gray-700 font-Urbanist leading-relaxed mt-6 space-y-3 text-left w-full max-w-md">
                <li className="flex items-start gap-3">
                  <span className="text-[#9A7B50] font-bold mt-1">•</span>
                  <span>20+ years of professional experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#9A7B50] font-bold mt-1">•</span>
                  <span>Residential & commercial interior specialists</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#9A7B50] font-bold mt-1">•</span>
                  <span>Turnkey execution experts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#9A7B50] font-bold mt-1">•</span>
                  <span>Based in <span className="font-semibold text-[#9A7B50]">Chandigarh / Mohali</span>, working across India</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#9A7B50] font-bold mt-1">•</span>
                  <span>We work with a limited number of projects at a time to ensure focus, detailing, and accountability.</span>
                </li>
              </ul>
            </motion.div>

            {/* Right Image */}
            <motion.div
              variants={imageVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="w-full lg:w-1/3 max-w-md"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                <img
                  src={image8}
                  alt="Team member"
                  className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== VERSION 2: Vertical Stacked Layout ========== */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 md:py-32 px-4 sm:px-8 lg:px-16 w-full border-t-4 border-green-500">
        <div className="w-full max-w-7xl mx-auto">
          {/* Version Label */}
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-green-500 text-white font-bold font-Urbanist text-sm uppercase tracking-wider rounded">
              Version 2: Vertical Stacked Layout
            </span>
          </div>

          <div className="flex flex-col items-center gap-12">
            {/* Heading at Top */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="text-center w-full"
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="block h-[1px] w-16 bg-[#9A7B50]/60" />
                <div className="h-14 w-14 rounded-full bg-[#1f1a17] text-[#F1C27D] flex items-center justify-center shadow-lg">
                  <Star className="w-7 h-7" />
                </div>
                <span className="block h-[1px] w-16 bg-[#9A7B50]/60" />
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-Urbanist text-[#1f1a17] mb-4">
                Who We Are
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#9A7B50] to-transparent mx-auto" />
            </motion.div>

            {/* Two Images Side by Side */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl"
            >
              <motion.div
                variants={fadeInUp}
                className="relative overflow-hidden rounded-2xl shadow-2xl group"
              >
                <img
                  src={image3}
                  alt="Team member"
                  className="w-full h-[350px] md:h-[400px] object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="relative overflow-hidden rounded-2xl shadow-2xl group"
              >
                <img
                  src={image5}
                  alt="Team member"
                  className="w-full h-[350px] md:h-[400px] object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </motion.div>
            </motion.div>

            {/* Content Below Images */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="w-full max-w-4xl"
            >
              <ul className="text-base md:text-lg text-gray-700 font-Urbanist leading-relaxed space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#9A7B50] font-bold mt-1">•</span>
                  <span>20+ years of professional experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#9A7B50] font-bold mt-1">•</span>
                  <span>Residential & commercial interior specialists</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#9A7B50] font-bold mt-1">•</span>
                  <span>Turnkey execution experts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#9A7B50] font-bold mt-1">•</span>
                  <span>Based in <span className="font-semibold text-[#9A7B50]">Chandigarh / Mohali</span>, working across India</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#9A7B50] font-bold mt-1">•</span>
                  <span>We work with a limited number of projects at a time to ensure focus, detailing, and accountability.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== VERSION 3: Full-Width Background Image with Overlay Text ========== */}
      <section className="relative py-20 md:py-32 px-4 sm:px-8 lg:px-16 w-full border-t-4 border-purple-500 overflow-hidden">
        {/* Version Label */}
        <div className="relative z-20 w-full max-w-7xl mx-auto mb-8">
          <span className="inline-block px-4 py-2 bg-purple-500 text-white font-bold font-Urbanist text-sm uppercase tracking-wider rounded">
            Version 3: Full-Width Background with Overlay
          </span>
        </div>

        {/* Full-Width Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={image6}
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
            {/* Overlay Content Box */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="w-full lg:w-1/2 bg-white/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl"
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="block h-[1px] w-12 bg-[#9A7B50]/60" />
                <div className="h-12 w-12 rounded-full bg-[#1f1a17] text-[#F1C27D] flex items-center justify-center shadow-lg">
                  <Star className="w-6 h-6" />
                </div>
                <span className="block h-[1px] w-12 bg-[#9A7B50]/60" />
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-Urbanist text-[#1f1a17] mb-6 text-center">
                Who We Are
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#9A7B50] to-transparent mx-auto mb-6" />
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#9A7B50] font-bold mt-1">•</span>
                  <span className="text-base md:text-lg text-gray-700 font-Urbanist leading-relaxed">20+ years of professional experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#9A7B50] font-bold mt-1">•</span>
                  <span className="text-base md:text-lg text-gray-700 font-Urbanist leading-relaxed">Residential & commercial interior specialists</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#9A7B50] font-bold mt-1">•</span>
                  <span className="text-base md:text-lg text-gray-700 font-Urbanist leading-relaxed">Turnkey execution experts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#9A7B50] font-bold mt-1">•</span>
                  <span className="text-base md:text-lg text-gray-700 font-Urbanist leading-relaxed">Based in <span className="font-semibold text-[#9A7B50]">Chandigarh / Mohali</span>, working across India</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#9A7B50] font-bold mt-1">•</span>
                  <span className="text-base md:text-lg text-gray-700 font-Urbanist leading-relaxed">We work with a limited number of projects at a time to ensure focus, detailing, and accountability.</span>
                </li>
              </ul>
            </motion.div>

            {/* Two Smaller Images Side by Side */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="w-full lg:w-1/2 grid grid-cols-2 gap-4 md:gap-6"
            >
              <motion.div
                variants={fadeInUp}
                className="relative overflow-hidden rounded-xl shadow-2xl group"
              >
                <img
                  src={image10}
                  alt="Team member"
                  className="w-full h-[250px] md:h-[300px] object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="relative overflow-hidden rounded-xl shadow-2xl group"
              >
                <img
                  src={image8}
                  alt="Team member"
                  className="w-full h-[250px] md:h-[300px] object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <OurServices />

      {/* WhatsApp Floating Icon */}
      <motion.a
        href="https://wa.me/your-number"
        className="fixed bottom-6 right-6 z-50 group"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75" />
          <div className="relative bg-white rounded-full p-3 shadow-2xl hover:shadow-green-500/50 transition-shadow">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              className="w-10 h-10"
            />
          </div>
        </div>
      </motion.a>
    </div>
  );
};

export default AboutUs;
