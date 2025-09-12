"use client";
import { useEffect } from "react";
import Image from "next/image";
import GetAQuoteForm from "@/Components/GetAQuoteForm";
import FrequentQuestions from "@/Components/frequentlyAskedQuestions";
// import FrequentQuestions from "@/Components/frequentlyAskedQuestions";

export default function Responsive_AdobeTech() {
  const faqArray = [
    {
      question: "01. What is Adobe XD used for?",
      answer:
        "Adobe XD is a professional UI/UX design and prototyping tool that helps designers create wireframes, mockups, and interactive prototypes for web and mobile apps. It's widely used to design user-friendly digital experiences.",
    },
    {
      question: "02. Is Adobe XD free to use?",
      answer:
        "Adobe XD offers both free and paid plans. The free version includes basic features, while premium plans provide advanced collaboration and cloud storage options for teams.",
    },
    {
      question: "03. Can Adobe XD be used for mobile app design?",
      answer:
        "Yes, Adobe XD is ideal for mobile app design. It allows designers to create interactive prototypes and test user flows before development, ensuring smooth functionality and great user experience.",
    },
    {
      question:
        "04. What are the benefits of using Adobe XD over other design tools?",
      answer:
        "Adobe XD is lightweight, fast, and offers seamless integration with other Adobe Creative Cloud tools. Its features like auto-animate, responsive resizing, and real-time collaboration make it a preferred choice for UI/UX designers.",
    },
    {
      question:
        "05. Does Analogue IT Solutions provide Adobe XD design services?",
      answer:
        "Yes. Analogue IT Solutions specializes in delivering professional Adobe XD design services, creating interactive and user-friendly prototypes tailored to your business needs.",
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
              Adobe XD
            </h1>
            <h3 className="text-lg xss:text-sm  sm:text-base md:text-lg 2xl:text-[1.2rem] font-medium text-[#0E59F2] p-2 pl-3 mt-2 sm:mt-3">
              We design using Adobe XD
            </h3>
            <p className="text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base  pr-6 text-[#7B7E86] leading-5 sm:leading-6 pl-3 pb-3">
              Adobe XD is a vector graphics editor and user experience design
              tool for web, mobile, desktop, and voice experiences. It is part
              of the Adobe Creative Cloud suite and is available for Mac and
              Windows. XD allows users to create user interfaces (UIs),
              prototypes, and design systems. It also includes features for
              collaboration, version control, and design handoff.
            </p>
            <p className="text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base  pr-6 text-[#7B7E86] leading-5 sm:leading-6 pl-3">
              Analogue IT Solutions provides user experience (UX) and user
              interface (UI) design services. They use a variety of tools,
              including Adobe XD, to create high-quality designs for their
              clients. Analogue it solutions has a team of experienced designers
              who are passionate about creating user-friendly and visually
              appealing products.
            </p>
          </div>
          <div className="w-full xl:w-2/5 flex justify-center xl:justify-end mb-6 xl:mb-0">
            <Image
              src="/AdobeTech-Images/Tech-Adobe.svg"
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
          <h3 className="text-xl xss:text-sm  sm:text-base md:text-lg 2xl:text-[1.2rem] font-medium text-[#0E59F2] mb-4 mt-6">
            Benefits of Using Adobe XD Design
          </h3>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6 font-medium">
            Adobe XD is a powerful and versatile tool that can be used for a
            variety of design tasks, from creating simple wireframes to complex
            prototypes. If you&apos;re looking for a design tool that can help
            you streamline your workflow and create high-quality designs, then
            Adobe XD is a great option.
          </p>
          {/* <br /> */}
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
            Here are some of the key benefits of using Adobe XD Design: <br />{" "}
            Fast and efficient: XD is a lightweight and efficient tool that
            allows you to work quickly and easily. Unlike some other design
            tools, XD doesn&apos;t bog you down with unnecessary features, so
            you can focus on creating your designs.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
            <span className="font-bold  ">Powerful prototyping</span> -
             XD&apos;s prototyping features are some of the best in the
            industry. You can easily create interactive prototypes that you can
            share with clients and stakeholders to get feedback.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
            <span className="font-bold  ">User-friendly interface</span> - XD
            has a clean and intuitive interface that is easy to learn and use,
            even if you&apos;re new to design tools.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
            <span className="font-bold  ">Cross-platform compatibility</span> -
            XD designs can be exported to a variety of formats, so you can use
            them on any device.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
            <span className="font-bold  ">
              Integrations with other Adobe products
            </span>{" "}
            - XD integrates seamlessly with other Adobe products, such as
            Photoshop and Illustrator, so you can easily import and export
            assets.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
            <span className="font-bold  ">Large community and resources</span> -
            There is a large and active community of XD users who are always
            happy to help and share resources.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
            <span className="font-bold  ">Regular updates</span> - Adobe XD is
            constantly being updated with new features and improvements, so you
            can be sure that you&apos;re always using the latest and greatest
            version.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
            <span className="font-bold  ">Free plan available</span> - XD offers
            a free plan with limited features, which is a great way to try out
            the tool before you commit to a paid subscription.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
            Overall, Adobe XD is a great design tool that offers a wide range of
            benefits for users of all levels. If you&apos;re looking for a fast,
            efficient, and user-friendly tool to create high-quality designs,
            then XD is a great option. Cost-Effective Solution:Websites offer a
            cost-effective way to advertise, showcase products, and provide
            customer service compared to traditional methods. Don&apos;t settle
            for average. Let a Best Web Development Company Analogue IT
            Solutions be your partner in crafting a website that delivers
            exceptional results.
          </p>

          <h3 className="text-xl xss:text-sm  sm:text-base md:text-lg 2xl:text-[1.2rem] font-medium text-[#0E59F2] mb-4 mt-6">
            Here are some additional things to consider when deciding whether or
            not to use Adobe XD
          </h3>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
            <span className="font-bold  ">Cost</span> - XD is a
            subscription-based tool, so you will need to pay a monthly or annual
            fee to use it. However, there is a free plan available with limited
            features.{" "}
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
            <span className="font-bold  ">Learning curve</span> - While XD is
            easy to learn and use, there is still a learning curve involved. If
            you&apos;re new to design tools, you may want to start with a
            simpler tool, such as Figma.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
            <span className="font-bold  ">Features</span> - XD has a wide range
            of features, but it may not have all of the features that you need.
            If you need a tool with more advanced features, you may want to
            consider another option.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
            Ultimately, the decision of whether or not to use Adobe XD is up to
            you. However, if you&apos;re looking for a powerful and versatile
            design tool that can help you create high-quality designs, then XD
            is a great option.
          </p>

          <h3 className="text-xl xss:text-sm  sm:text-base md:text-lg 2xl:text-[1.2rem] font-medium text-[#0E59F2] mb-4 mt-6">
            Let Our Experts Craft Your Dream App with Adobe XD
          </h3>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
            <span className="font-bold  ">Analogue IT Solutions</span> - Your
            Best Adobe Xd Development Partner Imagine your perfect app: sleek,
            intuitive, and engaging. Now, imagine bringing it to life with the
            expertise of Analogue IT Solutions, a leading Adobe Xd development
            company.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
            We don&apos;t just build apps; we craft experiences. Leveraging the
            power of Adobe XD, our team of seasoned designers and developers
            translates your vision into a tangible masterpiece.
          </p>

          <h3 className="text-xl xss:text-sm  sm:text-base md:text-lg 2xl:text-[1.2rem] font-medium text-[#0E59F2] mb-4 mt-6">
            Why Choose Analogue IT Solutions for Your Adobe Xd Development?
          </h3>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
            <span className="font-bold  ">Unmatched Expertisez</span> - XD has a
            wide range of features, but it may not have all of the features that
            you need. If you need a tool with more advanced features, you may
            want to consider another option.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
            <span className="font-bold  ">Agile & Collaborative</span> - We work
            closely with you throughout the process, ensuring your ideas and
            feedback are seamlessly integrated into the final product.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
            <span className="font-bold">Future-Proof Solutions</span> - We craft
            apps that are not only aesthetically pleasing but also scalable and
            adaptable to your evolving needs.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
            <span className="font-bold  ">Dedicated Support</span> - Our team is
            here to guide you every step of the way, from initial consultation
            to post-launch maintenance.
          </p>

          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium mt-6">
            <span className="text-xl xss:text-sm  sm:text-base md:text-lg 2xl:text-[1.2rem] font-medium  mb-4 text-[#0E59F2] ">
              More Than Just Development At Analogue IT Solutions{" "}
            </span>{" "}
            - we understand that app development is more than just code.We offer
            a broad range of services, which include:
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
            <span className="font-bold  ">User Experience (UX) Design</span> -
            We conduct in-depth research and analysis to create an app
            that&apos;s user-centric and intuitive.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
            <span className="font-bold  ">User Interface (UI) Design</span> -
            Our talented designers bring your app to life with stunning visuals
            and engaging interactions.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
            <span className="font-bold">Prototyping & Testing</span> - We create
            functional prototypes to gather user feedback and refine your app
            before development.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
            <span className="font-bold  ">Development & Integration</span> - Our
            developers craft your app using the latest technologies and best
            practices.
          </p>
          <p className="pb-3 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6  font-medium">
            <span className="font-bold  ">App Store Optimization (ASO) : </span>
            App Store Optimization (ASO): We ensure your app gets discovered by
            the right audience. Ready to realise the full potential of your app
            idea? Contact Analogue IT Solutions today for a free consultation.
            Let our Adobe Xd experts turn your vision into reality
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
