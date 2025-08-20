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
    <div className="main-container 2xl:h-screen xl:h-[700px] xs:h-[600px] relative flex flex-col items-center justify-center rounded-lg px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
      
      {/* Background Image Layer */}
      <div className="Form-img absolute z-0 
                      xss:w-[300px] xss:h-[800px] 
                      xss:left-[-1rem] xss:bottom-[-1rem]
                      xs:w-[350px] xs:h-[900px]
                      xs:left-[-1rem] xs:bottom-[0rem]
                      sm:w-[530px] sm:h-[800px]
                      sm:left-[-1rem] sm:bottom-[-1.6rem]
                      xl:w-[800px] xl:h-[900px] 
                      xl:left-[4rem] xl:bottom-[-3rem] 
                      2xl:w-[1000px] 2xl:h-[1000px] 
                      2xl:left-[3rem] 2xl:bottom-[-3.8rem] 
                      3xl:w-[1000px] 3xl:h-[1000px]
                      3xl:left-[11rem] 3xl:bottom-[-7rem]
                      lg:w-[700px] lg:h-[800px]
                      lg:left-[-0.5rem] lg:bottom-[-3rem]
                      md:w-[600px] md:h-[800px]
                      md:left-[-0.2rem] md:bottom-[-2.3rem]
                      bg-no-repeat bg-contain bg-left-bottom ">
      </div>

      <div className="relative w-full max-w-5xl rounded-3xl h-full flex flex-col justify-center items-center z-10">
        
        {/* Big Background Text */}
        <div className="relative z-10 flex justify-center items-end gap-6 pointer-events-none w-full xss:scale-45 xl:scale-90 2xl:scale-95 3xl:scale-100 sm:scale-65 xs:scale-50 md:scale-70">
          <h1 className="text-[8rem] md:text-[9rem] text-gray-400 leading-none mr-4 xl:text-[12rem] 2xl:text-[15rem]">
            Let&apos;s
          </h1>
          <h1 className="text-[8rem] md:text-[9rem] text-blue-300 leading-none xl:text-[12rem] 2xl:text-[15rem]">
            Discuss
          </h1>
        </div>

        {/* Glassmorphic Form */}
        <div className="relative z-20 xl:p-6 xl:mt-[-2.5rem] 2xl:mt-[-3.3rem] xs:mt-[-2.7rem] w-full p-5 border-gray-300 border-2
                        2xl:w-[95%] xl:w-[80%] md:w-[90%] sm:mt-[-2.5rem] xss:mb-[2.5rem]
                        xs:w-[100%] xs:p-3 xs:leading-none xss:mt-[-2.9rem]
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
      country={"in"} // Default India
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
      <p className="text-xs text-red-500 mt-1">Phone Number is required.</p>
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
      <p className="text-xs text-red-500 mt-1">Please select one option.</p>
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
      <p className="text-xs text-red-500 mt-1">Message is required.</p>
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
