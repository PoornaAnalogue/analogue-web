"use client";
import { useEffect } from "react";
import Image from "next/image";
import GetAQuoteForm from "@/components/get-quote-form";
import FrequentQuestions from "@/components/faqs-page";

export default function Responsive_AngularTech() {
  const faqArray = [
    {
      question: "01. What is AngularJS used for?",
      answer:
        "AngularJS is a JavaScript-based open-source front-end framework maintained by Google. It is used to build dynamic, single-page web applications (SPAs) with a rich user interface.",
    },
    {
      question: "02. Why should I choose AngularJS for my project?",
      answer:
        "AngularJS simplifies development by offering two-way data binding, dependency injection, and reusable components. It&apos;s great for building scalable and interactive applications quickly.",
    },
    {
      question:
        "03. Does Analogue IT Solutions provide custom AngularJS development?",
      answer:
        "Yes. At Analogue IT Solutions, we deliver tailored AngularJS solutions, including web apps, enterprise-grade applications, and seamless API integrations.",
    },
    {
      question:
        "04. How secure are AngularJS applications developed by Analogue IT Solutions?",
      answer:
        "We follow best practices for secure coding, authentication, and data protection, ensuring every AngularJS application is robust and reliable.",
    },
    {
      question: "05. Can AngularJS be integrated with other technologies?",
      answer:
        "Absolutely. AngularJS works well with RESTful APIs, Node.js, MongoDB, and frontend frameworks like React or Vue, enabling complete end-to-end solutions.",
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
              AngularJS
            </h1>
            <h3 className="text-lg xss:text-sm  sm:text-base md:text-lg 2xl:text-[1.2rem] font-medium text-[#0E59F2] p-2 pl-3 mt-2 sm:mt-3">
              We deliver custom solutions using Angular JS
            </h3>
            <p className="text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base  pr-6 text-[#7B7E86] leading-5 sm:leading-6 pl-3 pb-3">
              AngularJS is a powerful open-source web application framework that
              has gained popularity among developers for its ability to create
              dynamic, single-page web applications. It is maintained by Google
              and a community of individual developers and corporations.
            </p>
            <p className="text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base  pr-6 text-[#7B7E86] leading-5 sm:leading-6 pl-3 pb-3">
              At Analogue IT Solutions, we are proud to be recognized as the
              best AngularJS development company, offering expertise in creating
              robust and modern web applications using this technology. Our
              professional team of developers is committed to delivering
              high-quality solutions that meet the unique needs of our clients.
            </p>
          </div>
          <div className="w-full xl:w-2/5 flex justify-center xl:justify-end mb-6 xl:mb-0">
            <Image
              src="/AdobeTech-Images/Tech-Angular.svg"
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
            Benefits of Using AngularJS
          </h3>

          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
            <span className="font-bold  ">Structured development </span> -
            AngularJS enforces a structured approach to web development using
            its model-view-controller (MVC) architecture, making code more
            organised and maintainable.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
            <span className="font-bold  ">Code reusability</span> - Components
            and services can be easily reused across different parts of your
            application, saving development time and reducing code duplication.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
            <span className="font-bold  ">Two-way data binding</span> - Data
            changes in the model automatically reflect in the view, and vice
            versa, simplifying data management and eliminating the need for
            manual DOM manipulation.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
            <span className="font-bold  ">Dependency injection</span> -
            Dependencies are injected into components, making them easier to
            test and reducing coupling between components.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
            <span className="font-bold  ">
              Extensive community and ecosystem
            </span>{" "}
            - A large and active community provides ample resources, tutorials,
            and libraries, making development faster and easier.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
            <span className="font-bold  ">
              Single-page application (SPA) development
            </span>{" "}
            - AngularJS is well-suited for building SPAs, offering features like
            routing and navigation for seamless user experiences.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
            <span className="font-bold  ">SEO-friendly </span> - AngularJS
            applications can be optimised for search engines, potentially
            improving your website&apos;s organic reach.
          </p>

          <h3 className="text-xl xss:text-sm  sm:text-base md:text-lg 2xl:text-[1.2rem] font-medium text-[#0E59F2] mb-4 mt-6">
            Elevate your Applications with our AngularJS development experts.
          </h3>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
            <span className="font-bold  ">AngularJS Web App Development</span> -
            We provide the best AngularJS web application development services
            on the market. Our professionals use an Agile development process
            that is suited to the project&apos;s requirements. Using
            cutting-edge technology and techniques, we develop dynamic and
            secure AngularJS websites that have the potential to become the next
            best.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
            <span className="font-bold  ">Custom AngularJS Development</span> -
            Our expertise in Custom AngularJS Development can help your business
            thrive. Our committed staff excels at creating tailored solutions
            that address your specific requirements,resulting in a user-friendly
            and high-performance mobile app experience. Our AngularJS
            development expertise can help you improve your Online presence.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
            <span className="font-bold  ">
              AngularJS Single Page App (SPA) Development
            </span>{" "}
            - Experience the future of web apps with our Angular Single Page App
            (SPA) Development services. We specialise in developing dynamic,
            quick, and interactive web apps with a seamless user experience.
            Unleash the power of SPAs to engage your audience while providing a
            modern, responsive, and efficient online presence
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
            <span className="font-bold  ">ChatBot Application Development</span>{" "}
            - At Analogue IT Solutions, we specialize in crafting intelligent
            and engaging chatbot applications that revolutionize the way you
            interact with your customers. Whether you&apos;re aiming to
            streamline customer service, boost engagement, or personalize user
            experiences, our team of experts delivers.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
            <span className="font-bold  ">Custom Widgets Development</span> -
            Elevate your user experience and streamline your workflows with our
            expert Custom Widgets Development service. We specialize in creating
            bespoke UI components that seamlessly integrate into your existing
            applications and platforms.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
            <span className="font-bold  ">Custom Real-Time Solutions</span> - We
            tailor each solution to your specific needs, whether it&apos;s
            building high-performance data pipelines, crafting intuitive
            real-time dashboards, or developing interactive data streaming
            applications. We leverage cutting-edge technologies like Apache
            Kafka, Spark Streaming, and cloud platforms to ensure robust and
            scalable solutions.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
            <span className="font-bold  ">Data Streaming App Development</span>{" "}
            - Our team specialises in crafting data streaming applications that
            deliver actionable insights in real time. We design and build apps
            for various use cases, from real-time fraud detection and IOT sensor
            data analysis to stock market monitoring and personalized user
            experiences.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
            At Analogue IT Solutions, we believe in fostering true partnerships.
            Contact us today for a free consultation and unlock the full
            potential of AngularJS for your business!
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
