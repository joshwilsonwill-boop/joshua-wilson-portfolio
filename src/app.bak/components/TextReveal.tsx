"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  text: string;
  className?: string;
  as?: React.ElementType;
}

export default function TextReveal({ text, className = "", as: Component = "p" }: TextRevealProps) {
  const containerRef = useRef<HTMLElement>(null);
  const Tag = Component as any;

  useGSAP(() => {
    if (!containerRef.current) return;
    
    // Select all child spans
    const chars = containerRef.current.querySelectorAll(".char");
    
    gsap.fromTo(
      chars,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.03,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, { scope: containerRef });

  // Split text by characters but keep words grouped for wrapping
  const words = text.split(" ");

  return (
    <Tag ref={containerRef} className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block whitespace-nowrap mr-[0.25em]">
          {word.split("").map((char, j) => (
            <span key={j} className="char inline-block opacity-0">
              {char}
            </span>
          ))}
        </span>
      ))}
    </Tag>
  );
}
