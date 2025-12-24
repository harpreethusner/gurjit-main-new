import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer";
import ProjectCardSection from "./ProjectCardSection";

const Projects = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Header Section */}
      <Header />

      {/* Services Section */}
      {/* <div className="h-[80svh]  bg-cover bg-[url('assets/images/image4.png')]">
        <div className=" min-h-[80svh] bg-[#000000a6] ">
          <div className="!flex flex-col items-center justify-center h-full w-full p-80">
            <span className=" text-left text-white font-regular font-opensan md:text-6xl text-3xl ">
              Projects
            </span>
          </div>
        </div>
      </div> */}
      <div className="h-[60vh] md:h-[70vh] lg:h-[80vh] bg-cover bg-center bg-[url('assets/images/bg1.jpg')]">
        <div className="h-full w-full bg-black/60 flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32">
          <span className="text-white font-opensan font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center">
            Projects
          </span>
        </div>
      </div>
      <div>
        <ProjectCardSection />
      </div>

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

      {/* Chat Widget */}

      <div className="bg-black text-white">
        <Footer />
      </div>
    </div>
  );
};

export default Projects;
