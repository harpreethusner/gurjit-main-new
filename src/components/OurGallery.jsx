import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { endpoint } from "../Services/endpoint";
import { SectionTitle } from "./SectionTitle";
const apiUrl = import.meta.env.VITE_API_URL;

const OurGallery = () => {
  const navigate = useNavigate();
  const [categoryList, setCategoryList] = useState([]);

  // const portfolioItems = [
  //   {
  //     type: ["Interior", "Theaters", "Residential"],
  //     title: "FANTASTIC INTERIOR",
  //     category: "Interior Design",
  //     image: image3,
  //     link: "/ourportfolio/portfolio1",
  //   },
  //   {
  //     type: ["Theaters", "Residential"],
  //     title: "CHOOSE YOUR DREAM",
  //     category: "Architecture",
  //     image: image8,
  //     link: "/ourportfolio/portfolio2",
  //   },
  //   {
  //     type: ["Residential"],
  //     title: "LUXURY VILLA",
  //     category: "Architecture",
  //     image: image8,
  //     link: "/ourportfolio/portfolio3",
  //   },
  //   {
  //     type: ["Interior", "Theaters", "Residential"],
  //     title: "CREATIVE SPACES",
  //     category: "Interior Design",
  //     image: image8,
  //     link: "/ourportfolio/portfolio4",
  //   },
  // ];

  const [animation, setAnimation] = useState(0);
  const [clickedIndex, setClickedIndex] = useState(null);
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getCategory() {
    const res = await axios.get(apiUrl + endpoint.getCategory);
    if (res.data) {
      console.log("categorylist", res.data);
      setCategoryList(res.data.data);
    }
  }
  async function getPortfolio() {
    setIsLoading(true);
    const res = await axios.post(apiUrl + endpoint.postportfolio, {
      categoryId: animation,
    });
    if (res.data) {
      console.log("portfoliolist", res.data);
      setPortfolioItems(res.data.lstData);
    }
    setIsLoading(false);
  }
  useEffect(() => {
    getCategory();
  }, []);
  useEffect(() => {
    getPortfolio();
  }, [animation]);

  const displayedItems = useMemo(() => {
    if (!portfolioItems || portfolioItems.length === 0) return [];
    const shuffled = [...portfolioItems].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  }, [portfolioItems]);

  return (
    <div className="bg-[#0f1014] text-white py-14">
      {/* <div className="h-[60vh] md:h-[70vh] lg:h-[80vh] bg-cover bg-center bg-[url('assets/images/BEST-INTERIOR-DESIGNS-10-.jpg')]">
        <div className="h-full w-full bg-black/60 flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32">
          <motion.span
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-Urbanist"
          >
            Our Portfolio
          </motion.span>
        </div>
      </div> */}
      <section className="pb-4 flex w-full flex-col items-center justify-center gap-6">
        <SectionTitle
          subtitle={"Best Works"}
          title={"Our Portfolio"}
          needWhite={"true"}
        />

        {/* Category Buttons */}
        <div className="flex justify-center flex-wrap w-full gap-3 sm:gap-4 text-sm font-medium text-gray-100 border-t border-b border-white/10 py-4 mb-4 px-4">
          <button
            key={"All"}
            onClick={() => setAnimation(0)}
            className={`font-Urbanist rounded-full px-4 py-2 transition-all duration-300 ease-in-out transform border border-transparent 
              ${
                animation === 0
                  ? "text-[#F1C27D] bg-white/10 backdrop-blur-sm shadow-[0_10px_30px_-12px_rgba(0,0,0,0.45)] scale-105"
                  : "hover:text-[#F1C27D] hover:border-white/20"
              }`}
          >
            {"All"}
          </button>
          {categoryList.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setAnimation(cat.id)}
              className={`font-Urbanist rounded-full px-4 py-2 transition-all duration-300 ease-in-out transform border border-transparent 
              ${
                animation === cat.id
                  ? "text-[#F1C27D] bg-white/10 backdrop-blur-sm shadow-[0_10px_30px_-12px_rgba(0,0,0,0.45)] scale-105"
                  : "hover:text-[#F1C27D] hover:border-white/20"
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid md:grid-cols-2 w-full gap-8 mb-12 px-4 sm:px-8"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          <AnimatePresence mode="wait">
            {isLoading && (
              <div className="col-span-2 text-center text-gray-400 py-6">
                Loading highlights...
              </div>
            )}
            {!isLoading &&
              displayedItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? -100 : 100,
                    y: -50,
                  }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  onClick={() => {
                    setClickedIndex(index);
                    navigate("/ourportfolio/" + animation + "id" + item.id);
                  }}
                  className="relative group overflow-hidden rounded-xl border border-white/8 bg-white/5 backdrop-blur-sm shadow-[0_25px_50px_-12px_rgba(0,0,0,0.55)] cursor-pointer"
                >
                  {/* Image */}
                  <div className="overflow-hidden">
                    <img
                      src={item.images[0].fileImage}
                      alt={item.title}
                      className="w-full h-[340px] object-cover transition duration-700 ease-out group-hover:scale-105 group-hover:brightness-90"
                    />
                  </div>

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Floating category */}
                  <div className="absolute top-4 left-4 bg-white/15 text-white text-xs uppercase tracking-[0.15em] px-3 py-1 rounded-full border border-white/20 backdrop-blur-sm">
                    {item.category}
                  </div>

                  {/* Info Section */}
                  <div className="absolute bottom-0 left-0 w-full bg-black/60 backdrop-blur-md p-5">
                    <h3
                      className={`text-xl font-semibold text-white transform transition-all duration-500 ease-in-out ${
                        clickedIndex === index ? "scale-105 text-[#F1C27D]" : ""
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-200 mt-1 line-clamp-2">
                      {item.shortDescription || item.category}
                    </p>
                    <div className="mt-3 inline-flex items-center gap-2 text-[#F1C27D] text-sm font-medium">
                      <span>View details</span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </motion.div>

        {/* WhatsApp Floating Icon */}
        <a
          href="https://wa.me/your-number"
          className="fixed bottom-6 left-6 shadow-lg hover:scale-105 transition-transform duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="w-12 h-12"
          />
        </a>
      </section>
    </div>
  );
};

export default OurGallery;
