// // "use client";

// // import { useRef, useState, useEffect } from "react";
// // import { Swiper, SwiperSlide } from "swiper/react";
// // import { Autoplay, Controller } from "swiper/modules";
// // import { motion } from "framer-motion";
// // import Image from "next/image";

// // import "swiper/css";

// // export default function ClientCarousel() {
// //   const companies = [
// //     {
// //       logo: "/carouselimages/flythlogo.png",
// //       phone: "/carouselimages/flythimg.png",
// //     },
// //     {
// //       logo: "/carouselimages/aarishlogo.png",
// //       phone: "/carouselimages/aarishimg.png",
// //     },
// //     {
// //       logo: "/carouselimages/poshanalogo.png",
// //       phone: "/carouselimages/poshanaimg.png",
// //     },
// //     {
// //       logo: "/carouselimages/giftlogo.png",
// //       phone: "/carouselimages/giftimg.png",
// //     },
// //     {
// //       logo: "/carouselimages/healrlogo.png",
// //       phone: "/carouselimages/aarishimg1.png",
// //     },
// //   ];

// //   const phoneSwiperRef = useRef(null);
// //   const logoSwiperRef = useRef(null);
// //   const [activeIndex, setActiveIndex] = useState(0);
// //   const [inView, setInView] = useState(false);

// //   const onPhoneSlideChange = (swiper) => {
// //     const totalSlides = companies.length;
// //     const realIndex = swiper.realIndex % totalSlides;
// //     setActiveIndex(realIndex);
// //   };

// //   const onLogoClick = (index) => {
// //     if (phoneSwiperRef.current) {
// //       phoneSwiperRef.current.slideToLoop(index);
// //     }
// //   };

// //   // Intersection Observer for heading animation
// //   useEffect(() => {
// //     const section = document.getElementById("featured-heading");
// //     const observer = new IntersectionObserver(
// //       (entries) => {
// //         if (entries[0].isIntersecting) setInView(true);
// //       },
// //       { threshold: 0.3 }
// //     );
// //     if (section) observer.observe(section);
// //     return () => section && observer.unobserve(section);
// //   }, []);

// //   const heading = "Our Featured Projects".split(""); // keep spacing intact

// //   const letterVariants = {
// //     hidden: { color: "#7B7E86" }, // gray
// //     visible: { color: "#3C6FA2" }, // blue
// //   };

// //   return (
// //     <div className="w-full px-4 sm:px-8 md:px-12 overflow-x-hidden lg:px-16">
// //       {/* Animated Heading */}
// //       <h2
// //         id="featured-heading"
// //         className="font-['Urbanist'] text-2xl sm:text-3xl mt-5 md:text-5xl lg:text-6xl text-center text-[#7B7E86] mb-6 sm:mb-8 md:mb-10"
// //       >
// //         {heading.map((char, i) => (
// //           <motion.span
// //             key={i}
// //             variants={letterVariants}
// //             initial="hidden"
// //             whileInView="visible" //
// //             viewport={{ once: false, amount: 0.6 }} //  play again whenever visible
// //             transition={{ delay: i * 0.1, duration: 0.4 }}
// //             className="inline-block"
// //           >
// //             {char === " " ? "\u00A0" : char}
// //           </motion.span>
// //         ))}
// //       </h2>

// //       <p className="text-xs sm:text-sm md:text-lg lg:text-xl text-center font-normal mb-6 sm:mb-8 md:mb-10 text-[#071637]">
// //         Our Clients
// //       </p>

