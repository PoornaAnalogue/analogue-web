"use client";
import { useEffect } from "react";
import Image from "next/image";
import GetAQuoteForm from "@/components/get-quote-form";
import FrequentQuestions from "@/components/faqs-page";

export default function Responsive_NodeTech() {
  const faqArray = [
    {
      question: "01. What is Node.js used for?",
      answer:
        "Node.js is a powerful JavaScript runtime environment used for building fast, scalable, and high-performance applications. It is ideal for real-time apps, APIs, streaming platforms, and enterprise-grade solutions.",
    },
    {
      question: "02. Why should I choose Node.js for my project?",
      answer:
        "Node.js is lightweight, efficient, and handles multiple requests simultaneously. It's perfect for applications requiring speed, scalability, and real-time functionality such as chat apps, e-commerce, and SaaS platforms.",
    },
    {
      question:
        "03. Does Analogue IT Solutions provide custom Node.js development?",
      answer:
        "Yes. At Analogue IT Solutions, we specialize in delivering custom Node.js applications tailored to your business needs, from API development to enterprise-grade web and mobile applications.",
    },
    {
      question:
        "04. How secure are Node.js applications developed by Analogue IT Solutions?",
      answer:
        "We follow industry-leading practices, secure coding standards, and robust testing to ensure every Node.js application we deliver is safe, reliable, and highly secure.",
    },
    {
      question: "05. Can you integrate Node.js with other technologies?",
      answer:
        "Absolutely. Our experts seamlessly integrate Node.js with databases, third-party APIs, cloud services, and frontend frameworks like React, Angular, or Vue to deliver complete end-to-end solutions.",
    },
  ];
  useEffect(() => {
    const scrollCarousel = document.querySelector(".animate-scroll");
    const scrollLapCarousel = document.querySelector(".animate-scrollLap");

    // Function to update carousel width
    const updateCarouselWidth = () => {
      if (scrollCarousel) {
        const totalWidth = scrollCarousel.scrollWidth / 2;
        scrollCarousel.style.setProperty("--total-width", `-${totalWidth}px`);
      }

      if (scrollLapCarousel) {
        const totalWidth = scrollLapCarousel.scrollWidth / 2;
        scrollLapCarousel.style.setProperty(
          "--total-width",
          `-${totalWidth}px`
        );
      }
    };

    // Initial update
    updateCarouselWidth();

    // Update on window resize to handle responsive breakpoints
    window.addEventListener("resize", updateCarouselWidth);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", updateCarouselWidth);
  }, []);

  return (
    <>
      <div className="min-h-screen w-full bg-white flex flex-col items-center">
        {/* Header Section */}
        <div className="relative flex justify-center w-full bg-white ">
          <Image
            src="/AdobeTech-Images/Abstract Design.svg"
            width={480}
            height={180}
            alt="Abstract design background"
            className="object-contain w-full h-auto max-w-[300px] xss:max-w-[320px] xs:max-w-[360px] sm:max-w-[450px] "
            sizes="(max-width: 320px) 300px, (max-width: 360px) 320px, (max-width: 480px) 360px, (max-width: 640px) 450px, (max-width: 768px) 640px, 768px"
          />
          <div className="absolute top-12 xss:top-10 xs:top-11 sm:top-14 md:top-15 bg-white px-4">
            <p className="text-xl xss:text-2xl  sm:text-[1.7rem] md:text-[2rem] font-bold text-violet-950 text-center">
              Technologies
            </p>
            <p className="text-xs xss:text-xs md:text-sm text-black leading-loose text-center  sm:mt-2">
              Crafted with love since 2017
            </p>
          </div>
        </div>

        {/* Adobe XD Section */}
        <div className="flex flex-col xl:flex-row justify-center items-center w-full bg-white px-4 xss:px-4 sm:px-6 md:px-10 lg:px-12 xl:px-8 2xl:px-11 3xl:px-18 pt-0 pb-6">
          <div className="w-full xl:w-3/5 font-medium xl:pl-10">
            <h1 className="text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] xl:text-[1.5rem] 3xl:text-[1.6rem] font-semibold text-black underline underline-offset-[12px] sm:underline-offset-[16px] decoration-[#0D6EFD] decoration-4 p-2">
              Node.js
            </h1>
            <h3 className="text-lg xss:text-sm  sm:text-base md:text-lg 2xl:text-[1.2rem] font-medium text-[#0E59F2] p-2 pl-3 mt-2 sm:mt-3">
              We develop applications using Node.js
            </h3>
            <p className="text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base  pr-6 text-[#7B7E86] leading-5 sm:leading-6 pl-3 pb-3">
              In today&apos;s digital landscape, a robust and scalable backend
              is the cornerstone of any successful application. That&apos;s
              where Node.js, the lightning-fast JavaScript runtime environment,
              comes into play. Renowned for its speed, efficiency, and
              event-driven architecture, Node.js enables businesses to deliver
              high-performing, real-time applications.
            </p>
          </div>
          <div className="w-full xl:w-2/5 flex justify-center xl:justify-end mb-6 xl:mb-0">
            <Image
              src="/AdobeTech-Images/Tech-node.svg"
              width={400}
              height={450}
              alt="Adobe Tech image"
              className="object-contain w-full max-w-[250px] xss:max-w-[280px] xs:max-w-[300px] sm:max-w-[350px] md:max-w-[360px] lg:max-w-[380px] 2xl:max-w-[400px] 3xl:max-w-[430px] "
              sizes="(max-width: 320px) 250px, (max-width: 360px) 280px, (max-width: 480px) 300px, (max-width: 640px) 350px, 360px"
            />
          </div>
        </div>

        {/* Our Works Section */}
        <div className="w-full flex flex-col justify-center items-center">
          <h2 className="text-lg xss:text-[1.3rem] xs:text-2xl sm:text-[1.5rem] md:text-3xl font-medium text-[#071637] text-center my-6 sm:my-10">
            Our Works
          </h2>
          <div className="carousel-wrapper xl:pb-5 ">
            <div className="flex w-max animate-scroll gap-2 xs:gap-4 l:gap-8  ">
              {[
                {
                  src: "/AdobeTech-Images/Mockup (1).svg",
                  alt: "Project 1 screenshot",
                },
                {
                  src: "/AdobeTech-Images/Mockup (2).svg",
                  alt: "Project 2 screenshot",
                },
                {
                  src: "/AdobeTech-Images/Mockup (3).svg",
                  alt: "Project 3 screenshot",
                },
                {
                  src: "/AdobeTech-Images/Mockup (4).svg",
                  alt: "Project 4 screenshot",
                },
                {
                  src: "/AdobeTech-Images/Mockup (5).svg",
                  alt: "Project 5 screenshot",
                },
                {
                  src: "/AdobeTech-Images/Mockup (6).svg",
                  alt: "Project 6 screenshot",
                },
                {
                  src: "/AdobeTech-Images/Mockup (7).svg",
                  alt: "Project 7 screenshot",
                },
                {
                  src: "/AdobeTech-Images/Mockup (8).svg",
                  alt: "Project 8 screenshot",
                },
                {
                  src: "/AdobeTech-Images/Mockup (9).svg",
                  alt: "Project 9 screenshot",
                },
                {
                  src: "/AdobeTech-Images/Mockup (10).svg",
                  alt: "Project 10 screenshot",
                },

                {
                  src: "/AdobeTech-Images/Mockup (1).svg",
                  alt: "Project 1 screenshot",
                },
                {
                  src: "/AdobeTech-Images/Mockup (2).svg",
                  alt: "Project 2 screenshot",
                },
                {
                  src: "/AdobeTech-Images/Mockup (3).svg",
                  alt: "Project 3 screenshot",
                },
                {
                  src: "/AdobeTech-Images/Mockup (4).svg",
                  alt: "Project 4 screenshot",
                },
                {
                  src: "/AdobeTech-Images/Mockup (5).svg",
                  alt: "Project 5 screenshot",
                },
                {
                  src: "/AdobeTech-Images/Mockup (6).svg",
                  alt: "Project 6 screenshot",
                },
                {
                  src: "/AdobeTech-Images/Mockup (7).svg",
                  alt: "Project 7 screenshot",
                },
                {
                  src: "/AdobeTech-Images/Mockup (8).svg",
                  alt: "Project 8 screenshot",
                },
              ].map((image, index) => (
                <div
                  key={index}
                  className="flex justify-end items-center  xss:w-[100px]  sm:w-[120px] xl:min-w-[170px] xss:h-40 xs:h-64 sm:h-72 xl:h-65 bg-white p-3 xss:p-7 md:p-6 lg:p-5  xl:px-7      "
                >
                  <Image
                    src={image.src}
                    width={100}
                    height={256}
                    alt={image.alt}
                    className="w-full h-full object-contain transition-transform duration-300 hover:scale-105 sm:hover:scale-110 hover:z-10"
                    sizes="(max-width: 320px) 100px, (max-width: 360px) 120px, (max-width: 480px) 140px, 150px"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-wrapper overflow-visible">
            <div className="flex w-max animate-scrollLap gap-4 xss:gap-5 xs:gap-6 sm:gap-7 md:gap-8 md-lg:gap-9 lg:gap-10 lgg:gap-0 xl:gap-12 3xl:gap-16  ">
              {[
                {
                  src: "/AdobeTech-Images/ZenBook Duo 54.svg",
                  alt: "Project 1 screenshot",
                },
                {
                  src: "/AdobeTech-Images/ZenBook Duo 55.svg",
                  alt: "Project 2 screenshot",
                },
                {
                  src: "/AdobeTech-Images/ZenBook Duo 56.svg",
                  alt: "Project 3 screenshot",
                },
                {
                  src: "/AdobeTech-Images/ZenBook Duo 57.svg",
                  alt: "Project 4 screenshot",
                },
                {
                  src: "/AdobeTech-Images/ZenBook Duo 58.svg",
                  alt: "Project 5 screenshot",
                },
                {
                  src: "/AdobeTech-Images/ZenBook Duo 59.svg",
                  alt: "Project 6 screenshot",
                },
                {
                  src: "/AdobeTech-Images/ZenBook Duo 54.svg",
                  alt: "Project 1 screenshot",
                },
                {
                  src: "/AdobeTech-Images/ZenBook Duo 55.svg",
                  alt: "Project 2 screenshot",
                },
                {
                  src: "/AdobeTech-Images/ZenBook Duo 56.svg",
                  alt: "Project 3 screenshot",
                },
                {
                  src: "/AdobeTech-Images/ZenBook Duo 57.svg",
                  alt: "Project 4 screenshot",
                },
                {
                  src: "/AdobeTech-Images/ZenBook Duo 58.svg",
                  alt: "Project 5 screenshot",
                },
                {
                  src: "/AdobeTech-Images/ZenBook Duo 59.svg",
                  alt: "Project 6 screenshot",
                },
              ].map((image, index) => (
                <div
                  key={index}
                  className="md:mx-7 lgg:mx-0  flex justify-center items-center  xss:min-w-[200px] xs:min-w-[240px] sm:min-w-[260px] md:min-w-[300px] md-lg:min-w-[340px] lg:min-w-[300px] lgg:min-w-[100px] xl:min-w-[300px] 3xl:min-w-[340px] h-80 xss:h-88 xs:h-96 sm:h-[26rem] md:h-[28rem] md-lg:h-[27rem] lg:h-[15rem] lgg:h-[10rem] xl:h-[14rem] 3xl:h-[17rem] bg-white mx-3"
                >
                  <Image
                    src={image.src}
                    width={500}
                    height={800}
                    alt={image.alt}
                    className="scale-130 md:scale-170 lgg:scale-100 w-full h-full object-contain transition-transform duration-300 hover:scale-105 sm:hover:scale-110 hover:z-10"
                    sizes="(max-width: 320px) 200px, (max-width: 360px) 220px, (max-width: 480px) 240px, (max-width: 640px) 260px, (max-width: 704px) 250px, (max-width: 768px) 340px, (max-width: 1024px) 380px, (max-width: 1280px) 420px, (max-width: 1536px) 440px, 500px"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Analogue Section */}
        <div className="w-full px-4 xss:px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 2xl:px-24 3xl:px-32 py-6 sm:py-8">
          <h3 className="text-[#0E59F2] text-xl xss:text-sm  sm:text-base md:text-lg 2xl:text-[1.2rem] font-medium mb-4">
            Here&apos;s why Node.js shines
          </h3>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
            <span className="font-bold  ">Real-time magic</span> - Build
            captivating and interactive experiences with Node.js&apos;s
            event-driven architecture, perfect for chat apps, online games, and
            more. Keep your users hooked and engaged in real-time!
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
            <span className="font-bold  ">Scale with ease</span> - Seamlessly
            adapt your backend infrastructure to accommodate growing user
            demands without compromising performance. Node.js scales
            beautifully, so you can focus on innovation.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
            <span className="font-bold  ">Microservices mastery</span> - Break
            down functionalities into independent microservices for modularity,
            maintainability, and easier development. Simplify complex
            applications and enjoy faster development cycles.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
            <span className="font-bold  ">API powerhouse</span> - Create
            powerful and efficient APIs that seamlessly integrate with your web
            or mobile app, connecting to diverse data sources and services.
            Unlock endless possibilities with robust API integrations.
          </p>

          <h3 className="text-xl xss:text-sm  sm:text-base md:text-lg 2xl:text-[1.2rem] font-medium text-[#0E59F2] mb-4 mt-6">
            Unlocking the full power of Node.js takes the right expertise - and
            that&apos;s exactly what Analogue IT Solutions delivers.
          </h3>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
            <span className="font-bold  ">Backend brilliance</span> - We design
            and develop high-performance, scalable, and secure backend
            applications tailored to your specific needs. Our expertise ensures
            a robust foundation for your digital success.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
            <span className="font-bold  ">Real-time experts</span> - Leverage
            our in-depth knowledge of WebSockets, Socket.io, and other tools to
            craft truly engaging real-time experiences that keep your users
            coming back for more.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
            <span className="font-bold  ">Microservices architecture</span> - We
            design and implement modular microservices architectures for optimal
            performance, maintainability, and easier future updates. Enjoy the
            benefits of a well-structured and efficient backend.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
            <span className="font-bold  ">API masters</span> - Create
            well-documented and secure APIs that seamlessly integrate with your
            various applications and services. Our experts ensure smooth data
            flow and efficient communication between your systems.
          </p>

          <h3 className="text-xl xss:text-sm  sm:text-base md:text-lg 2xl:text-[1.2rem] font-medium text-[#0E59F2] my-4 mt-6">
            Partnering with Analogue IT Solutions means
          </h3>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
            <span className="font-bold  ">Focus on your core business</span>{" "}
            - Leave the backend intricacies to us while you concentrate on
            building your application&apos;s frontend or core functionalities.
            We handle the technical complexities, you handle the magic.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
            <span className="font-bold  ">Top talent at your fingertips</span>{" "}
            - Our team comprises highly skilled and certified Node.js developers
            who stay ahead of the curve with the latest advancements. Benefit
            from their expertise and dedication to excellence.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
            <span className="font-bold  ">Results-driven approach</span> - We
            work closely with you to understand your unique needs and deliver
            solutions that drive real business value. Your success is our
            priority.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium ">
            <span className="font-bold">Peace of mind guaranteed</span> - Trust
            that your project is in the hands of experts who prioritise
            security, scalability, and performance. Relax knowing your backend
            is in good hands.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
            Ready to build a phenomenal web presence that engages users and
            drives growth? Contact Analogue IT Solutions today and unlock a
            world of possibilities. We&apos;ll be your trusted partner, guiding
            you every step of the way to creating a robust and efficient backend
            that fuels your application&apos;s success.
          </p>

          {/* faqs section */}
          <div className="w-[86%] mx-auto pb-3 xss:mt-5">
            <div>
              <FrequentQuestions Question={faqArray} />
            </div>
          </div>

          <div>
            <GetAQuoteForm />
          </div>
        </div>
      </div>
    </>
  );
}
