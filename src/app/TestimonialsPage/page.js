"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

export default function Responsive_Testimonials() {
  const testimonials = [
    {
      text: "I can't thank Nutritionist enough for their personalized nutrition coaching. It has completely transformed my approach to food and helped me shed those extra pounds.",
      name: "Jennifer Anderson",
      image: "/Testimonial-Images/Testimonial-img (1).png",
      stars: 5,
    },
    {
      text: "Nutritionist has been a game-changer for me. The expert guidance and support I received from their team made my weight loss journey so much easier. Thank you!",
      name: "Robert Johnson",
      image: "/Testimonial-Images/Testimonial-img (3).png",
      stars: 5,
    },
    {
      text: "I had struggled with my weight for years until I found Nutritionist. Their personalized approach and tailored nutrition plan made all the difference. I've never felt better!",
      name: "Emily Davis",
      image: "/Testimonial-Images/Testimonial-img (2).png",
      stars: 5,
    },
  ];

  return (
    <section className="bg-white w-full h-screen flex flex-col xs:items-center xs:justify-center sm:items-center sm:justify-center md:items-center md:justify-center lg:items-center lg:justify-center xl:items-center xl:justify-center 2xl:items-center 2xl:justify-center 3xl:items-center 3xl:justify-center py-5 xs:py-3 sm:py-4 xl:py-5 3xl:py-25">
      <div className="w-full max-w-[360px] xs:max-w-[480px] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px] mx-auto px-2 xs:px-3 sm:px-4 md:px-6">
        <h2 className="font-bold text-[#071637] text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-[40px] mb-4 xs:mb-5 sm:mb-6 md:mb-4 lg:mb-3 text-center">
          Our Testimonials
        </h2>
        <p className="text-[#7B7E86] text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl mb-6 xs:mb-8 sm:mb-10 md:mb-8 lg:mb-6 xl:mb-10 text-center">
          Our satisfied clients share their success stories and experiences with us.
        </p>

        {/* Swiper Carousel */}
        <div className="relative flex-grow w-full">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={8}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
            }}
            breakpoints={{
              360: { slidesPerView: 1, spaceBetween: 8 }, // xs
              480: { slidesPerView: 1, spaceBetween: 10 }, // sm
              640: { slidesPerView: 1, spaceBetween: 12 }, // md
              768: { slidesPerView: 2, spaceBetween: 14 }, // lg
              1024: { slidesPerView: 2, spaceBetween: 16 }, // xl
              1280: { slidesPerView: 3, spaceBetween: 18 }, // 2xl
              1536: { slidesPerView: 3, spaceBetween: 20 }, // 3xl
            }}
            className="h-full pb-12 xs:pb-14 sm:pb-16 md:pb-20 lg:pb-14 xl:pb-20"
          >
            {testimonials.concat(testimonials).map((t, i) => (
              <SwiperSlide key={i}>
                <div className="bg-white rounded-lg shadow-md border border-gray-100 flex flex-col h-full max-w-full mx-1 xs:mx-2 sm:mx-3">
                  {/* Quote Section */}
                  <div className="bg-[#E3ECFF] px-3 xs:px-4 sm:px-5 md:px-6 py-2 xs:py-3 flex-grow flex flex-col">
                    <span className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl text-start w-full font-medium text-black">“</span>
                    <p className="text-[#071637] text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-base xl:text-base leading-4 xs:leading-5 sm:leading-6  font-medium text-justify">
                      {t.text}
                    </p>
                  </div>

                  {/* User Info */}
                  <div className="flex items-center justify-between p-2 xs:p-3 sm:p-4 lg:p-3 xl:p-4">
                    <div className="flex items-center space-x-1 xs:space-x-2 sm:space-x-3">
                      <Image
                        src={t.image}
                        alt={t.name}
                        width={28}
                        height={28}
                        className="rounded-lg w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10"
                      />
                      <span className="text-gray-800 font-medium text-[10px] xs:text-xs sm:text-sm md:text-base">
                        {t.name}
                      </span>
                    </div>
                    <div className="flex text-yellow-400 text-base xs:text-lg sm:text-xl md:text-2xl">
                      {Array(t.stars)
                        .fill()
                        .map((_, idx) => (
                          <span className="pr-0.5 xs:pr-0.5 sm:pr-1" key={idx}>★</span>
                        ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* Bottom controls */}
            <div className="h-6 mt-10 xs:h-8 sm:h-10 md:h-12 lg:h-8 xl:h-12 flex items-center justify-center pt-0.5 xs:pt-1 sm:pt-2 md:pt-3 lg:pt-2 xl:pt-3">
              <div className="swiper-controls flex items-center space-x-2 xs:space-x-3 sm:space-x-4 md:space-x-6 lg:space_x-3 xl:space-x-6">
                <div className="swiper-button-prev !static p-0.5 xs:p-1 sm:p-2 lg:p-1 xl:p-2 !m-0 !w-5 !h-5 xs:!w-6 xs:!h-6 sm:!w-8 sm:!h-8 lg:!w-6 lg:!h-6 xl:!w-8 xl:!h-8 !bg-[#E3ECFF] rounded-lg flex items-center justify-center shadow-sm after:!text-black after:text-[10px] xs:after:text-xs sm:after:text-sm"></div>
                <div className="swiper-pagination !static !m-0 flex items-center space-x-1 xs:space-x-1 sm:space-x-2 lg:space-x-1 xl:space-x-2"></div>
                <div className="swiper-button-next !static p-0.5 xs:p-1 sm:p-2 lg:p-1 xl:p-2 !m-0 !w-5 !h-5 xs:!w-6 xs:!h-6 sm:!w-8 sm:!h-8 lg:!w-6 lg:!h-6 xl:!w-8 xl:!h-8 !bg-[#E3ECFF] rounded-lg flex items-center justify-center shadow-sm after:!text-black after:text-[10px] xs:after:text-xs sm:after:text-sm"></div>
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
}