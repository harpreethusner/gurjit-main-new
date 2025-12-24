import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import image10 from "../assets/images/image10.jpg";
import OurServices from "./OurServices";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import axios from "axios";
import { endpoint } from "../Services/endpoint";
import { useNavigate } from "react-router-dom";

const apiUrl = import.meta.env.VITE_API_URL;

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

const textFromLeft = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1 },
  },
};

const textFromRight = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1 },
  },
};

const textFromTop = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1 },
  },
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [reviewDetails, setReviewDetails] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 3;

  const getdetails = async () => {
    try {
      const res = await axios.get(apiUrl + endpoint.getReview);
      if (res.data) {
        setReviewDetails(res.data.data);
      }
    } catch (error) {
      console.error("Failed to fetch review details", error);
    }
  };

  useEffect(() => {
    getdetails();
  }, []);

  const nextCards = () => {
    if (currentIndex + cardsPerPage < reviewDetails.length) {
      setCurrentIndex(currentIndex + cardsPerPage);
    }
  };

  const prevCards = () => {
    if (currentIndex - cardsPerPage >= 0) {
      setCurrentIndex(currentIndex - cardsPerPage);
    }
  };
  const navigate = useNavigate();

  return (
    <div
      ref={ref}
      className="flex flex-grow flex-col items-center justify-center"
    >
      {/* Hero Section */}
      <div className="h-[80svh] w-full bg-cover bg-[url('assets/images/bg1.jpg')]">
        <div className="h-full w-full bg-black/60 flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32">
          <motion.span
            variants={textFromTop}
            initial="hidden"
            animate="visible"
            className="text-white font-Urbanist font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center"
          >
            About Us
          </motion.span>
        </div>
      </div>

      {/* About Section */}
      <section className="bg-white py-16 md:py-24 px-4 sm:px-8 flex flex-col items-center justify-center w-full">
        <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-center gap-12 md:gap-20">
          {/* Left Card */}
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

          {/* Right Text */}
          <motion.div
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="w-full max-w-2xl flex flex-col gap-4"
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
              {/* <div className="flex flex-col gap-2 mt-2">
                <h3 className="text-lg md:text-2xl font-semibold font-Urbanist text-black">
                  Who We Are
                </h3>
                <ul className="list-disc list-inside text-base text-gray-700 font-Urbanist space-y-1">
                  <li>20+ years of professional experience</li>
                  <li>Residential &amp; commercial interior specialists</li>
                  <li>Turnkey execution experts</li>
                  <li>Based in Chandigarh / Mohali, working across India</li>
                </ul>
                <p className="text-base text-gray-600 font-Urbanist leading-relaxed ">
                  We work with a limited number of projects at a time to ensure
                  focus, detailing, and accountability.
                </p>
              </div> */}
              <button
                className="self-start px-4 gap-2 py-4 md:px-4 md:py-4 text-xs md:text-lg font-semibold text-black outline-1 outline-[#9A7B50] rounded-md hover:bg-[#9A7B50] font-Urbanist hover:text-white"
                onClick={() => navigate("/MakeAppoinment")}
              >
                Let's Connect
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid w-full max-w-7xl grid-cols-1 md:grid-cols-2 items-center gap-8 p-4 md:p-10 mx-auto"
      >
        <motion.div
          variants={textFromLeft}
          className="relative flex justify-center w-full"
        >
          <img
            src={image10}
            alt="Interior Design"
            className="transform transition-all duration-500 ease-in-out hover:scale-110 border-4 md:border-8 border-amber-50 h-60 sm:h-72 md:h-80 w-auto rounded-lg shadow-lg z-10"
          />
        </motion.div>
        <motion.div
          variants={textFromRight}
          className="flex flex-col items-center md:items-start text-center md:text-left gap-4 px-4"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#9A7B50] font-Urbanist">
            Who We Are
          </h1>
          <ul className="text-sm sm:text-base md:text-lg text-gray-900 font-Urbanist space-y-2 text-left">
            <li>20+ years of professional experience</li>
            <li>Residential &amp; commercial interior specialists</li>
            <li>Turnkey execution experts</li>
            <li>Based in Chandigarh / Mohali, working across India</li>
            <li>
              We work with a limited number of projects at a time to ensure
              focus, detailing, and accountability.
            </li>
          </ul>
        </motion.div>
      </motion.div>

      {/* Services */}
      <OurServices />

      {/* Testimonials */}
      <section className="flex flex-col gap-3 items-center justify-center py-10 w-full">
        <span className="sm:text-4xl text-3xl font-bold font-Urbanist title-font text-[#9A7B50]">
          Testimonial
        </span>
        <section className="text-gray-600 body-font w-full lg:px-10 flex-grow flex flex-row gap-3 items-center">
          <button
            onClick={prevCards}
            disabled={currentIndex === 0}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 disabled:opacity-50 h-fit"
          >
            <ChevronLeft />
          </button>
          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-10 flex-grow"
          >
            {reviewDetails
              .slice(currentIndex, currentIndex + cardsPerPage)
              .map((img, idx) => (
                <motion.div
                  key={idx}
                  variants={textFromLeft}
                  className="bg-white rounded-2xl p-6 shadow-2xl text-left flex flex-col justify-start w-full transition-all hover:shadow-3xl"
                >
                  <div className="flex flex-col items-start w-full ">
                    <div className="flex flex-row items-center gap-4 mb-4 w-full justify-start">
                      <img
                        src={img.imageUrl}
                        alt={img.fullName}
                        className="w-16 h-16 object-cover rounded-full border-2 border-gray-200"
                      />
                      <div className="flex flex-row justify-end gap-1 text-yellow-400">
                        {Array.from({ length: img.rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm font-Urbanist text-gray-700">
                      {img.reviewsText}
                    </p>
                  </div>
                  <div className="mt-6">
                    <h2 className="text-gray-900 font-semibold text-base">
                      {img.fullName}
                    </h2>
                    <p className="text-gray-500 text-sm">{img.userName}</p>
                  </div>
                </motion.div>
              ))}
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:hidden grid grid-cols-1 gap-10 flex-grow"
          >
            {reviewDetails
              .slice(currentIndex, currentIndex + 1)
              .map((img, idx) => (
                <motion.div
                  key={idx}
                  variants={textFromLeft}
                  className="bg-white rounded-2xl p-6 shadow-2xl text-left flex flex-col justify-between w-full transition-all hover:shadow-3xl"
                >
                  <div className="flex flex-col items-start w-full ">
                    <div className="flex flex-row items-center gap-4 mb-4 w-full justify-start">
                      <img
                        src={img.imageUrl}
                        alt={img.fullName}
                        className="w-16 h-16 object-cover rounded-full border-2 border-gray-200"
                      />
                      <div className="flex flex-row justify-end gap-1 text-yellow-400">
                        {Array.from({ length: img.rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm font-Urbanist text-gray-700">
                      {img.reviewsText}
                    </p>
                  </div>
                  <div className="mt-6">
                    <h2 className="text-gray-900 font-semibold text-base">
                      {img.fullName}
                    </h2>
                    <p className="text-gray-500 text-sm">{img.userName}</p>
                  </div>
                </motion.div>
              ))}
          </motion.div>
          <button
            onClick={nextCards}
            disabled={currentIndex + cardsPerPage >= reviewDetails.length}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 disabled:opacity-50 h-fit"
          >
            <ChevronRight />
          </button>
        </section>
      </section>

      {/* WhatsApp Floating Icon */}
      <a
        href="https://wa.me/your-number"
        className="fixed bottom-6 left-6"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-12 h-12"
        />
      </a>
    </div>
  );
};

export default AboutUs;
