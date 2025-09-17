"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaLock, FaDollarSign, FaUsers, FaRocket, FaSmile, FaCog, FaHeadset, FaTools, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Guarantees() {
  const guarantees = [
    {
      title: "Confidentiality with NDA",
      text: "Non-Disclosure Agreement (NDA) that will ensure privacy",
      bg: "bg-[#F5F5DC]",
      textColor: "text-[#4682B4]",
      icon: <FaLock />,
    },
    {
      title: "Affordable App Development",
      text: "Budget-friendly design and development",
      bg: "bg-[#CD5C5C]",
      textColor: "text-white",
      icon: <FaDollarSign />,
    },
    {
      title: "Expert Development Team",
      text: "Support from a proven team of experts",
      bg: "bg-[#6B8E23]",
      textColor: "text-white",
      icon: <FaUsers />,
    },
    {
      title: "Fast Mobile App Delivery",
      text: "Quick development of the mobile application based on your need",
      bg: "bg-[#DEB887]",
      textColor: "text-[#2F4F4F]",
      icon: <FaRocket />,
    },
    {
      title: "User-Friendly UI/UX",
      text: "Development of a user-friendly and interactive app",
      bg: "bg-[#FF6F61]",
      textColor: "text-white",
      icon: <FaSmile />,
    },
    {
      title: "Seamless Performance",
      text: "Fault-free execution, even during concurrent operation by different users",
      bg: "bg-[#D3D3D3]",
      textColor: "text-[#2F4F4F]",
      icon: <FaCog />,
    },
    {
      title: "Quick Response Support",
      text: "Swift response",
      bg: "bg-[#4682B4]",
      textColor: "text-white",
      icon: <FaHeadset />,
    },
    {
      title: "Custom-Tailored Solutions",
      text: "Custom-tailored applications suiting your needs",
      bg: "bg-[#2F4F4F]",
      textColor: "text-white",
      icon: <FaTools />,
    },
  ];

  const row1 = guarantees.slice(0, 3);
  const row2 = guarantees.slice(3, 6);
  const row3 = guarantees.slice(6, 8);

  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleCardClick = (idx) => {
    setFlippedIndex(flippedIndex === idx ? null : idx);
  };

  const renderRow = (items, startIndex) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: startIndex * 0.1 }}
      className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
    >
      {items.map((item, idx) => {
        const globalIndex = startIndex + idx;
        const isFlipped = flippedIndex === globalIndex;

        return (
          <motion.div
            key={globalIndex}
            className="w-full h-[6rem] sm:h-[7rem] md:h-[8rem] cursor-pointer perspective group"
            whileHover={{ scale: 1.05 }}
            onClick={() => handleCardClick(globalIndex)}
          >
            <div
              className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                isFlipped ? "rotate-y-180" : ""
              }`}
            >
              {/* FRONT SIDE */}
              <div
                className={`${item.bg} ${item.textColor} absolute inset-0 flex items-center justify-center p-4 text-center rounded-xl border-2 border-dashed border-gray-400 shadow-lg backface-hidden patchwork-texture`}
              >
                <div className="flex items-center space-x-2">
                  <span className="text-xl">{item.icon}</span>
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold font-poppins">{item.title}</h3>
                </div>
              </div>

              {/* BACK SIDE */}
              <div
                className={`${item.bg} ${item.textColor} absolute inset-0 flex items-center justify-center p-4 text-center rounded-xl border-2 border-dashed border-gray-400 shadow-lg rotate-y-180 backface-hidden patchwork-texture`}
              >
                <p className="text-xs sm:text-sm font-open-sans">{item.text}</p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );

  return (
    <section className="px-4 sm:px-6 lg:px-20 py-12 bg-[#F5F5DC]">
      <div className="max-w-6xl mx-auto">
        {/* Main Heading */}
        <div className="text-center">
          <h1
            className="font-poppins font-bold text-[#4682B4] text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4"
          >
            Analogue IT Solutions - Best Mobile App Development Services in Hyderabad
          </h1>
          <div className="relative my-4">
            <hr className="border-t-2 border-dashed border-[#4682B4]" />
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#F5F5DC] px-4 text-[#4682B4] font-poppins">
              ✦
            </span>
          </div>
        </div>

        {/* Paragraph */}
        <p
          className="mt-4 text-sm sm:text-base md:text-lg text-[#7B7E86] leading-relaxed font-open-sans text-justify sm:text-left"
        >
          Analogue has achieved the name and fame of being the best mobile app
          development company in Hyderabad, by organising and formulating a
          client-centric process. Our teams will collaborate, brainstorm, and
          get the leading strategies for planning and creating a mobile
          application.
          <br />
          We are dedicated to crafting mobile applications that are engaging,
          intuitive, well-structured, innovative, and distinctive. Our goal is
          to capture the essence and ambiance of the respective business through
          a blend of essential design patterns and sophisticated style elements.
          Being the premier mobile app development company in Hyderabad, India.
        </p>

        {/* Guarantees Heading */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center font-poppins text-[#4682B4] my-8">
          Analogue Guarantees the Following:
        </h2>

        {/* Card Rows */}
        {renderRow(row1, 0)}
        {renderRow(row2, 3)}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {row3.map((item, idx) => {
            const globalIndex = 6 + idx;
            const isFlipped = flippedIndex === globalIndex;

            return (
              <motion.div
                key={globalIndex}
                className="w-full h-[6rem] sm:h-[7rem] md:h-[8rem] cursor-pointer perspective group"
                whileHover={{ scale: 1.05 }}
                onClick={() => handleCardClick(globalIndex)}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                    isFlipped ? "rotate-y-180" : ""
                  }`}
                >
                  {/* FRONT SIDE */}
                  <div
                    className={`${item.bg} ${item.textColor} absolute inset-0 flex items-center justify-center p-4 text-center rounded-xl border-2 border-dashed border-gray-400 shadow-lg backface-hidden patchwork-texture`}
                  >
                    <div className="flex items-center space-x-2">
                      <span className="text-xl">{item.icon}</span>
                      <h3 className="text-sm sm:text-base md:text-lg font-semibold font-poppins">{item.title}</h3>
                    </div>
                  </div>

                  {/* BACK SIDE */}
                  <div
                    className={`${item.bg} ${item.textColor} absolute inset-0 flex items-center justify-center p-4 text-center rounded-xl border-2 border-dashed border-gray-400 shadow-lg rotate-y-180 backface-hidden patchwork-texture`}
                  >
                    <p className="text-xs sm:text-sm font-open-sans">{item.text}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer */}
        <footer className="mt-12 bg-[#4682B4] text-white py-6 rounded-xl">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-bold font-poppins">Analogue IT Solutions</h3>
              <p className="text-sm font-open-sans">© 2025 All Rights Reserved</p>
            </div>
            <div className="flex space-x-4">
              <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-xl hover:text-[#FF6F61]" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-xl hover:text-[#FF6F61]" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}