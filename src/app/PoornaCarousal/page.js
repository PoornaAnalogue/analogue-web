// "use client";

// import { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Controller } from "swiper/modules";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import "swiper/css";

// export default function ClientCarousel() {
//   const companies = [
//     { logo: "/carouselimages/flythlogo.png", phone: "/carouselimages/flythimg.png" },
//     { logo: "/carouselimages/aarishlogo.png", phone: "/carouselimages/aarishimg.png" },
//     { logo: "/carouselimages/poshanalogo.png", phone: "/carouselimages/poshanaimg.png" },
//     { logo: "/carouselimages/giftlogo.png", phone: "/carouselimages/giftimg.png" },
//     { logo: "/carouselimages/healrlogo.png", phone: "/carouselimages/aarishimg1.png" },
//   ];

//   const phoneSwiperRef = useRef(null);
//   const logoSwiperRef = useRef(null);
//   const [activeIndex, setActiveIndex] = useState(0);

//   // Fixed function with proper index wrapping
//   const onPhoneSlideChange = (swiper) => {
//     const slides = swiper.slides;
//     slides.forEach((s) =>
//       s.classList.remove("prev-prev", "next-next")
//     );

//     const activeIndex = swiper.activeIndex;
//     const totalSlides = slides.length;

//     // Calculate indices with proper wrapping
//     let prevPrevIndex = activeIndex - 2;
//     let nextNextIndex = activeIndex + 2;

//     // Handle negative wrap-around for left edge
//     if (prevPrevIndex < 0) {
//       prevPrevIndex = totalSlides + prevPrevIndex;
//     }

//     // Handle positive wrap-around for right edge
//     if (nextNextIndex >= totalSlides) {
//       nextNextIndex = nextNextIndex - totalSlides;
//     }

//     // Apply classes to the wrapped indices
//     if (slides[prevPrevIndex]) {
//       slides[prevPrevIndex].classList.add("prev-prev");
//     }
//     if (slides[nextNextIndex]) {
//       slides[nextNextIndex].classList.add("next-next");
//     }

//     console.log('Active:', activeIndex, 'Left edge:', prevPrevIndex, 'Right edge:', nextNextIndex);
//   };

//   const onLogoClick = (index) => {
//     if (phoneSwiperRef.current) {
//       phoneSwiperRef.current.slideToLoop(index);
//     }
//   };

//   // heading animation
//   const heading = "Our Featured Projects".split("");
//   const letterVariants = {
//     hidden: { color: "#7B7E86" },
//     visible: { color: "#3C6FA2" },
//   };

//   return (
//     <div className="w-full px-4 sm:px-8 md:px-12 overflow-x-hidden lg:px-16 pb-10">
//       {/* Animated Heading */}
//       <h2
//         id="featured-heading"
//         className="font-['Urbanist'] text-2xl sm:text-3xl mt-5 md:text-5xl lg:text-6xl text-center text-[#7B7E86] mb-6 sm:mb-8 md:mb-10"
//       >
//         {heading.map((char, i) => (
//           <motion.span
//             key={i}
//             variants={letterVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: false, amount: 0.6 }}
//             transition={{ delay: i * 0.1, duration: 0.4 }}
//             className="inline-block"
//           >
//             {char === " " ? "\u00A0" : char}
//           </motion.span>
//         ))}
//       </h2>

//       <p className="text-xs sm:text-sm md:text-lg lg:text-xl text-center font-normal mb-6 sm:mb-8 md:mb-10 text-[#071637]">
//         Our Clients
//       </p>

