"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function LandingHero() {
  const texts = ["Mobile App Development", "Digital Marketing", "Website Development"];
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1000);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
      setDisplayedText(texts[index].substring(0, subIndex));
    }, deleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, texts]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video Sample */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/sample-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h2 className="text-lg md:text-xl 2xl:text-3xl font-medium mb-6">
          Your Digital Partner For
        </h2>
        <h1 className="text-3xl md:text-5xl 2xl:text-7xl font-bold h-16">
          {displayedText}
          <span className="border-r-2 border-white animate-pulse ml-1"></span>
        </h1>
        <div className="mt-10 flex gap-5">
        <button className="group relative flex items-center gap-2 px-8 py-4 rounded-xs bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold 
        shadow-[4px_4px_0px_0px_rgba(235,235,235,0.25)] ">
        Schedule a call
        <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"/>
        </button>
          <button className="group relative flex items-center gap-2 px-8 py-4 rounded-xs border border-white text-white font-semibold
          shadow-[4px_4px_0px_0px_rgba(235,235,235,0.25)]">
          Case Studies
          <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"/>
        </button>

        </div>
      </div>
    </div>
  );
}
