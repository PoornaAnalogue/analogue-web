"use client";
import { useState, useEffect } from "react";
import { FaChevronDown, FaBars, FaTimes, FaEnvelope } from "react-icons/fa";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import PopUpForm from "@/Components/PopUpForm";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  useEffect(() => {
    if (menuOpen) {
      setShowSidebar(true); // mount immediately on open
    } else {
      const timer = setTimeout(() => setShowSidebar(false), 500); // wait for animation
      return () => clearTimeout(timer);
    }
  }, [menuOpen]);

  let hideTimeout;

  const mainMenu = [
    {
      label: "Services",
      items: [
        {
          name: "Android App Development",
          link: "/Services/android-app-development-company-in-hyderabad",
        },
        {
          name: "Flutter App Development",
          link: "/Services/flutter-app-development-company-in-hyderabad",
        },
        {
          name: "Digital Marketing",
          link: "/Services/digital-marketing-agency-in-hyderabad",
        },
        {
          name: "GPS Vehicle Tracking",
          link: "/Services/gps-vehicle-tracking-company-in-hyderabad",
        },
        {
          name: "Web Development",
          link: "/Services/web-design-company-in-hyderabad",
        },
        {
          name: "IOS App Development",
          link: "/Services/ios-app-development-company-in-hyderabad",
        },
        {
          name: "UI/UX Development",
          link: "/Services/ui-ux-design-company-in-hyderabad",
        },
        { name: "AI & ML", link: "/Services/ai-ml-company-in-hyderabad" },
        {
          name: "Chrome Extension",
          link: "/Services/chrome-browser-extension-company-in-hyderabad",
        },
      ],
    },
    {
      label: "Technologies",
      items: [
        { name: "Adobe XD", link: "/adobe-xd-design-company" },
        { name: "Angular Development", link: "/angular-development-company" },
        { name: "AWS", link: "/amazon-web-service-company" },
        { name: "Photoshop", link: "/photoshop-design-company" },
        { name: "Python", link: "/python-programming" },
        { name: "Figma", link: "/figma-design-company" },
        { name: "Microsoft Azure", link: "/microsoft-azure-design-company" },
        { name: "Node.js", link: "/nodejs-app-development-company" },
        { name: "NoSQL (MongoDB)", link: "/no-sql-development-company" },
        {
          name: "Oracle, MySQL, SQL Server",
          link: "/oracle-mysql-sql-server-company",
        },
        { name: "Web Frameworks", link: "/web-framework-development-company" },
        { name: "Java", link: "/java-development-company" },
        { name: "Google Cloud Platform", link: "/gcp" },
        { name: "Next.js", link: "/nextjs-app-development-company" },
        { name: "React Native", link: "/react-native-app-development-company" },
        { name: "PHP", link: "/php-app-development-company" },
        { name: "Vue JS", link: "/vuejs-website-development-company" },
      ],
    },
    {
      label: "Industries",
      items: [
        { name: "E-Commerce App", link: "/ecommerce-app-development-company" },
        {
          name: "Grocery Delivery App",
          link: "/grocery-app-development-company",
        },
        {
          name: "Hotel Booking App",
          link: "/hotel-booking-app-development-company",
        },
        { name: "Laundry App", link: "/laundry-app-development-company" },
        {
          name: "Real Estate Marketplace",
          link: "/real-estate-app-development-company",
        },
        {
          name: "Social Media App",
          link: "/social-media-app-development-company",
        },
        {
          name: "Food Delivery App",
          link: "/food-delivery-app-development-company",
        },
        { name: "Logistic Appp", link: "/logistic-app-development-company" },
        {
          name: "Taxi Booking App",
          link: "/taxi-booking-app-development-company",
        },
        {
          name: "Live Streaming App",
          link: "/video-streaming-app-development",
        },
        { name: "News App", link: "/news-app-development" },
        { name: "CRM Development", link: "/crm-software-development-company" },
        { name: "ERP Development", link: "/erp-software-development" },
        { name: "Iot Development", link: "/iot-development-company" },
        {
          name: "Security Management App",
          link: "/security-guard-app-development",
        },
        {
          name: "Dr.Consultation App",
          link: "/doctor-appointment-app-development",
        },
        {
          name: "GPS Tracking Devices",
          link: "/GPS-vehicle-tracking-development-company",
        },
      ],
    },
  ];

  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <div className="Navbar-main overflow-visible !bg-[#FAFBFF]">
      {/* Top Strip */}
      <div className="2xl:py-3 py-3 px-4 sm:px-6 lg:px-40 xl:py-2 flex justify-between border-b text-xs bg-gray-100 text-black">
        <div className="hidden sm:flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-blink"></span>
          <h1>Timings: 24 / 7</h1>
        </div>
        <Link
          href="https://mail.google.com/mail/?view=cm&to=sales@analogueitsolutions.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full text-center sm:w-auto xss:justify-center sm:text-left flex items-center gap-2 hover:text-blue-600 hover:underline transition-colors duration-200"
        >
          <FaEnvelope className="text-gray-700" />
          sales@analogueitsolutions.com
        </Link>

        <style jsx>{`
          .animate-blink {
            animation: blink 1s infinite;
          }
          @keyframes blink {
            0%,
            100% {
              opacity: 1;
            }
            50% {
              opacity: 0;
            }
          }
        `}</style>
      </div>

      {/* Navbar */}
      <div
        className={`bg-white z-[100] relative lg:py-2 xss:py-0 xss:pt-2 shadow-lg xl:my-2 md:mx-5 lg:my-4 2xl:mx-10 xl:mx-5 ${
          menuOpen ? "hidden xl:block" : ""
        }`}
      >
        <div className="max-w-[1600px] flex items-center gap-10 px-4 sm:px-10 w-full xl:gap-5">
          {/* Logo */}
          <Image
            src="/Navbar/Analogue-navbar-logo.svg"
            alt="Logo"
            width={300}
            height={80}
            className="flex-shrink-0 xss:w-[90px] xl:w-[140px] 3xl:w-[180px] h-auto "
          />

          {/* Desktop Menu */}
          <ul className="hidden xl:flex items-center justify-center xl:gap-6 3xl:gap-10 text-black flex-grow">
            <li className="hover:text-blue-600 cursor-pointer xss:text-xs 2xl:text-sm">
              <Link href="/" className="block w-full h-full">
                Home
              </Link>
            </li>
            <li className="hover:text-blue-600 cursor-pointer xss:text-xs 2xl:text-sm">
              <Link href="/aboutus" className="block w-full h-full">
                About
              </Link>
            </li>

            {mainMenu.map((menu, i) => (
              <li
                key={i}
                className="relative z-[100]"
                onMouseEnter={() => {
                  clearTimeout(hideTimeout);
                  setOpenDropdown(menu.label);
                }}
                onMouseLeave={() => {
                  hideTimeout = setTimeout(() => setOpenDropdown(null), 150);
                }}
              >
                <div
                  className="flex items-center gap-1  xss:text-xs 2xl:text-sm cursor-pointer"
                  onClick={() => toggleDropdown(menu.label)}
                >
                  {menu.label}
                  <FaChevronDown
                    className={`transition-transform duration-200 ${
                      openDropdown === menu.label ? "rotate-180" : ""
                    }`}
                    size={12}
                  />
                </div>

                {openDropdown === menu.label && (
                  <ul className="absolute top-full left-0 mt-5 w-[480px] font-semibold grid grid-cols-2 gap-1 border-2 border-blue-100 rounded-lg shadow-lg p-2 bg-white">
                    {menu.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center px-2 py-1 text-black cursor-pointer group transition-all duration-200"
                      >
                        {/* Icon container (takes no space until hover) */}
                        <span className="overflow-hidden w-0 group-hover:w-4 transition-all duration-200 flex justify-center text-violet-600">
                          <span className="overflow-hidden w-0 group-hover:w-4 transition-all duration-200 flex justify-center text-violet-600">
                            <Image
                              src="/Navbar/navbar-hover-icon.svg"
                              alt="arrow"
                              width={20}
                              height={20}
                              className="object-contain"
                            />
                          </span>
                        </span>

                        {/* Text — flush left, moves right only when icon appears */}
                        <Link
                          href={item.link}
                          onClick={() => setOpenDropdown(null)}
                          prefetch={true}
                          className="ml-0 group-hover:ml-1 transition-all  group-hover:text-blue-600"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}

            <li className="hover:text-blue-600 cursor-pointer xss:text-xs 2xl:text-sm">
              <Link href="/Products" className="block w-full h-full">
                Our Products
              </Link>
            </li>
            <li className="hover:text-blue-600 cursor-pointer xss:text-xs 2xl:text-sm">
              <Link href="/careers" className="block w-full h-full">
                Careers
              </Link>
            </li>
            <li className="hover:text-blue-600 cursor-pointer xss:text-xs 2xl:text-sm">
              <Link href="/blogs" className="block w-full h-full">
                Blog
              </Link>
            </li>
            <li className="hover:text-blue-600 cursor-pointer xss:text-xs 2xl:text-sm">
              <Link href="/contact" className="block w-full h-full">
                Contact
              </Link>
            </li>
          </ul>

          {/* Free Quote */}
          <div className="free-quote-lg-only items-center gap-4 ml-auto">
            <button
              onClick={() => setIsOpen(true)}
              className="xl:px-3 xss:text-xs 2xl:text-sm  xl:py-1.5 2xl:py-1 bg-blue-500 text-white rounded-full"
            >
              Free Quote
            </button>
          </div>

          {/* Phone + Quick Call + Free Quote */}
          <div className="hidden only-xl:flex items-center gap-4 ml-auto">
            <Image
              src="/Navbar/Phone-icon.svg"
              alt="Phone"
              width={32}
              height={25}
            />
            <div className="flex flex-col ml-[-0.3rem]">
              <span className="text-xs text-gray-500">Quick Call</span>
              <a
                href="tel:+918919088163"
                className="text-xs text-blue-700 hover:underline transition-colors duration-200"
              >
                {" "}
                +91 8919088163
              </a>
            </div>

            <button
            suppressHydrationWarning
            onClick={() => setIsOpen(true)}
            className="bg-blue-600 text-sm text-white px-3 py-1.5 rounded-lg hover:bg-blue-500 transition cursor-pointer animate-pulse-soft"
          >
            Free Quote
          </button>

          </div>

          {/* Hamburger Icon */}
          <div className="xl:hidden ml-auto text-black border-white border-2 p-1 rounded-md">
            <FaBars
              size={16}
              onClick={() => setMenuOpen(true)}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Sidebar Mobile Menu */}
      {/** Backdrop */}
      {showSidebar && (
        <div
          className={`
            fixed inset-0 bg-black transition-opacity duration-500 z-[200]
            ${menuOpen ? "opacity-50 visible" : "opacity-0 invisible"}
          `}
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/** Sidebar */}
      <div
        className={` xl:hidden fixed top-0 text-black left-0 h-full w-[70%] bg-white shadow-lg z-[300] overflow-y-auto transform transition-transform duration-500 ease-in-out
        ${
          menuOpen ? "translate-x-0" : "-translate-x-full pointer-events-none"
        }`}
      >
        {/* Sidebar Header */}
        <div className="relative flex flex-col items-center">
          {/* Rectangle behind logo */}
          <div className="bg-blue-100 w-full flex items-center justify-center lg:pt-8">
            <Image
              src="/Navbar/Analogue-navbar-logo.svg"
              alt="Logo"
              width={300}
              height={150}
              className="z-10 mt-2 xss:w-[10rem] xs:w-[12rem] lg:w-[300px]"
            />
          </div>

          {/* Triangle below rectangle */}
          <div className="w-full h-12 bg-blue-100 clip-triangle mt-[-0.1rem]"></div>

          <style jsx>{`
            .clip-triangle {
              clip-path: polygon(0 0, 100% 0, 50% 100%);
            }
          `}</style>
        </div>

        {/* Close Button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute xss:top-1 xss:right-2 lg:top-4 lg:right-4 lg:p-2 xss:p-1 rounded-full bg-blue-500 shadow-md z-[60]"
        >
          <FaTimes
            size={22}
            className="text-white xss:w-[0.7rem] xss:h-[0.7rem] lg:w-[1.2rem] lg:h-[1.2rem]"
          />
        </button>

        {/* Sidebar Links */}
        <div className="p-5 xss:space-y-1 md:space-y-3 mt-3">
          {/* Normal Menu Items with Chevron */}
          <p className="cursor-pointer border-b flex items-center xss:text-xs lg:text-md leading-[2rem]">
            <svg
              className="w-4 h-4 mr-2 text-gray-500"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <Link
              href="/"
              className="block w-full h-full"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </p>
          <p className="cursor-pointer border-b pb-0 flex items-center xss:text-xs lg:text-md leading-[2rem]">
            <svg
              className="w-4 h-4 mr-2 text-gray-500"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <Link
              href="/aboutus"
              className="block w-full h-full"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
          </p>

          {/* Dropdown Menu */}
          {mainMenu.map((menu, i) => (
            <div key={i}>
              <button
                onClick={() => toggleDropdown(menu.label)}
                className="flex justify-between items-center xss:text-xs lg:text-md w-full pr-3 border-b leading-[2rem] text-black"
              >
                <span className="flex items-center">
                  {/* Chevron that rotates */}
                  <svg
                    className={`w-4 h-4 mr-2 text-gray-500 transform transition-transform duration-300 ${
                      openDropdown === menu.label ? "rotate-90" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  {menu.label}
                </span>
                <span className="flex items-center justify-center xss:w-5 xss:h-5 md:w-6 md:h-6 rounded-full bg-gray-200 text-gray-700 text-sm font-bold">
                  {openDropdown === menu.label ? "-" : "+"}
                </span>
              </button>

              {/* Submenu Items */}
              {openDropdown === menu.label && (
                <ul className="lg:pl-8 xss:pl-5 border-gray-300">
                  {menu.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-gray-700 py-0 xss:text-xs lg:text-md leading-[1.8rem]"
                    >
                      <span className="mr-2 text-gray-500">{">"}</span>
                      <Link
                        href={item.link}
                        onClick={() => setMenuOpen(false)}
                        prefetch={true}
                        className="hover:text-blue-600 transition-colors"
                      >
                        {item.name || item}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <p className="cursor-pointer border-b flex items-center xss:text-xs lg:text-md leading-[2rem]">
            <svg
              className="w-4 h-4 mr-2 text-gray-500"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <Link
              href="/blogs"
              className="block w-full h-full"
              onClick={() => setMenuOpen(false)}
            >
              Our Products
            </Link>
          </p>
          <p className="cursor-pointer border-b flex items-center xss:text-xs lg:text-md leading-[2rem]">
            <svg
              className="w-4 h-4 mr-2 text-gray-500"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <Link
              href="/blogs"
              className="block w-full h-full"
              onClick={() => setMenuOpen(false)}
            >
              Blogs
            </Link>
          </p>
          <p className="cursor-pointer border-b flex items-center xss:text-xs lg:text-md leading-[2rem]">
            <svg
              className="w-4 h-4 mr-2 text-gray-500"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <Link
              href="/contact"
              className="block w-full h-full"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </p>

          <div className="flex xss:justify-start xs:justify-center items-center xss:gap-6 xs:px-4 xs:py-3 bg-gray-50 mt-4 rounded-md">
            <div>
              <Image
                src="/Navbar/Phone-icon.svg"
                alt="Phone"
                width={25}
                height={25}
              />
            </div>
            <div className="flex flex-col xss:ml-[-1rem]">
              <span className="xss:text-[0.6rem] lg:text-xs text-gray-800">
                Quick Call
              </span>
              <a
                href="tel:+918919088163"
                className=" xss:text-subsmall sm:text-small text-blue-700 hover:underline transition-colors duration-200"
              >
                +91 8919088163
              </a>
            </div>
            <button
              onClick={() => {
                setMenuOpen(false); // Close sidebar
                setIsOpen(true); // Open form
              }}
              className="bg-blue-600 xss:text-[0.55rem] xs:text-[0.65rem] sm:text-[0.75rem] lg:text-xs xss:py-1 xss:px-2 text-white lg:px-3 lg:py-1 rounded-full hover:bg-blue-700 transition"
            >
              Free Quote
            </button>
          </div>
        </div>
      </div>
      <PopUpForm isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}
