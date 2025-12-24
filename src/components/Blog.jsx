import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { endpoint } from "../Services/endpoint";
import { motion } from "framer-motion";

const apiUrl = import.meta.env.VITE_API_URL;

const Blog = () => {
  const navigate = useNavigate();
  const [newsDetails, setNewsDetails] = useState();

  async function getdetails() {
    const res = await axios.get(apiUrl + endpoint.getNews, {});
    if (res.data) {
      setNewsDetails(res.data.lstNews);
    }
  }

  useEffect(() => {
    getdetails();
  }, []);

  return (
    <div>
      <Header />

      {/* Hero Section with Animated Text */}
      <div className="h-[60vh] md:h-[70vh] lg:h-[80vh] bg-cover bg-center bg-[url('assets/images/BEST-INTERIOR-DESIGNS-10-.jpg')]">
        <div className="h-full w-full bg-black/60 flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32">
          <motion.span
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-Urbanist"
          >
            News
          </motion.span>
        </div>
      </div>

      {/* Blog Cards Section */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
            {newsDetails &&
              newsDetails.map((work, index) => (
                <motion.div
                  key={index}
                  className="p-4"
                  onClick={() => navigate(`/blog/${work.newsID}`)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden flex flex-col gap-4">
                    <img
                      className="lg:h-96 md:h-60 w-full object-contain object-center"
                      src={work.newsImage}
                      alt={work.newsTitle}
                    />
                    <div className="p-4 flex flex-col gap-4">
                      <h2 className="title-font text-2xl font-semibold text-[#9A7B50] font-Urbanist line-clamp-1">
                        {work.newsTitle}
                      </h2>
                      <h1
                        className="tracking-widest text-medium title-font font-medium font-Urbanist text-black text-sm line-clamp-5 mb-1"
                        dangerouslySetInnerHTML={{
                          __html: work.newsDesc,
                        }}
                      ></h1>
                      <p className="leading-relaxed font-Urbanist">
                        {work.newsDateStr}
                      </p>
                      <div className="flex items-center flex-wrap hover:underline cursor-pointer">
                        <a className="text-[#9A7B50] font-Urbanist inline-flex items-center md:mb-2 lg:mb-0">
                          Learn More
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14" />
                            <path d="M12 5l7 7-7 7" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Icon */}
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

      {/* Footer */}
      <div className="bg-black text-white">
        <Footer />
      </div>
    </div>
  );
};

export default Blog;
