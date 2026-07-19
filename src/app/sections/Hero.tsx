"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ImageParallax from "../components/ImageParallax";
import ScrollRevealText from "../components/ScrollRevealText";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const portraitMobileRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline();

    // Kill warp, simple translateY + opacity + tracking
    tl.fromTo(
      ".hero-name-part",
      { opacity: 0, y: 40, letterSpacing: "-0.05em" },
      { opacity: 1, y: 0, letterSpacing: "-0.03em", duration: 1.2, ease: "cubic-bezier(0.16, 1, 0.3, 1)", stagger: 0.15 }
    );

    // Scroll indicator pulse
    gsap.to(".scroll-indicator-text", {
      opacity: 0.8,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    // Hide scroll indicator on scroll
    gsap.to(".scroll-indicator", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=100",
        scrub: true,
      },
      opacity: 0,
    });

    // Subtle parallax for portrait on desktop
    if (portraitRef.current) {
      gsap.to(portraitRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        y: 50,
        ease: "none"
      });
    }

    // Floating SVG animations
    gsap.to(".floating-shape", {
      y: "+=12",
      rotation: "+=5",
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 1.5,
    });

  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[100dvh] flex flex-col justify-center overflow-hidden"
      id="hero"
    >
      {/* Desktop Split Grid / Mobile Stack */}
      <div className="w-full max-w-[1600px] mx-auto px-[clamp(1.5rem,5vw,4rem)] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center z-10 pt-32 pb-20 lg:py-0">
        
        {/* Left Column - Typography */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left relative">
          
          {/* Floating Shape 1: Star */}
          <div className="floating-shape absolute top-[-2rem] left-[-2rem] lg:left-[-3rem] opacity-70" style={{ filter: "drop-shadow(0 0 8px rgba(192,192,192,0.15))" }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L14.2 9.8L22 12L14.2 14.2L12 22L9.8 14.2L2 12L9.8 9.8L12 2Z" fill="url(#chrome-grad)" />
              <defs>
                <linearGradient id="chrome-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#e8e8e8" />
                  <stop offset="0.5" stopColor="#8a8a8a" />
                  <stop offset="1" stopColor="#e8e8e8" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <h1 className="font-display font-bold leading-[0.85] mb-6 flex flex-col items-center lg:items-start relative">
            <span className="hero-name-part block text-[clamp(3rem,12vw,10rem)] lg:text-[clamp(4rem,8vw,9rem)] text-[var(--text-primary)]">JOSHUA</span>
            <span className="hero-name-part block text-[clamp(3rem,12vw,10rem)] lg:text-[clamp(4rem,8vw,9rem)] text-[var(--text-primary)]">WILSON</span>
            
            {/* Floating Shape 2: Shard */}
            <div className="floating-shape absolute bottom-[10%] right-[-10%] lg:right-[-4rem] opacity-70" style={{ filter: "drop-shadow(0 0 8px rgba(192,192,192,0.15))" }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="url(#chrome-grad-2)" />
                <defs>
                  <linearGradient id="chrome-grad-2" x1="3" y1="2" x2="21" y2="22" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#e8e8e8" />
                    <stop offset="0.5" stopColor="#c0c0c0" />
                    <stop offset="1" stopColor="#e8e8e8" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </h1>
          
          <ScrollRevealText className="text-[clamp(1rem,2.5vw,1.5rem)] font-normal text-[var(--text-secondary)] mb-8">
            Engineering the Invisible
          </ScrollRevealText>
          
          <ScrollRevealText className="text-[clamp(0.875rem,1.5vw,1.125rem)] text-[var(--text-tertiary)] max-w-[90%] lg:max-w-[48ch] mx-auto lg:mx-0 leading-[1.6]">
            I build systems that feel alive. From WebGL shaders to serverless infrastructure, every pixel and every packet is intentional.
          </ScrollRevealText>

          {/* Mobile Portrait */}
          <div className="lg:hidden mt-12 w-full flex flex-col items-center">
            <div ref={portraitMobileRef} className="relative w-[80%] max-w-[320px] aspect-[4/5] liquid-chrome-border rounded-[1.5rem] mb-6">
              <ImageParallax
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
                alt="Joshua Wilson Portrait"
                containerClassName="w-full h-full rounded-[1.5rem] bg-[var(--bg-surface)] shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
              />
            </div>
            <span className="uppercase text-[0.75rem] tracking-[0.15em] text-[var(--text-tertiary)] font-mono">
              /CREATING SINCE 2020
            </span>
          </div>
        </div>

        {/* Right Column - Portrait (Desktop Only) */}
        <div className="hidden lg:flex flex-col items-center justify-center pr-[clamp(1rem,4vw,6rem)]">
          <div ref={portraitRef} className="relative w-full max-w-[450px] aspect-[4/5] liquid-chrome-border rounded-[1.5rem] mb-6">
            <ImageParallax
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
              alt="Joshua Wilson Portrait"
              containerClassName="w-full h-full rounded-[1.5rem] bg-[var(--bg-surface)] shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
            />
          </div>
          <span className="uppercase text-[0.75rem] tracking-[0.15em] text-[var(--text-tertiary)] font-mono self-center pr-[clamp(1rem,4vw,6rem)]">
            /CREATING SINCE 2020
          </span>
        </div>
        
      </div>

      <div className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
        <span className="scroll-indicator-text opacity-40 text-[0.75rem] uppercase tracking-[0.2em] text-[var(--text-tertiary)] font-system">
          SCROLL TO EXPLORE
        </span>
      </div>
    </section>
  );
}
