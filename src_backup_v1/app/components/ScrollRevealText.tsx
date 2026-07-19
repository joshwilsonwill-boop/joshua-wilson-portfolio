"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealTextProps {
  children: string;
  className?: string;
  as?: React.ElementType;
}

export default function ScrollRevealText({ children, className = "", as: Component = "p" }: ScrollRevealTextProps) {
  const containerRef = useRef<HTMLElement>(null);
  const Tag = Component as any;

  useGSAP(() => {
    if (!containerRef.current) return;
    
    const words = containerRef.current.querySelectorAll(".reveal-word");
    
    gsap.fromTo(
      words,
      { opacity: 0, y: 20, filter: "blur(4px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.6,
        ease: "cubic-bezier(0.16, 1, 0.3, 1)",
        stagger: 0.04,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          once: true, // Only animate on first entry
        },
      }
    );
  }, { scope: containerRef });

  // Split text by words
  const words = children.split(" ");

  return (
    <Tag ref={containerRef} className={className}>
      {words.map((word, i) => (
        <span key={i} className="reveal-word inline-block whitespace-nowrap mr-[0.25em] opacity-0">
          {word}
        </span>
      ))}
    </Tag>
  );
}
