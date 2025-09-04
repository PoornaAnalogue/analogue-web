'use client';

import { useState } from 'react';

export default function FrequentQuestions({ Question }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className=" mx-auto mt-10 md:mt-5">
      <div className="flex flex-col justify-center items-center py-6">
        <div>
          <p className='xss:text-sm 2xl:text-3xl font-bold'>FAQS</p>
        </div>
        <div  className='text-sm pt-2 text-gray-500 text-start'>In case, you aren't able to find your answer, do write to us through our contact page.</div>
      </div>
      <div className="space-y-1">
        {Question.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 bg-[#E3ECFF] px-10 rounded-lg">
            <button
              className="w-full text-left py-4 flex justify-between items-center"
              onClick={() => toggleFaq(index)}
            >
              <span className="text-lg font-medium text-gray-800">{faq.question}</span>
              <span className="text-2xl">{openFaqIndex === index ? '-' : '+'}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openFaqIndex === index
                  ? 'max-h-[500px] opacity-100'
                  : 'max-h-0 opacity-0 delay-100'
              }`}
            >
              <div className="pb-4 text-gray-500 px-5 rounded-lg">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}