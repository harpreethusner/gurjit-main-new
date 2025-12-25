import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import InteriorServicesPage from "./pages/InteriorServicesPage";
import HowWeWorkPage from "./pages/HowWeWorkPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactUsPage from "./pages/ContactUsPage";
import AboutUsPage from "./pages/AboutUsPage";
import BlogPage from "./pages/BlogPage";
import OurPortifolioPage from "./pages/OurPortifolioPage";
import Portfolio1 from "./components/Portfolio1";
import BlogDetails from "./components/BlogDetails";
import MakeAppoinment from "./components/MakeAppoinment";
import ServicesPage from "./pages/ServicesPage";
import FAQPage from "./pages/FAQPage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/interiorservices", element: <InteriorServicesPage /> },
  { path: "/howwework", element: <HowWeWorkPage /> },
  { path: "/projects", element: <ProjectsPage /> },
  { path: "/contactus", element: <ContactUsPage /> },
  { path: "/aboutus", element: <AboutUsPage /> },
  { path: "/blog", element: <BlogPage /> },
  { path: "/ourportfolio", element: <OurPortifolioPage /> },
  { path: "/ourportfolio/:id", element: <Portfolio1 /> },
  { path: "/blog/:id", element: <BlogDetails /> },
  { path: "/MakeAppoinment", element: <MakeAppoinment /> },
  { path: "/services", element: <ServicesPage /> },
  { path: "/faq", element: <FAQPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
