"use client";
import { useState, useEffect } from "react";
import { FaChevronDown, FaBars, FaTimes, FaEnvelope } from "react-icons/fa";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import PopUpForm from "./PopUpForm";

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
        { name: "Android App Development", link: "/services/android" },
        { name: "Flutter App Development", link: "/services/flutter" },
        { name: "Digital Marketing", link: "/services/digital-marketing" },
        { name: "GPS Vehicle Tracking", link: "/services/gps-tracking" },
        { name: "Web Development", link: "/services/web" },
        { name: "IOS App Development", link: "/services/ios" },
        { name: "UI/UX Development", link: "/services/ui-ux" },
        { name: "AI & ML", link: "/services/ai-ml" },
        { name: "Chrome Extension", link: "/services/chrome-extension" },
      ],
    },
    {
      label: "Technologies",
      items: [
        { name: "Adobe XD", link: "/technologies/adobe-xd" },
        { name: "Angular Development", link: "/technologies/angular" },
        { name: "AWS", link: "/technologies/aws" },
        { name: "Photoshop", link: "/technologies/photoshop" },
        { name: "Python", link: "/technologies/python" },
        { name: "Figma", link: "/technologies/figma" },
        { name: "Microsoft Azure", link: "/technologies/azure" },
        { name: "Node.js", link: "/technologies/nodejs" },
        { name: "NoSQL (MongoDB)", link: "/technologies/mongodb" },
        { name: "Oracle, MySQL, SQL Server", link: "/technologies/sql" },
        { name: "Web Frameworks", link: "/technologies/web-frameworks" },
        { name: "Java", link: "/technologies/java" },
        { name: "Google Cloud Platform", link: "/technologies/gcp" },
        { name: "Next.js", link: "/technologies/nextjs" },
        { name: "React Native", link: "/technologies/react-native" },
        { name: "PHP", link: "/technologies/php" },
        { name: "Vue JS", link: "/technologies/vue" },
      ],
    },
    {
      label: "Our Products",
      items: [
        { name: "E-Commerce App", link: "" },
        { name: "Grocery Delivery App", link: "" },
        { name: "Hotel Booking App", link: "" },
        { name: "Laundry App", link: "" },
        { name: "Real Estate Marketplace", link: "" },
        { name: "Social Media App", link: "" },
        { name: "Food Delivery App", link: "" },
        { name: "Logistic Appp", link: "" },
        { name: "Taxi Booking App", link: "" },
        { name: "Live Streaming App", link: "" },
        { name: "News App", link: "" },
        { name: "CRM Development", link: "" },
        { name: "ERP Development", link: "" },
        { name: "Iot Development", link: "" }, 
        { name: "Security Management App", link: "" },
        { name: "Dr.Consultation App", link: "" },
        { name: "GPS Tracking Devices", link: "" },
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
    href="https://mail.google.com/mail/?view=cm&to=info@analogueitsolutions.com"
    target="_blank"
    rel="noopener noreferrer"
    className="w-full text-center sm:w-auto xss:justify-center sm:text-left flex items-center gap-2 hover:text-blue-600 hover:underline transition-colors duration-200"
  >
    <FaEnvelope className="text-gray-700" />
    info@analogueitsolutions.com
  </Link>

  <style jsx>{`
    .animate-blink {
      animation: blink 1s infinite;
    }
    @keyframes blink {
      0%, 100% {
        opacity: 1;
      }
      50% {
        opacity: 0;
      }
    }
  `}</style>
</div>

      {/* Navbar */}
<div className={`bg-white z-[100] relative py-2 shadow-lg xl:my-2 lg:my-4 2xl:mx-10 xl:mx-5 ${
    menuOpen ? "hidden xl:block" : ""}`}>
  <div className="max-w-[1600px] flex items-center gap-10 px-4 sm:px-10 w-full xl:gap-5">
    {/* Logo */}
    <Image src="/Navbar/Analogue-navbar-logo.png" alt="Logo" width={150} height={48} className="flex-shrink-0 xl:w-[120px]"/>

          {/* Desktop Menu */}
          <ul className="hidden xl:flex items-center justify-center gap-10 text-black flex-grow">
            <li className="hover:text-blue-600 cursor-pointer xss:text-xs xl:text-sm">Home</li>
            <li className="hover:text-blue-600 cursor-pointer xss:text-xs xl:text-sm">About</li>

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
                }}>
              <div className="flex items-center gap-1  xss:text-xs xl:text-sm cursor-pointer">
                {menu.label}
                <FaChevronDown
                  className={`transition-transform duration-200 ${
                    openDropdown === menu.label ? "rotate-180" : ""
                  }`}
                  size={12}
                />
              </div>

              {openDropdown === menu.label && (
                <ul className="absolute top-full left-0 mt-5 w-[480px]  font-semibold grid grid-cols-2 gap-1 border shadow-lg p-2 bg-white">
                  {menu.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center px-2 py-1 text-black cursor-pointer group transition-all duration-200">
                      {/* Icon container (takes no space until hover) */}
                      <span className="overflow-hidden w-0 group-hover:w-4 transition-all duration-200 flex justify-center text-violet-600">
                        <span className="overflow-hidden w-0 group-hover:w-4 transition-all duration-200 flex justify-center text-violet-600">
                      <Image src="/Navbar/navbar-hover-icon.png" alt="arrow" width={20} height={20} className="object-contain"/></span>
                      </span>

            {/* Text — flush left, moves right only when icon appears */}
                  <Link href={item.link} className="ml-0 group-hover:ml-1 transition-all duration-200 group-hover:text-blue-600">{item.name}</Link>
                </li>))}
                </ul>
              )}
            </li>
          ))}
            <li className="hover:text-blue-600 cursor-pointer xss:text-xs xl:text-sm">Blog</li>
            <li className="hover:text-blue-600 cursor-pointer xss:text-xs xl:text-sm">Contact</li>
          </ul>

          {/* Free Quote */}
          <div className="free-quote-lg-only items-center gap-4 ml-auto">

            <button
        onClick={() => setIsOpen(true)}
        className="xl:px-3 xl:text-sm  xl:py-1 bg-blue-500 text-white rounded-full"
      >
        Free Quote
      </button>            
          </div>

          {/* Phone + Quick Call + Free Quote */}
          <div className="hidden only-xl:flex items-center gap-4 ml-auto">
            <Image src="/phone-icon.jpg" alt="Phone" width={20} height={20} />
            <div className="flex flex-col">
            <span className="text-xs text-gray-500">Quick Call</span>
            <a href="tel:+918919088163" className="text-xs text-blue-700 hover:underline transition-colors duration-200"> +91 8919088163</a>
          </div>

            <button onClick={() => setIsOpen(true)} className="bg-blue-600 text-sm text-white px-2 py-1.5 rounded-full hover:bg-blue-700 transition cursor-pointer">
              Free Quote
            </button>
          </div>

          {/* Hamburger Icon */}
          <div className="xl:hidden ml-auto text-black">
            <FaBars
              size={22}
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
  className={` xl:hidden fixed top-0 left-0 h-full w-[70%] bg-white shadow-lg z-[300] overflow-y-auto transform transition-transform duration-500 ease-in-out
    ${menuOpen ? "translate-x-0" : "-translate-x-full pointer-events-none"}`}>
  {/* Sidebar Header */}
  <div className="relative flex flex-col items-center">
    {/* Rectangle behind logo */}
    <div className="bg-blue-100 w-full flex items-center justify-center lg:pt-8">
      <Image
        src="/Navbar/Analogue-navbar-logo.png"
        alt="Logo"
        width={300}
        height={150}
        className="z-10 mt-2 xss:w-[12rem] lg:w-[300px]"
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
    <p className="cursor-pointer border-b pb-2 flex items-center xss:text-xs lg:text-md leading-[2rem]">
      <svg
        className="w-4 h-4 mr-2 text-gray-500"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
      Home
    </p>
    <p className="cursor-pointer border-b pb-2 flex items-center xss:text-xs lg:text-md leading-[2rem]">
      <svg
        className="w-4 h-4 mr-2 text-gray-500"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
      About
    </p>

    {/* Dropdown Menu */}
    {mainMenu.map((menu, i) => (
      <div key={i}>
        <button
          onClick={() => toggleDropdown(menu.label)}
          className="flex justify-between items-center xss:text-xs lg:text-md w-full py-3 px-2 border-b leading-[2rem]"
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            {menu.label}
          </span>
          <span className="flex items-center justify-center xss:w-5 xss:h-5 md:w-6 md:h-6 rounded-full bg-gray-200 text-gray-700 text-sm font-bold">
            {openDropdown === menu.label ? "-" : "+"}
          </span>
        </button>

        {/* Submenu Items */}
        {openDropdown === menu.label && (
          <ul className="lg:pl-8 xss:pl-4 space-y-2 mt-2 border-l-2 border-gray-300 ml-2">
            {menu.items.map((item, idx) => (
              <li
                key={idx}
                className="flex items-center text-gray-700 py-1 xss:text-xs lg:text-md leading-[1.8rem]"
              >
                <span className="mr-2 text-gray-500">{">"}</span>
                {item.name || item}
              </li>
            ))}
          </ul>
        )}
      </div>
    ))}

    <p className="cursor-pointer border-b pb-2 flex items-center xss:text-xs lg:text-md leading-[2rem]">
      <svg
        className="w-4 h-4 mr-2 text-gray-500"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
      Blog
    </p>
    <p className="cursor-pointer border-b pb-2 flex items-center xss:text-xs lg:text-md leading-[2rem]">
      <svg
        className="w-4 h-4 mr-2 text-gray-500"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
      Contact
    </p>
  </div>
</div>


      {/* in screens less than lg - Mobile Quick Call + Free Quote */}
      <div className="flex xl:hidden 2xl:hidden 3xl:hidden xss:justify-center items-center gap-4 px-4 py-3 bg-gray-50 mt-4">
        <Image src="/Navbar/phone-icon.png" alt="Phone" width={16} height={16} />
        <div className="flex flex-col">
          <span className="xss:text-[0.6rem] lg:text-xs text-gray-500">Quick Call</span>
            <a href="tel:+918919088163" className="text-xs text-blue-700 hover:underline transition-colors duration-200"> +91 8919088163</a>
        </div>
        <button onClick={() => setIsOpen(true)} className="bg-blue-600 xss:text-[0.6rem] lg:text-xs xss:py-1 xss:px-2 text-white lg:px-3 lg:py-1 rounded-full hover:bg-blue-700 transition">
          Free Quote
        </button>
      </div>
          <PopUpForm isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
    
  );
}