// //       <div className="relative max-w-7xl mx-auto space-y-2 xs:mt-0">
// //         {/* Logo Carousel */}
// //         <Swiper
// //           loop={true}
// //           autoplay={{ delay: 2500, disableOnInteraction: false }}
// //           speed={800}
// //           centeredSlides={true}
// //           spaceBetween={10}
// //           modules={[Controller, Autoplay]}
// //           breakpoints={{
// //             360: { slidesPerView: 1, spaceBetween: 10 },
// //             480: { slidesPerView: 2, spaceBetween: 12 },
// //             640: { slidesPerView: 3, spaceBetween: 14 },
// //             768: { slidesPerView: 3, spaceBetween: 16 },
// //             1024: { slidesPerView: 5, spaceBetween: 24 },
// //             1280: { slidesPerView: 5, spaceBetween: 24 },
// //             1536: { slidesPerView: 6, spaceBetween: 28 },
// //           }}
// //         >
// //           {companies.concat(companies).map((c, i) => (
// //             <SwiperSlide key={`logo-${i}`} onClick={() => onLogoClick(i)}>
// //               <div
// //                 className={`flex justify-center transition-transform duration-300 cursor-pointer ${
// //                   activeIndex === i
// //                     ? "scale-125 opacity-100"
// //                     : "scale-90 opacity-50"
// //                 }`}
// //               >
// //                 <Image
// //                   src={c.logo}
// //                   alt={`Logo ${i}`}
// //                   width={120}
// //                   height={100}
// //                   className="object-contain w-[50px] h-[30px] sm:w-[70px] sm:h-[40px] md:w-[90px] md:h-[55px] lg:w-[110px] lg:h-[70px]"
// //                 />
// //               </div>
// //             </SwiperSlide>
// //           ))}
// //         </Swiper>

// //         {/* Phone Carousel */}
// //         <div className="w-full flex justify-center phone-section   md:px-12 ">
// //           <Swiper
// //             className="client-swiper  w-full ml-auto   "
// //             loop={true}
// //             centeredSlides={true}
// //             autoplay={{ delay: 2500, disableOnInteraction: false }}
// //             speed={800}
// //             spaceBetween={30}
// //             modules={[Autoplay, Controller]}
// //             breakpoints={{
// //               344: { slidesPerView: 1, spaceBetween: 10 },
// //               360: { slidesPerView: 1, spaceBetween: 10 },
// //               480: { slidesPerView: 1.2, spaceBetween: 12 },
// //               640: { slidesPerView: 2, spaceBetween: 14 },
// //               768: { slidesPerView: 3, spaceBetween: 16 },
// //               1024: { slidesPerView: 5, spaceBetween: 24 },
// //               1280: { slidesPerView: 5, spaceBetween: 24 },
// //               1536: { slidesPerView: 5, spaceBetween: 28 },
// //             }}
// //             onSwiper={(swiper) => {
// //               phoneSwiperRef.current = swiper;
// //               if (logoSwiperRef.current)
// //                 swiper.controller.control = logoSwiperRef.current;
// //             }}
// //             onSlideChange={onPhoneSlideChange}
// //           >
// //             {companies.concat(companies).map((c, i) => (
// //               <SwiperSlide key={`phone-${i}`} className="flex justify-center">
// //                 <div className="phone-wrapper flex justify-center">
// //                   <Image
// //                     src={c.phone}
// //                     alt="phone image"
// //                     width={260}
// //                     height={520}
// //                     className="object-contain w-[60%] sm:w-3/4 md:w-60 lg:w-64"
// //                   />
// //                 </div>
// //               </SwiperSlide>
// //             ))}
// //           </Swiper>
// //         </div>
// //       </div>

// //       {/* Styles    */}
// //       <style jsx global>{`
// //   /* === Main Swiper wrapper styling === */
// //   .client-swiper {
// //     display: flex; 
// //     gap: 20px; /* Adds equal spacing between slides (left + right spacing) */
// //   }

// //   /* === Default phone wrapper styling === */
// //   .client-swiper .phone-wrapper {
// //     transform: scale(0.8) translateY(30px); /* Make phones smaller & pushed down by default */
// //     transition: transform 0.5s ease; /* Smooth scaling/translation effect */
// //     padding-top: 3rem; /* Space above phone */
// //     padding-bottom: 2.5rem; /* Space below phone */
// //   }

// //   /* === Active slide phones (bigger + centered on larger screens) === */
// //   @media (min-width: 480px) {
// //     .client-swiper .swiper-slide-active .phone-wrapper {
// //       transform: scale(1.2) translateY(0); /* Enlarge active phone & reset vertical shift */
// //     }
// //   }

// //   /* === Extra adjustment for active phone (all screen sizes) === */
// //   .client-swiper .swiper-slide-active .phone-wrapper {
// //     transform: scale(1.2) translateY(0) translateX(10px); /* Enlarge + shift slightly to the right */
// //     margin-right: 20px; /* Add spacing on right side of active phone */
// //   }

