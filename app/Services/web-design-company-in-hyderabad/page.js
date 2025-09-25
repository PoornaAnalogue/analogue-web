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
import TestimonialsPage from "@/app/home-page-main/testimonal-page";

export default function WebAppDevelopment() {
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

  const webfaqArray = [
    {
      question:
        "01. What services does your web design company in Hyderabad offer?",
      answer:
        "Our web design company in Hyderabad offers a comprehensive range of services including custom website design, website redesign, responsive web development, e-commerce website development, website maintenance, and SEO optimization.",
    },
    {
      question:
        "02. How long does it typically take for a website to be developed by your team?",
      answer:
        "The timeline for developing a website depends on the complexity and scope of the project. On average, our website designers in Hyderabad deliver high-quality websites within 4-8 weeks.",
    },
    {
      question:
        "03. How much does it cost to develop a website with your website developers in Hyderabad?",
      answer:
        "The cost of developing a website varies depending on the project requirements. We offer competitive pricing with customizable packages to suit your budget and specific needs.",
    },
    {
      question:
        "04. Can your web design company assist with website hosting and SEO services?",
      answer:
        "Yes, our website designers in Hyderabad also provide website hosting services and implement SEO strategies to enhance your site&apos;s visibility and rankings on search engines, ensuring long-term success.",
    },
    {
      question: "05. How experienced are your website developers in Hyderabad?",
      answer:
        "Our team of website developers in Hyderabad has over 7 years of experience in building innovative and high-performing websites. We stay updated with the latest trends and technologies to deliver cutting-edge solutions for your business.",
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
          <h1 className=" text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] xl:text-[1.5rem] 3xl:text-[2.8rem] xl:w-[55%] 2xl:w-[85%] font-semibold text-black leading-snug">
            Best <span className="text-blue-500"> Web Design </span>{" "}
            Company in Hyderabad, India
          </h1>
          <p className="text-gray-500 leading-relaxed text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base">
            Are you looking for the best Web Design Company in Hyderabad? Look no further than Analogue IT Solutions! Our team specializes in creating innovative, user-friendly, and visually stunning websites tailored to your business needs. We combine cutting-edge technology with industry insights to design responsive, high-performance websites that engage your audience and enhance your online presence. Trust us to bring your web design vision to life and help your business grow online!
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
          <div>
          <div className="flex items-center xss:pt-3 xl:pt-8 xss:mb-1">
            <span className="w-1 h-1 bg-black rounded-full mr-2"></span>
            <span className="font-medium text-xs xss:text-subsmall sm:text-xs xl:text-sm text-black ">
              WELCOME TO OUR COMPANY
            </span>
          </div>
          <h5 className=" subt text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.5rem] md:w-[75%] xl:text-[1.8rem] 3xl:text-[2.2rem] xl:w-[75%] 2xl:w-[65%] font-semibold text-black leading-snug">
            Accelerating Business Growth with Top-Notch Web Development
          </h5>
          <p className="text-gray-500 leading-relaxed text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base">
            As a leading web design company in Hyderabad, we leverage the latest technologies to drive your business growth. Our talented team of web designers specializes in crafting custom websites that are not only visually appealing but also highly functional.
          </p>
          <p className="text-gray-500 leading-relaxed text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base">
            Whether you're looking for a simple static website, a feature-rich dynamic site, or a fully functional e-commerce platform, we've got you covered. Our expert team specializes in
          </p>
          <div className="text-[#7B7E86]">
            <p className="pb-2 text-lg xss:text-sm  sm:text-base md:text-lg 2xl:text-[1.2rem] font-medium">
              Static Websites: -{" "}
              <span className="xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base  xss:leading-4 sm:leading-relaxed 3xl:leading-8">
                Clean, simple, and fast-loading websites that effectively communicate your brand and message.
              </span>
              <p className="pb-2 text-lg xss:text-sm  sm:text-base md:text-lg 2xl:text-[1.2rem] font-medium">
                Dynamic Websites: -{" "}
                <span className="xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base  xss:leading-4 sm:leading-relaxed 3xl:leading-8">
                  Interactive websites with advanced functionalities that are easily updatable and provide a personalized experience for users.
                </span>
              </p>
              <p className="pb-2 text-lg xss:text-sm  sm:text-base md:text-lg 2xl:text-[1.2rem] font-medium">
                E-Commerce Websites: -{" "}
                <span className="xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base  xss:leading-4 sm:leading-relaxed 3xl:leading-8">
                  Robust, secure, and user-friendly online stores that drive sales and provide a seamless shopping experience.
                </span>
              </p>
              <p className="pb-2 text-lg xss:text-sm  sm:text-base md:text-lg 2xl:text-[1.2rem] font-medium">
                Other Web Development Services: -{" "}
                <span className="xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base  xss:leading-4 sm:leading-relaxed 3xl:leading-8">
                  From custom web applications to website redesigns, we handle all aspects of web development to help your business succeed online.
                </span>
              </p>
            </p>
          </div>
          <div className="xss:py-4 xss:pt-0 2xl:mb-5">
            <button className="bg-blue-600 xss:text-xs lg:text-sm text-white xss:px-2 xss:py-2 xl:px-5 xl:py-3 rounded-3xl hover:bg-blue-700 transition cursor-pointer ">
              <Link href="/aboutus">Discover More</Link>
            </button>
          </div>
        </div>
        </div>

        {/* Calendar */}
        <div>
          <CalendarPage />
        </div>

        {/* Work with us */}
        <div className="px-4 xss:px-6 xs:px-8 sm:px-10 md:px-12 lg:px-16 xl:px-20 flex flex-col py-5 space-y-4 ">
          <div className="flex items-center mb-1">
            <span className="w-1 h-1 bg-black rounded-full mr-2"></span>
            <span className="font-medium text-xs xss:text-subsmall sm:text-xs xl:text-sm text-black">
              WORK WITH US
            </span>
          </div>
          <h1 className=" text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] xl:text-[1.5rem] 3xl:text-[2.8rem] xl:w-[55%] 2xl:w-[85%] font-semibold text-black leading-snug">
            Crafting Exceptional <span className="text-blue-500"> Websites </span>{" "} for Your Business
          </h1>
          <p className="text-gray-500 leading-relaxed text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base">
            At Analogue IT Solutions, our expert website developers in Hyderabad craft high-quality, responsive websites tailored to your business needs. From static and dynamic sites to robust e-commerce platforms, we deliver innovative solutions that enhance user experience. We focus on performance, design, and functionality to help your business thrive online. Trust us to bring your website vision to life with precision and creativity.        </p>

          {/* Free Quote button + Call us */}
          <div className="lg:flex gap-4">
            <button
              suppressHydrationWarning
              onClick={() => setIsOpen(true)}
              className="bg-blue-600 xss:text-xs lg:text-sm text-white xss:px-2 xss:py-2 xl:px-5 xl:py-3 rounded-3xl hover:bg-blue-700 transition cursor-pointer"
            >
              Get a Free Demo
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
        </div>
        {/* Start Work with us */}
        <div className="w-full h-auto bg-white px-3 py-5 xs:px-4 xs:py-6 
                        sm:px-5 sm:py-7 md:px-6 md:py-8 lg:px-8 lg:py-10 xl:px-10 xl:py-8 xl:px-20"
        >
          <p className="text-[#071637] font-semibold text-body mb-3 font-600 underline decoration-[#0D6EFD] decoration-2 underline-offset-6
                            xs:text-body xs:decoration-2 xs:underline-offset-7 xs:mb-4
                            text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] xl:text-[1.7rem] 3xl:text-[2.2rem] font-semibold
                            sm:decoration-3 md:decoration-3  xl:decoration-4 
                            sm:underline-offset-10 md:underline-offset-15 xl:underline-offset-[20px] 
                            sm:mb-2 md:mb-4 xl:mb-5"
          >
            Start Work With Us
          </p>
          <div className=" p-1 xs:p-2 sm:p-3 md:p-4 lg:p-5 xl:px-4">
            <p className="text-[#0D6EFD] text-lg xss:text-sm  sm:text-base md:text-lg 2xl:text-[1.5rem] font-medium mb-2 xs:mb-3  ">
              Website Designers in Hyderabad - Bringing Your Vision to Life
            </p>
            <p className="text-[#7B7E86] text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base xl:leading-6 xss:leading-5 sm:leading-relaxed 3xl:leading-8 mb-2">
              At Analogue IT Solutions, we take pride in being a leading team of website designers in Hyderabad, dedicated to bringing your vision to life. Our expertise, combined with a passion for innovation, ensures that every website we design is not just visually appealing but also highly functional and tailored to your unique business needs.
            </p>
            <p className="text-[#7B7E86] text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base xl:leading-6 xss:leading-5 sm:leading-relaxed 3xl:leading-8 mb-2">
              From concept to execution, we work closely with you to create high-performance websites that leave a lasting impact. Whether it&apos;s a sleek corporate site or a dynamic e-commerce platform, we focus on delivering excellence that drives your business forward.
            </p>
          </div>
        </div>

        <div>
          <TestimonialsPage />
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

        {/* client carousal for successful projects */}
        <div>
          <CarousalServicePage />
        </div>

                {/* web dev company in India */}
        <div className="w-full h-auto bg-white xl:p-5 xl:px-20 xss:px-5 pt-5 xs:p-5 sm:px-8 ">
          <h3 className="subt text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.5rem] md:w-[75%] xl:text-[1.8rem] 3xl:text-[2.2rem] xl:w-[75%] 2xl:w-[65%] font-semibold text-black leading-snug">
            Web Development Company in Hyderabad
          </h3>
          <div className="xl:text-sm text-[#7B7E86] xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base leading-relaxed 3xl:leading-8">
            <p className="pb-2">
              As a leading web development company in India, Analogue IT Solutions specializes in delivering exceptional websites and web applications tailored to your business needs. We focus on building high-performing, visually appealing, and user-friendly websites that ensure an impactful online presence. Recognized as one of the top web design companies in Hyderabad, we turn your ideas into digital solutions that exceed expectations.
            </p>
            <p className="pb-2">
              Our expert web developers and designers in Hyderabad are skilled in various platforms, including HTML, CSS, JavaScript, WordPress, and E-Commerce platforms. In addition to web development, Analogue IT Solutions offers comprehensive digital marketing strategies and business development services. Partner with us to create a dynamic web presence that drives growth and success for your business.
            </p>
            <p className="pb-2">
              Our web development services in Hyderabad are designed to transform your vision into reality, delivering seamless and functional websites for all industries.
            </p>
          </div>
        </div>

        {/* web app dev company in India */}
        <div className="w-full h-auto bg-white xl:p-5 xl:px-20 xss:px-5 pt-5 xs:p-5 sm:px-8 ">
          <h3 className="subt text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.5rem] md:w-[75%] xl:text-[1.8rem] 3xl:text-[2.2rem] xl:w-[75%] 2xl:w-[65%] font-semibold text-black leading-snug">
            Analogue IT Solutions - Best Web Design Services in Hyderabad
          </h3>
          <div className="xl:text-sm text-[#7B7E86] xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base leading-relaxed 3xl:leading-8">
            <p className="pb-2">
              Analogue IT Solutions has earned its reputation as the best web development company in Hyderabad by maintaining a client-first approach. Our dedicated teams collaborate closely with you, employing the latest tools and technologies to design high-quality websites and web applications.
            </p>
            <p className="pb-2">
              We are committed to creating websites that are engaging, responsive, intuitive, and aligned with your business goals. As a premier web design company in Hyderabad, India, we combine aesthetic design elements with robust functionality to represent your brand effectively.
            </p>
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

        {/* why analogue it solutions */}
        <div className="w-full h-auto bg-white xl:p-5 xl:px-20 xss:px-5 pt-5 xs:p-5 sm:px-8 ">
          <h3 className="subt text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.5rem] md:w-[75%] xl:text-[1.8rem] 3xl:text-[2.2rem] xl:w-[75%] 2xl:w-[65%] font-semibold text-black leading-snug">
            Why Choose Analogue IT Solutions?
          </h3>
          <div className="xl:text-sm text-[#7B7E86] xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-lg 2xl:pt-5 leading-relaxed 3xl:leading-8">
            <p className="pb-2">
              Non-Disclosure Agreement (NDA) for confidentiality</p>
            <p className="pb-2">
              Cost-effective web design and development services
            </p>
            <p className="pb-2">
              Expert developers experienced in modern web technologies
            </p>
            <p className="pb-2">
              Fast development timelines tailored to your needs
            </p>
            <p className="pb-2">
              Responsive and mobile-friendly website designs
            </p>
            <p className="pb-2">
              Scalable and secure solutions for heavy traffic</p>
            <p className="pb-2">
              Ongoing support and maintenance services
            </p>
            <p className="pb-2">
              Custom web solutions tailored to your business objectives
            </p>
          </div>
        </div>

        {/* choose best web dev company in India */}
        <div className="w-full h-auto bg-white xl:p-5 xl:px-20 xss:px-5 pt-5 xs:p-5 sm:px-8 ">
          <h3 className="subt text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.5rem] md:w-[75%] xl:text-[1.8rem] 3xl:text-[2.2rem] xl:w-[75%] 2xl:w-[65%] font-semibold text-black leading-snug">
            Choose the Best Web Developers in Hyderabad

          </h3>
          <div className="xl:text-sm text-[#7B7E86] xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base leading-relaxed 3xl:leading-8">
            <p className="pb-2">
              Looking for expert website designers and developers in Hyderabad? Connect with Analogue IT Solutions! Our experienced team leverages cutting-edge tools and technologies to deliver exceptional web development, web design, and E-Commerce solutions. Whether you need a responsive website, a high-performing online store, or a custom web application, we ensure top-tier results.
            </p>
            <p className="pb-2">
              While based in Hyderabad, our web development services cater to clients across the globe. Choose Analogue IT Solutions for reliable and innovative digital solutions that propel your business forward.
            </p>
          </div>
        </div>

                {/* faqs section */}
        <div className="w-[86%] mx-auto pb-3 xss:mt-5">
          <div>
            <FrequentQuestions Question={webfaqArray} />
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
