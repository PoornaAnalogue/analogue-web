"use client";
import { FaChevronDown } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";
import PopUpForm from "@/components/popup-form";
import Link from "next/link";
import Script from "next/script";
import CarousalServicePage from "@/components/carousal-servicepage";
import FrequentQuestions from "@/components/faqs-page";
import GetAQuoteForm from "@/components/get-quote-form";
import CalendarPage from "@/app/home-page-main/calendar/calendar-page";
import TypewriterHeading from "@/components/service-related-components/typewrite-heading";
import TechnologiesButtons from "@/components/service-related-components/tech-icons";
import ExtendedLocations from "@/components/service-related-components/extended-locations";

export default function DigitalMarketing() {
  const [isOpen, setIsOpen] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState("Web Apps");

  // Array of image paths corresponding to original icon names
  const TechIcons = {
    reactIcon: "/service-icons/react-logo.svg",
    nextjsIcon: "/service-icons/next-logo.svg",
    vueIcon: "/service-icons/vue-logo.svg",
    angularIcon: "/service-icons/angular-logo.svg",
    nodejsIcon: "/service-icons/node-logo.svg",
    javaIcon: "/service-icons/java-logo.svg",
    phpIcon: "/service-icons/php-logo.svg",
    pythonIcon: "/service-icons/python-logo.svg",
    dotnetIcon: "/service-icons/dotnet-logo.svg",
    flutterIcon: "/service-icons/flutter-logo.svg",
    kotlinIcon: "/service-icons/kotlin-logo.svg",
    bgicon: "/service-icons/bgicon.svg",
  };

  const technologies = [
    {
      category: "Web Apps",
      items: [
        { name: "React JS", icon: TechIcons.reactIcon },
        { name: "Next JS", icon: TechIcons.nextjsIcon },
        { name: "Vue JS", icon: TechIcons.vueIcon },
        { name: "Angular", icon: TechIcons.angularIcon },
        { name: "Flutter", icon: TechIcons.flutterIcon },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node JS", icon: TechIcons.nodejsIcon },
        { name: "Java", icon: TechIcons.javaIcon },
        { name: "PHP", icon: TechIcons.phpIcon },
        { name: "Python", icon: TechIcons.pythonIcon },
        { name: "Dot.Net", icon: TechIcons.dotnetIcon },
      ],
    },
    {
      category: "Mobile Apps",
      items: [
        { name: "React Native", icon: TechIcons.reactIcon },
        { name: "Flutter", icon: TechIcons.flutterIcon },
        { name: "Kotlin", icon: TechIcons.kotlinIcon },
        { name: "Java", icon: TechIcons.javaIcon },
      ],
    },
  ];

  const selectedItems = technologies.find(
    (tech) => tech.category === selectedCategory
  )?.items;

  //   faqs

  const DigitalfaqArray = [
    {
      question: "01. What is the Digital Marketing Services Cost in India?",
      answer:
        "Digital Marketing Services in India cater to all business sizes and budgets, with costs varying by scope of services like SEO, PPC, Social Media, Content, and Email Marketing. Prices also depend on location (Tier-1 cities like mumbai,delhi), agency experience, and project complexity or duration.",
    },
    {
      question: "02. Is Digital Marketing is important for all?",
      answer:
        "Digital marketing helps businesses reach customers anywhere in the world. It is more cost-effective than traditional marketing and allows businesses to use their budget more efficiently.",
    },
    {
      question: "03. Is SEO is really helpful?",
      answer:
        "SEO is Your Digital Roadmap to Success, It is important to boost your online visibility, driving organic traffic, and outranking competitors. With strategic keyword optimization, quality content, and technical expertise, SEO can significantly enhance your website's authority and generate sustainable growth.",
    },
    {
      question: "04. Who Needs a Digital Marketer?",
      answer:
        "Every business needs a digital marketer to navigate the online world. From startups to established brands, digital marketing drives growth, increases visibility, and boosts sales.",
    },
    {
      question: "05. Is digital Marketing a Product or Service?",
      answer:
        "Digital marketing is a service that uses strategy, creativity, and technology to promote products or services online and help businesses reach their target audience.",
    },
  ];

      const heading = [
    { word: "Best", color: "text-black" },
    { word: "Digital", color: "text-blue-500" },
    { word: "Marketing", color: "text-blue-500" },
    { word: "Agency", color: "text-black" },
    { word: "in", color: "text-black" },
    { word: "Hyderabad,", color: "text-black" },
    { word: "India", color: "text-black" },
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
          <div className="flex flex-col xl:flex-row items-center xl:items-start w-full gap-6">
            <div className="xl:w-1/2">
              <div className="flex items-center mb-1">
                <span className="w-1 h-1 bg-black rounded-full mr-2"></span>
                <span className="font-medium text-xs xss:text-subsmall sm:text-xs xl:text-sm text-black">
                  ABOUT OUR COMPANY
                </span>
              </div>
              <TypewriterHeading textArray={heading} />
              <p className="text-gray-500 leading-relaxed text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base">
                Analogue is the Best Digital Marketing Agency in Hyderabad, specialized in driving tangible results through SEO, Social Media Marketing, and Google Ads. Our team of experts crafts tailored strategies to improve your search engine rankings, engage your audience on social platforms, and convert visitors into customers. Let us help you dominate the digital landscape. We leverage data-driven insights and the latest marketing trends to maximize your ROI. With a focus on innovation and measurable outcomes, we ensure your brand stands out in the competitive online space.
              </p>

              {/* Free Quote button + Call us */}
              <div className="xs:flex  gap-4 xss:pt-2 xl:pt-3">
                <button
                  suppressHydrationWarning
                  onClick={() => setIsOpen(true)}
                  className="bg-blue-600 xss:text-xs lg:text-sm text-white xss:px-2 xss:py-2 xl:px-5 xl:py-3 rounded-3xl hover:bg-blue-700 transition cursor-pointer"
                >
                  Get Free Quote
                </button>
                <div className="flex xss:flex-col lg:flex-row lg:items-center xss:ml-2 lg:ml-[-0.3rem] xss:mt-2 lg:mt-0">
                  <span className="xss:text-xs lg:text-sm text-blue-500 mr-2">
                    Call Us
                  </span>
                  <a
                    href="tel:+918919088163"
                    className="xss:text-xs lg:text-sm text-blue-700 hover:underline transition-colors duration-200"
                  >
                    +91 8919088163
                  </a>
                </div>
              </div>
            </div>
            <div className="xl:w-1/2 flex justify-center items-center">
              <Image src="/service-icons/digitalmarketing-img.png" width={600} height={400} alt="Digital marketing image"
                className="w-full h-auto max-w-[30rem] object-contain " />
            </div>
          </div>

          {/* Welcome to our company */}
          <div className="flex items-center xss:pt-3 xl:pt-8 xss:mb-1">
            <span className="w-1 h-1 bg-black rounded-full mr-2"></span>
            <span className="font-medium text-xs xss:text-subsmall sm:text-xs xl:text-sm text-black ">
              WELCOME TO OUR COMPANY
            </span>
          </div>
          <h5 className=" sub-heading">
            Elevating Business Success Through Digital Marketing
          </h5>
          <p className="text-gray-500 leading-relaxed text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base">
            As the Best digital marketing agency, we are dedicated to harnessing
            the power of innovative strategies to enhance your brand&apos;s online
            presence.Our experienced team blends creativity with industry
            knowledge to deliver customised marketing solutions tailored to your
            specific goals. With a commitment to excellence and a results-driven
            approach, we aim to empower businesses to achieve growth and success
            in the digital landscape through impactful marketing initiatives.
          </p>
          <div className="my-2">
            <button className="bg-blue-600 xss:text-xs lg:text-sm text-white xss:px-2 xss:py-2 xl:px-5 xl:py-3 rounded-3xl hover:bg-blue-700 transition cursor-pointer ">
              <Link href="/aboutus">Discover More</Link>
            </button>
          </div>
        </div>

        {/* middle group mobiles and contact us button section */}
        <div className="mt-4 xss:mt-6 xs:mt-8 sm:mt-10 md:mt-12 lg:mt-15 ">
          <div className="relative w-full h-auto min-h-[200px] xss:min-h-[250px] xs:min-h-[200px] sm:min-h-[350px] md:min-h-[400px] lg:h-[400px] bg-[url('/service-icons/app-dev-bg.jpg')] bg-cover bg-center flex flex-col lg:flex-row justify-end items-center">
            <div className="w-full lg:w-[48%] 2xl:w-[50%] lg:absolute lg:inset-y-0 lg:left-0 p-4 xss:p-6 xs:p-8 sm:p-10 md:p-12 lg:p-8 xl:p-9 2xl:p-10">
              <h1 className="text-white text-lg xss:text-md xs:text-lg sm:text-xl md:text-xl xl:text-2xl 3xl:text-[1.6rem] font-bold xss:leading-tight 2xl:leading-relaxed 2xl:w-[90%] 3xl:w-[80%]">
                Elevate Your Online Presence with Our Trusted Digital Marketing
                Agency Services
              </h1>
              <p className="text-white text-xs xss:text-xs xs:text-xs sm:text-sm md:text-sm lg:text-[0.75rem] xl:text-sm 3xl:text-base leading-relaxed 3xl:leading-7 mt-2 xss:mt-3 xs:mt-4 sm:mt-4 md:mt-5 lg:mt-3 xl:mt-3 3xl:mt-2">
                At Analogue IT Solutions, we are a leading Digital Marketing
                Agency in Hyderabad dedicated to helping businesses grow online.
                Our expert team delivers comprehensive services including SEO,
                PPC, social media marketing, and content marketing to boost
                visibility, attract qualified leads, and drive measurable
                results. Whether you are a startup or an established enterprise,
                our customised strategies ensure your brand connects with the
                right audience. As a trusted Digital Marketing Agency in
                Hyderabad, we focus on innovation, precision, and performance to
                maximise your ROI.
              </p>
              <button className="bg-blue-700 text-white rounded p-2 xss:p-2 xs:p-2 sm:p-3 md:p-3 lg:p-2 xl:p-2 2xl:p-3 mt-2 lg:mt-4 xss:mt-3 xs:mt-4 sm:mt-4 md:mt-4 lg:mt-2 xl:mt-3 2xl:mt-4 3xl:mt-3 text-xs xss:text-xs xs:text-sm sm:text-sm md:text-sm lg:text-[0.65rem] xl:text-xs 2xl:text-sm">
                <Link href="/contact">Contact Us</Link>
              </button>
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
        <div >
          <TechnologiesButtons />
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
            <h1 className=" text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] xl:text-[1.5rem] 3xl:text-[1.6rem] font-semibold text-black leading-snug">
              Digital Marketing Services We Provide
            </h1>
            <p className="xss:text-subsmall text-black sm:text-xs lg:text-sm p-2 text-gray-500 xss:pb-2 sm:pb-4 text-start">
              Discover our specialised solutions designed to assist you
              effectively - we are committed to addressing your needs with
              professionalism and skills.
            </p>
          </div>
          <div className="grid grid-cols-1 text-center md:grid-cols-2 xl:grid-cols-4 xss:gap-8 xss:px-8 3xl:gap-20 2xl:gap-14 2xl:px-14 3xl:px-30 px-10">
            <div className=" text-[#7B7E86] p-5 border-l border-r border-gray-200 shadow-[0_4px_2px_rgba(0,0,0,0.3)] bg-white rounded-lg">
              <h3 className="font-weight-400 text-[#0E59F2] xss:mb-3 xl:text-2xl xl:mb-4 xss:mb-1text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] xl:text-[1.5rem] 3xl:text-[1.6rem] font-semibold">
                Search Engine Optimization
              </h3>
              <p className="xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base  xss:leading-4 sm:leading-relaxed 3xl:leading-7">
                SEO is the art of making your website visible to search engines.
                It involves optimizing content, structure, and relevance to rank
                higher in search results for specific keywords.
              </p>
            </div>
            <div className=" text-[#7B7E86] p-5 border-l border-r border-gray-200 shadow-[0_4px_2px_rgba(0,0,0,0.3)] bg-white p-6 rounded-lg">
              <h3 className="font-weight-400 text-[#0E59F2] xss:mb-3 xl:text-2xl xl:mb-4 xss:mb-1text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] xl:text-[1.5rem] 3xl:text-[1.6rem] font-semibold">
                Local SEO(GMB)
              </h3>
              <p className="xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base  xss:leading-4 sm:leading-relaxed 3xl:leading-7">
                Local SEO helps businesses rank higher in search results for
                location-specific searches. It involves optimizing your website,
                Google Business Profile, and online listings to attract
                customers in your area.
              </p>
            </div>
            <div className=" text-[#7B7E86] p-5 border-l border-r border-gray-200 shadow-[0_4px_2px_rgba(0,0,0,0.3)] bg-white p-6 rounded-lg">
              <h3 className="font-weight-400 text-[#0E59F2] xss:mb-3 xl:text-2xl xl:mb-4 xss:mb-1text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] xl:text-[1.5rem] 3xl:text-[1.6rem] font-semibold">
                Social Media Marketing (Paid/Organic)
              </h3>
              <p className="xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base  xss:leading-4 sm:leading-relaxed 3xl:leading-7">
                Social Media Marketing is using social platforms to connect with
                your audience. Organic relies on free content and engagement to
                grow your following.{" "}
              </p>
            </div>
            <div className=" text-[#7B7E86] p-5 border-l border-r border-gray-200 shadow-[0_4px_2px_rgba(0,0,0,0.3)] bg-white p-6 rounded-lg">
              <h3 className="font-weight-400 text-[#0E59F2] xss:mb-3 xl:text-2xl xl:mb-4 xss:mb-1text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] xl:text-[1.5rem] 3xl:text-[1.6rem] font-semibold">
                Influencer Marketing
              </h3>
              <p className="xl:leading-6 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base  xss:leading-4 sm:leading-relaxed 3xl:leading-7">
                Influencer marketing is partnering with popular online
                personalities to promote products or services. It leverages the
                influencer&apos;s credibility and reach to connect with their
                audience and boost brand awareness.
              </p>
            </div>
          </div>
        </div>

        {/* Calendar */}
        <div>
          <CalendarPage />
        </div>

        {/* Digital marketing agency in hyd */}
        <div className="w-full h-auto bg-white xl:pt-5 xl:p-0 xl:px-20 xss:px-5 pt-5 xs:p-5 sm:px-8 ">
          <h3 className="sub-heading">
            Digital Marketing Agency in Hyderabad
          </h3>
          <div className="text">
            <p className="pb-2">
              At Analogue IT Solutions, we are a leading Digital Marketing
              Agency in Hyderabad dedicated to helping businesses grow online.
              Our expert team delivers comprehensive services including SEO,
              PPC, social media marketing, and content marketing to boost
              visibility, attract qualified leads, and drive measurable results.
              Whether you are a startup or an established enterprise, our
              customised strategies ensure your brand connects with the right
              audience. As a trusted Digital Marketing Agency in Hyderabad, we
              focus on innovation, precision, and performance to maximise your
              ROI.
            </p>
          </div>
        </div>

        {/* DM agency in India */}
        <div className="w-full h-auto bg-white xl:p-3 xl:px-20 xss:px-5 pt-5 xs:p-5 sm:px-8 ">
          <h3 className="sub-heading">
            Digital Marketing Agency in India
          </h3>
          <div className="text">
            <p className="pb-2">
              Analogue IT Solutions is not just Best digital marketing company
              in Hyderabad, we are your strategic partner in achieving online
              dominance. As a Best digital marketing agency, we offer a
              comprehensive suite of services designed to elevate your brand and
              drive tangible results. Our team of Best digital marketers is
              committed to delivering exceptional performance and exceeding
              client expectations.
            </p>
            <p className="pb-2">
              From crafting compelling SEO strategies to executing high-impact
              PPC campaigns, we excel at every facet of digital marketing. Our
              expertise in local SEO (GMB) ensures that your business stands out
              in local search results, attracting more customers through your
              doors. We harness the power of social media through both organic
              and paid strategies, building strong brand connections and driving
              engagement.
            </p>
            <p className="pb-2">
              As a Best digital marketing agency, we pride ourselves on
              delivering measurable results. Our data-driven approach allows us
              to optimise campaigns for maximum ROI, making us one of the best
              performance marketing agencies in Hyderabad. Whether you need help
              with online reputation management, influencer collaborations, or
              captivating creatives, our talented team is here to assist you.
            </p>
          </div>
        </div>

                {/* Extended Locations */}
        <div>
          <ExtendedLocations />
        </div>

        {/* content under Digital marketing dev company in India */}
        <div className="w-full h-auto bg-white xl:pt-5 xl:px-20 xss:px-5 pt-5 xs:p-5 sm:px-8 ">
          <h3 className="sub-heading">
            Analogue IT Solutions - Best Digital Marketing Agency in Hyderabad
          </h3>
          <div className="text">
            <p className="pb-2">
              At our esteemed digital marketing agency, we pride ourselves on
              being the best digital marketing agency in Hyderabad, delivering
              unparalleled results to our clients. We specialise in SEO, social
              media marketing, content creation, and PPC campaigns, ensuring
              your brand thrives in the digital landscape. Our team of experts
              harnesses cutting-edge strategies and analytics to elevate your
              online presence and drive measurable growth. Partner with us to
              unlock the full potential of your digital marketing efforts and
              achieve your business goals.
            </p>
          </div>
        </div>

        {/* why analogue it solutions */}
        <div className="w-full h-auto bg-white xl:p-0 xl:px-20 xss:px-5 pt-5 xs:p-5 sm:px-8 ">
          <h3 className="sub-heading ">
            Choose Best Digital Marketing Agency in Hyderabad
          </h3>
          <div className="text">
            <p className="pb-2">
              Are you ready to take your business to new heights? Partner with
              Analogue IT Solutions, the best digital marketing agency in
              Hyderabad. Our data-driven approach, coupled with our passion for
              innovation, sets us apart from the competition.
            </p>
            <p className="pb-2">
              We offer a wide range of services, including SEO, PPC, social
              media marketing, and more, to ensure your online success. Our team
              of skilled digital marketers will work closely with you to develop
              a customised strategy that aligns with your business objectives.
            </p>
            <p className="pb-2">
              Don&apos;t settle for average results. Choose Analogue IT
              Solutions as your partner in digital transformation.
            </p>
          </div>
        </div>

        {/* faqs section */}
        <div className="w-[86%] mx-auto pb-3 xss:mt-5">
          <div>
            <FrequentQuestions Question={DigitalfaqArray} />
          </div>
        </div>

        {/* get a quote form */}
        <div>
          <GetAQuoteForm />
        </div>

        <PopUpForm isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </>
  );
}
