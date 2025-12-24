import React, { useEffect, useState } from "react";
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
  const id = useParams();

  const [showGallery, setShowGallery] = useState(false);

  async function getPortfolio() {
    const res = await axios.post(apiUrl + endpoint.postportfolio, {
      categoryId: id.id.split("id")[0],
    });
    if (res.data) {
      console.log("portfolio get item", res.data);
      setPortfolioItems(res.data.lstData);
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

  return (
    <div className="bg-[#0c0d11] text-white">
      <Header />
      <div className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] bg-cover bg-center bg-[url('assets/images/BEST-INTERIOR-DESIGNS-10-.jpg')]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#0c0d11]" />
        <div className="relative h-full w-full flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32">
          <div className="text-center space-y-4">
            <p className="uppercase tracking-[0.25em] text-[#F1C27D] text-xs sm:text-sm">
              Featured Project
            </p>
            <span className="text-white font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-Urbanist drop-shadow-xl">
              {portfolioDetails && portfolioDetails.title}
            </span>
            <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-200">
              <span className="px-4 py-1 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm">
                {portfolioDetails && portfolioDetails.category}
              </span>
              {portfolioDetails?.shortDescription && (
                <span className="px-4 py-1 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm">
                  {portfolioDetails.shortDescription}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="px-6 lg:px-20 py-16">
          <div className="max-w-6xl mx-auto flex flex-col gap-10">
            {/* Section Title & Description */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.55)] backdrop-blur">
              <div className="flex items-center justify-between gap-4 flex-wrap mb-4">
                <h2 className="text-3xl font-semibold text-white">Introduction</h2>
                <div className="h-px flex-1 bg-gradient-to-r from-[#F1C27D] via-white/20 to-transparent" />
              </div>
              <p
                className="text-gray-200 leading-relaxed w-full flex flex-col gap-3"
                dangerouslySetInnerHTML={{
                  __html: portfolioDetails && portfolioDetails.longDescription,
                }}
              ></p>
            </div>

            {/* Project Meta Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <p className="text-xs font-bold tracking-[0.22em] uppercase text-[#F1C27D]">
                  Categories
                </p>
                <p className="text-gray-100 mt-2">
                  {portfolioDetails && portfolioDetails.category}
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <p className="text-xs font-bold tracking-[0.22em] uppercase text-[#F1C27D]">
                  Tags
                </p>
                <p className="text-gray-100 mt-2">
                  {portfolioDetails && portfolioDetails.shortDescription}
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-2">
                <p className="text-xs font-bold tracking-[0.22em] uppercase text-[#F1C27D]">
                  Highlights
                </p>
                <p className="text-gray-100">
                  Bespoke interiors, thoughtful lighting and tactile materials curated for a calm, elevated living experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-4 items-center justfy-center p-4 lg:px-16">
        {portfolioDetails &&
          portfolioDetails.images.map((img, idx) => {
            if (img.fileType === "Image") {
              return (
                <img
                  key={idx}
                  src={img.fileImage}
                  alt={`Gallery ${idx}`}
                  className="mb-4 rounded-xl hover:scale-105 transition-transform duration-500 shadow-[0_20px_45px_-18px_rgba(0,0,0,0.6)] h-[420px] w-full object-center object-cover border border-white/10"
                  onClick={() => {
                    setShowGallery(true);
                  }}
                />
              );
            } else {
              return <></>;
            }
          })}
      </div>
      <ImageGalleryDialogue
        isModalOpen={showGallery}
        setIsModalOpen={setShowGallery}
        images={imagesList}
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
