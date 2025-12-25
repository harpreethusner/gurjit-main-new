import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";
import Header from "./Header/Header";
import Footer from "./Footer";
import image3 from "../assets/images/bg1.jpg";
import { endpoint } from "../Services/endpoint";
import axios from "axios";
import Toast from "./Toast";
import { SectionTitle } from "./SectionTitle";

const apiUrl = import.meta.env.VITE_API_URL;

const Contact = () => {
  const [contactDetails, setContactDetails] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const [showToast, setShowToast] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const triggerToast = () => {
    setShowToast(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {
      name: contactDetails.name.trim() === "",
      email:
        contactDetails.email.trim() === "" ||
        !validateEmail(contactDetails.email),
      message: contactDetails.message.trim() === "",
    };

    setFormErrors(errors);

    const hasErrors = Object.values(errors).some((err) => err);

    if (!hasErrors) {
      sendContactDetails();
    }
  };

  async function sendContactDetails() {
    try {
      const res = await axios.post(
        apiUrl + endpoint.sendContact,
        contactDetails
      );
      if (res.data) {
        triggerToast();
        setContactDetails({ name: "", email: "", message: "" });
        setFormErrors({ name: false, email: false, message: false });
      }
    } catch (error) {
      console.log(error);
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      content: "+91 8588810357",
      link: "tel:+918588810357",
      color: "bg-blue-500",
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "gurjotshandesigns@gmail.com",
      link: "mailto:gurjotshandesigns@gmail.com",
      color: "bg-[#9A7B50]",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "SCO II, Sector 68, Sahibzada Ajit Singh Nagar, Punjab 160062",
      link: "https://maps.google.com/?q=SCO+II+Sector+68+Sahibzada+Ajit+Singh+Nagar",
      color: "bg-green-500",
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "Mon - Sat: 9:00 AM - 7:00 PM",
      link: null,
      color: "bg-purple-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-white">
      <Header />
      
      {/* Hero Banner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[50vh] w-full bg-cover bg-center flex items-center justify-center overflow-hidden"
        style={{ backgroundImage: `url(${image3})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        <div className="relative z-10 h-full w-full flex items-center justify-center px-4">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-center"
          >
            <SectionTitle
              subtitle={"Get In Touch"}
              title={"Contact Us"}
              needWhite={true}
            />
            <p className="text-white/90 font-Urbanist text-lg mt-4 max-w-2xl">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Contact Information Cards */}
      <section className="py-16 px-4 sm:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <motion.a
                  key={index}
                  href={info.link || undefined}
                  target={info.link?.startsWith("http") ? "_blank" : undefined}
                  rel={info.link?.startsWith("http") ? "noopener noreferrer" : undefined}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className={`group relative overflow-hidden rounded-xl bg-white p-6 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                    !info.link ? "cursor-default" : "cursor-pointer"
                  }`}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div
                      className={`${info.color} w-16 h-16 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="font-Urbanist font-semibold text-lg text-gray-800 mb-2">
                        {info.title}
                      </h3>
                      <p className="font-Urbanist text-sm text-gray-600 leading-relaxed">
                        {info.content}
                      </p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#9A7B50]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 px-4 sm:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 lg:p-10 shadow-xl border border-gray-100"
            >
              <div className="mb-8">
                <h2 className="font-Urbanist text-[#9A7B50] text-sm uppercase tracking-widest mb-2">
                  Send Us a Message
                </h2>
                <h3 className="font-Urbanist text-3xl md:text-4xl font-bold text-gray-900">
                  Let's Start a Conversation
                </h3>
                <p className="font-Urbanist text-gray-600 mt-4">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-Urbanist text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    value={contactDetails.name}
                    onChange={(e) =>
                      setContactDetails({
                        ...contactDetails,
                        name: e.target.value,
                      })
                    }
                    type="text"
                    placeholder="Enter your full name"
                    className={`w-full px-4 py-3 bg-white border-2 rounded-lg font-Urbanist transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#9A7B50]/50 ${
                      formErrors.name
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-300 focus:border-[#9A7B50]"
                    }`}
                  />
                  {formErrors.name && (
                    <p className="text-red-500 text-sm mt-2 font-Urbanist">
                      Please enter your name
                    </p>
                  )}
                </div>

                <div>
                  <label className="block font-Urbanist text-sm font-medium text-gray-700 mb-2">
                    Your Email
                  </label>
                  <input
                    value={contactDetails.email}
                    onChange={(e) =>
                      setContactDetails({
                        ...contactDetails,
                        email: e.target.value,
                      })
                    }
                    type="email"
                    placeholder="Enter your email address"
                    className={`w-full px-4 py-3 bg-white border-2 rounded-lg font-Urbanist transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#9A7B50]/50 ${
                      formErrors.email
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-300 focus:border-[#9A7B50]"
                    }`}
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-sm mt-2 font-Urbanist">
                      {contactDetails.email === ""
                        ? "Please enter your email"
                        : "Please enter a valid email address"}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block font-Urbanist text-sm font-medium text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    value={contactDetails.message}
                    onChange={(e) =>
                      setContactDetails({
                        ...contactDetails,
                        message: e.target.value,
                      })
                    }
                    placeholder="Tell us about your project or inquiry..."
                    rows="6"
                    className={`w-full px-4 py-3 bg-white border-2 rounded-lg font-Urbanist transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#9A7B50]/50 resize-none ${
                      formErrors.message
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-300 focus:border-[#9A7B50]"
                    }`}
                  ></textarea>
                  {formErrors.message && (
                    <p className="text-red-500 text-sm mt-2 font-Urbanist">
                      Please enter your message
                    </p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#9A7B50] text-white py-4 px-6 rounded-lg font-Urbanist font-semibold text-lg shadow-lg hover:bg-[#8a6b40] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </motion.button>
              </form>

              <Toast show={showToast} onClose={() => setShowToast(false)} />
            </motion.div>

            {/* Map Section */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 h-[600px] lg:h-auto"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.184504030932!2d76.7219981!3d30.685084499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef9ce14c73cf%3A0x535f90f7681789d0!2sGurjot%20Shan%20Designs%20%E2%80%93%20Interior%20Designers%20in%20Chandigarh%2C%20Mohali%20%26%20Panchkula!5e0!3m2!1sen!2sin!4v1746782397615!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Location Map"
                className="w-full h-full"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918588810357"
        className="fixed bottom-6 right-6 z-50 shadow-2xl hover:scale-110 transition-transform duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-14 h-14 rounded-full"
        />
      </a>

      <Footer />
    </div>
  );
};

export default Contact;
