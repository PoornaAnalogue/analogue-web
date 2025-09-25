"use client";
import { FaChevronDown } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";
import PopUpForm from "@/components/popup-form";
import Link from "next/link";
import Script from "next/script";
import CarousalServicePage from "@/components/carousal-servicepage";
// import Responsive_Calendar from "@/app/book-appointment/page";
import FrequentQuestions from "@/components/faqs-page";
import GetAQuoteForm from "@/components/get-quote-form";
import CalendarPage from "@/app/home-page-main/calendar/calendar-page";
import TypewriterHeading from "@/components/service-related-components/typewrite-heading";
import TechnologiesButtons from "@/components/service-related-components/tech-icons";
import ExtendedLocations from "@/components/service-related-components/extended-locations";

export default function GPSVehicleTracking() {
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

  const gpsfaqArray = [
    {
      question:
        "01. What is GPS vehicle tracking?",
      answer:
        "GPS vehicle tracking is a technology that uses Global Positioning System (GPS) satellites to monitor the real-time location, speed, and route of vehicles. It helps businesses manage fleets efficiently and ensure vehicle safety.",
    },
    {
      question:
        "02. How does GPS vehicle tracking work?",
      answer:
        "A GPS tracking device installed in the vehicle communicates with satellites to determine the vehicle’s exact location. This data is then transmitted to a central platform, allowing fleet managers to monitor vehicles in real-time through web or mobile applications.",
    },
    {
      question:
        "03. Is GPS vehicle tracking suitable for all types of fleets?",
      answer:
        "Absolutely. GPS tracking can be implemented for small businesses, delivery vehicles, trucks, taxis, logistics fleets, and even personal vehicles.",
    },
    {
      question:
        "04. How secure is GPS vehicle tracking data?",
      answer:
        "At Analogue IT Solutions, we prioritize data security. All tracking data is encrypted and securely stored, ensuring that only authorized users can access it.",
    },
    {
      question: "05. How can I get started with GPS vehicle tracking?",
      answer:
        "You can get started by contacting a trusted GPS vehicle tracking provider like Analogue IT Solutions. Our team will assess your requirements, recommend the best solution, and assist with installation and setup.",
    },
  ];

  const heading = [
    { word: "Best", color: "text-black" },
    { word: "GPS", color: "text-blue-500" },
    { word: "Vehicle", color: "text-blue-500" },
    { word: "Tracking", color: "text-blue-500" },
    { word: "Services", color: "text-blue-500" },
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
              <p className="text-gray-500 leading-relaxed text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base">
                At Analogue IT Solutions, we specialize in delivering GPS Vehicle Tracking services designed to enhance fleet management, improve safety, and optimize operational efficiency. Our vehicle tracking device services ensure that you can monitor and control your vehicles in real-time with precision. With the latest in GPS tracking technology, our solutions are reliable, scalable, and tailored to meet your unique needs. We help businesses reduce fuel costs, minimize downtime, and maximize productivity through intelligent tracking insights. Our solutions also strengthen driver accountability and ensure timely deliveries for improved customer satisfaction.
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
              <Image src="/service-icons/gps-img.png" width={600} height={400} alt="flutter image"
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
          <h5 className=" sub-heading">
            What is GPS Vehicle Tracking?
          </h5>
          <p className="text-gray-500 leading-relaxed text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base">
            GPS Vehicle Tracking is the process of tracking the real-time location and movement of vehicles using satellite signals. Our GPS Tracking Services utilize advanced GPS trackers to provide live tracking, historical data, and detailed reports. Whether you're managing a fleet of vehicles or just need to monitor a single vehicle, our Vehicle Tracking System offers you the complete solution. It enhances security by preventing unauthorized vehicle usage and supports route optimization to save time and fuel. With our reliable system, you gain full control and visibility over your vehicles anytime, anywhere.
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
              <h1 className="text-white text-lg xss:text-md xs:text-lg sm:text-xl md:text-xl xl:text-2xl 3xl:text-[1.6rem] font-bold xss:leading-tight 2xl:leading-relaxed 2xl:w-[60%] 3xl:w-[75%]">
                Empowering Businesses with Smart GPS Vehicle Tracking              </h1>
              <p className="text-white text-xs xss:text-xs xs:text-xs sm:text-sm md:text-sm lg:text-[0.75rem] xl:text-sm 3xl:text-base xss:leading-5 xl:leading-6 2xl:leading-6 mt-2 xss:mt-3 xs:mt-4 sm:mt-4 md:mt-5 lg:mt-3 xl:mt-3 3xl:mt-2">
                At Analogue IT Solutions, we provide cutting-edge GPS vehicle tracking solutions that empower businesses to manage their fleets efficiently and securely. Our platform delivers real-time location updates, route optimization, and comprehensive reporting, allowing you to monitor vehicles, reduce operational costs, and enhance overall safety. With intuitive dashboards and actionable insights, our GPS tracking system helps you make informed decisions, improve productivity, and ensure seamless coordination across your fleet. Whether you manage a small business or a large enterprise, our solutions are designed to keep your vehicles connected, your operations smooth, and your business ahead of the competition.
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
        <div>
          <TechnologiesButtons />
        </div>

        {/* GPS vehicle tracking */}
        <div className="w-full h-auto bg-white xl:p-5 xl:px-20 xss:px-5 pt-5 xs:p-5 sm:px-8 ">
          <h3 className="sub-heading">
            GPS Vehicle Tracking - Real-Time Vehicle Monitoring Made Easy
          </h3>
          <div className="text">
            <p className="pb-1">
              GPS Vehicle Tracking is the process of monitoring the real-time location and movement of vehicles using advanced satellite signals. With the help of our GPS Tracking Services, you can not only view live tracking but also access detailed reports, driving history, and performance insights.
            </p>
            <p className="pb-1">
              Our Vehicle Tracking System is designed for both individuals and businesses. Whether you&apos;re managing a fleet of vehicles for logistics, transportation, delivery services, or simply need to track a single car for personal use, our GPS solutions ensure complete safety, control, and efficiency.
            </p>
          </div>
        </div>

        {/* key features */}
        <div className="w-full h-auto bg-white xl:p-0 xl:px-20 xss:px-5 xss:px-5 sm:px-8">
          <h5 className=" xss:pb-2 xl:pb-3 sub-heading">
            Key Features of Our GPS Vehicle Tracking System
          </h5>

          <div className="text-[#7B7E86]">
            <div className="sub-text">
              Real-Time Location Tracking -{" "}
              <span className="text">
                Instantly know where your vehicle is at any time.
              </span>
            </div>

            <div className="sub-text">
              Route History & Playback  -{" "}
              <span className="text">
                View historical travel routes for better trip management.
              </span>
            </div>

            <div className="sub-text">
              Detailed Reports -{" "}
              <span className="text">
                Get insights into speed, distance traveled, idle time, and stoppages.
              </span>
            </div>

            <div className="sub-text">
              Geofencing Alerts -{" "}
              <span className="text">
                Set virtual boundaries and get notified when vehicles enter or exit specific areas.
              </span>
            </div>

            <div className="sub-text">
              Driver Behavior Monitoring -{" "}
              <span className="text">
                Track driving patterns like overspeeding, harsh braking, or unnecessary idling.
              </span>
            </div>
            <div className="sub-text">
              Mobile & Web Access -{" "}
              <span className="text">
                Monitor your vehicles 24/7 via smartphone app or web dashboard.
              </span>
            </div>
          </div>
        </div>


        {/* benefits of gps  */}
        <div className="w-full h-auto bg-white xl:p-5 xl:px-20 xss:px-5 pt-5 xs:p-5 sm:px-8">
          <h5 className="sub-heading">
            Benefits of GPS Tracking Services
          </h5>

          <div className="text-[#7B7E86]">
            <div className="sub-text">
              Improved Fleet Management -{" "}
              <span className="text">
                Optimize routes, reduce fuel costs, and increase productivity.
              </span>
            </div>

            <div className="sub-text">
              Enhanced Safety & Security  -{" "}
              <span className="text">
                Receive instant alerts in case of theft, misuse, or route deviations.
              </span>
            </div>

            <div className="sub-text">
              Better Customer Service -{" "}
              <span className="text">
                Ensure on-time deliveries with accurate ETAs and live tracking updates.
              </span>
            </div>

            <div className="sub-text">
              Cost Savings -{" "}
              <span className="text">
                Reduce fuel expenses, maintenance costs, and unauthorized vehicle usage
              </span>
            </div>

            <div className="sub-text">
              Peace of Mind -{" "}
              <span className="text">
                Know your loved ones or valuable goods are safe at all times.
              </span>
            </div>
          </div>
        </div>

        {/* who can use the gps  */}
        <div className="w-full h-auto bg-white xl:p-0 xl:px-20 xss:px-5 pt-5 xs:p-5 sm:px-8 ">
          <h5 className="sub-heading">
            Who Can Use GPS Vehicle Tracking?
          </h5>

          <div className="text-[#7B7E86]">
            <p className="sub-text">
              Our GPS Tracking System combines accuracy, reliability, and user-friendly features to give you complete control over your vehicles. By using our advanced GPS trackers, you can ensure smarter decision-making, improved efficiency, and enhanced safety for your vehicles.

            </p>
            <div className="sub-text">
              Logistics & Transport Companies -{" "}
              <span className="text">
                Monitor trucks, buses, and cargo in real time.
              </span>
            </div>

            <div className="sub-text">
              Delivery Services  -{" "}
              <span className="text">
                Ensure timely deliveries with optimized routes.
              </span>
            </div>

            <div className="sub-text">
              Taxi & Ride-Sharing Services -{" "}
              <span className="text">
                Improve transparency and passenger safety.
              </span>
            </div>

            <div className="sub-text">
              Personal Vehicle Owners -{" "}
              <span className="text">
                Keep your family and private cars secure.
              </span>
            </div>

            <div className="sub-text">
              Corporate Fleets -{" "}
              <span className="text">
                Track employee movement and reduce operational costs.
              </span>
            </div>
          </div>
        </div>


        {/* Calendar */}
        <div>
          <CalendarPage />
        </div>

        {/* mapping gps */}
        <div className="w-full h-auto bg-white xl:py-3 xl:px-20 xss:px-5 pt-5 xs:px-5 sm:px-8 ">
          <h3 className="sub-heading">
            GIS Mapping Services for Vehicle Management
          </h3>
          <div className="text">
            <p className="pb-2">
              We offer advanced GIS Mapping Services to visualize your fleet's location and routes on customized maps. By leveraging GPS trackers and vehicle tracking systems, our GIS Mapping Services help you plan efficient routes and monitor driver behavior. These solutions enhance operational transparency, reduce fuel costs, and improve overall fleet productivity. With real-time data insights, businesses can make smarter decisions and deliver services more efficiently.            </p>
          </div>
        </div>

        <div className="w-full h-auto bg-white xl:p-0 xl:px-20 xss:px-5 pt-5 xs:p-5 sm:px-8 ">
          <h3 className="sub-heading">
            Drones as a Service for Vehicle Monitoring          </h3>
          <div className="text">
            <p className="pb-2">
              We also provide drone services for aerial monitoring of your vehicles and assets. Drones equipped with GPS technology can provide real-time aerial views of your fleet, ensuring enhanced security and better oversight of remote or large-area locations. This allows for quicker incident detection, improved risk management, and proactive maintenance planning. With high-resolution imaging and data collection, you gain actionable insights to optimize fleet safety and performance.            </p>
          </div>
        </div>

        {/* why choose  */}
        <div className="w-full h-auto bg-white xl:py-3 xl:px-20 xss:px-5 xs:p-5 sm:px-8 ">
          <h3 className="sub-heading">
            Why Choose Analogue IT Solutions for Your GPS Vehicle Tracking Needs?          </h3>
          <div className="text">
            <p className="xss:pb-2 md:pb-5">
              As one of the leading vehicle tracking device service providers, we have extensive experience in providing reliable GPS tracking solutions. Our team is committed to delivering high-quality, customizable tracking systems that provide real-time, accurate data. Whether you are a small business or a large enterprise, we tailor our services to meet your specific requirements. With our advanced solutions, you can improve operational efficiency, reduce costs, and ensure greater safety for your fleet. Our customer-focused approach guarantees seamless integration and ongoing support for hassle-free management. By choosing us, you gain a trusted partner dedicated to helping your business thrive with smart tracking technologies.            </p>
          </div>
        </div>


        {/* Extended Locations */}
        <div>
          <ExtendedLocations />
        </div>

        {/* discuss ideas */}
        <div className="w-full h-auto bg-white xl:p-5  xl:px-20 xss:px-5 pt-5 xs:p-5 sm:px-8 ">
          <h3 className=" sub-heading">
            Get Started Today
          </h3>
          <div className="xl:text-sm text-[#7B7E86] pb-2 xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base leading-relaxed 3xl:leading-8">
            <p className="pb-2">
              If you're looking for reliable GPS Vehicle Tracking solutions or want to learn more about our vehicle tracking system, GPS tracker, or GIS mapping services, contact Analogue IT Solutions today! Our experts are here to guide you in choosing the best solution for your vehicle fleet management needs.            </p>
          </div>
        </div>


        {/* faqs section */}
        <div className="w-[86%] mx-auto pb-3 xss:mt-5">
          <div>
            <FrequentQuestions Question={gpsfaqArray} />
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
