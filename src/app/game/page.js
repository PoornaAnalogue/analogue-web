"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Game() {
const steps = [
    {
      id: 1,
      title: "Requirements",
      img: "/puzzleimages/puzzle1.png",
      description:
        "Our process begins with understanding your vision. We work closely with you to gather detailed requirements, analyze your business goals, and identify the exact needs of your mobile app. This stage ensures we align the app's features, design, and functionality with your target audience and objectives. By defining clear requirements, we lay a strong foundation for a successful app development journey.",
    },
    {
      id: 2,
      title: "Agreement",
      img: "/puzzleimages/puzzle2.png",
      description:
        "Once the requirements are clear, we move forward with a transparent agreement. This includes project scope, timeline, budget, and deliverables. Our goal is to ensure both parties are aligned from the very beginning. With a well-defined agreement in place, we create a smooth roadmap for development and build mutual trust that drives the project's success.",
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
        "At this stage, we hand over the tested app for your final review. We walk you through its features, design flow, and overall performance. Any adjustments or fine-tuning you suggest are carefully implemented. Once you're fully satisfied, we secure your approval to move ahead with the launch.",
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
        "We believe in long-term collaboration. After deployment, our team actively tracks your app's performance, resolves issues, and rolls out updates. From maintaining system health to adding new features, we ensure your app remains reliable, secure, and aligned with user expectations, helping your business grow continuously.",
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
  const [selectedStep, setSelectedStep] = useState(null);
  const [isPuzzleCompleted, setIsPuzzleCompleted] = useState(false);
  const [puzzleDirection, setPuzzleDirection] = useState('forward'); // 'forward' or 'reverse'
  const [isSnapping, setIsSnapping] = useState(false);
  const hasEnteredSection = useRef(false); // NEW: track entry, prevents bounces

  const headingRef = useRef(null);
  const touchStartY = useRef(null);
  const scrollLock = useRef(false);
  const lastScrollY = useRef(typeof window !== "undefined" ? window.scrollY : 0);

  const maxStep = steps.length;
  const minStep = 1;

  const lockScrollTemporarily = (ms = 400) => {
    scrollLock.current = true;
    setTimeout(() => (scrollLock.current = false), ms);
  };

  // Enhanced nudge function to handle both directions
  const nudgeNativeScroll = (direction) => {
    const amount = direction === "down" ? 8 : -8;
    requestAnimationFrame(() => window.scrollBy({ top: amount }));
  };

  // puzzle step change handler for both directions

const handleScrollChange = (direction) => {
  setSelectedStep(null);

  if (scrollLock.current) return;

  if (puzzleDirection === 'forward') {
    if (direction === "down") {
      if (currentStep < maxStep) {
        setCurrentStep((prev) => Math.min(prev + 1, maxStep));
        lockScrollTemporarily();
      } else {
        // Forward puzzle completed, unlock
        setIsLocked(false);
        setIsPuzzleCompleted(true);
        nudgeNativeScroll("down");
      }
    } else if (direction === "up") {
      if (currentStep > minStep) {
        setCurrentStep((prev) => Math.max(prev - 1, minStep));
        lockScrollTemporarily();
      } else {
        // At first step scrolling up, unlock immediately
        setIsLocked(false);
      }
    }
  } else if (puzzleDirection === 'reverse') {
    if (direction === "up") {
      if (currentStep > minStep) {
        setCurrentStep((prev) => Math.max(prev - 1, minStep));
        lockScrollTemporarily();
      } else {
        // Reverse puzzle completed (reached step 1), unlock
        setIsLocked(false);
        setIsPuzzleCompleted(true);
      }
    } else if (direction === "down") {
      if (currentStep < maxStep) {
        setCurrentStep((prev) => Math.min(prev + 1, maxStep));
        lockScrollTemporarily();
      } else {
        // At last step scrolling down, unlock immediately
        setIsLocked(false);
      }
    }
  }
};

// Section scroll lock and snap logic in useEffect
useEffect(() => {
  const section = document.getElementById("puzzle-container");
  if (!section) return;

  const handleScroll = () => {
    const rect = section.getBoundingClientRect();
    const currentY = window.scrollY;
    const direction = currentY > lastScrollY.current ? "down" : "up";
    lastScrollY.current = currentY;

    // Check if user has scrolled to the middle/half of the puzzle section
    const sectionMiddle = section.offsetTop + (section.offsetHeight / 2);
    const viewportMiddle = window.scrollY + (window.innerHeight / 2);
    const inView = Math.abs(viewportMiddle - sectionMiddle) < (section.offsetHeight / 4);
    const alreadySnapped = Math.abs(window.scrollY - section.offsetTop) < 2;

    if (inView && !alreadySnapped && !isPuzzleCompleted) {
      // Completely disable any scroll animations
      document.body.style.overflow = 'hidden';
      const originalScrollBehavior = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = 'auto';

      // Set all states BEFORE any scroll operation to prevent visual jumps
      setIsSnapping(true);
      if (direction === "down") {
        setPuzzleDirection('forward');
        if (!hasEnteredSection.current) {
          setCurrentStep(minStep); // Start at step 1 for forward
        }
      } else {
        setPuzzleDirection('reverse');
        // For reverse direction, keep current state (don't reset to maxStep)
        // This preserves the 9 pieces if user completed forward direction
        if (!hasEnteredSection.current && currentStep === minStep) {
          setCurrentStep(maxStep); // Only set to maxStep if starting fresh
        }
      }

      // Force immediate scroll with no animation whatsoever
      window.scrollTo(0, section.offsetTop);
      
      // Re-enable scrolling and set final states
      document.body.style.overflow = '';
      setIsSnapping(false);
      setIsLocked(true);
      hasEnteredSection.current = true;

      // Restore scroll behavior
      setTimeout(() => {
        document.documentElement.style.scrollBehavior = originalScrollBehavior;
      }, 100);

    } else if ((rect.bottom <= 0 || rect.top >= window.innerHeight) && hasEnteredSection.current) {
      hasEnteredSection.current = false;
      setIsLocked(false);
      setIsPuzzleCompleted(false);
      setPuzzleDirection('forward');
      // DON'T reset currentStep - preserve the puzzle state
      // This keeps the completed state (9 pieces) when user returns in reverse
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, [maxStep, minStep, isPuzzleCompleted]);

// Handle puzzle completion for both directions with smoother transitions
useEffect(() => {
  if (isLocked) {
    if (puzzleDirection === 'forward' && currentStep === maxStep) {
      // Add slight delay before unlocking for smoother transition
      setTimeout(() => {
        setIsLocked(false);
        setIsPuzzleCompleted(true);
        nudgeNativeScroll("down");
      }, 300);
    } else if (puzzleDirection === 'reverse' && currentStep === minStep) {
      setTimeout(() => {
        setIsLocked(false);
        setIsPuzzleCompleted(true);
        nudgeNativeScroll("up");
      }, 300);
    }
  }
}, [currentStep, isLocked, maxStep, minStep, puzzleDirection]);



  // Prevent body scroll when locked (desktop + mobile touch)
  useEffect(() => {
    const preventTouch = (e) => {
      if (isLocked) e.preventDefault();
    };

    if (isLocked) {
      document.body.style.overflow = "hidden";
      document.body.addEventListener("touchmove", preventTouch, { passive: false });
    } else {
      document.body.style.overflow = "";
      document.body.removeEventListener("touchmove", preventTouch);
    }

    return () => document.body.removeEventListener("touchmove", preventTouch);
  }, [isLocked]);

  // Enhanced wheel handler (desktop) for bidirectional control
  useEffect(() => {
    if (!isLocked) return;

    const handleWheel = (e) => {
      e.preventDefault();
      
      if (puzzleDirection === 'forward') {
        // Forward mode: wheel down = next step, wheel up = previous step
        if (e.deltaY > 0) {
          handleScrollChange("down");
        } else if (e.deltaY < 0) {
          handleScrollChange("up");
        }
      } else if (puzzleDirection === 'reverse') {
        // Reverse mode: wheel up = previous step (going backwards), wheel down = next step
        if (e.deltaY > 0) {
          handleScrollChange("down");
        } else if (e.deltaY < 0) {
          handleScrollChange("up");
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [currentStep, isLocked, puzzleDirection]);

  // Enhanced touch handlers (mobile) for bidirectional control
  useEffect(() => {
    if (!isLocked) return;

    const handleTouchStart = (e) => (touchStartY.current = e.touches[0].clientY);

    const handleTouchEnd = (e) => {
      if (touchStartY.current === null) return;
      const diffY = touchStartY.current - e.changedTouches[0].clientY;

      if (Math.abs(diffY) > 30) {
        if (puzzleDirection === 'forward') {
          // Forward mode: swipe up = next step, swipe down = previous step
          if (diffY > 0) handleScrollChange("down");
          else handleScrollChange("up");
        } else if (puzzleDirection === 'reverse') {
          // Reverse mode: swipe down = previous step, swipe up = next step
          if (diffY > 0) handleScrollChange("down");
          else handleScrollChange("up");
        }
      }

      touchStartY.current = null;
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [currentStep, isLocked, puzzleDirection]);

  const heading = "Our Process".split("");
  const letterVariants = {
    hidden: { color: "#7B7E86" },
    visible: { color: "#071637" },
  };

  return (
    <div id="puzzle-container" ref={headingRef} className="min-h-screen flex flex-col justify-start items-center snap-center">
      {!isSnapping && (
    <div className="sticky-wrapper">
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
            transition={{ delay: i * 0.06, duration: 0.35 }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </h2>

      <div
        className="w-full grid grid-cols-1 lg:grid-cols-2 items-start bg-[#071637] text-white py-10 lg:py-20 sm:py-10 px-4 xl:px-12 gap-8"
      >
        {/* Left Content */}
        <div className="flex flex-col xl:px-10">
          <h3 className="text-white font-bold text-xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] xl:text-[1.5rem] 3xl:text-[2rem] leading-relaxed">
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
                <h4 className="font-weight-400 font-semibold text-[#0D6EFD] text-lg xss:text-sm sm:text-base md:text-lg 2xl:text-[1.5rem] xl:mb-4 xss:mb-1 xs:mb-1 mb-2">
                  Step {steps[(selectedStep ?? currentStep) - 1].id}: {" "}
                  {steps[(selectedStep ?? currentStep) - 1].title}
                </h4>
                <p className="text-neutral-300 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] xl:leading-6 sm:leading-4 xs:leading-3 md:leading-5 3xl:leading-8">
                  {steps[(selectedStep ?? currentStep) - 1].description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Puzzle */}
        <div className="flex justify-center lg:justify-center relative 2xl:pl-10 xl:pl-2 lg:pt-10">
          <div className="relative w-[280px] h-[350px] sm:w-[360px] sm:h-[420px] scale-90 xs:scale-100 sm:ml-15">
            {/* AnimatePresence should wrap the list so exit animations run properly when currentStep decreases */}
            <AnimatePresence>
              {steps.map((step, idx) => {
                const show = idx === 0 || idx < currentStep; // same logic but explicit
                return (
                  show && (
                    <motion.div
                      key={step.id}
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -50, opacity: 0 }}
                      transition={{ duration: 0.28 }}
                      className="absolute w-[120px] h-[120px] z-10 cursor-pointer hover:scale-105 transition-transform"
                      style={{ top: `${positions[idx].top}px`, left: `${positions[idx].left}px` }}
                      onClick={() => setSelectedStep(step.id)}
                    >
                      <img
                        src={step.img}
                        alt={step.title}
                        width="120"
                        height="120"
                        className="object-contain w-full h-full"
                      />
                    </motion.div>
                  )
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
      )}
    </div>
  );
}