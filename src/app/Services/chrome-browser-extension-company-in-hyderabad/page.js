import { FaChevronDown } from "react-icons/fa";
import Image from "next/image";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";


export default function ChromeExtension(){
    const icons = [
        "/service-icons/React-logo.png",
        "/service-icons/Angular-logo.png",
        "/service-icons/Vue-logo.png",
        "/service-icons/Next-logo.png",
        "/service-icons/Tensorflow-logo.png",
        "/service-icons/Amazonsagemaker-logo.png",
        "/service-icons/Flutter-logo.png",
        "/service-icons/React-logo.png",
        "/service-icons/Kotlin-logo.png",
        "/service-icons/Laravel-logo.png",
        "/service-icons/Spark-logo.png",
        "/service-icons/Springboot-logo.png",
        "/service-icons/Sas-logo.png",
        "/service-icons/Python-logo.png",
        "/service-icons/Dotnet-logo.png",
        "/service-icons/Keras-logo.png",
        "/service-icons/R-logo.png",
        "/service-icons/Java-logo.png",
        "/service-icons/Php-logo.png",
        "/service-icons/Node-logo.png",
    ];

    const DesignIcons = ["/service-icons/Figma-logo.png","/service-icons/Png-logo.png","/service-icons/Ai-logo.png","/service-icons/Jitter-logo.png","/service-icons/Lottiefiles-logo.png","/service-icons/Search-logo.png"];

    return (
        <>
        <div className="hero flex flex-col justify-center items-center bg-white">
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
            
            <div className="px-4 xss:px-6 xs:px-8 sm:px-10 md:px-12 lg:px-16 xl:px-20 flex flex-col space-y-4">
                <h1 className="text-lg xss:text-md xs:text-lg sm:text-xl md:text-2xl lg:text-2xl 3xl:text-[1.6rem] font-semibold underline xss:underline-offset-6 lg:underline-offset-14 xss:underline-offset-1 text-black xs:underline-offset-12 sm:underline-offset-10 md:underline-offset-15 decoration-2 xss:decoration-2 xs:decoration-2 sm:decoration-4 md:decoration-4 lg:decoration-4 decoration-blue-600 leading-snug">Chrome Extension</h1>
                <h3 className="NewFont text-base xss:text-[0.8rem] sm:text-base md:text-lg lg:text-xl 3xl:text-2xl text-blue-500 font-medium leading-snug mt-2 xss:mt-3 xs:mt-2 sm:mt-4 md:mt-5 lg:mt-5">We are the best Chrome Browser Extension Development Company in Hyderabad, India</h3>
                <p className="text-gray-500 leading-relaxed text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base mt-2 xss:mt-1 xs:mt-2 sm:mt-4 md:mt-5 lg:mt-5">Analogue is a Best mobile app development company in Hyderabad that specialises in creating and enhancing user experience through the design and development of mobile and web applications. Our focus lies in helping businesses expand and reach their specific customer base by collaborating with individuals and organisations to conceptualise and promote their products. Analogue is a Best mobile ain helping businesses expand and reach their specific customer base by co</p>
                <p className="text-gray-500 leading-relaxed text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base mt-2 xss:mt-3 xs:mt-2 sm:mt-4 md:mt-5 lg:mt-5">Analogue is a Best mobile app development company in Hyderabad that specialises in creating and enhancing user experience through the design and development of mobile and web applications. Our focus lies in helping businesses expand and reach their specific customer base by collaborating with individuals and organisations to conceptualise and promote their products. Analogue is a Best mobile ain helping businesses expand and reach their specific customer base by co. Analogue is a Best mobile app development company in Hyderabad that specialises in creating and enhancing user experience through the design and development of mobile and web applications. Our focus lies in helping businesses expand and reach their specific customer base by collaborating with individuals and organisations to conceptualise and promote their products. Analogue is a Best mobile ain helping businesses expand and reach their specific customer base by co Analogue is a Best mobile app development company in Hyderabad that specialises in creating and enhancing user experience through the design and development of mobile and web applications. Our focus lies in.</p>
            </div>

            {/* middle group mobiles and contact us button section */}
            <div className="mt-4 xss:mt-6 xs:mt-8 sm:mt-10 md:mt-12 lg:mt-15">
                            <div className="relative w-full h-auto min-h-[200px] xss:min-h-[250px] xs:min-h-[200px] sm:min-h-[350px] md:min-h-[400px] lg:h-[400px] bg-[url('/service-icons/app-dev-bg.jpg')] bg-cover bg-center flex flex-col lg:flex-row justify-end items-center">
                                <div className="w-full lg:w-[48%] 2xl:w-[50%] lg:absolute lg:inset-y-0 lg:left-0 p-4 xss:p-6 xs:p-8 sm:p-10 md:p-12 lg:p-11 xl:p-9 2xl:p-10">
                                    <h1 className="text-white text-lg xss:text-md xs:text-lg sm:text-xl md:text-2xl lg:text-2xl 3xl:text-[1.6rem] font-bold  xss:leading-tight 2xl:leading-loose">Crafting Exceptional Android Apps for Your Business</h1>
                                    <p className="text-white text-xs xss:text-xs xs:text-xs sm:text-sm md:text-sm lg:text-[0.75rem] xl:text-sm 3xl:text-base xss:leading-5 xl:leading-7 mt-2 xss:mt-3 xs:mt-4 sm:mt-4 md:mt-5 lg:mt-3 xl:mt-4 2xl:mt-5">At Analogue IT Solutions, we specialise in expert Android app development, employing advanced technologies such as React Native and Flutter. Whether you need a robust e-commerce platform or a tailored mobile solution, our team is dedicated to delivering high-quality Android applications that enhance user experience and drive business success. Trust us to bring your app vision to life with precision and innovation</p>
                                    <button className="bg-blue-700 text-white rounded p-2 xss:p-2 xs:p-2 sm:p-3 md:p-3 lg:p-2 xl:p-2 2xl:p-3 mt-2 lg:mt-4 xss:mt-3 xs:mt-4 sm:mt-4 md:mt-4 lg:mt-2 xl:mt-3 2xl:mt-4 text-xs xss:text-xs xs:text-sm sm:text-sm md:text-sm lg:text-[0.65rem] xl:text-xs 2xl:text-sm">Contact Us</button>
                                </div>
                                <div className="w-full lg:w-[50%] h-[200px] xss:h-[250px] sm:h-[250px] md:h-[300px] lg:h-full">
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

            {/* dev tools icons */}
            <div className="leading-relaxed p-4 xss:p-6 xs:p-8 sm:p-10 md:p-12 lg:p-16 xl:p-20">
                <h1 className="text-blue-700 font-semibold text-lg xss:text-lg xs:text-lg sm:text-2xl md:text-2xl lg:text-2xl w-full leading-loose">Development tools we use : </h1>
                <div className="flex flex-wrap gap-4 xss:gap-4 xs:gap-5 sm:gap-5 md:gap-6 lg:gap-6 mt-2 xss:mt-3 xs:mt-4 sm:mt-4 md:mt-5 lg:mt-5">
                    {icons.map((src, index) => (
                        <Image
                            key={index}
                            src={src}
                            alt={`Icon ${index + 1}`}
                            width={30}
                            height={30}
                            className="object-contain w-[25px] h-[25px] xss:w-[30px] xss:h-[30px] xs:w-[35px] xs:h-[35px] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] lg:w-[45px] lg:h-[45px]"
                        />
                    ))}
                </div>
                <h1 className="text-blue-700 font-semibold text-lg xss:text-lg xs:text-lg sm:text-2xl md:text-2xl lg:text-2xl leading-loose mt-4 xss:mt-5 xs:mt-6 sm:mt-6 md:mt-7 lg:mt-7">Designing tools we use : </h1>
                <div className="flex flex-wrap gap-4 xss:gap-4 xs:gap-5 sm:gap-5 md:gap-6 lg:gap-6 mt-2 xss:mt-3 xs:mt-4 sm:mt-4 md:mt-5 lg:mt-5">
                    {DesignIcons.map((item, index) => (
                        <Image
                            key={index}
                            src={item}
                            alt={`Icon ${index + 1}`}
                            width={index === 0 || index >= DesignIcons.length - 2 ? 20 : 40}
                            height={index === 0 || index >= DesignIcons.length - 2 ? 20 : 40}
                            className="object-contain w-[20px] h-[20px] xss:w-[25px] xss:h-[25px] sm:w-[25px] sm:h-[25px] md:w-[25px] md:h-[25px] lg:w-[35px] lg:h-[35px]"
                        />
                    ))}
                </div>
                <p className="text-gray-500 text-xs xss:text-xs xs:text-xs sm:text-sm md:text-sm lg:text-subbody 3xl:text-base lg:leading-6 mt-4 xss:mt-6 xs:mt-8 sm:mt-8 md:mt-10 lg:mt-10">Analogue is a Best mobile app development company in Hyderabad that specialises in creating and enhancing user experience through the design and development of mobile and web applications. Our focus lies in helping businesses expand and reach their specific customer base by collaborating with individuals and organisations to conceptualise and promote their products. Analogue is a Best mobile ain helping businesses expand and reach their specific customer base by co Analogue is a Best mobile app development company in Hyderabad that specialises in creating and enhancing user experience through the design and development of mobile and web applications. Our focus lies in helping businesses expand and reach their specific customer base by collaborating with individuals and organisations to conceptualise and promote their products. Analogue is a Best mobile ain helping businesses expand and reach their specific customer base by co</p>
            </div>
        </div> 
        </>
    )
}



