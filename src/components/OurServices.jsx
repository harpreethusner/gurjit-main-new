import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionTitle } from "./SectionTitle";

// Service data
const services = [
  {
    title: "Interior Design",
    desc: "Execution-ready plans: layouts, custom joinery, finishes, lighting, color palettes, and 3D views that stay on budget.",
    href: "/services#interior-design",
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-6 h-6"
        viewBox="0 0 24 24"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
      </svg>
    ),
  },
  {
    title: "Turnkey Interior Execution",
    desc: "One team, one contract, one timeline. We manage civil, electrical, plumbing, ceilings, furniture, finishes, and final styling.",
    href: "/services#turnkey",
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-6 h-6"
        viewBox="0 0 24 24"
      >
        <circle cx="6" cy="6" r="3"></circle>
        <circle cx="6" cy="18" r="3"></circle>
        <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
      </svg>
    ),
  },
  {
    title: "Residential Interiors",
    desc: "Calm, functional homes across apartments, villas, and full renovations—balancing comfort, durability, and budgets.",
    href: "/services#residential",
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-6 h-6"
        viewBox="0 0 24 24"
      >
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    ),
  },
  {
    title: "Commercial & Office Interiors",
    desc: "Workflow-first spaces for offices, studios, clinics, and retail—planned for efficiency, scalability, and brand clarity.",
    href: "/services#commercial",
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-6 h-6"
        viewBox="0 0 24 24"
      >
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
      </svg>
    ),
  },
];

// Slower animation variants
const leftVariant = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const rightVariant = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const OurServices = () => {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true, margin: "-100px" });

  const cardRefs = useRef(services.map(() => React.createRef()));
  const inViewStates = cardRefs.current.map((ref) =>
    useInView(ref, { once: true, margin: "-50px" })
  );

  return (
    <section className="font-Urbanist text-gray-600 body-font bg-white flex items-center justify-center">
      <div className="py-24 flex flex-col items-center justify-center w-full max-w-7xl gap-6">
        {/* Heading */}
        <motion.div
          ref={headingRef}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 1.5, ease: "easeOut" },
            },
          }}
          className="text-center"
        >
          <SectionTitle subtitle={"What Can We Offer"} title={"Our Services"} />
        </motion.div>

        {/* Cards */}
        <div className="hidden min-[400px]:flex flex-row flex-wrap gap-6 justify-center items-start w-full px-4">
          {services.map((service, index) => {
            const inView = inViewStates[index];
            const variant = index < 2 ? leftVariant : rightVariant;

            return (
              <motion.div
                key={index}
                variants={variant}
                initial="hidden"
                whileInView="visible"
                animate={inView ? "visible" : "hidden"}
                viewport={{ once: true, amount: 1 }}
                className="group flex-1 min-w-[220px] max-w-[300px] border border-gray-200 hover:bg-black p-6 rounded-lg shadow-md hover:shadow-xl"
              >
                <div className="w-12 h-12 mb-4 inline-flex items-center justify-center rounded-full bg-[#1c1c27] text-white group-hover:bg-white group-hover:text-black transition-colors duration-300">
                  {service.icon}
                </div>
                <h2 className="text-lg font-semibold title-font mb-2 text-gray-900 group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h2>
                <p className="leading-relaxed text-sm text-gray-600 group-hover:text-gray-300 transition-colors duration-300 line-clamp-4">
                  {service.desc}
                </p>
                <div className="mt-4">
                  <a
                    href={service.href}
                    className="text-sm font-medium text-black group-hover:text-white border-b border-transparent group-hover:border-white transition-all duration-300"
                  >
                    — READ MORE
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
        <div className="flex min-[400px]:hidden flex-row flex-wrap gap-6 justify-center items-start w-full px-4">
          {services.map((service, index) => {
            return (
              <div
                className="group flex-1 min-w-[220px] max-w-[300px] border border-gray-200 hover:bg-black p-6 rounded-lg shadow-md hover:shadow-xl"
                key={index}
              >
                <div className="w-12 h-12 mb-4 inline-flex items-center justify-center rounded-full bg-[#1c1c27] text-white group-hover:bg-white group-hover:text-black transition-colors duration-300">
                  {service.icon}
                </div>
                <h2 className="text-lg font-semibold title-font mb-2 text-gray-900 group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h2>
                <p className="leading-relaxed text-sm text-gray-600 group-hover:text-gray-300 transition-colors duration-300 line-clamp-4">
                  {service.desc}
                </p>
                <div className="mt-4">
                  <a
                    href={service.href}
                    className="text-sm font-medium text-black group-hover:text-white border-b border-transparent group-hover:border-white transition-all duration-300"
                  >
                    — READ MORE
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
