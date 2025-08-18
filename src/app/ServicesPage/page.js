/* eslint-disable react/jsx-key */
"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const Responsive_ServicePage = () => {
  const [animate, setAnimate] = useState(false);
  const headerRef = useRef(null);

  const containers = [
    { id: 1, title: "App Development", content: "At Analogue IT Solutions, we specialise in expert Android app development, employing advanced technologies such as React Native and Flutter. Whether you need a robust e-commerce platform or a tailored mobile solution, our team is dedicated to delivering high-quality Android applications that enhance user experience and drive business success. Trust us to bring your app vision to life with precision and innovation.", bg: "bg-[#4335A7]", text: "text-white", src: "/ServicePage-Images/serviceImg1.png" },
    { id: 2, title: "Website Development", content: [ <span className="font-bold"> Static Websites:</span>,  " Clean, simple, and fast-loading websites that effectively communicate your brand and message.", <br /> , <span className="font-bold"> Dynamic Websites:</span>, " Interactive websites with advanced functionalities that are easily updatable and provide a personalized experience for users.", <br />, <span className="font-bold"> E-Commerce Websites:</span> , "Robust, secure, and user-friendly online stores that drive sales and provide a seamless shopping experience." ,<br />,  <span className="font-bold">Other Web Development Services:</span>, "From custom web applications to website redesigns, we handle all aspects of web development to help your business Succeed Online." ] , bg: "bg-[#FFF6E9]", text: "text-[#03153A]", src: "/ServicePage-Images/serviceImg2.png" },
    { id: 3, title: "UI UX Design", content : [ <span className="font-bold">Boost conversions and sales:</span>, " By making it easy for users to find what they need and complete desired actions, you can significantly increase your bottom line.", <br />, <span className="font-bold">Enhance brand reputation:</span>,   "A positive user experience fosters trust and loyalty, leading to a stronger brand image and reputation.",<br />,  <span className="font-bold">Improve user engagement: </span>, " When users find your website or app enjoyable and intuitive to use, they are more likely to spend more time exploring and interacting with your content. ", <br />, <span className="font-bold">Reduce support costs:</span> , "A clear and intuitive design can minimise user confusion and the need for support, saving your time and resources.",<br />,  <span className="font-bold"> Increase accessibility: </span>, "By following best practices for inclusive design, you can ensure that your website or app is accessible to everyone, regardless of their abilities."],  bg: "bg-[#8FC7FF]", text: "text-[#03153A]", src: "/ServicePage-Images/serviceImg3.png" },
    { id: 4, title: "Digital Marketing", content: "As the Best digital marketing agency, we are dedicated to harnessing the power of innovative strategies to enhance your brand’s online presence. Our experienced team blends creativity with industry knowledge to deliver customised marketing solutions tailored to your specific goals. With a commitment to excellence and a results-driven approach, we aim to empower businesses to achieve growth and success in the digital landscape through impactful marketing initiatives.", bg: "bg-[#FF7F3E]", text: "text-white", src: "/ServicePage-Images/serviceImg4.png" },
    { id: 5, title: "GPS Tracking", content: "GPS Vehicle Tracking is the process of tracking the real-time location and movement of vehicles using satellite signals. Our GPS Tracking Services utilize advanced GPS trackers to provide live tracking, historical data, and detailed reports. Whether you're managing a fleet of vehicles or just need to monitor a single vehicle, our Vehicle Tracking System offers you the complete solution.", bg: "bg-[#072060]", text: "text-white", src: "/ServicePage-Images/serviceimg5.png" },
  ];

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

  return (
    <>
      <div className="h-auto w-full bg-white pt-4 md:pt-6 lg:pt-8">
        <div
          ref={headerRef}
          className=" flex flex-col justify-center items-center mb-4 md:mb-6 lg:mb-8"
        >
          <p
            className={`text-4xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-[#3C6FA2] mb-2 transform transition-transform duration-1500 ${
              animate ? "translate-x-0 opacity-100 xs:-translate-x-20 sm:-translate-x-20 md:-translate-x-30 lg:-translate-x-40 xl:-translate-x-35"
                : "-translate-x-20 xs:-translate-x-50 sm:-translate-x-60 md:-translate-x-80 lg:-translate-x-100 xl:-translate-x-120 opacity-0"
            }`}
          >
            Services
          </p>
          <p
            className={`text-4xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-[#4D4B4B] transform transition-transform duration-1500  ${
              animate ? "translate-x-0 opacity-100 xs:translate-x-10 sm:translate-x-20 md:translate-x-20 lg:translate-x-25 xl:translate-x-25"
                : "translate-x-20 xs:translate-x-25 sm:translate-x-37 md:translate-x-50 lg:translate-x-60 xl:translate-x-90 opacity-0"
            }`}
          >
            We Provide
          </p>
        </div>
        <div className="bg-blue-900">
          <div className="w-full h-auto">
            {containers.map((container, index) => (
              <div
                key={container.id}
                className={`flex flex-col xs:flex-row overflow-hidden transition-all duration-300  ${
                  index < 4
                    ? "  h-auto min-h-[2rem] xs:h-15 sm:h-17 md:h-18 lg:h-16 hover:h-auto hover:min-h-[16rem] xs:hover:h-[18rem] sm:hover:h-[18rem] md:hover:h-[18rem] lg:hover:h-[18rem] cursor-pointer"
                    : "h-auto min-h-[6rem] xs:h-[12rem] sm:h-[14rem] md:h-[16rem] lg:h-[17rem]"
                }`}
              >
                <div
                  className={`w-full xs:w-4/5 px-4 xs:pl-5 sm:pl-10 md:pl-16 lg:pl-20 xl:pl-24 pr-4 xs:pr-3 sm:pr-4 md:pr-10 lg:pr-12 ${container.text} ${container.bg}`}
                >
                  <div className="p-2 xs:p-3">
                    <div className="font-bold text-lg xs:text-lg xs:pb-2 sm:text-2xl md:text-3xl lg:text-3xl mb-2 xs:mb-3">
                      {container.title}
                    </div>
                    <div className="font-light text-[8px] xs:text-[8px] sm:text-[10px] md:text-[11px] lg:text-[12px] leading-4 xs:leading-3 md:leading-4">
                      {container.content}
                    </div>
                  </div>
                </div>
                <div
                  className={`w-full h-full xs:w-2/5 self-start ${container.text} ${container.bg} p-2 xs:p-3 sm:p-4 group`}
                >
                  <div className="relative w-full h-[8rem] xs:h-[10rem] sm:h-[12rem] md:h-[14rem] lg:h-[15rem] transition-all duration-300 ">
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

export default Responsive_ServicePage;