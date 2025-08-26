// "use client";

// import { useRef, useEffect, useState, useCallback } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Puzzle() {
//   // ==================== Puzzle Steps ====================
// const steps = [
//   {
//     id: 1,
//     title: "Requirements",
//     img: "/puzzleimages/puzzle1.png",
//     description:
//       "Our process begins with understanding your vision. We work closely with you to gather detailed requirements, analyze your business goals, and identify the exact needs of your mobile app. This stage ensures we align the app’s features, design, and functionality with your target audience and objectives. By defining clear requirements, we lay a strong foundation for a successful app development journey.",
//   },
//   {
//     id: 2,
//     title: "Agreement",
//     img: "/puzzleimages/puzzle2.png",
//     description:
//       "Once the requirements are clear, we move forward with a transparent agreement. This includes project scope, timeline, budget, and deliverables. Our goal is to ensure both parties are aligned from the very beginning. With a well-defined agreement in place, we create a smooth roadmap for development and build mutual trust that drives the project’s success.",
//   },
//   {
//     id: 3,
//     title: "UI / UX",
//     img: "/puzzleimages/puzzle3.png",
//     description:
//       "Design is where your vision comes alive! Our creative UX/UI team focuses on crafting intuitive user experiences and visually engaging interfaces. We design wireframes, prototypes, and layouts that not only reflect your brand identity but also ensure smooth navigation and user satisfaction. We ensure your app is both functional and visually stunning.",
//   },
//   {
//     id: 4,
//     title: "Development",
//     img: "/puzzleimages/puzzle4.png",
//     description:
//       "This is where concept turns into code. Our skilled developers translate the approved designs into a fully functional mobile application. We emphasize performance, security, and scalability while using modern frameworks such as React Native, Flutter, Swift, and Kotlin. By following a structured development cycle, we ensure your app is robust, reliable, and ready to scale as your business grows.",
//   },
//   {
//     id: 5,
//     title: "Testing",
//     img: "/puzzleimages/puzzle5.png",
//     description:
//       "Quality is at the heart of our process. Once development is complete, our QA experts thoroughly test the app for functionality, speed, and security. We perform device testing, bug fixes, and performance checks to make sure the app runs seamlessly across iOS, Android, and cross-platform environments. This step ensures your users get a flawless experience from the very first use.",
//   },
//   {
//     id: 6,
//     title: "Client Approval",
//     img: "/puzzleimages/puzzle6.png",
//     description:
//       "At this stage, we hand over the tested app for your final review. We walk you through its features, design flow, and overall performance. Any adjustments or fine-tuning you suggest are carefully implemented. Once you’re fully satisfied, we secure your approval to move ahead with the launch.",
//   },
//   {
//     id: 7,
//     title: "Deployment",
//     img: "/puzzleimages/puzzle7.png",
//     description:
//       "The launch day is here! Our team ensures your app goes live smoothly on app stores, meeting every technical and security requirement. With a flawless deployment process, we make sure your app is ready to reach users and create an immediate impact.",
//   },
//   {
//     id: 8,
//     title: "User Will Use",
//     img: "/puzzleimages/puzzle8.png",
//     description:
//       "Once deployed, your app becomes available for users to download and interact with. This is where the real value begins. Customers engage with your features, explore the design, and experience the solutions your app provides. Our focus is on ensuring users enjoy a seamless, engaging, and satisfying journey from the very first use.",
//   },
//   {
//     id: 9,
//     title: "Analogue Monitor",
//     img: "/puzzleimages/puzzle9.png",
//     description:
//       "We believe in long-term collaboration. After deployment, our team actively tracks your app’s performance, resolves issues, and rolls out updates. From maintaining system health to adding new features, we ensure your app remains reliable, secure, and aligned with user expectations helping your business grow continuously.",
//   },
// ];

