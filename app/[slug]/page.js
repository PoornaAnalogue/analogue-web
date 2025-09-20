// "use client";
import React from "react";
import Lottie from "lottie-react";
import techData from "@/app/TechnologiesDyn/tech.json";
import industriesData from "@/app/TechnologiesDyn/indus.json";
import IndusAnime from "@/animations/industry.json"

// Technology Components
import TechDetails from "../TechnologiesDyn/components/TechDetails";
import TechCarousel from "../TechnologiesDyn/components/TechCarousel";
import TechBenefits from "@/app/TechnologiesDyn/components/TechBenefits";


// Common Components
import GetAQuoteForm from "@/components/get-quote-form";
import FrequentQuestions from "@/components/faqs-page";
import { IndusHeadline, IndusTagline, TechHeadline, TechTagline } from "@/app/TechnologiesDyn/commonCarousel";
import Image from "next/image";
import IndusDetails from "@/app/TechnologiesDyn/components/IndusDetails";
import Navbar from "@/components/navbar-page";
// import Header from "@/components/header-page";

export default function SlugPage({ params }) {
  const { slug } =  params;

  // First check in Technologies
  const tech = techData.find((t) => t.slug === slug);

  if (tech) {
    return (
      <>
        <div className="min-h-screen w-full bg-white flex flex-col items-center">
          {/* Header Section */}
          {/* <Header headline={TechHeadline} tagline={TechTagline} /> */}

          {/* Details */}
          <TechDetails textGroups={tech.textGroups} subtitle={tech.subtitle} mainImage={tech.images.main} description={tech.description} highlightWords={tech.highlightWords} />

          {/* Carousel */}
          <TechCarousel />

          {/* Benefits + FAQs */}
          <div className=" w-full px-4 sm:px-10 md:px-14 lg:px-16 xl:px-20 pb-3">
            <TechBenefits blocks={tech.blocks} />
            <FrequentQuestions Question={tech.faqs} />
          </div>
        </div>

        {/* Quote Form */}
        <GetAQuoteForm />
      </>
    );
  }

  // Then check in Industries
  const industry = industriesData.find((i) => i.slug === slug);

  if (industry) {
    return (
      <>
        <div className="w-full min-h-screen bg-white overflow-hidden">
                <Navbar />
                {/* Header Section */}
                <Header headline={IndusHeadline} tagline={IndusTagline} />
                
                {/* News App Section */}
                <IndusDetails name={industry.name} mainImage={industry.mainImage} description={industry.description} />                
                
                {/* Methodology Section */}
                <div className="bg-[url('/Calendar-Images/calendar-bg.svg')] bg-cover bg-center w-full min-h-[280px] xss:min-h-[300px] sm:min-h-[350px] md:min-h-[380px] lg:min-h-[400px]  relative p-4 xss:p-2 sm:p-8 md:p-10 lg:p-12 xl:p-16 2xl:p-20">
                  <div className="max-w-full xss:max-w-[90%]  sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto text-white px-4 xss:px-2 sm:pl-6 md:pl-12 lg:pl-14 ">
                    <h2 className="text-lg xss:text-sm sm:text-xl md:text-2xl xl:text-3xl  font-bold leading-tight">
                      A proven methodology for successful project delivery from
                      conception to deployment.
                    </h2>
                    <p className="text-[10px] xss:text-xs sm:text-base xl:text-[1.125rem]  leading-relaxed mt-3 xss:mt-4 sm:mt-6 md:mt-8 max-w-full xss:max-w-[95%]  sm:max-w-2xl md:max-w-3xl lg:max-w-4xl">
                      Analogue is a leading mobile app development company in Hyderabad,
                      specializing in creating and enhancing user experiences through
                      innovative mobile and web applications. We focus on helping
                      businesses expand and reach their target audience by collaborating
                      with individuals and organizations to conceptualize and promote
                      their products.
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
                    Analogue is a premier mobile app development company in Hyderabad,
                    specializing in creating and enhancing user experiences through
                    innovative mobile and web applications. Our focus lies in helping
                    businesses expand and reach their target audience by collaborating
                    with individuals and organizations to conceptualize and promote
                    their products.
                  </p>
                </div>
               
              </div>
               

              <div className="border-2 bg-black xss:hidden xl:block absolute bottom-0  xl:-bottom-22 right-4 xss:right-5 xs:right-6 sm:right-8 md:right-10 lg:right-12 xl:right-10 2xl:right-20 3xl:-bottom-30 w-[120px] xl:w-[450px] 3xl:w-[530px] h-auto">
                    <Lottie
                     animationData = {IndusAnime} 
                      className="border-2 border-red-300 rounded-lg w-full h-auto"
                      src="/Industry-Images/Indus-common.svg"
                      alt="Industry Image"
                      width={700}
                      height={600}
                      sizes="(max-width: 320px) 120px, (max-width: 360px) 140px, (max-width: 480px) 160px, (max-width: 640px) 200px, (max-width: 768px) 250px, (max-width: 1024px) 300px, (max-width: 1280px) 350px, 400px"
                    />
                  </div>
      </>
    );
  }
  

  // Not found case
  return <h1 className="text-center mt-20">Page Not Found</h1>;
}
