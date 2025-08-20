// "use client";
// import React, { useState } from "react";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";

// export default function PopUpForm({ isOpen, onClose }) {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     reach: "",
//     message: "",
//   });
//   const [touched, setTouched] = useState({});

//   if (!isOpen) return null;

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((s) => ({ ...s, [name]: value }));
//   };

//   const handleBlur = (e) => setTouched((s) => ({ ...s, [e.target.name]: true }));
//   const isError = (field) => touched[field] && !formData[field];

//   return (
//     <div
//       className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/30 backdrop-blur-[2px] px-4"
//       aria-modal="true"
//       role="dialog"
//       onClick={(e) => {
//         if (e.target === e.currentTarget) onClose();
//       }}
//     >
//       {/* Modal Container */}
//       <div className="relative text-xl p-2 w-full max-w-[700px] lg:max-w-[720px] rounded-3xl shadow-lg overflow-hidden">
        
//         {/* Mild Gradient Background */}
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-pink-50 to-gray-100"></div>

//         {/* Form Content */}
//         <div className="relative p-6 md:p-10">
//           {/* Close Button */}
//           <button
//             onClick={onClose}
//             type="button"
//             className="absolute top-3 right-3 text-gray-700 hover:text-black focus:outline-none">
//             ✕
//           </button>

//           {/* Header */}
//           <h2 className="text-lg text-blue-700 font-semibold mb-1">
//             Let Us Elevate Your Projects
//           </h2>
//           <p className="text-xs text-gray-700 mb-4">
//             Get a Quote from a Top Mobile App Development Company
//           </p>

//           {/* Form */}
          
// <form className="space-y-7 space-x-2">
//   {/* Two-Column Fields */}
//   <div className="grid grid-cols-1 text-lg sm:grid-cols-2 gap-4">
//     {[
//       { name: "name", type: "text", placeholder: "Your Name*" },
//       { name: "email", type: "email", placeholder: "Your Email*" },
//       { name: "subject", type: "text", placeholder: "Subject*" },
//     ].map((field, i) => (
//       <div key={i}>
//         <input
//           {...field}
//           value={formData[field.name]}
//           onChange={handleChange}
//           onBlur={handleBlur}
//           className={`bg-transparent border-b focus:outline-none text-gray-800 placeholder-black text-sm py-2 w-full ${
//             isError(field.name)
//               ? "border-red-500 text-red-600"
//               : "border-gray-800"
//           }`}
//         />
//         {isError(field.name) &&
//           field.placeholder.includes("*") && (
//             <p className="text-xs text-red-500 mt-1">
//               {field.placeholder.replace("*", "")} is required.
//             </p>
//           )}
//       </div>
//     ))}

//     {/* Mobile Number Field with Flag & Code */}
//     <div>
//       <PhoneInput
//         country={"in"}
//         value={formData.phone}
//         onChange={(phone) =>
//           setFormData((prev) => ({ ...prev, phone }))
//         }
//         countryCodeEditable={false}
//         enableSearch={true}
//         inputClass="!bg-transparent !border-none !focus:outline-none !text-sm !w-full !pl-12 !text-gray-800"
//         buttonClass="!bg-transparent !border-none !outline-none"
//         containerClass={`!border-b !pb-1 ${
//           isError("phone") ? "!border-red-500" : "!border-gray-800"
//         }`}
//         dropdownClass="!bg-white !text-sm"
//         placeholder="Your Mobile Number*"
//       />
//       {isError("phone") && (
//         <p className="text-xs text-red-500 mt-1">
//           Mobile Number is required.
//         </p>
//       )}
//     </div>
//   </div>

//   {/* Full Width Dropdown */}
//   <div>
//     <p className="text-black text-sm">How Do You Reach Us?</p>
//     <select
//       name="reach"
//       value={formData.reach}
//       onChange={handleChange}
//       onBlur={handleBlur}
//       className={`bg-transparent border-b focus:outline-none text-gray-800 text-xs placeholder-black py-2 w-full ${
//         isError("reach")
//           ? "border-red-500 text-red-600"
//           : "border-gray-800"
//       }`}
//     >
//       <option value="">Select an option</option>
//       <option>Google</option>
//       <option>Facebook</option>
//       <option>Instagram</option>
//       <option>LinkedIn</option>
//       <option>Others</option>
//     </select>
//     {isError("reach") && (
//       <p className="text-xs text-red-500 mt-1">
//         Please select one option.
//       </p>
//     )}
//   </div>

