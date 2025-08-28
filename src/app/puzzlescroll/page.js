// "use client";

// import Image from "next/image";
// import { useEffect, useRef, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function PuzzleScrollSection() {
//   const [currentStep, setCurrentStep] = useState(1);
//   const scrollLock = useRef(false);
//   const containerRef = useRef(null);
//   const touchStartY = useRef(null);
//   const [inView, setInView] = useState(false);

//   const maxStep = 9;
//   const minStep = 1;

//   const steps = [
//     {
//       id: 1,
//       title: "Requirements",
//       img: "/puzzleimages/puzzle1.png",
//       description:
//         "Our process begins with understanding your vision. We work closely with you to gather detailed requirements, analyze your business goals, and identify the exact needs of your mobile app. This stage ensures we align the app’s features, design, and functionality with your target audience and objectives. By defining clear requirements, we lay a strong foundation for a successful app development journey.",
//     },
//     {
//       id: 2,
//       title: "Agreement",
//       img: "/puzzleimages/puzzle2.png",
//       description:
//         "Once the requirements are clear, we move forward with a transparent agreement. This includes project scope, timeline, budget, and deliverables. Our goal is to ensure both parties are aligned from the very beginning. With a well-defined agreement in place, we create a smooth roadmap for development and build mutual trust that drives the project’s success.",
//     },
//     {
//       id: 3,
//       title: "UI / UX",
//       img: "/puzzleimages/puzzle3.png",
//       description:
//         "Design is where your vision comes alive! Our creative UX/UI team focuses on crafting intuitive user experiences and visually engaging interfaces. We design wireframes, prototypes, and layouts that not only reflect your brand identity but also ensure smooth navigation and user satisfaction. We ensure your app is both functional and visually stunning.",
//     },
//     {
//       id: 4,
//       title: "Development",
//       img: "/puzzleimages/puzzle4.png",
//       description:
//         "This is where concept turns into code. Our skilled developers translate the approved designs into a fully functional mobile application. We emphasize performance, security, and scalability while using modern frameworks such as React Native, Flutter, Swift, and Kotlin. By following a structured development cycle, we ensure your app is robust, reliable, and ready to scale as your business grows.",
//     },
//     {
//       id: 5,
//       title: "Testing",
//       img: "/puzzleimages/puzzle5.png",
//       description:
//         "Quality is at the heart of our process. Once development is complete, our QA experts thoroughly test the app for functionality, speed, and security. We perform device testing, bug fixes, and performance checks to make sure the app runs seamlessly across iOS, Android, and cross-platform environments. This step ensures your users get a flawless experience from the very first use.",
//     },
//     {
//       id: 6,
//       title: "Client Approval",
//       img: "/puzzleimages/puzzle6.png",
//       description:
//         "At this stage, we hand over the tested app for your final review. We walk you through its features, design flow, and overall performance. Any adjustments or fine-tuning you suggest are carefully implemented. Once you’re fully satisfied, we secure your approval to move ahead with the launch.",
//     },
//     {
//       id: 7,
//       title: "Deployment",
//       img: "/puzzleimages/puzzle7.png",
//       description:
//         "The launch day is here! Our team ensures your app goes live smoothly on app stores, meeting every technical and security requirement. With a flawless deployment process, we make sure your app is ready to reach users and create an immediate impact.",
//     },
//     {
//       id: 8,
//       title: "User Will Use",
//       img: "/puzzleimages/puzzle8.png",
//       description:
//         "Once deployed, your app becomes available for users to download and interact with. This is where the real value begins. Customers engage with your features, explore the design, and experience the solutions your app provides. Our focus is on ensuring users enjoy a seamless, engaging, and satisfying journey from the very first use.",
//     },
//     {
//       id: 9,
//       title: "Analogue Monitor",
//       img: "/puzzleimages/puzzle9.png",
//       description:
//         "We believe in long-term collaboration. After deployment, our team actively tracks your app’s performance, resolves issues, and rolls out updates. From maintaining system health to adding new features, we ensure your app remains reliable, secure, and aligned with user expectations helping your business grow continuously.",
//     },
//   ];
//   const positions = [
//     { top: 0, left: 2 },
//     { top: 30, left: 95 },
//     { top: 0, left: 190 },
//     { top: 95, left: -30 },
//     { top: 125, left: 65 },
//     { top: 95, left: 160 },
//     { top: 190, left: 0 },
//     { top: 220, left: 95 },
//     { top: 190, left: 190 },
//   ];

