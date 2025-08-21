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
      <div className="max-w-7xl mx-auto px-4 py-12 px-15">
        {/* Top Section */}

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
  {/* About Us */}
  <div className="col-span-1 ">
    <h3 className="font-bold mb-3">About Us</h3>
    <p className="text-gray-500 leading-relaxed mb-4 text-sm">
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
      <ul className="space-y-2 text-gray-500 text-sm">
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
      <ul className="space-y-2 text-gray-500 text-sm">
        <li>Ui Ux Development</li>
        <li>Web Development</li>
        <li>Mobile App Development</li>
        <li>Digital Marketing</li>
      </ul>
    </div>
  </div>
</div>



  {/* Location */}
  <div className="col-span-1 xl:col-span-1">
    <h3 className="font-bold mb-3">Location</h3>
    <div className="grid grid-cols-1">
      <div className="flex items-center gap-2 lg:p-1 lg:min-w-[100px] ">
        <span className="text-gray-500 lg:text-sm xss:text-lg">Hyderabad, India</span>
        <Image src="/Flags/India-Flag.png" width={20} height={20} alt="India" className="w-full h-auto max-w-[25px] max-h-[16px]" />
      </div>
      <div className="flex items-center gap-2 p-1 min-w-[100px]">
        <span className="text-gray-500 lg:text-sm xss:text-lg">Dubai</span>
        <Image src="/Flags/Uae-Flag.png" width={20} height={20} alt="UAE" className="w-full h-auto max-w-[25px] max-h-[25px]" />
      </div>
      <div className="flex items-center gap-2 p-1 min-w-[100px]">
        <span className="text-gray-500 lg:text-sm xss:text-lg">California</span>
        <Image src="/Flags/California-republic.png" width={28} height={14} alt="USA" className="w-full h-auto max-w-[28px] max-h-[25px]" />
      </div>
      <div className="flex items-center gap-2 p-1 min-w-[100px]">
        <span className="text-gray-500 lg:text-sm xss:text-lg">Denmark</span>
        <Image src="/Flags/Denmark-Flag.png" width={28} height={14} alt="Denmark" className="w-full h-auto max-w-[28px] max-h-[24px]" />
      </div>
      <div className="flex items-center gap-2 p-1 min-w-[100px]">
        <span className="text-gray-500 lg:text-sm xss:text-lg">Qatar</span>
        <Image src="/Flags/Qatar-Flag.png" width={28} height={14} alt="Qatar" className="w-full h-auto max-w-[28px] max-h-[24px]" />
      </div>
    </div>
  </div>
</div>

        {/* Middle Section */}
<div className="grid grid-cols-1 xl:grid-cols-4 gap-6 xl:px-10">
  {/* Copyright */}
  <div className="text-start text-sm text-gray-200 xl:mx-[-2rem] hidden xl:block">
    Copyright© 2023 Tronix. All Rights Reserved.
  </div>

  {/* address, working hours, contact Details */}
  <div className="col-span-3 grid grid-cols-1 xl:grid-cols-3 gap-8 ">
    {/* Location */}
    <div className="flex items-start gap-4">
      <a
        href="https://maps.app.goo.gl/P858gAyx5vH8GaTQ7?g_st=ac"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open location in Google Maps"
      >
        <Image
          src="/Footer/Location.png"
          alt="Location"
          width={0}
          height={0}
          sizes="100vw"
          className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] 2xl:w-[80px] 2xl:h-[80px] object-contain cursor-pointer"
        />
      </a>
      <div className="flex flex-col">
        <h2>LOCATION</h2>
        <p className="text-gray-500 text-sm mt-2">
          1-98/4/64, Jaya Vijaya Plaza, Vittal Rao Nagar, Mindspace, Madhapur, Hyderabad-500081.
        </p>
      </div>
    </div>

    {/* Working Hours */}
    <div className="flex items-start gap-4">
      <Image
        src="/Footer/Working-Hours.png"
        alt="Working Hours"
        width={0}
        height={0}
        sizes="100vw"
        className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] 2xl:w-[80px] 2xl:h-[80px] object-contain"
      />
      <div className="flex flex-col">
        <h2>WORKING HOURS</h2>
        <p className="text-gray-500 text-sm mt-2">
          Monday - Saturday <br /> 10am - 7pm
        </p>
      </div>
    </div>

    {/* Contact Us */}
    <div className="flex items-start gap-4">
      <Image
        src="/Footer/Contact.png"
        alt="Contact"
        width={0}
        height={0}
        sizes="100vw"
        className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] 2xl:w-[80px] 2xl:h-[80px] object-contain"
      />
      <div className="flex flex-col">
        <h2>CONTACT US</h2>
        <a href="https://mail.google.com/mail/?view=cm&to=info@analogueitsolutions.com" className="hover:underline text-gray-500 text-sm">
          info@analogueitsolutions.com
        </a>
        <a href="tel:+918919088163" className="hover:underline text-gray-500 text-sm">
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
