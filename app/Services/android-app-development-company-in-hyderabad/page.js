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
import TypewriterHeading from "@/components/service-related-components/typewrite-heading";
import TechnologiesButtons from "@/components/service-related-components/tech-icons";

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

      const heading = [
    { word: "Best", color: "text-black" },
    { word: "Android", color: "text-blue-500" },
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
                Are you in search of a Best Android App Development Company in
            Hyderabad? Look no further than Analogue IT Solutions! Our team is
            dedicated to developing innovative and tailored Android applications
            that resonate with your target audience. We combine cutting-edge
            technology with industry insights to create robust, high-performance
            Android apps that drive user engagement and business growth. Trust
            us to elevate your mobile presence and bring your app ideas to life!
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
              <Image src="/service-icons/android-img.png" width={600} height={400} alt="android image"
                className="w-full h-auto max-w-[30rem] object-contain " />
            </div>
          </div>

          {/* Welcome to our company */}
          <div className="flex items-center xss:pt-3 xl:pt-8 xss:mb-1">
            <span className="w-1 h-1 bg-black rounded-full mr-2"></span>
            <span className="font-medium text-xs xss:text-subsmall sm:text-xs xl:text-sm text-black ">
              WELCOME TO OUR COMPANY
            </span>
          </div>
          <h5 className="sub-heading-main">
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
            <Link
              className="text-blue-700 font-semibold"
              href="/Services/ui-ux-design-company-in-hyderabad"
            >
              UI/UX design
            </Link>{" "}
            to seamless backend integration, we ensure every aspect of your app
            is built for efficiency and scalability. Whether you&apos;re a
            startup looking to launch your first mobile app or an enterprise
            seeking advanced solutions, our expertise covers everything from{" "}
            <Link
              className="text-blue-700 font-semibold"
              href="/ecommerce-app-development-company"
            >
              e-commerce
            </Link>{" "}
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
              <h1 className="text-white text-lg xss:text-md xs:text-lg sm:text-xl md:text-xl xl:text-2xl 3xl:text-[1.6rem] 2xl:w-[65%] font-bold xss:leading-snug">
                Crafting Exceptional Android Apps for Your Business
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
        <div >
          <TechnologiesButtons />
        </div>

        {/* Start Work with us */}
        <div className="w-full h-auto bg-white px-3 pb-5 xs:px-4  
                        sm:px-5 md:px-6 lg:px-8 xl:px-10 xl:px-20"
        >
          <div className="flex items-center xss:pt-3 xl:pt-8 xss:mb-1">
            <span className="w-1 h-1 bg-black rounded-full mr-2"></span>
            <span className="font-medium text-xs xss:text-subsmall sm:text-xs xl:text-sm text-black ">
              Start Work WIth Us
            </span>
          </div>
          <h5 className="sub-heading">
            The Best Android App Development Company.
          </h5>
            <p className="text pb-2">
              At Analogue IT Solutions, we are a premier Android app development
              company committed to turning your app ideas into reality. With our
              deep expertise and dedication to excellence, we collaborate
              closely with you to create exceptional Android app solutions that
              meet your unique needs and exceed expectations.
            </p>
            <p className="text pb-2">
              Our team leverages the latest technologies and industry best
              practices to build high-performance, user-friendly apps tailored
              to your business goals. From intuitive UI/UX design to seamless
              functionality, we ensure that every app delivers a smooth and
              engaging experience. Whether you&apos;re a startup or an
              established business, our scalable solutions help you stay ahead
              in the competitive mobile landscape.
            </p>
            <p className="text pb-2">
              Beyond development, we offer ongoing support and updates to keep
              your app optimized and future-ready. Our goal is to not just build
              apps, but to create digital experiences that drive growth and
              enhance customer engagement. Partner with us to bring your Android
              app vision to life.
            </p>
        </div>

        {/* Calendar */}
        <div>
          <CalendarPage />
        </div>

        {/* Android dev company in India */}
        <div className="w-full h-auto bg-white xl:p-5 xl:px-20 xss:px-5 pt-5 xs:p-5 sm:px-8 ">
          <p className="sub-heading">
            Mobile App Development Company in India
          </p>
          <div className="text">
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
        <div className="w-full h-auto bg-white xl:px-5 xl:px-20 xss:px-5 xss:pb-2 sm:px-8 ">
          <p className="sub-heading xss:mb-1 xs:mb-1 ">
            Analogue IT Solutions - Best AndroidAppDevelopment Services 
            in Hyderabad
          </p>
          <div className=" text">
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
        <div className="2xl:px-10 lg:px-7 xl:px-20 2xl:px-15 xss:p-5 xl:p-0 xl:pt-5 w-full h-auto ">
          <p className="sub-heading">
            {" "}
            Why Choose Analogue IT Solutions?
          </p>
          <ol className="list-decimal xss:ml-5 sub-text">
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
        <div className="2xl:px-10 lg:px-7 xl:px-20 2xl:px-15 xss:p-5 xl:p-0 w-full h-auto ">
          <h3 className="sub-heading">
            Choose the Best Android App Developers in Hyderabad
          </h3>
          <div className="text">
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
