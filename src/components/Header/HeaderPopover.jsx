import React, { useState } from "react";
import Hamburger from "hamburger-react";
import { Drawer } from "antd";
import { X } from "lucide-react";

const HeaderPopover = () => {
  const [isOpen, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  return (
    <div className="flex lg:hidden ">
      <div className="flex items-center space-x-4">
        <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
      </div>
      <Drawer
        style={{ backgroundColor: "black" }}
        closeIcon={<X color="white" />}
        open={isOpen}
        onClose={() => {
          setOpen(false);
          setServicesOpen(false);
        }}
      >
        <div className="text-white lg:hidden">
          <nav className="flex flex-col gap-1 text-sm  !text-white  font-medium gap-8">
            <a href="/" className="!text-white font-Urbanist text-base ">
              Home
            </a>
            <a href="/aboutus" className="!text-white font-Urbanist text-base">
              About
            </a>
            <a href="/landing" className="!text-white font-Urbanist text-base">
Consultation            </a>
            <div className="flex flex-col gap-1">
              <button
                type="button"
                onClick={() => setServicesOpen((prev) => !prev)}
                className="!text-white font-Urbanist text-base flex items-center justify-between w-full text-left"
              >
                <span>Services</span>
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
                className={`overflow-hidden transition-all duration-300 ${
                  servicesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="ml-4 mt-2 flex flex-col gap-3">
                  <a
                    href="/services"
                    className="!text-white font-Urbanist text-sm font-semibold"
                    onClick={() => setOpen(false)}
                  >
                    All Services
                  </a>
                  <a
                    href="/services#interior-design"
                    className="!text-white font-Urbanist text-sm"
                    onClick={() => setOpen(false)}
                  >
                    Interior Design
                  </a>
                  <a
                    href="/services#turnkey"
                    className="!text-white font-Urbanist text-sm"
                    onClick={() => setOpen(false)}
                  >
                    Turnkey Interior Execution
                  </a>
                  <a
                    href="/services#residential"
                    className="!text-white font-Urbanist text-sm"
                    onClick={() => setOpen(false)}
                  >
                    Residential Interiors
                  </a>
                  <a
                    href="/services#commercial"
                    className="!text-white font-Urbanist text-sm"
                    onClick={() => setOpen(false)}
                  >
                    Commercial & Office Interiors
                  </a>
                </div>
              </div>
            </div>
            <a
              href="/ourportfolio"
              className="!text-white  font-Urbanist text-base"
            >
              Portfolio
            </a>
            {/* <a href="/blog" className="!text-white font-Urbanist text-base">
              News
            </a> */}
            <a
              href="/contactus"
              className="!text-white font-Urbanist text-base"
            >
              Contact
            </a>
          </nav>
        </div>
      </Drawer>
    </div>
  );
};
export default HeaderPopover;
