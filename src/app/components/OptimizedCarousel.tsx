"use client";

import React, { useRef, useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

type OptimizedCarouselProps = {
  items: React.ReactNode[];
  itemWidth?: string; // CSS width string like "400px" or "80vw"
  gap?: string; // CSS gap string like "1.5rem"
  className?: string;
  itemClassName?: string;
};

export default function OptimizedCarousel({
  items,
  itemWidth = "min(400px, calc(100vw - 3rem))",
  gap = "1.5rem",
  className = "",
  itemClassName = "",
}: OptimizedCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Debounced scroll listener to update arrow states without thrashing React state on every tick
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let ticking = false;

    const checkScroll = () => {
      // Calculate scroll possibilities. Add 2px tolerance for fractional rounding
      const isAtStart = el.scrollLeft <= 2;
      const isAtEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 2;

      setCanScrollLeft(!isAtStart);
      setCanScrollRight(!isAtEnd);
      ticking = false;
    };

    // Initial check
    checkScroll();

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(checkScroll);
        ticking = true;
      }
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [items.length]);

  const scrollByAmount = useCallback((direction: "left" | "right") => {
    if (!scrollRef.current) return;
    
    // We want to scroll by roughly one card width
    // Using firstElementChild to get actual rendered width if possible
    const firstChild = scrollRef.current.firstElementChild as HTMLElement;
    const cardWidth = firstChild ? firstChild.offsetWidth : 400;
    
    const gapAmount = 24; // approx 1.5rem gap
    const scrollAmount = cardWidth + gapAmount;
    
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth"
    });
  }, []);

  return (
    <div className={`relative w-full group ${className}`}>
      {/* Scroll Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto w-full hide-scrollbar overscroll-contain snap-x snap-mandatory"
        style={{
          gap: gap,
          paddingLeft: "max(1.5rem, calc((100vw - 1400px) / 2))", // align with standard container max-width
          paddingRight: "max(1.5rem, calc((100vw - 1400px) / 2))",
          scrollBehavior: "smooth",
          WebkitOverflowScrolling: "touch",
          willChange: "transform",
        }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            className={`flex-shrink-0 snap-center ${itemClassName}`}
            style={{ 
              width: itemWidth,
              contain: "layout paint", // Critical for paint performance isolation
            }}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={() => scrollByAmount("left")}
          disabled={!canScrollLeft}
          className="pointer-events-auto w-12 h-12 rounded-full bg-[rgba(10,10,15,0.8)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[rgba(30,30,35,0.9)] transition-colors"
          aria-label="Scroll left"
        >
          <ArrowLeft size={20} />
        </button>
        <button
          onClick={() => scrollByAmount("right")}
          disabled={!canScrollRight}
          className="pointer-events-auto w-12 h-12 rounded-full bg-[rgba(10,10,15,0.8)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[rgba(30,30,35,0.9)] transition-colors"
          aria-label="Scroll right"
        >
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}
