"use client";
import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import animationData from "@/animations/LottieFiles-Mobile.json";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function Home() {

  const headings = [
    { line1: "Mobile App", line2: "Development", style: "bg-gradient-to-r from-blue-600 to-blue-400" },
    { line1: "Digital", line2: "Marketing", style: "bg-gradient-to-r from-red-500 to-orange-400" },
    { line1: "Website", line2: "Development", style: "bg-gradient-to-r from-green-500 to-blue-400" },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % headings.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const fadeClass = (isVisible) =>
    `transition-all duration-1000 ease-in-out ${
      isVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-1 pointer-events-none"
    }`;

  return (
    <div className="main !bg-[#FAFBFF] ">
      <div className="flex flex-col relative xss:min-h-[calc(10vh-64px)] lg:min-h-[calc(80vh-64px)] xl:min-h-[calc(45vh-64px)] 2xl:min-h-[calc(70vh-64px)]">
        {/* Hero */}
        <div className="hero flex flex-col xs:flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-row !bg-[#FAFBFF] text-black relative">
          {/* Left Hero */}
          <div className="left-hero w-full xl:w-1/2 pt-3 flex flex-col justify-center !bg-[#FAFBFF]">
            <h1 className="text-bigheading xss:text-subheading sm:text-normal md:text-normal xl:text-subbigheading 3xl:text-bigheading text-black font-medium leading-tight px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-15">

                {/* SEO-friendly hidden heading */}
                <span className="sr-only">Best Mobile App Development Company in Hyderabad</span>
                Best{" "}
                <span className="relative inline-block">
                  {headings.map((item, i) => (
                    <span
                      key={`line1-${i}`}
                      className={`${item.style} bg-clip-text text-transparent ${fadeClass(i === index)}`}
                      style={{
                        position: i === index ? "relative" : "absolute",
                        top: 0,
                        left: 0,
                        zIndex: i === index ? 10 : 0,
                        display: "inline-block",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item.line1}
                    </span>
                  ))}
                </span>{" "}
                <br />
                <span className="relative inline-block">
                  {headings.map((item, i) => (
                    <span
                      key={`line2-${i}`}
                      className={`${item.style} bg-clip-text text-transparent ${fadeClass(i === index)}`}
                      style={{
                        position: i === index ? "relative" : "absolute",
                        top: 0,
                        left: 0,
                        zIndex: i === index ? 10 : 0,
                        display: "inline-block",
                      }}
                    >
                      {item.line2}
                    </span>
                  ))}
                </span>
                <br />
                <span>Company in Hyderabad</span>
              </h1>

            <p className="mt-4 text-[#03153A] xl:text-small xss:text-small md:text-small lg:text-subbody 3xl:text-body px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-15">
              ABOUT OUR COMPANY
            </p>
            <p className="mt-4 text-[#7B7E86] xss:text-subsmall md:text-small 2xl:text-body lg:text-subbody px-4 xl:text-small 2xl:text-subbody 2xl:leading-relaxed 3xl:text-body xss:text-small xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-15">
              Analogue is a Best mobile app development company in Hyderabad that specialises in creating and enhancing user experience through the design and development of mobile and web applications. Our focus lies in helping businesses expand and reach their specific customer base by collaborating with individuals and organisations to conceptualise and promote their products.
            </p>

            {/* Logos grid + social icons */}
            <div className="flex flex-col xss:mt-3 lg:mt-10 lg:justify-start lg:items-start px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-15 xl:mt-[-2] xss:justify-center xss:items-center">
              <div className="grid gap-5 w-full xs:w-[20rem] 3xl:w-[35rem] xs:justify-center xs:items-center xs:grid-cols-4 md:grid-cols-4 xss:grid-cols-4 xss:gap-2 xss:w-[18rem] 2xl:mt-8 xss:justify-center xss:items-center lg:grid-cols-4 lg:w-[42rem] xl:grid-cols-4 xl:w-[25rem] 2xl:w-[22rem] xl:mb-2 sm:grid-cols-4 sm:w-[25rem]  lg:grid-cols-4">
              {[1, 2, 3, 4].map((id) => (
                <Image
                  key={id}
                  src={`/Home/ellipse${id}.png`}
                  width={120}
                  height={130}
                  alt={`Logo ${id}`}
                  className={`rounded-full mx-1 ${id === 1 ? "scale-115" : ""}`}
                />
              ))}
            </div>


              <div className="xss:my-2 lg:my-5 xl:my-3 flex xl:justify-start lg:justify-center xss:justify-center xl:ml-7">
              <span className="flex items-center gap-2 text-gray-700 text-center xss:text-subsmall xl:text-subbody 3xl:text-body lg:text-lg xl:text-xs">
                <ShieldCheck className="lg:w-4 lg:h-4 xss:w-3 xss:h-3 xl:w-4 xl:h-4 2xl:h-4 2xl:w-4 3xl:w-5 3xl:h-5 text-blue-600" /> 
                Trusted Technology Partner for Government Initiatives
              </span>
            </div>
            </div>
          </div>

          {/* Right Hero */}
          <div className="right-hero w-full xl:w-1/2 flex justify-center 2xl:mt-[-3] xl:mt-[-2] xs:mt-10 md:mt-10 xss:mt-10 items-center relative bg-[url(/Home/Bg-image-of-home-page.png)] bg-cover bg-center bg-no-repeat">
            <div className="relative w-[55vw] max-w-[400px] h-auto aspect-[4/5] xss:w-[45vw] sm:w-[50vw] md:w-[41vw] lg:w-[41vw] xl:w-[40vw] 2xl:w-[30vw] xl:ml-[-0.6rem] 2xl:ml-[-0.6rem] 3xl:h-[28rem] xl:w-[80%] xl:h-[22rem] xl: w-[80%] 2xl:h-[22rem] max-w-[400px] aspect-[4/5] flex justify-center items-center">
              <Lottie animationData={animationData} loop={true} style={{ width: "90%", height: "90%" }} />
            </div>

            {/* Left Side Image */}
            <div className="absolute left-2 w-[40vw] max-w-[230px] xss:w-[28vw] xss:left-7 sm:left-7 sm:w-[28vw] md:left-15 md:w-[25vw] lg:left-20 lg:w-[28vw] xl:left-0 xl:w-[17vw] 2xl:left-8 2xl:w-[14vw] 3xl:left-8 3xl:w-[35vw] top-1/2 -translate-y-1/2 flex flex-col items-center">
              <Image src="/Home/logo12.svg" alt="Mobile left image" width={230} height={200} />
            </div>

            {/* Right Side Image */}
            <div className="absolute right-2 w-[22vw] max-w-[250px] xss:w-[28vw] xss:right-4 sm:right-4 sm:w-[30vw] md:right-8 md:w-[28vw] lg:right-10 lg:w-[30vw] xl:right-0 xl:w-[17.5vw] 2xl:right-3 2xl:w-[16vw] 3xl:right-6 3xl:w-[40vw] top-1/2 -translate-y-1/2 flex flex-col items-center">
              <Image src="/Home/logo23.svg" alt="Mobile right image" width={250} height={200} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}