'use client';

import { useState, useRef } from 'react';

export default function FrequentQuestions({ Question }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

 // Function to render the answer, formatting as bullet points for the specific FAQs
  const renderAnswer = (faq) => {
    if (
      faq.question === "02. Is Digital Marketing is important for all?" ||
      faq.question === "05. Is digital Marketing a Product or Service?"
    ) {
      const points = faq.answer.split('.').map(point => point.trim()).filter(point => point);
      return (
        <ul className="list-disc pl-5">
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      );
    }
    return faq.answer;
  };

  return (
    <div className="mx-auto 2xl:mt-10 md:mt-5">
      <div className="flex flex-col justify-center items-center">
        <div>
          <h1 className="text-2xl text-black xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] xl:text-[1.5rem] 3xl:text-[1.6rem] font-semibold">
            FAQS
          </h1>
        </div>
        <div className="xss:text-subsmall sm:text-xs lg:text-sm pt-2 text-gray-500 xss:pb-2 sm:pb-4 text-start">
          In case, you aren&apos;t able to find your answer, do write to us through our contact page.
        </div>
      </div>
      <div className="space-y-1">
        {Question.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-200 bg-[#E3ECFF] rounded-2xl relative z-10"
          >
            {/* Question Row */}
            <div className="w-full">
              <button
                className="w-full h-full text-left py-4 flex justify-between items-center cursor-pointer xss:px-4 lg:px-10"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base font-medium text-gray-800">
                  {faq.question}
                </span>
                <span className="text-2xl xss:pr-2 lg:pr-5 text-black">{openFaqIndex === index ? '-' : '+'}</span>
              </button>
            </div>

            {/* Answer Row */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openFaqIndex === index
                  ? 'opacity-100 pointer-events-auto'
                  : 'max-h-0 opacity-0 pointer-events-none'
              }`}
              style={{
                maxHeight: openFaqIndex === index
                  ? `${contentRefs.current[index]?.scrollHeight || 500}px`
                  : '0px',
              }}
              ref={(el) => (contentRefs.current[index] = el)}
            >
              <div className="pb-4 pt-3 w-full text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base bg-[#F1F3F8] text-gray-500 xss:px-6 lg:px-10 rounded-b-2xl">
                {renderAnswer(faq)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}