"use client";
import { useEffect } from "react";
import Image from "next/image";
import GetAQuoteForm from "@/components/get-quote-form";
import FrequentQuestions from "@/components/faqs-page";
// import FrequentQuestions from "@/Components/frequentlyAskedQuestions";

export default function Responsive_FigmaTech() {
  const faqArray = [
    {
      question: "01. What is Figma used for?",
      answer:
        "Figma is a cloud-based design and prototyping tool used to create UI/UX designs, mobile app interfaces, website layouts, wireframes, and collaborative design projects.",
    },
    {
      question: "02. Why should I choose Figma over other design tools?",
      answer:
        "Figma stands out because it is web-based, supports real-time collaboration, requires no heavy installation, and works seamlessly across devices. It&apos;s ideal for distributed teams and scalable projects",
    },
    {
      question: "03. Does Analogue IT Solutions provide Figma design services?",
      answer:
        "Yes. At Analogue IT Solutions, we specialize in crafting intuitive UI/UX designs using Figma, ensuring your apps and websites are both visually appealing and user-friendly.",
    },
    {
      question: "04. Can I collaborate with your design team in Figma?",
      answer:
        "Absolutely. Since Figma supports live collaboration, our team shares designs in real time, allowing you to give instant feedback and be part of the creative process",
    },
    {
      question: "05. Do you provide prototypes and wireframes in Figma?",
      answer:
        "Yes. We design complete workflows from low-fidelity wireframes to high-fidelity interactive prototypes using Figma to give you a clear vision of your final product.",
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
        <div className="flex flex-col xl:flex-row justify-center items-center w-full bg-white px-4 xss:px-4 sm:px-6 md:px-10 lg:px-12 xl:px-8 2xl:px-11 3xl:px-18  pb-6">
          <div className="w-full xl:w-3/5 font-medium xl:pl-10">
            <h1 className="text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] xl:text-[1.5rem] 3xl:text-[1.6rem] font-semibold text-black underline underline-offset-[12px] sm:underline-offset-[16px] decoration-[#0D6EFD] decoration-4 p-2">
              Figma
            </h1>
            <h3 className="text-lg xss:text-sm  sm:text-base md:text-lg 2xl:text-[1.2rem] font-medium text-[#0E59F2] p-2 pl-3 mt-2 sm:mt-3">
              We design using Figma
            </h3>
            <p className="text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base  pr-6 text-[#7B7E86] leading-5 sm:leading-6 pl-3 ">
              Figma is a versatile design tool that can be used for a wide range
              of tasks, making it a favorite among designers, developers, and
              teams.
            </p>
            <p className="text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base  pr-6 text-[#7B7E86] leading-5 sm:leading-6 pl-3">
              Since it is cloud-based and supports real-time collaboration,
              multiple people can work on the same project simultaneously, no
              matter where they are located.
            </p>
            <p className="text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base  pr-6 text-[#7B7E86] leading-5 sm:leading-6 pl-3">
              This makes it a powerful choice for remote teams and businesses
              looking to streamline their design process.
            </p>
          </div>
          <div className="w-full xl:w-2/5 flex justify-center xl:justify-end mb-6 xl:mb-0">
            <Image
              src="/AdobeTech-Images/Tech-Figma.svg"
              width={400}
              height={450}
              alt="Adobe Tech image"
              className="object-contain w-full max-w-[250px] xss:max-w-[280px] xs:max-w-[300px] sm:max-w-[350px] md:max-w-[360px] lg:max-w-[380px] 2xl:max-w-[400px] 3xl:max-w-[430px] "
              sizes="(max-width: 320px) 250px, (max-width: 360px) 280px, (max-width: 480px) 300px, (max-width: 640px) 350px, 360px"
            />
          </div>
        </div>

        <div className="w-full px-4 xss:px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 2xl:px-24 3xl:px-32  "></div>

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
          <h3 className="text-xl xss:text-sm  sm:text-base md:text-lg 2xl:text-[1.2rem] font-medium text-[#0E59F2] mb-4 mt-6">
            Interface and User Experience (UI/UX) Design
          </h3>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
            <span className="font-bold  ">Wireframing and Prototyping</span> -
            Quickly create low-fidelity wireframes to map out the basic layout
            and functionality of your design. Then, refine them into
            high-fidelity prototypes that users can interact with to test and
            provide feedback.{" "}
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
            <span className="font-bold  ">User Interface Design</span> - Design
            beautiful and user-friendly interfaces for websites, apps, and other
            digital products. Figma provides a wide range of tools for creating
            vector graphics, layouts, and interactive elements.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
            <span className="font-bold  ">User Experience Design</span> - Plan
            and design the overall user experience, considering not just the
            visual design but also the usability, accessibility, and information
            architecture.
          </p>

          <h3 className="text-xl xss:text-sm  sm:text-base md:text-lg 2xl:text-[1.2rem] font-medium text-[#0E59F2] mb-4 mt-6">
            Benefits of using Figma
          </h3>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6 font-medium">
            Driving innovation across multiple industries, Python has
            established itself as one of the most powerful and adaptable
            technologies. However, unlocking its full potential requires the
            right expertise and that&apos;s where Analogue IT Solutions, a top
            Python development company, comes in{" "}
          </p>

          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
            <span className="font-bold  ">Real-time</span> - Work on designs
            with others simultaneously, see changes instantly, and provide
            feedback in real-time. This is perfect for remote teams or
            collaborative projects.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
            <span className="font-bold  ">Unlimited collaborators</span> - No
            limit on the number of people who can work on a project, unlike some
            other design tools with individual licenses.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
            <span className="font-bold  ">Version control and history</span> -
            Easily track changes and revert to previous versions if needed.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
            <span className="font-bold  ">Easy sharing</span> - Share designs
            with anyone, even if they don&apos;t have a Figma account, with a
            simple link.
          </p>

          <h3 className="text-xl xss:text-sm  sm:text-base md:text-lg 2xl:text-[1.2rem] font-medium text-[#0E59F2] mb-4 mt-6">
            Build Seamless Experiences in Figma with Analogue IT Solutions
          </h3>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
            <span className="font-bold  ">Expert Figma Designers</span> - Our
            team is skilled in creating user-friendly, modern, and interactive
            designs using Figma.{" "}
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
            <span className="font-bold  ">Collaborative Workflow</span> - With
            Figma&apos;s real-time collaboration, we work closely with you to
            refine designs instantly.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
            <span className="font-bold  ">Pixel-Perfect UI/UX</span> - We focus
            on delivering designs that are not only visually stunning but also
            intuitive and user-friendly.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
            <span className="font-bold  "> Seamless Prototyping</span> - We turn
            your ideas into interactive prototypes, making it easier to
            visualize and test the user journey.{" "}
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
            <span className="font-bold  ">Faster Turnaround</span> - With
            Figma&apos;s efficiency and our expertise, we ensure quicker
            delivery without compromising quality.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
            <span className="font-bold  ">Scalable Design Systems</span> - We
            build reusable design components to keep your brand consistent
            across all platforms.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
            <span className="font-bold  ">End-to-End Support</span> - From
            wireframes to final handoff, we stay with you throughout the entire
            design process.
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
