"use client";
import { useEffect } from "react";
import Image from "next/image";
import GetAQuoteForm from "@/Components/GetAQuoteForm";
import FrequentQuestions from "@/Components/frequentlyAskedQuestions";

export default function Responsive_PyTech() {
   const faqArray = [
    {
      question:
        "01. What types of applications can you build using Python?",
      answer:
         "At Analogue IT Solutions, we develop a wide range of applications using Python, including web applications, mobile apps, enterprise solutions, AI/ML-powered tools, and data-driven platforms."    },
    {
      question:
        "02. Why should I choose Python for app development?",
      answer:
        "Python is known for its simplicity, scalability, and versatility. It supports rapid development, has an extensive library ecosystem, and is widely used for cutting-edge solutions like artificial intelligence, data science, and cloud-based apps."    },
    {
      question:
        "03. Do you provide custom Python app development services?",
      answer:
      "Yes, we specialize in custom Python development tailored to your business goals. From strategy and design to deployment and support, we deliver end-to-end solutions."    },
    {
      question:
        "04. How secure are Python applications developed by Analogue IT Solutions?",
      answer:
      "Security is a priority in our development process. We implement industry best practices, secure coding techniques, and testing protocols to ensure your Python application is robust and safe."    },
    {
      question: "05. Can you integrate Python applications with third-party tools and APIs?",
      answer:
      "Absolutely. Our Python developers are skilled in seamless API integration and can connect your app with various third-party services, databases, and cloud platforms."    },
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
              Python
            </h1>
            <h3 className="text-lg xss:text-sm  sm:text-base md:text-lg 2xl:text-[1.2rem] font-medium text-[#0E59F2] p-2 pl-3 mt-2 sm:mt-3">
              We design using Python
            </h3>
            <p className="text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base  pr-6 text-[#7B7E86] leading-5 sm:leading-6 pl-3 pb-3">
                Are you searching for the Best Python Development Company to take your business to the next level? Look no further than Analogue IT Solutions. Our team of skilled and experienced developers specialises in providing top-notch Python development services that are tailored to meet your unique business needs.
            </p>
            <p className="text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base  pr-6 text-[#7B7E86] leading-5 sm:leading-6 pl-3">
                Python is a versatile and sophisticated programming language that is commonly used in web development, data analysis, artificial intelligence, and other applications.
            </p>
          </div>
          <div className="w-full xl:w-2/5 flex justify-center xl:justify-end mb-6 xl:mb-0">
            <Image
              src="/AdobeTech-Images/Tech-Python.svg"
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
           Benefits of Using Python Technology
          </h3>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6 font-medium">
            Driving innovation across multiple industries, Python has established itself as one of the most powerful and adaptable technologies. However, unlocking its full potential requires the right expertise  and that&apos;s where Analogue IT Solutions, a top Python development company, comes in
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
              <span className="font-bold  ">Simplified Development
              </span> - With its clean and easy-to-understand syntax, Python accelerates coding and reduces development complexities.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
              <span className="font-bold  ">Limitless Flexibility</span> - Whether it&apos;s web apps, mobile solutions, data science, or AI/ML projects, Python proves effective in every domain.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
              <span className="font-bold  ">Rich Ecosystem</span> - Tap into a massive collection of libraries and frameworks that boost efficiency while maintaining top-notch quality.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
              <span className="font-bold  ">Scalable & Future-Ready</span> - Python supports building solutions that grow with your business, ensuring long-term sustainability.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
              <span className="font-bold  ">Open-Source & Community Support</span> - Backed by a global community, Python offers cost-effective solutions with continuous enhancements and reliable support.
          </p>



          <h3 className="text-xl xss:text-sm  sm:text-base md:text-lg 2xl:text-[1.2rem] font-medium text-[#0E59F2] mb-4 mt-6">
            Get high-quality Python development with Analogue IT Solutions          
          </h3>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
              <span className="font-bold  ">Python Web Development</span> - Our Python Web Development Services use cutting-edge technologies to build powerful and scalable online applications that match our clients&apos; business requirements. </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
              <span className="font-bold  ">Python Mobile App Development</span> - Our Python Mobile App Development Services help businesses to develop high-performance, user-friendly mobile apps that meet the specific needs of their clients.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
              <span className="font-bold  ">Enterprise software solutions</span> - Python is used in our Enterprise Software Solutions to construct sophisticated, customised web apps that improve productivity and workflow efficiency.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
              <span className="font-bold  ">Custom Python development solutions</span> - Our custom Python development solutions are tailored to your company&apos;s specific demands, providing scalable, cost-effective solutions that produce tangible results.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
              <span className="font-bold  ">Python data analysis and visualisation</span> - Our Python data analysis and visualisation services help businesses use big data to make better decisions by providing interactive dashboards and deeper insights.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
              <span className="font-bold  ">AI/ML solutions</span> -  Our Python-based AI and machine learning solutions enable businesses to automate operations, generate important insights, and enhance consumer experiences.
          </p>


          <h3 className="text-xl xss:text-sm  sm:text-base md:text-lg 2xl:text-[1.2rem] font-medium text-[#0E59F2] my-4 mt-6">
            At Analogue IT Solutions, we harness the full potential of Python to develop robust, scalable, and high-performing applications that drive business growth and success.Below are common procedure we follow:          
          </h3>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
              <span className="font-bold  ">Expertise</span> - Our team of developers has in-depth knowledge and expertise in Python programming, ensuring that your project is in the best hands.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
              <span className="font-bold  ">Custom Solutions</span> - We recognize that each business is unique. That&apos;s why we work closely with our clients to create custom Python solutions that align with their specific business objectives.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
              <span className="font-bold  ">Quality Assurance</span> - We uphold the highest standards of quality in our development process, ensuring that the final product is thoroughly tested and meets your expectations.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium " >
            <span className="font-bold">Timely Delivery</span> - We are committed to delivering your Python development project on time, without compromising on quality.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium" >
                    Partnering with AnalogueIT Solutions for Python development means gaining a competitive edge and staying ahead in today&apos;s fast-paced business environment. Contact us today to discuss how our Python development services can unlock new opportunities for your business
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