//   const styles = (index) => positions[index] || {};

//   const lockScroll = () => {
//     scrollLock.current = true;
//     setTimeout(() => (scrollLock.current = false), 400);
//   };

//   const handleScrollChange = (direction) => {
//     if (scrollLock.current) return;

//     if (direction === "down" && currentStep < maxStep) {
//       setCurrentStep((prev) => prev + 1);
//       lockScroll();
//     } else if (direction === "up" && currentStep > minStep) {
//       setCurrentStep((prev) => prev - 1);
//       lockScroll();
//     }
//   };

//   // Wheel scroll
//   useEffect(() => {
//     const handleWheel = (e) => {
//       if (currentStep > minStep && currentStep < maxStep) {
//         // Only handle puzzle scroll while steps are in range
//         if (e.deltaY > 0) handleScrollChange("down");
//         else if (e.deltaY < 0) handleScrollChange("up");
//         e.preventDefault(); // lock native scroll only between steps
//       } else if (currentStep === minStep && e.deltaY > 0) {
//         // scrolling down from step 1
//         handleScrollChange("down");
//         e.preventDefault();
//       } else if (currentStep === maxStep && e.deltaY < 0) {
//         // scrolling up from last step
//         handleScrollChange("up");
//         e.preventDefault();
//       }
//       // else: allow natural scroll beyond min/max
//     };

//     const container = containerRef.current;
//     container?.addEventListener("wheel", handleWheel, { passive: false });
//     return () => container?.removeEventListener("wheel", handleWheel);
//   }, [currentStep]);

//   // Touch scroll
//   useEffect(() => {
//     const handleTouchStart = (e) =>
//       (touchStartY.current = e.touches[0].clientY);
//     const handleTouchEnd = (e) => {
//       if (touchStartY.current === null) return;
//       const diffY = touchStartY.current - e.changedTouches[0].clientY;
//       if (Math.abs(diffY) > 30) {
//         if (diffY > 0) handleScrollChange("down");
//         else handleScrollChange("up");
//       }
//       touchStartY.current = null;
//     };
//     const container = containerRef.current;
//     container?.addEventListener("touchstart", handleTouchStart, {
//       passive: true,
//     });
//     container?.addEventListener("touchend", handleTouchEnd, { passive: true });

//     return () => {
//       container?.removeEventListener("touchstart", handleTouchStart);
//       container?.removeEventListener("touchend", handleTouchEnd);
//     };
//   }, [currentStep]);

//   // OUR PROCESS ...
//   useEffect(() => {
//     const section = document.getElementById("process-heading");

//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) setInView(true);
//         else setInView(false); // reset when section leaves view
//       },
//       { threshold: 0.3 }
//     );

//     if (section) observer.observe(section);

//     return () => section && observer.unobserve(section);
//   }, []);
//   const heading = "ur Process".split("");

//   const letterVariants = {
//     hidden: { color: "#7B7E86" }, // gray
//     visible: { color: "#3C6FA2" }, // blue
//   };

//   return (
//     <div>
//       <h2
//         id="process-heading"
//         className="text-2xl font-['Urbanist']  sm:text-3xl md:text-5xl text-center mb-8 sm:mb-12 flex justify-center flex-wrap"
//       >
//         <span className="text-[#3C6FA2] ">O</span>
//         {heading.map((char, index) => (
//           <motion.span
//             key={index}
//             className=" "
//             variants={letterVariants}
//             initial="hidden"
//             animate={inView ? "visible" : "hidden"}
//             transition={{ delay: index * 0.05 }}
//           >
//             {char === " " ? "\u00A0" : char} {/* preserve space */}
//           </motion.span>
//         ))}
//       </h2>

