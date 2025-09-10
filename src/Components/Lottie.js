"use client";
import React from "react";
// import Lottie from "lottie-react";
// import animationData from "@/animations/LottieFiles-Mobile.json"; // adjust path

// Dynamically import Lottie with SSR disabled
const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false, // Disable server-side rendering
  loading: () => <div className="w-[90%] h-[90%] bg-gray-200 animate-pulse" />,
});

// Dynamically import the animation data
const animationData = dynamic(() => import("@/animations/LottieFiles-Mobile.json"), {
  ssr: false,
});
 
export default function MyLottie() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Lottie
        animationData={animationData}
        loop={true}
        style={{ width: 300, height: 300 }}
      />
    </div>
  );
}