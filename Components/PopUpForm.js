// "use client";
// import React, { useState,useEffect } from "react";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
// import { useRouter } from "next/navigation";
// import { FiRefreshCcw } from "react-icons/fi"; 

// export default function PopUpForm({ isOpen, onClose }) {
//   const router = useRouter();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     reach: "",
//     message: "",
//     captchaInput: "",
//   });
//   const [touched, setTouched] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((s) => ({ ...s, [name]: value }));
//   };

// const handleBlur = (e) => {
//   const { name } = e.target;
//   setTouched((s) => ({ ...s, [name]: true }));
// };

// const isError = (field) => touched[field] && !formData[field];
  

// const isValidPhone = (phone) => {
//   // Remove +91 or 91 and non-digits
//   const num = phone.replace(/^\+?91/, "").replace(/\D/g, "");
//   console.log("isValidPhone input:", phone, "cleaned:", num); // Debug log
//   // Must be exactly 10 digits, starting with 6–9
//   return /^[6-9]\d{9}$/.test(num);
// };


//     // capcha generation
//      const [captcha, setCaptcha] = useState("");
//      const [captchaError, setCaptchaError] = useState(""); 
  
//     // Generate captcha on mount
//     useEffect(() => {
//       generateCaptcha();
//     }, []);
  
//     const generateCaptcha = () => {
//       const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//       let code = "";
//       for (let i = 0; i < 6; i++) {
//         code += chars.charAt(Math.floor(Math.random() * chars.length));
//       }
//       setCaptcha(code);
//     };
  
// const handleSubmit = (e) => {
//   e.preventDefault();

//   const requiredFields = ["name", "phone", "subject", "reach", "message"];
//   let hasError = false;

//   // check empty fields
//   requiredFields.forEach((field) => {
//     if (!formData[field]) {
//       setTouched((prev) => ({ ...prev, [field]: true }));
//       hasError = true;
//     }
//   });

//   // phone validation (force touched)
//   if (!isValidPhone(formData.phone)) {
//     setTouched((prev) => ({ ...prev, phone: true }));
//     hasError = true; // <-- important
//   }

//   if (hasError) {
//     console.log("❌ Invalid input, form blocked");
//     return;
//   }

//   // captcha validation
//   if (!formData.captchaInput) {
//     setCaptchaError("Enter captcha");
//     return;
//   }

//   if (formData.captchaInput !== captcha) {
//     setCaptchaError("Enter valid captcha");
//     generateCaptcha();
//     return;
//   }

//   setCaptchaError("");
//   onClose();
//   router.push("/Dummy");
// };

//       if (!isOpen) return null;


//   return (
//     <div
//       className="fixed inset-0 z-[1000] flex items-center border-white justify-center bg-black/30 backdrop-blur-[2px] px-4"
//       aria-modal="true"
//       role="dialog"
//       onClick={(e) => {
//         if (e.target === e.currentTarget) {
//           e.stopPropagation();
//           onClose();
//         }
//       }}
//     >
//       {/* Modal Container */}
//       <div className="relative text-xl p-2 w-full max-w-[700px] lg:max-w-[720px] max-h-[80vh] overflow-y-auto rounded-3xl shadow-lg bg-gradient-to-br from-blue-100 via-pink-50 to-gray-100">
//         {/* Form Content */}
//         <div className="relative p-2 md:p-10 xss:px-5">
//           {/* Close Button */}
//           <button
//             onClick={(e) => {
//               e.stopPropagation();
//               e.preventDefault();
//               onClose();
//             }}
//             type="button"
//             className="absolute top-3 cursor-pointer right-3 text-gray-700 hover:text-black focus:outline-none z-10"
//           >
//             ✕
//           </button>

//           {/* Header */}
//           {/* Form Header */}
//           <h2 className="text-lg text-blue-700 font-semibold mb-1 xs:text-sm">
//             Let Us Elevate Your Projects With Our Skills
//           </h2>
//           <p className="text-xs text-gray-700 mb-4">
//             Get a Quote from a Top Mobile App Development Company
//           </p>


