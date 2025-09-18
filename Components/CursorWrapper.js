"use client";
import CustomCursor from "@/app/CustomCursor";
import { useEffect, useState } from "react";
// import CustomCursor from "./CustomCursor";

export default function CursorWrapper() {
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const handleResize = () => setShowCursor(mq.matches);

    handleResize();
    mq.addEventListener("change", handleResize);
    return () => mq.removeEventListener("change", handleResize);
  }, []);

  return showCursor ? <CustomCursor /> : null;
}
