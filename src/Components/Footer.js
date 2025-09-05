import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { MdAccessTime, MdCall } from "react-icons/md";
import Link from "next/link";
import { CalendarIcon } from '@heroicons/react/20/solid';

export default function Footer() {
  const socialLinks = [
  { id: 1, name: "Facebook", icon: FaFacebookF, link: "https://www.facebook.com/analogueitsolutions" },
  { id: 2, name: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/analogueitsolutions/" },
  { id: 3, name: "Twitter", icon: FaTwitter, link: "https://x.com/AnalogueIt" },
  { id: 4, name: "LinkedIn", icon: FaLinkedinIn, link: "https://www.linkedin.com/company/analogueitsolutions/" },
  { id: 5, name: "Whatsapp", icon: FaWhatsapp, link: "https://api.whatsapp.com/send/?phone=%2B918919088163&text=Hello%2Cbro+edhi+default+message+&type=phone_number&app_absent=0" },
  { id: 6, name: "Youtube", icon: FaYoutube, link: "https://www.youtube.com/@AnalogueITSolutions" },
];
  return (
    <>
    <footer className="relative bg-[#0c1a38] text-white overflow-hidden ">
      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 py-12 xss:px-7 sm:px-15 xl:px-8  3xl:px-0">
        {/* Top Section */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 xss:gap-6 2xl:gap-0 mb-12">
        {/* About Us */}
        <div className="col-span-1 xss:col-span-2 sm:col-span-1">
          <h3 className="font-bold mb-3">About Us</h3>
          <p className="text-gray-400 leading-relaxed mb-4 text-sm">
            Analogue is the Best Mobile App Development Company in Hyderabad, India. 
            We are skilled in Mobile App Development, E-Commerce Development, and Web Development
          </p>
          {/* social links */}
          <div className="flex gap-3 items-center xss:text-xs">
            {socialLinks.map(({ id, icon: Icon, link, name }) => (
                <a
                  key={id}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="lg:p-2 xss:p-1 bg-[#0e2a5c] rounded-full flex items-center justify-center hover:bg-[#163d7c] transition"
                >
                  <Icon className="text-white" size={18} />
                </a>
              ))}
          </div>
        </div>

        {/* Links and Our Services Container */}
        <div className="col-span-1 xl:col-span-2">
          <div className="grid grid-cols-2 gap-6">
            {/* Links */}
            <div className="xl:ml-18">
              <h3 className="font-bold mb-3">Links</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Our Mission</a></li>
                <li><a href="#">Landing Page</a></li>
                <li><a href="#">Our Projects</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>

            {/* Our Services */}
            <div>
              <h3 className="font-bold mb-3">Our Services</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Ui Ux Development</li>
                <li>Web Development</li>
                <li>Mobile App Development</li>
                <li>Digital Marketing</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="col-span-1 xss:col-span-2 sm:col-span-1">
          <h3 className="font-bold mb-3">Location</h3>
          <div className="grid grid-cols-1">
            <div className="flex items-center gap-2 lg:p-1 lg:min-w-[100px] ">
              <span className="text-gray-400 xl:text-sm xss:text-lg">Hyderabad, India</span>
              <Image src="/Flags/India-Flag.svg" width={20} height={20} alt="India" className="w-auto h-auto max-w-[25px] max-h-[16px]" />
            </div>
            <div className="flex items-center gap-2 p-1 min-w-[100px]">
              <span className="text-gray-400 xl:text-sm xss:text-lg">Dubai</span>
              <Image src="/Flags/Uae-Flag.svg" width={28} height={20} alt="UAE" className="w-[28px]  h-[20px]" />
            </div>
            <div className="flex items-center gap-2 p-1 min-w-[100px]">
              <span className="text-gray-400 xl:text-sm xss:text-lg">California</span>
              <Image src="/Flags/California-republic.svg" width={28} height={14} alt="USA" className="w-auto h-auto max-w-[28px] max-h-[25px]" />
            </div>
            <div className="flex items-center gap-2 p-1 min-w-[100px]">
              <span className="text-gray-400 xl:text-sm xss:text-lg">Denmark</span>
              <Image src="/Flags/Denmark-Flag.svg" width={28} height={14} alt="Denmark" className="w-auto h-auto max-w-[28px] max-h-[24px]" />
            </div>
            <div className="flex items-center gap-2 p-1 min-w-[100px]">
              <span className="text-gray-400 xl:text-sm xss:text-lg">Qatar</span>
              <Image src="/Flags/Qatar-Flag.svg" width={28} height={14} alt="Qatar" className="w-[28px]  h-[14px]" />
            </div>
          </div>
        </div>

        {/* Recent Posts */}
        <div className="col-span-2 sm:col-span-1 xl:col-span-4 2xl:col-span-1 flex flex-col xl:flex-col">
        <h4 className="text-lg font-bold mb-4 xl:mb-4 2xl:mb-0">Recent Posts</h4>
        <div className="flex flex-col xl:flex-row 2xl:flex-col space-y-2 xl:space-y-0 xl:space-x-4">
          <div className="flex">
            <Image
              src="/images/post2.png"
              alt="How to Become a Mobile App Developer"
              width={80}
              height={64}
              className="w-[80px] h-[8vh] my-auto rounded-xl cursor-pointer hover:opacity-35"
              priority={false}
            />
            <div className="ml-3">
              <Link
                href="/blogs/how-to-become-a-mobile-app-developer"
                className="hover:text-blue-700 cursor-pointer text-left text-sm text-gray-400"
                scroll={true}
              >
                How to Become a Mobile App Developer in 2025
              </Link>
              <div className="flex mt-2">
                <CalendarIcon className="mt-1 h-5 w-5 text-sm text-gray-400 mr-2" />
                <span className="text-sm text-gray-400 flex items-center justify-center">01 July, 2025</span>
              </div>
            </div>
          </div>
          <div className="flex">
            <Image
              src="/images/post1.png"
              alt="Food Delivery App Development Cost"
              width={80}
              height={64}
              className="w-[80px] h-[8vh] my-auto rounded-xl hover:opacity-35"
              priority={false}
            />
            <div className="ml-3">
              <Link
                href="/blogs/food-delivery-app-development-cost-india"
                className="hover:text-blue-700 cursor-pointer text-left text-sm text-gray-400"
                scroll={true}
              >
                How Much Does It Cost to Develop a Food Delivery App in India?
              </Link>
              <div className="flex mt-2">
                <CalendarIcon className="mt-1 h-5 w-5 text-sm text-gray-400 mr-2" />
                <span className="text-sm text-gray-400 flex items-center justify-center">29 May, 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>


      </div>

              {/* Middle Section */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 xl:px-10 2xl:px-7">
        {/* Copyright */}
        <div className="text-start text-sm text-gray-200 xl:mx-[-1.8rem] hidden xl:block">
          Copyright© 2023 Tronix. All Rights Reserved.
        </div>

        {/* address, working hours, contact Details */}
        <div className="col-span-3 grid grid-cols-1 xl:grid-cols-3 xss:gap-4 xl:gap-2 2xl:gap-5 xl:ml-[-1rem] 2xl:ml-0">
  {/* Location */}
  <div className="flex items-start gap-2">
    <div className="relative w-[50px] h-[50px] xss:w-[150px] xss:h-[50px] sm:w-[130px] sm:ml-[-0.4rem] md:ml-[-0.15rem] md:w-[4.5rem] md:h-[4rem] xs:ml-[-0.4rem] sm:h-[60px] xl:w-[250px] xl:h-[60px] xl:ml-0 3xl:w-[180px]">
      <Image src="/Footer/Location.svg" alt="Location" fill className="object-contain" />
    </div>
    <div className="flex flex-col md:ml-2">
      <h2 className="xss:text-xs sm:text-md lg:text-[0.9rem] xl:text-md">LOCATION</h2>
      <p className="text-gray-400 text-sm mt-2">
        <a
          href="https://maps.app.goo.gl/P858gAyx5vH8GaTQ7?g_st=ac"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open location in Google Maps"
        >
          1-98/4/64, Jaya Vijaya Plaza, Vittal Rao Nagar, Mindspace, Madhapur, Hyderabad-500081.
        </a>
      </p>
    </div>
  </div>

  {/* Working Hours */}
  <div className="flex items-start gap-4">
    <div className="relative w-[50px] h-[50px] xss:w-[50px] xss:h-[50px] sm:w-[60px] sm:h-[60px]">
      <Image src="/Footer/Working-Hours.svg" alt="Working Hours" fill className="object-contain" />
    </div>
    <div className="flex flex-col">
      <h2 className="xss:text-xs sm:text-md lg:text-[0.9rem] xl:text-md">WORKING HOURS</h2>
      <p className="text-gray-400 text-sm mt-2">
        Monday - Saturday <br /> 10am - 7pm
      </p>
    </div>
  </div>

  {/* Contact Us */}
  <div className="flex items-start gap-4 xl:w-[15.5rem] 2xl:ml-[-1.2rem]">
    <div className="relative w-[50px] h-[50px] xss:w-[50px] xss:h-[80px] sm:w-[60px] sm:h-[60px] xl:w-[70px] xl:h-[60px] 3xl:w-[200px]">
      <Image src="/Footer/Contact.svg" alt="Contact" fill className="object-contain" />
    </div>
    <div className="flex flex-col">
      <h2 className="xss:text-xs sm:text-md lg:text-[0.9rem] xl:text-md">CONTACT US</h2>
      <a href="mailto:info@analogueitsolutions.com" className="hover:underline text-gray-400 text-sm">
        info@analogueitsolutions.com
      </a>
      <a href="tel:+918919088163" className="hover:underline text-gray-400 text-sm">
        +91 89190 88163
      </a>
    </div>
  </div>
</div>


      </div>
      </div>

      {/* Background Big Text */}
      <div className="2xl:mt-45 xl:mt-25">
        <h1 className="absolute xss:hidden xl:block 3xl:bottom-[-78px] 3xl:text-[16rem] 2xl:bottom-[-65px] 2xl:text-[14rem] xl:bottom-[-52px] xl:text-[11rem] left-0 right-0 font-semibold text-[#103687] leading-none z-0 select-none text-center">
          Analogue IT
        </h1>
      </div>
        <div className="text-center md:text-lg xss:px-3 xss:text-sm bg-[#1a265c] py-4 w-screen text-gray-200 mt-4 xl:hidden">
    Copyright © 2025 Analogue IT Solutions. All Rights Reserved.
  </div>
    </footer>
    </>
  );
}