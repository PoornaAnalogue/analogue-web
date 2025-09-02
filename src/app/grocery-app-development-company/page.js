import Image from "next/image";

export default function GroceryDeliveryAppDevelopment() {
  return (
    <>
      <div className="w-full min-h-screen bg-white overflow-hidden">
        {/* Header Section */}
        <div className="relative flex justify-center w-full bg-white ">
          <Image
            src="/AdobeTech-Images/AbstractDesign.jpg"
            width={480}
            height={180}
            alt="Abstract design background"
            className="object-contain w-full h-auto max-w-[300px] xss:max-w-[320px] xs:max-w-[360px] sm:max-w-[450px] "
            sizes="(max-width: 320px) 300px, (max-width: 360px) 320px, (max-width: 480px) 360px, (max-width: 640px) 450px, (max-width: 768px) 640px, 768px"
          />
          <div className="absolute top-12 xss:top-10 xs:top-10 sm:top-20 md:top-10 bg-white px-4">
            <h1 className="text-xl xss:text-2xl xs:text-3xl sm:text-4xl md:text-[2rem] font-bold text-violet-950 text-center">
              Industries
            </h1>
            <p className="text-xs xss:text-xs md:text-sm text-black leading-loose text-center mt-2 sm:mt-2">
              Crafted with love since 2017
            </p>
          </div>
        </div>

        {/* News App Section */}
        <div className="pt-0 mt-0 flex flex-col xl:flex-row w-full gap-4 xss:gap-5  sm:gap-8 md:gap-10 lg:gap-12 xl:gap-4 2xl:gap-16 justify-center items-start px-4 xss:px-5 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20 3xl:px-24 py-2 xss:pb-5  ">
          <div className="w-full xl:w-1/2 px-3 xss:px-4 sm:px-6 md:px-8 lg:px-10 ">
            <h2 className="text-xl xss:text-xl sm:text-3xl md:text-3xl  xl:text-3xl text-[#071637] font-semibold underline decoration-blue-500 decoration-3 xss:decoration-4 underline-offset-6 xss:underline-offset-8 sm:underline-offset-10">
              Grocery Delivery App
            </h2>
            <p className="text-[10px] xss:text-xs sm:text-base  xl:text-[1.125rem] text-[#7B7E86] leading-relaxed mt-4 xss:mt-5 sm:mt-8 md:mt-10">
              Analogue is a premier mobile app development company in Hyderabad, specializing in creating and enhancing user experiences through innovative mobile and web applications. We focus on helping businesses expand and reach their target audience by collaborating with individuals and organizations to conceptualize and promote their products.
            </p>
          </div>
          <div className="w-full xl:w-1/2  px-3 xss:px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-1 py-4 xss:py-5 xs:py-6 sm:py-8 md:py-10">
            <Image
              className="rounded-lg bg-gray-200 w-full h-auto"
              src="/Industry-Images/Indus-Delivery.svg"
              alt="Industry Image"
              width={600}
              height={300}
              sizes="(max-width: 320px) 100vw, (max-width: 360px) 90vw, (max-width: 480px) 80vw, (max-width: 640px) 70vw, (max-width: 768px) 60vw, (max-width: 1024px) 50vw, (max-width: 1280px) 45vw, 40vw"
            />
          </div>
        </div>

        {/* Methodology Section */}
        <div className="bg-[url('/Calendar-Images/calendar-bg.svg')] bg-cover bg-center w-full min-h-[280px] xss:min-h-[300px] sm:min-h-[350px] md:min-h-[380px] lg:min-h-[400px]  relative p-4 xss:p-2 sm:p-8 md:p-10 lg:p-12 xl:p-16 2xl:p-20">
          <div className="max-w-full xss:max-w-[90%]  sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto text-white px-4 xss:px-2 sm:pl-6 md:pl-12 lg:pl-14 ">
            <h2 className="text-lg xss:text-sm sm:text-xl md:text-2xl xl:text-3xl  font-bold leading-tight">
              A proven methodology for successful project delivery from conception to deployment.
            </h2>
            <p className="text-[10px] xss:text-xs sm:text-base xl:text-[1.125rem]  leading-relaxed mt-3 xss:mt-4 sm:mt-6 md:mt-8 max-w-full xss:max-w-[95%]  sm:max-w-2xl md:max-w-3xl lg:max-w-4xl">
              Analogue is a leading mobile app development company in Hyderabad, specializing in creating and enhancing user experiences through innovative mobile and web applications. We focus on helping businesses expand and reach their target audience by collaborating with individuals and organizations to conceptualize and promote their products.
            </p>
            <button className="bg-blue-500 text-white text-[10px] xss:text-xs xs:text-sm sm:text-base md:text-lg font-medium px-3 xss:px-4 xs:px-5 sm:px-6 py-2 xss:py-2.5 xs:py-3 rounded-lg mt-4 xss:mt-5 xs:mt-6 sm:mt-8 hover:bg-blue-600 transition-colors">
              Contact Us
            </button>
          </div>
          <div className="xss:hidden xl:block absolute bottom-0  xl:-bottom-22 right-4 xss:right-5 xs:right-6 sm:right-8 md:right-10 lg:right-12 xl:right-10 2xl:right-20 3xl:-bottom-30 w-[120px] xl:w-[450px] 3xl:w-[530px] h-auto">
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
        <div className="bg-white m-4 xss:m-2 sm:m-3 md:m-5 xl:m-5 3xl:m-20  p-4 xss:p-5 sm:p-5 md:p-8 xl:p-10 3xl:p-15">
          <h2 className="text-blue-600 text-xl xss:text-2xl  sm:text-3xl  xl:text-3xl  font-medium">
            Business Benefits
          </h2>
          <p className="text-[10px] xss:text-xs xs:text-sm sm:text-base xl:text-[1.125rem] 2xl:text-[1.25rem] text-[#7B7E86] leading-relaxed mt-4 xss:mt-5 sm:mt-8">
            Analogue is a premier mobile app development company in Hyderabad, specializing in creating and enhancing user experiences through innovative mobile and web applications. Our focus lies in helping businesses expand and reach their target audience by collaborating with individuals and organizations to conceptualize and promote their products.
          </p>
        </div>
      </div>
    </>
  );
}