//   // ==================== Puzzle Styles (Hard-coded switch) ====================
//   const styles = (index) => {
//     switch (index) {
//       case 0: // Top-left
//         return { top: 0, left: 0 };
//       case 1: // Top-center
//         return { top: 30, left: 95 };
//       case 2: // Top-right
//         return { top: 0, left: 190 };
//       case 3: // Middle-left
//         return { top: 95, left: -30 };
//       case 4: // Middle-center
//         return { top: 125, left: 65 };
//       case 5: // Middle-right
//         return { top: 95, left: 160 };
//       case 6: // Bottom-left
//         return { top: 190, left: 0 };
//       case 7: // Bottom-center
//         return { top: 220, left: 95 };
//       case 8: // Bottom-right
//         return { top: 190, left: 190 };
//       default:
//         return {};
//     }
//   };

//   // ==================== State ====================
//   const [stepIndex, setStepIndex] = useState(1);
//   const containerRef = useRef(null);
//   const lastScroll = useRef(0);

//   const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

//   // ==================== Scroll Logic ====================
//   const onWheel = useCallback(
//     (e) => {
//       const now = Date.now();
//       if (now - lastScroll.current < 200) return;
//       lastScroll.current = now;

//       if (
//         (e.deltaY > 0 && stepIndex < steps.length) ||
//         (e.deltaY < 0 && stepIndex > 1)
//       ) {
//         e.preventDefault();
//         if (e.deltaY > 0) {
//           setStepIndex((i) => clamp(i + 1, 1, steps.length));
//         } else {
//           setStepIndex((i) => clamp(i - 1, 1, steps.length));
//         }
//       }
//     },
//     [stepIndex, steps.length]
//   );

//   useEffect(() => {
//     const el = containerRef.current;
//     if (!el) return;
//     el.addEventListener("wheel", onWheel, { passive: false });
//     return () => el.removeEventListener("wheel", onWheel);
//   }, [onWheel]);

//   // ==================== Render ====================
//   return (
//     <div className="w-full">
//       {/* Section Title */}
//       <h2 className="text-3xl mt-2 sm:text-4xl mb-5 md:text-6xl text-center text-[#7B7E86]">
//         <span className="text-blue-400">O</span>
//         <span className="text-gray-300">ur Process</span>
//       </h2>

//       {/* Puzzle Section */}
//       <div
//   ref={containerRef}
//   className="puzzle-container py-4 px-2 w-full flex flex-col lg:flex-row items-center justify-start bg-[#071637] text-white overflow-y-auto max-h-screen"
// >

//         <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 max-w-6xl gap-6 items-start">
//           {/* Left Side Content */}
//           <div className="relative max-h-[80vh]  pr-4 scrollbar-hide">
//             <h3 className="text-white font-bold text-2xl mb-10 md:text-3xl leading-snug">
//               Process we follow for <br /> successful project
//             </h3>
//             <AnimatePresence mode="wait">
//               {stepIndex > 0 && (
//                 <motion.div
//                   key={steps[stepIndex - 1].id}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -20 }}
//                   transition={{ duration: 0.4 }}
//                   className="space-y-4"
//                 >
//                   <h4 className="text-xl font-bold mb-2">
//                     Step {steps[stepIndex - 1].id}:{" "}
//                     {steps[stepIndex - 1].title}
//                   </h4>
//                   <p className="text-neutral-300 text-lg">
//                     {steps[stepIndex - 1].description}
//                   </p>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>

//           {/* Right Side Puzzle */}
//           <div className="relative w-full max-w-[360px] h-[360px] mx-auto lg:ml-7 xss:ml-5">
//             {steps.map((step, idx) => (
//               <AnimatePresence key={step.id}>
//                 {idx < stepIndex && (
//                   <motion.img
//                     src={step.img}
//                     alt={step.title}
//                     initial={{ y: 50, opacity: 0 }}
//                     animate={{ y: 0, opacity: 1 }}
//                     whileHover={{ scale: 1.05, rotate: 5 }}
//                     transition={{ duration: 0.4 }}
//                     className="absolute w-[120px] h-[120px] object-contain z-10"
//                     style={styles(idx)} // <-- absolute positions applied here
//                   />
//                 )}
//               </AnimatePresence>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



















