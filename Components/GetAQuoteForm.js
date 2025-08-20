"use client";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

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
    <div className="main-container min-h-[600px] xl:min-h-[700px] 2xl:min-h-screen relative flex flex-col items-center justify-center rounded-lg px-4 xl:mt-[-6rem] xs:px-6 xss:py-10 xl:py-0 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
      {/* Background Image Layer */}
      <div
        className="Form-img absolute z-0 
                      w-[80vw] max-w-[1000px] h-[80vh] max-h-[1000px]
                      left-[-1rem] bottom-[-2rem]
                      xss:w-[70vw] xss:h-[70vh] xss:max-w-[600px] xss:max-h-[800px] xss:left-[1rem] xss:bottom-[-0.3rem]
                      xs:w-[75vw] xs:h-[70vh] xs:max-w-[600px] xs:max-h-[800px] xs:left-[2rem] xs:bottom-[-0.3rem]
                      sm:w-[75vw] sm:h-[70vh] sm:max-w-[600px] sm:max-h-[800px] sm:left-[2rem] sm:bottom-[-1.5rem]
                      md:w-[75vw] md:h-[75vh] md:max-w-[700px] md:max-h-[800px] md:left-[2rem] md:bottom-[-2rem]
                      lg:w-[75vw] lg:h-[72vh] lg:max-w-[800px] lg:max-h-[900px] lg:left-[2.8rem] lg:bottom-[-3rem]
                      xl:w-[80vw] xl:h-[80vh] xl:max-w-[900px] xl:max-h-[900px] xl:left-[7rem] xl:bottom-[-1rem]
                      2xl:w-[75vw] 2xl:h-[75vh] 2xl:max-w-[1000px] 2xl:max-h-[1000px] 2xl:left-[5rem] 2xl:bottom-[-0.8rem]
                      3xl:w-[75vw] 3xl:h-[75vh] 3xl:max-w-[1000px] 3xl:max-h-[1000px] 3xl:left-[13rem] 3xl:bottom-[-2rem]
                      bg-no-repeat bg-contain bg-left-bottom"
      ></div>

      <div className="relative w-full max-w-5xl rounded-3xl min。由min-h-[600px] xl:min-h-[700px] 2xl:min-h-[800px] flex flex-col justify-center items-center z-10">
        {/* Big Background Text */}
        <div className="relative z-10 flex justify-center items-end gap-6 pointer-events-none w-full xss:scale-[0.4] xs:scale-[0.45] sm:scale-[0.5] md:scale-[0.6] lg:scale-[0.7] xl:scale-[0.8] 2xl:scale-[0.9] 3xl:scale-120">
          <h1 className="text-[6rem] sm:text-[7rem] md:text-[8rem] lg:text-[9rem] xl:text-[10rem] 2xl:text-[11rem] 3xl:text-[12rem] text-gray-400 leading-none">
            Let&apos;s
          </h1>
          <h1 className="text-[6rem] sm:text-[7rem] md:text-[8rem] lg:text-[9rem] xl:text-[10rem] 2xl:text-[11rem] 3xl:text-[12rem] text-blue-300 leading-none">
            Discuss
          </h1>
        </div>

        {/* Glassmorphic Form */}
        <div className="relative z-20 xl:p-6 xl:mt-[-2.7rem] 2xl:mt-[-2.3rem] 3xl:mt-[-1.5rem] xss:mt-[-2.3rem] xs:mt-[-2.2rem] sm:mt-[-2.4rem] md:mt-[-2rem] lg:mt-[-2.5rem] w-full p-5 border-gray-300 border-2
                        2xl:w-[90%] xl:w-[75%] lg:w-[80%] md:w-[80%] sm:w-[75%] xs:w-[75%] xs:p-3 xss:w-[80%]
                        rounded-3xl backdrop-blur-3xl shadow-lg 
                        bg-gradient-to-br from-white/40 via-white/50 to-transparent">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-500/20 via-gray-800/20 to-transparent rounded-3xl pointer-events-none"></div>

          {/* Form Header */}
          <h2 className="text-lg text-blue-700 font-semibold mb-1 xs:text-sm">
            Let Us Elevate Your Projects With Our Skills
          </h2>
          <p className="text-xs text-gray-700 mb-4">
            Get a Quote from a Top Mobile App Development Company
          </p>

          {/* Form Fields */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xs:gap-2 overflow-hidden">
            {[
              { name: "name", type: "text", placeholder: "Your Name*" },
              { name: "email", type: "email", placeholder: "Your Email*" },
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

            {/* Phone Number with Flag */}
            <div>
              <PhoneInput
                country={"in"}
                value={formData.phone}
                onChange={(phone) => setFormData((prev) => ({ ...prev, phone }))}
                countryCodeEditable={false}
                enableSearch={true}
                inputClass="!bg-transparent !border-none !focus:outline-none !text-xs !w-full !pl-12 !text-gray-800 placeholder-black"
                buttonClass="!bg-transparent !border-none !outline-none"
                containerClass={`!border-b !pb-1 ${
                  isError("phone")
                    ? "!border-red-500 !text-red-600"
                    : "!border-gray-800"
                }`}
                dropdownClass="!bg-white !text-xs"
                placeholder="Phone Number*"
              />
              {isError("phone") && (
                <p className="text-xs text-red-500 mt-1">
                  Phone Number is required.
                </p>
              )}
            </div>

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
              <textarea
                name="message"
                placeholder="Your Message*"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`bg-transparent border-b focus:outline-none text-gray-800 text-xs placeholder-black py-2 w-full ${
                  isError("message")
                    ? "border-red-500 text-red-600"
                    : "border-gray-800"
                }`}
              />
              {isError("message") && (
                <p className="text-xs text-red-500 mt-1">
                  Message is required.
                </p>
              )}
            </div>

            {/* Button */}
            <div className="col-span-1 md:grid-cols-2 flex justify-start mt-2">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 rounded-full text-white hover:bg-blue-600 transition text-sm"
              >
                Get A Quote
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}