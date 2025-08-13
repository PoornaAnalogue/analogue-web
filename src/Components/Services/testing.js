"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const ServicePage = () => {
  const [animate, setAnimate] = useState(false);
  const headerRef = useRef(null);

  const containers = [
    { id: 1, title: "App Development", content: "At Analogue IT Solutions, we specialise in expert Android app development, employing advanced technologies such as React Native and Flutter. Whether you need a robust e-commerce platform or a tailored mobile solution, our team is dedicated to delivering high-quality Android applications that enhance user experience and drive business success. Trust us to bring your app vision to life with precision and innovation.", bg: "bg-[#4335A7]", text: "text-white", src: "/serviceImg1.png" },
    // eslint-disable-next-line react/jsx-key
    { id: 2, title: "Website Development", content: [ <span className="font-bold"> Static Websites:</span>,  " Clean, simple, and fast-loading websites that effectively communicate your brand and message.", <br /> , <span className="font-bold"> Dynamic Websites:</span>, " Interactive websites with advanced functionalities that are easily updatable and provide a personalized experience for users.", <br />, <span className="font-bold"> E-Commerce Websites:</span> , "Robust, secure, and user-friendly online stores that drive sales and provide a seamless shopping experience." ,<br />,  <span className="font-bold">Other Web Development Services:</span>, "From custom web applications to website redesigns, we handle all aspects of web development to help your business Succeed Online." ] , bg: "bg-[#FFF6E9]", text: "text-[#03153A]", src: "/serviceImg2.png" },
    // eslint-disable-next-line react/jsx-key
    { id: 3, title: "UI UX Design", content : [ <span className="font-bold">Boost conversions and sales:</span>, " By making it easy for users to find what they need and complete desired actions, you can significantly increase your bottom line.", <br />, <span className="font-bold">Enhance brand reputation:</span>,   "A positive user experience fosters trust and loyalty, leading to a stronger brand image and reputation.",<br />,  <span className="font-bold">Improve user engagement: </span>, " When users find your website or app enjoyable and intuitive to use, they are more likely to spend more time exploring and interacting with your content. ", <br />, <span className="font-bold">Reduce support costs:</span> , "A clear and intuitive design can minimise user confusion and the need for support, saving your time and resources.",<br />,  <span className="font-bold"> Increase accessibility: </span>, "By following best practices for inclusive design, you can ensure that your website or app is accessible to everyone, regardless of their abilities."],  bg: "bg-[#8FC7FF]", text: "text-[#03153A]", src: "/serviceImg3.png" },
    { id: 4, title: "Digital Marketing", content: "As the Best digital marketing agency, we are dedicated to harnessing the power of innovative strategies to enhance your brand’s online presence. Our experienced team blends creativity with industry knowledge to deliver customised marketing solutions tailored to your specific goals. With a commitment to excellence and a results-driven approach, we aim to empower businesses to achieve growth and success in the digital landscape through impactful marketing initiatives.", bg: "bg-[#FF7F3E]", text: "text-white", src: "/serviceImg4.png" },
    { id: 5, title: "GPS Tracking", content: "GPS Vehicle Tracking is the process of tracking the real-time location and movement of vehicles using satellite signals. Our GPS Tracking Services utilize advanced GPS trackers to provide live tracking, historical data, and detailed reports. Whether you're managing a fleet of vehicles or just need to monitor a single vehicle, our Vehicle Tracking System offers you the complete solution.", bg: "bg-[#072060]", text: "text-white", src: "/Frame 1261154135.png" },
  ];


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setAnimate(entry.isIntersecting); // Set animate to true when in view, false when out
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      observer.disconnect(); // Cleanup on component unmount
    };
  }, []);

  return (
    <>
      <div className="h-auto w-full bg-white">
        <div
          ref={headerRef}
          className="h-1/4 flex flex-col justify-center items-center  "
        >
          <p
            className={`text-8xl font-medium font-weight-500 text-[#3C6FA2] mb-2 transform transition-transform duration-1500 ${
              animate ? "translate-x-0 opacity-100" : "-translate-x-120 opacity-0"
            }`}
          >
            Services
          </p>
          <p
            className={`text-8xl font-weight-500 text-[#4D4B4B] transform transition-transform duration-1500 delay-4 00 ${
              animate ? "translate-x-0 opacity-100" : "translate-x-120 opacity-0"
            }`}
          >
            We Provide
          </p>
        </div>
        <div className="h-3/4 bg-blue-900">
          <div className="w-full h-auto ">
            {containers.map((container, index) => (
              <div
                key={container.id}
                className={`flex overflow-hidden transition-all duration-300  ${
                  index < 4 ? "h-18 hover:h-[19rem] cursor-pointer" : "h-[16rem]"
                }`}
              >
                <div className={` w-3/5 pl-45 pr-25  ${container.text} ${container.bg}`}>
                  <div>
                    <div className="p-3 font-weight-900 font-bold text-3xl mb-3">{container.title}</div>
                    <div className="px-3  font-weight-300 text-xs leading-5">{container.content}</div>
                  </div>
                </div>
                <div className={`w-2/5 overflow-hiddenself-start  ${container.text} ${container.bg} p-4 group`}>
                  <div className=" relative w-[30rem] h-[10rem] transition-all duration-300 group-hover:h-[15rem]">
                    <Image
                      src={container.src}
                      alt={`${container.title} illustration`} 
                      // fill
                      width={250}
                      height={30}
                      className="object-contain "
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

export default ServicePage;