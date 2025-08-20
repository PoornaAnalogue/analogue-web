

// "use client";

// import { useRef, useEffect, useState, useCallback } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// // ==================== Puzzle Component ====================
// export default function PuzzleRes() {
//   // ==================== Puzzle Steps ====================
//   const steps = [
//     {
//       id: 1,
//       title: "Requirements",
//       img: "/puzzle1.png",
//       description:
//         "Understand goals. Communicate with stakeholders and analyze current systems to identify essential features and functionalities. Gather both functional and non-functional requirements to form a complete picture of the project.",
//     },
//     {
//       id: 2,
//       title: "Agreement",
//       img: "/puzzle2.png",
//       description:
//         "Finalize project scope, budget, and timelines with clients. Ensure all parties agree on deliverables and expectations before development starts. Draft a formal contract or agreement for clarity and transparency. ",
//     },
//     {
//       id: 3,
//       title: "UX / UI",
//       img: "/puzzle3.png",
//       description:
//         "Design intuitive interfaces that are visually appealing. Focus on usability, accessibility, and smooth user flows across all screens. Create wireframes, mockups, and prototypes to test ideas early. ",
//     },
//     {
//       id: 4,
//       title: "Development",
//       img: "/puzzle4.png",
//       description:
//         "Build the application’s frontend and backend. Ensure code is clean, maintainable, and scalable while implementing all required features. Use best practices, version control, and modular architecture. ",
//     },
//     {
//       id: 5,
//       title: "Testing",
//       img: "/puzzle5.png",
//       description:
//         "Perform rigorous testing including unit tests, integration tests, and user acceptance tests. Identify bugs and fix them to ensure quality. Maintain a bug tracker and regression test frequently. ",
//     },
//     {
//       id: 6,
//       title: "Client Approval",
//       img: "/puzzle6.png",
//       description:
//         "Present the product to the client for review. Gather feedback and make necessary adjustments before final deployment. Conduct demonstrations and clarify any remaining questions.",
//     },
//     {
//       id: 7,
//       title: "Deployment",
//       img: "/puzzle7.png",
//       description:
//         "Launch the application on the production server. Set up hosting, databases, and monitor initial performance to ensure smooth operation. Ensure proper security configurations and backups are in place.",
//     },
//     {
//       id: 8,
//       title: "User Will Use",
//       img: "/puzzle8.png",
//       description:
//         "Monitor how users interact with the product. Collect analytics and user feedback to improve experience and fix issues. Track performance, errors, and user behavior to inform future updates. ",
//     },
//     {
//       id: 9,
//       title: "Analogue Monitor",
//       img: "/puzzle9.png",
//       description:
//         "Track and maintain the system performance. Provide regular updates and support to ensure long-term success and stability. Perform maintenance, update dependencies, and plan for feature enhancements.",
//     },
//   ];

//   // ==================== Dynamic Puzzle Offsets ====================
//   const [offsets, setOffsets] = useState([]);

//   const rootFontSize = parseFloat(
//     getComputedStyle(document.documentElement).fontSize
//   );
//   const dynamicRem = (window.innerWidth * 0.45) / rootFontSize;

//   console.log("gg", dynamicRem);

