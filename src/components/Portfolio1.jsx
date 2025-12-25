import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Maximize2, Calendar, Tag, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import { endpoint } from "../Services/endpoint";
import ImageGalleryDialogue from "./ImageGallery";
const apiUrl = import.meta.env.VITE_API_URL;

const Portfolio1 = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [portfolioDetails, setPortfolioDetails] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const id = useParams();
  const navigate = useNavigate();

  const [showGallery, setShowGallery] = useState(false);

  async function getPortfolio() {
    try {
      setIsLoading(true);
      const res = await axios.post(apiUrl + endpoint.postportfolio, {
        categoryId: id.id.split("id")[0],
      });
      if (res.data) {
        console.log("portfolio get item", res.data);
        setPortfolioItems(res.data.lstData);
      }
    } catch (error) {
      console.error("Error fetching portfolio:", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getPortfolio();
  }, [id]);

  useEffect(() => {
    const pos = portfolioItems.findIndex((item) => {
      return item.id === +id.id.split("id")[1];
    });
    if (pos !== -1) {
      setPortfolioDetails(portfolioItems[pos]);
      console.log("singleportfolio", portfolioItems[pos]);
    }
  }, [portfolioItems, id]);

  const [imagesList, setImagesList] = useState([]);

  useEffect(() => {
    const tempImage = [];
    if (portfolioDetails && portfolioDetails.images.length > 0) {
      portfolioDetails.images.forEach((img) => {
        tempImage.push({
          original: img.fileImage,
          thumbnail: img.fileImage,
          thumbnailHeight: 100,
          originalHeight: 500,
        });
      });
    }
    setImagesList(tempImage);
  }, [portfolioDetails]);

  const heroImage = portfolioDetails?.images?.[0]?.fileImage || 'assets/images/BEST-INTERIOR-DESIGNS-10-.jpg';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  if (isLoading) {
    return (
      <div className="bg-[#0c0d11] text-white min-h-screen">
        <Header />
        <div className="flex items-center justify-center h-[80vh]">
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-16 h-16">
              <div className="absolute top-0 left-0 w-full h-full border-4 border-[#F1C27D] border-t-transparent rounded-full animate-spin"></div>
            </div>
            <p className="text-white font-Urbanist text-lg">Loading portfolio...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0c0d11] text-white">
      <Header />
      
      {/* Hero Banner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[60vh] md:h-[70vh] lg:h-[85vh] bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-[#0c0d11]" />
        
        {/* Back Button */}
        <motion.button
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 z-20 flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-Urbanist text-sm">Back</span>
        </motion.button>

        <div className="relative h-full w-full flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-center space-y-6 max-w-4xl"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="uppercase tracking-[0.25em] text-[#F1C27D] text-xs sm:text-sm font-Urbanist"
            >
              Featured Project
            </motion.p>
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center font-Urbanist drop-shadow-2xl leading-tight"
            >
              {portfolioDetails?.title || "Portfolio Project"}
            </motion.h1>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center gap-3 text-sm"
            >
              {portfolioDetails?.category && (
                <span className="px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/20 transition-all duration-300 font-Urbanist">
                  {portfolioDetails.category}
                </span>
              )}
              {portfolioDetails?.shortDescription && (
                <span className="px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/20 transition-all duration-300 font-Urbanist">
                  {portfolioDetails.shortDescription}
                </span>
              )}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      {/* Content Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="px-6 lg:px-20 py-16"
      >
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          {/* Section Title & Description */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8 md:p-10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.55)] backdrop-blur-sm hover:border-white/20 transition-all duration-300"
          >
            <div className="flex items-center justify-between gap-4 flex-wrap mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white font-Urbanist">Project Overview</h2>
              <div className="h-px flex-1 bg-gradient-to-r from-[#F1C27D] via-white/20 to-transparent" />
            </div>
            {portfolioDetails?.longDescription && (
              <div
                className="text-gray-200 leading-relaxed font-Urbanist prose prose-invert prose-lg max-w-none"
                dangerouslySetInnerHTML={{
                  __html: portfolioDetails.longDescription,
                }}
              />
            )}
          </motion.div>

          {/* Project Meta Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <motion.div
              variants={itemVariants}
              className="group bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-[#F1C27D]/50 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#F1C27D]/20 flex items-center justify-center group-hover:bg-[#F1C27D]/30 transition-colors">
                  <Tag className="w-5 h-5 text-[#F1C27D]" />
                </div>
                <p className="text-xs font-bold tracking-[0.22em] uppercase text-[#F1C27D] font-Urbanist">
                  Category
                </p>
              </div>
              <p className="text-gray-100 font-Urbanist text-lg">
                {portfolioDetails?.category || "N/A"}
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="group bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-[#F1C27D]/50 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#F1C27D]/20 flex items-center justify-center group-hover:bg-[#F1C27D]/30 transition-colors">
                  <Calendar className="w-5 h-5 text-[#F1C27D]" />
                </div>
                <p className="text-xs font-bold tracking-[0.22em] uppercase text-[#F1C27D] font-Urbanist">
                  Tags
                </p>
              </div>
              <p className="text-gray-100 font-Urbanist text-lg">
                {portfolioDetails?.shortDescription || "N/A"}
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="group bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-[#F1C27D]/50 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#F1C27D]/20 flex items-center justify-center group-hover:bg-[#F1C27D]/30 transition-colors">
                  <Sparkles className="w-5 h-5 text-[#F1C27D]" />
                </div>
                <p className="text-xs font-bold tracking-[0.22em] uppercase text-[#F1C27D] font-Urbanist">
                  Highlights
                </p>
              </div>
              <p className="text-gray-100 font-Urbanist leading-relaxed">
                Bespoke interiors, thoughtful lighting and tactile materials curated for a calm, elevated living experience.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
      {/* Image Gallery Section */}
      {portfolioDetails?.images && portfolioDetails.images.length > 0 && (
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="px-4 lg:px-16 py-8"
        >
          <div className="max-w-7xl mx-auto mb-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center justify-between mb-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white font-Urbanist">Project Gallery</h2>
              <button
                onClick={() => {
                  setSelectedImageIndex(0);
                  setShowGallery(true);
                }}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300 font-Urbanist text-sm"
              >
                <Maximize2 className="w-4 h-4" />
                View All
              </button>
            </motion.div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
          >
            <AnimatePresence>
              {portfolioDetails.images
                .filter((img) => img.fileType === "Image")
                .map((img, idx) => {
                  return (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="group relative overflow-hidden rounded-2xl cursor-pointer"
                      onClick={() => {
                        // Find the index in the filtered imagesList
                        const imageListIndex = imagesList.findIndex(
                          (listImg) => listImg.original === img.fileImage
                        );
                        setSelectedImageIndex(imageListIndex >= 0 ? imageListIndex : 0);
                        setShowGallery(true);
                      }}
                    >
                    <div className="relative h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden">
                      <img
                        src={img.fileImage}
                        alt={`Gallery ${idx + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                          <Maximize2 className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <p className="text-white font-Urbanist text-sm bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full inline-block">
                          Image {idx + 1}
                        </p>
                      </div>
                    </div>
                    <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 rounded-2xl transition-all duration-300" />
                  </motion.div>
                  );
                })}
            </AnimatePresence>
          </motion.div>
        </motion.section>
      )}
      <ImageGalleryDialogue
        isModalOpen={showGallery}
        setIsModalOpen={setShowGallery}
        images={imagesList}
        startIndex={selectedImageIndex}
      />
      {/* <div className="relative flex flex-col justify-center items-center text-center bg-[url('assets/images/1.jpg')] bg-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0d11]/60 via-[#0c0d11]/50 to-[#0c0d11]" />
        <div className="relative w-full h-full min-h-[45svh] flex flex-col items-center justify-center gap-6 py-16">
          <p className="text-sm tracking-[0.3em] text-[#F1C27D] font-Urbanist uppercase">
            Next Project
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-Urbanist font-bold leading-tight drop-shadow-lg">
            <span className="text-white">Luxury </span>
            <span className="text-white/80">Furniture</span>
          </h1>
          <button
            className="mt-4 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white hover:text-[#0c0d11] hover:bg-[#F1C27D] transition duration-300 shadow-lg"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Back to top
          </button>
        </div>
      </div> */}
      <div className="mt-4">
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio1;