// //   /* === Previous & Next slide phones (slightly bigger than default) === */
// //   .client-swiper .swiper-slide-prev .phone-wrapper,
// //   .client-swiper .swiper-slide-next .phone-wrapper {
// //     transform: scale(0.95) translateY(15px); /* Smaller than active but larger than background */
// //   }

// //   /* === Farther Previous & Next phones (smaller + pushed more down) === */
// //   .client-swiper .prev-prev .phone-wrapper,
// //   .client-swiper .next-next .phone-wrapper {
// //     transform: scale(0.85) translateY(20px); /* Smallest scale for depth effect */
// //   }

// //   /* === Responsive: Landscape mode for tablets & small laptops === */
// //   @media (orientation: landscape) and (max-width: 1024px) {
// //     .phone-section {
// //       padding-top: 2rem !important; /* Adjust spacing at top in landscape */
// //       transform: translateX(0) !important; /* Reset unwanted horizontal shifts */
// //     }

// //     .client-swiper .phone-wrapper {
// //       width: 80% !important; /* Shrink phone width */
// //       transform: scale(0.7) translateY(20px) !important; /* Smaller scale + slightly lower */
// //     }

// //     .client-swiper .swiper-slide-active .phone-wrapper {
// //       transform: scale(1) translateY(0) !important; /* Active phone should appear centered & normal */
// //     }
// //   }

// //   /* === Responsive: Smaller devices in landscape (phones sideways) === */
// //   @media (orientation: landscape) and (max-width: 768px) {
// //     .client-swiper .phone-wrapper {
// //       width: 90% !important; /* Phones fill more width */
// //     }

// //     .client-swiper .swiper-slide-prev .phone-wrapper,
// //     .client-swiper .swiper-slide-next .phone-wrapper {
// //       transform: scale(0.85) translateY(10px) !important; /* Side phones smaller & slightly down */
// //     }
// //   }

// //   /* === Device-specific hacks for popular phones === */
// //   //@media only screen and (device-width: 390px) and (device-height: 844px), /* iPhone 12, 13, 14 */
// //   //       only screen and (device-width: 414px) and (device-height: 896px), /* iPhone 11, XR */
// //   //       only screen and (device-width: 375px) and (device-height: 812px), /* iPhone 11 Pro */
// //   //       only screen and (device-width: 412px) and (device-height: 915px), /* OnePlus Nord 2 */
// //   //       only screen and (device-width: 393px) and (device-height: 851px)  /* Pixel 5 */
// //   {
// //     .phone-section {
// //       padding-top: 5rem !important; /* Add extra top padding for these specific devices */
// //     }
// //   }
// // `}</style>

// //     </div>
// //   );
// // }


// // "use client";

// // import { useRef, useState, useEffect } from "react";
// // import { Swiper, SwiperSlide } from "swiper/react";
// // import { Autoplay, Controller } from "swiper/modules";
// // import { motion } from "framer-motion";
// // import Image from "next/image";

// // import "swiper/css";

// // export default function ClientCarousel() {
// //   const companies = [
// //     {
// //       logo: "/carouselimages/flythlogo.png",
// //       phone: "/carouselimages/flythimg.png",
// //     },
// //     {
// //       logo: "/carouselimages/aarishlogo.png",
// //       phone: "/carouselimages/aarishimg.png",
// //     },
// //     {
// //       logo: "/carouselimages/poshanalogo.png",
// //       phone: "/carouselimages/poshanaimg.png",
// //     },
// //     {
// //       logo: "/carouselimages/giftlogo.png",
// //       phone: "/carouselimages/giftimg.png",
// //     },
// //     {
// //       logo: "/carouselimages/healrlogo.png",
// //       phone: "/carouselimages/aarishimg1.png",
// //     },
// //   ];

// //   const phoneSwiperRef = useRef(null);
// //   const logoSwiperRef = useRef(null);
// //   const [activeIndex, setActiveIndex] = useState(0);
// //   const [inView, setInView] = useState(false);

// //   const onPhoneSlideChange = (swiper) => {
// //     const totalSlides = companies.length;
// //     const realIndex = swiper.realIndex % totalSlides;
// //     setActiveIndex(realIndex);
// //   };

// //   const onLogoClick = (index) => {
// //     if (phoneSwiperRef.current) {
// //       phoneSwiperRef.current.slideToLoop(index);
// //     }
// //   };

