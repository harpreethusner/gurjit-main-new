import React from "react";
import HeroCarousel from "../components/HeroCarousel";
import Header from "../components/Header/Header";
import MissionPage from "../components/MissionPage";
import VisionPage from "../components/VisionPage";
import VideoSection from "../components/VideoSection";
import OurServices from "../components/OurServices";
import OurGallery from "../components/OurGallery";
import Footer from "../components/Footer";
import Result from "../components/Result";
import WhyChooseUs from "../components/WhyChooseUs";
import WhyChoose from "../components/WhyChoose";

const HomePage = () => {
  return (
    <section className="overflow-x-hidden overflow-y-auto bg-white">
      <Header />
      <HeroCarousel />
      <MissionPage />
      <VisionPage />
      <VideoSection />
      <OurServices />
      <WhyChooseUs />
      <OurGallery />
      <WhyChoose />
      <Result />
      {/* <OurTeam /> */}
      {/* <Contact /> */}
      <Footer />
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
    </section>
  );
};

export default HomePage;