//       {/* ....................................... */}

//       <div
//         className="h-svh w-full bg-[#071637] pt-10 text-white px-4 lg:px-12"
//         ref={containerRef}
//       >
//         <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
//           {/* Left Content */}
//           <div className="lg:w-1/2 overflow-y-auto scrollbar-hide ">
//             <div className="p-4 rounded-xl mb-6">
//               <h3 className="text-white font-bold text-3xl sm:text-xl">
//                 Process we follow for <br /> successful project
//               </h3>
//             </div>

//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={steps[currentStep - 1].id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ duration: 0.4 }}
//                 className="bg-[#0f1a3d] p-6 rounded-2xl shadow-lg"
//               >
//                 <h3 className="text-blue-400 font-bold text-sm sm:text-2xl mb-2">
//                   Step {currentStep}:
//                 </h3>
//                 <h2 className="text-white font-bold text-2xl sm:text-3xl mb-3">
//                   {steps[currentStep - 1].title}
//                 </h2>
//                 <p className="text-white/70 text-base leading-relaxed">
//                   {steps[currentStep - 1].description}
//                 </p>
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           {/* Right Puzzle */}

//           <div className="lg:w-1/2 w-full h-[300px]  pt-20 sm:h-[350px] md:h-[400px] relative mt-8 ml-5">
//             {steps.map((step, idx) => (
//               <AnimatePresence key={step.id}>
//                 {idx < currentStep && (
//                   <motion.div
//                     key={step.id}
//                     initial={{ y: 50, opacity: 0 }}
//                     animate={{ y: 0, opacity: 1 }}
//                     exit={{ y: -50, opacity: 0 }}
//                     transition={{ duration: 0.4 }}
//                     className="absolute w-[90px] sm:w-[110px] md:w-[120px] h-auto"
//                     style={styles(idx)}
//                   >
//                     <Image
//                       src={step.img}
//                       alt={step.title}
//                       width={120}
//                       height={120}
//                       className="object-contain rounded-lg shadow-lg"
//                     />
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useRef, useEffect, useState, useCallback } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Puzzle() {
//   const steps = [
//     { id: 1, title: "Requirements", img: "/puzzleimages/puzzle1.png", description: "Our process begins with understanding your vision. We work closely with you to gather detailed requirements, analyze your business goals, and identify the exact needs of your mobile app. This stage ensures we align the app’s features, design, and functionality with your target audience and objectives. By defining clear requirements, we lay a strong foundation for a successful app development journey." },
//     { id: 2, title: "Agreement", img: "/puzzleimages/puzzle2.png", description: "Once the requirements are clear, we move forward with a transparent agreement. This includes project scope, timeline, budget, and deliverables. Our goal is to ensure both parties are aligned from the very beginning. With a well-defined agreement in place, we create a smooth roadmap for development and build mutual trust that drives the project’s success." },
//     { id: 3, title: "UI / UX", img: "/puzzleimages/puzzle3.png", description: "Design is where your vision comes alive! Our creative UX/UI team focuses on crafting intuitive user experiences and visually engaging interfaces. We design wireframes, prototypes, and layouts that not only reflect your brand identity but also ensure smooth navigation and user satisfaction. We ensure your app is both functional and visually stunning." },
//     { id: 4, title: "Development", img: "/puzzleimages/puzzle4.png", description: "This is where concept turns into code. Our skilled developers translate the approved designs into a fully functional mobile application. We emphasize performance, security, and scalability while using modern frameworks such as React Native, Flutter, Swift, and Kotlin. By following a structured development cycle, we ensure your app is robust, reliable, and ready to scale as your business grows." },
//     { id: 5, title: "Testing", img: "/puzzleimages/puzzle5.png", description: "Quality is at the heart of our process. Once development is complete, our QA experts thoroughly test the app for functionality, speed, and security. We perform device testing, bug fixes, and performance checks to make sure the app runs seamlessly across iOS, Android, and cross-platform environments. This step ensures your users get a flawless experience from the very first use." },
//     { id: 6, title: "Client Approval", img: "/puzzleimages/puzzle6.png", description: "At this stage, we hand over the tested app for your final review. We walk you through its features, design flow, and overall performance. Any adjustments or fine-tuning you suggest are carefully implemented. Once you’re fully satisfied, we secure your approval to move ahead with the launch." },
//     { id: 7, title: "Deployment", img: "/puzzleimages/puzzle7.png", description: "The launch day is here! Our team ensures your app goes live smoothly on app stores, meeting every technical and security requirement. With a flawless deployment process, we make sure your app is ready to reach users and create an immediate impact." },
//     { id: 8, title: "User Will Use", img: "/puzzleimages/puzzle8.png", description: "Once deployed, your app becomes available for users to download and interact with. This is where the real value begins. Customers engage with your features, explore the design, and experience the solutions your app provides. Our focus is on ensuring users enjoy a seamless, engaging, and satisfying journey from the very first use." },
//     { id: 9, title: "Analogue Monitor", img: "/puzzleimages/puzzle9.png", description: "We believe in long-term collaboration. After deployment, our team actively tracks your app’s performance, resolves issues, and rolls out updates. From maintaining system health to adding new features, we ensure your app remains reliable, secure, and aligned with user expectations helping your business grow continuously." },
//   ];

//   const positions = [
//     { top: 0, left: 2 },
//     { top: 30, left: 95 },
//     { top: 0, left: 190 },
//     { top: 95, left: -30 },
//     { top: 125, left: 65 },
//     { top: 95, left: 160 },
//     { top: 190, left: 0 },
//     { top: 220, left: 95 },
//     { top: 190, left: 190 },
//   ];

//   const styles = (index) => positions[index] || {};

//   const [stepIndex, setStepIndex] = useState(1);
//   const leftRef = useRef(null);
//   const touchStartY = useRef(0);
//   const lastScroll = useRef(0);
//   const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

//   // wheel scroll handler
//   const onWheel = useCallback(
//     (e) => {
//       const now = Date.now();
//       if (now - lastScroll.current < 200) return;
//       lastScroll.current = now;

//       if ((e.deltaY > 0 && stepIndex < steps.length) || (e.deltaY < 0 && stepIndex > 1)) {
//         e.preventDefault();
//         setStepIndex((i) => clamp(i + (e.deltaY > 0 ? 1 : -1), 1, steps.length));
//       }
//     },
//     [stepIndex, steps.length]
//   );

//   const onTouchStart = (e) => (touchStartY.current = e.touches[0].clientY);
//   const onTouchMove = (e) => {
//     const deltaY = touchStartY.current - e.touches[0].clientY;
//     if (Math.abs(deltaY) > 30) {
//       if (deltaY > 0 && stepIndex < steps.length) setStepIndex((i) => Math.min(i + 1, steps.length));
//       else if (deltaY < 0 && stepIndex > 1) setStepIndex((i) => Math.max(i - 1, 1));
//       touchStartY.current = e.touches[0].clientY;
//     }
//   };

//   useEffect(() => {
//     const el = leftRef.current;
//     if (!el) return;

//     el.addEventListener("wheel", onWheel, { passive: false });
//     el.addEventListener("touchstart", onTouchStart, { passive: true });
//     el.addEventListener("touchmove", onTouchMove, { passive: false });

//     return () => {
//       el.removeEventListener("wheel", onWheel);
//       el.removeEventListener("touchstart", onTouchStart);
//       el.removeEventListener("touchmove", onTouchMove);
//     };
//   }, [onWheel]);

//   // Animated heading like old version
//   const heading = "Our Process".split("");
//   const [inView, setInView] = useState(false);
//   useEffect(() => {
//     const section = document.getElementById("process-heading");
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) setInView(true);
//       },
//       { threshold: 0.3 }
//     );
//     if (section) observer.observe(section);
//     return () => section && observer.unobserve(section);
//   }, []);