//   // const updateOffsets = (width) =6 {
//   //   if (width <= 480) {
//   //     // Mobile (small)
//   //     return [
//   //       { x: "1rem", y: "0rem" },   //1
//   //       { x: "-1.5rem", y: "2rem" }, //2
//   //       { x: "-3.5rem", y: "0rem" }, //3
//   //       { x: "-1.25rem", y: "-2.5rem" }, //4
//   //       { x: "-3.5rem", y: "-0.3rem" }, //5
//   //       { x: "-6rem", y: "-2.5rem" }, //6
//   //       { x: "1rem", y: "-4.5rem" }, //7
//   //       { x: "-1.5rem", y: "-2.5rem" }, //8
//   //       { x: "-4rem", y: "-4.5rem" }, //9
//   //     ];
//   //   } else if (width <= 768) {
//   //     // Tablet
//   //     return [
//   //       { x: "1.5rem", y: "0rem" }, //1
//   //       { x: "0.2rem", y: "1.5rem" }, //2
//   //       { x: "-1.7rem", y: "0rem" }, //3
//   //       { x: "-0.2rem", y: "-1.8rem" }, //4
//   //       { x: "-1.7rem", y: "-0.3rem" }, //5
//   //       { x: "-3.2rem", y: "-1.8rem" }, //6
//   //       { x: "1.5rem", y: "-3.7rem" }, //7
//   //       { x: "0rem", y: "-2.3rem" }, //8
//   //       { x: "-1.5rem", y: "-3.5rem" }, //9
//   //     ];
//   //   } else {
//   //     // Desktop (large)
//   //     return [
//   //       { x: "2.5rem", y: "0rem" },
//   //       { x: "0rem", y: "2rem" },
//   //       { x: "-2.5rem", y: "0rem" },
//   //       { x: "0.3rem", y: "-2.5rem" },
//   //       { x: "-2.2rem", y: "-0.3rem" },
//   //       { x: "-4.5rem", y: "-2.5rem" },
//   //       { x: "2.5rem", y: "-5rem" },
//   //       { x: "0rem", y: "-2.8rem" },
//   //       { x: "-2.5rem", y: "-5rem" },
//   //     ];
//   //   }
//   // };

//   const updateOffsets = (width) => {
//     if (width <= 360) {
//       // Extra small mobile (360px)
//       return [
//         { x: "0.8rem", y: "0rem" }, //1
//         { x: "-1rem", y: "1.5rem" }, //2
//         { x: "-2.5rem", y: "0rem" }, //3
//         { x: "-1rem", y: "-2rem" }, //4
//         { x: "-2.5rem", y: "-0.2rem" }, //5
//         { x: "-4rem", y: "-2rem" }, //6
//         { x: "0.8rem", y: "-3.5rem" }, //7
//         { x: "-1rem", y: "-2rem" }, //8
//         { x: "-3rem", y: "-3.5rem" }, //9
//       ];
//     } else if (width <= 480) {
//       // Small mobile (up to 480px)
//       return [
//         { x: "1rem", y: "0rem" },
//         { x: "-1.5rem", y: "2rem" },
//         { x: "-3.5rem", y: "0rem" },
//         { x: "-1.25rem", y: "-2.5rem" },
//         { x: "-3.5rem", y: "-0.3rem" },
//         { x: "-6rem", y: "-2.5rem" },
//         { x: "1rem", y: "-4.5rem" },
//         { x: "-1.5rem", y: "-2.5rem" },
//         { x: "-4rem", y: "-4.5rem" },
//       ];
//     } else if (width <= 768) {
//       // Tablet
//       return [
//         { x: "1.5rem", y: "0rem" },
//         { x: "0.2rem", y: "1.5rem" },
//         { x: "-1.7rem", y: "0rem" },
//         { x: "-0.2rem", y: "-1.8rem" },
//         { x: "-1.7rem", y: "-0.3rem" },
//         { x: "-3.2rem", y: "-1.8rem" },
//         { x: "1.5rem", y: "-3.7rem" },
//         { x: "0rem", y: "-2.3rem" },
//         { x: "-1.5rem", y: "-3.5rem" },
//       ];
//     } else {
//       // Desktop
//       return [
//         { x: `${dynamicRem}px`, y: "0rem" },
//         { x: "0rem", y: "2rem" },
//         { x: "-2.5rem", y: "0rem" },
//         { x: "0.3rem", y: "-2.5rem" },
//         { x: "-2.2rem", y: "-0.3rem" },
//         { x: "-4.5rem", y: "-2.5rem" },
//         { x: "2.5rem", y: "-5rem" },
//         { x: "0rem", y: "-2.8rem" },
//         { x: "-2.5rem", y: "-5rem" },
//       ];
//     }
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       setOffsets(updateOffsets(window.innerWidth));
//     };

