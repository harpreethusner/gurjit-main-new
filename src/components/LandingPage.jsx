import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  ArrowRight, 
  Star, 
  Check, 
  X, 
  Home, 
  Building2, 
  Briefcase, 
  Award,
  Clock,
  Phone,
  Mail,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import axios from "axios";
import { endpoint } from "../Services/endpoint";
import Toast from "./Toast";
import image1 from "../assets/images/bg1.jpg";
import image3 from "../assets/images/image3.jpg";
import image5 from "../assets/images/image5.jpg";
import image6 from "../assets/images/image6.jpg";
import image8 from "../assets/images/image8.jpg";
import image10 from "../assets/images/image10.jpg";

const apiUrl = import.meta.env.VITE_API_URL;

const fadeInUp = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const LandingPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    city: "",
    projectType: "",
    budgetRange: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    fullName: false,
    phoneNumber: false,
    emailAddress: false,
    city: false,
    projectType: false,
    budgetRange: false,
  });

  const [showToast, setShowToast] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = {
      fullName: formData.fullName.trim() === "",
      phoneNumber: formData.phoneNumber.trim() === "" || !validatePhone(formData.phoneNumber),
      emailAddress: formData.emailAddress.trim() === "" || !validateEmail(formData.emailAddress),
      city: formData.city.trim() === "",
      projectType: formData.projectType === "",
      budgetRange: formData.budgetRange === "",
    };

    setFormErrors(errors);

    const hasErrors = Object.values(errors).some((err) => err);

    if (!hasErrors) {
      setIsSubmitting(true);
      try {
        const res = await axios.post(
          apiUrl + endpoint.addInteriorConsultationLead,
          formData
        );
        if (res.data && res.data.errorCode === 1) {
          setShowToast(true);
          setFormData({
            fullName: "",
            phoneNumber: "",
            emailAddress: "",
            city: "",
            projectType: "",
            budgetRange: "",
            message: "",
          });
          setFormErrors({
            fullName: false,
            phoneNumber: false,
            emailAddress: false,
            city: false,
            projectType: false,
            budgetRange: false,
          });
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const scrollToForm = () => {
    const formElement = document.getElementById("consultation-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="w-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] w-full bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${image1})` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/75" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-20 md:py-32">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6 max-w-4xl mx-auto"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block text-[#F1C27D] text-sm md:text-base font-Urbanist uppercase tracking-[0.2em] font-semibold"
            >
              Interior Design & Turnkey Execution
            </motion.span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-Urbanist text-white leading-tight">
              Design Your Space.
              <br />
              <span className="text-[#F1C27D]">We'll Deliver It.</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-Urbanist max-w-3xl mx-auto leading-relaxed">
              From concept to completion — one team, one responsibility.
            </p>
            <p className="text-base md:text-lg text-white/80 font-Urbanist max-w-3xl mx-auto leading-relaxed">
              Looking for a reliable interior designer who can design AND execute your home or office without coordination headaches?
            </p>
            <p className="text-base md:text-lg text-white/80 font-Urbanist max-w-3xl mx-auto leading-relaxed">
              At Gurjot Shan Designs, we offer end-to-end interior solutions, ensuring your space is designed thoughtfully and delivered exactly as promised.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-8">
              <div className="flex items-center gap-2 text-white/90 font-Urbanist">
                <Home className="w-5 h-5 text-[#F1C27D]" />
                <span>Homes</span>
              </div>
              <div className="flex items-center gap-2 text-white/90 font-Urbanist">
                <Building2 className="w-5 h-5 text-[#F1C27D]" />
                <span>Offices</span>
              </div>
              <div className="flex items-center gap-2 text-white/90 font-Urbanist">
                <Briefcase className="w-5 h-5 text-[#F1C27D]" />
                <span>Commercial Spaces</span>
              </div>
              <div className="flex items-center gap-2 text-white/90 font-Urbanist">
                <Award className="w-5 h-5 text-[#F1C27D]" />
                <span>20+ Years of Experience</span>
              </div>
              <div className="flex items-center gap-2 text-white/90 font-Urbanist">
                <CheckCircle2 className="w-5 h-5 text-[#F1C27D]" />
                <span>Complete Turnkey Execution</span>
              </div>
            </div>

            <motion.button
              onClick={scrollToForm}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 px-8 py-4 bg-[#9A7B50] hover:bg-[#8A6B40] text-white font-Urbanist font-semibold text-lg rounded-lg shadow-2xl hover:shadow-[#9A7B50]/50 transition-all duration-300 flex items-center gap-2 mx-auto"
            >
              Get a Free Consultation
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Social Proof Strip */}
      <section className="bg-[#1f1a17] py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 text-white"
          >
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#F1C27D] text-[#F1C27D]" />
              ))}
            </div>
            <p className="text-center md:text-left font-Urbanist text-base md:text-lg">
              Trusted by homeowners & businesses across <span className="font-semibold text-[#F1C27D]">Chandigarh, Mohali & Punjab</span>
            </p>
            <div className="hidden md:flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#F1C27D]" />
                <span>20+ years in interior design & execution</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#F1C27D]" />
                <span>Residential & commercial expertise</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#F1C27D]" />
                <span>Transparent costing & timelines</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem - Agitation - Solution */}
      <section className="py-20 md:py-32 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            <motion.div variants={fadeInUp} className="text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-Urbanist text-gray-900 mb-4">
                Tired of Interior Delays & Coordination Issues?
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Problem Section */}
              <motion.div variants={fadeInUp} className="bg-red-50 border-2 border-red-200 rounded-2xl p-8">
                <h3 className="text-2xl font-bold font-Urbanist text-red-900 mb-6 flex items-center gap-3">
                  <X className="w-8 h-8 text-red-600" />
                  Most interior projects fail because:
                </h3>
                <ul className="space-y-4">
                  {[
                    "Designers don't take execution responsibility",
                    "Multiple vendors create confusion",
                    "Costs keep increasing mid-project",
                    "Final outcome doesn't match the design"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-red-800 font-Urbanist">
                      <X className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Solution Section */}
              <motion.div variants={fadeInUp} className="bg-green-50 border-2 border-green-200 rounded-2xl p-8">
                <h3 className="text-2xl font-bold font-Urbanist text-green-900 mb-6 flex items-center gap-3">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                  Our Solution: Complete Turnkey Interiors
                </h3>
                <p className="text-lg font-semibold font-Urbanist text-green-900 mb-6">
                  With Gurjot Shan Designs, you get:
                </p>
                <ul className="space-y-4">
                  {[
                    "One point of contact",
                    "One committed timeline",
                    "One accountable team"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-green-800 font-Urbanist">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-lg font-semibold">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-xl font-bold font-Urbanist text-green-900">
                  We design it. We build it. We hand it over.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 md:py-32 px-4 sm:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-Urbanist text-gray-900 mb-4">
              Our Core Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#9A7B50] to-transparent mx-auto mb-6" />
            <p className="text-lg text-gray-600 font-Urbanist max-w-3xl mx-auto">
              Every project is managed with professional supervision, quality control, and clear communication.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                icon: Sparkles,
                title: "Interior Design",
                description: "Layouts, 3D, materials & planning"
              },
              {
                icon: Briefcase,
                title: "Turnkey Interior Execution",
                description: "Complete end-to-end project management"
              },
              {
                icon: Home,
                title: "Residential Interiors",
                description: "Homes, Villas, Apartments"
              },
              {
                icon: Building2,
                title: "Commercial & Office Interiors",
                description: "Professional workspace solutions"
              }
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-100 hover:border-[#9A7B50] transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <div className="w-16 h-16 bg-[#9A7B50] rounded-full flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold font-Urbanist text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 font-Urbanist">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Gurjot Shan Designs */}
      <section className="py-20 md:py-32 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-Urbanist text-gray-900 mb-4">
              Why Choose Gurjot Shan Designs
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#9A7B50] to-transparent mx-auto mb-6" />
            <p className="text-xl font-semibold font-Urbanist text-[#9A7B50]">
              What Makes Us Different
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
          >
            {[
              "20+ years of industry experience",
              "Design-to-delivery accountability",
              "In-house manufacturing & trusted vendors",
              "Detailed BOQs & transparent pricing",
              "Hands-on project supervision",
              "Limited projects for quality focus"
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <CheckCircle2 className="w-6 h-6 text-[#9A7B50] mt-1 flex-shrink-0" />
                <p className="text-gray-700 font-Urbanist text-lg">{item}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center text-lg font-semibold font-Urbanist text-gray-700 italic"
          >
            We work with limited projects at a time to ensure quality — not quantity.
          </motion.p>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 md:py-32 px-4 sm:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-Urbanist text-gray-900 mb-4">
              How It Works
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#9A7B50] to-transparent mx-auto mb-6" />
            <p className="text-xl font-semibold font-Urbanist text-[#9A7B50] mb-2">
              Our Process (Simple & Reassuring)
            </p>
            <p className="text-lg text-gray-600 font-Urbanist">
              No chaos. No confusion. Just clarity.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                step: "Step 1",
                title: "Share your requirement",
                description: "Tell us about your space and vision"
              },
              {
                step: "Step 2",
                title: "Design discussion & concept planning",
                description: "We create personalized design concepts"
              },
              {
                step: "Step 3",
                title: "Costing & execution strategy",
                description: "Transparent pricing and clear timeline"
              },
              {
                step: "Step 4",
                title: "Turnkey execution & final handover",
                description: "We deliver your completed space"
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative bg-gradient-to-br from-[#9A7B50]/10 to-white rounded-2xl p-8 border-2 border-[#9A7B50]/20"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#9A7B50] rounded-full flex items-center justify-center text-white font-bold font-Urbanist text-lg shadow-lg">
                  {index + 1}
                </div>
                <div className="mt-4">
                  <span className="text-sm text-[#9A7B50] font-semibold font-Urbanist uppercase tracking-wide">
                    {process.step}
                  </span>
                  <h3 className="text-xl font-bold font-Urbanist text-gray-900 mt-2 mb-3">
                    {process.title}
                  </h3>
                  <p className="text-gray-600 font-Urbanist">
                    {process.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Visual Section */}
      <section className="py-20 md:py-32 px-4 sm:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-Urbanist text-gray-900 mb-4">
              Executed Residential & Commercial Interiors
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#9A7B50] to-transparent mx-auto mb-6" />
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            {[image3, image5, image6, image8, image10, image1].slice(0, 6).map((img, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative overflow-hidden rounded-2xl shadow-xl group cursor-pointer"
              >
                <img
                  src={img}
                  alt={`Interior Design Project ${index + 1}`}
                  className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <p className="text-xl font-semibold font-Urbanist text-gray-700 italic">
              "The biggest relief was having one team handle everything."
            </p>
            <p className="text-lg font-Urbanist text-gray-600 italic">
              "Design clarity and execution quality were exactly as promised."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section id="consultation-form" className="py-20 md:py-32 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-Urbanist text-gray-900 mb-4">
              Let's Design & Build Your Space
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#9A7B50] to-transparent mx-auto mb-6" />
            <p className="text-lg text-gray-600 font-Urbanist max-w-2xl mx-auto">
              Fill the form below and our team will connect with you within 24 hours.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border-2 border-gray-100"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-Urbanist text-sm font-medium text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Enter your full name"
                    className={`w-full px-4 py-3 bg-white border-2 rounded-lg font-Urbanist transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#9A7B50]/50 ${
                      formErrors.fullName
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-300 focus:border-[#9A7B50]"
                    }`}
                  />
                  {formErrors.fullName && (
                    <p className="text-red-500 text-sm mt-2 font-Urbanist">Please enter your full name</p>
                  )}
                </div>

                <div>
                  <label className="block font-Urbanist text-sm font-medium text-gray-700 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    placeholder="Enter 10-digit phone number"
                    className={`w-full px-4 py-3 bg-white border-2 rounded-lg font-Urbanist transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#9A7B50]/50 ${
                      formErrors.phoneNumber
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-300 focus:border-[#9A7B50]"
                    }`}
                  />
                  {formErrors.phoneNumber && (
                    <p className="text-red-500 text-sm mt-2 font-Urbanist">
                      {formData.phoneNumber === "" ? "Please enter your phone number" : "Please enter a valid 10-digit phone number"}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-Urbanist text-sm font-medium text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.emailAddress}
                    onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                    placeholder="Enter your email address"
                    className={`w-full px-4 py-3 bg-white border-2 rounded-lg font-Urbanist transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#9A7B50]/50 ${
                      formErrors.emailAddress
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-300 focus:border-[#9A7B50]"
                    }`}
                  />
                  {formErrors.emailAddress && (
                    <p className="text-red-500 text-sm mt-2 font-Urbanist">
                      {formData.emailAddress === "" ? "Please enter your email" : "Please enter a valid email address"}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block font-Urbanist text-sm font-medium text-gray-700 mb-2">
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="Enter your city"
                    className={`w-full px-4 py-3 bg-white border-2 rounded-lg font-Urbanist transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#9A7B50]/50 ${
                      formErrors.city
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-300 focus:border-[#9A7B50]"
                    }`}
                  />
                  {formErrors.city && (
                    <p className="text-red-500 text-sm mt-2 font-Urbanist">Please enter your city</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-Urbanist text-sm font-medium text-gray-700 mb-2">
                    Type of Project <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className={`w-full px-4 py-3 bg-white border-2 rounded-lg font-Urbanist transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#9A7B50]/50 ${
                      formErrors.projectType
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-300 focus:border-[#9A7B50]"
                    }`}
                  >
                    <option value="">Select project type</option>
                    <option value="Residential">Residential</option>
                    <option value="Commercial / Office">Commercial / Office</option>
                  </select>
                  {formErrors.projectType && (
                    <p className="text-red-500 text-sm mt-2 font-Urbanist">Please select project type</p>
                  )}
                </div>

                <div>
                  <label className="block font-Urbanist text-sm font-medium text-gray-700 mb-2">
                    Approximate Budget Range <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className={`w-full px-4 py-3 bg-white border-2 rounded-lg font-Urbanist transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#9A7B50]/50 ${
                      formErrors.budgetRange
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-300 focus:border-[#9A7B50]"
                    }`}
                  >
                    <option value="">Select budget range</option>
                    <option value="Under 5 Lakhs">Under 5 Lakhs</option>
                    <option value="5-10 Lakhs">5-10 Lakhs</option>
                    <option value="10-20 Lakhs">10-20 Lakhs</option>
                    <option value="20-30 Lakhs">20-30 Lakhs</option>
                    <option value="30-50 Lakhs">30-50 Lakhs</option>
                    <option value="50+ Lakhs">50+ Lakhs</option>
                  </select>
                  {formErrors.budgetRange && (
                    <p className="text-red-500 text-sm mt-2 font-Urbanist">Please select budget range</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block font-Urbanist text-sm font-medium text-gray-700 mb-2">
                  Message (Optional)
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your project requirements..."
                  rows="4"
                  className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg font-Urbanist transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#9A7B50]/50 focus:border-[#9A7B50] resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full bg-[#9A7B50] text-white py-4 px-6 rounded-lg font-Urbanist font-semibold text-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-[#8a6b40] hover:shadow-[#9A7B50]/50"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit & Book Consultation
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </motion.button>

              <div className="text-center pt-4">
                <p className="text-gray-600 font-Urbanist">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Prefer calling? <a href="tel:+919888760124" className="text-[#9A7B50] hover:underline font-semibold">+91 98887 60124</a>
                </p>
              </div>
            </form>

            <Toast show={showToast} onClose={() => setShowToast(false)} />
          </motion.div>
        </div>
      </section>

      {/* Trust & Assurance Strip */}
      <section className="py-12 px-4 bg-[#9A7B50]/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-8 text-gray-700"
          >
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-[#9A7B50]" />
              <span className="font-Urbanist font-semibold">No spam. No pressure.</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-[#9A7B50]" />
              <span className="font-Urbanist font-semibold">Consultation by experienced professionals</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-[#9A7B50]" />
              <span className="font-Urbanist font-semibold">Clear discussion on budget & timelines</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-Urbanist text-gray-900">
              Ready to Start Your Interior Journey?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 font-Urbanist max-w-2xl mx-auto">
              Whether you're planning a new home, renovation, or office interior, our team is ready to guide you from design to delivery.
            </p>
            <motion.button
              onClick={scrollToForm}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-10 py-5 bg-[#9A7B50] hover:bg-[#8A6B40] text-white font-Urbanist font-semibold text-lg md:text-xl rounded-lg shadow-2xl hover:shadow-[#9A7B50]/50 transition-all duration-300 flex items-center gap-3 mx-auto"
            >
              Get Started Today
              <ArrowRight className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;