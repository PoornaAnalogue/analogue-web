
"use client";
import { useState } from "react";

export default function Guarantees() {
  const guarantees = [
    {
      title: "Confidentiality with NDA",
      text: "Non-Disclosure Agreement (NDA) that will ensure privacy",
      bg: "bg-blue-100",
      textColor: "text-[#2C5A88]",
    },
    {
      title: "Affordable App Development",
      text: "Budget-friendly design and development",
      bg: "bg-purple-100",
      textColor: "text-[#26175C]",
    },
    {
      title: "Expert Development Team",
      text: "Support from a proven team of experts",
      bg: "bg-[#FFF3E3]",
      textColor: "text-[#5E3B0B]",
    },
    {
      title: "Fast Mobile App Delivery",
      text: "Quick development of the mobile application based on your need",
      bg: "bg-green-100",
      textColor: "text-[#276014]",
    },
    {
      title: "User-Friendly UI/UX",
      text: "Development of a user-friendly and interactive app",
      bg: "bg-[#FFE3FA]",
      textColor: "text-[#2C5A88]",
    },
    {
      title: "Seamless Performance",
      text: "Fault-free execution, even during concurrent operation by different users",
      bg: "bg-[#FFE3E3]",
      textColor: "text-[#570F0F]",
    },
    {
      title: "Quick Response Support",
      text: "Swift response",
      bg: "bg-[#FBFFE3]",
      textColor: "text-[#5F6E0B]",
    },
    {
      title: "Custom-Tailored Solutions",
      text: "Custom-tailored applications suiting your needs",
      bg: "bg-[#E3FFF5]",
      textColor: "text-[#106849]",
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
    <div className="mt-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((item, idx) => {
        const globalIndex = startIndex + idx;
        const isFlipped = flippedIndex === globalIndex;

        return (
          <div
            key={globalIndex}
            className="w-full xss:h-[3rem] md:h-[4rem] xl:h-[5rem] cursor-pointer perspective group"
            onClick={() => handleCardClick(globalIndex)}
          >
            <div
              className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${
                isFlipped ? "rotate-y-180" : "group-hover:rotate-y-180"
              }`}
            >
              {/* FRONT SIDE */}
              <div
                className={`${item.bg} ${item.textColor} absolute inset-0 flex items-center justify-center p-4 text-center rounded-xl border border-gray-300 shadow-md backface-hidden`}
              >
                <h3 className="text-sm md:text-base font-semibold">{item.title}</h3>
              </div>

              {/* BACK SIDE */}
              <div
                className={`${item.bg} ${item.textColor} absolute inset-0 flex items-center justify-center p-4 text-center rounded-xl border border-gray-300 shadow-md rotate-y-180 backface-hidden`}
              >
                <p className="text-xs md:text-sm">{item.text}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <section className="px-4 sm:px-6 lg:px-20 py-10 bg-white">
       <div className="max-w-6xl mx-auto">
        {/* Main Heading */}
        <h1
          className="
            text-lg xss:text-xs sm:text-base md:text-xl lg:text-subnormal xl:text-subnormal 3xl:text-subheading
            font-medium text-[#0D6EFD] leading-snug
            text-center lg:text-left
            whitespace-normal
          "
        >
          Analogue IT Solutions - Best Mobile App Development Application
          Services in Hyderabad
        </h1>
 
        {/* Paragraph */}
        <p
          className="
            mt-4 text-subsmall sm:text-small md:text-subbody lg:text-subbody xl:text-tracking-wide 2xl:text-md 2xl:leading-8 3xl:text-subbody
            text-[#7B7E86] leading-relaxed font-medium
            text-justify sm:text-left">
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
        </p><br/><br />
      <h2 className="text-2xl xss:text-xs xss:mt-[-1rem] lg:text-lg sm:text-base font-semibold text-center lg:text-2xl xss:text-lg text-blue-600 mb-8">
        Analogue Guarantees the following : 
      </h2>

      {/* First 2 rows */}
      {renderRow(row1, 0)}
      {renderRow(row2, 3)}

      {/* Third row - last 2 items, centered */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {row3.map((item, idx) => {
          const globalIndex = 6 + idx;
          const isFlipped = flippedIndex === globalIndex;

          return (
            <div
              key={globalIndex}
              className="w-full xss:h-[3rem] md:h-[4rem] xl:h-[5rem] cursor-pointer perspective group"
              onClick={() => handleCardClick(globalIndex)}
            >
              <div
                className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${
                  isFlipped ? "rotate-y-180" : "group-hover:rotate-y-180"
                }`}
              >
                {/* FRONT SIDE */}
                <div
                  className={`${item.bg} ${item.textColor} absolute inset-0 flex items-center justify-center p-4 text-center rounded-xl border border-gray-300 shadow-md backface-hidden`}
                >
                  <h3 className="text-sm md:text-base font-semibold">{item.title}</h3>
                </div>

                {/* BACK SIDE */}
                <div
                  className={`${item.bg} ${item.textColor} absolute inset-0 flex items-center justify-center p-4 text-center rounded-xl border border-gray-300 shadow-md rotate-y-180 backface-hidden`}
                >
                  <p className="text-xs md:text-sm">{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </section>
  );
}