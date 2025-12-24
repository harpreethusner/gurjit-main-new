import React from "react";
import { motion } from "framer-motion";
import men1 from "../assets/images/men1.jpg";
import men2 from "../assets/images/men2.jpg";
import women1 from "../assets/images/women1.jpg";
import women2 from "../assets/images/women2.jpg";
import { SectionTitle } from "./SectionTitle";

const OurTeam = () => {
  const fadeFromTop = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const fadeFromRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="text-gray-600 body-font font-Urbanist ">
      <div className="px-10 py-8 lg:px-32 lg:py-16 flex flex-col gap-6">
        <motion.div
          className="flex flex-col text-center w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeFromTop}
        >
          <SectionTitle
            subtitle={"Whatever cardigan tote bag tumblr"}
            title={"Our Team"}
          />
        </motion.div>
        <div className="flex flex-wrap -m-4">
          {[men1, men2, women1, women2].map((img, index) => (
            <motion.div
              key={index}
              className="p-4 lg:w-1/4 md:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={index < 2 ? fadeFromLeft : fadeFromRight}
            >
              <div className="h-full flex flex-col items-center text-center">
                <img
                  src={img}
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4 transform transition-all duration-500 ease-in-out hover:scale-110 border-8 border-orange-50"
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    {index === 0 && "Alper Kamu"}
                    {index === 1 && "Holden Caulfield"}
                    {index === 2 && "Atticus Finch"}
                    {index === 3 && "Henry Letham"}
                  </h2>
                  <h3 className="text-gray-500 mb-3">UI Developer</h3>
                  <p className="mb-4">
                    DIY tote bag drinking vinegar cronut adaptogen squid fanny
                    pack vaporware.
                  </p>
                  <span className="inline-flex">
                    {[...Array(3)].map((_, i) => (
                      <a
                        key={i}
                        className={`ml-${i !== 0 ? 2 : 0} text-gray-500`}
                      >
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                        </svg>
                      </a>
                    ))}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
