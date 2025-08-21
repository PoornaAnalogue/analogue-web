"use client";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hide, setHide] = useState(false);

  useEffect(() => {
    // track mouse position
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);

    // track hover target
    const checkHover = (e) => {
      const target = e.target;
      const tag = target.tagName.toLowerCase();
      const isClickable =
        target.closest("a, button, input, textarea, select, [role='button']") ||
        target.getAttribute("onclick") !== null || 
        window.getComputedStyle(target).cursor === "not-allowed" ||
        window.getComputedStyle(target).cursor === "pointer";

      setHide(isClickable);
    };

    window.addEventListener("mouseover", checkHover);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", checkHover);
    };
  }, []);

  if (hide) return null; // don't render braces on clickable areas

  return (

//     <div
//   style={{
//     position: "fixed",
//     left: pos.x,
//     top: pos.y,
//     pointerEvents: "none",
//     transform: "translate(-50%, -50%)",
//     fontSize: "19px",
//     fontWeight: "light",
//     color: "black",
//     zIndex: 9999,
//     animation: "glow 1.5s infinite ease-in-out", // 👈 glowing effect
//   }}
// >
//   {"< />"}
// </div>


    <div
  style={{
    position: "fixed",
    left: pos.x,
    top: pos.y,
    pointerEvents: "none",
    transform: "translate(-50%, -50%)",
    fontSize: "26px",
    fontWeight: "semibold",
    color: "#4165e6ff",
    zIndex: 9999,
    animation: "glow 1.5s infinite ease-in-out", // 👈 glowing effect
  }}
>
  {"{ }"}
</div>

  );
}
