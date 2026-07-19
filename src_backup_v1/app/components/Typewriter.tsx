"use client";

import { useState, useEffect } from "react";

interface TypewriterProps {
  phrases: string[];
  className?: string;
}

export default function Typewriter({ phrases, className = "" }: TypewriterProps) {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && text === currentPhrase) {
      // Pause at the end of the phrase
      timeout = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && text === "") {
      // Move to the next phrase
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
      timeout = setTimeout(() => {}, 800);
    } else {
      const nextText = isDeleting
        ? currentPhrase.substring(0, text.length - 1)
        : currentPhrase.substring(0, text.length + 1);
        
      const typingSpeed = isDeleting ? 40 : 80;
      timeout = setTimeout(() => setText(nextText), typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex, phrases]);

  return (
    <span className={className}>
      {text}
      <span className="inline-block w-[2px] h-[1em] bg-[var(--chrome-light)] ml-[2px] animate-pulse align-middle" />
    </span>
  );
}