//            {/* Form Fields */}
//        <form onSubmit={handleSubmit}
//        className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-2 2xl:gap-5 xs:gap-2 overflow-hidden">
//             {[
//               { name: "name", type: "text", placeholder: "Your Name*" },
//               { name: "email", type: "email", placeholder: "Your Email" },
//               { name: "subject", type: "text", placeholder: "Subject*" },
//             ].map((field, i) => (
//               <div key={i}>
//                 <input
//                   {...field}
//                   value={formData[field.name]}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   className={`bg-transparent border-b focus:outline-none text-gray-800 placeholder-black text-xs py-2 w-full ${
//                     isError(field.name)
//                       ? "border-black-500 text-blue-600"
//                       : "border-gray-800"
//                   }`}
//                 />
//                 {isError(field.name) && field.placeholder.includes("*") && (
//                   <p className="text-xs text-red-500 mt-1">
//                     {field.placeholder.replace("*", "")} is required.
//                   </p>
//                 )}
//               </div>
//             ))}


//             <div>
//               <PhoneInput
//                 country={"in"}
//                 value={formData.phone}
//                 onChange={(phone) => {
//                   setFormData((prev) => ({ ...prev, phone }));
//                   setTouched((prev) => ({ ...prev, phone: true }));
//                 }}
//                 countryCodeEditable={false}
//                 enableSearch={true}
//                 inputClass="!bg-transparent !border-none !focus:outline-none !text-xs !w-full !pl-12 !text-gray-800 placeholder-black"
//                 buttonClass="!bg-transparent !border-none !outline-none"
//                 containerClass={`!border-b !pb-1 ${
//                   touched.phone && formData.phone && !isValidPhone(formData.phone)
//                     ? "!border-red-500 !text-red-600"
//                     : "!border-gray-800"
//                 }`}
//                 dropdownClass="!bg-white !text-xs"
//                 placeholder="Phone Number*"
//                 onBlur={() => setTouched((prev) => ({ ...prev, phone: true }))}
//               />
//               {touched.phone && formData.phone && !isValidPhone(formData.phone) && (
//                 <p className="text-xs text-red-500 mt-1">Please enter a valid number.</p>
//               )}
//             </div>



//             <div className="md:col-span-2">
//               <select
//                 name="reach"
//                 value={formData.reach}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 className={`bg-transparent border-b focus:outline-none text-gray-800 text-xs placeholder-black py-2 w-full ${
//                   isError("reach")
//                     ? "border-black-500 text-black-600"
//                     : "border-gray-800"
//                 }`}
//               >
//                 <option value="">How Do You Reach Us?</option>
//                 <option>Google</option>
//                 <option>Facebook</option>
//                 <option>Instagram</option>
//                 <option>LinkedIn</option>
//                 <option>Others</option>
//               </select>
//               {isError("reach") && (
//                 <p className="text-xs text-red-500 mt-1">
//                   Please select one option.
//                 </p>
//               )}
//             </div>

//                         {/* Message */}
//             <div className="md:col-span-2">
//               <textarea
//                 name="message"
//                 placeholder="Your Message*"
//                 rows={3}
//                 value={formData.message}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 className={`bg-transparent border-b focus:outline-none text-gray-800 text-xs placeholder-black py-2 w-full ${
//                   isError("message") ? "border-red-500 text-red-600" : "border-gray-800"
//                 }`}
//               />
//               {isError("message") && <p className="text-xs text-red-500 mt-1">Message is required.</p>}
//             </div>

//             {/* Captcha Section */}
//             <div className="md:col-span-2 flex flex-col gap-2">
//               {/* Row 1: Captcha text + Refresh button */}
//               <div className="flex items-center gap-2">
//                 <span className="px-4 py-2 bg-white text-black rounded-md font-mono xss:text-sm lg:text-lg w-fit tracking-widest">
//                   {captcha}
//                 </span>
//                 <button
//                   type="button"
//                   onClick={generateCaptcha}
//                   className="px-2 py-2 bg-gray-200 bg-white text-black rounded-md xss:text-sm lg:text-lg font-bold hover:bg-gray-300"
//                 >
//                   <FiRefreshCcw className="text-black xss:text-sm lg:text-base rounded-full font-semibold" />
//                 </button>
//               </div>

