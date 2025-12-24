import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Animation Variants
const imageVariant = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const textVariant = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const MissionPage = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-white py-16 md:py-24 px-4 sm:px-8 flex flex-col items-center justify-center w-full">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-center gap-12 md:gap-20">
        {/* Left: Experience Card with Animation */}
        <motion.div
          variants={imageVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="relative w-full max-w-xs flex flex-col min-h-[400px] shadow-md bg-center bg-cover bg-[url('assets/images/1.jpg')]"
        >
          <div className="flex-grow bg-opacity-80 flex flex-col justify-between bg-white/95 m-6 p-6">
            <div className="text-right text-xs text-[#9A7B50] font-semibold">
              SINCE
              <br />
              2005
            </div>
            <div>
              <div className="flex flex-col justify-end px-10 py-14 absolute z-20 h-full w-full left-0 top-0 bg-[url('assets/images/1.jpg')] bg-cover bg-center text-9xl font-extrabold text-transparent bg-clip-text">
                <h1>20</h1>
              </div>

              <p className="mt-4 text-sm text-[#9A7B50] tracking-widest uppercase font-semibold">
                Years Experience
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right: Content with Animation */}
        <motion.div
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="w-full max-w-2xl flex flex-col gap-2"
        >
          <p className="text-sm tracking-wider font-Urbanist text-[#9A7B50] uppercase">
              Our Philosophy
            </p>
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl md:text-5xl font-bold font-Urbanist text-black leading-tight">
                Good design goes
                <br />
                beyond how a space looks.
              </h2>
            <p className="text-base text-gray-600 font-Urbanist leading-relaxed ">
                Good design is not just about how a space looks — it&apos;s about
                how well it works, how long it lasts, and how effortlessly it is
                delivered. Gurjot Shan Designs was founded with this belief.
              </p>
              <p className="text-base text-gray-600 font-Urbanist leading-relaxed ">
                Led by Gurjot Shan, the studio brings together creativity,
                technical understanding, and execution expertise. Over the
                years, we have evolved into a design-build studio, trusted by
                clients who value clarity, commitment, and craftsmanship.
              </p>
            <button
              className="self-start px-4 gap-2 py-4 md:px-4 md:py-4 text-xs md:text-lg font-semibold text-black outline-1 outline-[#9A7B50] rounded-md hover:bg-[#9A7B50] font-Urbanist hover:text-white"
              onClick={() => navigate("/MakeAppoinment")}
            >
              Let's Connect
            </button>

            {/* Stats Section */}
            {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-3xl font-bold text-[#9A7B50]">352</p>
                <p className="text-sm uppercase tracking-widest mt-2 font-Urbanist text-gray-700">
                  Projects Completed
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#9A7B50]">567</p>
                <p className="text-sm uppercase tracking-widest mt-2 font-Urbanist text-gray-700">
                  Satisfied Clients
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#9A7B50]">17</p>
                <p className="text-sm uppercase tracking-widest mt-2 font-Urbanist text-gray-700">
                  Awards Won
                </p>
              </div>
            </div> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionPage;
