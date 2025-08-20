"use client";
import React, { useState } from "react";

export default function GetAQuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    reach: "",
    message: "",
  });

  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });
  };

  const isError = (field) => touched[field] && !formData[field];

  return (
    <div className="relative flex flex-col items-center justify-center h-screen overflow-y-hidden rounded-lg px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
      <div className="relative w-full max-w-5xl rounded-3xl h-full flex flex-col justify-center">
        
        {/* Background image */}
        <div className="absolute 2xl:left-[-9rem]  2xl:bottom-[-120px] z-0 w-[1000px] h-[900px] bg-no-repeat bg-contain bg-bottom"
        style={{ backgroundImage: "url('/contact/Form-background.png')",}}></div>


        {/* Big Background Text */}
        <div id="form-section" className="relative z-1 flex justify-center items-end gap-6 pointer-events-none w-full scale-90 md:scale-100 ">
          <h1 className="text-[8rem] md:text-[15rem] text-gray-400 leading-none mr-4 xl:text-[10rem] 2xl:text-[15rem]">
            Let&apos;s
          </h1>
          <h1 className="text-[8rem] md:text-[15rem] text-blue-300 leading-none xl:text-[10rem] 2xl:text-[15rem]">
            Discuss
          </h1>
        </div>

        {/* Glassmorphic Form */}
        <div className="relative z-20 w-full md:w-[112%] ml-0 md:ml-[-6%] mx-auto p-6 md:p-10 rounded-3xl backdrop-blur-3xl shadow-lg bg-gradient-to-br from-white/40 via-white/50 to-transparent overflow-hidden
        -mt-12">

          <div className="absolute inset-0 bg-gradient-to-br from-gray-500/20 via-gray-800/20 to-transparent rounded-3xl pointer-events-none"></div>

          {/* Form Header */}
          <h2 className="text-lg text-blue-700 font-semibold mb-1">
            Let Us Elevate Your Projects With Our Skills
          </h2>
          <p className="text-xs text-gray-700 mb-4">
            Get a Quote from a Top Mobile App Development Company
          </p>

          {/* Form Fields */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 overflow-hidden">
            {[
              { name: "name", type: "text", placeholder: "Your Name*" },
              { name: "email", type: "email", placeholder: "Your Email*" },
              { name: "phone", type: "tel", placeholder: "Phone Number*" },
              { name: "subject", type: "text", placeholder: "Subject" },
            ].map((field, i) => (
              <div key={i}>
                <input
                  {...field}
                  value={formData[field.name]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`bg-transparent border-b focus:outline-none text-gray-800 placeholder-black text-xs py-2 w-full ${
                    isError(field.name)
                      ? "border-red-500 text-red-600"
                      : "border-gray-800"
                  }`}
                />
                {isError(field.name) && field.placeholder.includes("*") && (
                  <p className="text-xs text-red-500 mt-1">
                    {field.placeholder.replace("*", "")} is required.
                  </p>
                )}
              </div>
            ))}

            {/* Select */}
            <div className="md:col-span-2">
              <select
                name="reach"
                value={formData.reach}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`bg-transparent border-b focus:outline-none text-gray-800 text-xs placeholder-black py-2 w-full ${
                  isError("reach")
                    ? "border-red-500 text-red-600"
                    : "border-gray-800"
                }`}
              >
                <option value="">How Do You Reach Us?</option>
                <option>Google</option>
                <option>Facebook</option>
                <option>Instagram</option>
                <option>LinkedIn</option>
                <option>Others</option>
              </select>
              {isError("reach") && (
                <p className="text-xs text-red-500 mt-1">
                  Please select one option.
                </p>
              )}
            </div>

            {/* Textarea */}
            <div className="md:col-span-2">
              <textarea name="message" placeholder="Your Message*" rows={3} value={formData.message} onChange={handleChange} onBlur={handleBlur}
                className={`bg-transparent border-b focus:outline-none text-gray-800 text-xs placeholder-black py-2 w-full ${
                  isError("message")
                    ? "border-red-500 text-red-600"
                    : "border-gray-800"
                }`}
              />
              {isError("message") && (
                <p className="text-xs text-red-500 mt-1">Message is required.</p>
              )}
            </div>

            {/* Button */}
            <div className="col-span-1 md:grid-cols-2 flex justify-start mt-2">
              <button type="submit" className="px-4 py-2 bg-blue-500 rounded-full text-white hover:bg-blue-600 transition text-sm">Get A Quote</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}


