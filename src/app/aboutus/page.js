
"use client";
import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function AboutPage() {
  // Separate refs for each number so they animate independently
  const [projectsRef, projectsInView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });
  const [clientsRef, clientsInView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });
  const [expertsRef, expertsInView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <>
      <section className="bg-white py-12 px-4 sm:px-6 md:px-8 lg:px-20">
        {/* HEADER */}
        <div className="flex justify-center">
          <div className="w-full md:w-3/4 lg:w-1/2 text-center mb-12 py-12 sm:py-16 bg-[url('/Abstractdesign.png')] bg-no-repeat bg-center bg-cover rounded-lg">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-2">
              About Us
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Stories of success
            </p>
          </div>
        </div>

        {/* SUCCESS STORY */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-[#072060] text-white p-5 rounded-lg shadow-md flex flex-col justify-between max-w-full sm:max-w-[600px] lg:max-w-[800px]">
            <div>
              <span className="bg-blue-700 text-xs px-3 py-1 rounded-full uppercase">
                About Us
              </span>
              <h3 className="text-xl sm:text-2xl font-bold mt-4 mb-3">
                Stories of success
              </h3>
              <p className="text-sm sm:text-base text-gray-200 leading-6 sm:leading-7">
                Analogue is a Best mobile app development company in Hyderabad
                that specialises in creating and enhancing user experience
                through the design and development of mobile and web
                applications. Our focus lies in helping businesses expand and
                reach their specific customer base by collaborating with
                individuals and organisations to conceptualise and promote their
                products.
              </p>
            </div>
          </div>

          {/* SUCCESSFUL PROJECTS & HAPPY CLIENTS */}
          <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-6">
            {/* Successful Projects */}
            <div
              ref={projectsRef}
              className="bg-blue-100 p-6 rounded-lg shadow-sm text-center sm:text-left flex-1"
            >
              <div className="mb-4">
                <p className="text-2xl sm:text-3xl font-bold text-[#072060]">
                  {projectsInView ? (
                    <CountUp
                      start={1}
                      end={250}
                      duration={2}
                      key={projectsInView ? "projects" : "projects"}
                    />
                  ) : (
                    0
                  )}
                  +
                </p>
                <p className="text-sm text-gray-700 mt-1">
                  Successful Projects
                </p>
              </div>
              <Image
                src="/aboutimages/processdone.svg"
                alt="Process"
                width={150}
                height={80}
                className="object-contain mx-auto sm:mx-0"
              />
            </div>

            {/* Happy Clients */}
            <div
              ref={clientsRef}
              className="bg-blue-100 p-6 rounded-lg shadow-sm text-center sm:text-left flex-1"
            >
              <div className="mb-4">
                <p className="text-2xl sm:text-3xl font-bold text-[#072060]">
                  {clientsInView ? (
                    <CountUp
                      start={1}
                      end={250}
                      duration={2}
                      key={clientsInView ? "clients" : "clients"}
                    />
                  ) : (
                    0
                  )}
                  +
                </p>
                <p className="text-sm text-gray-700 mt-1">Happy Clients</p>
              </div>
              <Image
                src="/aboutimages/happy.svg"
                alt="Happy Clients"
                width={150}
                height={80}
                className="object-contain mx-auto sm:mx-0"
              />
            </div>
          </div>
        </div>

        {/* IMAGE & SKILLED EXPERTS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="col-span-3 overflow-hidden rounded-lg shadow-md">
            <Image
              src="/aboutimages/office.svg"
              alt="office.svg"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Skilled Experts */}
          <div
            ref={expertsRef}
            className="bg-blue-100 p-6 rounded-lg shadow-sm text-center sm:text-left"
          >
            <div className="mb-4">
              <p className="text-2xl sm:text-3xl font-bold text-[#072060]">
                {expertsInView ? (
                  <CountUp
                    start={1}
                    end={40}
                    duration={2}
                    key={expertsInView ? "experts" : "experts"}
                  />
                ) : (
                  0
                )}
                +
              </p>
              <p className="text-sm text-gray-700 mt-1">Skilled Experts</p>
            </div>
            <Image
              src="/aboutimages/team.svg"
              alt="Team"
              width={120}
              height={80}
              className="object-contain mx-auto sm:mx-0"
            />
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="w-full bg-white">
    
         
         

          {/* SECTION 2 */}

          <div className="relative w-full">
            {/* Background Image */}
            <Image
              src="/aboutimages/section2bgimg.jpg"
              alt="Section Background"
              width={1920}
              height={1080}
              className="w-full h-auto object-cover"
            />

            {/* Overlay Text */}
            <div className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-12 lg:px-20 text-white rounded-lg">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Create an effective <br /> web and app Design
              </h2>
              <p className="text-sm sm:text-base md:text-lg mb-6 max-w-xl leading-6 sm:leading-7">
                Analogue is a Best mobile app development company in Hyderabad
                that specialises in creating and enhancing user experience
                through the design and development of mobile and web
                applications. Our focus lies in helping businesses expand and
                reach their specific customer base by collaborating with
                individuals and organisations to conceptualise and promote their
                products.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition">
                Contact Us
              </button>
            </div>

            {/* Decorative Rectangle */}
            <div className="absolute right-4 sm:right-6 lg:right-8 -bottom-[70px]">
              <Image
                src="/aboutimages/Rectangle.svg"
                alt="Rectangle"
                width={300}
                height={200}
                className="h-auto w-full max-w-xs sm:max-w-sm lg:max-w-md"
              />
            </div>
          </div>

          
        

        <div className="h-20 sm:h-32"></div>

        {/* Founder */}
        <div className="px-4 sm:px-8 md:px-16 py-12">
          <h2 className="text-3xl sm:text-4xl  md:text-8xl  font-bold mb-8">
            <span className="text-gray-400">Our </span>
            <span className="text-blue-300">Founder</span>
          </h2>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
            <div>
              <Image
                src="/aboutimages/ceoimg.svg"
                alt="Founder"
                width={400}
                height={400}
                className="rounded-xl w-full max-w-xs sm:max-w-sm object-cover"
              />
            </div>

            <div className="text-center md:text-left max-w-2xl">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                Srikanth Veturi
              </h3>
              <p className="text-gray-600 text-sm">B.E</p>
              <p className="text-gray-800 font-semibold my-2">Founder xxxxx</p>
              <p className="text-gray-600 text-sm leading-6 sm:leading-7">
                Analogue is a Best mobile app development company in Hyderabad
                that specialises in creating and enhancing user experience
                through the design and development of mobile and web
                applications. Our focus lies in helping businesses expand and
                reach their specific customer base by collaborating with
                individuals and organisations to conceptualise and promote their
                products. Analogue is a Best mobile in helping businesses expand
                and reach their specific customer base by co.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
