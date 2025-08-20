// "use client";
// import { useEffect, useState } from "react";
// import PopUpForm from "./PopUpForm"; // adjust path

// export default function ModalPopUp() {
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsOpen(true);
//     }, 10000); // show after 10s

//     return () => clearTimeout(timer);
//   }, []);

//   const handleClose = () => {
//     // immediately unmount form
//     setIsOpen(false);
//   };

//   return (
//     <>
//       {isOpen && (
//         <PopUpForm
//           key={isOpen ? "open" : "closed"} 
//           isOpen={isOpen}
//           onClose={handleClose}
//         />
//       )}
//     </>
//   );
// }


"use client";
import { useEffect, useState, useRef } from "react";
import PopUpForm from "./PopUpForm"; // adjust path

export default function ModalPopUp() {
  const [isOpen, setIsOpen] = useState(false);
  const isMounted = useRef(false); // Track if component is already mounted

  useEffect(() => {
    if (isMounted.current) {
      console.log("ModalPopUp already mounted, skipping useEffect");
      return; // Prevent duplicate useEffect execution
    }
    isMounted.current = true;

    console.log("ModalPopUp mounted, setting timer");
    const timer = setTimeout(() => {
      setIsOpen(true);
      console.log("Modal opened");
    }, 10000); // show after 10s

    return () => {
      clearTimeout(timer);
      isMounted.current = false;
      console.log("ModalPopUp unmounted, timer cleared");
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    console.log("Modal close triggered");
  };

  return (
    <>
      {isOpen && (
        <PopUpForm
          isOpen={isOpen}
          onClose={handleClose}
        />
      )}
    </>
  );
}