//       <div className="relative max-w-7xl mx-auto space-y-2 xs:mt-0">
//         {/* Logo Carousel */}
//         <Swiper
//           loop={true}
//           centeredSlides={true}
//           slidesPerView="auto"
//           speed={800}
//           spaceBetween={10}
//           modules={[Controller, Autoplay]}
//           onSwiper={(swiper) => (logoSwiperRef.current = swiper)}
//           breakpoints={{
//             360: { slidesPerView: 1, spaceBetween: 3 },
//             480: { slidesPerView: 2, spaceBetween: 4 },
//             640: { slidesPerView: 3, spaceBetween: 5 },
//             768: { slidesPerView: 4, spaceBetween: 6 },
//             1024: { slidesPerView: 5, spaceBetween: 10 },
//           }}
//         >
//           {companies.concat(companies).map((c, i) => (
//             <SwiperSlide key={`logo-${i}`} onClick={() => onLogoClick(i)}>
//               <div
//                 className={`flex justify-center transition-transform duration-300 cursor-pointer ${activeIndex === i
//                   ? "scale-125 opacity-100"
//                   : "scale-90 opacity-50"
//                   }`}
//               >
//                 <Image
//                   src={c.logo}
//                   alt={`Logo ${i}`}
//                   width={120}
//                   height={100}
//                   className="object-contain w-[50px] h-[30px] sm:w-[70px] sm:h-[40px] md:w-[90px] md:h-[55px] lg:w-[110px] lg:h-[70px]"
//                 />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Phone Carousel */}
//         <div className="w-full flex justify-center phone-section md:px-12">
//           <Swiper
//             className="client-swiper w-full"
//             loop={true}
//             centeredSlides={true}
//             autoplay={{ delay: 2500, disableOnInteraction: false }}
//             speed={800}
//             slidesPerView="auto"
//             spaceBetween={-30}
//             modules={[Autoplay, Controller]}
//             onSwiper={(swiper) => {
//               phoneSwiperRef.current = swiper;
//               if (logoSwiperRef.current)
//                 swiper.controller.control = logoSwiperRef.current;
//               onPhoneSlideChange(swiper); // init
//             }}
//             // onSetTranslate={onPhoneSlideChange}
//             // onSlideChange={onPhoneSlideChange}
//              onSlideChangeTransitionEnd={onPhoneSlideChange}
//             breakpoints={{
//               360: { slidesPerView: 1.2, spaceBetween: 10 },
//               640: { slidesPerView: 1, spaceBetween: 10 },
//               768: { slidesPerView: 3, spaceBetween: 20 },
//               1024: { slidesPerView: 5, spaceBetween: 40 },
//             }}
//           >
//             {companies.concat(companies).map((c, i) => (
//               <SwiperSlide key={`phone-${i}`} className="flex justify-center">
//                 <div className="phone-wrapper flex justify-center">
//                   <Image
//                     src={c.phone}
//                     alt={`Phone ${i}`}
//                     width={260}
//                     height={520}
//                     className="object-contain w-[60%] sm:w-3/4 md:w-60 lg:w-64"
//                   />
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>

//       {/* Styles - Adding edge classes */}
//       <style jsx global>{`
//         .client-swiper .phone-wrapper {
//           transform: scale(0.8) translateY(30px);
//           transition: transform 0.5s ease, z-index 0.5s ease;
//           padding-top: 3rem;
//           padding-bottom: 2.5rem;
//         }
//         .client-swiper .swiper-slide-active .phone-wrapper {
//           transform: scale(1.2) translateY(0);
//           z-index: 3;
//         }
//         .client-swiper .swiper-slide-prev .phone-wrapper,
//         .client-swiper .swiper-slide-next .phone-wrapper {
//           transform: scale(1.05) translateY(10px);
//           z-index: 2;
//         }
//         .client-swiper .prev-prev .phone-wrapper,
//         .client-swiper .next-next .phone-wrapper,
//         .client-swiper .edge-left .phone-wrapper,
//         .client-swiper .edge-right .phone-wrapper {
//         border-[10rem] border-red-500 !important 
//           transform: scale(1) translateY(35px) !important;
//           z-index: 1 !important;
//         }
//         .client-swiper .prev-prev .phone-wrapper{
//           transform: scale(1) translateY(35px) !important;
//           z-index: 1 !important;
//            }