//               {/* Row 2: Input field */}
//               <input
//                 type="text"
//                 name="captchaInput"
//                 value={formData.captchaInput}
//                 onChange={handleChange}
//                 placeholder="Enter Captcha"
//                 className={`border-b bg-transparent focus:outline-none text-xs text-gray-800 placeholder-black py-2 xss:w-1/2 md:w-1/4 xl:w-1/8 ${captchaError ? "border-red-500 text-red-600" : ""}`}
//               />
//               {/* Error message below input */}
//               {captchaError && <p className="text-xs text-red-500">{captchaError}</p>}
//             </div>



//             <div className="col-span-1 md:grid-cols-2 flex justify-start mt-2">
//               <button type="submit" className="px-4 py-2 bg-blue-500 rounded-full text-white hover:bg-blue-600 transition xss:text-xs lg:text-sm">
//                 Get A Quote
//               </button>
//             </div>
//           </form>
//         </div>

//         {/* Inline CSS for Landscape Mode */}
//         <style jsx>{`
//           /* Ensure form fits in landscape mode on phones */
//           @media screen and (max-height: 500px) and (orientation: landscape) {
//             .relative.text-xl.p-2 {
//               max-height: 70vh;
//               padding: 1rem;
//             }
//             .relative.p-6.md\\:p-10 {
//               padding: 1rem;
//             }
//             .text-lg {
//               font-size: 0.875rem; /* Reduce font size for fields */
//             }
//             .text-sm {
//               font-size: 0.75rem; /* Reduce font size for labels */
//             }
//             .text-xs {
//               font-size: 0.625rem; /* Reduce font size for error messages */
//             }
//             .absolute.top-3.right-3 {
//               top: 0.5rem;
//               right: 0.5rem;
//               font-size: 1rem;
//             }
//           }

//           /* Tablets in landscape */
//           @media screen and (min-width: 768px) and (orientation: landscape) {
//             .relative.text-xl.p-2 {
//               max-height: 85vh;
//             }
//           }
//         `}</style>
//       </div>
//     </div>
//   );
// }



"use client";
import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useRouter } from "next/navigation";
import { FiRefreshCcw } from "react-icons/fi";
import { toast } from "react-toastify";
import { HelloLeadsAPI } from "@/utils/Tool";

// ✅ Import API function
import { TestForm } from "@/utils/APICalling";

export default function PopUpForm({ isOpen, onClose }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "", 
  dialCode: "",    
  countryName: "",   
  subject: "",
  reach: "",   
  message: "",
  captchaInput: "",
});

  const [touched, setTouched] = useState({});
  const [captcha, setCaptcha] = useState("");
  const [captchaError, setCaptchaError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((s) => ({ ...s, [name]: true }));
  };

  const isError = (field) => touched[field] && !formData[field];

