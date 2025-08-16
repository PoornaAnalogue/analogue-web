"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

// Paths to your puzzle pieces
// Make sure these are in /public/puzzle/ directory or adjust paths accordingly
const pieces = [
  "/Puzzleimgs/p1.png", "/Puzzleimgs/p2.png", "/Puzzleimgs/p3.png",
  "/Puzzleimgs/p4.png", "/Puzzleimgs/p5.png", "/Puzzleimgs/p6.png",
  "/Puzzleimgs/p7.png", "/Puzzleimgs/p8.png", "/Puzzleimgs/p9.png",
];

export default function PuzzleSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section
      ref={ref}
      className="flex flex-col md:flex-row items-center justify-between px-10 py-20 bg-[#071739] text-white"
    >
      {/* LEFT SIDE: TEXT */}
      <div className="max-w-lg mb-10 md:mb-0">
        <h2 className="text-3xl font-bold mb-4">
          Process we follow for successful project
        </h2>
        <p className="mb-4">
          Analogue is a Best mobile app development company in Hyderabad that
          specialises in creating and enhancing user experience through the design
          and development of mobile and web applications. Our focus lies in helping
          businesses expand and reach their specific customer base by collaborating
          with individuals and organisations to conceptualise and promote their products.
        </p>
      </div>

      {/* RIGHT SIDE: PUZZLE */}
      <div className="grid grid-cols-3 gap-[0.5cm]">
        {pieces.map((src, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: index === 0 ? 1 : 0,
              scale: index === 0 ? 1 : 0.5,
              y: index === 0 ? 0 : 50
            }}
            animate={
              inView
                ? { opacity: 1, scale: 1, y: 0 }
                : {}
            }
            transition={{
              duration: 0.6,
              delay: index * 0.15 // cascade effect
            }}
          >
            <Image
              src={src}
              alt={`Puzzle Piece ${index + 1}`}
              width={150}
              height={150}
              className="object-contain"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
