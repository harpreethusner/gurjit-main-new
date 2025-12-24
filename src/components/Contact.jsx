import React, { useState } from "react";
import Header from "./Header/Header";
import Footer from "./Footer";
import image3 from "../assets/images/bg1.jpg";
import { endpoint } from "../Services/endpoint";
import axios from "axios";
import Toast from "./Toast";

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

  return (
    <div>
      <Header />
      {/* Top Banner */}
      <div
        className="h-[50vh] w-full bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${image3})` }}
      >
        <div className="h-full w-full bg-black/60 flex items-center justify-center px-4">
          <span className="text-white font-Urbanist text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center">
            Contact Us
          </span>
        </div>
      </div>

      {/* Main Contact Section */}
      <section className="text-gray-600 body-font relative">
        <div className="flex flex-col md:grid md:grid-cols-7 min-h-screen">
          {/* Left Image */}
          <div className="col-span-2 w-full h-64 md:h-auto">
            <img
              src={image3}
              alt="Contact Banner"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Form */}
          <div className="col-span-5 flex flex-col md:flex-row bg-white">
            <div className="w-full md:w-2/5 bg-white p-6 sm:p-10 shadow-lg flex flex-col justify-center">
              <h2 className="font-Urbanist text-gray-600 tracking-widest uppercase font-bold mb-2">
                Contact Us
              </h2>
              <h1 className="text-3xl sm:text-4xl font-bold mb-6 font-Urbanist">
                Get In Touch
              </h1>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    value={contactDetails.name}
                    onChange={(e) =>
                      setContactDetails({
                        ...contactDetails,
                        name: e.target.value,
                      })
                    }
                    type="text"
                    placeholder="Name"
                    className={`w-full p-3 bg-gray-100 border ${
                      formErrors.name ? "border-red-500" : "border-gray-300"
                    } rounded`}
                  />
                  {formErrors.name && (
                    <p className="text-red-500 text-sm mt-1">Enter Your Name</p>
                  )}
                </div>

                <div>
                  <input
                    value={contactDetails.email}
                    onChange={(e) =>
                      setContactDetails({
                        ...contactDetails,
                        email: e.target.value,
                      })
                    }
                    type="email"
                    placeholder="Email"
                    className={`w-full p-3 bg-gray-100 border ${
                      formErrors.email ? "border-red-500" : "border-gray-300"
                    } rounded`}
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {contactDetails.email === ""
                        ? "Enter Your Email"
                        : "Invalid email"}
                    </p>
                  )}
                </div>

                <div>
                  <textarea
                    value={contactDetails.message}
                    onChange={(e) =>
                      setContactDetails({
                        ...contactDetails,
                        message: e.target.value,
                      })
                    }
                    placeholder="Message"
                    rows="4"
                    className={`w-full p-3 bg-gray-100 border ${
                      formErrors.message ? "border-red-500" : "border-gray-300"
                    } rounded`}
                  ></textarea>
                  {formErrors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      Enter You Message
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="bg-[#c0a275] text-white py-3 px-6 rounded shadow hover:bg-[#a78a63] transition"
                >
                  Send Message
                </button>
              </form>
            </div>

            <Toast show={showToast} onClose={() => setShowToast(false)} />

            {/* Google Map */}
            <div className="w-full md:w-3/5 h-64 md:h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.184504030932!2d76.7219981!3d30.685084499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef9ce14c73cf%3A0x535f90f7681789d0!2sGurjot%20Shan%20Designs%20%E2%80%93%20Interior%20Designers%20in%20Chandigarh%2C%20Mohali%20%26%20Panchkula!5e0!3m2!1sen!2sin!4v1746782397615!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Location Map"
              ></iframe>
            </div>
          </div>
        </div>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/your-number"
          className="fixed bottom-6 right-6 z-50"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="w-12 h-12"
          />
        </a>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
