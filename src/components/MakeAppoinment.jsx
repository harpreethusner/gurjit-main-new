import React from "react";
import Header from "./Header/Header";
import playstore from "../assets/images/getOnPlayStore.png";
import appstore from "../assets/images/getOnAppStore.png";
import iphone1 from "../assets/images/designs.png";
import arrowImage from "../assets/images/Curved-2.png";
import phoneImage from "../assets/images/image.jpeg";
import Contact from "./Contact";

const MakeAppoinment = () => {
  return (
    <div className="bg-[#9A7B50] relative min-h-screen flex flex-col">
      <Header />

      {/* Section with iphone1 image */}
      <div className="relative top-45 left-0 mt-2 md:mt-40 lg:mt-20 lg:ml-10 lg:absolute lg:left-40 lg:top-60 xl:left-60 xl:top-60 min-h-[300px] md:min-h-[500px] flex justify-center">
        <div className="relative flex items-center  justify-center md:mb-0 h-[250px] w-[250px] lg:h-[50px] lg:w-[100px] xl:h-[200px] xl:w-[200px]">
          <img
            src={iphone1}
            alt="Phone 2"
            className="lg:scale-[6.3] xl:scale-[4.3]"
          />
        </div>
      </div>

      {/* Heading Section */}
      <div className="flex flex-col md:flex-row items-end justify-end bg-[#9A7B50] h-full min-h-[50svh] font-Urbanist text-center md:text-left">
        <div className="text-white flex flex-col justify-center items-center md:items-end w-full px-4 lg:px-0">
          <h1 className="text-3xl sm:text-xl md:text-4xl xl:text-6xl font-semibold w-full lg:w-1/2  mb-32 lg:mb-6">
            Your Dream Space. Starts Here – Book a Visit or Appointment
          </h1>
        </div>
      </div>

      {/* App Store & Play Store Buttons */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-end bg-white h-full w-full min-h-[20svh] font-Urbanist text-center md:text-left">
        <div className="w-full lg:w-1/2  pt-24 lg:pt-0 pb-42 gap-14 lg:px-0 flex flex-col items-center md:items-start">
          {/* Heading and Images grouped in a relative box for alignment */}
          <div className="w-full flex flex-col items-center lg:items-start">
            {/* Text */}
            <div className="text-black text-3xl sm:text-4xl md:text-5xl xl:text-7xl text-center md:text-left">
              <span className="mr-6">Let's</span>
              <span className="text-[#9A7B50] font-bold">Connect</span>
            </div>

            {/* App Store & Play Store buttons */}
            <div className="flex gap-8 lg:gap-20 items-center justify-center md:justify-start mt-6 lg:mb-0">
              <img
                src={appstore}
                alt="App Store"
                className="w-32 h-10 sm:w-40 sm:h-12 md:h-18 lg:w-52 lg:h-22 xl:w-62 xl:h-20 cursor-pointer"
              />
              <img
                src={playstore}
                alt="Google Play"
                className="w-32 h-10 sm:w-40 sm:h-12 md:h-18 lg:w-52 lg:h-22 xl:w-62 xl:h-20 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-[#9A7B50] font-Urbanist py-10 px-8 md:px-20 text-center">
        <p className="text-white mx-auto text-base md:text-xl">
          Elevate your space with our expert interior design services. Whether
          you prefer a scheduled appointment or an on-site consultation, we
          bring precision and creativity to every step of the design journey.
          Book your service today and experience design excellence tailored to
          you,Book a one-on-one appointment or let us visit your space to
          explore its full potential. <br />
          <br />
          We’re here to turn your ideas into a beautifully designed reality. Get
          started with just a click — your dream space awaits!
        </p>
      </div>

      {/* Section with phoneImage */}
      <section className="relative bg-white py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <div className="relative mx-auto w-[300px] md:w-[350px] flex flex-col gap-6">
            {/* Left text block */}
            <div className="relative lg:absolute lg:top-1/4 lg:-left-72 lg:w-36 text-left">
              <p className="font-bold font-Urbanist">Appoinment</p>
              <p className="text-sm">
                Let's Connect for your vission becoming as we execute the Design
                plan with precision. Celebrate the joy of your newly transformed
                space.
              </p>
              <img
                src={arrowImage}
                alt="Arrow"
                className="hidden lg:flex lg:absolute -right-10 top-24 w-12 transform rotate-[30deg]"
              />
            </div>
            <img src={phoneImage} alt="Phone" className="mx-auto" />

            {/* Right text block */}
            <div className="relative lg:absolute lg:top-1/4 lg:-right-72 lg:w-36 text-right">
              <p className="font-bold">Book Site Visit</p>
              <p className="text-sm">
                Let's Connect for your vission becoming as we execute the Design
                plan with precision. Celebrate the joy of your newly transformed
                space.
              </p>
              <img
                src={arrowImage}
                alt="Arrow"
                className="hidden lg:flex lg:absolute right-50 top-24 w-12 rotate-[150deg]"
              />
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default MakeAppoinment;
