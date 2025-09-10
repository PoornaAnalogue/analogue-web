"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Responsive_ServicePage_MobileTest = () => {
  const [animate, setAnimate] = useState(false);
  const headerRef = useRef(null);

  // State to track which container is expanded
  const [expandedContainer, setExpandedContainer] = useState(5);
  const [isXL, setIsXL] = useState(false);

  // Detect xl breakpoint
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)"); // xl breakpoint
    const handleResize = () => setIsXL(mediaQuery.matches);
    handleResize(); // run on mount
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  const containers = [
    {
      id: 1,
      title: "App Development",
      content: [
        "Looking for the best Mobile App Development Company in Hyderabad? Analogue IT Solutions is your trusted partner for turning ideas into powerful mobile apps. We specialize in Android, iOS, and cross-platform development, delivering fast, scalable, and user-friendly solutions. Our expert team focuses on UI/UX design, smooth performance, and secure architecture to provide exceptional user experiences.", 
        <p key = "app-br3"  className="pb-2"> </p>,  
        "From startups to enterprises, we serve industries like healthcare, e-commerce, travel, and logistics. Covering the complete app development lifecycle, we ensure precision at every stage. Businesses choose us because we build apps that engage users, strengthen brands, and drive business growth.",
      ],
      bg: "bg-[#4335A7]",
      text: "text-white",
      src: "/ServicePage-Images/ServicePageImg - (5).png",
    },
    {
      id: 2,
      title: "Website Development",
      content: [
        "Looking for the best Website Development Company in Hyderabad? Analogue IT Solutions creates websites that not only look great but also perform, engage, and deliver measurable results. Our services include business websites, e-commerce platforms, portals, and custom web solutions tailored to your brand. We prioritize speed, security, SEO-friendly structures, and responsive design to ensure smooth performance across all devices.",
        <p key = "web-br3"  className="pb-2"> </p>,
        "As a trusted Website Development Company in Hyderabad, we work with startups, SMEs, and enterprises to build strong online identities. Clients choose us because we transform ideas into powerful digital platforms that drive conversions, build trust, and accelerate growth.",
      ],
      bg: "bg-[#FFF6E9]",
      text: "text-[#03153A]",
      src: "/ServicePage-Images/ServicePageImg - (2).png",
    },
    {
      id: 3,
      title: "UI UX Design",
      content: [
        "Searching for the leading UI/UX Design Company in Hyderabad? At Analogue IT Solutions, we transform ideas into seamless digital journeys that delight users. Our designs are modern, engaging, and user-focused, ensuring a perfect mix of creativity and functionality. Whether it's wireframes, prototypes, or complete design systems, our team pays attention to every detail that represents your brand.",
        <p key = "ui-br2"  className="pb-2"> </p>,
         "Known as one of the top UI/UX Design Companies in Hyderabad, we emphasize smooth navigation, visual appeal, and user satisfaction. Businesses trust us because we deliver experiences that not only stand out but also enhance engagement, build loyalty, and accelerate growth.",
      ],
      bg: "bg-[#8FC7FF]",
      text: "text-[#03153A]",
      src: "/ServicePage-Images/ServicePageImg - (3).png",
    },
    {
      id: 4,
      title: "Digital Marketing",
      content: [
        "Searching for the best Digital Marketing Agency in Hyderabad? At Analogue IT Solutions, we combine strategy and creativity to drive measurable business growth. Unlike generic approaches, we believe in tailored solutions designed around your brand's unique goals. Our team of experts specializes in SEO, Social Media Marketing, Paid Advertising, and Content Marketing, ensuring your business stands out in the digital landscape.",
        <p key = "dig-br2"  className="pb-2"> </p>,
        " Every campaign is built on deep research, innovative ideas, and data-driven execution to maximize results. Recognized as a trusted digital marketing agency, we help startups, SMEs, and enterprises build visibility, engage audiences, and achieve sustainable online success.",
      ],
      bg: "bg-[#FF7F3E]",
      text: "text-white",
      src: "/ServicePage-Images/ServicePageImg - (4).png",
    },
    {
      id: 5,
      title: "GPS Tracking",
      content: [
        " Looking for the best GPS Tracking Company in Hyderabad? Analogue IT Solutions provides reliable, advanced GPS solutions designed to secure your vehicles, assets, and workforce. Our technology offers real-time tracking, route optimization, fuel monitoring, and detailed reporting to help businesses enhance efficiency and reduce costs.",
          <p key = "gps-br2"  className="pb-2"> </p>,
        "Whether you manage a logistics fleet, cab service, or delivery network, our GPS systems give you complete control 24/7. Trusted by startups and enterprises alike, we are recognized as a leading GPS Tracking Company in Hyderabad. Clients choose us because we deliver accuracy, security, and easy-to-use dashboards that simplify operations and drive business growth.",
      ],
      bg: "bg-[#072060]",
      text: "text-white",
      src: "/ServicePage-Images/ServicePageImg - (1).png",
    },
  ];

  const heading = "Services".split("");
  const subHeading = "We Provide".split("");
  const letterVariants = {
    hidden: { color: "#e3e5e8" },
    visible: { color: "#3C6FA2" },
  };
  const letterVariantsProvide = {
    hidden: { color: "#e3e5e8" },
    visible: { color: "#4D4B4B" },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setAnimate(entry.isIntersecting);
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Toggle the expanded state for a container
  const toggleContainer = (id) => {
    setExpandedContainer(id);
  };

  return (
    <>
      <div className="h-auto w-full bg-white pt-4 md:pt-6 lg:pt-8">
        <div
          ref={headerRef}
          className="flex flex-col justify-center items-center mb-4 md:mb-6 lg:mb-8"
        >
          <motion.p
            className={`text-4xl xss:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-[#3C6FA2] mb-2 transform transition-transform duration-1000 ${
              animate
                ? "translate-x-0 opacity-100 xss:-translate-x-20 sm:-translate-x-20 md:-translate-x-30 lg:-translate-x-40 xl:-translate-x-35"
                : "-translate-x-20 xss:-translate-x-50 sm:-translate-x-60 md:-translate-x-80 lg:-translate-x-100 xl:-translate-x-120 opacity-0"
            }`}
          >
            {heading.map((char, i) => (
                          <motion.span
                            key={`services-${i}`}
                            variants={letterVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.6 }}
                            transition={{ delay: i * 0.2, duration: 0.4 }}
                            className="inline-block"
                          >
                            {char === " " ? "\u00A0" : char}
                          </motion.span>
                        ))}
                      </motion.p>
          
          <motion.p
            className={`text-4xl xss:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-[#4D4B4B] transform transition-transform duration-1000 ${
              animate
                ? "translate-x-0 opacity-100 xss:translate-x-10 sm:translate-x-20 md:translate-x-20 lg:translate-x-25 xl:translate-x-25"
                : "translate-x-20 xss:translate-x-18 xs:translate-x-25 sm:translate-x-37 md:translate-x-50 lg:translate-x-60 xl:translate-x-90 opacity-0"
            }`}
          >
            {subHeading.map((char, i) => (
                          <motion.span
                            key={`provide-${i}`}
                            variants={letterVariantsProvide}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.6 }}
                            transition={{ delay: (subHeading.length - 1 - i) * 0.1, duration: 0.4 }}
                            className="inline-block"
                          >
                            {char === " " ? "\u00A0" : char}
                          </motion.span>
                        ))}
                      </motion.p>
        </div>
        <div className="bg-blue-900 ">
          <div className="w-full h-auto ">
            {containers.map((container, index) => (
              <div
                key={container.id}
              // Mobile & Tablet → Click
                onClick={!isXL ? () => toggleContainer(container.id) : undefined}
                // Desktop (xl and above) → Hover
                onMouseEnter={isXL ? () => toggleContainer(container.id) : undefined}                // onMouseEnter={() => toggleContainer(container.id)} // 👈 hover also works
                className={`${
                  container.bg
                } flex flex-col xss:flex-row overflow-hidden transition-all duration-1000 ${
                  index < 5
                    ? `h-auto min-h-[2rem] xss:h-10 sm:h-[2.8rem] md:h-[3rem] lg:h-15 xl:h-19 ${
                        expandedContainer === container.id
                          ? " xss:min-h-[13.5rem] xs:min-h-[12.3rem] test:min-h-[11rem] sm:min-h-[15rem] md:min-h-[18.5rem] test2:min-h-[13rem] lg:min-h-[17.2rem] xl:min-h-[16.5rem]  2xl:min-h-[18rem] 3xl:min-h-[17rem]"
                          : ""
                      }  xl:hover:h-[16.5rem] 2xl:hover:h-[13rem] 3xl:hover:min-h-[17rem] cursor-pointer`
                    : ""
                }`}
              >
                <div
                  className={` w-full xss:w-4/5 px-4 xss:pl-5 sm:pl-10 md:pl-16 lg:pl-20 xl:pl-24 pr-4 xs:pr-3 sm:pr-4 md:pr-10 lg:pr-12 ${container.text} ${container.bg}`}
                >
                  <div className="p-3 xs:p-0 xss:p-3 xss:mx-0 xss:px-0 xl:pt-3">
                    <div className=" xs:pt-2 xss:mx-0 xss:px-0 sm:mb-2 md:mb-3 font-bold text-lg xss:text-sm xs:text-lg  sm:text-xl md:text-2xl lg:text-normal mb-2 xs:mb-1">
                      <h2>{container.title}</h2>
                    </div>
                    <div className=" leading-[1.3] sm:leading-[1.5] text-xs xss:text-subsmall sm:text-[0.6rem] md:text-small xl:text-[0.8rem] 2xl:text-[1rem] 3xl:text-base
                    ">
                      {container.content}
                    </div>
                  </div>
                </div>

                <div
                  className={` w-full h-full xss:w-2/5 self-start ${container.text} ${container.bg} p-2 xs:p-3 sm:p-4 group xl:py-7 2xl:py-6 test4:py-9`}
                >
                  <div
                    className={` relative w-full transition-all duration-500 
                    ${
                        expandedContainer === container.id
                        ? "h-full "
                        : "h-[8rem] xss:h-[6rem] sm:h-[8rem] md:h-[12rem] lg:h-[13rem] xl:h-[14rem] "
                    }
                    `}
                >
                    <Image
                      src={container.src}
                      alt={`${container.title} illustration`}
                      fill
                      sizes="(max-width: 360px) 100vw, (max-width: 480px) 80vw, (max-width: 640px) 60vw, (max-width: 768px) 50vw, (max-width: 1024px) 40vw, (max-width: 1280px) 30vw, 25vw"
                      className=" object-contain "
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Responsive_ServicePage_MobileTest;
