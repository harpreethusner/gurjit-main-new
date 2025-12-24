// src/components/ContactUs.jsx

import React, { useState } from "react";

const Contact1 = () => {
  const [agree, setAgree] = useState(false);

  return (
    <section className="bg-[#9A7B50] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Contact Us
        </h2>

        <form className="bg-white p-8 rounded-lg shadow-md space-y-6">
          {/* First and Last Name */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-sm font-medium">
                First Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">
                Last Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
          </div>

          {/* Email and Phone */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-sm font-medium">E-mail</label>
              <input
                type="email"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">
                Phone number (optional)
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
          </div>

          {/* Reason */}
          <div>
            <label className="block mb-2 text-sm font-medium">Reason</label>
            <input
              type="text"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 text-sm font-medium">
              Your message
            </label>
            <textarea
              rows="5"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
            ></textarea>
          </div>

          {/* Checkbox */}
          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              checked={agree}
              onChange={() => setAgree(!agree)}
              className="mt-1"
            />
            <p className="text-sm">
              Agree to{" "}
              <span className="text-red-600 font-semibold">
                terms and conditions
              </span>
            </p>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-8 rounded-full transition"
            >
              SUBMIT
            </button>
          </div>

          {/* Privacy Policy Text */}
          <p className="text-xs text-center text-gray-500 mt-4">
            By submitting your information, you agree to our{" "}
            <span className="text-cyan-600 underline">Privacy Policy</span>.
          </p>
        </form>
      </div>
    </section>
  );
};

export default Contact1;
