import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionTitle } from "./SectionTitle";

const features = [
  {
    number: "01",
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        className="w-10 h-10"
        viewBox="0 0 24 24"
      >
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    ),
    title: "Single-point responsibility: design + execution",
    description:
      "We take complete ownership from concept to final handover, ensuring seamless coordination and accountability throughout your project.",
  },
  {
    number: "02",
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        className="w-10 h-10"
        viewBox="0 0 24 24"
      >
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
      </svg>
    ),
    title: "Experienced team & in-house manufacturing support",
    description:
      "Our seasoned professionals, backed by over 20 years of experience and in-house manufacturing capabilities, deliver exceptional quality and craftsmanship.",
  },
  {
    number: "03",
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        className="w-10 h-10"
        viewBox="0 0 24 24"
      >
        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    ),
    title: "Transparent costing & structured timelines",
    description:
      "Clear, upfront pricing with no hidden costs and well-defined project timelines keep you informed and in control throughout the process.",
  },
  {
    number: "04",
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        className="w-10 h-10"
        viewBox="0 0 24 24"
      >
        <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
      </svg>
    ),
    title: "Strong vendor & contractor ecosystem",
    description:
      "Our established network of trusted vendors and contractors ensures reliable sourcing, competitive pricing, and consistent quality delivery.",
  },
  {
    number: "05",
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        className="w-10 h-10"
        viewBox="0 0 24 24"
      >
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
      </svg>
    ),
    title: "Hands-on leadership & quality control",
    description:
      "Direct involvement from leadership ensures meticulous attention to detail, rigorous quality checks, and uncompromising standards at every stage.",
  },
];

const cardVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
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

const WhyChooseUs = () => {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true, margin: "-100px" });

  return (
    <section className="font-Urbanist bg-gradient-to-b from-gray-50 to-white py-16 md:py-24 px-4 sm:px-8 flex items-center justify-center w-full">
      <div className="w-full max-w-7xl flex flex-col items-center justify-center gap-12">
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
              transition: { duration: 1, ease: "easeOut" },
            },
          }}
          className="text-center"
        >
          <SectionTitle
            subtitle={""}
            title={"What Sets Us Apart"}
          />
        </motion.div>

        {/* Features Grid - Horizontal Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 w-full">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white rounded-xl p-6 md:p-8 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden border border-transparent hover:border-[#9A7B50]/20"
            >
              {/* Decorative number in background */}
              <div className="absolute top-0 right-0 text-8xl md:text-9xl font-bold text-[#9A7B50]/5 leading-none select-none">
                {feature.number}
              </div>

              {/* Content */}
              <div className="relative flex items-start gap-6">
                {/* Icon Container */}
                <div className="flex-shrink-0 relative">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#9A7B50]/10 to-[#9A7B50]/5 flex items-center justify-center text-[#9A7B50] group-hover:from-[#9A7B50] group-hover:to-[#9A7B50]/80 group-hover:text-white transition-all duration-300 transform group-hover:rotate-6 group-hover:scale-110">
                    {feature.icon}
                  </div>
                  {/* Decorative dot */}
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#9A7B50] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Text Content */}
                <div className="flex-1 pt-1">
                  <h3 className="text-xl md:text-2xl font-bold text-black mb-3 group-hover:text-[#9A7B50] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#9A7B50]/0 to-transparent group-hover:via-[#9A7B50] transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Closing Statement */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center text-xl md:text-2xl font-Urbanist text-gray-800 font-medium italic max-w-3xl mx-auto pt-8"
        >
          We don&apos;t just design interiors — we build them responsibly.
        </motion.p>
      </div>
    </section>
  );
};

export default WhyChooseUs;