//   {/* Full Width Textarea */}
//   <div>
//     <textarea
//       name="message"
//       placeholder="Message*"
//       rows={3}
//       value={formData.message}
//       onChange={handleChange}
//       onBlur={handleBlur}
//       className={`bg-transparent border-b focus:outline-none text-gray-800 text-sm placeholder-black py-2 w-full ${
//         isError("message")
//           ? "border-red-500 text-red-600"
//           : "border-gray-800"
//       }`}
//     />
//     {isError("message") && (
//       <p className="text-xs text-red-500 mt-1">Message is required.</p>
//     )}
//   </div>

//   {/* Left-Aligned Button */}
//   <div>
//     <button
//       type="submit"
//       className="px-5 py-2 bg-blue-500 rounded-full text-white hover:bg-blue-600 transition text-sm"
//     >
//       Get A Quote
//     </button>
//   </div>
// </form>
//         </div>
//       </div>
//     </div>
//   );
// }



"use client";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function PopUpForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    reach: "",
    message: "",
  });
  const [touched, setTouched] = useState({});

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
  };

  const handleBlur = (e) => setTouched((s) => ({ ...s, [e.target.name]: true }));
  const isError = (field) => touched[field] && !formData[field];

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/30 backdrop-blur-[2px] px-4"
      aria-modal="true"
      role="dialog"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          e.stopPropagation(); // Prevent outer div click from bubbling further
          onClose();
        }
      }}
    >
      {/* Modal Container */}
      <div className="relative text-xl p-2 w-full max-w-[700px] lg:max-w-[720px] rounded-3xl shadow-lg overflow-hidden">
        {/* Mild Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-pink-50 to-gray-100"></div>

        {/* Form Content */}
        <div className="relative p-6 md:p-10">
          {/* Close Button */}
          <button
  onClick={(e) => {
    e.stopPropagation();
    e.preventDefault();
    onClose();
  }}
  type="button"
  className="absolute top-3 right-3 text-gray-700 hover:text-black focus:outline-none"
>
  ✕
</button>

          {/* Header */}
          <h2 className="text-lg text-blue-700 font-semibold mb-1">
            Let Us Elevate Your Projects
          </h2>
          <p className="text-xs text-gray-700 mb-4">
            Get a Quote from a Top Mobile App Development Company
          </p>

          {/* Form */}
          <form className="space-y-7 space-x-2">
            {/* Two-Column Fields */}
            <div className="grid grid-cols-1 text-lg sm:grid-cols-2 gap-4">
              {[
                { name: "name", type: "text", placeholder: "Your Name*" },
                { name: "email", type: "email", placeholder: "Your Email*" },
                { name: "subject", type: "text", placeholder: "Subject*" },
              ].map((field, i) => (
                <div key={i}>
                  <input
                    {...field}
                    value={formData[field.name]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`bg-transparent border-b focus:outline-none text-gray-800 placeholder-black text-sm py-2 w-full ${
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

              {/* Mobile Number Field with Flag & Code */}
              <div>
                <PhoneInput
                  country={"in"}
                  value={formData.phone}
                  onChange={(phone) =>
                    setFormData((prev) => ({ ...prev, phone }))
                  }
                  countryCodeEditable={false}
                  enableSearch={true}
                  inputClass="!bg-transparent !border-none !focus:outline-none !text-sm !w-full !pl-12 !text-gray-800"
                  buttonClass="!bg-transparent !border-none !outline-none"
                  containerClass={`!border-b !pb-1 ${
                    isError("phone") ? "!border-red-500" : "!border-gray-800"
                  }`}
                  dropdownClass="!bg-white !text-sm"
                  placeholder="Your Mobile Number*"
                />
                {isError("phone") && (
                  <p className="text-xs text-red-500 mt-1">
                    Mobile Number is required.
                  </p>
                )}
              </div>
            </div>

            {/* Full Width Dropdown */}
            <div>
              <p className="text-black text-sm">How Do You Reach Us?</p>
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
                <option value="">Select an option</option>
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

            {/* Full Width Textarea */}
            <div>
              <textarea
                name="message"
                placeholder="Message*"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`bg-transparent border-b focus:outline-none text-gray-800 text-sm placeholder-black py-2 w-full ${
                  isError("message")
                    ? "border-red-500 text-red-600"
                    : "border-gray-800"
                }`}
              />
              {isError("message") && (
                <p className="text-xs text-red-500 mt-1">Message is required.</p>
              )}
            </div>

            {/* Left-Aligned Button */}
            <div>
              <button
                type="submit"
                className="px-5 py-2 bg-blue-500 rounded-full text-white hover:bg-blue-600 transition text-sm"
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