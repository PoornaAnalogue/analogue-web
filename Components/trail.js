"use client";
import { useState, useEffect } from "react";

export default function MorphingHeading() {
  const texts = ["Mobile App Development", "Website Development", "Digital Marketing"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 5000); // switch every 3s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-10 flex items-center justify-center overflow-hidden">
      {texts.map((text, i) => (
        <h2
          key={i}
          className={`absolute text-xl font-semibold transition-opacity duration-1000 ease-in-out ${
            i === index ? "opacity-80" : "opacity-5"
          }`}
        >
          {text}
        </h2>
      ))}
    </div>
  );
}



// "use client";
// import { useState, useEffect } from "react";

// export default function MorphingHeading() {
//   const texts = ["Mobile App Development", "Website Development", "Digital Marketing"];
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % texts.length);
//     }, 3000); // switch every 3s
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative h-12 flex items-center justify-center overflow-hidden">
//       {texts.map((text, i) => (
//         <h2
//           key={i}
//           className={`absolute text-2xl font-bold transition-all duration-1000 ease-in-out
//             ${i === index ? "opacity-100 scale-100" : "opacity-5 scale-100"}
//           `}
//         >
//           {text}
//         </h2>
//       ))}
//     </div>
//   );
// }
