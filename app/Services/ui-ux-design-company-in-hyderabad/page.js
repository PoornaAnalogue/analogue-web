"use client";
import { FaChevronDown } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";
import PopUpForm from "@/components/popup-form";
import Link from "next/link";
import Script from "next/script";
import CarousalServicePage from "@/components/carousal-servicepage";
import FrequentQuestions from "@/components/faqs-page";
import GetAQuoteForm from "@/components/get-quote-form";
import CalendarPage from "@/app/home-page-main/calendar/calendar-page";

export default function UIUXAppDevelopment() {
  const [isOpen, setIsOpen] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState("Web Apps");

  // Array of image paths corresponding to original icon names
  const TechIcons = {
    reactIcon: "/service-icons/react-logo.svg",
    nextjsIcon: "/service-icons/next-logo.svg",
    vueIcon: "/service-icons/vue-logo.svg",
    angularIcon: "/service-icons/angular-logo.svg",
    nodejsIcon: "/service-icons/node-logo.svg",
    javaIcon: "/service-icons/java-logo.svg",
    phpIcon: "/service-icons/php-logo.svg",
    pythonIcon: "/service-icons/python-logo.svg",
    dotnetIcon: "/service-icons/dotnet-logo.svg",
    flutterIcon: "/service-icons/flutter-logo.svg",
    kotlinIcon: "/service-icons/kotlin-logo.svg",
    bgicon: "/service-icons/bgicon.svg",
  };

  const technologies = [
    {
      category: "Web Apps",
      items: [
        { name: "React JS", icon: TechIcons.reactIcon },
        { name: "Next JS", icon: TechIcons.nextjsIcon },
        { name: "Vue JS", icon: TechIcons.vueIcon },
        { name: "Angular", icon: TechIcons.angularIcon },
        { name: "Flutter", icon: TechIcons.flutterIcon },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node JS", icon: TechIcons.nodejsIcon },
        { name: "Java", icon: TechIcons.javaIcon },
        { name: "PHP", icon: TechIcons.phpIcon },
        { name: "Python", icon: TechIcons.pythonIcon },
        { name: "Dot.Net", icon: TechIcons.dotnetIcon },
      ],
    },
    {
      category: "Mobile Apps",
      items: [
        { name: "React Native", icon: TechIcons.reactIcon },
        { name: "Flutter", icon: TechIcons.flutterIcon },
        { name: "Kotlin", icon: TechIcons.kotlinIcon },
        { name: "Java", icon: TechIcons.javaIcon },
      ],
    },
  ];

  const selectedItems = technologies.find(
    (tech) => tech.category === selectedCategory
  )?.items;

  //   faqs

  const UiUxfaqArray = [
    {
      question:
        "01. 1. What is UI/UX development?",
      answer:
        "UI (User Interface) development focuses on designing the visual elements of a product such as buttons, layouts, and screens while UX (User Experience) development ensures the product is intuitive, user-friendly, and provides a seamless journey for users. Together, UI and UX create a product that looks good and works efficiently.",
    },
    {
      question:
        "02. How do UI/UX affect app or website performance?",
      answer:
        "Strong UI/UX directly influence usability. Clear navigation, fast load times, responsive layouts, and intuitive flows reduce friction, leading to higher conversions and better user retention.",
    },
    {
      question:
        "03. Do you provide custom UI/UX solutions?",
      answer:
        "Yes. Every business is unique, so we provide tailored UI & UX design services based on your target audience, industry, and goals.",
    },
    {
      question:
        "04. Can UI/UX design increase sales or conversions?",
      answer:
        "Yes. A user-friendly interface with an optimized user journey leads to smoother transactions, fewer drop-offs, and higher conversion rates.",
    },
    {
      question: "05. How do you approach UI/ UX development?",
      answer:
        "At Analogue IT Solutions, we start with research and user analysis, create wireframes and prototypes, test user flows, and then deliver designs that balance creativity with functionality.",
    },
  ];

  return (
    <>
      <div className="hero flex flex-col justify-center items-center bg-white pb-12">
        <div className="relative flex justify-center w-full bg-white">
          <Image
            src="/AbstractDesign.png"
            width={480}
            height={180}
            alt="Abstract design background"
            className="object-contain w-full h-auto max-w-[300px] xss:max-w-[320px] xs:max-w-[360px] sm:max-w-[480px] md:max-w-[550px] "
            sizes="(max-width: 320px) 300px, (max-width: 360px) 320px, (max-width: 480px) 360px, (max-width: 640px) 450px, (max-width: 768px) 640px, 768px"
          />
          <div className="absolute top-12 xss:top-10 xs:top-10 sm:top-20 md:top-15 bg-white px-4">
            <h1 className="text-xl xss:text-2xl xs:text-3xl sm:text-4xl md:text-[2.5rem] font-bold text-violet-950 text-center">
              Services
            </h1>
            <p className="text-xs xss:text-xs xs:text-base sm:text-lg text-black leading-loose text-center mt-2 sm:mt-3">
              Crafted with love since 2017
            </p>
          </div>
        </div>

        {/* heading and content section */}
        <div className="px-4 xss:px-6 xs:px-8 sm:px-10 md:px-12 lg:px-16 xl:px-20 flex flex-col space-y-4 ">
          {/* about our company on top */}
          <div className="flex items-center mb-1">
            <span className="w-1 h-1 bg-black rounded-full mr-2"></span>
            <span className="font-medium text-xs xss:text-subsmall sm:text-xs xl:text-sm text-black">
              ABOUT OUR COMPANY
            </span>
          </div>
          <h1 className=" text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.7rem] md:w-[75%] xl:text-[2rem] 3xl:text-[2.5rem] xl:w-[75%] 2xl:w-[65%] font-semibold text-black leading-snug">
            Best{" "}
            <span className="text-blue-500"> UI / UX Design </span>{" "}
            Company in Hyderabad, India
          </h1>
          <p className="text-gray-500 leading-relaxed text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base">
            Analogue IT Solutions is widely recognized as the Best UI/UX Design Company, offering comprehensive, top-quality services to meet the unique needs of our clients.
            With a strong dedication to user-centric design and a strong commitment to excellence, we create innovative, highly usable interfaces that elevate user experiences to new heights.As a leading UI/UX design company, we seamlessly blend innovative design concepts with cutting-edge technology to deliver exceptional digital solutions that resonate with users and drive business success.
          </p>

          {/* Free Quote button + Call us */}
          <div className="lg:flex gap-4">
            <button
              suppressHydrationWarning
              onClick={() => setIsOpen(true)}
              className="bg-blue-600 xss:text-xs lg:text-sm text-white xss:px-2 xss:py-2 xl:px-5 xl:py-3 rounded-3xl hover:bg-blue-700 transition cursor-pointer"
            >
              Get Free Quote
            </button>
            <div className="flex xss:flex-col lg:flex-row lg:items-center xss:ml-2 lg:ml-[-0.3rem] xss:mt-2 lg:mt-0">
              <span className="xss:text-xs lg:text-sm text-blue-500 mr-2">
                Call Us
              </span>
              <a
                href="tel:+918919088163"
                className="xss:text-xs lg:text-sm text-blue-700 hover:underline transition-colors duration-200"
              >
                +91 8919088163
              </a>
            </div>
          </div>

          {/* Welcome to our company */}
          <div className="flex items-center xss:pt-3 xl:pt-8 xss:mb-1">
            <span className="w-1 h-1 bg-black rounded-full mr-2"></span>
            <span className="font-medium text-xs xss:text-subsmall sm:text-xs xl:text-sm text-black ">
              WELCOME TO OUR COMPANY
            </span>
          </div>
          <h5 className=" subt text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.5rem] md:w-[75%] xl:text-[1.8rem] 3xl:text-[2.2rem] xl:w-[75%] 2xl:w-[65%] font-semibold text-black leading-snug">
            Elevating Business Success Through UI/UX Design
          </h5>
          <p className="text-gray-500 leading-relaxed text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base">
            As a trusted UI/UX Design Company in Hyderabad, we specialize in delivering user-friendly and innovative design solutions that enhance customer experiences and strengthen digital presence. Our skilled team blends creativity with modern design practices to craft interfaces that are intuitive, engaging, and impactful. With a commitment to excellence, our UI/UX Design Company in Hyderabad ensures every project is tailored to your unique business goals, helping you achieve growth and long-term success in the digital world.
          </p>
          <div className="my-2">
            <button className="bg-blue-600 xss:text-xs lg:text-sm text-white xss:px-2 xss:py-2 xl:px-5 xl:py-3 rounded-3xl hover:bg-blue-700 transition cursor-pointer ">
              <Link href="/aboutus">Discover More</Link>
            </button>
          </div>
        </div>

        {/* middle group mobiles and contact us button section */}
        <div className="mt-4 xss:mt-6 xs:mt-8 sm:mt-10 md:mt-12 lg:mt-15 ">
          <div className="relative w-full h-auto min-h-[200px] xss:min-h-[250px] xs:min-h-[200px] sm:min-h-[350px] md:min-h-[400px] lg:h-[400px] bg-[url('/service-icons/app-dev-bg.jpg')] bg-cover bg-center flex flex-col lg:flex-row justify-end items-center">
            <div className="w-full lg:w-[48%] 2xl:w-[50%] lg:absolute lg:inset-y-0 lg:left-0 p-4 xss:p-6 xs:p-8 sm:p-10 md:p-12 lg:p-11 xl:p-9 2xl:p-10">
              <h1 className="  text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.5rem] md:w-[75%] xl:text-[1.8rem] 3xl:text-[2.2rem] xl:w-[75%] 2xl:w-[65%] font-semibold text-white leading-snug 2xl:w-[60%] 3xl:w-[65%]">
                Innovative UI/UX Design for Your Business
              </h1>
              <p className="text-white text-xs xss:text-xs xs:text-xs sm:text-sm md:text-sm lg:text-[0.75rem] xl:text-sm 3xl:text-base xss:leading-5 xl:leading-6 2xl:leading-7 mt-2 xss:mt-3 xs:mt-4 sm:mt-4 md:mt-5 lg:mt-3 xl:mt-3 3xl:mt-2">
                At Analogue IT Solutions, we excel in creating cutting-edge UI/UX design to work flawlessly across platforms. By harnessing the versatility of UI/UX, we deliver apps that are fast, scalable, and visually engaging. From dynamic e-commerce solutions to bespoke mobile applications, our team focuses on crafting products that elevate user experience and drive measurable business results. Partner with us to turn your vision into a powerful UI/UX Design with creativity, precision, and innovation.
              </p>
              <button className="bg-blue-700 text-white rounded p-2 xss:p-2 xs:p-2 sm:p-3 md:p-3 lg:p-2 xl:p-2 2xl:p-3 mt-2 lg:mt-4 xss:mt-3 xs:mt-4 sm:mt-4 md:mt-4 lg:mt-2 xl:mt-3 2xl:mt-4 3xl:mt-3 text-xs xss:text-xs xs:text-sm sm:text-sm md:text-sm lg:text-[0.65rem] xl:text-xs 2xl:text-sm">
                <Link href="/contact">Contact Us</Link>
              </button>
            </div>
            <div className="w-full lg:w-[50%] 2xl:w-[45%] h-[200px] xss:h-[250px] sm:h-[250px] md:h-[400px]">
              <Image
                src="/service-icons/group-mobiles.png"
                alt="Group mobiles"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* client carousal for successful projects */}
        <div>
          <CarousalServicePage />
        </div>

        {/* TECHNOLOGIES SECTION  WITH ICONS AND BG IMAGE */}
        <div className=" w-full h-auto bg-[url('/service-icons/app-dev-bg.jpg')] bg-cover bg-center flex flex-col lg:flex-row h-[35rem] sm:h-[27rem] md:h-[32rem] lg:h-[32rem] xl:h-[26rem]">
          <div className=" pt-[4%] sm:pt-[5%] 3xl:w-[80%] w-[80%] mx-auto text-white">
            <h2 className="text-2xl xss:text-center lg:text-start xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] xl:text-[1.5rem] 3xl:text-[1.6rem] font-semibold mb-9">
              TECHNOLOGIES
            </h2>
            <div className="flex space-x-8 mb-6">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  onClick={() => setSelectedCategory(tech.category)}
                  className={`cursor-pointer pb-1 border-b-2 font-medium xss:text-xs sm:text-sm lg:text-base  transition-all duration-500 ease-in-out ${selectedCategory === tech.category
                    ? "border-white text-[#0E59F2]"
                    : "border-transparent"
                    } hover:border-[#0E59F2]`}
                >
                  {tech.category}
                </span>
              ))}
            </div>

            {/* Display selected category items */}
            <div className="flex">
              <div className="w-full">
                <div className="grid grid-cols-6 xss:grid-cols-2 sm:grid-cols-3 2xl:w-[60rem] xl:grid-cols-5">
                  {selectedItems?.map((item, idx) => (
                    <div
                      key={idx}
                      className="py-1 p-2 m-5 sm:m-0 sm:my-2 md:m-0 md:my-2 text-black relative"
                    >
                      <Image
                        src={TechIcons.bgicon}
                        alt="design"
                        width={20}
                        height={20}
                        className=" xss:w-[5.5rem] sm:w-[6.3rem] md:w-[120px] lg:w-[135px] flex justify-center items-center mx-auto"
                      />
                      <div className="absolute inset-0 xss:text-subsmall sm:text-xs flex flex-col items-center justify-center">
                        <Image
                          src={item.icon}
                          alt={item.name}
                          width={20}
                          height={20}
                          className="w-[65px] h-[65px] xss:w-[2.5rem] xss:h-[2rem] sm:w-[55px] sm:h-[50px] md:w-[60px] md:h-[50px] lg:w-[68px] lg:h-[55px] xl:w-[85px] xl:h-[75px]"
                        />
                        {item.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our services new section */}
        <div className=" pb-10">
          <div className="flex flex-col xss:items-start sm:items-center xss:px-4 xss:py-5 xl:py-10">
            <div className="flex items-center mb-1">
              <span className="w-1 h-1 bg-black rounded-full mr-2"></span>
              <span className="font-medium text-xs xss:text-subsmall sm:text-xs xl:text-sm text-black">
                Our Services
              </span>
            </div>
            <h1 className=" text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] xl:text-[1.5rem] 3xl:text-[1.6rem] font-semibold text-black leading-snug">
              UI/UX Development Services
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 xss:gap-8 xss:px-8 3xl:gap-20 2xl:gap-14 2xl:px-14 3xl:px-30 px-10">
            <div className=" text-[#7B7E86] p-5 border-l border-r border-gray-200 shadow-[0_4px_2px_rgba(0,0,0,0.3)] bg-white rounded-lg">
              <h3 className="font-weight-400 text-[#0E59F2] xss:mb-3 xl:text-2xl xl:mb-4 xss:mb-1text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] xl:text-[1.5rem] 3xl:text-[1.6rem] font-semibold">
                Design Thinking Process
              </h3>
              <p className="xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base  xss:leading-4 sm:leading-relaxed 3xl:leading-7">
                The Design Thinking Process in UI/UX development is a human-centred approach to creating user-friendly and effective interfaces.
              </p>
            </div>
            <div className=" text-[#7B7E86] p-5 border-l border-r border-gray-200 shadow-[0_4px_2px_rgba(0,0,0,0.3)] bg-white p-6 rounded-lg">
              <h3 className="font-weight-400 text-[#0E59F2] xss:mb-3 xl:text-2xl xl:mb-4 xss:mb-1text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] xl:text-[1.5rem] 3xl:text-[1.6rem] font-semibold">
                Empathise Process              </h3>
              <p className="xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base  xss:leading-4 sm:leading-relaxed 3xl:leading-7">
                Empathising is the cornerstone of UX. Deeply understanding users fosters intuitive interfaces and meaningful interactions.
              </p>
            </div>
            <div className=" text-[#7B7E86] p-5 border-l border-r border-gray-200 shadow-[0_4px_2px_rgba(0,0,0,0.3)] bg-white p-6 rounded-lg">
              <h3 className="font-weight-400 text-[#0E59F2] xss:mb-3 xl:text-2xl xl:mb-4 xss:mb-1text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] xl:text-[1.5rem] 3xl:text-[1.6rem] font-semibold">
                Wireframing Process
              </h3>
              <p className="xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base  xss:leading-4 sm:leading-relaxed 3xl:leading-7">
                Wire framing in UI/UX is the initial stage of design, involving outlining layout and functionality for digital interfaces. It's crucial for planning.
              </p>
            </div>
            <div className=" text-[#7B7E86] p-5 border-l border-r border-gray-200 shadow-[0_4px_2px_rgba(0,0,0,0.3)] bg-white p-6 rounded-lg">
              <h3 className="font-weight-400 text-[#0E59F2] xss:mb-3 xl:text-2xl xl:mb-4 xss:mb-1text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] xl:text-[1.5rem] 3xl:text-[1.6rem] font-semibold">
                Project Research              </h3>
              <p className="xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base  xss:leading-4 sm:leading-relaxed 3xl:leading-7">
                Know your users, build for them: Project research ensures your UI/UX resonates with your target audience.
              </p>
            </div>
          </div>
        </div>

        {/* Calendar */}
        <div>
          <CalendarPage />
        </div>

        <div className="w-full h-auto bg-white xl:p-5 xl:px-20 xss:px-5 pt-5 xs:p-5 sm:px-8 ">
          <h5 className="   text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.5rem] md:w-[75%] xl:text-[1.8rem] 3xl:text-[2.2rem] xl:w-[75%] 2xl:w-[65%] font-semibold text-black leading-snug py-2">
            How We Create Impactful User Experiences
          </h5>
          <div className="text-[#7B7E86]">
            <p className="pb-2 text-lg xss:text-sm  sm:text-base md:text-lg 2xl:text-[1.2rem] font-medium text-[#363638D9]">
              Dynamic Design -{" "}
              <span className="xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base  xss:leading-4 sm:leading-relaxed 3xl:leading-8">
                Dynamic design in UI/UX development focuses on creating versatile, interactive, and visually appealing interfaces that adapt seamlessly to user behavior. By integrating animations, responsive layouts, and engaging visuals, we deliver designs that not only capture attention but also provide an optimal and memorable user experience.                      </span>
              <p className="pb-2 text-lg xss:text-sm  sm:text-base md:text-lg 2xl:text-[1.2rem] font-medium text-[#363638D9]">
                Usability Testing -{" "}
                <span className="xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base  xss:leading-4 sm:leading-relaxed 3xl:leading-8">
                  Usability testing plays a crucial role in UI/UX development, allowing real users to interact with your digital product while performing specific tasks. This process helps identify pain points, uncover hidden challenges, and validate design decisions. By resolving interface issues early, we ensure the final product is intuitive, user-friendly, and aligned with customer expectations.                        </span>
              </p>
              <p className="pb-2 text-lg xss:text-sm  sm:text-base md:text-lg 2xl:text-[1.2rem] font-medium text-[#363638D9]">
                Metrics That Matter -{" "}
                <span className="xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base  xss:leading-4 sm:leading-relaxed 3xl:leading-8">
                  In the digital space, data-driven insights shape success. Metrics that matter—such as engagement rates, conversion ratios, and customer satisfaction scores help businesses make informed decisions. Our optimized UI/UX designs are built around these key performance indicators, driving increased ROI, boosting customer retention, and fostering long-term business growth.                        </span>
              </p>
              <p className="pb-2 text-lg xss:text-sm  sm:text-base md:text-lg 2xl:text-[1.2rem] font-medium text-[#363638D9]">
                Advanced UX Research Lab -{" "}
                <span className="xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base  xss:leading-4 sm:leading-relaxed 3xl:leading-8">
                  Our advanced UX research lab is a cutting-edge facility designed to analyze and understand real user behavior. Equipped with modern tools and techniques, it allows us to conduct in-depth research, usability studies, and design evaluations. This ensures our UI/UX design processes remain innovative, evidence-based, and highly effective. By leveraging these insights, we enhance product usability, elevate user satisfaction, and deliver solutions that stand out in a competitive market.                        </span>
              </p>
            </p>
          </div>
        </div>

        {/* webS app dev company in India */}
        <div className="w-full h-auto bg-white xl:p-0 xl:px-20 xss:px-5 pt-3 xs:p-5 sm:px-8 ">
          <h3 className="  text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.5rem] md:w-[75%] xl:text-[1.8rem] 3xl:text-[2.2rem] xl:w-[75%] 2xl:w-[65%] font-semibold text-black leading-snug">
            UI/UX Design Company in Hyderabad          
            </h3>
          <div className="xl:text-sm text-[#7B7E86] xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base leading-relaxed 3xl:leading-8">
            <p className="pb-2">
              At Analogue IT Solutions, we don&apos;t just design interfaces — we design experiences that engage, inspire, and convert. As a leading UI/UX Design Company in Hyderabad, we craft digital journeys that are visually stunning, intuitive to use, and aligned with your brand identity.
            </p>
            <p className="pb-2">
              Our expertise covers everything from user research and journey mapping to interactive prototypes and responsive design. We focus on solving real user problems while delivering sleek, modern, and result-oriented designs.
            </p>
            <p className="pb-2">
              Whether you&apos;re building a startup app or enhancing an enterprise platform, our team ensures that every touchpoint feels seamless and impactful. With us, your product doesn&apos;t just look good it works brilliantly.
            </p>
          </div>
        </div>

        <div className="w-full h-auto bg-white xl:p-0 xl:px-20 xss:px-5 pt-5 xs:p-5 sm:px-8">
          <h5 className="  text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.5rem] md:w-[75%] xl:text-[1.8rem] 3xl:text-[2.2rem] xl:w-[75%] 2xl:w-[65%] font-semibold text-black leading-snug">
            Our UI/UX Design Services
          </h5>
          <p className="pb-2">
            At Analogue IT Solutions, we provide end-to-end design services tailored to your unique business goals:
          </p>

          <div className="text-[#7B7E86]">
            <div className="pb-2 text-lg xss:text-sm sm:text-base md:text-lg 2xl:text-[1.2rem] font-medium text-[#363638D9]">
              User Research & Analysis -{" "}
              <span className="xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base xss:leading-4 sm:leading-relaxed 3xl:leading-8">
                Understanding your audience, their needs, and behavior patterns to create meaningful designs.
              </span>
            </div>

            <div className="pb-2 text-lg xss:text-sm sm:text-base md:text-lg 2xl:text-[1.2rem] font-medium text-[#363638D9]">
              Wireframing & Prototyping -{" "}
              <span className="xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base xss:leading-4 sm:leading-relaxed 3xl:leading-8">
                Turning ideas into interactive blueprints for better visualization before development.
              </span>
            </div>

            <div className="pb-2 text-lg xss:text-sm sm:text-base md:text-lg 2xl:text-[1.2rem] font-medium text-[#363638D9]">
              UI Design -{" "}
              <span className="xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base xss:leading-4 sm:leading-relaxed 3xl:leading-8">
                Delivering modern, consistent, and brand-aligned interfaces that enhance visual appeal.
              </span>
            </div>

            <div className="pb-2 text-lg xss:text-sm sm:text-base md:text-lg 2xl:text-[1.2rem] font-medium text-[#363638D9]">
              Usability Testing -{" "}
              <span className="xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base xss:leading-4 sm:leading-relaxed 3xl:leading-8">
                Gathering feedback from real users to refine and optimize design performance.
              </span>
            </div>

            <div className="pb-2 text-lg xss:text-sm sm:text-base md:text-lg 2xl:text-[1.2rem] font-medium text-[#363638D9]">
              Responsive & Interactive Design -{" "}
              <span className="xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base xss:leading-4 sm:leading-relaxed 3xl:leading-8">
                Ensuring your app or website delivers the same seamless experience across all devices.
              </span>
            </div>
          </div>
        </div>


        {/* Extended Locations */}
        <div className=" w-full h-auto bg-[url('/service-icons/app-dev-bg.jpg')] bg-cover bg-center xss:p-7 xl:p-15">
          <div className="text-white text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] xl:text-[1.5rem] 3xl:text-[1.6rem] font-semibold xss:pb-5 lg:pb-8 2xl:pb-15 text-center">
            Our Services Extend to These Top Locations!
          </div>
          <div className="grid lg:grid-cols-2 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base xss:grid-cols-1 xss:gap-4 xl:gap-5 sm:px-8 md:px-28 lg:px-10 2xl:px-50">
            <div className="flex items-center">
              <div className="w-[1.5rem] xss:w-[1.8rem] sm:w-[2rem] lg:w-[2.4rem] ">
                <Image
                  src="/service-icons/hyd.svg"
                  alt="hyd"
                  width={40}
                  height={40}
                  priority={false}
                />
              </div>
              <p className="text-white pl-2">
                Mobile App Development Company in Hyderabad
              </p>
            </div>
            <div className="flex items-center">
              <div className="w-[1.5rem] xss:w-[1.8rem] sm:w-[2rem] lg:w-[2.4rem] ">
                <Image
                  src="/service-icons/torento.svg"
                  alt="toronto"
                  width={40}
                  height={40}
                  priority={false}
                />
              </div>
              <p className="text-white pl-2">
                Mobile App Development Company in Toronto
              </p>
            </div>
            <div className="flex items-center">
              <div className="w-[1.5rem] xss:w-[1.8rem] sm:w-[2rem] lg:w-[2.4rem] ">
                <Image
                  src="/service-icons/saudi.svg"
                  alt="saudi"
                  width={40}
                  height={40}
                  priority={false}
                />
              </div>
              <p className="text-white pl-2">
                Mobile App Development Company in Saudi
              </p>
            </div>
            <div className="flex items-center">
              <div className="w-[1.5rem] xss:w-[1.8rem] sm:w-[2rem] lg:w-[2.4rem] ">
                <Image
                  src="/service-icons/dubai.svg"
                  alt="dubai"
                  width={40}
                  height={40}
                  priority={false}
                />
              </div>
              <p className="text-white pl-2">
                Mobile App Development Company in Dubai
              </p>
            </div>
            <div className="flex items-center">
              <div className="w-[1.5rem] xss:w-[1.8rem] sm:w-[2rem] lg:w-[2.4rem] ">
                <Image
                  src="/service-icons/qatar.svg"
                  alt="qatar"
                  width={40}
                  height={40}
                  priority={false}
                />
              </div>
              <p className="text-white pl-2">
                Mobile App Development Company in Qatar
              </p>
            </div>
            <div className="flex items-center">
              <div className="w-[1.5rem] xss:w-[1.8rem] sm:w-[2rem] lg:w-[2.4rem] ">
                <Image
                  src="/service-icons/kochi.svg"
                  alt="kochi"
                  width={40}
                  height={40}
                  priority={false}
                />
              </div>
              <p className="text-white pl-2">
                Mobile App Development Company in Kochi
              </p>
            </div>
          </div>
        </div>

        {/* why choose  */}
        <div className="w-full h-auto bg-white xl:p-5 xl:px-20 xss:px-5 pt-5 xs:p-5 sm:px-8">
          <h5 className=" py-2 text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.5rem] md:w-[75%] xl:text-[1.8rem] 3xl:text-[2.2rem] xl:w-[75%] 2xl:w-[65%] font-semibold text-black leading-snug">
            Why Choose Analogue IT Solutions?  </h5>
          <p className="pb-2">
            When it comes to choosing a UI/UX design partner in Hyderabad, businesses trust Analogue IT Solutions for the following reasons:  </p>

          <div className="text-[#7B7E86]">
            <div className="pb-2 text-lg xss:text-sm sm:text-base md:text-lg 2xl:text-[1.2rem] text-[#363638D9] font-medium">
              Creative Excellence -{" "}
              <span className="xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base xss:leading-4 sm:leading-relaxed 3xl:leading-8">
                Our designs strike the perfect balance between aesthetics and functionality.      </span>
            </div>

            <div className="pb-2 text-lg xss:text-sm sm:text-base md:text-lg 2xl:text-[1.2rem] font-medium text-[#363638D9]">
              Human-Centered Approach  -{" "}
              <span className="xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base xss:leading-4 sm:leading-relaxed 3xl:leading-8">
                Every decision we make is based on improving the end-user experience.      </span>
            </div>

            <div className="pb-2 text-lg xss:text-sm sm:text-base md:text-lg 2xl:text-[1.2rem] font-medium text-[#363638D9]">
              Industry Expertise -{" "}
              <span className="xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base xss:leading-4 sm:leading-relaxed 3xl:leading-8">
                We&apos;ve worked across multiple domains, from startups to enterprises, delivering impactful designs.
              </span>
            </div>

            <div className="pb-2 text-lg xss:text-sm sm:text-base md:text-lg 2xl:text-[1.2rem] font-medium text-[#363638D9]">
              Innovation & Precision -{" "}
              <span className="xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base xss:leading-4 sm:leading-relaxed 3xl:leading-8">
                We focus on the finer details while bringing innovative design ideas to life.
              </span>
            </div>

            <div className="pb-2 text-lg xss:text-sm sm:text-base md:text-lg 2xl:text-[1.2rem] font-medium text-[#363638D9]">
              Tailored Solutions -{" "}
              <span className="xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base xss:leading-4 sm:leading-relaxed 3xl:leading-8">
                No two businesses are the same, which is why our strategies are customized for your unique goals.
              </span>
            </div>
            <div className="pb-2 text-lg xss:text-sm sm:text-base md:text-lg 2xl:text-[1.2rem] font-medium text-[#363638D9]">
              Result-Oriented Approach -{" "}
              <span className="xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base xss:leading-4 sm:leading-relaxed 3xl:leading-8">
                We design with conversions, usability, and long-term growth in mind.
              </span>
            </div>
          </div>
        </div>

        {/* transforming ideas */}
        <div className="w-full h-auto bg-white xl:p-2  xl:px-20 xss:px-5 pt-5 xs:p-5 sm:px-8 ">
          <h3 className="  text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.5rem] md:w-[75%] xl:text-[1.8rem] 3xl:text-[2.2rem] xl:w-[75%] 2xl:w-[65%] font-semibold text-black leading-snug">
            Transforming Ideas Into Experiences          </h3>
          <div className="xl:text-sm text-[#7B7E86] pb-2 xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base leading-relaxed 3xl:leading-8">
            <p className="pb-2">
              At Analogue IT Solutions, we treat every project as a journey. From the very first brainstorming session to the final prototype, we ensure collaboration, creativity, and precision. Our aim is to transform your ideas into digital experiences that resonate with users, strengthen brand identity, and fuel business growth.
              Whether you are a startup looking to create your first product or an enterprise enhancing your existing platforms, we have the expertise to deliver designs that delight users and deliver measurable results.
            </p>
          </div>
        </div>

        {/* partner wiith */}
        <div className="w-full h-auto bg-white xl:p-0 xl:px-20 xss:px-5 pt-5 xs:p-5 sm:px-8 ">
          <h3 className="  text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.5rem] md:w-[75%] xl:text-[1.8rem] 3xl:text-[2.2rem] xl:w-[75%] 2xl:w-[65%] font-semibold text-black leading-snug">
            Partner with the Best UI/UX Design Company in Hyderabad</h3>
          <div className="xl:text-sm text-[#7B7E86] xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base leading-relaxed 3xl:leading-8">
            <p className="pb-2">
              Your digital presence deserves more than just a good design — it deserves an experience that leaves a lasting impression. Partner with Analogue IT Solutions - the Best UI/UX Design Company in Hyderabad - and let us help you craft engaging, user-friendly, and conversion-focused designs that set your brand apart.            </p>
          </div>
        </div>

        {/* faqs section */}
        <div className="w-[86%] mx-auto pb-3 xss:mt-5">
          <div>
            <FrequentQuestions Question={UiUxfaqArray} />
          </div>
        </div>

        {/* get a quote form */}
        <div>
          <GetAQuoteForm />
        </div>

        <PopUpForm isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </>
  );
}
