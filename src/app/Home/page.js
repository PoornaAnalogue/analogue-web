"use client";
import React from "react";
import Lottie from "lottie-react";
import animationData from "@/animations/LottieFiles-Mobile.json";
import Image from 'next/image';
import { FaChevronDown } from "react-icons/fa";
import Navbar from '../../../Components/Navbar';
import Footer from '../../../Components/Footer';
import { useEffect, useState } from "react";
import Link from "next/link";


export default function Home() {

  // this is the social icons data
  // form Poorna Durga
  // you can change the src and link as per your requirement

  const socialIcons = [
    { id: 1, name: "Facebook", src: "/link1.png", link: "https://www.facebook.com/analogueitsolutions" },
    { id: 2, name: "Instagram", src: "/link2.png", link: "https://www.instagram.com/analogueitsolutions/" },
    { id: 3, name: "Twitter", src: "/link3.png", link: "https://x.com/AnalogueIt" },
    { id: 4, name: "LinkedIn", src: "/link4.png", link: "https://www.linkedin.com/authwall?trk=bf&trkInfo=AQEs803CAduhbAAAAZixIkGIyObVOiAq-Ce1HzOEqg6I2v4ruuEuDanfC7Jt4yWS3CQF3jW8zk7DRS7BVmOcdtaKSX7-3E5KwhA3KY1z3jWbn8EmRSxx__sn9vRt0_cAV0yXU_I=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fanalogueitsolutions%2F" },
    { id: 5, name: "Whatsapp", src: "/link5.png", link: "https://api.whatsapp.com/send/?phone=%2B918919088163&text=Hello%2Cbro+edhi+default+message+&type=phone_number&app_absent=0" },
    { id: 6, name: "Youtube", src: "/link6.png", link: "https://www.youtube.com/@AnalogueITSolutions" }
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
    // Main wrapper
    <div className="main ">
      <div className="flex flex-col relative">
    {/* Hero */}
    <div className="hero flex flex-col xl:flex-row bg-[#FAFBFF] text-black relative border-2 border-blue-400 ">

  {/* Left Hero */}
  <div className="left-hero w-full !bg-[#FAFBFF] xl:w-1/2 pt-9 flex flex-col justify-center border-2 border-red-400 ">

    <h1 className="text-3xl sm:text-4xl lg:text-5xl text-black font-medium leading-tight px-15">
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
              display: 'inline-block',
              whiteSpace: 'nowrap',
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
              display: 'inline-block',
            }}
          >
            {item.line2}
          </span>
        ))}
      </span>
      <br />
      <span>Company in Hyderabad</span>
    </h1>


    <p className="mt-4 text-[#03153A] text-sm px-15">ABOUT OUR COMPANY</p>
    <p className="mt-4 text-[#7B7E86] px-15">
      Analogue is a Best mobile app development company in Hyderabad that specialises in creating and enhancing user experience through the design and development of mobile and web applications. Our focus lies in helping businesses expand and reach their specific customer base by collaborating with individuals and organisations to conceptualise and promote their products.
    </p>

    {/* Logos grid + social icons */}
    <div className="flex flex-col mt-10 px-15">
      <div className="grid gap-6 w-full xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {[1, 2, 3, 4].map((id) => (
          <Image
            key={id}
            src={`/ellipse${id}.png`}
            width={id === 1 ? 135 : 120}
            height={id === 1 ? 140 : 120}
            alt={`Logo ${id}`}
            className="rounded-full mx-auto"
          />
        ))}
      </div>

      <div className="flex flex-wrap justify-start gap-4 mt-4">
        {socialIcons.map((icon) => (
          <Link key={icon.id} href={icon.link} target="_blank" rel="noopener noreferrer">
            <Image
              src={icon.src}
              alt={icon.name}
              width={24}
              height={24}
              className="cursor-pointer hover:scale-150 transition-transform"
            />
          </Link>
        ))}
        <span className="text-gray-700 text-xs font-sm mt-1">Follow Us</span>
      </div>
    </div>
  </div>

  {/* Right Hero */}
  <div className="right-hero w-full xl:w-1/2 flex justify-center items-center relative bg-[url(/Bg-image-of-home-page.png)] bg-cover bg-center border-2 border-red-400 xl:mt-0">
    <div className="relative w-[250px] sm:w-[250px] h-[700px] sm:h-[500px] flex justify-center items-center">
      <Lottie animationData={animationData} loop={true} style={{ width: "90%", height: "90%" }} />
    </div>

    {/* Left Side Image */}
    <div className="absolute left-5 sm:left-[40px] top-1/2 -translate-y-1/2 flex flex-col items-center">
      <Image src="/logo12.png" alt="Mobile left image" width={230} height={150} />
    </div>

    {/* Right Side Image */}
    <div className="absolute right-2 sm:right-[18] top-1/2 -translate-y-1/2 flex flex-col items-center">
      <Image src="/logo23.png" alt="Mobile right image" width={250} height={200} />
    </div>
  </div>
  
</div>


      </div>
    </div>
  );
}


