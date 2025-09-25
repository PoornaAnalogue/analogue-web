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
import ExtendedLocations from "@/components/service-related-components/extended-locations";

export default function AndroidAppDevelopment() {
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

  const faqArray = [
    {
      question:
        "01. What services does your Android app development company offer?",
      answer:
        "Our company offers a wide range of services including custom app development, app redesign and optimization, app maintenance and support, and app testing and quality assurance.",
    },
    {
      question:
        "02. How long does it typically take for an Android app to be developed by your company?",
      answer:
        "The timeline for developing an Android app varies depending on the complexity of the project. However, we strive to deliver a high-quality app within 4-6 months.",
    },
    {
      question:
        "03. How much does it cost to develop an Android app Development?",
      answer:
        "The cost of developing an Android app with us varies depending on the scope and requirements of the project. We offer competitive pricing and customizable packages to meet your budget.",
    },
    {
      question:
        "04. Can your company assist with app publication and marketing on the Google Play Store?",
      answer:
        "Yes, we provide app publication services to ensure your app meets Google Play Store guidelines and requirements. Additionally, we offer app marketing strategies to help increase visibility and downloads.",
    },
    {
      question: "05. How experienced is your team in Android app development?",
      answer:
        "Our team of developers and designers have 7+ years of experience in Android app development. To give our clients cutting-edge solutions, we stay current on the newest trends and technologies.",
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
            <span className="text-blue-500"> Android App Development </span>{" "}
            Company in Hyderabad, India
          </h1>
          <p className="text-gray-500 leading-relaxed text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base">
            Are you in search of a Best Android App Development Company in
            Hyderabad? Look no further than Analogue IT Solutions! Our team is
            dedicated to developing innovative and tailored Android applications
            that resonate with your target audience. We combine cutting-edge
            technology with industry insights to create robust, high-performance
            Android apps that drive user engagement and business growth. Trust
            us to elevate your mobile presence and bring your app ideas to life!
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
            Accelerating Business Growth with Top-Notch Android Development
          </h5>
          <p className="text-gray-500 leading-relaxed text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base">
            As a top Android app development company in Hyderabad, we harness
            the latest technologies to accelerate your business growth. Our
            skilled team of Android app developers excels at crafting customized
            solutions that meet your specific requirements. With a commitment to
            quality and innovation, we empower businesses to thrive by
            delivering high-performance Android applications that enhance user
            engagement and streamline operations. From intuitive{" "}
            <a
              className="text-blue-700 font-semibold"
              href="https://analogueitsolutions.com/ui-ux-design-company-in-hyderabad"
            >
              UI/UX design
            </a>{" "}
            to seamless backend integration, we ensure every aspect of your app
            is built for efficiency and scalability. Whether you&apos;re a
            startup looking to launch your first mobile app or an enterprise
            seeking advanced solutions, our expertise covers everything from{" "}
            <a
              className="text-blue-700 font-semibold"
              href="https://analogueitsolutions.com/ecommerce-app-development-company"
            >
              e-commerce
            </a>{" "}
            to fintech, healthcare, and beyond. Our approach is
            customer-centric, focusing on delivering apps that are not only
            visually appealing but also robust, secure, and optimized for
            performance. Partner with us to turn your app idea into a reality
            and stay ahead in the competitive digital landscape.
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
                Crafting Exceptional Android Apps for <br /> Your Business
              </h1>
              <p className="text-white text-xs xss:text-xs xs:text-xs sm:text-sm md:text-sm lg:text-[0.75rem] xl:text-sm 3xl:text-base xss:leading-5 xl:leading-7 mt-2 xss:mt-3 xs:mt-4 sm:mt-4 md:mt-5 lg:mt-3 xl:mt-4 2xl:mt-5">
                At Analogue IT Solutions, we specialise in expert Android app
                development, employing advanced technologies such as React
                Native and Flutter. Whether you need a robust e-commerce
                platform or a tailored mobile solution, our team is dedicated to
                delivering high-quality Android applications that enhance user
                experience and drive business success. Trust us to bring your
                app vision to life with precision and innovation.
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
                  className={`cursor-pointer pb-1 border-b-2 font-medium xss:text-xs sm:text-sm lg:text-base  transition-all duration-500 ease-in-out ${
                    selectedCategory === tech.category
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

        {/* Start Work with us */}
        <div className="w-full h-auto bg-white px-3 py-5 xs:px-4 xs:py-6 
                        sm:px-5 sm:py-7 md:px-6 md:py-8 lg:px-8 lg:py-10 xl:px-10 xl:py-8 xl:px-20"
        >
          <p
            className="text-[#071637] font-semibold text-body mb-3 font-600 underline decoration-[#0D6EFD] decoration-2 underline-offset-6
                            xs:text-body xs:decoration-2 xs:underline-offset-7 xs:mb-4
                            text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] xl:text-[1.6rem] 3xl:text-[2.2rem] font-semibold
                            sm:decoration-3 md:decoration-3  xl:decoration-4 
                            sm:underline-offset-10 md:underline-offset-15 xl:underline-offset-[20px] 
                            sm:mb-2 md:mb-4 xl:mb-5"
          >
            Start Work With Us
          </p>
          <div className=" p-1 xs:p-2 sm:p-3 md:p-4 lg:p-5 xl:px-4">
            <p className="text-[#0D6EFD] text-lg xss:text-sm  sm:text-base md:text-lg 2xl:text-[1.2rem] font-medium mb-2 xs:mb-3  ">
              The Best Android App Development Company.
            </p>
            <p className="text-[#7B7E86] text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base xl:leading-6 xss:leading-5 sm:leading-relaxed 3xl:leading-8 mb-2">
              At Analogue IT Solutions, we are a premier Android app development
              company committed to turning your app ideas into reality. With our
              deep expertise and dedication to excellence, we collaborate
              closely with you to create exceptional Android app solutions that
              meet your unique needs and exceed expectations.
            </p>
            <p className="text-[#7B7E86] text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base xl:leading-6 xss:leading-5 sm:leading-relaxed 3xl:leading-8 mb-2">
              Our team leverages the latest technologies and industry best
              practices to build high-performance, user-friendly apps tailored
              to your business goals. From intuitive UI/UX design to seamless
              functionality, we ensure that every app delivers a smooth and
              engaging experience. Whether you&apos;re a startup or an
              established business, our scalable solutions help you stay ahead
              in the competitive mobile landscape.
            </p>
            <p className="text-[#7B7E86] text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base xl:leading-6 xss:leading-5 sm:leading-relaxed 3xl:leading-8 mb-2">
              Beyond development, we offer ongoing support and updates to keep
              your app optimized and future-ready. Our goal is to not just build
              apps, but to create digital experiences that drive growth and
              enhance customer engagement. Partner with us to bring your Android
              app vision to life.
            </p>
          </div>
        </div>

        {/* Calendar */}
        <div>
          <CalendarPage />
        </div>

        {/* Android dev company in India */}
        <div className="w-full h-auto bg-white xl:p-5 xl:px-20 xss:px-5 pt-5 xs:p-5 sm:px-8 ">
          <p className=" subt text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.5rem] md:w-[75%] xl:text-[1.8rem] 3xl:text-[2.2rem] xl:w-[75%] 2xl:w-[65%] font-semibold text-black leading-snug">
            Mobile App Development Company in India
          </p>
          <div className="xl:text-sm text-[#7B7E86] xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base  xss:leading-4 sm:leading-relaxed 3xl:leading-8">
            <p className="pb-2">
              As a leading Indian Android app development company, Analogue IT
              Solutions is dedicated to exploring the intricacies of Android
              applications and delivering top-notch solutions tailored to client
              needs. Our expertise focuses on Android app development, ensuring
              apps that meet the highest standards of quality and innovation.
              Recognized as one of the top Android app development companies in
              Hyderabad, we transform your ideas into cutting-edge solutions
              that exceed expectations.
            </p>
            <p className="pb-2">
              Our handpicked Android app development professionals in Hyderabad
              are skilled in various platforms, including Flutter and iOS, with
              a primary focus on Android app development. Alongside app
              development, Analogue also offers digital marketing strategy
              design and business development strategy. Reach out to Analogue
              for comprehensive Android app solutions that propel your business
              to new heights.
            </p>
            <p className="pb-2">
              {" "}
              Our Android app development services in Hyderabad turn your ideas
              into reality, providing the finest user-friendly apps.
            </p>
          </div>
        </div>

        {/* text under responsive india */}
        <div className="w-full h-auto bg-white xl:p-5 xl:px-20 xss:px-5 xss:pb-2 sm:px-8 ">
          <p className="subt text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.5rem] md:w-[75%] xl:text-[1.8rem] 3xl:text-[2.2rem] xl:w-[75%] 2xl:w-[65%] font-semibold text-black leading-snug xl:mb-4 xss:mb-1 xs:mb-1 ">
            Analogue IT Solutions - Best AndroidAppDevelopment Services 
            in Hyderabad
          </p>
          <div className=" text-[#7B7E86] text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base xl:leading-6 xss:leading-4 sm:leading-relaxed 3xl:leading-8">
            <p className="pb-2">
              Analogue has earned a reputation as the best Android app
              development company in Hyderabad by formulating a client-centric
              process. Our teams collaborate, brainstorm, and devise top
              strategies for planning and creating high-quality Android
              applications.
            </p>
            <p className="pb-2">
              {" "}
              We are committed to crafting Android apps that are engaging,
              intuitive, well-structured, and innovative. As the leading Android
              app development company in Hyderabad, India, we blend essential
              design patterns with sophisticated style elements to capture the
              essence of your business.
            </p>
          </div>
        </div>

        {/* Extended Locations */}
        <ExtendedLocations />

        {/* guarantees */}
        <div className="2xl:px-10 lg:px-7 xl:px-20 2xl:px-15 xss:p-5 w-full h-auto">
          <p className="subt text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.5rem] md:w-[75%] xl:text-[1.8rem] 3xl:text-[2.2rem] xl:w-[75%] 2xl:w-[65%] font-semibold text-black leading-snug mb-2">
            Got it! Here&apos;s a concise version without descriptions:
          </p>
          <p className="text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] xl:text-[1.5rem] 3xl:text-[1.6rem] font-semibold text-[#0E59F2] mb-2">
            {" "}
            Why Choose Analogue IT Solutions?
          </p>
          <ol className="list-decimal xss:ml-5 text-[#7B7E86] text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-lg pt-2">
            <li className="xss:pb-1 lg:pb-3">
              Non-Disclosure Agreement (NDA) for confidentiality
            </li>
            <li className="xss:pb-1 lg:pb-3">
              Affordable design and development services
            </li>
            <li className="xss:pb-1 lg:pb-3">
              Support from experienced Android professionals
            </li>
            <li className="xss:pb-1 lg:pb-3">
              Fast development tailored to your needs
            </li>
            <li className="xss:pb-1 lg:pb-3">
              Creation of user-friendly and interactive apps
            </li>
            <li className="xss:pb-1 lg:pb-3">
              Reliable performance under heavy usage
            </li>
            <li className="xss:pb-1 lg:pb-3">
              Timely responses and ongoing support
            </li>
            <li className="xss:pb-1 lg:pb-3">
              Customised Android applications aligned with your business goals
            </li>
          </ol>
        </div>

        {/* text under guarantess */}
        <div className="w-full h-auto bg-white xl:px-20 xss:px-5 sm:px-8 ">
          <h3 className="subt text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.5rem] md:w-[75%] xl:text-[1.8rem] 3xl:text-[2.2rem] xl:w-[75%] 2xl:w-[65%] font-semibold text-black leading-snug">
            Choose the Best Android App Developers in Hyderabad
          </h3>
          <div className="text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] xl:leading-6 xss:leading-4 sm:leading-relaxed 3xl:leading-8">
            <p className="pb-2">
              Analogue has earned a reputation as the best Android app
              development company in Hyderabad by formulating a client-centric
              process. Our teams collaborate, brainstorm, and devise top
              strategies for planning and creating high-quality Android
              applications.
            </p>
            <p className="pb-2">
              {" "}
              We are committed to crafting Android apps that are engaging,
              intuitive, well-structured, and innovative. As the leading Android
              app development company in Hyderabad, India, we blend essential
              design patterns with sophisticated style elements to capture the
              essence of your business.
            </p>
          </div>
        </div>

        {/* faqs section */}
        <div className="w-[86%] mx-auto pb-3 xss:mt-5">
          <div>
            <FrequentQuestions Question={faqArray} />
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
