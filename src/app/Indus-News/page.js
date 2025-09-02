import Image from "next/image";

export default function Responsive_IndusNews() {
  return (
    <>
      <div className="w-full min-h-screen bg-white overflow-hidden">
        
        {/* Header Section */}
            <div className="relative flex justify-center w-full bg-white ">
                                      <Image
                                        src="/AdobeTech-Images/Abstract Design.svg"
                                        width={480}
                                        height={180}
                                        alt="Abstract design background"
                                        className="object-contain w-full h-auto max-w-[300px] xss:max-w-[320px] xs:max-w-[360px] sm:max-w-[450px] "
                                        sizes="(max-width: 320px) 300px, (max-width: 360px) 320px, (max-width: 480px) 360px, (max-width: 640px) 450px, (max-width: 768px) 640px, 768px"
                                      />
                                      <div className="absolute top-12 xss:top-10 xs:top-11 sm:top-14 md:top-15 bg-white px-4">
                                        <h1 className="text-xl xss:text-2xl  sm:text-[1.7rem] md:text-[2rem] font-bold text-violet-950 text-center">
                                          Our Products
                                        </h1>
                                        <p className="text-xs xss:text-xs md:text-sm text-black leading-loose text-center  sm:mt-2">
                                          Stories of success
                                        </p>
                                      </div>
            </div>

        {/* News App Section */}
        <div className="pt-0 mt-0 flex flex-col xl:flex-row w-full gap-4 xss:gap-5  sm:gap-8 md:gap-10 lg:gap-12 xl:gap-4 2xl:gap-16 justify-center items-start px-4 xss:px-5 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20 3xl:px-24 py-2 xss:pb-5  ">
          <div className="w-full xl:w-1/2 px-3 xss:px-4 sm:px-6 md:px-8 lg:px-10 ">
            <p className="text-xl xss:text-lg sm:text-xl md:text-2xl  xl:text-[1.6rem] text-[#071637] font-semibold underline decoration-blue-500 decoration-2 xss:decoration-2 underline-offset-6 xss:underline-offset-10 sm:underline-offset-10 md:underline-offset-12 md:decoration-3">
              News App
            </p>
            <p className="xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6 mt-4  md:mt-7">
              Analogue is a premier mobile app development company in Hyderabad, specializing in creating and enhancing user experiences through innovative mobile and web applications. We focus on helping businesses expand and reach their target audience by collaborating with individuals and organizations to conceptualize and promote their products.
            </p>
          </div>
          <div className="w-full xl:w-1/2  px-3 xss:px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-1 py-4 xss:py-5 xs:py-6 sm:py-8 md:py-0">
            <Image
              className="rounded-lg bg-gray-200 w-full h-auto"
              src="/Industry-Images/Indus-News.svg"
              alt="Industry Image"
              width={600}
              height={300}
              sizes="(max-width: 320px) 100vw, (max-width: 360px) 90vw, (max-width: 480px) 80vw, (max-width: 640px) 70vw, (max-width: 768px) 60vw, (max-width: 1024px) 50vw, (max-width: 1280px) 45vw, 40vw"
            />
          </div>
        </div>

        {/* Methodology Section */}
        <div className="bg-[url('/Calendar-Images/calendar-bg.svg')] bg-cover bg-center w-full  xss:min-h-[300px] xs:min-h-[260px] sm:min-h-[350px] md:min-h-[300px] lg:min-h-[200px]  relative p-4 xss:p-2 sm:p-8 md:p-6 xl:p-10 2xl:p-20 flex xl:justify-start xss:justify-center">
          <div className="max-w-full xss:max-w-[90%]  sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl  text-white px-4 xss:px-2 sm:pl-6 md:pl-12 lg:pl-14  xl:w-2/3  ">
            <h2 className="xss:text-sm sm:text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] 3xl:text-[1.4rem]  font-bold leading-5 md:leading-6">
              A proven methodology for successful project delivery from conception to deployment.
            </h2>
            <p className="xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base  leading-5 sm:leading-6 mt-3 xss:mt-4 sm:mt-5 max-w-full xss:max-w-[95%]  sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:w-3/4">
              Analogue is a leading mobile app development company in Hyderabad, specializing in creating and enhancing user experiences through innovative mobile and web applications. We focus on helping businesses expand and reach their target audience by collaborating with individuals and organizations to conceptualize and promote their products.
            </p>
            
            <button className="bg-blue-500 text-white text-[10px] xss:text-[0.6rem]  sm:text-[0.8rem] md:text-md font-medium px-3 xss:px-2 xs:px-3  py-2 xss:py-2.5  rounded-lg mt-4 xss:mt-5 xs:mt-4 sm:mt-8 md:mt-4 hover:bg-blue-600 transition-colors">
              Contact Us
            </button>
          </div>
          <div className="xss:hidden xl:block absolute bottom-0  xl:-bottom-18 right-4 xss:right-5 xs:right-6 sm:right-8 md:right-10 lg:right-12 xl:right-10 2xl:right-30 3xl:right-30 2xl:top-50 3xl:top-30 w-[120px] xl:w-[450px] 3xl:w-[550px] h-auto">
            <Image
              className="rounded-lg w-full h-auto"
              src="/Industry-Images/Indus-common.svg"
              alt="Industry Image"
              width={700}
              height={600}
              sizes="(max-width: 320px) 120px, (max-width: 360px) 140px, (max-width: 480px) 160px, (max-width: 640px) 200px, (max-width: 768px) 250px, (max-width: 1024px) 300px, (max-width: 1280px) 350px, 400px"
            />
          </div>
        </div>
        <div className="w-full p-3 xl:hidden">
            <Image
              className="rounded-lg w-full h-auto"
              src="/Industry-Images/Indus-common.svg"
              alt="Industry Image"
              width={700}
              height={600}
              sizes="(max-width: 320px) 120px, (max-width: 360px) 140px, (max-width: 480px) 160px, (max-width: 640px) 200px, (max-width: 768px) 250px, (max-width: 1024px) 300px, (max-width: 1280px) 350px, 400px"
            />
          </div>

        {/* Business Benefits Section */}
        <div className="bg-white mx-4 xss:mx-2 sm:mx-3 md:mx-5 xl:mx-5 3xl:mx-20  p-4 xss:px-5 sm:px-5 md:px-8 xl:px-10 3xl:px-15 ">
          <p className="text-blue-600 text-xl xss:text-lg  sm:text-xl md:text-2xl  xl:text-[1.6rem]  font-medium md:mb-3 xl:mt-2 ">
            Business Benefits
          </p>
          <p className="xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6 mt-4 xss:mt-1 xl:mt-5 ">
            Analogue is a premier mobile app development company in Hyderabad, specializing in creating and enhancing user experiences through innovative mobile and web applications. Our focus lies in helping businesses expand and reach their target audience by collaborating with individuals and organizations to conceptualize and promote their products.
          </p>
          <p className=" xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] leading-5 sm:leading-6 xl:mt-4 xss:mt-1 xl:mb-5 " >
            Analogue is a Best mobile app development company in Hyderabad that specialises in creating and enhancing user experience through the design and development of mobile and web applications. Our focus lies in helping businesses expand and reach their specific customer base by collaborating with individuals and organisations to conceptualise and promote their products. Analogue is a Best mobile ain helping businesses expand and reach their specific customer base by co. Analogue is a Best mobile app development company in Hyderabad that specialises in creating and enhancing user experience through the design and development of mobile and web applications. Our focus lies in helping businesses expand and reach their specific customer base by collaborating with individuals and organisations to conceptualise and promote their products. Analogue is a Best mobile ain helping businesses expand and reach their specific customer base by co Analogue is a Best mobile app development company in Hyderabad that specialises in creating and enhancing user experience through the design and development of mobile and web applications. Our focus lies in
          </p>
        </div>
      </div>
    </>
  );
}