// //   // Intersection Observer for heading animation
// //   useEffect(() => {
// //     const section = document.getElementById("featured-heading");
// //     const observer = new IntersectionObserver(
// //       (entries) => {
// //         if (entries[0].isIntersecting) setInView(true);
// //       },
// //       { threshold: 0.3 }
// //     );
// //     if (section) observer.observe(section);
// //     return () => section && observer.unobserve(section);
// //   }, []);

// //   const heading = "Our Featured Projects".split(""); // keep spacing intact

// //   const letterVariants = {
// //     hidden: { color: "#7B7E86" }, // gray
// //     visible: { color: "#3C6FA2" }, // blue
// //   };

// //   return (
// //     <div className="w-full px-4 sm:px-8 md:px-12 overflow-x-hidden lg:px-16">
// //       {/* Animated Heading */}
// //       <h2
// //         id="featured-heading"
// //         className="font-['Urbanist'] text-2xl sm:text-3xl mt-5 md:text-5xl lg:text-6xl text-center text-[#7B7E86] mb-6 sm:mb-8 md:mb-10"
// //       >
// //         {heading.map((char, i) => (
// //           <motion.span
// //             key={i}
// //             variants={letterVariants}
// //             initial="hidden"
// //             whileInView="visible" //
// //             viewport={{ once: false, amount: 0.6 }} //  play again whenever visible
// //             transition={{ delay: i * 0.1, duration: 0.4 }}
// //             className="inline-block"
// //           >
// //             {char === " " ? "\u00A0" : char}
// //           </motion.span>
// //         ))}
// //       </h2>

// //       <p className="text-xs sm:text-sm md:text-lg lg:text-xl text-center font-normal mb-6 sm:mb-8 md:mb-10 text-[#071637]">
// //         Our Clients
// //       </p>

// //       <div className="relative max-w-7xl mx-auto space-y-2 xs:mt-0">
// //         {/* Logo Carousel */}
// //         <Swiper
// //           loop={true}
// //           autoplay={{ delay: 2500, disableOnInteraction: false }}
// //           speed={800}
// //           centeredSlides={true}
// //           spaceBetween={10}
// //           modules={[Controller, Autoplay]}
// //           breakpoints={{
// //             360: { slidesPerView: 1, spaceBetween: 10 },
// //             480: { slidesPerView: 2, spaceBetween: 12 },
// //             640: { slidesPerView: 3, spaceBetween: 14 },
// //             768: { slidesPerView: 3, spaceBetween: 16 },
// //             1024: { slidesPerView: 5, spaceBetween: 24 },
// //             1280: { slidesPerView: 5, spaceBetween: 24 },
// //             1536: { slidesPerView: 6, spaceBetween: 28 },
// //           }}
// //         >
// //           {companies.concat(companies).map((c, i) => (
// //             <SwiperSlide key={`logo-${i}`} onClick={() => onLogoClick(i)}>
// //               <div
// //                 className={`flex justify-center transition-transform duration-300 cursor-pointer ${
// //                   activeIndex === i
// //                     ? "scale-125 opacity-100"
// //                     : "scale-90 opacity-50"
// //                 }`}
// //               >
// //                 <Image
// //                   src={c.logo}
// //                   alt={`Logo ${i}`}
// //                   width={120}
// //                   height={100}
// //                   className="object-contain w-[50px] h-[30px] sm:w-[70px] sm:h-[40px] md:w-[90px] md:h-[55px] lg:w-[110px] lg:h-[70px]"
// //                 />
// //               </div>
// //             </SwiperSlide>
// //           ))}
// //         </Swiper>