//     handleResize(); // run once on mount
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // ==================== Puzzle Directions ====================
//   const directions = [
//     { x: 0, y: -300 }, // from top
//     { x: -300, y: 50 }, // from left
//     { x: 300, y: 0 }, // from right
//     { x: 0, y: 300 }, // from bottom
//     { x: -300, y: 0 }, // from left
//     { x: 300, y: 0 }, // from right
//     { x: 0, y: -300 }, // from top
//     { x: 0, y: 300 }, // from bottom
//     { x: 0, y: 0 }, // center
//   ];

//   // ==================== State ====================
//   const [stepIndex, setStepIndex] = useState(1);
//   const containerRef = useRef(null);
//   const lastScroll = useRef(0);

//   const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

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
//     el.addEventListener("wheel", onWheel, { passive: false });
//     return () => el.removeEventListener("wheel", onWheel);
//   }, [onWheel]);

//   // ==================== Render ====================
//   return (
//     <div className="w-full">
//       <h2 className="text-3xl mt-2 sm:text-4xl mb-5 md:text-6xl text-center text-[#7B7E86]">
//         <span className="text-blue-400">O</span>
//         <span className="text-gray-300">ur Process</span>
//       </h2>

//       <div
//         ref={containerRef}
//         className="puzzle-container h-screen w-full flex justify-center bg-[#071637] text-white"
//       >
//         <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 max-w-6xl gap-6 items-start pt-10">
//           <div className="relative max-h-[80vh] overflow-y-auto pr-4 scrollbar-hide ">
//             <h3 className="mb-5 text-white font-bold leading-snug text-2xl sm:text-2xl md:text-3xl lg:text-4xl mt-0">
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
//                     Step {steps[stepIndex - 1].id}: {steps[stepIndex - 1].title}
//                   </h4>
//                   <p className="text-neutral-300 text-lg">
//                     {steps[stepIndex - 1].description}
//                   </p>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>

//           {/* Right: Puzzle */}
//           <div className="grid grid-cols-[200px_150px_300px] grid-rows-[200px_150p_200px] gap-2 w-full max-w-md relative">
//             {steps.map((step, idx) => (
//               <AnimatePresence key={step.id}>
//                 {idx < stepIndex && offsets[idx] && (
//                   <motion.img
//                     src={step.img}
//                     alt={step.title}
//                     initial={{
//                       opacity: 0,
//                       x: directions[idx].x,
//                       y: directions[idx].y,
//                       rotateY: 180,
//                       rotateX: 30,
//                       scale: 0.5,
//                     }}
//                     animate={{
//                       opacity: 1,
//                       x: offsets[idx].x,
//                       y: offsets[idx].y,
//                       rotateY: 0,
//                       rotateX: 0,
//                       scale: 1,
//                     }}
//                     transition={{
//                       type: "spring",
//                       stiffness: 180,
//                       damping: 14,
//                       delay: idx * 0.1,
//                     }}
//                     exit={{ opacity: 0 }}
//                     whileHover={{
//                       scale: 1.1,
//                       rotateZ: 10,
//                       transition: { type: "spring", stiffness: 300 },
//                     }}
//                     className="w-full h-full object-contain"
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

