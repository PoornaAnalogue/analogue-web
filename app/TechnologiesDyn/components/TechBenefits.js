// TechnologyContent.js
"use client";
import React from "react";

export default function TechBenefits({ blocks }) {
   if (!blocks || blocks.length === 0) {
    return null; // nothing to render if blocks not available
  }
  return (
    <div className="">
      {blocks.map((block, blockIdx) => (

        <div key={blockIdx} className="mb-6">
          {/* Block Title */}
          {block.title && (
            <h3 className="text-xl xss:text-sm sm:text-base md:text-lg 2xl:text-[1.2rem] font-medium text-[#0E59F2] mb-4 mt-3">
              {block.title}
            </h3>
          )}

          {/* extra1 */}
          {block.extra1 && (
            <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6 font-medium">
              {block.extra1}
            </p>
          )}

          {/* Points */}
          {block.points?.map((point, idx) => (
            <p
              key={idx}
              className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6 font-medium"
            >
              <span className="font-bold">{point.heading}</span> - {point.text}
            </p>
          ))}

          {/* Extra Content */}
          {block.extra && (
            <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6 font-medium">
              {block.extra}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