// //         {/* Phone Carousel */}
// //         <div className="w-full flex justify-center phone-section   md:px-12 ">
// //           <Swiper
// //             className="client-swiper  w-full ml-auto   "
// //             loop={true}
// //             centeredSlides={true}
// //             autoplay={{ delay: 2500, disableOnInteraction: false }}
// //             speed={800}
// //             spaceBetween={30}
// //             modules={[Autoplay, Controller]}
// //             breakpoints={{
// //               344: { slidesPerView: 1, spaceBetween: 10 },
// //               360: { slidesPerView: 1, spaceBetween: 10 },
// //               480: { slidesPerView: 1.2, spaceBetween: 12 },
// //               640: { slidesPerView: 2, spaceBetween: 14 },
// //               768: { slidesPerView: 3, spaceBetween: 16 },
// //               1024: { slidesPerView: 5, spaceBetween: 24 },
// //               1280: { slidesPerView: 5, spaceBetween: 24 },
// //               1536: { slidesPerView: 5, spaceBetween: 28 },
// //             }}
// //             onSwiper={(swiper) => {
// //               phoneSwiperRef.current = swiper;
// //               if (logoSwiperRef.current)
// //                 swiper.controller.control = logoSwiperRef.current;
// //             }}
// //             onSlideChange={onPhoneSlideChange}
// //           >
// //             {companies.concat(companies).map((c, i) => (
// //               <SwiperSlide key={`phone-${i}`} className="flex justify-center">
// //                 <div className="phone-wrapper flex justify-center">
// //                   <Image
// //                     src={c.phone}
// //                     alt="phone image"
// //                     width={260}
// //                     height={520}
// //                     className="object-contain w-[60%] sm:w-3/4 md:w-60 lg:w-64"
// //                   />
// //                 </div>
// //               </SwiperSlide>
// //             ))}
// //           </Swiper>
// //         </div>
// //       </div>

// //       {/* Styles    */}
// //       <style jsx global>{`
// //   /* === Main Swiper wrapper styling === */
// //   .client-swiper {
// //     display: flex; 
// //     gap: 20px; /* Adds equal spacing between slides (left + right spacing) */
// //   }

// //   /* === Default phone wrapper styling === */
// //   .client-swiper .phone-wrapper {
// //     transform: scale(0.8) translateY(30px); /* Make phones smaller & pushed down by default */
// //     transition: transform 0.5s ease; /* Smooth scaling/translation effect */
// //     padding-top: 3rem; /* Space above phone */
// //     padding-bottom: 2.5rem; /* Space below phone */
// //   }

// //   /* === Active slide phones (bigger + centered on larger screens) === */
// //   @media (min-width: 480px) {
// //     .client-swiper .swiper-slide-active .phone-wrapper {
// //       transform: scale(1.2) translateY(0); /* Enlarge active phone & reset vertical shift */
// //     }
// //   }

// //   /* === Extra adjustment for active phone (all screen sizes) === */
// //   .client-swiper .swiper-slide-active .phone-wrapper {
// //     transform: scale(1.2) translateY(0) translateX(10px); /* Enlarge + shift slightly to the right */
// //     margin-right: 20px; /* Add spacing on right side of active phone */
// //   }

// //   /* === Previous & Next slide phones (slightly bigger than default) === */
// //   .client-swiper .swiper-slide-prev .phone-wrapper,
// //   .client-swiper .swiper-slide-next .phone-wrapper {
// //     transform: scale(0.95) translateY(15px); /* Smaller than active but larger than background */
// //   }

// //   /* === Farther Previous & Next phones (smaller + pushed more down) === */
// //   .client-swiper .prev-prev .phone-wrapper,
// //   .client-swiper .next-next .phone-wrapper {
// //     transform: scale(0.85) translateY(20px); /* Smallest scale for depth effect */
// //   }

// //   /* === Responsive: Landscape mode for tablets & small laptops === */
// //   @media (orientation: landscape) and (max-width: 1024px) {
// //     .phone-section {
// //       padding-top: 2rem !important; /* Adjust spacing at top in landscape */
// //       transform: translateX(0) !important; /* Reset unwanted horizontal shifts */
// //     }

// //     .client-swiper .phone-wrapper {
// //       width: 80% !important; /* Shrink phone width */
// //       transform: scale(0.7) translateY(20px) !important; /* Smaller scale + slightly lower */
// //     }

// //     .client-swiper .swiper-slide-active .phone-wrapper {
// //       transform: scale(1) translateY(0) !important; /* Active phone should appear centered & normal */
// //     }
// //   }

// //   /* === Responsive: Smaller devices in landscape (phones sideways) === */
// //   @media (orientation: landscape) and (max-width: 768px) {
// //     .client-swiper .phone-wrapper {
// //       width: 90% !important; /* Phones fill more width */
// //     }

// //     .client-swiper .swiper-slide-prev .phone-wrapper,
// //     .client-swiper .swiper-slide-next .phone-wrapper {
// //       transform: scale(0.85) translateY(10px) !important; /* Side phones smaller & slightly down */
// //     }
// //   }

