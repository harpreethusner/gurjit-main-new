import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import Hamburger from "hamburger-react";
import { Drawer } from "antd";
import { X } from "lucide-react";

const content = (
  <div className="text-white  ">
    <nav className="flex flex-col gap-1  text-sm  !text-white  font-medium gap-8">
      <a href="/" className="!text-white font-Urbanist text-base ">
        Home
      </a>
      <a href="/aboutus" className="!text-white font-Urbanist text-base">
        About
      </a>
      <div className="flex flex-col gap-1">
        <a href="/services" className="!text-white font-Urbanist text-base">
          Services
        </a>
        <div className="ml-3 flex flex-col gap-1 text-sm">
          <a href="/services#interior-design" className="!text-white">
            Interior Design
          </a>
          <a href="/services#turnkey" className="!text-white">
            Turnkey Interior Execution
          </a>
          <a href="/services#residential" className="!text-white">
            Residential Interiors
          </a>
          <a href="/services#commercial" className="!text-white">
            Commercial & Office Interiors
          </a>
        </div>
      </div>
      <a href="/ourportfolio" className="!text-white  font-Urbanist text-base">
        Portfolio
      </a>
      <a href="/blog" className="!text-white font-Urbanist text-base">
        News
      </a>
      <a href="/contactus" className="!text-white font-Urbanist text-base">
        Contact
      </a>
    </nav>
  </div>
);
const HeaderPopover = () => {
  const [isOpen, setOpen] = useState(false);
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
        }}
        content={content}
      >
        <div className="text-white lg:hidden">
          <nav className="flex flex-col gap-1 text-sm  !text-white  font-medium gap-8">
            <a href="/" className="!text-white font-Urbanist text-base ">
              Home
            </a>
            <a href="/aboutus" className="!text-white font-Urbanist text-base">
              About
            </a>
            <a href="/services" className="!text-white font-Urbanist text-base">
              Services
            </a>
            <a
              href="/services#interior-design"
              className="!text-white font-Urbanist text-base"
            >
              Interior Design
            </a>
            <a
              href="/services#turnkey"
              className="!text-white font-Urbanist text-base"
            >
              Turnkey Interior Execution
            </a>
            <a
              href="/services#residential"
              className="!text-white font-Urbanist text-base"
            >
              Residential Interiors
            </a>
            <a
              href="/services#commercial"
              className="!text-white font-Urbanist text-base"
            >
              Commercial & Office Interiors
            </a>
            <a
              href="/ourportfolio"
              className="!text-white  font-Urbanist text-base"
            >
              Portfolio
            </a>
            <a href="/blog" className="!text-white font-Urbanist text-base">
              News
            </a>
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
