
"use client";

import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Controller } from "swiper/modules";
import { motion } from "framer-motion";
import Image from "next/image";

import "swiper/css";

export default function ClientCarousel() {
  const companies = [
    {
      logo: "/carouselimages/flythlogo.png",
      phone: "/carouselimages/flythimg.png",
    },
    {
      logo: "/carouselimages/aarishlogo.png",
      phone: "/carouselimages/aarishimg.png",
    },
    {
      logo: "/carouselimages/poshanalogo.png",
      phone: "/carouselimages/poshanaimg.png",
    },
    {
      logo: "/carouselimages/giftlogo.png",
      phone: "/carouselimages/giftimg.png",
    },
    {
      logo: "/carouselimages/healrlogo.png",
      phone: "/carouselimages/aarishimg1.png",
    },
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
            slidesPerView={1}
          speed={800}
          spaceBetween={10}
          modules={[Controller, Autoplay]}
          onSwiper={(swiper) => (logoSwiperRef.current = swiper)}
          // slidesPerView={5}
          breakpoints={{
  344: { slidesPerView: 1, spaceBetween: 5 },
  480: { slidesPerView: 1.2, spaceBetween: 6 },
  640: { slidesPerView: 3, spaceBetween: 10 },
  768: { slidesPerView: 3, spaceBetween: 12 },
  1024: { slidesPerView: 5, spaceBetween: 16 },  // ✅ equal gap
  1280: { slidesPerView: 5, spaceBetween: 24 },
  1536: { slidesPerView: 5, spaceBetween: 28 },
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
            centeredSlidesBounds={true}
            modules={[Autoplay, Controller]}
            onSwiper={(swiper) => {
              phoneSwiperRef.current = swiper;
              if (logoSwiperRef.current)
                swiper.controller.control = logoSwiperRef.current;
            }}
            onSlideChange={onPhoneSlideChange}
            // slidesPerView={3}
            breakpoints={{
              344: { slidesPerView: 1, spaceBetween: 5 },
              360: { slidesPerView: 1, spaceBetween: 5 },
              480: { slidesPerView: 1.2, spaceBetween: 6 },
              640: { slidesPerView: 3, spaceBetween: 5 },
              768: { slidesPerView: 3, spaceBetween: 12 },
              1024: { slidesPerView: 5, spaceBetween: 16 },
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
  /* 🔹 Default phone wrapper animation styles */
  .client-swiper .phone-wrapper {
    transform: scale(0.8) translateY(30px); /* smaller & pushed down by default */
    transition: transform 0.5s ease;        /* smooth scaling animation */
    padding-top: 3rem;                      /* top spacing */
                 
  }

  /* 🔹 Active slide (center) → enlarge and reset position */
  .client-swiper .swiper-slide-active .phone-wrapper {
    transform: scale(1.2) translateY(); /* bigger when active */
  }

  /* 🔹 Immediate neighbors (prev & next) → slightly bigger than default */
  .client-swiper .swiper-slide-prev .phone-wrapper,
  .client-swiper .swiper-slide-next .phone-wrapper {
    transform: scale(0.95) translateY(0px);
  }

  /* 🔹 2 steps away (prev-prev & next-next) → smaller */
  .client-swiper .prev-prev .phone-wrapper,
  .client-swiper .next-next .phone-wrapper {
    transform: scale(0.95) translateY();
  }

  /* 🔹 Small screen adjustments */
  @media (max-width: 640px) {
    .client-carousel-container {
      padding-left: 0.5rem !important;  /* reduce side padding */
      padding-right: 0.5rem !important;
    }
  }

  /* 🔹 Very small devices (≤360px) → reduce top margin for phone section */
  @media (max-width: 360px) {
    .phone-section {
      margin-top: 1rem !important; /* smaller gap */
    }
  }

  /* 🔹 Mobile landscape mode → reduce vertical gap further */
  @media (orientation: landscape) and (max-width: 767px) {
    .phone-section {
      margin-top: 0.5rem !important;
    }
  }

  /* 🔹 Large tablets/small desktops (1024px–1279px) → active slide scales more */
  @media (min-width: 1024px) and (max-width: 1279px) {
    .client-swiper .swiper-slide-active .phone-wrapper {
      transform: scale(1.5);              /* bigger scaling */
      transform-origin: center center;    /* expand from center */
    }
  }

  /* 🔹 Mobile landscape fine-tuning (padding tweaks) */
  @media (orientation: landscape) and (max-width: 767px) {
    .phone-section {
      margin-top: 0.3rem !important; /* even smaller gap */
    }
    .client-swiper .phone-wrapper {
      padding-top: 0.5rem !important;   /* less padding */
      padding-bottom: 1rem !important;
    }
  }
`}</style>

    </div>
  );
}
