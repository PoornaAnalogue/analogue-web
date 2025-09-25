"use client";
import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import teamData from "@/app/websiteData/teamdata";
import { delay, motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react"; 

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

  const [initialX, setInitialX] = useState("100px"); // Default for SSR

  useEffect(() => {
    // Set initialX based on window.innerWidth after mounting
    setInitialX(window.innerWidth >= 768 ? "500px" : "100px");
  }, []);

  return (
    <>
      <section className="bg-white px-4 sm:px-6 xss:mb-5 lg:mb-10 md:px-8 xl:px-10">
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

        {/* SECTION 1 */}
        <section className="section-container-1">
          {/* SUCCESS STORY */}
          <div className="grid xss:grid-cols-1 lg:grid-cols-2 gap-6 xss:mb-5 xl:mb-10">
            {/* LEFT BLOCK */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { scale: 0.7, opacity: 0 },
                visible: { scale: 1, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
              }}
              className="bg-[#072060] text-white p-5 rounded-lg shadow-md flex flex-col justify-between max-w-full sm:max-w-[600px] lg:max-w-[800px]"
            >
              <motion.div
                variants={{
                  hidden: { scale: 1.4 },
                  visible: { scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
                }}
              >
                <span className="bg-[#363b70] xl:text-[0.65rem] xss:px-3 xss:py-2 xss:text-subsmall xl:px-3 xl:py-2 rounded-full uppercase">
                  About Us
                </span>
                <h3 className="text-xl sm:text-xl xl:text-[1.4rem] 2xl:text-2xl font-bold mt-4 mb-3">
                  Stories of success
                </h3>
                <p className="text-sm xss:text-xs md:text-sm 2xl:text-base lg:text-small xl:text-sm 3xl:text-base text-gray-200 xl:leading-5 2xl:leading-6">
                  At Analogue IT Solutions, every project begins as an idea but for us, it grows into a journey of collaboration, creativity, and success. Our success is built on the achievements of our clients, and every milestone reached together is a chapter we&apos;re proud to share.Behind every line of code is a team that listens first, understands deeply, and crafts with care. We measure success not only in downloads, revenues, or ratings, but in the lasting relationships we build with our clients.
                </p>
              </motion.div>
            </motion.div>

            {/* SUCCESSFUL PROJECTS & HAPPY CLIENTS */}
            <div className="flex flex-col sm:flex-row lg:flex-col lg:flex-row gap-6">
              {/* PROJECTS - Using projectsRef */}
              <motion.div
                ref={projectsRef}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                  hidden: { scale: 0.7, opacity: 0 },
                  visible: { scale: 1, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
                }}
                className="bg-blue-100 xss:p-2 xl:p-6 rounded-lg shadow-sm text-center sm:text-left flex-1"
              >
                <motion.div
                  variants={{
                    hidden: { scale: 1.4 },
                    visible: { scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
                  }}
                >
                  <div className="mb-4">
                    <p className="text-2xl xss:text-xl lg:text-3xl font-extrabold text-[#072060]">
                      {projectsInView ? <CountUp start={1} end={250} duration={2} /> : 0}+
                    </p>
                    <p className="2xl:text-lg lg:text-md xss:text-sm text-gray-700 mt-1">
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
                      className="object-cover mx-auto xss:w-[8rem] xss:h-[5rem] xl:w-[14rem] xl:h-[9rem] 2xl:w-[12rem] text-center"
                    />
                  </div>
                </motion.div>
              </motion.div>

              {/* CLIENTS - Using clientsRef */}
              <motion.div
                ref={clientsRef}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                  hidden: { scale: 0.7, opacity: 0 },
                  visible: { scale: 1, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
                }}
                className="bg-blue-100 p-6 rounded-lg shadow-sm text-center sm:text-left flex-1"
              >
                <motion.div
                  variants={{
                    hidden: { scale: 1.4 },
                    visible: { scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
                  }}
                >
                  <div className="mb-4">
                    <p className="text-2xl xss:text-xl lg:text-3xl font-extrabold text-[#072060]">
                      {clientsInView ? <CountUp start={1} end={250} duration={2} /> : 0}+
                    </p>
                    <p className="2xl:text-lg lg:text-md xss:text-sm text-gray-700 mt-1">Happy Clients</p>
                  </div>
                  <div className="flex justify-center">
                    <Image
                      src="/gifs/happy-clients.gif"
                      alt="happy-clients"
                      width={150}
                      height={90}
                      unoptimized
                      className="object-contain xss:w-[9rem] xss:h-[5rem] xl:w-[10rem] xl:h-[8rem] mx-auto sm:mx-0"
                    />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* IMAGE & SKILLED EXPERTS */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* OFFICE IMAGE */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { scale: 0.7, opacity: 0 },
                visible: { scale: 1, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
              }}
              className="md:col-span-3 rounded-lg shadow-sm text-center sm:text-left flex-1"
            >
              <Image
                src="/aboutimages/office.svg"
                alt="office.svg"
                width={700}
                height={500}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* EXPERTS - Using expertsRef */}
            <motion.div
              ref={expertsRef}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { scale: 0.7, opacity: 0 },
                visible: { scale: 1, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
              }}
              className="bg-blue-100 p-6 rounded-lg shadow-sm text-center sm:text-left xss:w-full lg:flex-1"
            >
              <motion.div
                variants={{
                  hidden: { scale: 1.4 },
                  visible: { scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
                }}
              >
                <div className="mb-4">
                  <p className="text-2xl xss:text-xl lg:text-3xl font-extrabold text-[#072060]">
                    {expertsInView ? <CountUp start={1} end={40} duration={2} /> : 0}+
                  </p>
                  <p className="2xl:text-lg lg:text-md xss:text-sm text-gray-700 mt-1">Skilled Experts</p>
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/gifs/team.gif"
                    alt="Team"
                    width={150}
                    height={90}
                    unoptimized
                    className="object-contain mx-auto xss:w-[5rem] xss:h-[4rem] xl:w-[12rem] xl:h-[6rem] sm:mx-0"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>


      </section>

      <section className="w-full bg-white ">

        {/* SECTION 2 */}
        <section className="section-container-2">
          <div className="relative w-full ">
            {/* Background Image with Slide-in Animation */}
            <motion.div
              initial={{ x: initialX, y: "-100px", opacity: "0" }} 
              whileInView={{ x: "0px", y: "0px", opacity: "1" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative w-full h-[15rem] xss:h-[20rem] sm:h-[20rem] md:h-[23rem] lg:h-[22rem] 2xl:h-[28rem] 3xl:h-[26rem] overflow-hidden"
            >
              <Image
                src="/aboutimages/section2bgimg.jpg"
                alt="Section Background"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 1200px"
              />
            </motion.div>

            {/* Overlay Text (slight scale-down effect) */}
            <motion.div
              initial={{ scale: 1.2, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.4 }}
              className="absolute inset-0 flex flex-col justify-center items-start xl:w-full px-4 sm:px-8 md:px-12 2xl:pl-20 3xl:pl-35 text-white"
            >
              <h2 className="text-2xl xss:text-lg sm:text-xl md:text-3xl lg:text-subheading lg:leading-9 xl:text-[2.1rem] 2xl:text-[2.5rem] 2xl:leading-13 3xl:text-subbigheading font-bold mb-4">
                Create an effective <br /> web and app Design
              </h2>
              <p className="text-sm xss:text-xs sm:leading-5 md:text-sm 2xl:text-base 3xl:leading-7 max-w-xl lg:leading-6 md:leading-7 mb-6">
                We believe that great design is the foundation of every successful digital product. At Analogue IT Solutions, our web and app designs are built to be clean, intuitive, and results-driven.We focus on creating interfaces that are easy to navigate, engaging to use, and aligned with your business goals helping your brand make a lasting impression online.Our team is committed to designing solutions that not only look great but also deliver real value to your users.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 xss:px-2 xss:py-2 xss:text-xs xl:px-6 2xl:text-base lg:px-3 lg:py-2 py-2 xl:py-3 rounded-lg font-medium transition">
                <Link href="/contact" > Contact Us </Link>
              </button>
            </motion.div>

            {/* Decorative Rectangle (video fade-in) */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true, amount: 0.5 }}
              className="absolute xss:bottom-0 xss:right-15 xs:right-20 md:bottom-[-10] md:right-30 lg:bottom-[-25] lg:right-40 2xl:bottom-0 xl:right-37 2xl:bottom-20 2xl:right-45 3xl:bottom-10 3xl:right-60 translate-x-1/4 translate-y-1/2 w-full max-w-[200px] md:max-w-[22rem] sm:max-w-[15rem] lg:max-w-[26rem] xl:max-w-[28rem] 2xl:max-w-[34rem] 2xl:h-[20rem] 3xl:max-w-[38rem] 3xl:h-[25rem]"
            >
              <Image
                src="/gifs/office-video.gif"
                alt="Rectangle"
                width={800}
                height={500}
                unoptimized
                className="w-full h-auto rounded-xl"
              />
            </motion.div>
          </div>
        </section>


        <div className="h-20 sm:h-32"></div>

        {/* SECTION 3 founder section*/}
        <section className="section-container-3 px-10">
          <div className="px-4 sm:px-8 md:px-16 xl:py-10 2xl:py-0 w-full">
            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-3xl xss:text-4xl md:text-6xl xl:text-8xl font-bold md:mt-5 xl:mt-0 "
            >
              <span className="text-gray-400">Our </span>
              <span className="text-blue-300">Founder</span>
            </motion.h2>


          </div>

          {/* Founder Section */}
          <div className="px-4 sm:px-8 md:px-16 py-10">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Image
                  src="/aboutimages/ceoimg.svg"
                  alt="CFO"
                  width={400}
                  height={400}
                  className="rounded-xl w-full xss:max-w-50 max-w-xs sm:max-w-xs md:max-w-2xl 2xl:max-w-sm object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                className="text-center md:text-left max-w-2xl xl:mt-10"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Srikanth Veturi</h3>
                <p className="text-gray-600 text-sm">B.E</p>
                <p className="text-gray-800 font-semibold my-2">Founder CEO</p>
                <p className="text-gray-600 text-sm xss:text-xs md:text-sm 2xl:text-base leading-6 sm:leading-7">
                  Analogue is a Best mobile app development company in Hyderabad
                  that specialises in creating and enhancing user experience
                  through the design and development of mobile and web
                  applications...
                </p>
              </motion.div>
            </div>
          </div>

          {/* CFO Section */}
          <div className="px-4 sm:px-8 md:px-16 py-10 2xl:py-5">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Image
                  src="/aboutimages/ceoimg.svg"
                  alt="CFO"
                  width={400}
                  height={400}
                  className="rounded-xl w-full xss:max-w-50 max-w-xs sm:max-w-xs md:max-w-sm object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                className="text-center md:text-left max-w-2xl xl:mt-10"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Akhil Kokkonda</h3>
                <p className="text-gray-800 font-semibold my-2">B.E CFO</p>
                <p className="text-gray-600 text-sm xss:text-xs md:text-sm 2xl:text-base leading-6 sm:leading-7">
                  Analogue is a Best mobile app development company in Hyderabad
                  that specialises in creating and enhancing user experience...
                </p>
              </motion.div>
            </div>
          </div>

          {/* Team Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6 sm:px-5 pb-10 md:px-15"
          >
            {teamData.map((member, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                }}
                className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center"
              >
                <Image
                  src={member.img}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="rounded-lg object-cover w-full h-auto"
                />
                <h3 className="mt-4 xss:text-sm lg:text-lg font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="xss:text-xs lg:text-sm text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

      </section>
    </>
  );
}
