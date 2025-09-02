"use client";
import React from "react";
import Lottie from "lottie-react";
import animationData from "@/animations/LottieFiles-Mobile.json"; // adjust path
 
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