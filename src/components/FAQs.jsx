import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { SectionTitle } from "./SectionTitle";

const faqs = [
  {
    question: "How long does an interior design project typically take?",
    answer:
      "The timeline varies depending on the scope and size of the project. A typical residential project can take anywhere from 4-12 weeks, while larger commercial projects may take 3-6 months. We provide a detailed timeline during the initial consultation.",
  },
  {
    question: "Do you provide turnkey interior solutions?",
    answer:
      "Yes, we offer complete turnkey interior execution services. We manage everything from design conceptualization to final installation, including civil work, electrical, plumbing, furniture, and styling, ensuring a seamless experience for our clients.",
  },
  {
    question: "What is included in your design package?",
    answer:
      "Our design package includes space planning, custom joinery designs, material selection, color palettes, lighting plans, 3D visualizations, and detailed execution drawings. We also provide project management and vendor coordination services.",
  },
  {
    question: "Can you work within our budget?",
    answer:
      "Absolutely! We understand that budget is an important consideration. During our initial consultation, we discuss your budget and work closely with you to create a design plan that maximizes value while staying within your financial parameters.",
  },
  {
    question: "Do you work on both residential and commercial projects?",
    answer:
      "Yes, we specialize in both residential and commercial interior design. Our portfolio includes homes, apartments, villas, offices, retail spaces, clinics, and studios. We adapt our approach to suit the specific requirements of each project type.",
  },
  {
    question: "How do we get started with a project?",
    answer:
      "Getting started is easy! Simply contact us through our website or call us to schedule a consultation. During this meeting, we'll discuss your vision, requirements, timeline, and budget. We'll then provide a proposal outlining our approach and pricing.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true, margin: "-100px" });

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="font-Urbanist bg-gray-50 py-16 md:py-24 px-4 sm:px-8 flex items-center justify-center w-full">
      <div className="w-full max-w-4xl flex flex-col items-center justify-center gap-12">
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
          <SectionTitle subtitle={"Common Questions"} title={"FAQs"} />
        </motion.div>

        {/* FAQ Items */}
        <div className="w-full flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 md:px-8 md:py-6 flex items-center justify-between text-left focus:outline-none group"
              >
                <h3 className="text-lg md:text-xl font-semibold text-black pr-4 group-hover:text-[#9A7B50] transition-colors duration-300">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <svg
                    className="w-6 h-6 text-[#9A7B50]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-8 pb-5 md:pb-6 pt-2">
                      <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;







