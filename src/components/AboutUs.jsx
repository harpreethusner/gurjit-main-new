import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import image10 from "../assets/images/image10.jpg";
import OurServices from "./OurServices";
import { useNavigate } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

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

      {/* Who We Are Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-20 md:py-28 px-4 sm:px-8 lg:px-16 w-full">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid w-full max-w-7xl grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-16 mx-auto"
        >
          <motion.div
            variants={textFromLeft}
            className="relative flex justify-center w-full group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#9A7B50]/20 to-transparent rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300" />
            <img
              src={image10}
              alt="Interior Design"
              className="relative transform transition-all duration-500 ease-in-out hover:scale-105 rounded-2xl shadow-2xl z-10 w-full h-auto max-h-[500px] object-cover"
            />
          </motion.div>
          <motion.div
            variants={textFromRight}
            className="flex flex-col items-start gap-6 px-4"
          >
            <motion.div variants={fadeInUp}>
              <span className="text-xs tracking-[0.2em] font-Urbanist text-[#9A7B50] uppercase font-semibold relative pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-6 before:bg-[#9A7B50]">
                About Our Studio
              </span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 font-Urbanist leading-tight">
              Who <span className="text-[#9A7B50]">We Are</span>
            </h2>
            <ul className="space-y-4 text-base md:text-lg text-gray-700 font-Urbanist">
              <motion.li
                variants={fadeInUp}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="w-6 h-6 text-[#9A7B50] flex-shrink-0 mt-0.5" />
                <span>20+ years of professional experience</span>
              </motion.li>
              <motion.li
                variants={fadeInUp}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="w-6 h-6 text-[#9A7B50] flex-shrink-0 mt-0.5" />
                <span>Residential &amp; commercial interior specialists</span>
              </motion.li>
              <motion.li
                variants={fadeInUp}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="w-6 h-6 text-[#9A7B50] flex-shrink-0 mt-0.5" />
                <span>Turnkey execution experts</span>
              </motion.li>
              <motion.li
                variants={fadeInUp}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="w-6 h-6 text-[#9A7B50] flex-shrink-0 mt-0.5" />
                <span>Based in Chandigarh / Mohali, working across India</span>
              </motion.li>
              <motion.li
                variants={fadeInUp}
                className="flex items-start gap-3 pt-2"
              >
                <CheckCircle2 className="w-6 h-6 text-[#9A7B50] flex-shrink-0 mt-0.5" />
                <span className="font-medium">
                  We work with a limited number of projects at a time to ensure
                  focus, detailing, and accountability.
                </span>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>
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