//   const letterVariants = { hidden: { color: "#7B7E86" }, visible: { color: "#3C6FA2" } };

//   return (
//     <div className="w-full">
//       {/* Animated Heading */}
//       <h2
//         id="process-heading"
//         className="text-3xl sm:text-4xl md:text-6xl text-center mb-12 flex justify-center flex-wrap"
//       >
//         {heading.map((char, index) => (
//           <motion.span
//             key={index}
//             variants={letterVariants}
//             initial="hidden"
//             animate={inView ? "visible" : "hidden"}
//             transition={{ delay: index * 0.05 }}
//             className="inline-block"
//           >
//             {char === " " ? "\u00A0" : char}
//           </motion.span>
//         ))}
//       </h2>

//       <div className="w-full flex flex-col lg:flex-row items-start justify-center bg-[#071637] text-white py-6 px-4 lg:px-12 gap-6">
//         {/* Left Side Content */}
//         <div ref={leftRef} className="lg:w-1/2 flex-shrink-0">
//           <h3 className="text-white font-bold text-2xl md:text-3xl leading-snug">
//             Process we follow for <br /> successful project
//           </h3>
//           <AnimatePresence mode="wait">
//             {stepIndex > 0 && (
//               <motion.div
//                 key={steps[stepIndex - 1].id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ duration: 0.4 }}
//                 className="mt-6 space-y-4 max-h-auto overflow-y-auto pr-2"
//               >
//                 <h4 className="text-xl font-bold mb-2">
//                   Step {steps[stepIndex - 1].id}: {steps[stepIndex - 1].title}
//                 </h4>
//                 <p className="text-neutral-300 text-lg">{steps[stepIndex - 1].description}</p>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>

