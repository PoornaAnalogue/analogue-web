"use client";
import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import animationData from "@/animations/LottieFiles-Mobile.json";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const socialIcons = [
    { id: 1, name: "Facebook", src: "/link1.png", link: "https://www.facebook.com/analogueitsolutions" },
    { id: 2, name: "Instagram", src: "/link2.png", link: "https://www.instagram.com/analogueitsolutions/" },
    { id: 3, name: "Twitter", src: "/link3.png", link: "https://x.com/AnalogueIt" },
    { id: 4, name: "LinkedIn", src: "/link4.png", link: "https://www.linkedin.com/authwall?trk=bf&trkInfo=AQEs803CAduhbAAAAZixIkGIyObVOiAq-Ce1HzOEqg6I2v4ruuEuDanfC7Jt4yWS3CQF3jW8zk7DRS7BVmOcdtaKSX7-3E5KwhA3KY1z3jWbn8EmRSxx__sn9vRt0_cAV0yXU_I=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fanalogueitsolutions%2F" },
    { id: 5, name: "Whatsapp", src: "/link5.png", link: "https://api.whatsapp.com/send/?phone=%2B918919088163&text=Hello%2Cbro+edhi+default+message+&type=phone_number&app_absent=0" },
    { id: 6, name: "Youtube", src: "/link6.png", link: "https://www.youtube.com/@AnalogueITSolutions" },
  ];

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
      <div className="flex flex-col relative xss:min-h-[calc(10vh-64px)] lg:min-h-[calc(80vh-64px)] xl:min-h-[calc(85vh-64px)] 2xl:min-h-[calc(90vh-64px)]">
        {/* Hero */}
        <div className="hero flex flex-col xs:flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-row !bg-[#FAFBFF] text-black relative">
          {/* Left Hero */}
          <div className="left-hero w-full xl:w-1/2 pt-3 flex flex-col justify-center !bg-[#FAFBFF]">
            <h1 className="text-3xl xs:text-2xl xss:text-xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-4xl 2xl:text-4xl 3xl:text-5xl text-black font-medium leading-tight px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-15">
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

            <p className="mt-4 text-[#03153A] xl:text-xs xs:text-[0.5rem] 2xl:text-[0.7rem] sm:text-xs xss:text-xs md:text-base lg:text-1xl xl:text-base 3xl:text-sm px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-15">
              ABOUT OUR COMPANY
            </p>
            <p className="mt-4 text-[#7B7E86] xs:text-[0.5rem] 2xl:leading-relaxed lg:text-sm px-4 xl:text-xs 2xl:text-[0.9rem] 3xl:text-[1rem] sm:text-xs xss:text-xs xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-15">
              Analogue is a Best mobile app development company in Hyderabad that specialises in creating and enhancing user experience through the design and development of mobile and web applications. Our focus lies in helping businesses expand and reach their specific customer base by collaborating with individuals and organisations to conceptualise and promote their products.
            </p>

            {/* Logos grid + social icons */}
            <div className="flex flex-col xss:mt-3 lg:mt-10 px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-15 xl:mt-[-2]">
              <div className="grid gap-5 w-full xs:w-[20rem] 3xl:w-[35rem] xs:justify-center xs:items-center xs:grid-cols-4 xss:grid-cols-4 xss:gap-2 xss:w-[18rem] 2xl:mt-8 xss:justify-center xss:items-center lg:grid-cols-2 lg:w-[42rem] xl:grid-cols-4 xl:w-[25rem] 2xl:w-[22rem] xl:mb-2 sm:grid-cols-4 sm:w-[25rem] md:grid-cols-2 lg:grid-cols-4">
                {[1, 2, 3, 4].map((id) => (
                  <Image
                    key={id}
                    src={`/ellipse${id}.png`}
                    width={id === 1 ? 135 : 120}
                    height={id === 1 ? 140 : 120}
                    alt={`Logo ${id}`}
                    className="rounded-full mx-1 "
                  />
                ))}
              </div>

              <div className="xss:my-2 lg:my-5 xl:my-3 flex xl:justify-start lg:justify-center xss:justify-center xl:ml-7">
              <span className="flex items-center gap-2 text-gray-700 text-center xss:text-[0.5rem] xl:text-[0.8rem] 2xl:text-[0.8rem] 3xl:text-[1rem] lg:text-lg xl:text-xs">
                <ShieldCheck className="lg:w-4 lg:h-4 xss:w-3 xss:h-3 xl:w-4 xl:h-4 2xl:h-4 2xl:w-4 3xl:w-5 3xl:h-5 text-blue-600" /> 
                Trusted Technology Partner for Government Initiatives
              </span>
            </div>
            </div>
          </div>

          {/* Right Hero */}
          <div className="right-hero w-full xl:w-1/2 flex justify-center 2xl:mt-[-3] xl:mt-[-2] xs:mt-10 md:mt-10 xss:mt-10 items-center relative bg-[url(/Bg-image-of-home-page.png)] bg-cover bg-center bg-no-repeat">
            <div className="relative w-[55vw] max-w-[400px] h-auto aspect-[4/5] xss:w-[45vw] sm:w-[60vw] md:w-[60vw] lg:w-[45vw] xl:w-[40vw] 2xl:w-[30vw] xl:ml-[-0.6rem] 2xl:ml-[-0.6rem] 3xl:h-[28rem] xl:w-[80%] xl:h-[22rem] xl: w-[80%] 2xl:h-[22rem] max-w-[400px] aspect-[4/5] flex justify-center items-center">
              <Lottie animationData={animationData} loop={true} style={{ width: "90%", height: "90%" }} />
            </div>

            {/* Left Side Image */}
            <div className="absolute left-2 w-[40vw] max-w-[230px] xss:w-[28vw] xss:left-7 sm:left-4 sm:w-[18vw] md:left-8 md:w-[16vw] lg:left-12 lg:w-[28vw] xl:left-0 xl:w-[17vw] 2xl:left-8 2xl:w-[14vw] 3xl:left-8 3xl:w-[35vw] top-1/2 -translate-y-1/2 flex flex-col items-center">
              <Image src="/logo12.png" alt="Mobile left image" width={230} height={200} />
            </div>

            {/* Right Side Image */}
            <div className="absolute right-2 w-[22vw] max-w-[250px] xss:w-[28vw] xss:right-4 sm:right-4 sm:w-[20vw] md:right-8 md:w-[18vw] lg:right-8 lg:w-[30vw] xl:right-0 xl:w-[17.5vw] 2xl:right-3 2xl:w-[16vw] 3xl:right-6 3xl:w-[40vw] top-1/2 -translate-y-1/2 flex flex-col items-center">
              <Image src="/logo23.png" alt="Mobile right image" width={250} height={200} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}