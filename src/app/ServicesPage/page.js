"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";


const Responsive_ServicePage_Mobile = () => {
  const [animate, setAnimate] = useState(false);
  const headerRef = useRef(null);
  // State to track which container is expanded
  const [expandedContainer, setExpandedContainer] = useState(null);

  const containers = [
    {
      id: 1,
      title: "App Development",
      content: [
        "Looking for the best Mobile App Development Company in Hyderabad? Your search ends with Analogue IT Solutions, where we turn innovative ideas into high-performing mobile apps. We specialize in building Android, iOS, and cross-platform applications that are fast, scalable, and user-friendly.",
        <br key="app-br1" />,
        <p key = "app-br3"  className="pb-2"> </p>,
        " Our team focuses on UI/UX design, smooth functionality, and secure architecture to ensure every app delivers the best experience to your users. As a trusted Mobile App Development Company in Hyderabad, we serve startups, enterprises, and businesses across industries like healthcare, e-commerce, travel, and logistics.",
        <br key="app-br2" />,
        <p key = "app-br4"  className="pb-2"> </p>,

        // <br key="app-br4" />,
        " From concept to launch, we handle the complete app development lifecycle with precision. That’s why businesses choose us as the best Mobile App Development Company in Hyderabad — because we create apps that engage users and drive growth.",
      ],
      bg: "bg-[#4335A7]",
      text: "text-white",
      src: "/ServicePage-Images/service-img (3).svg",
    },
    {
      id: 2,
      title: "Website Development",
      content: [
        "Searching for the best Website Development Company in Hyderabad? At Analogue IT Solutions, we design and develop websites that do more than just look good – they perform, engage, and deliver results. Our expertise covers business websites, e-commerce stores, portals, and custom web solutions tailored to your brand’s needs.",
        <br key="web-br1" />,
        <p key = "web-br3"  className="pb-2"> </p>,

        // <br key="web-br3" />,
        "We focus on speed, security, SEO-friendly structure, and responsive design, ensuring your website works seamlessly across all devices. Being a trusted Website Development Company in Hyderabad, we help startups, SMEs, and enterprises establish a strong online identity that drives conversions and builds trust.",
        <br key="web-br2" />,        
        <p key = "web-br4"  className="pb-2"> </p>,

        // <br key="web-br4" />,
        "That’s why clients recognize us as the best Website Development Company in Hyderabad – because we turn ideas into digital platforms that fuel growth.",
      ],
      bg: "bg-[#FFF6E9]",
      text: "text-[#03153A]",
      src: "/ServicePage-Images/service-img (5).svg",
    },
    {
      id: 3,
      title: "UI UX Design",
      content: [
        "Looking for the best UI/UX Design Company in Hyderabad? Your search ends with Analogue IT Solutions – where creativity meets technology to deliver stunning digital experiences. We specialize in building intuitive, user-friendly, and visually engaging designs that perfectly balance innovation with functionality.",
        <br key="ui-br1" />,        
        <p key = "ui-br2"  className="pb-2"> </p>,

        // <br key="ui-br2" />,
        "From wireframes and prototypes to full-scale design systems, our expert team ensures every detail reflects your brand and keeps users engaged.",
        <br key="ui-br3" />,        
        <p key = "ui-br4"  className="pb-2"> </p>,

        // <br key="ui-br4" />,
        "Recognized as the best UI/UX Design Company in Hyderabad, we focus on seamless navigation, modern design trends, and customer-centric experiences that enhance usability and satisfaction. That’s why businesses trust us as the best UI/UX Design Company in Hyderabad to create digital products that stand out, boost engagement, and drive measurable growth.",
      ],
      bg: "bg-[#8FC7FF]",
      text: "text-[#03153A]",
      src: "/ServicePage-Images/service-img (2).svg",
    },
    {
      id: 4,
      title: "Digital Marketing",
      content: [
        "Searching for the best Digital Marketing Agency in Hyderabad? Welcome to Analogue IT Solutions, where strategy meets creativity to deliver real business growth. We don’t believe in one-size-fits-all marketing.",
        <br key="dig-br1" />,        
        <p key = "dig-br2"  className="pb-2"> </p>,

        // <br key="dig-br2" />,
        "Our experts design customized campaigns across SEO, Social Media, Paid Ads, and Content Marketing to match your brand goals and audience. Every strategy is backed by research, creativity, and measurable results.",
        <br key="dig-br3" />,        
        <p key = "dig-br4"  className="pb-2"> </p>,

        // <br key="dig-br4" />,
        "As a growing brand, you need a trusted partner — and that’s why companies rely on us as their Digital Marketing Agency in Hyderabad to generate leads, build engagement, and strengthen online presence. With us, your business doesn’t just get visibility — it gets results. That’s what makes us the best Digital Marketing Agency in Hyderabad for businesses ready to scale.",
      ],
      bg: "bg-[#FF7F3E]",
      text: "text-white",
      src: "/ServicePage-Images/service-img (4).svg",
    },
    {
      id: 5,
      title: "GPS Tracking",
      content: [
        " Looking for the best GPS Tracking Company in Hyderabad? Your search ends with Analogue IT Solutions – offering reliable and advanced GPS solutions to keep your assets, vehicles, and people safe.",
        <br key="gps-br1" />,        
        <p key = "gps-br2"  className="pb-2"> </p>,

        // <br key="gps-br2" />,
        "We provide real-time tracking, route optimization, fuel monitoring, and advanced reporting to help businesses improve efficiency and reduce costs. Whether you run a logistics fleet, cab service, or delivery business, our GPS solutions ensure you stay in control 24/7.",
        <br key="gps-br3" />,
        <p key = "gps-br4"  className="pb-2"> </p>,

        // <br key="gps-br4" />,
        "Trusted by enterprises and startups, we are recognized as a reliable GPS Tracking Company in Hyderabad delivering accuracy, security, and easy-to-use dashboards. That’s why clients choose us as the best GPS Tracking Company in Hyderabad to streamline operations and safeguard their business.",
      ],
      bg: "bg-[#072060]",
      text: "text-white",
      src: "/ServicePage-Images/service-img (3).svg",
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
    setExpandedContainer(expandedContainer === id ? null : id);
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
        <div className="bg-blue-900">
          <div className="w-full h-auto">
            {containers.map((container, index) => (
              <div
                key={container.id}
                onClick={() => toggleContainer(container.id)} // Add click handler
                className={`${
                  container.bg
                } flex flex-col xss:flex-row overflow-hidden transition-all duration-300 ${
                  index < 4
                    ? `h-auto min-h-[2rem] xss:h-10 sm:h-13 md:h-14 lg:h-15 xl:h-19 ${
                        expandedContainer === container.id
                          ? "min-h-[16rem] xss:min-h-[18rem] xs:min-h-[18rem] sm:min-h-[19rem] md:min-h-[23rem] xl:min-h-[19rem] 3xl:min-h-[23rem]"
                          : ""
                      } hover:h-auto hover:min-h-[16rem] xss:hover:h-[18rem] xs:hover:h-[18rem] sm:hover:h-[19rem] md:hover:h-[23rem] xl:hover:h-[19rem] 3xl:hover:min-h-[23rem] cursor-pointer`
                    : "h-auto min-h-[6rem] xss:h-[17rem] xs:h-[17rem] md:h-[20rem] lg:h-[19rem] xl:h-[18rem] 3xl:min-h-[21rem]"
                }`}
              >
                <div
                  className={`w-full xss:w-4/5 px-4 xss:pl-5 sm:pl-10 md:pl-16 lg:pl-20 xl:pl-24 pr-4 xs:pr-3 sm:pr-4 md:pr-10 lg:pr-12 ${container.text} ${container.bg}`}
                >
                  <div className="p-3 xs:p-0 xss:p-3 xss:mx-0 xss:px-0 xl:pt-3">
                    <div className="xs:pt-2 xss:mx-0 xss:px-0 font-bold text-lg xss:text-sm xs:text-lg xs:pb-2 sm:text-xl md:text-2xl lg:text-normal mb-2 xs:mb-3">
                      <h2>{container.title}</h2>
                    </div>
                    <div className="font-light sm:text-[0.6rem] 2xl:text-subbody xss:text-subsmall md:text-small xl:text-[0.85rem] 2xl:text-subbody 3xl:text-base 3xl:leading-6
                    ">
                      {container.content}
                    </div>
                  </div>
                </div>
                <div
                  className={`w-full h-full xss:w-2/5 self-start ${container.text} ${container.bg} p-2 xs:p-3 sm:p-4 group`}
                >
                  <div className="relative w-full h-[8rem] xs:h-[10rem] sm:h-[12rem] md:h-[14rem] lg:h-[15rem] transition-all duration-300">
                    <Image
                      src={container.src}
                      alt={`${container.title} illustration`}
                      fill
                      sizes="(max-width: 360px) 100vw, (max-width: 480px) 80vw, (max-width: 640px) 60vw, (max-width: 768px) 50vw, (max-width: 1024px) 40vw, (max-width: 1280px) 30vw, 25vw"
                      className="object-contain"
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

export default Responsive_ServicePage_Mobile;