//         {/* Right Side Puzzle Images */}
//         <div className="lg:w-1/2 w-full h-[350px] md:h-[400px] relative overflow-y-auto p-4">
//           {steps.map((step, idx) => (
//             <AnimatePresence key={step.id}>
//               {idx < stepIndex && (
//                 <motion.img
//                   src={step.img}
//                   alt={step.title}
//                   initial={{ y: 50, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   whileHover={{ scale: 1.05, rotate: 5 }}
//                   transition={{ duration: 0.4 }}
//                   className="absolute w-[120px] h-[120px] object-contain z-10"
//                   style={{
//                     ...styles(idx),
//                     left: `${
//                       styles(idx).left +
//                       (typeof window !== "undefined" && window.innerWidth < 768 ? 10 : 0)
//                     }px`,
//                   }}
//                 />
//               )}
//             </AnimatePresence>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }










"use client";

import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function PuzzleScroll() {
  const steps = [
    {
      id: 1,
      title: "Requirements",
      img: "/puzzleimages/puzzle1.png",
      description:
        "Our process begins with understanding your vision. We work closely with you to gather detailed requirements, analyze your business goals, and identify the exact needs of your mobile app.",
    },
    {
      id: 2,
      title: "Agreement",
      img: "/puzzleimages/puzzle2.png",
      description:
        "Once the requirements are clear, we move forward with a transparent agreement. This includes project scope, timeline, budget, and deliverables.",
    },
    {
      id: 3,
      title: "UI / UX",
      img: "/puzzleimages/puzzle3.png",
      description:
        "Design is where your vision comes alive! Our creative UX/UI team focuses on crafting intuitive user experiences and visually engaging interfaces.",
    },
    {
      id: 4,
      title: "Development",
      img: "/puzzleimages/puzzle4.png",
      description:
        "This is where concept turns into code. Our skilled developers translate the approved designs into a fully functional mobile application.",
    },
    {
      id: 5,
      title: "Testing",
      img: "/puzzleimages/puzzle5.png",
      description:
        "Quality is at the heart of our process. Once development is complete, our QA experts thoroughly test the app for functionality, speed, and security.",
    },
    {
      id: 6,
      title: "Client Approval",
      img: "/puzzleimages/puzzle6.png",
      description:
        "At this stage, we hand over the tested app for your final review. We walk you through its features, design flow, and overall performance.",
    },
    {
      id: 7,
      title: "Deployment",
      img: "/puzzleimages/puzzle7.png",
      description:
        "The launch day is here! Our team ensures your app goes live smoothly on app stores, meeting every technical and security requirement.",
    },
    {
      id: 8,
      title: "User Will Use",
      img: "/puzzleimages/puzzle8.png",
      description:
        "Once deployed, your app becomes available for users to download and interact with. This is where the real value begins.",
    },
    {
      id: 9,
      title: "Analogue Monitor",
      img: "/puzzleimages/puzzle9.png",
      description:
        "We believe in long-term collaboration. After deployment, our team actively tracks your app’s performance, resolves issues, and rolls out updates.",
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

  const containerRef = useRef(null);
  const touchStartY = useRef(null);
  const scrollLock = useRef(false);

  const maxStep = steps.length;
  const minStep = 1;

  const lockScrollTemporarily = () => {
    scrollLock.current = true;
    setTimeout(() => (scrollLock.current = false), 400);
  };



  // Detect when container hits the top of viewport


  
 
  const handleScrollChange = (direction) => {
  if (scrollLock.current) return;

  // Scroll down → go forward in puzzle
  if (direction === "down" && currentStep < maxStep) {
    setCurrentStep((prev) => prev + 1);
    lockScrollTemporarily();
  } 
  // At last step + scroll down → unlock and leave puzzle
  else if (direction === "down" ) {
    setIsLocked(false);
  } 
  // Scroll up → go backward in puzzle
  else if (direction === "up" && currentStep > minStep) {
    setCurrentStep((prev) => prev - 1);
  
  } 
  // At step 1 + scroll up → unlock and leave puzzle
  else if (direction === "up" ) {
    setIsLocked(false);
  }
};
  
 

  
  // Track scroll position for direction
const lastScrollY = useRef(0);

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];

      // detect scroll direction
      const currentY = window.scrollY;
      const direction = currentY > lastScrollY.current ? "down" : "up";
      lastScrollY.current = currentY;

      if (entry.boundingClientRect.top <= 0 && entry.isIntersecting) {
        if (direction === "down") {
          setIsLocked(true);   // lock only on DOWN
        } else {
          setIsLocked(false);  // unlock when coming from bottom (UP)
        }
      } else {
        setIsLocked(false); // unlock outside section
      }
    },
    { threshold: 0, rootMargin: "0px 0px -100% 0px" }
  );

  if (containerRef.current) observer.observe(containerRef.current);

  return () => {
    if (containerRef.current) observer.unobserve(containerRef.current);
  };
}, []);
 

  useEffect(() => {
  const preventTouch = (e) => {
    if (isLocked) e.preventDefault(); // Stops touch scrolling on mobile
  };

  if (isLocked) {
    document.body.style.overflow = "hidden"; // Stops scroll on desktop
    document.body.addEventListener("touchmove", preventTouch, { passive: false });
  } else {
    document.body.style.overflow = ""; // Unlock scroll
    document.body.removeEventListener("touchmove", preventTouch);
  }

  return () => {
    document.body.removeEventListener("touchmove", preventTouch);
  };
}, [isLocked]);
 

  // Wheel scroll
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

  // Touch scroll
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

  // Heading animation
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
                key={steps[currentStep - 1].id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="mt-6 space-y-4 pr-2"
              >
                <h4 className="text-xl font-bold mb-2">
                  Step {steps[currentStep - 1].id}:{" "}
                  {steps[currentStep - 1].title}
                </h4>
                <p className="text-neutral-300 text-lg">
                  {steps[currentStep - 1].description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Puzzle */}
        <div className="flex justify-center lg:justify-start relative 2xl:pl-10 xl:pl-2">
          <div className="w-[280px] sm:w-[320px] md:w-[360px] h-[350px] md:h-[400px] relative">
            {steps.map((step, idx) => (
              <AnimatePresence key={step.id}>
                {idx < currentStep && (
                  <motion.div
                    key={step.id}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -50, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute w-[120px] h-[120px] z-10"
                    style={positions[idx]}
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