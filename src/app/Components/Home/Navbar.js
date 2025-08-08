import { FaChevronDown } from "react-icons/fa";
import Image from 'next/image';

export default function Navbar(){
    return (
        <div className='Navbar-main'> 
                 {/* Top Strip */}
              <div className="py-3 px-40 flex justify-between border-b text-xs bg-gray-100 text-black">
                <h1>Timings : 24 / 7</h1>
                <p>info@analogueitsolutions.com</p>
              </div>
              {/* Navbar */}
              <div className="Navbar bg-white z-50 relative py-2 mt-2">
                <div className="mx-30 flex justify-between gap-10 py-2 px-10 items-center shadow-lg">
                  <img src="Main-logo.png" alt="Logo" className="h-12" />
                  <ul className="flex items-center gap-10 text-black relative">
                    <li className="hover:text-blue-600 cursor-pointer">Home</li>
                    <li className="hover:text-blue-600 cursor-pointer">About</li>
        
                    {/* Services Dropdown */}
                    <li className="relative group cursor-pointer">
                      <div className="flex items-center gap-1">
                        Services
                        <FaChevronDown className="transition-transform duration-200 group-hover:rotate-180" size={12} />
                      </div>
                      <ul className="absolute top-full left-0 mt-2 w-48 bg-white border shadow-lg hidden group-hover:block z-50">
                        <li className="px-4 py-2 hover:bg-gray-100">App Development</li>
                        <li className="px-4 py-2 hover:bg-gray-100">Web Design</li>
                        <li className="px-4 py-2 hover:bg-gray-100">Marketing</li>
                      </ul>
                    </li>
        
                    {/* Technologies Dropdown */}
                    <li className="relative group cursor-pointer">
                      <div className="flex items-center gap-1">
                        Technologies
                        <FaChevronDown className="transition-transform duration-200 group-hover:rotate-180" size={12} />
                      </div>
                      <ul className="absolute top-full left-0 mt-2 w-48 bg-white border shadow-lg hidden group-hover:block z-50">
                        <li className="px-4 py-2 hover:bg-gray-100">React</li>
                        <li className="px-4 py-2 hover:bg-gray-100">Next.js</li>
                        <li className="px-4 py-2 hover:bg-gray-100">Node.js</li>
                      </ul>
                    </li>
        
                    {/* Our Products Dropdown */}
                    <li className="relative group cursor-pointer">
                      <div className="flex items-center gap-1">
                        Our Products
                        <FaChevronDown className="transition-transform duration-200 group-hover:rotate-180" size={12} />
                      </div>
                      <ul className="absolute top-full left-0 mt-2 w-48 bg-white border shadow-lg hidden group-hover:block z-50">
                        <li className="px-4 py-2 hover:bg-gray-100">CRM</li>
                        <li className="px-4 py-2 hover:bg-gray-100">HRMS</li>
                        <li className="px-4 py-2 hover:bg-gray-100">E-commerce</li>
                      </ul>
                    </li>
        
                    <li className="hover:text-blue-600 cursor-pointer">Blog</li>
                    <li className="hover:text-blue-600 cursor-pointer">Contact</li>
                  </ul>
                  <div>
          <ul className="flex items-center gap-4">
            {/* Phone Icon */}
            <li>
              <Image src="/phone-icon.png" alt="Phone" width={16} height={10} />
            </li>   
            {/* Free Call Text + Number */}
            <li className="flex flex-col">
              <span className="text-xs text-gray-500 ">Quick Call</span>
              <span className="text-xs text-blue-700">+91 8919088163</span>
            </li>
            {/* Button */}
            <li>
              <button className="bg-blue-600 text-sm text-white px-3 py-1.5 rounded-full hover:bg-blue-700 transition">
                Free Quote
              </button>
            </li>
          </ul>
        </div>
                </div>
              </div>
              </div>
    )
}

