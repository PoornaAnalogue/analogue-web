"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      text: "I can't thank Nutritionist enough for their personalized nutrition coaching. It has completely transformed my approach to food and helped me shed those extra pounds.",
      name: "Jennifer Anderson",
      image: "/Testimonial-img (1).png",
      stars: 5,
    },
    {
      text: "Nutritionist has been a game-changer for me. The expert guidance and support I received from their team made my weight loss journey so much easier. Thank you!",
      name: "Robert Johnson",
      image: "/Testimonial-img (3).png",
      stars: 5,
    },
    {
      text: "I had struggled with my weight for years until I found Nutritionist. Their personalized approach and tailored nutrition plan made all the difference. I've never felt better!",
      name: "Emily Davis",
      image: "/Testimonial-img (2).png",
      stars: 5,
    },
  ];

  return (
    <section className="py-10 h-screen bg-white w-full px-15">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="font-bold text-[#071637] text-[40px]">Our Testimonials</h2>
        <p className="text-[#7B7E86] ">
          Our satisfied clients share their success stories and experiences with us.
        </p>

        {/* Swiper Carousel */}
        <div className="relative mt-10">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
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
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-14"
          >
            {testimonials.concat(testimonials).map((t, i) => (
              <SwiperSlide key={i}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 flex flex-col h-full">
                  {/* Quote Section */}
                  <div className="bg-[#E3ECFF]  px-6 py-2 flex-grow flex flex-col">
                    <span className="text-7xl text-start  w-full  font-medium  text-black">“</span>
                    <p className="text-[#071637] text-sm pb-5 leading-5 font-weight-500 text-justify">{t.text}</p>
                  </div>

                  {/* User Info */}
                  <div className="flex items-center justify-between p-4">
                    <div className="flex items-center space-x-3">
                      <Image
                        src={t.image}
                        alt={t.name}
                        width={40}
                        height={40}
                        className="rounded-lg"
                      />
                      <span className="text-gray-800 font-medium">{t.name}</span>
                    </div>
                    <div className="flex text-yellow-400 text-2xl">
                      {Array(t.stars)
                        .fill()
                        .map((_, idx) => (
                          <span className="pr-1" key={idx}>★</span>
                        ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}


            {/* Bottom controls */}
<div className="h-20 flex items-center justify-center pt-6">
  <div className="swiper-controls flex items-center space-x-6">
    <div className="swiper-button-prev !static p-3 !m-0 !w-10 !h-10 !bg-[#E3ECFF] rounded-lg flex items-center justify-center shadow-sm after:!text-black"></div>
    <div className="swiper-pagination !static !m-0 flex items-center space-x-2"></div>
    <div className="swiper-button-next !static p-3 !m-0 !w-10 !h-10 !bg-[#E3ECFF] rounded-lg flex items-center justify-center shadow-sm after:!text-black"></div>
  </div>
</div>

          </Swiper>
        </div>
      </div>
    </section>
  );
}
