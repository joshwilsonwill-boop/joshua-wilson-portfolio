"use client";

import { useState, useEffect, useRef } from "react";

interface TypewriterProps {
  phrases: string[];
  className?: string;
}

// Fisher-Yates shuffle
function shuffleArray(array: string[]) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export default function Typewriter({ phrases, className = "" }: TypewriterProps) {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const phraseIndexRef = useRef(0);
  const shuffledPhrasesRef = useRef<string[]>([]);
  const lastShownRef = useRef<string[]>([]);

  // Initialize and reshuffle safely
  const getNextPhrase = () => {
    if (shuffledPhrasesRef.current.length === 0 || phraseIndexRef.current >= shuffledPhrasesRef.current.length) {
      let newShuffle = shuffleArray(phrases);
      // Ensure the first item in the new shuffle wasn't recently shown
      while (newShuffle.length > 0 && lastShownRef.current.includes(newShuffle[0])) {
        newShuffle = shuffleArray(phrases);
      }
      shuffledPhrasesRef.current = newShuffle;
      phraseIndexRef.current = 0;
    }

    const nextPhrase = shuffledPhrasesRef.current[phraseIndexRef.current];
    phraseIndexRef.current += 1;
    
    // Update last shown
    lastShownRef.current.push(nextPhrase);
    if (lastShownRef.current.length > 8) {
      lastShownRef.current.shift();
    }
    return nextPhrase;
  };

  const currentPhraseRef = useRef(phrases[0] || "");

  useEffect(() => {
    if (shuffledPhrasesRef.current.length === 0 && phrases.length > 0) {
      currentPhraseRef.current = getNextPhrase();
    }
  }, [phrases]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentPhrase = currentPhraseRef.current;

    if (!currentPhrase) return;

    if (!isDeleting && text === currentPhrase) {
      // Pause at the end of the phrase
      // 2-5 seconds based on phrase length (longer phrase = longer pause, but bounded)
      const basePause = 2000;
      const lengthPause = Math.min(3000, currentPhrase.length * 40);
      const randomPauseOffset = Math.random() * 500;
      timeout = setTimeout(() => setIsDeleting(true), basePause + lengthPause + randomPauseOffset);
    } else if (isDeleting && text === "") {
      // Move to the next phrase
      setIsDeleting(false);
      currentPhraseRef.current = getNextPhrase();
      timeout = setTimeout(() => {}, 800 + Math.random() * 600); // 0.8s to 1.4s gap before typing starts again
    } else {
      const nextText = isDeleting
        ? currentPhrase.substring(0, text.length - 1)
        : currentPhrase.substring(0, text.length + 1);
        
      // Variable typing speed (50-120ms per char)
      // Faster when deleting
      const baseSpeed = isDeleting ? 20 + Math.random() * 20 : 50 + Math.random() * 70;
      
      // Highlight bold parts by checking what we're typing? Not needed based on requirements, just text speed
      
      timeout = setTimeout(() => setText(nextText), baseSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phrases]);

  // To support bold emphasis like Gilfoyle without rendering raw HTML, we can split by asterisks or just leave it.
  // The spec asked: "Verify weight 400 (regular) and 600 (semi-bold) are available for phrase emphasis."
  // Wait, the phrase bank doesn't have Markdown bold. Let's just output the text. If we want we can implement a basic bold parser.
  const renderText = (str: string) => {
    // If we wanted to support *bold* we could split it, but the spec phrase bank doesn't use it.
    // I will just return the text. Wait, "I make the viewport adapt to *me*."
    const parts = str.split(/\*(.*?)\*/g);
    return parts.map((part, i) => (
      i % 2 === 1 ? <span key={i} className="font-semibold text-white">{part}</span> : part
    ));
  };

  return (
    <span className={className}>
      {renderText(text)}
      <span className="inline-block w-[2px] h-[1em] bg-[var(--accent-cyan)] ml-[2px] animate-pulse align-middle" />
    </span>
  );
}
