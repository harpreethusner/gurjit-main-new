import React from "react";
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#1c1c27] text-gray-400 sm:px-10 p-6 py-12 font-Urbanist flex flex-col gap-8">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
        {/* Logo & Description */}
        <div className="flex flex-col col-span-1 sm:col-span-2 lg:col-span-2 gap-6">
          <div className="flex flex-row gap-4 items-center justify-start">
            <img 
              src={logo} 
              alt="Gurjot Shan Designs Logo" 
              className="w-12 h-12 lg:w-16 lg:h-16 object-contain"
            />
            <div className="text-lg lg:text-xl font-bold tracking-wide font-Urbanist text-white">
              Gurjot Shan Designs
            </div>
          </div>
          <div>
            <p className="text-gray-400 leading-relaxed text-sm lg:text-base mb-2">
              Interior Design & Turnkey Execution Studio
            </p>
            <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
              At Gurjot Shan Designs, we specialise in end-to-end interior design and turnkey execution, delivering refined, functional, and timeless spaces. With over 20 years of industry experience, we take complete responsibility — from concept to final handover.
            </p>
            {/* <p className="text-gray-400 leading-relaxed text-sm lg:text-base mt-2">
              Homes. Offices. Commercial environments. Designed thoughtfully. Delivered seamlessly.
            </p> */}
          </div>
        </div>

        {/* Contact Info - Call & Write Combined */}
        <div className="flex flex-col gap-6">
          <h4 className="text-[#bfa377] font-bold text-sm tracking-widest uppercase border-b-2 border-[#bfa377] pb-2">
            CONTACT
          </h4>
          
          {/* Phone */}
          <div className="flex flex-col gap-3 group">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#bfa377]/10 flex items-center justify-center text-[#bfa377] group-hover:bg-[#bfa377]/20 transition-all duration-300">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 uppercase tracking-wide mb-1">Call</span>
                <a 
                  href="tel:+918588810357" 
                  className="text-white hover:text-[#bfa377] transition-colors duration-300 text-sm lg:text-base"
                >
                  +91 8588810357
                </a>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-3 group">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#bfa377]/10 flex items-center justify-center text-[#bfa377] group-hover:bg-[#bfa377]/20 transition-all duration-300">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 uppercase tracking-wide mb-1">Write</span>
                <a 
                  href="mailto:gurjotshandesigns@gmail.com" 
                  className="text-white hover:text-[#bfa377] transition-colors duration-300 text-sm lg:text-base break-all"
                >
                  gurjotshandesigns@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info - Visit */}
        <div className="flex flex-col gap-6">
          <h4 className="text-[#bfa377] font-bold text-sm tracking-widest uppercase border-b-2 border-[#bfa377] pb-2">
            VISIT
          </h4>
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#bfa377]/10 flex items-center justify-center text-[#bfa377] mt-1">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <div className="flex flex-col gap-1 text-sm lg:text-base">
              <p className="text-white font-medium">Gurjot Shan Designs</p>
              <p className="text-gray-400">SCO II, Sector 68,</p>
              <p className="text-gray-400">Sahibzada Ajit Singh Nagar,</p>
              <p className="text-gray-400">Punjab 160062</p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-6">
          <h4 className="text-[#bfa377] font-bold text-sm tracking-widest uppercase border-b-2 border-[#bfa377] pb-2">
            QUICK LINKS
          </h4>
          <div className="flex flex-col gap-3">
            <a
              href="/faq"
              className="text-gray-400 hover:text-[#bfa377] transition-colors duration-300 text-sm lg:text-base flex items-center gap-2 group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#bfa377] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              FAQ
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800/50 pt-8 mt-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center gap-4 text-sm">
          <p className="text-gray-500">© 2025, GurjotInteriorDesign.</p>
          <p className="text-gray-500">All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
