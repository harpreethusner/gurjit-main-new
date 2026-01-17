import React from "react";
import LandingPage from "../components/LandingPage";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";

const LandingPagePage = () => {
  return (
    <div className="w-screen">
      <Header />
      <LandingPage />
      <Footer />
    </div>
  );
};

export default LandingPagePage;