import { useState } from "react";
import logo from "../../assets/images/logo.png";
import HeaderPopover from "./HeaderPopover";

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header
      className={`w-screen fixed top-0 z-50 px-6 md:px-12 py-4 flex items-center justify-between bg-black/70 text-white transition-all duration-300`}
    >
      {/* Logo */}
      <div
        className="flex flex-row gap-4 items-center justify-center cursor-pointer"
        onClick={() => (window.location.href = "/")}
      >
        <img src={logo} alt="Logo" className="cursor-pointer" width={30} />
        <div className="lg:text-xl text-base gap-2 font-semibold tracking-wide font-Urbanist">
          Gurjot Shan Designs
        </div>
      </div>

      {/* Navigation */}
      <nav className="hidden lg:flex space-x-8 text-sm font-medium gap-8">
        <a
          href="/"
          className="font-Urbanist text-base text-white transition-colors duration-300"
        >
          Home
        </a>
        <a
          href="/aboutus"
          className="font-Urbanist text-base text-white transition-colors duration-300"
        >
          About
        </a>
        <a
          href="/landing"
          className="font-Urbanist text-base text-white transition-colors duration-300"
        >
         Consultation
        </a>
        <div
          className="relative"
          onMouseEnter={() => setServicesOpen(true)}
          onMouseLeave={() => setServicesOpen(false)}
        >
          <button
            type="button"
            className="font-Urbanist text-base text-white transition-colors duration-300 flex items-center gap-1.5 group"
            onClick={() => setServicesOpen((prev) => !prev)}
          >
            Services
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${
                servicesOpen ? "rotate-180" : "rotate-0"
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
          <div
            className={`absolute left-0 top-full bg-white text-gray-900 rounded-md shadow-lg min-w-[230px] py-2 transition-opacity duration-150 ${
              servicesOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <a
              href="/services"
              className="block px-4 py-2 hover:bg-gray-100 text-sm font-semibold"
            >
              All Services
            </a>
            <a
              href="/services#interior-design"
              className="block px-4 py-2 hover:bg-gray-100 text-sm"
            >
              Interior Design
            </a>
            <a
              href="/services#turnkey"
              className="block px-4 py-2 hover:bg-gray-100 text-sm"
            >
              Turnkey Interior Execution
            </a>
            <a
              href="/services#residential"
              className="block px-4 py-2 hover:bg-gray-100 text-sm"
            >
              Residential Interiors
            </a>
            <a
              href="/services#commercial"
              className="block px-4 py-2 hover:bg-gray-100 text-sm"
            >
              Commercial & Office Interiors
            </a>
          </div>
        </div>
        <a
          href="/ourportfolio"
          className="font-Urbanist text-base text-white transition-colors duration-300"
        >
          Portfolio
        </a>
        {/* <a
          href="/blog"
          className="font-Urbanist text-base text-white transition-colors duration-300"
        >
          News
        </a> */}
        <a
          href="/contactus"
          className="font-Urbanist text-base text-white transition-colors duration-300"
        >
          Contact
        </a>
      </nav>

      {/* Socials + Search */}
      <HeaderPopover />
      <div className="lg:flex hidden"></div>
    </header>
  );
}
