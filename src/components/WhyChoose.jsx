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
    title: "Expert Team",
    description:
      "Our experienced designers bring years of expertise and creative vision to every project.",
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
        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    ),
    title: "On-Time Delivery",
    description:
      "We respect your time and ensure timely completion of all projects without compromising quality.",
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
        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    ),
    title: "Affordable Pricing",
    description:
      "Quality interior design solutions that fit your budget without hidden costs or surprises.",
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
        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
      </svg>
    ),
    title: "Personalized Design",
    description:
      "Every space is uniquely crafted to reflect your style, needs, and lifestyle preferences.",
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
    title: "Quality Assurance",
    description:
      "We use premium materials and maintain the highest standards in every aspect of our work.",
  },
  {
    number: "06",
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
    title: "End-to-End Service",
    description:
      "From concept to completion, we handle everything ensuring a seamless experience for you.",
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

const WhyChoose = () => {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true, margin: "-100px" });

  return (
    <section className="font-Urbanist bg-white py-16 md:py-24 px-4 sm:px-8 flex items-center justify-center w-full">
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
            subtitle={"Our Advantages"}
            title={"Why Choose Us"}
          />
        </motion.div>

        {/* Features Grid - Vertical Card Layout with Different Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -12, scale: 1.03 }}
              className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden border-l-4 border-transparent hover:border-[#9A7B50]"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9A7B50]/0 via-[#9A7B50]/0 to-[#9A7B50]/0 group-hover:from-[#9A7B50] group-hover:via-[#9A7B50]/50 group-hover:to-[#9A7B50] transition-all duration-500"></div>

              {/* Content - Vertical Layout */}
              <div className="relative flex flex-col items-center text-center gap-4">
                {/* Icon Container - Centered */}
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#9A7B50]/20 to-[#9A7B50]/10 flex items-center justify-center text-[#9A7B50] group-hover:from-[#9A7B50] group-hover:to-[#9A7B50]/90 group-hover:text-white transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-12 shadow-lg group-hover:shadow-xl">
                    {feature.icon}
                  </div>
                  {/* Number badge */}
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-[#9A7B50] text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {feature.number}
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-black mb-3 group-hover:text-[#9A7B50] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Decorative corner element */}
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-[#9A7B50]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tl-full"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
