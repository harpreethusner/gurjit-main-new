import React from "react";
import HeroCarousel from "../components/HeroCarousel";
import Header from "../components/Header/Header";
import MissionPage from "../components/MissionPage";
import VisionPage from "../components/VisionPage";
import OurServices from "../components/OurServices";
import OurGallery from "../components/OurGallery";
import Footer from "../components/Footer";
import Result from "../components/Result";
import WhyChooseUs from "../components/WhyChooseUs";
import FAQs from "../components/FAQs";



const HomePage = () => {
  return (
    <section className=" overflow-x-hidden overflow-y-auto bg-white ">
      <Header />
      <HeroCarousel />
      <MissionPage />
      <VisionPage />
      <OurServices />
      <WhyChooseUs />
      <OurGallery />
      <Result />
      <FAQs />
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
    // <ImageGallery />
  );
};

export default HomePage;
