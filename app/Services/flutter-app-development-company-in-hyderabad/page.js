"use client";
import { FaChevronDown } from "react-icons/fa";
import Image from "next/image";
import { useState, useEffect } from "react";
import PopUpForm from "@/components/popup-form";
import Link from "next/link";
import Script from "next/script";
import CarousalServicePage from "@/components/carousal-servicepage";
import FrequentQuestions from "@/components/faqs-page";
import GetAQuoteForm from "@/components/get-quote-form";
import CalendarPage from "@/app/home-page-main/calendar/calendar-page";
import TechnologiesButtons from "@/components/service-related-components/tech-icons";
import ExtendedLocations from "@/components/service-related-components/extended-locations";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import TypewriterHeading from "@/components/service-related-components/typewrite-heading";


export default function FlutterAppDevelopment() {
  const [isOpen, setIsOpen] = useState(false);

  //   faqs

  const FlutterfaqArray = [
    {
      question: "01. What is Flutter App Development?",
      answer:
        "Flutter app development is the creation of cross-platform applications using Flutter, a versatile framework that enables developers to build visually appealing, efficient, and consistent apps for various platforms.",
    },
    {
      question:
        "02. Why should I choose Analogue for the Flutter App development in Hyderabad?",
      answer:
        "Analogue is a recommended Best Flutter application development company in Hyderabad. We provide comprehensive services, competitive pricing, on-time delivery, and a commitment to delivering high-quality, scalable, and efficient Flutter applications.",
    },
    {
      question:
        "03. What are the advantages of choosing Flutter for cross-platform app development?",
      answer:
        "Flutter offers advantages for cross-platform app development, including a single codebase, fast development cycles, native performance, expressive UI design, a hot reload feature, and a thriving developer community for support.",
    },
    {
      question:
        "04. What is the typical timeline for developing a Flutter app with Analogue IT Solutions?",
      answer:
        "The typical timeline for developing a Flutter app with Analogue IT Solutions can vary depending on the complexity and requirements of the app. However, our experienced team strives to deliver high-quality apps within a reasonable timeframe. Contact us for a detailed timeline based on your specific app development needs.",
    },
    {
      question: "05. Native vs Flutter App Development?",
      answer:
        "Native: Peak performance, platform-specific features, but requires double the effort. Choose Flutter for speed and cost, and Native for power and deep integration. Flutter: Build once, deploy everywhere. Faster development, lower cost, but might lack native feel.",
    },
  ];

    const heading = [
    { word: "Best", color: "text-black" },
    { word: "Flutter", color: "text-blue-500" },
    { word: "App", color: "text-blue-500" },
    { word: "Development", color: "text-blue-500" },
    { word: "Company", color: "text-black" },
    { word: "in", color: "text-black" },
    { word: "Hyderabad,", color: "text-black" },
    { word: "India", color: "text-black" },
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
          <div className="flex flex-col xl:flex-row items-center xl:items-start w-full gap-6">
            <div className="xl:w-1/2">
              <div className="flex items-center mb-1">
                <span className="w-1 h-1 bg-black rounded-full mr-2"></span>
                <span className="font-medium text-xs xss:text-subsmall sm:text-xs xl:text-sm text-black">
                  ABOUT OUR COMPANY
                </span>
              </div>
              <TypewriterHeading textArray={heading} />
              <p className="text">
                Are you searching for a top-notch Flutter app development company in
                Hyderabad? Look no further! At our company, we bring together a team
                of highly skilled and passionate Flutter developers who specialize
                in building high-performing, feature-rich, and visually appealing
                mobile applications. With a focus on innovation, scalability, and user-friendly design,
                we create apps that not only meet your business goals but also
                deliver a seamless experience to your customers. Whether you are a
                startup looking to launch your first app or an established
                enterprise aiming to enhance your digital presence, our expertise in
                Flutter ensures fast development, cost efficiency, and
                cross-platform compatibility.
              </p>

              {/* Free Quote button + Call us */}
              <div className="xs:flex  gap-4 xss:pt-2 xl:pt-3">
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
            </div>
            <div className="xl:w-1/2 flex justify-center items-center">
              <Image src="/service-icons/flutter-img.png" width={600} height={400} alt="flutter image"
                className="w-full h-auto max-w-[30rem] object-contain " />
            </div>
          </div>
        </div>

        {/* Welcome to our company */}
        <div className="px-4 xss:px-6 xs:px-8 sm:px-10 md:px-12 lg:px-16 xl:px-20 flex flex-col space-y-4 ">

          <div className="flex items-center xss:pt-3 xl:pt-8 xss:mb-1">
            <span className="w-1 h-1 bg-black rounded-full mr-2"></span>
            <span className="font-medium text-xs xss:text-subsmall sm:text-xs xl:text-sm text-black ">
              WELCOME TO OUR COMPANY
            </span>
          </div>
          <h5 className=" sub-heading-main">
            Revolutionize Your Business with <span className="text-blue-500">Flutter App</span> Development
          </h5>
          <p className="text-gray-500 leading-relaxed text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base">
            At Analogue IT Solutions, we are your one-stop destination for
            mobile app development. With our cutting-edge Flutter app
            development services, we bring your ideas to life with speed,
            precision, and innovation. Our team of expert developers specializes
            in creating seamless and intuitive mobile applications that cater to
            your unique business needs. As a leading Flutter app development
            company in Hyderabad, we take pride in delivering high-quality
            solutions that exceed our client&apos;s expectations. Whether
            you&apos;re based in Hyderabad or anywhere else in India, our team
            is here to transform your ideas into reality.
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
              <h1 className="text-white text-lg xss:text-md xs:text-lg sm:text-xl md:text-xl xl:text-2xl 3xl:text-[1.6rem] font-bold xss:leading-tight 2xl:leading-relaxed">
                Innovative Flutter App Development for Your Business
              </h1>
              <p className="text-white text-xs xss:text-xs xs:text-xs sm:text-sm md:text-sm lg:text-[0.75rem] xl:text-sm 3xl:text-base xss:leading-5 xl:leading-7 mt-2 xss:mt-3 xs:mt-4 sm:mt-4 md:mt-5 lg:mt-3 xl:mt-4 2xl:mt-5">
                At Analogue IT Solutions, we excel in creating cutting-edge
                Flutter applications designed to work flawlessly across
                platforms. By harnessing the versatility of Flutter, we deliver
                apps that are fast, scalable, and visually engaging. From
                dynamic e-commerce solutions to bespoke mobile applications, our
                team focuses on crafting products that elevate user experience
                and drive measurable business results. Partner with us to turn
                your vision into a powerful Flutter app built with creativity,
                precision, and innovation.
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
        <div>
          <TechnologiesButtons />
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
              Flutter App Development Services at Analogue IT Solutions
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 xss:gap-8 xss:px-8 3xl:gap-20 2xl:gap-14 2xl:px-14 3xl:px-30 px-10">
            <div className=" text-[#7B7E86]] p-5 border-l border-r border-gray-200 shadow-[0_4px_2px_rgba(0,0,0,0.3)] bg-white rounded-lg">
              <h3 className="font-weight-400 font-semibold text-[#0E59F2] text-center xss:mb-3 xl:text-2xl xl:mb-4 xss:mb-1text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] xl:text-[1.5rem] 3xl:text-[1.6rem] font-semibold">
                Cross-Platform Development
              </h3>
              <p className="xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base  xss:leading-4 sm:leading-relaxed 3xl:leading-7">
                Flutter enables cross-platform app development with a single
                codebase for iOS, Android, web, and desktop. This saves time and
                resources by eliminating the need for separate app development
                for each platform.
              </p>
            </div>
            <div className=" text-[#7B7E86]] p-5 border-l border-r border-gray-200 shadow-[0_4px_2px_rgba(0,0,0,0.3)] bg-white p-6 rounded-lg">
              <h3 className="font-weight-400 font-semibold text-[#0E59F2] xss:mb-3 xl:text-2xl xl:mb-4 xss:mb-1text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] xl:text-[1.5rem] 3xl:text-[1.6rem] font-semibold">
                Custom UI/UX Design
              </h3>
              <p className="xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base  xss:leading-4 sm:leading-relaxed 3xl:leading-7">
                Our Flutter App development services include custom widget
                development and UI/UX design, ensuring visually appealing and
                highly functional app interfaces that meet your specific
                requirements and branding guidelines.
              </p>
            </div>
            <div className=" text-[#7B7E86]] p-5 border-l border-r border-gray-200 shadow-[0_4px_2px_rgba(0,0,0,0.3)] bg-white p-6 rounded-lg">
              <h3 className="font-weight-400 font-semibold text-[#0E59F2] xss:mb-3 xl:text-2xl xl:mb-4 xss:mb-1text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] xl:text-[1.5rem] 3xl:text-[1.6rem] font-semibold">
                Ongoing Support and Maintenance
              </h3>
              <p className="xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base  xss:leading-4 sm:leading-relaxed 3xl:leading-7">
                We provide comprehensive ongoing support and maintenance
                services for Flutter app development, ensuring smooth
                operations, bug fixes, updates, and continuous improvement to
                drive success.
              </p>
            </div>
            <div className=" text-[#7B7E86]] p-5 border-l border-r border-gray-200 shadow-[0_4px_2px_rgba(0,0,0,0.3)] bg-white p-6 rounded-lg">
              <h3 className="font-weight-400 font-semibold text-[#0E59F2] xss:mb-3 xl:text-2xl xl:mb-4 xss:mb-1text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] xl:text-[1.5rem] 3xl:text-[1.6rem] font-semibold">
                Integration of Third-Party APIs
              </h3>
              <p className="xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base  xss:leading-4 sm:leading-relaxed 3xl:leading-7">
                In Flutter development, we seamlessly integrate native features
                and third-party APIs, enhancing app capabilities and
                functionality for a comprehensive and dynamic user experience.
                App testing, quality assurance, and deployment.
              </p>
            </div>
          </div>
        </div>

        {/* Calendar */}
        <div>
          <CalendarPage />
        </div>

        {/* flutter app dev company in India */}
        <div className="w-full h-auto bg-white xl:p-5 xl:px-20 xss:px-5 sm:px-8 ">
          <h3 className="sub-heading">
            Flutter App Development Company in Hyderabad, India
          </h3>
          <div className="text">
            <p className="">
              At Analogue IT Solutions, we specialise in building powerful,
              scalable, and cross-platform apps through Flutter app development.
              With Flutter&apos;s robust framework, we create mobile
              applications that combine speed, flexibility, and a native-like
              experience, all from a single codebase. Recognized among the top
              Flutter app development companies in Hyderabad, our mission is to
              transform your business ideas into sleek, high-performing apps
              that delight users and drive measurable growth.
            </p>
          </div>
        </div>

        {/* Why businesses choose flutter */}
        <div className="w-full h-auto bg-white xl:px-5 xl:px-20 xss:px-5 xs:p-5 xl:p-0 xl:pb-2 sm:px-8 ">
          <h3 className="sub-heading pb-2">
            Why Businesses Choose Flutter with Analogue IT Solutions
          </h3>
          <div className="">
            <p className="sub-text">
              Single Codebase -{" "}
              <span className="text ">
                Faster deployment for Android & iOS
              </span>
            </p>
          </div>
          <div className="">
            <p className="sub-text">
              Cost-Effective Development -{" "}
              <span className="text">
                Save time and resources
              </span>
            </p>
          </div>
          <div className="">
            <p className="sub-text">
              Custom Solutions -{" "}
              <span className="text">
                Apps tailored to your business goals
              </span>
            </p>
          </div>
          <div className="">
            <p className="sub-text">
              Scalable Performance -{" "}
              <span className="text">
                Reliable under heavy user activity
              </span>
            </p>
          </div>
          <div className="">
            <p className="sub-text">
              Engaging Interfaces -{" "}
              <span className="text">
                Smooth, interactive, and modern UI/UX
              </span>
            </p>
          </div>
          <div className="">
            <p className="sub-text">
              Dedicated Support -{" "}
              <span className="text">
                End-to-end assistance even after launch
              </span>
            </p>
          </div>
        </div>

        {/* Extended Locations */}
        <div>
        <ExtendedLocations />
        </div>

        {/* Best flutter app developers in hyderabad */}
        <div className="w-full h-auto bg-white xl:pt-5 xl:px-20 xss:px-5 pt-3 xl:pb-0 sm:px-8 ">
          <p className="sub-heading">
            Best Flutter App Developers in Hyderabad
          </p>
          <div className=" text">
            <p className="pb-2">
              Our team of skilled Flutter developers in Hyderabad blends
              innovation with precision, ensuring every app is user-friendly,
              feature-rich, and future-ready. Beyond app development, we also
              offer web development, e-commerce solutions, and digital marketing
              strategies to provide complete digital growth for your business.
              Whether you&apos;re a startup aiming for your first launch or an
              enterprise looking to expand digitally, Analogue delivers
              world-class Flutter solutions designed to help you scale faster.
            </p>
          </div>
        </div>

        {/* why analogue it solutions */}
        <div className="w-full h-auto bg-white xl:p-2 xl:px-20 xss:px-5 xss:p-2 xl:p-0 sm:px-8 ">
          <h3 className="sub-heading">
            Why Analogue IT Solutions?
          </h3>
          <div className="text">
            <p className="xl:pb-2">
              Our team of skilled Flutter developers in Hyderabad blends
              innovation with precision, ensuring every app is user-friendly,
              feature-rich, and future-ready. Beyond app development, we also
              offer web development, e-commerce solutions, and digital marketing
              strategies to provide complete digital growth for your business.
              Whether you&apos;re a startup aiming for your first launch or an
              enterprise looking to expand digitally, Analogue delivers
              world-class Flutter solutions designed to help you scale faster.
            </p>
            <p className="xl:pb-2">
              As the leading Flutter app development company in Hyderabad, we
              follow a client-focused approach:
            </p>
            <p className="">1. Strict confidentiality with NDAs</p>
            <p className="">
              2. Agile development process for timely delivery
            </p>
            <p className="">
              3. Affordable pricing without compromising quality
            </p>
            <p className="">
              4. Proven track record of building apps that engage and perform
            </p>
          </div>
        </div>

        {/* expand beyond hyderabad */}
        <div className="w-full h-auto bg-white xl:px-5 xl:px-20 xss:px-5 xss:py-3 xl:pb-2 xl:py-0 sm:px-8 ">
          <p className="sub-heading xss:mb-1 xs:mb-1 ">
            Expand Beyond Hyderabad
          </p>
          <div className="text">
            <p className="pb-2">
              Though based in Hyderabad, we proudly deliver Flutter app
              development services across India and globally. Businesses
              worldwide trust Analogue for building apps that are not only
              robust but also tailored to meet unique industry needs.
            </p>
          </div>
        </div>

        {/* faqs section */}
        <div className="w-[86%] mx-auto pb-3 xss:mt-5">
          <div>
            <FrequentQuestions Question={FlutterfaqArray} />
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
