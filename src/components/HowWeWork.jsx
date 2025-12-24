import React from "react";
import Header from "./Header/Header";
import image3 from "../assets/images/BEST-INTERIOR-DESIGNS-04-.jpg";
import image7 from "../assets/images/BEST-INTERIOR-DESIGNS-01.jpg";
import image8 from "../assets/images/BEST-INTERIOR-DESIGNS-10-.jpg";
import image10 from "../assets/images/bg1.jpg";
import Footer from "./Footer";

const HowWeWork = () => {
  const worklist = [
    {
      image: image3,
      subTitle: "CATEGORY",
      title: "The Catalyzer",
      content:
        "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat",
      viewCount: 1204,
      commentCount: 6,
    },
    {
      image: image7,
      subTitle: "CATEGORY",
      title: "The 400 Blows",
      content:
        "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat",
      viewCount: 1204,
      commentCount: 6,
    },
    {
      image: image8,
      subTitle: "Shooting Stars",
      title: "The Catalyzer",
      content:
        "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat",
      viewCount: 1204,
      commentCount: 6,
    },
    {
      image: image10,
      subTitle: "CATEGORY",
      title: "The Catalyzer",
      content:
        "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat",
      viewCount: 1204,
      commentCount: 6,
    },
    {
      image: image10,
      subTitle: "CATEGORY",
      title: "The Catalyzer",
      content:
        "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat",
      viewCount: 1204,
      commentCount: 6,
    },
    {
      image: image10,
      subTitle: "CATEGORY",
      title: "The Catalyzer",
      content:
        "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat",
      viewCount: 1204,
      commentCount: 6,
    },
  ];
  return (
    <div className="font-sans text-gray-800">
      {/* Header Section */}
      <Header />

      {/* Services Section */}
      <div className="h-[80svh]  bg-cover bg-[url('assets/images/BEST-INTERIOR-DESIGNS-04-.jpg')]">
        <div className=" h-full w-full bg-black/60 flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32">
          <span className="text-white font-opensan font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center">
            How We Work
          </span>
        </div>
        <div />

        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap -m-4">
              {worklist.map((work) => {
                return (
                  <div class="p-4 md:w-1/3">
                    <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                      <img
                        className="lg:h-48 md:h-36 w-full object-cover object-center"
                        src={work.image}
                        alt=""
                      />
                      <div class="p-6">
                        <h2 class="tracking-widest text-xs title-font font-medium text-gold mb-1">
                          {work.subTitle}
                        </h2>
                        <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                          {work.title}
                        </h1>
                        <p class="leading-relaxed mb-3">{work.content}</p>
                        <div class="flex items-center flex-wrap">
                          <a class="text-gold  inline-flex items-center md:mb-2 lg:mb-0">
                            Learn More
                            <svg
                              class="w-4 h-4 ml-2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path d="M5 12h14"></path>
                              <path d="M12 5l7 7-7 7"></path>
                            </svg>
                          </a>
                          <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                            <svg
                              class="w-4 h-4 mr-1"
                              stroke="currentColor"
                              stroke-width="2"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              viewBox="0 0 24 24"
                            >
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                              <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                            {(work.viewCount / 1000).toFixed(1)}k
                          </span>
                          <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                            <svg
                              class="w-4 h-4 mr-1"
                              stroke="currentColor"
                              stroke-width="2"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              viewBox="0 0 24 24"
                            >
                              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                            </svg>
                            {work.commentCount}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
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

        <div className="bg-black text-white">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
