"use client";
 
import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
 
const steps = [
  {
    id: 1,
    title: "Requirements",
    img: "https://api.cinepass.in/images/articles/1751347439896.png",
  },
  {
    id: 2,
    title: "Agreement",
    img: "https://api.cinepass.in/images/articles/1751347439896.png",
  },
  {
    id: 3,
    title: "UX / UI",
    img: "https://api.cinepass.in/images/articles/1751347439896.png",
  },
  {
    id: 4,
    title: "Development",
    img: "https://api.cinepass.in/images/articles/1751347439896.png",
  },
  {
    id: 5,
    title: "Testing",
    img: "https://api.cinepass.in/images/articles/1751347439896.png",
  },
  {
    id: 6,
    title: "Client Approval",
    img: "https://api.cinepass.in/images/articles/1751347439896.png",
  },
  {
    id: 7,
    title: "Deployment",
    img: "https://api.cinepass.in/images/articles/1751347439896.png",
  },
  {
    id: 8,
    title: "User Will Use",
    img: "https://api.cinepass.in/images/articles/1751347439896.png",
  },
  {
    id: 9,
    title: "Analogue Monitor",
    img: "https://api.cinepass.in/images/articles/1751347439896.png",
  },
];
 
export default function PuzzleSteps() {
  const [stepIndex, setStepIndex] = useState(1);
  const containerRef = useRef(null);
  const lastScroll = useRef(0);
 
  const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
 
  const onWheel = useCallback((e) => {
    const now = Date.now();
    if (now - lastScroll.current < 200) return; // throttle
    lastScroll.current = now;
 
    if (e.deltaY > 0) {
      setStepIndex((i) => clamp(i + 1, 1, steps.length));
    } else if (e.deltaY < 0) {
      setStepIndex((i) => clamp(i - 1, 1, steps.length));
    }
  }, []);
 
  useEffect(() => {
    const el = containerRef.current;
    el.addEventListener("wheel", onWheel, { passive: true });
    return () => el.removeEventListener("wheel", onWheel);
  }, [onWheel]);
 
  return (
    <div
      ref={containerRef}
      className="h-screen w-full flex items-center justify-center bg-neutral-900 text-white overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 max-w-6xl gap-6 items-center">
        <div className="relative">
          <AnimatePresence mode="wait">
            {stepIndex > 0 && (
              <motion.div
                key={steps[stepIndex - 1].id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="text-3xl font-bold mb-4">
                  Step {steps[stepIndex - 1].id}: {steps[stepIndex - 1].title}
                </h2>
                <p className="text-neutral-400">
                  This is the description for{" "}
                  <strong>{steps[stepIndex - 1].title}</strong>. Scroll to see
                  the next puzzle piece appear.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
 
        <div className="grid grid-cols-3 grid-rows-3 gap-2 relative">
          {steps.map((step, idx) => (
            <AnimatePresence key={step.id}>
              {idx < stepIndex && (
                <motion.img
                  src={step.img}
                  alt={step.title}
                  initial={
                    idx === 0
                      ? false // Step 1 appears instantly
                      : { opacity: 0, x: 100 }
                  }
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 100 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-contain"
                  style={{
                    top: idx === 2 ? "20px" : "80px", // custom top offset
                    left: idx === 2 ? "40px" : "120px", // custom left offset
                    width: "300px", // fixed size (optional)
                    height: "auto", // maintain aspect ratio
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