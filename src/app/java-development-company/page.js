"use client";
import { useEffect } from "react";
import Image from "next/image";
import GetAQuoteForm from "@/Components/GetAQuoteForm";
import FrequentQuestions from "@/Components/frequentlyAskedQuestions";

export default function Responsive_JavaTech() {
   const faqArray = [
    {
      question:
        "01. What is Java development?",
      answer:
         "Java development refers to building applications using the Java programming language. Java is versatile, platform-independent, and widely used for web, mobile, enterprise, and desktop applications."    },
    {
      question:
        "02. Why should I choose Java for my application?",
      answer:
        "Java offers scalability, security, and cross-platform compatibility. It’s ideal for enterprise-grade solutions, mobile apps (Android), web applications, and large-scale systems."    },
    {
      question:
        "03. What services does Analogue IT Solutions offer in Java development?",
      answer:
      "Analogue IT Solutions provides end-to-end Java development services, including custom application development, web and mobile solutions, enterprise software, API integrations, and support & maintenance."    },
    {
      question:
        "04. How secure are Java applications developed by Analogue IT Solutions?",
      answer:
      "Security is a top priority. We follow best coding practices, conduct thorough testing, and implement robust security measures to ensure your Java application is safe and reliable."    },
    {
      question: "05. Can Java applications be integrated with other technologies?",
      answer:
      "Absolutely. Java applications can integrate with databases, third-party APIs, cloud platforms, and other technologies to deliver seamless, end-to-end solutions."    },
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
        scrollLapCarousel.style.setProperty("--total-width", `-${totalWidth}px`);
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
              Java
            </h1>
            <h3 className="text-lg xss:text-sm  sm:text-base md:text-lg 2xl:text-[1.2rem] font-medium text-[#0E59F2] p-2 pl-3 mt-2 sm:mt-3">
              We craft applications using Java
            </h3>
            <p className="text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base  pr-6 text-[#7B7E86] leading-5 sm:leading-6 pl-3 pb-3">
              Looking for a reliable Java Development Company that blends innovation with performance? At Analogue IT Solutions, we harness the full potential of Java to craft enterprise-grade applications, dynamic web platforms, and secure mobile solutions. Known for its platform independence, scalability, and unmatched stability, Java empowers businesses to innovate faster and operate smarter. Partner with us to transform your ideas into intelligent, future-ready software solutions.            
            </p>
            
          </div>
          <div className="w-full xl:w-2/5 flex justify-center xl:justify-end mb-6 xl:mb-0">
            <Image
              src="/AdobeTech-Images/Tech-Java.svg"
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
                { src: "/AdobeTech-Images/Mockup (1).svg", alt: "Project 1 screenshot" },
                { src: "/AdobeTech-Images/Mockup (2).svg", alt: "Project 2 screenshot" },
                { src: "/AdobeTech-Images/Mockup (3).svg", alt: "Project 3 screenshot" },
                { src: "/AdobeTech-Images/Mockup (4).svg", alt: "Project 4 screenshot" },
                { src: "/AdobeTech-Images/Mockup (5).svg", alt: "Project 5 screenshot" },
                { src: "/AdobeTech-Images/Mockup (6).svg", alt: "Project 6 screenshot" },
                { src: "/AdobeTech-Images/Mockup (7).svg", alt: "Project 7 screenshot" },
                { src: "/AdobeTech-Images/Mockup (8).svg", alt: "Project 8 screenshot" },
                { src: "/AdobeTech-Images/Mockup (9).svg", alt: "Project 9 screenshot" },
                { src: "/AdobeTech-Images/Mockup (10).svg", alt: "Project 10 screenshot" },

                { src: "/AdobeTech-Images/Mockup (1).svg", alt: "Project 1 screenshot" },
                { src: "/AdobeTech-Images/Mockup (2).svg", alt: "Project 2 screenshot" },
                { src: "/AdobeTech-Images/Mockup (3).svg", alt: "Project 3 screenshot" },
                { src: "/AdobeTech-Images/Mockup (4).svg", alt: "Project 4 screenshot" },
                { src: "/AdobeTech-Images/Mockup (5).svg", alt: "Project 5 screenshot" },
                { src: "/AdobeTech-Images/Mockup (6).svg", alt: "Project 6 screenshot" },
                { src: "/AdobeTech-Images/Mockup (7).svg", alt: "Project 7 screenshot" },
                { src: "/AdobeTech-Images/Mockup (8).svg", alt: "Project 8 screenshot" },
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
                { src: "/AdobeTech-Images/ZenBook Duo 54.svg", alt: "Project 1 screenshot" },
                { src: "/AdobeTech-Images/ZenBook Duo 55.svg", alt: "Project 2 screenshot" },
                { src: "/AdobeTech-Images/ZenBook Duo 56.svg", alt: "Project 3 screenshot" },
                { src: "/AdobeTech-Images/ZenBook Duo 57.svg", alt: "Project 4 screenshot" },
                { src: "/AdobeTech-Images/ZenBook Duo 58.svg", alt: "Project 5 screenshot" },
                { src: "/AdobeTech-Images/ZenBook Duo 59.svg", alt: "Project 6 screenshot" },
                { src: "/AdobeTech-Images/ZenBook Duo 54.svg", alt: "Project 1 screenshot" },
                { src: "/AdobeTech-Images/ZenBook Duo 55.svg", alt: "Project 2 screenshot" },
                { src: "/AdobeTech-Images/ZenBook Duo 56.svg", alt: "Project 3 screenshot" },
                { src: "/AdobeTech-Images/ZenBook Duo 57.svg", alt: "Project 4 screenshot" },
                { src: "/AdobeTech-Images/ZenBook Duo 58.svg", alt: "Project 5 screenshot" },
                { src: "/AdobeTech-Images/ZenBook Duo 59.svg", alt: "Project 6 screenshot" },
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
           Benefits of Using Java Technology
          </h3>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
              <span className="font-bold  ">Platform Independence
              </span> - Java follows the principle of “write once, run anywhere,” allowing applications to run seamlessly across multiple operating systems.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
              <span className="font-bold  ">Robust & Secure</span> - With strong memory management and built-in security features, Java provides a safe environment for developing enterprise-grade applications.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
              <span className="font-bold  ">Scalability</span> - Java applications can easily scale from small programs to large enterprise systems, making it ideal for growing businesses.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
              <span className="font-bold  ">Rich API & Libraries</span> - A vast collection of APIs and libraries supports faster development and integration with modern technologies.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
              <span className="font-bold  ">Community Support</span> - Backed by a large developer community, Java offers continuous updates, frameworks, and resources for efficient development.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
              <span className="font-bold  ">Versatility</span> - Java is used for web apps, mobile apps (Android), enterprise solutions, cloud computing, and even IoT, making it highly adaptable.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
              <span className="font-bold  ">Performance & Reliability</span> - With Just-In-Time (JIT) compilation and optimized performance, Java applications ensure speed and reliability.
          </p>
          

          <h3 className="text-xl xss:text-sm  sm:text-base md:text-lg 2xl:text-[1.2rem] font-medium text-[#0E59F2] mb-4 mt-6">
            Why Choose Analogue IT Solutions for Java Development Excellence          
          </h3>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium" >
                    At Analogue IT Solutions, we don’t just develop applications, we build future-ready solutions that drive business growth. As a trusted Java Development Company, we combine technical expertise with industry insights to deliver secure, scalable, and high-performing applications tailored to your needs.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
              <span className="font-bold  ">Skilled Java Experts</span> - A team of experienced developers proficient in the latest Java frameworks and tools.</p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
              <span className="font-bold  ">Custom Solutions</span> - Experience Tailored applications designed to match your business goals and challenges.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
              <span className="font-bold  ">Enterprise-Grade Security</span> - Robust coding practices ensuring data protection and application reliability.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
              <span className="font-bold  ">Scalable Architecture</span> - Solutions that grow seamlessly with your expanding business demands.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
              <span className="font-bold  ">End-to-End Support</span> - From strategy and development to deployment and maintenance, we’ve got you covered.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
              Partner with Analogue IT Solutions and experience the perfect blend of innovation, quality, and reliability in Java development services.
          </p>

          


          <h3 className="text-xl xss:text-sm  sm:text-base md:text-lg 2xl:text-[1.2rem] font-medium text-[#0E59F2] my-4 mt-6">
            Unlock the Power of Expert Java Development
          </h3>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium" >
                    Our expert Java development services go beyond just coding,we deliver secure, scalable, and highly customized applications designed to meet the unique needs of your business. Whether it’s building enterprise-grade solutions, enhancing existing systems, or creating innovative mobile and web applications, our team leverages the full power of Java to drive efficiency, reliability, and performance.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium" >
            At Analogue IT Solutions, we focus on understanding your business goals and translating them into robust software solutions that not only solve problems but also create new opportunities for growth. Our developers stay ahead of the latest Java frameworks, tools, and best practices to ensure your applications are modern, adaptable, and future-proof.
          </p>
          


          {/* faqs section */}
          <div className="w-[86%] mx-auto pb-3 xss:mt-5">
            <div>
            <FrequentQuestions Question={faqArray}/>
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