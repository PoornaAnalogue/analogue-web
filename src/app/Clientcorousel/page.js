"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Controller } from "swiper/modules";
import Image from "next/image";

import "swiper/css";

export default function ClientCarousel() {
  const companies = [
    { logo: "/flythlogo.png", phone: "/flythimg.png" },
    { logo: "/aarishlogo.png", phone: "/aarishimg.png" },
    { logo: "/poshanalogo.png", phone: "/poshanaimg.png" },
    { logo: "/giftlogo.png", phone: "/giftimg.png" },
    { logo: "/healrlogo.png", phone: "/aarishimg1.png" },
  ];

  const phoneSwiperRef = useRef(null);
  const logoSwiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const onPhoneSlideChange = (swiper) => {
    const totalSlides = companies.length;
    const realIndex = swiper.realIndex % totalSlides;
    setActiveIndex(realIndex);
  };

  const onLogoClick = (index) => {
    if (phoneSwiperRef.current) {
      phoneSwiperRef.current.slideToLoop(index);
    }
  };

  return (
    <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 ">
      {/* Featured Projects....... */}
      <h2 className="text-2xl sm:text-3xl mt-5 md:text-5xl lg:text-6xl text-center text-[#7B7E86] mb-6 sm:mb-8 md:mb-10">
        <span className="text-blue-400">O</span>
        <span className="text-gray-300">ur Featured Projects</span>
      </h2>

      <p className="text-xs sm:text-sm md:text-lg lg:text-xl text-center font-normal mb-6 sm:mb-8 md:mb-10 text-[#071637]">
        Our Clients
      </p>

      <div className="relative max-w-7xl mx-auto space-y-10">
        {/* Logo............... */}

        <Swiper
          loop={true}
          loopedSlides={companies.length}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          speed={800}
          slidesPerView={5}
          centeredSlides={true}
          spaceBetween={24}
          modules={[Controller, Autoplay]}
          breakpoints={{
            360: { slidesPerView: 1.5, spaceBetween: 10 },
            480: { slidesPerView: 2.5, spaceBetween: 12 },
            640: { slidesPerView: 3.5, spaceBetween: 16 },
            768: { slidesPerView: 4, spaceBetween: 20 },
            1024: { slidesPerView: 5, spaceBetween: 24 },
          }}
        >
          {companies.concat(companies).map((c, i) => (
            <SwiperSlide key={`logo-${i}`} onClick={() => onLogoClick(i)}>
              <div
                className={`flex justify-center transition-transform duration-300 cursor-pointer ${
                  activeIndex === i
                    ? "scale-125 opacity-100"
                    : "scale-90 opacity-50"
                }`}
              >
                <Image
                  src={c.logo}
                  alt={`Logo ${i}`}
                  width={120}
                  height={100}
                  className="object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Phone Carousel..............*/}
        
        <div className="w-full flex justify-center    translate-x-10  mx-auto">
          <Swiper
            className="client-swiper w-full  mx-auto mr-8 "
            loop={true}
            centeredSlides={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            speed={800}
            slidesPerView={5}
            spaceBetween={10}
            modules={[Autoplay, Controller]}
            breakpoints={{
              360: { slidesPerView: 1.2, spaceBetween: 10 },
              480: { slidesPerView: 1.5, spaceBetween: 12 },
              640: { slidesPerView: 2, spaceBetween: 14 },
              768: { slidesPerView: 3, spaceBetween: 16 },
              1024: { slidesPerView: 5, spaceBetween: 20 },
            }}
            onSwiper={(swiper) => {
              phoneSwiperRef.current = swiper;
              if (logoSwiperRef.current)
                swiper.controller.control = logoSwiperRef.current;
            }}
            onSlideChange={onPhoneSlideChange}
          >
            {companies.concat(companies).map((c, i) => (
              <SwiperSlide key={`phone-${i}`} className="flex justify-center">
                <div className="phone-wrapper flex justify-center">
                  <Image
                    src={c.phone}
                    alt={`Phone ${i}`}
                    width={260}
                    height={520}
                    className="object-contain w-[70%] sm:w-3/4 md:w-60 lg:w-64"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Styles .............*/}
      <style jsx global>{`
        .client-swiper .phone-wrapper {
          transform: scale(0.8) translateY(30px);
          transition: transform 0.5s ease;
          padding-top: 2rem; /* keep padding same for all */
        }

        .client-swiper .swiper-slide-active .phone-wrapper {
          transform: scale(1.2) translateY(0);
        }

        .client-swiper .swiper-slide-prev .phone-wrapper,
        .client-swiper .swiper-slide-next .phone-wrapper {
          transform: scale(0.95) translateY(15px);
        }

        .client-swiper .prev-prev .phone-wrapper,
        .client-swiper .next-next .phone-wrapper {
          transform: scale(0.85) translateY(20px);
        }
      `}</style>
    </div>
  );
}