//                      /* === Responsive: Landscape mode for tablets & small laptops === */
// //   @media (orientation: landscape) and (max-width: 1024px) {
// //     .phone-section {
// //       padding-top: 1rem !important; /* Adjust spacing at top in landscape */
// //       transform: translateX(0) !important; /* Reset unwanted horizontal shifts */
// //     }

// //     .client-swiper .phone-wrapper {
// //       width: 80% !important; /* Shrink phone width */
// //       transform: scale(0.9) translateY(0) !important; /* Smaller scale + slightly lower */
// //     }

// //     .client-swiper .swiper-slide-active .phone-wrapper {
// //       transform: scale(1) translateY(0) !important; /* Active phone should appear centered & normal */
// //     }
// //   }



// //   @media (max-width: 640px) {
// //   .client-carousel-container {
// //     // padding-left: 0.5rem !important;
// //     // padding-right: 0.5rem !important;
// //                 transform:scale(0.5)    //image bottom border is cutting so check that once

// //   }
// // }
   

// //    @media (max-width: 360px) {
// //           .phone-section {
// //             margin-top: 1rem !important; /* reduce gap */
// //           }
// //         }
// //           @media (max-width: 480px) {
// //           .phone-section {
// //             margin-top: -5rem !important; /* reduce gap */
// //             transform:scale(0.6)    //image bottom border is cutting so check that once
// //           }
// //         }


// //         /* Mobile landscape: reduce vertical padding between logos and phone */
// //         @media (orientation: landscape) and (max-width: 767px) {
// //           .phone-section {
// //             margin-top: 0.5rem !important;
// //           }
// //         }   
// //    @media (orientation: landscape) and (max-width: 767px) {
// //     .phone-section {
// //       margin-top: 0.3rem !important;
// //     }
// //     .client-swiper .phone-wrapper {
// //       padding-top: 0.5rem !important;
// //       padding-bottom: 1rem !important;
// //     }
// //   }




// @media (orientation: landscape) and (max-width: 1024px) {
//   .phone-section {
//     padding-top: 1rem !important; /* Adjust spacing at top in landscape */
//     transform: translateX(0) !important; /* Reset unwanted horizontal shifts */
//   }

//   .client-swiper .phone-wrapper {
//     width: 80% !important; /* Shrink phone width */
//     transform: scale(0.9) translateY(0) !important; /* Smaller scale + slightly lower */
//   }

//   .client-swiper .swiper-slide-active .phone-wrapper {
//     transform: scale(1) translateY(0) !important; /* Active phone should appear centered & normal */
//   }
// }

// @media (max-width: 640px) {
//   .client-carousel-container {
//     // padding-left: 0.5rem !important;
//     // padding-right: 0.5rem !important;
//     transform: scale(1); /* Reset to default scale, adjust phone wrapper instead */
//   }

//   .client-swiper .phone-wrapper {
//     transform: scale(0.75) translateY(0) !important; /* Slightly smaller phone size */
//     padding-bottom: 1rem !important; /* Prevent bottom border cutting */
//   }
// }

// @media (max-width: 480px) {
//   .phone-section {
//     margin-top: -5rem !important; /* reduce gap */
//     transform: scale(1); /* Reset to default scale, adjust phone wrapper instead */
//   }

//   .client-swiper .phone-wrapper {
//     transform: scale(0.7) translateY(0) !important; /* Slightly smaller phone size */
//     padding-bottom: 1.5rem !important; /* Prevent bottom border cutting */
//   }
// }

// @media (max-width: 360px) {
//   .phone-section {
//     margin-top: 1rem !important; /* reduce gap */
//   }
// }

// @media (orientation: landscape) and (max-width: 767px) {
//   .phone-section {
//     margin-top: 0.5rem !important;
//   }
// }

// @media (orientation: landscape) and (max-width: 767px) {
//   .phone-section {
//     margin-top: 0.3rem !important;
//   }
//   .client-swiper .phone-wrapper {
//     padding-top: 0.5rem !important;
//     padding-bottom: 1rem !important;
//   }
// }


//       `}</style>
//     </div>
//   );
// }