export default function PuzzleRes() {
  const steps = [
    { id: 1, title: "Requirements", img: "/puzzleimages/puzzle1.png", description: "Understand goals and gather requirements..." },
    { id: 2, title: "Agreement", img: "/puzzleimages/puzzle2.png", description: "Finalize scope, budget, and timelines..." },
    { id: 3, title: "UX / UI", img: "/puzzleimages/puzzle3.png", description: "Design intuitive interfaces..." },
    { id: 4, title: "Development", img: "/puzzleimages/puzzle4.png", description: "Build frontend and backend cleanly..." },
    { id: 5, title: "Testing", img: "/puzzleimages/puzzle5.png", description: "Perform rigorous testing..." },
    { id: 6, title: "Client Approval", img: "/puzzleimages/puzzle6.png", description: "Present product for review..." },
    { id: 7, title: "Deployment", img: "/puzzleimages/puzzle7.png", description: "Launch on production server..." },
    { id: 8, title: "User Will Use", img: "/puzzleimages/puzzle8.png", description: "Monitor user interactions..." },
    { id: 9, title: "Analogue Monitor", img: "/puzzleimages/puzzle9.png", description: "Track system performance..." },
  ];

  const [stepIndex, setStepIndex] = useState(1);
  const containerRef = useRef(null);
  const lastScroll = useRef(0);
  const [containerWidth, setContainerWidth] = useState(0);

  // ==================== Responsive scroll ====================
  const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

  const onWheel = useCallback(
    (e) => {
      const now = Date.now();
      if (now - lastScroll.current < 200) return;
      lastScroll.current = now;

      if ((e.deltaY > 0 && stepIndex < steps.length) || (e.deltaY < 0 && stepIndex > 1)) {
        e.preventDefault();
        if (e.deltaY > 0) setStepIndex((i) => clamp(i + 1, 1, steps.length));
        else setStepIndex((i) => clamp(i - 1, 1, steps.length));
      }
    },
    [stepIndex, steps.length]
  );

  useEffect(() => {
    const el = containerRef.current;
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [onWheel]);

  // ==================== Dynamic container width ====================
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) setContainerWidth(containerRef.current.offsetWidth);
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // ==================== Calculate dynamic positions ====================
  const getDynamicPosition = (idx) => {
    const itemsPerRow = containerWidth < 640 ? 2 : containerWidth < 1024 ? 3 : 3; // adjust rows for smaller screens
    const gap = containerWidth / itemsPerRow / 2; // dynamic gap based on width

    const row = Math.floor(idx / itemsPerRow);
    const col = idx % itemsPerRow;

    let x = col * gap;
    let y = row * gap;

    if (idx === 0) x += gap / 2; // first slide slightly right
    return { x, y };
  };

  return (
    <div className="w-full">
      <h2 className="text-3xl mt-2 sm:text-4xl mb-5 md:text-6xl text-center text-[#7B7E86]">
        <span className="text-blue-400">O</span>
        <span className="text-gray-300">ur Process</span>
      </h2>

      <div
        ref={containerRef}
        className="puzzle-container  py-10 h-screen w-full flex justify-center bg-[#071637] text-white p-4 md:p-10  sm:pt-16"
      >
        <div className="grid grid-cols-3 grid-rows-3 gap-2 w-full max-w-md mt-12 sm:mt-16 md:mt-0 md:pt-4">


          {/* Left content */}
          <div className="relative max-h-[80vh] overflow-y-auto pr-4 scrollbar-hide">
            <h3 className="mb-5 text-white font-bold leading-snug text-2xl md:text-3xl lg:text-4xl mt-0">
             vishwesh<br /> successful project
            </h3>
            <AnimatePresence mode="wait">
              {stepIndex > 0 && (
                <motion.div
                  key={steps[stepIndex - 1].id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-4"
                >
                  <h4 className="text-xl font-bold mb-2">
                    Step {steps[stepIndex - 1].id}: {steps[stepIndex - 1].title}
                  </h4>
                  <p className="text-neutral-300 text-lg">{steps[stepIndex - 1].description}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right dynamic puzzle */}
         
         

{/* Right: Puzzle */}
<div className="grid grid-cols-3 grid-rows-3 gap-2   w-full max-w-md
                mt-42 sm:mt-16 md:mt-0">
  {steps.map((step, idx) => (
    <AnimatePresence key={step.id}>
      {idx < stepIndex && offsets[idx] && (
        <motion.img
          src={step.img}
          alt={step.title}
          initial={{
            opacity: 0,
            x: directions[idx].x,
            y: directions[idx].y,
            rotateY: 180,
            rotateX: 30,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            x: offsets[idx].x,
            y: offsets[idx].y,
            rotateY: 0,
            rotateX: 0,
            scale: 1,
          }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 14,
            delay: idx * 0.1,
          }}
          exit={{ opacity: 0 }}
          whileHover={{
            scale: 1.1,
            rotateZ: 10,
            transition: { type: "spring", stiffness: 300 },
          }}
          className="w-full h-full object-contain"
        />
      )}
    </AnimatePresence>
  ))}
</div>
 
 
        </div>
      </div>
    </div>
  );
}
