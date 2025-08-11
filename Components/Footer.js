import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { MdAccessTime, MdCall } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="relative bg-[#0c1a38] text-white overflow-hidden ">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-18 relative z-10">
        
        {/* About Us */}
        <div>
          <h3 className="font-bold mb-3">About Us</h3>
          <p className="text-gray-500 leading-relaxed mb-4 text-sm">
            Analogue is the Best Mobile App Development Company in Hyderabad, India. 
            We are skilled in Mobile App Development, E-Commerce Development, and Web Development
          </p>
          <div className="flex gap-3 items-center mb-4 ">
            {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaWhatsapp, FaYoutube].map((Icon, i) => (
              <a key={i} href="#" className="p-2 bg-[#0e2a5c] rounded-full">
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="ml-[2rem]">
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
        <div className="ml-[-2rem]">
          <h3 className="font-bold mb-3">Our Services</h3>
          <ul className="space-y-2 text-gray-500 text-sm ">
            <li>Ui Ux Development</li>
            <li>Web Development</li>
            <li>Mobile App Development</li>
            <li>Digital Marketing</li>
          </ul>
        </div>

        {/* Location */}
        <div>
        <h3 className="font-bold mb-3">Location</h3>
        <div className="grid grid-cols-2 gap-y-2 items-center">
            {/* Location names */}
            <div className="flex flex-col gap-2 text-gray-500 text-sm">
            <span>Hyderabad, India</span>
            <span>Dubai</span>
            <span>California</span>
            <span>Denmark</span>
            <span>Qatar</span>
            </div>

            {/* Flags */}
            <div className="flex flex-col gap-1">
            <Image src="/Flags/India-Flag.png" width={28} height={14} alt="India" />
            <Image src="/Flags/Uae-Flag.png" width={28} height={14} alt="UAE" />
            <Image src="/Flags/California-republic.png" width={28} height={14} alt="USA" />
            <Image src="/Flags/Denmark-Flag.png" width={28} height={14} alt="Denmark" />
            <Image src="/Flags/Qatar-Flag.png" width={28} height={14} alt="Qatar" />
            </div>
        </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className=" max-w-7xl mx-auto px-4 py-0 grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
        {/* Copyright */}
      <div className="text-start text-sm text-gray-200 relative z-10  mt-[-1rem]">
        Copyright© 2023Tronix. All Rights Reserved.
      </div>

        {/* Location */}
        <div className="flex items-start gap-4">
          <Image src="/Footer/Location.png" alt="Location" width={60} height={60} />
          <div className="flex flex-col">
          <h2>LOCATION</h2>
          <p className="text-gray-500 text-sm mt-2">1-98/4/64, Jaya Vijaya Plaza, Vittal Rao Nagar, Mindspace, Madhapur, Hyderabad-500081.</p>
        </div>
        </div>

        {/* Working Hours */}
        <div className="flex items-start gap-4">
            <Image src="/Footer/Working-Hours.png" alt="Location" width={60} height={60} />
            <div className="flex flex-col">
          <h2>WORKING HOURS</h2>
          <p className="text-gray-500 text-sm mt-2">Monday - Saturday<br/>10am - 7pm</p>
        </div>
        </div>

        {/* Contact */}
        <div className="flex items-start gap-4">
            <Image src="/Footer/Contact.png" alt="Location" width={60} height={60} />
            <div className="flex flex-col"> 
          <h2>CONTACT US</h2>
          <p className="text-gray-500 text-sm mt-2">info@analogueitsolutions.com<br/>+91 89190 88163</p>
        </div>
        </div>
      </div>


      {/* Background Big Text */}
      <div className="mt-45">
      <h1 className="absolute bottom-[-78px] left-0 right-0 text-[16rem] font-semibold text-[#103687] leading-none z-0 select-none text-center">
        Analogue IT
      </h1>
      </div>

    </footer>


  );
}