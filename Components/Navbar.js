"use client";
import { useState } from "react";
import { FaChevronDown, FaBars, FaTimes, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import PopUpForm from "./PopUpForm";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
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

  // free quote button functionality

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Navbar-main overflow-visible bg-[#f5fafa]">
      {/* Top Strip */}
      <div className="py-4 px-4 sm:px-6 lg:px-40 flex justify-between border-b text-xs bg-gray-100 text-black">
      <h1 className="hidden sm:block">Timings : 24 / 7</h1>
      <Link
        href="https://mail.google.com/mail/?view=cm&to=info@analogueitsolutions.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full text-center sm:w-auto sm:text-left flex items-center gap-2 hover:text-blue-600 hover:underline transition-colors duration-200">
        <FaEnvelope className="text-gray-700" />
        info@analogueitsolutions.com
      </Link>
    </div>

      {/* Navbar */}
      <div className="bg-white z-[100] relative py-2 shadow-lg 2xl:my-2 lg:my-4 2xl:mx-10 xl:mx-5">
        <div className="max-w-[1600px] flex items-center gap-10 px-4 sm:px-10 w-full">
          {/* Logo */}
          <Image
            src="/Analogue-navbar-logo.png"
            alt="Logo"
            width={150}
            height={48}
            className="flex-shrink-0"
          />

          {/* Desktop Menu */}
          <ul className="hidden xl:flex items-center justify-center gap-10 text-black flex-grow">
            <li className="hover:text-blue-600 cursor-pointer xl:text-sm">Home</li>
            <li className="hover:text-blue-600 cursor-pointer xl:text-sm">About</li>

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
              <div className="flex items-center gap-1 xl:text-sm cursor-pointer">
                {menu.label}
                <FaChevronDown
                  className={`transition-transform duration-200 ${
                    openDropdown === menu.label ? "rotate-180" : ""
                  }`}
                  size={12}
                />
              </div>

              {openDropdown === menu.label && (
                <ul className="absolute top-full left-0 mt-5 w-[480px] font-semibold grid grid-cols-2 gap-1 bg-[#f5fafa] border shadow-lg p-2 z-[200]">
                  {menu.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center px-2 py-1 text-black cursor-pointer group transition-all duration-200">
                      {/* Icon container (takes no space until hover) */}
                      <span className="overflow-hidden w-0 group-hover:w-4 transition-all duration-200 flex justify-center text-violet-600">
                        <span className="overflow-hidden w-0 group-hover:w-4 transition-all duration-200 flex justify-center text-violet-600">
  <Image
    src="/navbar-hover-icon.png"   // replace with your image path
    alt="arrow"
    width={20}         // same size as svg (h-3 w-3 → 12px)
    height={20}
    className="object-contain"
  />
</span>

                      </span>

            {/* Text — flush left, moves right only when icon appears */}
                  <Link
                    href={item.link}
                    className="ml-0 group-hover:ml-1 transition-all duration-200 group-hover:text-blue-600"
                  >
                    {item.name}
                  </Link>
                </li>

                  ))}
                </ul>
              )}
            </li>
          ))}


            <li className="hover:text-blue-600 cursor-pointer xl:text-sm">Blog</li>
            <li className="hover:text-blue-600 cursor-pointer xl:text-sm">Contact</li>
          </ul>

          {/* Free Quote */}
          <div className="free-quote-lg-only items-center gap-4 ml-auto">

            <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded-full"
      >
        Free Quote
      </button>            
          </div>

          {/* Phone + Quick Call + Free Quote */}
          <div className="hidden only-xl:flex items-center gap-4 ml-auto">
            <Image src="/phone-icon.png" alt="Phone" width={20} height={20} />
            <div className="flex flex-col">
            <span className="text-xs text-gray-500">Quick Call</span>
            <a
              href="tel:+918919088163"
              className="text-xs text-blue-700 hover:underline transition-colors duration-200"
            >
              +91 8919088163
            </a>
          </div>

            <button onClick={() => setIsOpen(true)} className="bg-blue-600 text-sm text-white px-2 py-1.5 rounded-full hover:bg-blue-700 transition">
              Free Quote
            </button>
          </div>

          {/* Hamburger Icon */}
          <div className="xl:hidden ml-auto gtext-black">
            <FaBars
              size={22}
              onClick={() => setMenuOpen(true)}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Sidebar Mobile Menu */}
      {menuOpen && (
        <div className="xl:hidden fixed top-0 left-0 h-full w-[70%] bg-white shadow-lg z-50 overflow-y-auto">
          {/* Sidebar Header */}
          <div className="relative flex items-center justify-center py-6 bg-blue-100 clip-triangle">
            <Image
              src="/Analogue-navbar-logo.png"
              alt="Logo"
              width={100}
              height={40}
              className="relative z-10"
            />
          </div>

          {/* Close Button */}
          <div className="absolute top-4 right-4">
            <FaTimes
              size={22}
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer"
            />
          </div>

          {/* Sidebar Links */}
          <div className="p-4 space-y-2 mt-6">
            <p className="cursor-pointer border-b pb-2">Home</p>
            <p className="cursor-pointer border-b pb-2">About</p>

            {mainMenu.map((menu, i) => (
              <div key={i}>
                <button
                  onClick={() => toggleDropdown(menu.label)}
                  className="flex justify-between w-full py-2 border-b"
                >
                  {menu.label}
                  <FaChevronDown
                    className={openDropdown === menu.label ? "rotate-180" : ""}
                  />
                </button>
                {openDropdown === menu.label && (
                  <ul className="pl-4 space-y-2 mt-1">
                    {menu.items.map((item, idx) => (
                      <li key={idx} className="cursor-pointer">
                        {item.name || item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <p className="cursor-pointer border-b pb-2">Blog</p>
            <p className="cursor-pointer border-b pb-2">Contact</p>
          </div>
        </div>
      )}

      {/* Mobile Quick Call + Free Quote */}
      <div className="flex xl:hidden items-center gap-4 px-4 py-3 bg-gray-50 mt-4">
        <Image src="/phone-icon.png" alt="Phone" width={16} height={16} />
        <div className="flex flex-col">
          <span className="text-xs text-gray-500">Quick Call</span>
          <span className="text-xs text-blue-700">+91 8919088163</span>
        </div>
        <button onClick={() => setIsOpen(true)} className="bg-blue-600 text-sm text-white px-3 py-1.5 rounded-full hover:bg-blue-700 transition">
          Free Quote
        </button>
      </div>

      {/* Triangle Styling */}
      <style jsx>{`
        .clip-triangle {
          clip-path: polygon(50% 100%, 0 0, 100% 0);
        }
      `}</style>
          <PopUpForm isOpen={isOpen} onClose={() => setIsOpen(false)} />

    </div>
    
  );
}

