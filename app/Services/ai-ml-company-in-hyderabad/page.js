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

export default function AiMlAppDevelopment() {
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

  const aimlfaqArray = [
    {
      question:
        "01. What is the difference between AI and ML?",
      answer:
        "Artificial Intelligence (AI) is the broader concept of creating machines that can simulate human intelligence, while Machine Learning (ML) is a subset of AI that enables systems to learn and improve automatically from data without explicit programming.",
    },
    {
      question:
        "02. How can AI & ML benefit my business?",
      answer:
        "AI & ML can automate repetitive tasks, provide predictive insights, personalize customer experiences, detect fraud, improve decision-making, and enhance overall efficiency—helping businesses save time and resources while boosting growth.",
    },
    {
      question:
        "03. What industries use AI & ML?",
      answer:
        "AI & ML are used across healthcare, finance, e-commerce, manufacturing, logistics, education, real estate, marketing, and many other industries to solve complex problems and deliver smarter solutions. They help businesses automate processes, gain predictive insights, and make data-driven decisions that improve efficiency and competitiveness.",
    },
    {
      question:
        "04. Do I need a large amount of data for AI & ML solutions?",
      answer:
        "While larger datasets improve accuracy, AI & ML models can also work with smaller datasets by using data preprocessing, transfer learning, or pre-trained models. Even limited data can be leveraged effectively to generate meaningful insights and optimize business processes.",
    },
    {
      question: "05. Can AI & ML help in customer engagement?",
      answer:
        "Yes. AI-powered chatbots, recommendation engines, and personalized marketing campaigns can enhance customer interactions, improve satisfaction, and increase retention rates. By analyzing user behavior and preferences, AI & ML also enable businesses to deliver highly relevant experiences that drive loyalty and conversions.",
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
            <span className="text-blue-500">
              {" "}
              Machine Learning </span>{" "} and <span className="text-blue-500">
              {" "}Artificial Intelligence{" "}
            </span>{" "}
            in Hyderabad, India
          </h1>
          <p className="text-gray-500 leading-relaxed text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base">
            We offer the best artificial intelligence development services and machine learning development services in Hyderabad, India. Our expert team creates innovative, data-driven solutions to help businesses automate, analyze, and grow smarter. Transform your ideas into intelligent applications with us. At Analogue IT Solutions, we are committed to delivering cutting-edge AI and ML solutions that drive measurable business outcomes. With years of experience and a passion for innovation, our team helps organizations across industries harness the power of data and intelligent automation. We focus on building reliable, scalable, and future-ready applications that empower businesses to stay ahead in a rapidly evolving digital landscape.

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
          <h5 className="  text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.5rem] md:w-[75%] xl:text-[1.8rem] 3xl:text-[2.2rem] xl:w-[75%] 2xl:w-[65%] font-semibold text-black leading-snug text-black">
            Empowering Business Growth with
            <span className="text-blue-500">{" "}Artificial Intelligence</span>{" "}
            Software Development
          </h5>
          <p className="text-gray-500 leading-relaxed text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base">
            As a leading provider of artificial intelligence software development, we leverage cutting-edge technologies to drive business success. Our expert team designs and develops custom AI solutions tailored to meet your specific needs. With a commitment to excellence and innovation, we create intelligent applications that enhance efficiency and deliver measurable results for your business.We combine creativity, technology, and strategy to develop AI-powered solutions that simplify operations, optimize performance, and unlock new growth opportunities. Our goal is to empower businesses of all sizes with intelligent, scalable applications that not only solve problems but also inspire innovation and long-term success.          </p>
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
                Advanced AI & ML Solutions for Your Business              </h1>
              <p className="text-white text-xs xss:text-xs xs:text-xs sm:text-sm md:text-sm lg:text-[0.75rem] xl:text-sm 3xl:text-base xss:leading-5 xl:leading-6 2xl:leading-6 mt-2 xss:mt-3 xs:mt-4 sm:mt-4 md:mt-5 lg:mt-3 xl:mt-3 3xl:mt-2">
                At Analogue IT Solutions, we specialize in delivering cutting-edge Artificial Intelligence and Machine Learning development services that transform data into actionable insights. By leveraging the power of AI & ML, we build intelligent applications that are scalable, efficient, and tailored to your business goals. From predictive analytics and recommendation systems to natural language processing and automation solutions, our team focuses on creating smart, data-driven products that enhance decision-making, optimize operations, and drive measurable business growth.              </p>
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





        {/* our services */}
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
              AI&ML SERVICES            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 xss:gap-8 xss:px-8 3xl:gap-10 2xl:gap-14 2xl:px-14 3xl:px-10 px-10">
            <div className=" text-[#7B7E86] p-5 border-l border-r border-gray-200 shadow-[0_4px_2px_rgba(0,0,0,0.3)] bg-white rounded-lg">
              <h3 className="font-weight-400 text-[#0E59F2] xss:mb-3 xl:text-2xl xl:mb-4 xss:mb-1text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] xl:text-[1.5rem] 3xl:text-[1.6rem] font-semibold">
                Time Series Analysis Services
              </h3>
              <p className="xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base  xss:leading-4 sm:leading-relaxed 3xl:leading-7">
                Offering advanced predictive analytics and forecasting solutions to help businesses make data-driven decisions with accuracy and reliability.              </p>
            </div>
            <div className=" text-[#7B7E86] p-5 border-l border-r border-gray-200 shadow-[0_4px_2px_rgba(0,0,0,0.3)] bg-white p-6 rounded-lg">
              <h3 className="font-weight-400 text-[#0E59F2] xss:mb-3 xl:text-2xl xl:mb-4 xss:mb-1text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] xl:text-[1.5rem] 3xl:text-[1.6rem] font-semibold">
                Autonomous Systems Services
              </h3>
              <p className="xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base  xss:leading-4 sm:leading-relaxed 3xl:leading-7">
                Developing innovative AI-powered autonomous systems that optimize operations, improve efficiency, and reduce human intervention.              </p>
            </div>
            <div className=" text-[#7B7E86] p-5 border-l border-r border-gray-200 shadow-[0_4px_2px_rgba(0,0,0,0.3)] bg-white p-6 rounded-lg">
              <h3 className="font-weight-400 text-[#0E59F2] xss:mb-3 xl:text-2xl xl:mb-4 xss:mb-1text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] xl:text-[1.5rem] 3xl:text-[1.6rem] font-semibold">
                Clustering and Unsupervised Learning
              </h3>
              <p className="xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base  xss:leading-4 sm:leading-relaxed 3xl:leading-7">
                Building robust AI models for pattern recognition, data segmentation, and insights extraction to help businesses leverage unstructured data effectively.              </p>
            </div>
            <div className=" text-[#7B7E86] p-5 border-l border-r border-gray-200 shadow-[0_4px_2px_rgba(0,0,0,0.3)] bg-white p-6 rounded-lg">
              <h3 className="font-weight-400 text-[#0E59F2] xss:mb-3 xl:text-2xl xl:mb-4 xss:mb-1text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] xl:text-[1.5rem] 3xl:text-[1.6rem] font-semibold">
                Healthcare and Bioinformatics Services
              </h3>
              <p className="xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base  xss:leading-4 sm:leading-relaxed 3xl:leading-7">
                Delivering advanced AI-driven healthcare and bioinformatics solutions to improve diagnostics, research, and patient outcomes with precision.              </p>
            </div>
            <div className=" text-[#7B7E86] p-5 border-l border-r border-gray-200 shadow-[0_4px_2px_rgba(0,0,0,0.3)] bg-white p-6 rounded-lg">
              <h3 className="font-weight-400 text-[#0E59F2] xss:mb-3 xl:text-2xl xl:mb-4 xss:mb-1text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] xl:text-[1.5rem] 3xl:text-[1.6rem] font-semibold">
                Social Media Analytics Services
              </h3>
              <p className="xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base  xss:leading-4 sm:leading-relaxed 3xl:leading-7">
                Delivering powerful analytics solutions to track trends, measure engagement, and unlock actionable insights from social platforms, helping brands grow smarter.
              </p>
            </div>
          </div>
        </div>


        {/* Calendar */}
        <div>
          <CalendarPage />
        </div>

        {/*  company in India */}
        <div className="w-full h-auto bg-white xl:p-5 xl:px-20 xss:px-5 pt-5 xs:p-5 sm:px-8 ">
          <div className="flex items-center xss:pt-3 xl:pt-8 xss:mb-1">
            <span className="w-1 h-1 bg-black rounded-full mr-2"></span>
            <span className="font-medium text-xs xss:text-subsmall sm:text-xs xl:text-sm text-black ">
              WORK WITH US
            </span>
          </div>
          <h3 className=" text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.7rem] md:w-[75%] xl:text-[2rem] 3xl:text-[2.5rem] xl:w-[75%] 2xl:w-[65%] font-semibold text-black leading-snug">
            AI & ML Software Development Company          </h3>
          <div className="xl:text-sm text-[#7B7E86] xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base leading-relaxed 3xl:leading-8">
            <p className="pb-2">
              At Analogue IT Solutions, we create outstanding software solutions using advanced Artificial Intelligence (AI) and Machine Learning (ML) technologies that transform businesses and drive innovation. As a trusted AI & ML software development company, we specialize in delivering intelligent, data-driven applications that empower organizations to stay ahead in the digital era.            </p>
            <p className="pb-2">
              Our expertise covers a wide range of AI and ML services, including predictive analytics, recommendation systems, natural language processing (NLP), computer vision, chatbots, autonomous systems, and process automation. By leveraging these cutting-edge technologies, we help businesses optimize decision-making, personalize customer experiences, automate repetitive tasks, and improve overall efficiency.            </p>
            <p className="pb-2">
              We focus on developing scalable, secure, and high-performance AI solutions tailored to your unique business goals. Whether you&apos;re a startup exploring AI-powered innovation or an enterprise looking to integrate machine learning into existing systems, our team ensures seamless implementation and measurable results.            </p>
            <p className="pb-2">
              With a commitment to precision, innovation, and long-term growth, our AI and ML solutions go beyond basic functionality. We design software that adapts to real-world challenges, processes complex data, and delivers actionable insights that enhance competitiveness.  </p>
            <p className="pb-2">
              By partnering with us, you gain more than just software—you gain a reliable technology partner dedicated to building intelligent solutions that reflect your brand, delight your customers, and accelerate your business growth.               </p>
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

        {/* Trusted partner */}
        <div className="w-full h-auto bg-white xl:p-5 xl:px-20 xss:px-5 pt-5 xs:p-5 sm:px-8 ">
          <div className="flex items-center xss:pt-3 xl:pt-8 xss:mb-1">
            <span className="w-1 h-1 bg-black rounded-full mr-2"></span>
            <span className="font-medium text-xs xss:text-subsmall sm:text-xs xl:text-sm text-black ">
              WORK WITH US
            </span>
          </div>
          <h3 className=" text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.7rem] md:w-[75%] xl:text-[2rem] 3xl:text-[2.5rem] xl:w-[75%] 2xl:w-[65%] font-semibold text-black leading-snug">
            Your Trusted Partner for AI Development Services             </h3>
          <div className="xl:text-sm text-[#7B7E86] xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base leading-relaxed 3xl:leading-8">
            <p className="pb-2">
              At Analogue IT Solutions, we are a trusted provider of Artificial Intelligence (AI) development services, dedicated to helping businesses turn innovative ideas into intelligent, future-ready solutions. As a leading AI development company, we specialize in creating smart applications that enhance efficiency, improve decision-making, and deliver measurable results.
            </p>
            <p className="pb-2">
              Our AI development expertise spans across predictive analytics, natural language processing (NLP), computer vision, machine learning models, recommendation systems, chatbots, and intelligent automation. With these capabilities, we enable businesses to process large datasets, gain actionable insights, personalize customer experiences, and automate time-consuming processes.                    </p>
            <p className="pb-2">
              We design scalable, secure, and industry-specific AI solutions for businesses across healthcare, finance, e-commerce, education, real estate, and more. By integrating AI seamlessly into your existing systems, we ensure minimal disruption while maximizing performance and long-term value.               </p>
            <p className="pb-2">
              At Analogue IT Solutions, we focus on innovation, precision, and collaboration. Our team works closely with clients to understand their vision and deliver solutions that reflect their brand and meet evolving business needs.              </p>
            <p className="pWe design scalable, secure, and industry-specific AI solutions for businesses across healthcare, finance, e-commerce, education, real estate, and more. By integrating AI seamlessly into your existing systems, we ensure minimal disruption while maximizing performance and long-term value.b-2">
              By partnering with us, you gain more than just a development service—you gain a reliable technology partner committed to helping your business stay ahead in today’s competitive, AI-driven world.                 </p>
          </div>
        </div>


        {/* start work with us  */}
        <div className="w-full h-auto bg-white xl:p-0 xl:px-20 xss:px-5 pt-5 xs:p-5 sm:px-8">
          <h5 className="  text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.5rem] md:w-[75%] xl:text-[1.8rem] 3xl:text-[2.2rem] xl:w-[75%] 2xl:w-[65%] font-semibold text-black leading-snug">
            Why Work with Us?          </h5>
          <p className="pb-2">
            We provide highly skilled developers with a proven track record in delivering top-quality AI and software development services.          </p>

          <div className="text-[#7B7E86]">
            <div className="pb-2 text-lg xss:text-sm sm:text-base md:text-lg 2xl:text-[1.2rem] font-medium text-[#363638D9]">
              Innovation at Our Core -{" "}
              <span className="xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base xss:leading-4 sm:leading-relaxed 3xl:leading-8">
                We believe that innovation is key to success. Without a strategic, innovative approach, any product lacks value. We continuously implement fresh, creative strategies that help you stay ahead in the market, while reducing time-to-market and maintaining high quality.              </span>
            </div>

            <div className="pb-2 text-lg xss:text-sm sm:text-base md:text-lg 2xl:text-[1.2rem] font-medium text-[#363638D9]">
              Cost-Efficient Services -{" "}
              <span className="xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base xss:leading-4 sm:leading-relaxed 3xl:leading-8">
                We offer exceptional quality at competitive prices. Our experienced developers are committed to providing the best AI and software services without compromising on value, ensuring you receive the best results at a reasonable cost.              </span>
            </div>

            <div className="pb-2 text-lg xss:text-sm sm:text-base md:text-lg 2xl:text-[1.2rem] font-medium text-[#363638D9]">
              Enhanced Customer Experience -{" "}
              <span className="xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base xss:leading-4 sm:leading-relaxed 3xl:leading-8">
                Our skilled team of professionals excels in building highly interactive applications that create memorable user experiences, helping you grow your brand and attract your target audience.              </span>
            </div>

            <div className="pb-2 text-lg xss:text-sm sm:text-base md:text-lg 2xl:text-[1.2rem] font-medium text-[#363638D9]">
              Top-Notch Services -{" "}
              <span className="xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base xss:leading-4 sm:leading-relaxed 3xl:leading-8">
                Our products thrive in the market because of the dedication and expertise of our team. Our clients consistently express satisfaction with our services, thanks to our deep industry knowledge and extensive experience.              </span>
            </div>
          </div>
        </div>

        {/* discuss ideas */}
        <div className="w-full h-auto bg-white xl:p-2  xl:px-20 xss:px-5 pt-5 xs:p-5 sm:px-8 ">
          <h3 className="  text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.5rem] md:w-[75%] xl:text-[1.8rem] 3xl:text-[2.2rem] xl:w-[75%] 2xl:w-[65%] font-semibold text-black leading-snug">
            Let's Discuss About Something            </h3>
          <div className="xl:text-sm text-[#7B7E86] pb-2 xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base leading-relaxed 3xl:leading-8">
            <p className="pb-2">
              At our Analogue IT Solutions, we are committed to providing exceptional customer service and support. If you are experiencing technical difficulties or need assistance with one of our services                </p>
          </div>
        </div>

        {/* faqs section */}
        <div className="w-[86%] mx-auto pb-3 xss:mt-5">
          <div>
            <FrequentQuestions Question={aimlfaqArray} />
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
