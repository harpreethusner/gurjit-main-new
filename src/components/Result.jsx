import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionTitle } from "./SectionTitle";

const services = [
  {
    title: "Initial Consultation",
    desc: "Understanding requirements, lifestyle, timelines, and budget expectations.",
  },
  {
    title: "Design Development",
    desc: "Layouts, concepts, material selection, and 3D visualisation.",
  },
  {
    title: "Costing & Planning",
    desc: "Detailed BOQ, execution planning, and timeline finalisation.",
  },
  {
    title: "Turnkey Execution",
    desc: "Complete on-site execution with supervision, coordination, and quality checks.",
  },
  {
    title: "Final Handover",
    desc: "Snag resolution, finishing touches, and project handover.",
  },
];

const Result = () => {
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);

  const isHeadingInView = useInView(headingRef, { once: true });
  const isSubheadingInView = useInView(subheadingRef, { once: true });

  const slideTop = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.7 },
    },
  };

  return (
    <section className="bg-[#1d140e] text-white px-10 py-8 lg:px-32 lg:py-16 gap-6 flex flex-col">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.div
          ref={headingRef}
          variants={slideTop}
          initial="hidden"
          animate={isHeadingInView ? "visible" : "hidden"}
          className="text-sm uppercase tracking-widest text-gray-400 mb-2"
        >
          <SectionTitle
            subtitle={"Clear process. Defined responsibility. Peace of mind."}
            title={"Our Process"}
            needWhite={true}
          />
        </motion.div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="group border border-[#e6bca1] bg-transparent transition-all duration-300 rounded-md p-6 text-left h-full flex flex-col justify-between hover:bg-white"
          >
            <div>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#e6bca1] text-black mb-4 transition-colors duration-300 group-hover:bg-black group-hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 transition-colors duration-300 group-hover:text-black">
                {service.title}
              </h3>
              <p className="text-sm text-gray-300 transition-colors duration-300 group-hover:text-gray-700">
                {service.desc}
              </p>
            </div>
            {/* <div className="mt-6">
              <a
                href="#"
                className="text-sm font-medium text-white border-b border-white transition-all duration-300 group-hover:text-black group-hover:border-black"
              >
                — READ MORE
              </a>
            </div> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Result;
