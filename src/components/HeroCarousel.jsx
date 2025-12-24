import { Carousel, Modal } from "antd";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import axios from "axios";
import { endpoint } from "../Services/endpoint";
const apiUrl = import.meta.env.VITE_API_URL;

const textFromTop = {
  hidden: { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1, delay: 0.8 } },
};

const buttonFromLeft = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1, delay: 1.0 } },
};

export default function HeroCarousel() {
  const carouselRef = useRef();
  const [activeSlide, setActiveSlide] = useState(0);
  const [highlightedCarousel, setHighlightedCarousel] = useState([]);
  const navigate = useNavigate();
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    draggable: true,
    dots: false,
    beforeChange: (_, next) => setActiveSlide(next),
  };
  // const [isModalOpen, setIsModalOpen] = useState(true);

  // const handleOk = () => {
  //   setIsModalOpen(false);
  // };
  // const handleCancel = () => {
  //   setIsModalOpen(false);
  // };

  async function getHighlighted() {
    const res = await axios.post(apiUrl + endpoint.postportfolio, {
      categoryId: "0",
    });
    if (res.data?.lstData) {
      const highlighted = res.data.lstData.filter((item) => {
        if (item.isHighLighted === true) {
          return item;
        }
      });
      const Highlated = highlighted.map((item) => {
        const imageCarousel = {
          bg: "",
          heading: "",
          title: "",
          subtitle: "",
          ...item,
        };
        console.log(imageCarousel);
        return imageCarousel;
      });
      setHighlightedCarousel(Highlated);

      const tempCarousel = [];
      // highlighted.forEach((item) => {
      //   const currentItem = {
      //     bg: "",
      //     heading: "",
      //     title: "",
      //     subtitle: "",
      //   };
      // });
      console.log("Original Array", res.data.lstData);
      console.log("highlighted data:", highlighted);
      console.log("Highlated", Highlated);

      // setHighlightedCarousel(highlighted);
    }
  }

  // [

  //   {
  //     bg: "assets/images/BEST-INTERIOR-DESIGNS-01.jpg",
  //     heading: "INNOVATIVE",
  //     title: "Story-Driven Design",
  //     subtitle:
  //       "Right design and right ideas matter a lot of in interior design",
  //   },
  //   {
  //     bg: "assets/images/BEST-INTERIOR-DESIGNS-04-.jpg",
  //     heading: "INNOVATIVE",
  //     title: "Story-Driven Design",
  //     subtitle:
  //       "Right design and right ideas matter a lot of in interior design",
  //   },
  //   {
  //     bg: "assets/images/BEST-INTERIOR-DESIGNS-10-.jpg",
  //     heading: "CLASSIC",
  //     title: "Story-Driven Design",
  //     subtitle:
  //       "Right design and right ideas matter a lot of in interior design",
  //   },
  //   {
  //     bg: "assets/images/image4.png",
  //     heading: "ELEGANT &",
  //     title: "Story-Driven Design",
  //     subtitle:
  //       "Right design and right ideas matter a lot of in interior design",
  //   },
  // ]

  useEffect(() => {
    getHighlighted();
  }, []);
  return (
    <section className="relative bg-[#000000a6]">
      <Carousel ref={carouselRef} {...settings}>
        {highlightedCarousel.length > 0 &&
          highlightedCarousel.map((item, index) => (
            <div className="h-screen w-screen">
              <img
                src={item.images[0].fileImage}
                className="h-screen w-screen object-cover object-center -z-10 absolute"
              />
              <div className="!flex flex-col items-center justify-center h-full w-full bg-[#000000a6] gap-6 py-24 px-6 z-50">
                <AnimatePresence mode="wait">
                  {activeSlide === index && (
                    <>
                      <motion.div
                        key={`text-${index}`}
                        variants={textFromTop}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="md:w-3/4 w-9/10 flex flex-col gap-4"
                      >
                        <h1 className="text-left text-[#9A7B50] font-bold font-Urbanist md:text-lg lg:text-xl text-base">
                          {item.category}
                        </h1>
                        <h1 className="text-left text-white font-bold font-Urbanist md:text-5xl lg:text-6xl text-3xl">
                          {item.title}
                        </h1>
                        <h3 className="text-left text-white font-regular font-opensan text-base md:text-lg lg:text-xl lg:w-1/3">
                          {item.shortDescription}
                        </h3>
                      </motion.div>

                      <motion.div
                        key={`button-${index}`}
                        variants={buttonFromLeft}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="md:w-3/4 w-9/10"
                      >
                        <button
                          className="self-start px-2 py-2 md:px-4 md:py-4 text-xs md:text-lg font-semibold text-white outline-1 outline-[#9A7B50] rounded-md hover:bg-[#9A7B50] font-Urbanist hover:text-white"
                          onClick={() => navigate("/contactus")}
                        >
                          Make An Appoinment
                        </button>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
      </Carousel>
      <div className="absolute bottom-10 right-10 flex flex-col gap-4 z-50">
        <button
          onClick={() => carouselRef.current?.next()}
          className="w-12 h-12 text-white border border-white rounded-md flex items-center justify-center hover:bg-[#9A7B50] hover:border-[#9A7B50]"
        >
          <ChevronRight />
        </button>
        <button
          onClick={() => carouselRef.current?.prev()}
          className="w-12 h-12 text-white border border-white rounded-md flex items-center justify-center hover:bg-[#9A7B50] hover:border-[#9A7B50]"
        >
          <ChevronLeft />
        </button>
      </div>
    </section>
  );
}
