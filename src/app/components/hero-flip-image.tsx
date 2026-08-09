"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface HeroFlipImageProps {
  alt: string;
  className?: string;
}

export default function HeroFlipImage({ alt, className = "" }: HeroFlipImageProps) {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      setFlipped(true);
    }, 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={className} style={{ perspective: "1200px" }}>
      <div
        className="relative w-full h-full"
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
          transform: flipped ? "rotateY(0deg)" : "rotateY(180deg)",
        }}
      >
        {/* Back face (Initial Grayscale Image) */}
        <div
          className="absolute inset-0 w-full h-full rounded-[1.5rem] overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <Image
            src="/images/hero-grayscale.png"
            alt={alt}
            fill
            priority={true}
            sizes="(max-width: 768px) 320px, 450px"
            className="object-cover"
            style={{
              transform: "scaleX(-1)",
            }}
          />
        </div>

        {/* Front face (Final Color Image) */}
        <div
          className="absolute inset-0 w-full h-full rounded-[1.5rem] overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(0deg)",
          }}
        >
          <Image
            src="/images/hero-red.png"
            alt={alt}
            fill
            priority={true}
            sizes="(max-width: 768px) 320px, 450px"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
