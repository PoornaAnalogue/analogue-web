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

export default function ChromeExtension() {
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

  const ChromefaqArray = [
    {
      question:
        "01. What is a Chrome extension?",
      answer:
        "A Chrome extension is a lightweight software add-on that enhances browser functionality, offering users quick tools, features, or integrations directly within Chrome. It allows businesses to provide additional value to users right in their browser.",
    },
    {
      question:
        "02. Why should my business invest in a Chrome extension?",
      answer:
        "Chrome extensions improve customer convenience, boost engagement, and keep your brand accessible in daily browsing. They can also streamline workflows or provide instant solutions to user needs.",
    },
    {
      question:
        "03. What technologies are used to build Chrome extensions?",
      answer:
        "They are mainly developed using HTML, CSS, JavaScript, and Chrome APIs, with optional backend integrations for advanced features or data storage. Modern tools like Figma or InVision are also used for prototyping UI/UX.",
    },
    {
      question:
        "04. Can I update my extension after launch?",
      answer:
        "Yes, updates can be released anytime to fix bugs, add new features, or improve performance, and users automatically receive the latest version. This helps maintain functionality and user satisfaction.",
    },
    {
      question: "05. How can I get started?",
      answer:
        "You can start by consulting with an experienced team like Analogue IT Solutions, who will guide you from ideation to design, development, testing, and successful launch of your Chrome extension.",
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
          <h1 className="  text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.7rem] md:w-[75%] xl:text-[2rem] 3xl:text-[2.5rem] xl:w-[75%] 2xl:w-[65%] font-semibold text-black leading-snug">
            Best{" "}
            <span className="text-blue-500"> Chrome Browser Extension  </span>{" "}
            Development Company in Hyderabad, India
          </h1>
          <p className="text-gray-500 leading-relaxed text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base">
            Chrome extensions are the perfect solution for enhancing browser functionality, streamlining workflows, and improving user productivity. At Analogue IT Solutions, we specialize in creating feature-rich, secure, and scalable Chrome browser extensions that drive value for your business.
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
          <h5 className="subt text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.5rem] md:w-[75%] xl:text-[1.8rem] 3xl:text-[2.2rem] xl:w-[75%] 2xl:w-[65%] font-semibold text-black leading-snug">
            Why Choose Chrome Extension Development?          </h5>
          <p className="text-gray-500 leading-relaxed text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base">
            You can improve the Chrome browser to better suit your business needs. By making tasks easier and streamlining workflows, you can boost productivity. Plus, with Chrome&apos;s large user base, you can reach a wider audience and grow your business.
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
              <h1 className="text-white text-lg xss:text-md xs:text-lg sm:text-xl md:text-xl xl:text-2xl 3xl:text-[1.6rem] font-bold xss:leading-tight 2xl:leading-loose">
                Custom Chrome Extension Development for Your Business
              </h1>
              <p className="text-white text-xs xss:text-xs xs:text-xs sm:text-sm md:text-sm lg:text-[0.75rem] xl:text-sm 3xl:text-base xss:leading-5 xl:leading-7 mt-2 xss:mt-3 xs:mt-4 sm:mt-4 md:mt-5 lg:mt-3 xl:mt-4 2xl:mt-5">
                At Analogue IT Solutions, we specialize in Chrome browser extension development that enhances functionality, improves productivity, and delivers seamless user experiences. By leveraging modern web technologies and innovative design, we create extensions that are fast, reliable, and tailored to your business needs. From workflow automation tools to e-commerce enhancers and productivity boosters, our team focuses on building Chrome extensions that simplify tasks, engage users, and drive measurable business results.Expert in AI development, providing top solutions with cutting-edge technology.
              </p>
              <button className="bg-blue-700 text-white rounded p-2 xss:p-2 xs:p-2 sm:p-3 md:p-3 lg:p-2 xl:p-2 2xl:p-3 mt-2 lg:mt-4 xss:mt-3 xs:mt-4 sm:mt-4 md:mt-4 lg:mt-2 xl:mt-3 2xl:mt-4 text-xs xss:text-xs xs:text-sm sm:text-sm md:text-sm lg:text-[0.65rem] xl:text-xs 2xl:text-sm">
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
              Chrome Browser Extension
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 xss:gap-8 xss:px-8 3xl:gap-20 2xl:gap-14 2xl:px-14 3xl:px-30 px-10">
            <div className=" text-[#7B7E86] p-5 border-l border-r border-gray-200 shadow-[0_4px_2px_rgba(0,0,0,0.3)] bg-white rounded-lg">
              <h3 className="font-weight-400 text-[#0E59F2] xss:mb-3 xl:text-2xl xl:mb-4 xss:mb-1text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] xl:text-[1.5rem] 3xl:text-[1.6rem] font-semibold">
                UI/UX Optimization
              </h3>
              <p className="xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base  xss:leading-4 sm:leading-relaxed 3xl:leading-7">
                Seamless, user-friendly designs for superior user experiences, crafted to maximize engagement and usability.Our design approach focuses on clarity, accessibility, and effortless navigation.              </p>
            </div>
            <div className=" text-[#7B7E86] p-5 border-l border-r border-gray-200 shadow-[0_4px_2px_rgba(0,0,0,0.3)] bg-white p-6 rounded-lg">
              <h3 className="font-weight-400 text-[#0E59F2] xss:mb-3 xl:text-2xl xl:mb-4 xss:mb-1text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] xl:text-[1.5rem] 3xl:text-[1.6rem] font-semibold">
                Extension Maintenance And Updates
              </h3>
              <p className="xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base  xss:leading-4 sm:leading-relaxed 3xl:leading-7">
                Ongoing support to ensure compatibility and performance.Regular updates for security and new features.Proactive monitoring and troubleshooting included.              </p>
            </div>
            <div className=" text-[#7B7E86] p-5 border-l border-r border-gray-200 shadow-[0_4px_2px_rgba(0,0,0,0.3)] bg-white p-6 rounded-lg">
              <h3 className="font-weight-400 text-[#0E59F2] xss:mb-3 xl:text-2xl xl:mb-4 xss:mb-1text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] xl:text-[1.5rem] 3xl:text-[1.6rem] font-semibold">
                Cross-Browser Integration
              </h3>
              <p className="xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base  xss:leading-4 sm:leading-relaxed 3xl:leading-7">
                Extensions compatible with other browsers as needed, ensuring smooth performance across platforms.We make sure your extensions run reliably on Chrome, Firefox, Edge, and beyond.              </p>
            </div>
            <div className=" text-[#7B7E86] p-5 border-l border-r border-gray-200 shadow-[0_4px_2px_rgba(0,0,0,0.3)] bg-white p-6 rounded-lg">
              <h3 className="font-weight-400 text-[#0E59F2] xss:mb-3 xl:text-2xl xl:mb-4 xss:mb-1text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] xl:text-[1.5rem] 3xl:text-[1.6rem] font-semibold">
                Custom Chrome Extension Development Project Research              </h3>
              <p className="xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base  xss:leading-4 sm:leading-relaxed 3xl:leading-7">
                Tailored solutions to fit your business requirements, delivering functionality that matches your goals. From concept to deployment, we enhance productivity.              </p>
            </div>
          </div>
        </div>

        {/* Calendar */}
        <div>
          <CalendarPage />
        </div>

        {/*  company in India */}
        <div className="w-full h-auto py-5 bg-white xl:p-5 xl:px-20 xss:px-5 pt-5 xs:p-5 sm:px-8 ">
          <p className="subt text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.5rem] md:w-[75%] xl:text-[1.8rem] 3xl:text-[2.2rem] xl:w-[75%] 2xl:w-[65%] font-semibold text-black leading-snug">
            Best Chrome Browser Extension Development Company          </p>
          <div className="xl:text-sm text-[#7B7E86] xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base  xss:leading-4 sm:leading-relaxed 3xl:leading-8">
            <p className="pb-2">
              As a leading Chrome browser extension development company, we specialize in creating tailored solutions that enhance your business operations. Our extensions are designed to simplify tasks, boost productivity, and streamline workflows. We focus on meeting your unique business needs with innovative and user-friendly tools. With our expertise, you can take advantage of Chrome’s global reach to grow your audience and business.
            </p>
          </div>
        </div>

        {/* why choose ait */}
        <div className="w-full py-5 h-auto bg-white xl:p-0 xl:px-20 xss:px-5 pt-5 xs:p-5 sm:px-8">
          <h5 className="  text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.5rem] md:w-[75%] xl:text-[1.8rem] 3xl:text-[2.2rem] xl:w-[75%] 2xl:w-[65%] font-semibold text-black leading-snug">
            Why Choose Analogue IT Solutions?
          </h5>
          <div className="text-[#7B7E86]">
            <div className="pb-2 text-lg xss:text-sm sm:text-base md:text-lg 2xl:text-[1.2rem] font-medium text-[#363638D9]">
              Proven Chrome Extension Expertise -{" "}
              <span className="xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base xss:leading-4 sm:leading-relaxed 3xl:leading-8">
                Your technical advantage is our commitment. We deliver specialized solutions at every level.
              </span>
            </div>

            <div className="pb-2 text-lg xss:text-sm sm:text-base md:text-lg 2xl:text-[1.2rem] font-medium text-[#363638D9]">
              Custom-Tailored Solutions  -{" "}
              <span className="xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base xss:leading-4 sm:leading-relaxed 3xl:leading-8">
                Your unique needs drive our approach. We create perfectly fitting solutions at every turn.
              </span>
            </div>

            <div className="pb-2 text-lg xss:text-sm sm:text-base md:text-lg 2xl:text-[1.2rem] font-medium text-[#363638D9]">
              Transparent Pricing -{" "}
              <span className="xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base xss:leading-4 sm:leading-relaxed 3xl:leading-8">
                Your budget clarity matters most. We maintain honest pricing at every quote.
              </span>
            </div>

            <div className="pb-2 text-lg xss:text-sm sm:text-base md:text-lg 2xl:text-[1.2rem] font-medium text-[#363638D9]">
              Agile Development Process -{" "}
              <span className="xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base xss:leading-4 sm:leading-relaxed 3xl:leading-8">
                Your collaboration shapes our workflow. We ensure flexible adaptation at every phase.
              </span>
            </div>

            <div className="pb-2 text-lg xss:text-sm sm:text-base md:text-lg 2xl:text-[1.2rem] font-medium text-[#363638D9]">
              Quality & Security Assurance  -{" "}
              <span className="xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base xss:leading-4 sm:leading-relaxed 3xl:leading-8">
                Your safety is fundamental. We implement rigorous standards at every step.
              </span>
            </div>
          </div>
        </div>

        {/* Extended Locations */}
        <div className=" w-full h-auto bg-[url('/service-icons/app-dev-bg.jpg')] bg-cover bg-center xss:p-7 xl:p-15">
          <div className="text-white text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] xl:text-[1.5rem] 3xl:text-[1.6rem] font-semibold xss:pb-5 lg:pb-8 2xl:pb-15 text-center">
            Our Services Extend to These Top Locations!
          </div>
          <div className="grid lg:grid-cols-2 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base xss:grid-cols-1 xss:gap-4 xl:gap-5 sm:px-8 md:px-28 lg:px-12 2xl:px-40 3xl:px-50">
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
                Mobile App Development Company in Hyderabad(Ind)
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
                Mobile App Development Company in UAE
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
                Mobile App Development Company in USA
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
                Mobile App Development Company in UK
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
                Mobile App Development Company in Europe
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
                Mobile App Development Company in Australia
              </p>
            </div>
          </div>
        </div>



        {/* ready to create text */}
        <div className="w-full h-auto bg-white xl:p-5 xl:px-20 xss:px-5 sm:px-8 ">
          <h3 className="subt text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.5rem] md:w-[75%] xl:text-[1.8rem] 3xl:text-[2.2rem] xl:w-[75%] 2xl:w-[65%] font-semibold text-black leading-snug">
            Ready to Create Your Chrome Extension?
          </h3>
          <div className="text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] xl:leading-6 xss:leading-4 sm:leading-relaxed 3xl:leading-8">
            <p className="pb-1">
              Unlock the potential of your ideas with Analogue IT Solutions, the trusted Chrome Browser Extension Development Company. Whether you're looking to enhance productivity, streamline operations, or target a broader audience, our expert Chrome extension developers are here to help.
            </p>
            <p className="pb-1">
              We specialize in delivering innovative and secure Chrome extension development services, tailored to your unique business needs. From small businesses to large enterprises, we&apos;ve helped countless clients create extensions that simplify workflows and elevate user experiences.
            </p>
            <p className="pb-1">
              Looking for a custom Chrome browser extension? Or perhaps you need an experienced browser extension developer to bring your vision to life? At Analogue IT Solutions, we combine technical expertise with a client-centric approach to deliver results that exceed expectations.            </p>
            <p className="pb-1">
              Don&apos;t just create a Chrome extension create one that stands out. Work with a proven Chrome browser extension development company that prioritizes your goals and ensures seamless integration with the Chrome Web Store.            </p>
            <p className="pb-1">
              Take the next step today! Contact us to explore how our Chrome Extension Development Services can transform your business.            </p>
          </div>
        </div>

        {/* faqs section */}
        <div className="w-[86%] mx-auto pb-3 xss:mt-5">
          <div>
            <FrequentQuestions Question={ChromefaqArray} />
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
