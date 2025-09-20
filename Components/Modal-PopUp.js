"use client";
import { useEffect, useState, useRef } from "react";
import PopUpForm from "./popup-form"; // adjust path

export default function ModalPopUp() {
  const [isOpen, setIsOpen] = useState(false);
  const isMounted = useRef(false); // Track if component is already mounted

  useEffect(() => {
    if (isMounted.current) {
      return; // Prevent duplicate useEffect execution
    }
    isMounted.current = true;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10000); // show after 10s

    return () => {
      clearTimeout(timer);
      isMounted.current = false;
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return <>{isOpen && <PopUpForm isOpen={isOpen} onClose={handleClose} />}</>;
}