const isValidPhone = (phone, country) => {
  if (!country) return false;

  // Remove all non-digits
  let num = phone.replace(/\D/g, "");

  // Strict rule for India (+91)
  if (country.dialCode === "91") {
    // Remove the dial code prefix if it exists
    if (num.startsWith("91")) {
      num = num.slice(2);
    }
    return /^[6-9]\d{9}$/.test(num); // must start 6-9 and be exactly 10 digits
  }

  // Generic rule for other countries
  const expectedLength = (country.format.match(/\./g) || []).length;
  return num.length === expectedLength;
};


  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let code = "";
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha(code);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requiredFields = ["name", "phone", "subject", "reach", "message"];
    let hasError = false;

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        setTouched((prev) => ({ ...prev, [field]: true }));
        hasError = true;
      }
    });

    if (!isValidPhone(formData.phone)) {
      setTouched((prev) => ({ ...prev, phone: true }));
      hasError = true;
    }

    if (hasError) return;

    if (!formData.captchaInput) {
      setCaptchaError("Enter captcha");
      return;
    }
    if (formData.captchaInput !== captcha) {
      setCaptchaError("Enter valid captcha");
      generateCaptcha();
      return;
    }

    setCaptchaError("");

    // ✅ API Call using GetQuotation
    try {
      const payload = {
      name: formData.name,
      email: formData.email,
      phoneNumber: formData.phone,  // ✅ mapping
      subject: formData.subject,
      reachUs: formData.reach,      // ✅ mapping
      message: formData.message,
    };

   // 👉 Second API (HelloLeads)
    const countryData = {
      dialCode: formData.dialCode,   // "91"
      name: formData.countryName,    // "India"
    };

    try {
  const response = await TestForm(payload);
  console.log("✅ API Response:", response);
} catch (err) {
  console.error("❌ TestForm failed:", err);
}

try {
  const crmResponse = await HelloLeadsAPI(payload, countryData);
  console.log("✅ CRM API Response:", crmResponse);
} catch (err) {
  console.error("❌ HelloLeads failed:", err);
}

      toast.success("Your request has been submitted!", {
        position: "bottom-center",
        autoClose: 4000,
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        reach: "",
        message: "",
        captchaInput: "",
      });
      generateCaptcha();
      onClose();
      router.push("/Dummy"); // keep redirect
    } catch (error) {
      toast.error("Something went wrong. Please try again.", {
        position: "bottom-center",
        autoClose: 4000,
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center border-white justify-center bg-black/30 backdrop-blur-[2px] px-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          e.stopPropagation();
          onClose();
        }
      }}
    >
      {/* Modal Container */}
      <div className="relative text-xl p-2 w-full max-w-[700px] lg:max-w-[720px] max-h-[80vh] overflow-y-auto rounded-3xl shadow-lg bg-gradient-to-br from-blue-100 via-pink-50 to-gray-100">
        {/* Form Content */}
        <div className="relative p-2 md:p-10 xss:px-5">
          {/* Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              onClose();
            }}
            type="button"
            className="absolute top-3 cursor-pointer right-3 text-gray-700 hover:text-black focus:outline-none z-10"
          >
            ✕
          </button>

          {/* Header */}
          {/* Form Header */}
          <h2 className="text-lg text-blue-700 font-semibold mb-1 xs:text-sm">
            Let Us Elevate Your Projects With Our Skills
          </h2>
          <p className="text-xs text-gray-700 mb-4">
            Get a Quote from a Top Mobile App Development Company
          </p>


           {/* Form Fields */}
       <form onSubmit={handleSubmit}
       className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-2 2xl:gap-5 xs:gap-2 overflow-hidden">
            {[
              { name: "name", type: "text", placeholder: "Your Name*", id: "name"},
              { name: "email", type: "email", placeholder: "Your Email", id: "email" },
              { name: "subject", type: "text", placeholder: "Subject*", id: "subject" },
            ].map((field, i) => (
              <div key={i}>
                <input
                  {...field}
                  value={formData[field.name]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`bg-transparent border-b focus:outline-none text-gray-800 placeholder-black text-xs py-2 w-full ${
                    isError(field.name)
                      ? "border-black-500 text-blue-600"
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


            <div>
              <PhoneInput
                country={"in"}
                value={formData.phone}
                onChange={(value, country) => {
                setFormData((prev) => ({
                  ...prev,
                  phone: value,             
                  dialCode: country.dialCode,
                  countryName: country.name,   
                  countryFormat: country.format,
                }));
                setTouched((prev) => ({ ...prev, phone: true }));
              }}
                countryCodeEditable={false}
                enableSearch={true}
                inputClass="!bg-transparent !border-none !focus:outline-none !text-xs !w-full !pl-12 !text-gray-800 placeholder-black"
                buttonClass="!bg-transparent !border-none !outline-none"
                containerClass={`!border-b !pb-1 ${
                  touched.phone && formData.phone && !isValidPhone(formData.phone)
                    ? "!border-red-500 !text-red-600"
                    : "!border-gray-800"
                }`}
                dropdownClass="!bg-white !text-xs"
                placeholder="Phone Number*" name="phoneNumber" id="phoneNumber" 
                onBlur={() => setTouched((prev) => ({ ...prev, phone: true }))}
              />
              {touched.phone && formData.phone && !isValidPhone(formData.phone, { dialCode: formData.dialCode, format: formData.countryFormat }) && (
                <p className="text-xs text-red-500 mt-1">Please enter a valid number.</p>
              )}
            </div>



            <div className="md:col-span-2">
              <select
                name="reach"
                value={formData.reach}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`bg-transparent border-b focus:outline-none text-gray-800 text-xs placeholder-black py-2 w-full ${
                  isError("reach")
                    ? "border-black-500 text-black-600"
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

            {/* Message */}
            <div className="md:col-span-2">
              <textarea
                name="message"
                placeholder="Your Message*"
                id="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`bg-transparent border-b focus:outline-none text-gray-800 text-xs placeholder-black py-2 w-full ${
                  isError("message") ? "border-red-500 text-red-600" : "border-gray-800"
                }`}/>
              {isError("message") && <p className="text-xs text-red-500 mt-1">Message is required.</p>}
            </div>

            {/* Captcha Section */}
            <div className="md:col-span-2 flex flex-col gap-2">
              {/* Row 1: Captcha text + Refresh button */}
              <div className="flex items-center gap-2">
                <span className="px-4 py-2 bg-white text-black rounded-md font-mono xss:text-sm lg:text-lg w-fit tracking-widest">
                  {captcha}
                </span>
                <button
                  type="button"
                  onClick={generateCaptcha}
                  className="px-2 py-2 bg-gray-200 bg-white text-black rounded-md xss:text-sm lg:text-lg font-bold hover:bg-gray-300"
                >
                  <FiRefreshCcw className="text-black xss:text-sm lg:text-base rounded-full font-semibold" />
                </button>
              </div>

              {/* Row 2: Input field */}
              <input
                type="text"
                name="captchaInput"
                value={formData.captchaInput}
                onChange={handleChange}
                placeholder="Enter Captcha"
                id="captchaInput"
                className={`border-b bg-transparent focus:outline-none text-xs text-gray-800 placeholder-black py-2 xss:w-1/2 md:w-1/4 xl:w-1/8 ${captchaError ? "border-red-500 text-red-600" : ""}`}
              />
              {/* Error message below input */}
              {captchaError && <p className="text-xs text-red-500">{captchaError}</p>}
            </div>



            <div className="col-span-1 md:grid-cols-2 flex justify-start mt-2">
              <button type="submit" className="px-4 py-2 bg-blue-500 rounded-full text-white hover:bg-blue-600 transition xss:text-xs lg:text-sm">
                Get A Quote
              </button>
            </div>
          </form>
        </div>

        {/* Inline CSS for Landscape Mode */}
        <style jsx>{`
          /* Ensure form fits in landscape mode on phones */
          @media screen and (max-height: 500px) and (orientation: landscape) {
            .relative.text-xl.p-2 {
              max-height: 70vh;
              padding: 1rem;
            }
            .relative.p-6.md\\:p-10 {
              padding: 1rem;
            }
            .text-lg {
              font-size: 0.875rem; /* Reduce font size for fields */
            }
            .text-sm {
              font-size: 0.75rem; /* Reduce font size for labels */
            }
            .text-xs {
              font-size: 0.625rem; /* Reduce font size for error messages */
            }
            .absolute.top-3.right-3 {
              top: 0.5rem;
              right: 0.5rem;
              font-size: 1rem;
            }
          }

          /* Tablets in landscape */
          @media screen and (min-width: 768px) and (orientation: landscape) {
            .relative.text-xl.p-2 {
              max-height: 85vh;
            }
          }
        `}</style>
    </div>
  </div>
  );
}
