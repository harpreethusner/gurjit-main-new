import React from "react";
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#1c1c27] text-gray-400 sm:px-10 p-6 py-10 font-Urbanist flex flex-col gap-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Logo & Social */}
        <div className="flex flex-col col-span-2 gap-4">
          <div className="flex flex-row gap-4 items-center justify-start">
            <img src={logo} alt="" lg:width={55} width={30} />
            <div className="lg:text-base text-base gap-2 font-semibold tracking-wide font-Urbanist text-white">
              Gurjot Shan Designs
            </div>
          </div>
          <div>
            <p>
              Our team takes over everything, from an idea and concept
              development to realization.
            </p>
          </div>
        </div>

        {/* Contact Info - Call */}
        <div className="flex flex-col gap-4">
          <h4 className="text-[#bfa377] font-semibold tracking-widest border-b border-[#bfa37755]">
            CALL
          </h4>
          <p>+91 8588810357</p>
          {/* <p>+1 (000) 987 654 321</p> */}
        </div>

        {/* Contact Info - Write */}
        <div className="flex flex-col gap-4">
          <h4 className="text-[#bfa377] font-semibold tracking-widest border-b border-[#bfa37755]">
            WRITE
          </h4>
          <p>gurjotshandesigns@gmail.com</p>
          {/* <p>Username@website.com</p> */}
        </div>

        {/* Contact Info - Visit */}
        <div className="flex flex-col gap-4">
          <h4 className="text-[#bfa377] font-semibold tracking-widest border-b border-[#bfa37755]">
            VISIT
          </h4>
          <div className="flex flex-col gap-1">
            <p>Gurjot Shan Designs</p>
            <p>SCO II,Sector 68,Sahibzada Ajit</p>
            <p>Singh Nagar,Punjab 160062</p>
          </div>
        </div>

        {/* App Download - Wrap on smaller screens */}
        {/* <div className="sm:col-span-2 lg:col-span-5 flex flex-wrap justify-center gap-4 mt-10">
          <img src={appstore} alt="App Store" className="h-12 sm:h-14" />
          <img src={playstore} alt="Play Store" className="h-12 sm:h-14" />
        </div> */}
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-center text-sm gap-4">
        <p className="text-gray-500">© 2025, GurjotInteriorDesign.</p>
        <p className="text-gray-500">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
