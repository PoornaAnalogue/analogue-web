





"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Trail() {
  const steps = [
    { id: 1, title: "Requirements", img: "/puzzleimages/puzzle1.png", description: "Step 1 description goes here..." },
    { id: 2, title: "Agreement", img: "/puzzleimages/puzzle2.png", description: "Step 2 description goes here..." },
    { id: 3, title: "Planning", img: "/puzzleimages/puzzle3.png", description: "Step 3 description goes here..." },
    { id: 4, title: "Design", img: "/puzzleimages/puzzle4.png", description: "Step 4 description goes here..." },
    { id: 5, title: "Development", img: "/puzzleimages/puzzle5.png", description: "Step 5 description goes here..." },
    { id: 6, title: "Testing", img: "/puzzleimages/puzzle6.png", description: "Step 6 description goes here..." },
    { id: 7, title: "Deployment", img: "/puzzleimages/puzzle7.png", description: "Step 7 description goes here..." },
    { id: 8, title: "Maintenance", img: "/puzzleimages/puzzle8.png", description: "Step 8 description goes here..." },
    { id: 9, title: "Completion", img: "/puzzleimages/puzzle9.png", description: "Step 9 description goes here..." },
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault(); // 🔒 stop default scroll
      if (e.deltaY > 0) {
        // scroll down
        setCurrentStep((prev) =>
          prev < steps.length - 1 ? prev + 1 : prev
        );
      } else {
        // scroll up
        setCurrentStep((prev) =>
          prev > 0 ? prev - 1 : prev
        );
      }
    };

    const container = containerRef.current;
    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-screen h-screen overflow-hidden flex bg-gray-100"
    >
      {/* Left Puzzle Section */}
      <div className="w-1/2 flex items-center justify-center bg-white relative">
        <motion.img
          key={steps[currentStep].id}
          src={steps[currentStep].img}
          alt="Puzzle Step"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="max-h-[80%] max-w-[80%]"
        />
        <div className="absolute bottom-5 text-gray-500 text-sm">
          Step {currentStep + 1} / {steps.length}
        </div>
      </div>

      {/* Right Content Section */}
      <div className="w-1/2 flex flex-col justify-center items-start p-10">
        <motion.h2
          key={`title-${steps[currentStep].id}`}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-800"
        >
          {steps[currentStep].title}
        </motion.h2>
        <motion.p
          key={`desc-${steps[currentStep].id}`}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-gray-600 mt-4"
        >
          {steps[currentStep].description}
        </motion.p>
      </div>
    </div>
  );
}
