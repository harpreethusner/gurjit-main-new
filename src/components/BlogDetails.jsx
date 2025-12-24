import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import { endpoint } from "../Services/endpoint";
import { motion } from "framer-motion";

const apiUrl = import.meta.env.VITE_API_URL;

const BlogDetails = () => {
  const id = useParams();
  const [newsDetails, setNewsDetails] = useState();
  const [currentDetail, setCurrentDetail] = useState();

  async function getdetails() {
    const res = await axios.get(apiUrl + endpoint.getNews, {});
    if (res.data) {
      setNewsDetails(res.data.lstNews);
    }
  }

  useEffect(() => {
    getdetails();
  }, []);

  useEffect(() => {
    if (newsDetails) {
      const news = newsDetails.filter((item) => item.newsID + "" === id.id);
      if (news.length > 0) {
        setCurrentDetail(news[0]);
      }
    }
  }, [newsDetails]);

  return (
    <div>
      <Header />

      {/* Hero Section */}
      <div className="h-[80svh] w-full bg-cover bg-[url('assets/images/bg1.jpg')]">
        <div className="h-full w-full bg-black/60 flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32 font-Urbanist">
          <motion.span
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white font-Urbanist font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center"
          >
            News
          </motion.span>
        </div>
      </div>

      {/* Blog Content */}
      <div className="min-h-screen bg-white py-10 px-5 flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl font-bold text-center mb-2"
        >
          {currentDetail && currentDetail.newsTitle}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-gray-500 text-sm mb-8"
        >
          {currentDetail && currentDetail.newsDateStr}
        </motion.p>

        <div className="min-h-screen bg-white py-10 px-6 md:px-20">
          <div className="max-w-4xl mx-auto flex flex-col gap-6">
            <motion.img
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:h-96 md:h-60 w-full object-contain object-center"
              src={currentDetail && currentDetail.newsImage}
              alt=""
            />
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-gray-600"
              dangerouslySetInnerHTML={{
                __html: currentDetail && currentDetail.newsDesc,
              }}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogDetails;