"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Puzzle() {
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
      title: "UI / UX",
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
        "We believe in long-term collaboration. After deployment, our team actively tracks your app’s performance, resolves issues, and rolls out updates. From maintaining system health to adding new features, we ensure your app remains reliable, secure, and aligned with user expectations helping your business grow continuously.",
    },
  ];

  const styles = (index) => {
    switch (index) {
      case 0:
        return { top: 0, left: 2 };
      case 1:
        return { top: 30, left: 95 };
      case 2:
        return { top: 0, left: 190 };
      case 3:
        return { top: 95, left: -30 };
      case 4:
        return { top: 125, left: 65 };
      case 5:
        return { top: 95, left: 160 };
      case 6:
        return { top: 190, left: 0 };
      case 7:
        return { top: 220, left: 95 };
      case 8:
        return { top: 190, left: 190 };
      default:
        return {};
    }
  };

  const [stepIndex, setStepIndex] = useState(1);
  const leftRef = useRef(null); // ← now scroll is on left side content
  const touchStartY = useRef(0);
  const lastScroll = useRef(0);
  const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

  const onWheel = useCallback(
    (e) => {
      const now = Date.now();
      if (now - lastScroll.current < 200) return;
      lastScroll.current = now;

      if (
        (e.deltaY > 0 && stepIndex < steps.length) ||
        (e.deltaY < 0 && stepIndex > 1)
      ) {
        e.preventDefault();
        setStepIndex((i) =>
          clamp(i + (e.deltaY > 0 ? 1 : -1), 1, steps.length)
        );
      }
    },
    [stepIndex, steps.length]
  );

  const onTouchStart = (e) => (touchStartY.current = e.touches[0].clientY);
  const onTouchMove = (e) => {
    const deltaY = touchStartY.current - e.touches[0].clientY;
    if (Math.abs(deltaY) > 30) {
      if (deltaY > 0 && stepIndex < steps.length)
        setStepIndex((i) => Math.min(i + 1, steps.length));
      else if (deltaY < 0 && stepIndex > 1)
        setStepIndex((i) => Math.max(i - 1, 1));
      touchStartY.current = e.touches[0].clientY;
    }
  };

  useEffect(() => {
    const el = leftRef.current;
    if (!el) return;

    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: false });

    return () => {
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
    };
  }, [onWheel, stepIndex]);

  return ( 
    <div>
      <h2 className="text-3xl sm:text-4xl md:text-6xl text-center text-[#7B7E86] mb-12">
        <span className="text-blue-400">O</span>
        <span className="text-gray-300">ur Process</span>
      </h2>

      <div className="w-full flex flex-col lg:flex-row items-start justify-center bg-[#071637] text-white py-6 px-4 lg:px-12 gap-6">
        {/* Left Side Content */}
        <div ref={leftRef} className="lg:w-1/2 flex-shrink-0">
          <h3 className="text-white font-bold text-2xl md:text-3xl leading-snug">
            Process we follow for <br /> successful project
          </h3>
          <AnimatePresence mode="wait">
            {stepIndex > 0 && (
              <motion.div
                key={steps[stepIndex - 1].id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="mt-6 space-y-4 max-h-auto overflow-y-auto pr-2"
              >
                <h4 className="text-xl font-bold mb-2">
                  Step {steps[stepIndex - 1].id}: {steps[stepIndex - 1].title}
                </h4>
                <p className="text-neutral-300 text-lg">
                  {steps[stepIndex - 1].description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Side Puzzle Images */}
        <div className="lg:w-1/2 w-full h-[350px] md:h-[400px] relative overflow -y-auto p-4">
          {steps.map((step, idx) => (
            <AnimatePresence key={step.id}>
              {idx < stepIndex && (
                <motion.img
                  src={step.img}
                  alt={step.title}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ duration: 0.4 }}
                  className="absolute w-[120px] h-[120px] object-contain z-10"
                  style={{
                    ...styles(idx),
                    left: `${
                      styles(idx).left +
                      (typeof window !=="undefined" && window.innerWidth < 768
                        ? 10
                        : 0)
                    }px`,
                  }}
                />
              )}
            </AnimatePresence>
          ))}
        </div>
      </div>
    </div>
  );
}