// //   /* === Device-specific hacks for popular phones === */
// //   //@media only screen and (device-width: 390px) and (device-height: 844px), /* iPhone 12, 13, 14 */
// //   //       only screen and (device-width: 414px) and (device-height: 896px), /* iPhone 11, XR */
// //   //       only screen and (device-width: 375px) and (device-height: 812px), /* iPhone 11 Pro */
// //   //       only screen and (device-width: 412px) and (device-height: 915px), /* OnePlus Nord 2 */
// //   //       only screen and (device-width: 393px) and (device-height: 851px)  /* Pixel 5 */
// //   {
// //     .phone-section {
// //       padding-top: 5rem !important; /* Add extra top padding for these specific devices */
// //     }
// //   }
// // `}</style>

// //     </div>
// //   );
// // }











"use client";

import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Controller } from "swiper/modules";
import { motion } from "framer-motion";
import Image from "next/image";

import "swiper/css";

export default function ClientCarousel() {
  const companies = [
    { logo: "/carouselimages/flythlogo.png", phone: "/carouselimages/flythimg.png" },
    { logo: "/carouselimages/aarishlogo.png", phone: "/carouselimages/aarishimg.png" },
    { logo: "/carouselimages/poshanalogo.png", phone: "/carouselimages/poshanaimg.png" },
    { logo: "/carouselimages/giftlogo.png", phone: "/carouselimages/giftimg.png" },
    { logo: "/carouselimages/healrlogo.png", phone: "/carouselimages/aarishimg1.png" },
  ];

  const phoneSwiperRef = useRef(null);
  const logoSwiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [inView, setInView] = useState(false);

  // Update active index when phone carousel changes
  const onPhoneSlideChange = (swiper) => {
    const totalSlides = companies.length;
    const realIndex = swiper.realIndex % totalSlides;
    setActiveIndex(realIndex);

    // sync logo carousel
    if (logoSwiperRef.current) {
      logoSwiperRef.current.slideToLoop(realIndex);
    }
  };

  // Logo click scrolls phone carousel
  const onLogoClick = (index) => {
    if (phoneSwiperRef.current) {
      phoneSwiperRef.current.slideToLoop(index);
    }
  };

  // Intersection Observer for heading animation
  useEffect(() => {
    const section = document.getElementById("featured-heading");
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setInView(true);
      },
      { threshold: 0.3 }
    );
    if (section) observer.observe(section);
    return () => section && observer.unobserve(section);
  }, []);

  const heading = "Our Featured Projects".split("");

  const letterVariants = {
    hidden: { color: "#7B7E86" },
    visible: { color: "#3C6FA2" },
  };

  return (
    <div className="w-full px-4 sm:px-8 md:px-12 overflow-x-hidden lg:px-16">
      {/* Animated Heading */}
      <h2
        id="featured-heading"
        className="font-['Urbanist'] text-2xl sm:text-3xl mt-5 md:text-5xl lg:text-6xl text-center text-[#7B7E86] mb-6 sm:mb-8 md:mb-10"
      >
        {heading.map((char, i) => (
          <motion.span
            key={i}
            variants={letterVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.6 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </h2>

      <p className="text-xs sm:text-sm md:text-lg lg:text-xl text-center font-normal mb-6 sm:mb-8 md:mb-10 text-[#071637]">
        Our Clients
      </p>

      <div className="relative max-w-7xl mx-auto space-y-2 xs:mt-0">
        {/* Logo Carousel */}
        <Swiper
          loop={true}
          centeredSlides={true}
             slidesPerView="auto" 
          speed={800}
          spaceBetween={10}
          modules={[Controller, Autoplay]}
          onSwiper={(swiper) => (logoSwiperRef.current = swiper)}
          // slidesPerView={5}
          breakpoints={{
            360: { slidesPerView: 1, spaceBetween: 3 },
            480: { slidesPerView: 2, spaceBetween: 4 },
            640: { slidesPerView: 3, spaceBetween: 5 },
            768: { slidesPerView: 4, spaceBetween: 6 },
            1024: { slidesPerView: 5, spaceBetween: 10 },
            1280: { slidesPerView: 5, spaceBetween: 10 },
            1536: { slidesPerView: 5, spaceBetween: 10 },
          }}
        >
          {companies.concat(companies).map((c, i) => (
            <SwiperSlide key={`logo-${i}`} onClick={() => onLogoClick(i)}>
              <div
                className={`flex justify-center transition-transform duration-300 cursor-pointer ${
                  activeIndex === i ? "scale-125 opacity-100" : "scale-90 opacity-50"
                }`}
              >
                <Image
                  src={c.logo}
                  alt={`Logo ${i}`}
                  width={120}
                  height={100}
                  className="object-contain w-[50px] h-[30px] sm:w-[70px] sm:h-[40px] md:w-[90px] md:h-[55px] lg:w-[110px] lg:h-[70px]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Phone Carousel */}
        <div className="w-full flex justify-center phone-section md:px-12">
          <Swiper
            className="client-swiper w-full"
            loop={true}
            centeredSlides={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            speed={800}
               slidesPerView="auto" 
            spaceBetween={10}
            modules={[Autoplay, Controller]}
            onSwiper={(swiper) => {
              phoneSwiperRef.current = swiper;
              if (logoSwiperRef.current) swiper.controller.control = logoSwiperRef.current;
            }}
            onSlideChange={onPhoneSlideChange}
            // slidesPerView={3}
            breakpoints={{
              344: { slidesPerView: 1, spaceBetween: 5 },
              360: { slidesPerView: 1, spaceBetween: 5 },
              480: { slidesPerView: 1.2, spaceBetween: 6 },
              640: { slidesPerView: 2, spaceBetween: 10 },
              768: { slidesPerView: 4, spaceBetween: 12 },
              1024: { slidesPerView: 5, spaceBetween: 20 },
              1280: { slidesPerView: 5, spaceBetween: 24 },
              1536: { slidesPerView: 5, spaceBetween: 28 },
            }}
          >
            {companies.concat(companies).map((c, i) => (
              <SwiperSlide key={`phone-${i}`} className="flex justify-center">
                <div className="phone-wrapper flex justify-center">
                  <Image
                    src={c.phone}
                    alt={`Phone ${i}`}
                    width={260}
                    height={520}
                    className="object-contain w-[60%] sm:w-3/4 md:w-60 lg:w-64"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Styles */}
      <style jsx global>{`
        .client-swiper .phone-wrapper {
          transform: scale(0.8) translateY(30px);
          transition: transform 0.5s ease;
          padding-top: 3rem;
          padding-bottom: 2.5rem;
        }
        .client-swiper .swiper-slide-active .phone-wrapper {
          transform: scale(1.2) translateY(0);
        }
        .client-swiper .swiper-slide-prev .phone-wrapper,
        .client-swiper .swiper-slide-next .phone-wrapper {
          transform: scale(0.95) translateY(10px);
        }
        .client-swiper .prev-prev .phone-wrapper,
        .client-swiper .next-next .phone-wrapper {
          transform: scale(0.85) translateY(10px);
        }
          /* === Responsive: Landscape mode for tablets & small laptops === */
  @media (orientation: landscape) and (max-width: 1024px) {
    .phone-section {
      padding-top: 1rem !important; /* Adjust spacing at top in landscape */
      transform: translateX(0) !important; /* Reset unwanted horizontal shifts */
    }

    .client-swiper .phone-wrapper {
      width: 80% !important; /* Shrink phone width */
      transform: scale(0.9) translateY(0) !important; /* Smaller scale + slightly lower */
    }

    .client-swiper .swiper-slide-active .phone-wrapper {
      transform: scale(1) translateY(0) !important; /* Active phone should appear centered & normal */
    }
  }



  @media (max-width: 640px) {
  .client-carousel-container {
    padding-left: 0.5rem !important;
    padding-right: 0.5rem !important;
  }
}
   

   @media (max-width: 360px) {
          .phone-section {
            margin-top: 1rem !important; /* reduce gap */
          }
        }

        /* Mobile landscape: reduce vertical padding between logos and phone */
        @media (orientation: landscape) and (max-width: 767px) {
          .phone-section {
            margin-top: 0.5rem !important;
          }
        }   
   @media (orientation: landscape) and (max-width: 767px) {
    .phone-section {
      margin-top: 0.3rem !important;
    }
    .client-swiper .phone-wrapper {
      padding-top: 0.5rem !important;
      padding-bottom: 1rem !important;
    }
  }
      `}</style>
    </div>
  );
}
