
"use client";
import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import teamData from "@/TeamData/teamdata";

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
      <section className="bg-white px-4 sm:px-6 xss:mb-5 lg:mb-10 md:px-8 lg:px-20">
        {/* HEADER */}
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
                      About Us
                    </h1>
                    <p className="text-xs xss:text-xs xs:text-base sm:text-lg text-black leading-loose text-center mt-2 sm:mt-3">
                      Stories of success
                    </p>
                  </div>
          </div>

        {/* SUCCESS STORY */}
        <div className="grid xss:grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          <div className="bg-[#072060] text-white p-5 rounded-lg shadow-md flex flex-col justify-between max-w-full sm:max-w-[600px] lg:max-w-[800px]">
            <div>
              <span className="bg-[#363b70] xl:text-[0.65rem] xss:px-3 xss:py-2 xss:text-subsmall xl:px-3 xl:py-2 rounded-full uppercase">
                About Us
              </span>
              <h3 className="text-xl sm:text-xl xl:text-[1.4rem] 2xl:text-2xl font-bold mt-4 mb-3">
                Stories of success
              </h3>
              <p className="text-sm xss:text-xs md:text-sm 2xl:text-base lg:text-small xl:text-sm 3xl:text-base text-gray-200 xl:leading-5 2xl:leading-6">
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
          <div className="flex flex-col sm:flex-row lg:flex-col lg:flex-row gap-6">
            {/* Successful Projects */}
            <div
              ref={projectsRef}
              className="bg-blue-100 p-6 rounded-lg shadow-sm text-center sm:text-left flex-1">
              <div className="mb-4">
                <p className="text-2xl sm:text-3xl font-extrabold text-[#072060]">
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
                <p className="2xl:text-lg lg:text-md text-gray-700 mt-1">
                  Successful Projects
                </p>
              </div>
              <div className="flex justify-center ">
              <Image
                src="/gifs/process-done.gif"
                alt="Process"
                width={150}
                height={90}
                unoptimized
                className="object-cover mx-auto xss:w-[13rem] xss:h-[9rem] xl:w-[14rem] xl:h-[9rem] text-center"
              />
              </div>
            </div>

            {/* Happy Clients */}
            <div
              ref={clientsRef}
              className="bg-blue-100 p-6 rounded-lg shadow-sm text-center xss:text-left flex-1"
            >
              <div className="mb-4">
                <p className="text-2xl sm:text-3xl font-extrabold text-[#072060]">
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
                <p className="2xl:text-lg lg:text-md text-gray-700 mt-1">Happy Clients</p>
              </div>
              <div className="flex justify-center">
              <Image
                src="/gifs/happy-clients.gif"
                alt="happy-clients"
                width={150}
                height={90}
                unoptimized
                className="object-contain xss:w-[14rem] xss:h-[9rem] mx-auto sm:mx-0"
              />
              </div>
            </div>
          </div>
        </div>

        {/* IMAGE & SKILLED EXPERTS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Office Image */}
        <div className="md:col-span-3 overflow-hidden rounded-lg shadow-xs order-2 sm:order-2 md:order-1">
          <Image
            src="/aboutimages/office.svg"
            alt="office.svg"
            width={700}
            height={500}
            className="w-full h-full object-cover"/>
      </div>

      {/* Skilled Experts */}
      <div
      ref={expertsRef}
      className="xss:col-span-1  w-full bg-blue-100 p-6 rounded-lg shadow-sm text-center xss:text-left flex-1 order-1 sm:order-1 md:order-2"
    >
      <div className="mb-4">
        <p className="text-2xl sm:text-3xl font-extrabold text-[#072060]">
          {expertsInView ? (
            <CountUp start={1} end={40} duration={2} key="experts" />
          ) : (
            0
          )}
          +
        </p>
        <p className="2xl:text-lg lg:text-md text-gray-700 mt-1">Skilled Experts</p>
      </div>
      <div className="flex justify-center">
        <Image
          src="/gifs/team.gif"
          alt="Team"
          width={150}
          height={90}
          unoptimized
          className="object-contain mx-auto xl:w-[15rem] xl:h-[9rem] sm:mx-0"
        />
      </div>
    </div>

    </div>
    </section>

      {/* SECTION 2 */}
      <section className="w-full bg-white">
         <div className="relative w-full">
        {/* Background Image */}
        <div className="relative w-full h-[15rem] xss:h-[20rem] sm:h-[20rem] md:h-[23rem] lg:h-[22rem] 2xl:h-[28rem] 3xl:h-[26rem] overflow-hidden">
          <Image
            src="/aboutimages/section2bgimg.jpg"
            alt="Section Background"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
          />
        </div>

        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-start xl:w-full px-4 sm:px-8 md:px-12 2xl:pl-20 3xl:pl-35 text-white">
          <h2 className="text-2xl xss:text-lg sm:text-xl md:text-3xl lg:text-subheading lg:leading-9 xl:text-[2.1rem] 2xl:text-[2.5rem] 2xl:leading-13 3xl:text-subbigheading font-bold mb-4">
            Create an effective <br /> web and app Design
          </h2>
          <p className="text-sm xss:text-xs sm:leading-5 md:text-sm 2xl:text-base 3xl:leading-8 max-w-xl lg:leading-6 md:leading-7 mb-6">
            Analogue is a Best mobile app development company in Hyderabad
            that specialises in creating and enhancing user experience
            through the design and development of mobile and web
            applications. Our focus lies in helping businesses expand and 
            reach their specific customer base by collaborating with
            individuals and organisations to conceptualise and promote their
            products.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 xss:px-2 xss:py-2 xss:text-xs xl:px-6 2xl:text-base lg:px-3 lg:py-2 py-2 xl:py-3 rounded-lg font-medium transition">
            Contact Us
          </button>
        </div>

        {/* Decorative Rectangle */}
        <div className="absolute xss:bottom-0 xss:right-15 xs:right-20 md:bottom-[-10] md:right-30 lg:bottom-[-10] lg:right-40 xl:bottom-0 xl:right-37 2xl:bottom-20 2xl:right-45 3xl:bottom-10 3xl:right-60 translate-x-1/4 translate-y-1/2 w-full max-w-[200px] md:max-w-[22rem] sm:max-w-[15rem] lg:max-w-[26rem] xl:max-w-[28rem] 2xl:max-w-[34rem] 2xl:h-[20rem] 3xl:max-w-[38rem] 3xl:h-[25rem]">
          <Image
            src="/gifs/office-video.gif"
            alt="Rectangle"
            width={800}
            height={500}
            unoptimized
            className="w-full h-auto rounded-xl"
          />
        </div>
      </div>


        <div className="h-20 sm:h-32"></div>

        {/* Founder */}
        <div className="px-4 sm:px-8 md:px-16 xl:py-12">
          <h2 className="text-3xl xss:text-4xl md:text-7xl  xl:text-8xl  font-bold mb-8">
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

            <div className="text-center md:text-left max-w-2xl xl:mt-10">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                Srikanth Veturi
              </h3>
              <p className="text-gray-600 text-sm">B.E</p>
              <p className="text-gray-800 font-semibold my-2">Founder CEO</p>
              <p className="text-gray-600 text-sm xss:text-xs md:text-sm 2xl:text-base leading-6 sm:leading-7">
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

        <div className="px-4 sm:px-8 md:px-16 py-12">
          {/* <h2 className="text-3xl xss:text-4xl md:text-7xl  xl:text-8xl  font-bold mb-8">
            <span className="text-gray-400">Our </span>
            <span className="text-blue-300">CFO</span>
          </h2> */}

          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
            <div>
              <Image
                src="/aboutimages/ceoimg.svg"
                alt="CFO"
                width={400}
                height={400}
                className="rounded-xl w-full max-w-xs sm:max-w-sm object-cover"
              />
            </div>

            <div className="text-center md:text-left max-w-2xl xl:mt-10">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                Akhil Kokkonda
              </h3>
              <p className="text-gray-800 font-semibold my-2">B.E CFO</p>
              <p className="text-gray-600 text-sm xss:text-xs md:text-sm 2xl:text-base leading-6 sm:leading-7">
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

        {/* <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6 xss:px-8 pb-10 md:px-15">
          {teamData.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center">
            <Image
              src={member.img}
              alt={member.name}
              width={200}
              height={200}
              className="rounded-lg object-cover w-full h-auto"/>
            <h3 className="mt-4 xss:text-sm lg:text-lg font-semibold text-gray-900">{member.name}</h3>
            <p className=" xss:text-xs lg:text-sm text-gray-600">{member.role}</p>
          </div>
        ))}
      </div> */}
      </section>
    </>
  );
}
