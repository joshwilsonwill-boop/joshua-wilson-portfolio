"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface ImageParallaxProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
}

export default function ImageParallax({ src, alt, className = "", containerClassName = "" }: ImageParallaxProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !imageRef.current) return;
    
    // Parallax effect: image moves slightly slower than scroll (creates depth)
    // To achieve this, the image must be taller than its container.
    gsap.fromTo(
      imageRef.current,
      { yPercent: -15 },
      {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-xl border border-[rgba(255,255,255,0.1)] group ${containerClassName}`}
    >
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className={`w-full h-[130%] object-cover absolute top-[-15%] left-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02] ${className}`}
      />
    </div>
  );
}
