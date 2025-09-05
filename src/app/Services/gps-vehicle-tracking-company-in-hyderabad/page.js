"use client"
import { FaChevronDown } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";
import PopUpForm from "@/Components/PopUpForm";
import Link from "next/link";
import Script from "next/script";
import CarousalServicePage from "@/Components/carousalForServicePages";
import Responsive_Calendar from "@/app/BookAppointment/page";
import FrequentQuestions from "@/Components/frequentlyAskedQuestions";
import GetAQuoteForm from "@/Components/GetAQuoteForm";



export default function GPSVehicleTracking(){
    const [isOpen, setIsOpen] = useState(false);

    const [selectedCategory, setSelectedCategory] = useState('Web Apps');

  // Array of image paths corresponding to original icon names
  const TechIcons = {
    reactIcon: '/service-icons/react-logo.svg',
    nextjsIcon: '/service-icons/next-logo.svg',
    vueIcon: '/service-icons/vue-logo.svg',
    angularIcon: '/service-icons/angular-logo.svg',
    nodejsIcon: '/service-icons/node-logo.svg',
    javaIcon: '/service-icons/java-logo.svg',
    phpIcon: '/service-icons/php-logo.svg',
    pythonIcon: '/service-icons/python-logo.svg',
    dotnetIcon: '/service-icons/dotnet-logo.svg',
    flutterIcon: '/service-icons/flutter-logo.svg',
    kotlinIcon: '/service-icons/kotlin-logo.svg',
    bgicon: '/service-icons/bgicon.svg',
  };

  const technologies = [
    {
      category: 'Web Apps',
      items: [
        { name: 'React JS', icon: TechIcons.reactIcon },
        { name: 'Next JS', icon: TechIcons.nextjsIcon },
        { name: 'Vue JS', icon: TechIcons.vueIcon },
        { name: 'Angular', icon: TechIcons.angularIcon },
        { name: 'Flutter', icon: TechIcons.flutterIcon },
      ],
    },
    {
      category: 'Backend',
      items: [
        { name: 'Node JS', icon: TechIcons.nodejsIcon },
        { name: 'Java', icon: TechIcons.javaIcon },
        { name: 'PHP', icon: TechIcons.phpIcon },
        { name: 'Python', icon: TechIcons.pythonIcon },
        { name: 'Dot.Net', icon: TechIcons.dotnetIcon },
      ],
    },
    {
      category: 'Mobile Apps',
      items: [
        { name: 'React Native', icon: TechIcons.reactIcon },
        { name: 'Flutter', icon: TechIcons.flutterIcon },
        { name: 'Kotlin', icon: TechIcons.kotlinIcon },
        { name: 'Java', icon: TechIcons.javaIcon },
      ],
    },
  ];

  const selectedItems = technologies.find(
    (tech) => tech.category === selectedCategory
  )?.items;

//   faqs

const IosfaqArray = [
    {
      question:
        "01. What services does your Company offer in IOS App Development?",
      answer:
      "We offer a wide range of services including app design, development, testing, and maintenance for iPhone, iPad, and Apple Watch apps.",
    },
    {
      question:
        "02. How long does it take to develop an IOS app with your company?",
      answer:
        "The timeline for developing an IOS app can vary depending on the complexity of the project. We work closely with our clients to set realistic timelines and meet their specific needs.",
    },
    {
      question:
        "03. Can you provide examples of IOS apps your company has developed?",
      answer:
        "Yes, we have developed a variety of IOS apps for different industries including finance, healthcare, e-commerce, and entertainment. Contact us for a portfolio of our work.",
    },
    {
      question:
        "04. What sets your Company apart from other IOS app Development development companies?",
      answer:
       "Our Company stands out for our high-quality design, responsive development process, and exceptional customer service. We prioritize client satisfaction and work collaboratively to deliver top-notch results.",
    },
    {
      question: "05. Do you offer post-launch support for IOS apps?",
      answer:
        "Yes, we offer post-launch support and maintenance services to ensure that your IOS app continues to function smoothly and stays up-to-date with the latest technology and trends.",
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
                <h1 className=" text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] xl:text-[1.5rem] 3xl:text-[1.6rem] xl:w-[55%] 2xl:w-[45%] font-semibold text-black leading-snug">Best <span className="text-blue-500"> GPS Tracking App Development </span>  Company in Hyderabad, India</h1>
                <p className="text-gray-500 leading-relaxed text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base">Are you looking for a top-notch IOS app development company to create a cutting-edge mobile application that will take your business to the next level? Look no further! Our team of expert IOS app developers specialises in creating high-quality IOS apps that are tailored to meet your specific needs and objectives. At Analogue IT Solutions, we offer a wide range of IOS app development services. Whether you need a simple iOS app or a complex, feature-rich mobile application, our team of experienced IOS and Android app developers has the skills and expertise to bring your vision to life.</p>
                
                {/* Free Quote button + Call us */}
                <div className="lg:flex gap-4">
                    <button suppressHydrationWarning onClick={() => setIsOpen(true)} className="bg-blue-600 xss:text-xs lg:text-sm text-white xss:px-2 xss:py-2 xl:px-5 xl:py-3 rounded-3xl hover:bg-blue-700 transition cursor-pointer">
                    Get Free Quote
                    </button>
                    <div className="flex xss:flex-col lg:flex-row lg:items-center xss:ml-2 lg:ml-[-0.3rem] xss:mt-2 lg:mt-0">
                    <span className="xss:text-xs lg:text-sm text-blue-500 mr-2">Call Us</span>
                    <a href="tel:+918919088163" className="xss:text-xs lg:text-sm text-blue-700 hover:underline transition-colors duration-200">+91 8919088163</a>
                </div>
                </div>

                {/* Welcome to our company */}
                <div className="flex items-center xss:pt-3 xl:pt-8 xss:mb-1">
                <span className="w-1 h-1 bg-black rounded-full mr-2"></span>
                <span className="font-medium text-xs xss:text-subsmall sm:text-xs xl:text-sm text-black ">
                    WELCOME TO OUR COMPANY
                </span>
                </div>
                <h5 className=" text-2xl xss:text-[1.1rem] text-[#0D6EFD] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] xl:text-[1.5rem] 3xl:text-[1.6rem] xl:w-[60%] font-semibold leading-relaxed">Accelerating Business Growth with Expert iOS App Development</h5>
            <p className="text-gray-500 leading-relaxed text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base">At Analogue IT Solutions, we are a leading iOS app development company in Hyderabad, helping businesses transform ideas into powerful mobile experiences. Our skilled team of iOS developers harnesses the latest technologies to craft customised applications that align with your business goals and deliver real value.</p>
            <p className="text-gray-500 leading-relaxed text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base">From elegant, user-friendly UI/UX design to secure and scalable backend integration, every iOS app we build is designed for performance, reliability, and growth. Whether you are a startup launching your first app or an enterprise looking for advanced solutions, our iOS app development expertise spans industries like e-commerce, healthcare, fintech, logistics, and more.</p>
            <p className="text-gray-500 leading-relaxed text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base">With a customer-centric approach, we create iOS applications that are not only visually appealing but also robust, secure, and optimised for seamless performance. Our focus is on delivering apps that enhance user engagement, streamline operations, and boost business growth.</p>
            <p className="text-gray-500 leading-relaxed text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base">Partner with Analogue IT Solutions to turn your iOS app vision into reality and stay ahead in the competitive digital landscape.</p>
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
                        <h1 className="text-white text-lg xss:text-md xs:text-lg sm:text-xl md:text-xl xl:text-2xl 3xl:text-[1.6rem] font-bold xss:leading-tight 2xl:leading-relaxed 2xl:w-[60%] 3xl:w-[65%]">Empowering Businesses with Custom iOS Apps</h1>
                        <p className="text-white text-xs xss:text-xs xs:text-xs sm:text-sm md:text-sm lg:text-[0.75rem] xl:text-sm 3xl:text-base xss:leading-5 xl:leading-6 2xl:leading-7 mt-2 xss:mt-3 xs:mt-4 sm:mt-4 md:mt-5 lg:mt-3 xl:mt-3 3xl:mt-2">At Analogue IT Solutions, we specialise in iOS app development, creating tailored applications that align with your business goals. Our team leverages advanced technologies and creative design to deliver secure, scalable, and user-friendly solutions. Whether you’re looking for an e-commerce platform or a unique business application, our iOS app development expertise ensures exceptional performance and seamless user experiences. With innovation and precision, we bring your vision to life, making us the trusted choice for businesses seeking top-quality iOS app development services.</p>
                        <button className="bg-blue-700 text-white rounded p-2 xss:p-2 xs:p-2 sm:p-3 md:p-3 lg:p-2 xl:p-2 2xl:p-3 mt-2 lg:mt-4 xss:mt-3 xs:mt-4 sm:mt-4 md:mt-4 lg:mt-2 xl:mt-3 2xl:mt-4 3xl:mt-3 text-xs xss:text-xs xs:text-sm sm:text-sm md:text-sm lg:text-[0.65rem] xl:text-xs 2xl:text-sm"><Link href="/contact">Contact Us</Link></button>
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
                <h2 className="text-2xl xss:text-center lg:text-start xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] xl:text-[1.5rem] 3xl:text-[1.6rem] font-semibold mb-9">TECHNOLOGIES</h2>
                <div className="flex space-x-8 mb-6">
                    {technologies.map((tech, index) => (
                    <span
                        key={index}
                        onClick={() => setSelectedCategory(tech.category)}
                        className={`cursor-pointer pb-1 border-b-2 font-medium xss:text-xs sm:text-sm lg:text-base  transition-all duration-500 ease-in-out ${
                        selectedCategory === tech.category
                            ? 'border-white text-[#0E59F2]'
                            : 'border-transparent'
                        } hover:border-[#0E59F2]`}>
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

            {/* Our services new section */}
            <div className=" pb-10">
                <div className="flex flex-col xss:items-start sm:items-center xss:px-4 xss:py-5 xl:py-10">
                <div className="flex items-center mb-1">
                <span className="w-1 h-1 bg-black rounded-full mr-2"></span>
                <span className="font-medium text-xs xss:text-subsmall sm:text-xs xl:text-sm text-black">
                    Our Services
                </span>
                </div>
                <h1 className=" text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] xl:text-[1.5rem] 3xl:text-[1.6rem] font-semibold text-black leading-snug">IOS App Development Services at Analogue IT Solutions</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 xss:gap-8 xss:px-8 3xl:gap-20 2xl:gap-14 2xl:px-14 3xl:px-30 px-10">
                    <div className=" text-[#7B7E86] p-5 border-l border-r border-gray-200 shadow-[0_4px_2px_rgba(0,0,0,0.3)] bg-white rounded-lg">
                        <h3 className="font-weight-400 text-[#0E59F2] xss:mb-3 xl:text-2xl xl:mb-4 xss:mb-1text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] xl:text-[1.5rem] 3xl:text-[1.6rem] font-semibold">Mobile App Optimization</h3>
                        <p className="xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base  xss:leading-4 sm:leading-relaxed 3xl:leading-7">Developers optimise the app for performance and speed to ensure it delivers a seamless user experience.</p>
                    </div>
                    <div className=" text-[#7B7E86] p-5 border-l border-r border-gray-200 shadow-[0_4px_2px_rgba(0,0,0,0.3)] bg-white p-6 rounded-lg">
                        <h3 className="font-weight-400 text-[#0E59F2] xss:mb-3 xl:text-2xl xl:mb-4 xss:mb-1text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] xl:text-[1.5rem] 3xl:text-[1.6rem] font-semibold">Custom UI/UX Design</h3>
                        <p className="xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base  xss:leading-4 sm:leading-relaxed 3xl:leading-7">Designers create visually appealing user interfaces and ensure a smooth user experience within the app.</p>
                    </div>
                    <div className=" text-[#7B7E86] p-5 border-l border-r border-gray-200 shadow-[0_4px_2px_rgba(0,0,0,0.3)] bg-white p-6 rounded-lg">
                        <h3 className="font-weight-400 text-[#0E59F2] xss:mb-3 xl:text-2xl xl:mb-4 xss:mb-1text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] xl:text-[1.5rem] 3xl:text-[1.6rem] font-semibold">App Store Submission</h3>
                        <p className="xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base  xss:leading-4 sm:leading-relaxed 3xl:leading-7">Developers help clients navigate the App Store submission process and ensure that the app meets all guidelines and requirements set by Apple.</p>
                    </div>
                    <div className=" text-[#7B7E86] p-5 border-l border-r border-gray-200 shadow-[0_4px_2px_rgba(0,0,0,0.3)] bg-white p-6 rounded-lg">
                        <h3 className="font-weight-400 text-[#0E59F2] xss:mb-3 xl:text-2xl xl:mb-4 xss:mb-1text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] xl:text-[1.5rem] 3xl:text-[1.6rem] font-semibold">App Testing and Debugging</h3>
                        <p className="xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base  xss:leading-4 sm:leading-relaxed 3xl:leading-7">Developers thoroughly test the app to ensure it runs smoothly and is free of any bugs or glitches before it is released to the App Store.</p>
                    </div>
                </div>
    
            </div>

            {/* Calendar */}
            <div>
                <Responsive_Calendar />
            </div>

            {/* IOS app dev company in India */}
            <div className="w-full h-auto bg-white xl:p-5 xl:px-20 xss:px-5 pt-5 xs:p-5 sm:px-8 ">
            <h3 className='font-weight-400 font-semibold text-[#0E59F2] xss:mb-3 xl:text-2xl xl:mb-4 xss:mb-1text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] xl:text-[1.5rem] 3xl:text-[1.6rem] font-semibold'>
                Are You Looking for The Best IOS App Development Company?
            </h3>
            <div className="xl:text-sm text-[#7B7E86] xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base leading-relaxed 3xl:leading-8">
                <p className="pb-2">Your go-to destination for top-notch IOS app development and a wide range of other services! Our dedicated team specialises in IOS app development and is ready to take on any project, big or small</p>
                <p className="pb-2">But that&apos;s not all - we also offer mobile app development, web development, Android app development, flutter app development, and E-commerce app development. Whether you need a sleek and modern website, a cutting-edge mobile app, or a custom eCommerce solution, we&apos;ve got you covered.</p>
                <p className="pb-2">Don&apos;t settle for mediocre results - trust Analogue IT Solutions for all your IOS app development needs and more. Contact us today to learn more about our IOS app development services and how we can help bring your vision to life. Choose the best - choose Analogue IT Solutions.</p>
            </div>
            </div>

            {/* Extended Locations */}
            <div className=" w-full h-auto bg-[url('/service-icons/app-dev-bg.jpg')] bg-cover bg-center xss:p-7 xl:p-15">
            <div className="text-white text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] xl:text-[1.5rem] 3xl:text-[1.6rem] font-semibold xss:pb-5 lg:pb-8 2xl:pb-15 text-center">Our Services Extend to These Top Locations!</div>
            <div className="grid lg:grid-cols-2 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base xss:grid-cols-1 xss:gap-4 xl:gap-5 sm:px-8 md:px-28 lg:px-10 2xl:px-50">
                <div className="flex items-center">
                    <div className="w-[1.5rem] xss:w-[1.8rem] sm:w-[2rem] lg:w-[2.4rem] ">
                        <Image src="/service-icons/hyd.svg" alt="hyd" width={40} height={40} priority={false}/>
                    </div>
                    <p className="text-white pl-2">Mobile App Development Company in Hyderabad
                    </p>
                </div>
                <div className="flex items-center">
                    <div className="w-[1.5rem] xss:w-[1.8rem] sm:w-[2rem] lg:w-[2.4rem] ">
                        <Image src="/service-icons/torento.svg" alt="toronto" width={40} height={40} priority={false}/>
                    </div>
                    <p className="text-white pl-2">Mobile App Development Company in Toronto
                    </p>
                </div>
                <div className="flex items-center">
                    <div className="w-[1.5rem] xss:w-[1.8rem] sm:w-[2rem] lg:w-[2.4rem] ">
                        <Image src="/service-icons/saudi.svg" alt="saudi" width={40} height={40} priority={false}/>
                    </div>
                    <p className="text-white pl-2">Mobile App Development Company in Saudi
                    </p>
                </div>
                <div className="flex items-center">
                    <div className="w-[1.5rem] xss:w-[1.8rem] sm:w-[2rem] lg:w-[2.4rem] ">
                        <Image src="/service-icons/dubai.svg" alt="dubai" width={40} height={40} priority={false}/>
                    </div>
                    <p className="text-white pl-2">Mobile App Development Company in Dubai
                    </p>
                </div>
                <div className="flex items-center">
                    <div className="w-[1.5rem] xss:w-[1.8rem] sm:w-[2rem] lg:w-[2.4rem] ">
                        <Image src="/service-icons/qatar.svg" alt="qatar" width={40} height={40} priority={false}/>
                    </div>
                    <p className="text-white pl-2">Mobile App Development Company in Qatar
                    </p>
                </div>
                <div className="flex items-center">
                    <div className="w-[1.5rem] xss:w-[1.8rem] sm:w-[2rem] lg:w-[2.4rem] ">
                        <Image src="/service-icons/kochi.svg" alt="kochi" width={40} height={40} priority={false}/>
                    </div>
                    <p className="text-white pl-2">Mobile App Development Company in Kochi
                    </p>
                </div>
            </div>

            </div>

            {/* IOS app dev company in India */}
            <div className="w-full h-auto bg-white xl:p-5 xl:px-20 xss:px-5 pt-5 xs:p-5 sm:px-8 ">
            <h3 className='font-weight-400 font-semibold text-[#0E59F2] xss:mb-3 xl:text-2xl xl:mb-4 xss:mb-1text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] xl:text-[1.5rem] 3xl:text-[1.6rem] font-semibold'>
                IOS App Development Company in Hyderabad, India
            </h3>
            <div className="xl:text-sm text-[#7B7E86] xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base leading-relaxed 3xl:leading-8">
                <p className="pb-2">As a leading iOS app development company in India, Analogue IT Solutions is committed to delivering innovative, scalable, and user-centric iOS applications tailored to business needs. With deep expertise in iOS app development, we design and build apps that meet Apple&apos;s highest standards of quality, performance, and security. Recognized as one of the top iOS app development companies in Hyderabad, we bring your ideas to life with precision and innovation.</p>
                <p className="pb-2">Our team of skilled IOS developers in Hyderabad specializes in building intuitive, engaging, and feature-rich applications for iPhone and iPad. Beyond app development, Analogue also provides digital marketing and business strategy consulting, helping brands leverage technology to achieve their goals. Whether it&apos;s a startup or an enterprise, our iOS app development services ensure seamless digital experiences that drive growth.</p>
                <p className="pb-2">At Analogue IT Solutions, we don&apos;t just build apps — we craft experiences. Our iOS app development services in Hyderabad transform your vision into interactive, user-friendly, and high-performance applications.</p>
            </div>
            </div>

            {/* content under IOS app dev company in India */}
            <div className="w-full h-auto bg-white xl:p-5 xl:px-20 xss:px-5 pt-5 xs:p-5 sm:px-8 ">
            <h3 className='font-weight-400 font-semibold text-[#0E59F2] xss:mb-3 xl:text-2xl xl:mb-4 xss:mb-1text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] xl:text-[1.5rem] 3xl:text-[1.6rem] font-semibold'>
                Analogue IT Solutions - Best iOS App Development Services in Hyderabad
            </h3>
            <div className="xl:text-sm text-[#7B7E86] xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base leading-relaxed 3xl:leading-8">
                <p className="pb-2">Analogue IT Solutions has built a reputation as the best iOS app development company in Hyderabad by following a client-first approach. Our team collaborates closely with clients to brainstorm, strategize, and deliver top-notch iOS apps that stand out in today&apos;s competitive market.</p>
                <p className="pb-2">We are dedicated to developing iOS apps that are elegant, responsive, and seamlessly aligned with your business objectives. By blending creative design with robust development practices, we create digital products that leave a lasting impact on your users.</p>
            </div>
            </div>

            {/* why analogue it solutions */}
            <div className="w-full h-auto bg-white xl:p-5 xl:px-20 xss:px-5 pt-5 xs:p-5 sm:px-8 ">
            <h3 className='font-weight-400 font-semibold text-[#0E59F2] xss:mb-3 xl:text-2xl xl:mb-4 xss:mb-1text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] xl:text-[1.5rem] 3xl:text-[1.6rem] font-semibold '>
                Why Choose Analogue IT Solutions?
            </h3>
            <div className="xl:text-sm text-[#7B7E86] xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base leading-relaxed 3xl:leading-8">
                <p className="pb-2">Strict Non-Disclosure Agreement (NDA) to protect your ideas.</p>
                <p className="pb-2">Affordable yet high-quality iOS app development services</p>
                <p className="pb-2">Experienced iOS developers with expertise in Swift, Objective-C, and modern frameworks</p>
                <p className="pb-2">Fast and efficient development processes tailored to your timelines</p>
                <p className="pb-2">Apps designed with excellent usability and interactive experiences</p>
                <p className="pb-2">Reliable performance across all Apple devices</p>
                <p className="pb-2">Continuous updates, maintenance, and dedicated support</p>
                <p className="pb-2">Custom-built iOS solutions tailored to your business needs</p>
            </div>
            </div>

            {/* IOS app dev company in India */}
            <div className="w-full h-auto bg-white xl:p-5 xl:px-20 xss:px-5 pt-5 xs:p-5 sm:px-8 ">
            <h3 className='font-weight-400 font-semibold text-[#0E59F2] xss:mb-3 xl:text-2xl xl:mb-4 xss:mb-1text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] xl:text-[1.5rem] 3xl:text-[1.6rem] font-semibold'>
                Choose the Best iOS App Developers in Hyderabad
            </h3>
            <div className="xl:text-sm text-[#7B7E86] xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base leading-relaxed 3xl:leading-8">
                <p className="pb-2">Searching for expert iOS app developers in Hyderabad? Partner with Analogue IT Solutions! Our experienced professionals stay ahead of the curve with the latest Apple technologies and development trends, ensuring world-class iOS solutions for your business.</p>
                <p className="pb-2">Along with iOS apps, we also specialize in web development and e-commerce solutions, offering a complete suite of digital services to help you grow. From robust iOS applications to dynamic websites and scalable online stores, Analogue is your trusted digital partner.</p>
                <p className="pb-2">Though headquartered in Hyderabad, our iOS app development services extend globally, making us the preferred iOS app development company in Hyderabad, Telangana. Get in touch today and discover how Analogue can transform your business through cutting-edge iOS solutions.</p>
            </div>
            </div>

                    {/* faqs section */}
                    <div className="w-[86%] mx-auto pb-3 xss:mt-5">
                    <div>
                    <FrequentQuestions Question={IosfaqArray} />
                    </div>
                </div>

                {/* get a quote form */}
                <div>
                    <GetAQuoteForm />
                </div>

            <PopUpForm isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </div> 
        </>
    )
}



