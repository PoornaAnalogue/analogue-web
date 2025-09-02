





"use client";

import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Game() {
  const steps = [
    {
      id: 1,
      title: "Requirements",
      img: "/puzzleimages/puzzle1.png",
      description:
        "Our process begins with understanding your vision. We work closely with you to gather detailed requirements, analyze your business goals, and identify the exact needs of your mobile app. This stage ensures we align the app’s features, design, and functionality with your target audience and objectives. By defining clear requirements, we lay a strong foundation for a successful app development journey.",
    },
    {
      id: 2,
      title: "Agreement",
      img: "/puzzleimages/puzzle2.png",
      description:
        "Once the requirements are clear, we move forward with a transparent agreement. This includes project scope, timeline, budget, and deliverables. Our goal is to ensure both parties are aligned from the very beginning. With a well-defined agreement in place, we create a smooth roadmap for development and build mutual trust that drives the project’s success.",
    },
    {
      id: 3,
      title: "UI/ UX",
      img: "/puzzleimages/puzzle3.png",
      description:
        "Design is where your vision comes alive! Our creative UX/UI team focuses on crafting intuitive user experiences and visually engaging interfaces. We design wireframes, prototypes, and layouts that not only reflect your brand identity but also ensure smooth navigation and user satisfaction. We ensure your app is both functional and visually stunning.",
    },
    {
      id: 4,
      title: "Development",
      img: "/puzzleimages/puzzle4.png",
      description:
        "This is where concept turns into code. Our skilled developers translate the approved designs into a fully functional mobile application. We emphasize performance, security, and scalability while using modern frameworks such as React Native, Flutter, Swift, and Kotlin. By following a structured development cycle, we ensure your app is robust, reliable, and ready to scale as your business grows.",
    },
    {
      id: 5,
      title: "Testing",
      img: "/puzzleimages/puzzle5.png",
      description:
        "Quality is at the heart of our process. Once development is complete, our QA experts thoroughly test the app for functionality, speed, and security. We perform device testing, bug fixes, and performance checks to make sure the app runs seamlessly across iOS, Android, and cross-platform environments. This step ensures your users get a flawless experience from the very first use.",
    },
    {
      id: 6,
      title: "Client Approval",
      img: "/puzzleimages/puzzle6.png",
      description:
        "At this stage, we hand over the tested app for your final review. We walk you through its features, design flow, and overall performance. Any adjustments or fine-tuning you suggest are carefully implemented. Once you’re fully satisfied, we secure your approval to move ahead with the launch.",
    },
    {
      id: 7,
      title: "Deployment",
      img: "/puzzleimages/puzzle7.png",
      description:
        "The launch day is here! Our team ensures your app goes live smoothly on app stores, meeting every technical and security requirement. With a flawless deployment process, we make sure your app is ready to reach users and create an immediate impact.",
    },
    {
      id: 8,
      title: "User Will Use",
      img: "/puzzleimages/puzzle8.png",
      description:
        "Once deployed, your app becomes available for users to download and interact with. This is where the real value begins. Customers engage with your features, explore the design, and experience the solutions your app provides. Our focus is on ensuring users enjoy a seamless, engaging, and satisfying journey from the very first use.",
    },
    {
      id: 9,
      title: "Analogue Monitor",
      img: "/puzzleimages/puzzle9.png",
      description:
        "We believe in long-term collaboration. After deployment, our team actively tracks your app’s performance, resolves issues, and rolls out updates. From maintaining system health to adding new features, we ensure your app remains reliable, secure, and aligned with user expectations, helping your business grow continuously.",
    },
  ];

  const positions = [
    { top: 0, left: 2 },
    { top: 30, left: 95 },
    { top: 0, left: 190 },
    { top: 95, left: -30 },
    { top: 125, left: 65 },
    { top: 95, left: 160 },
    { top: 190, left: 0 },
    { top: 220, left: 95 },
    { top: 190, left: 190 },
  ];

  const [currentStep, setCurrentStep] = useState(1);
  const [isLocked, setIsLocked] = useState(false);
  // NEW: track which puzzle images are visible
const [visibleSteps, setVisibleSteps] = useState([1]); // step 1 always visible


  // NEW state for clicked puzzle piece
  const [selectedStep, setSelectedStep] = useState(null);

  const containerRef = useRef(null);
  const touchStartY = useRef(null);
  const scrollLock = useRef(false);
  const lastScrollY = useRef(0);

  const maxStep = steps.length;
  const minStep = 1;

  const lockScrollTemporarily = () => {
    scrollLock.current = true;
    setTimeout(() => (scrollLock.current = false), 400);
  };

  const handleScrollChange = (direction) => {
    setSelectedStep(null); // reset any clicked selection when scrolling

    if (scrollLock.current) return;

    if (direction === "down" && currentStep < maxStep) {
      setCurrentStep((prev) => prev + 1);
      lockScrollTemporarily();
    } else if (direction === "down") {
      setIsLocked(false);
    } else if (direction === "up" && currentStep >1 ) {
      setCurrentStep((prev) => prev - 1);
    } else if (direction === "up") {
      setIsLocked(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        const currentY = window.scrollY;
        const direction = currentY > lastScrollY.current ? "down" : "up";
        lastScrollY.current = currentY;

        if (entry.boundingClientRect.top <= 1 && entry.isIntersecting) {
          if (direction === "down") setIsLocked(true);
          else setIsLocked(false);
        } else {
          setIsLocked(false);
        }
      },
      { threshold: 0, rootMargin: "0px 0px -100% 0px" }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const preventTouch = (e) => {
      if (isLocked) e.preventDefault();
    };

    if (isLocked) {
      document.body.style.overflow = "hidden";
      document.body.addEventListener("touchmove", preventTouch, {
        passive: false,
      });
    } else {
      document.body.style.overflow = "";
      document.body.removeEventListener("touchmove", preventTouch);
    }

    return () => document.body.removeEventListener("touchmove", preventTouch);
  }, [isLocked]);

  useEffect(() => {
    if (!isLocked) return;

    const handleWheel = (e) => {
      if (e.deltaY > 0) {
        handleScrollChange("down");
        e.preventDefault();
      } else if (e.deltaY < 0) {
        handleScrollChange("up");
        e.preventDefault();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [currentStep, isLocked]);

  useEffect(() => {
    if (!isLocked) return;

    const handleTouchStart = (e) =>
      (touchStartY.current = e.touches[0].clientY);
    const handleTouchEnd = (e) => {
      if (touchStartY.current === null) return;
      const diffY = touchStartY.current - e.changedTouches[0].clientY;

      if (Math.abs(diffY) > 30) {
        if (diffY > 0) handleScrollChange("down");
        else handleScrollChange("up");
      }
      touchStartY.current = null;
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [currentStep, isLocked]);

  const heading = "Our Process".split("");
  const letterVariants = {
    hidden: { color: "#7B7E86" },
    visible: { color: "#3C6FA2" },
  };

  return (
    <div>
      <h2
        id="featured-heading"
        className="font-['Urbanist'] text-2xl sm:text-3xl mt-5 md:text-5xl lg:text-6xl text-center text-[#7B7E86] mb-6 sm:mb-5 md:mb-10"
      >
        {heading.map((char, i) => (
          <motion.span
            key={i}
            variants={letterVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.6 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </h2>

      <div
        ref={containerRef}
        className="w-full grid grid-cols-1 lg:grid-cols-2 items-start bg-[#071637] text-white py-10 lg:py-20 sm:py-10 px-4 xl:px-12 gap-8"
      >
        {/* Left Content */}
        <div className="flex flex-col xl:px-10">
          <h3 className="text-white font-bold text-2xl md:text-3xl leading-snug">
            Process we follow for <br /> successful project
          </h3>
          <AnimatePresence mode="wait">
            {currentStep > 0 && (
              <motion.div
                key={selectedStep ?? steps[currentStep - 1].id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="mt-6 space-y-4 pr-2"
              >
                <h4 className="text-xl font-bold mb-2">
                  Step {steps[(selectedStep ?? currentStep) - 1].id}:{" "}
                  {steps[(selectedStep ?? currentStep) - 1].title}
                </h4>
                <p className="text-neutral-300 text-lg">
                  {steps[(selectedStep ?? currentStep) - 1].description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Puzzle */}
        <div className="flex justify-center lg:justify-start relative 2xl:pl-10 xl:pl-2 lg:pt-10 ">
          <div className="w-[280px] sm:w-[320px] md:w-[360px] h-[350px] md:h-[400px] relative  ">
           
           
           
           {steps.map((step, idx) => (
  <AnimatePresence key={step.id}>
    {(idx === 0 || idx < currentStep) && (
      <motion.div
        key={step.id}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{ duration: 0 }}
        className="absolute w-[120px] h-[120px] z-10 cursor-pointer hover:scale-105 transition-transform"
        style={positions[idx]}
        onClick={() => setSelectedStep(step.id)}
      >
        <Image
          src={step.img}
          alt={step.title}
          width={120}
          height={120}
          className="object-contain"
        />
      </motion.div>
    )}
  </AnimatePresence>
))}

          </div>
        </div>
      </div>
    </div>
  );
}  