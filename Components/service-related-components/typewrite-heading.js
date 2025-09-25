// "use client";

import { useState, useEffect } from "react";

export default function TypewriterHeading({ textArray = [] }) {
  const typingSpeed = 60;     // ms per letter
  const deletingSpeed = 40;   // ms per letter
  const pauseTime = 2000;     // pause at end before deleting

  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;

    if (!isDeleting) {
      if (charIndex < textArray[wordIndex].word.length) {
        timer = setTimeout(() => setCharIndex(charIndex + 1), typingSpeed);
      } else if (wordIndex < textArray.length - 1) {
        timer = setTimeout(() => {
          setWordIndex(wordIndex + 1);
          setCharIndex(0);
        }, 200);
      } else {
        timer = setTimeout(() => setIsDeleting(true), pauseTime);
      }
    } else {
      if (charIndex > 0) {
        timer = setTimeout(() => setCharIndex(charIndex - 1), deletingSpeed);
      } else if (wordIndex > 0) {
        timer = setTimeout(() => {
          setWordIndex(wordIndex - 1);
          setCharIndex(textArray[wordIndex - 1].word.length);
        }, 200);
      } else {
        setIsDeleting(false);
      }
    }

    return () => clearTimeout(timer);
  }, [charIndex, wordIndex, isDeleting, textArray]);

  return (
    <h1 className=" xss:pb-2 md:pb-3 text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.7rem] xl:text-[2rem] 3xl:text-[2.5rem] font-semibold text-black leading-snug whitespace-normal break-words">
      {/* finished words */}
      {textArray.slice(0, wordIndex).map(({ word, color }, i) => (
        <span key={i} className={`${color} mr-3 inline-block whitespace-nowrap`}>
          {word}
        </span>
      ))}

      {/* current word */}
      {wordIndex < textArray.length && (
        <span className={`${textArray[wordIndex].color} mr-3 inline-block whitespace-nowrap`}>
          {textArray[wordIndex].word.slice(0, charIndex)}
        </span>
      )}

      {/* cursor */}
      <span className="border-r-2 border-black animate-pulse" />
    </h1>
  );
}
