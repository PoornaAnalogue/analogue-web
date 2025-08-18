"use client";
import { useEffect } from "react";
import Footer from "../../../Components/Footer";
import Image from "next/image";
import Navbar from "../../../Components/Navbar";

export default function ObjectTechnologiesPagee() {
  useEffect(() => {
    const scrollCarousel = document.querySelector(".animate-scroll");
    const scrollLapCarousel = document.querySelector(".animate-scrollLap");

    if (scrollCarousel) {
      const totalWidth = scrollCarousel.scrollWidth / 2; // Divide by 2 since items are duplicated
      scrollCarousel.style.setProperty("--total-width", `-${totalWidth}px`);
    }

    if (scrollLapCarousel) {
      const totalWidth = scrollLapCarousel.scrollWidth / 2;
      scrollLapCarousel.style.setProperty("--total-width", `-${totalWidth}px`);
    }
  }, []);

  return (
    <>
      <div className="h-full w-full bg-white flex flex-col items-center">
        <div className="flex h-full justify-center relative bg-white h-auto pb-0 mb-0">
          <Image
            src="/AbstractDesign.jpg"
            width={480}
            height={180}
            alt="Abstract design background"
            className="object-contain "
          />
          <div className="absolute top-16 bg-white">
            <h1 className="text-3xl bg-white text-violet-950 font-bold">
              Technologies
            </h1>
            <p className="bg-white text-black leading-loose text-sm text-center mt-3">
              Crafted with love since 2017
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center w-full h-full bg-white mx-10 px-10 mt-0 pt-0 ">
          <div className="w-2/5 flex justify-end  ">
            <Image
              src="/Tech-Adobe.png"
              width={400}
              height={450}
              alt="Adobe Tech image"
              className="object-contain  "
            />
          </div>
          <div className="w-3/5 font-medium self-start pt-0 pl-0 py-10 bg-white">
            <p className="text-black text-4xl font-weight-600 font-semibold underline underline-offset-20 decoration-[#0D6EFD] decoration-4 p-2">
              Adobe XD
            </p>
            <p className="text-[1.5rem] font-weight-400 font-medium text-[#0E59F2] p-3 pl-4 mt-3">
              We design using Adobe XD
            </p>
            <p className="text-[0.95rem] text-[#7B7E86] leading-6 pl-4">
              Analogue is a Best mobile app development company in Hyderabad that
              specialises in creating and enhancing user experience through the
              design and development of mobile and web applications. Our focus
              lies in helping businesses expand and reach their specific customer
              base by collaborating with individuals and organisations to
              conceptualise and promote their products.
            </p>
          </div>
        </div>

        <div>
          <p className="text-2xl font-medium text-[#071637] text-center my-10">Our Works</p>
          <div className="carousel-wrapper pt-5">
            <div className="flex w-max animate-scroll gap-4">
              {[
                { src: "/Mockup (1).png", alt: "Project 1 screenshot" },
                { src: "/Mockup (2).png", alt: "Project 2 screenshot" },
                { src: "/Mockup (3).png", alt: "Project 3 screenshot" },
                { src: "/Mockup (4).png", alt: "Project 4 screenshot" },
                { src: "/Mockup (5).png", alt: "Project 5 screenshot" },
                { src: "/Mockup (6).png", alt: "Project 6 screenshot" },
                { src: "/Mockup (7).png", alt: "Project 7 screenshot" },
                { src: "/Mockup.png", alt: "Project 8 screenshot" },
                { src: "/Mockup (9).png", alt: "Project 8 screenshot" },
                { src: "/Mockup (10).png", alt: "Project 8 screenshot" },
                // Duplicated items for seamless looping
                { src: "/Mockup (1).png", alt: "Project 1 screenshot" },
                { src: "/Mockup (2).png", alt: "Project 2 screenshot" },
                { src: "/Mockup (3).png", alt: "Project 3 screenshot" },
                { src: "/Mockup (4).png", alt: "Project 4 screenshot" },
                { src: "/Mockup (5).png", alt: "Project 5 screenshot" },
                { src: "/Mockup (6).png", alt: "Project 6 screenshot" },
                { src: "/Mockup (7).png", alt: "Project 7 screenshot" },
                { src: "/Mockup.png", alt: "Project 8 screenshot" },
              ].map((image, index) => (
                <div
                  key={index}
                  className="flex justify-end items-center min-w-[150px] h-64 bg-white"
                >
                  <Image
                    src={image.src}
                    width={100}
                    height={256}
                    alt={image.alt}
                    className="w-full h-full object-contain transition-transform duration-300 hover:scale-110 hover:z-10"
                  />
                  
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-wrapper">
            <div className="flex w-max animate-scrollLap gap-4">
              {[
                { src: "/Carousal-Lap-Img1.png", alt: "Project 1 screenshot" },
                { src: "/Carousal-Lap-Img2.png", alt: "Project 2 screenshot" },
                { src: "/Carousal-Lap-Img3.png", alt: "Project 3 screenshot" },
                { src: "/Carousal-Lap-Img4.png", alt: "Project 4 screenshot" },
                { src: "/Carousal-Lap-Img5.png", alt: "Project 5 screenshot" },
                { src: "/Carousal-Lap-Img6.png", alt: "Project 6 screenshot" },
                // Duplicated items for seamless looping
                { src: "/Carousal-Lap-Img1.png", alt: "Project 1 screenshot" },
                { src: "/Carousal-Lap-Img2.png", alt: "Project 2 screenshot" },
                { src: "/Carousal-Lap-Img3.png", alt: "Project 3 screenshot" },
                { src: "/Carousal-Lap-Img4.png", alt: "Project 4 screenshot" },
                { src: "/Carousal-Lap-Img5.png", alt: "Project 5 screenshot" },
                { src: "/Carousal-Lap-Img6.png", alt: "Project 6 screenshot" },
              ].map((image, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center min-w-[120px] h-48 bg-white"
                >
                  <Image
                    src={image.src}
                    width={150}
                    height={256}
                    alt={image.alt}
                    className="w-full h-full object-contain transition-transform duration-300 hover:scale-110 hover:z-10"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-full mx-10 px-20 py-5 ">
          <p className="text-[#0D6EFD] text-2xl font-medium mb-4">
            Why Analogue IT Solutions
          </p>
          <p className="text-[#7B7E86] text-[0.95rem] leading-6 font-weight-700">
            Analogue is a Best mobile app development company in Hyderabad that
            specialises in creating and enhancing user experience through the
            design and development of mobile and web applications. Our focus lies
            in helping businesses expand and reach their specific customer base by
            collaborating with individuals and organisations to conceptualise and
            promote their products.
          </p>
          <br />
          <p className="text-[#7B7E86] text-[0.95rem] leading-6 font-weight-700">
            Analogue is a Best mobile app development company in Hyderabad that
            specialises in creating and enhancing user experience through the
            design and development of mobile and web applications. Our focus lies
            in helping businesses expand and reach their specific customer base by
            collaborating with individuals and organisations to conceptualise and
            promote their products.
          </p>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}