"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ImageParallax from "../components/ImageParallax";
import ScrollRevealText from "../components/ScrollRevealText";
import Typewriter from "../components/Typewriter";
import { motion } from "framer-motion";

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



  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[100dvh] flex flex-col justify-center overflow-hidden"
      id="hero"
    >
      {/* Floating 2D Assets - Now Draggable and larger on mobile */}
      <motion.div
        drag 
        dragConstraints={containerRef}
        whileDrag={{ scale: 1.1, cursor: "grabbing" }}
        className="absolute top-[10%] lg:top-[15%] left-[5%] lg:left-[8%] z-[20] cursor-grab"
      >
        <motion.img 
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          src="/floating/sparkle.png" 
          alt="Sparkle" 
          className="w-16 md:w-20 lg:w-24 opacity-80 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] will-change-transform pointer-events-none" 
        />
      </motion.div>

      <motion.div
        drag 
        dragConstraints={containerRef}
        whileDrag={{ scale: 1.1, cursor: "grabbing" }}
        className="absolute top-[15%] lg:top-[12%] right-[5%] lg:right-[8%] z-[20] cursor-grab"
      >
        <motion.img 
          animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
          src="/floating/lightning.png" 
          alt="Lightning" 
          className="w-14 md:w-16 lg:w-20 opacity-80 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] will-change-transform pointer-events-none" 
        />
      </motion.div>

      <motion.div
        drag 
        dragConstraints={containerRef}
        whileDrag={{ scale: 1.1, cursor: "grabbing" }}
        className="absolute bottom-[20%] lg:bottom-[15%] right-[10%] lg:right-[25%] z-[20] hidden md:block cursor-grab"
      >
        <motion.img 
          animate={{ y: [0, -25, 0], rotate: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          src="/floating/sparkle.png" 
          alt="Sparkle" 
          className="w-14 md:w-16 lg:w-20 opacity-80 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] will-change-transform pointer-events-none" 
        />
      </motion.div>

      <motion.div
        drag 
        dragConstraints={containerRef}
        whileDrag={{ scale: 1.1, cursor: "grabbing" }}
        className="absolute bottom-[25%] lg:bottom-[20%] left-[10%] lg:left-[15%] z-[20] hidden md:block cursor-grab"
      >
        <motion.img 
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut" }}
          src="/floating/lightning.png" 
          alt="Lightning" 
          className="w-12 md:w-14 lg:w-16 opacity-80 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] will-change-transform pointer-events-none" 
        />
      </motion.div>

      <motion.div
        drag 
        dragConstraints={containerRef}
        whileDrag={{ scale: 1.1, cursor: "grabbing" }}
        className="absolute top-[40%] lg:top-[30%] right-[15%] lg:right-[35%] z-[20] hidden md:block cursor-grab"
      >
        <motion.img 
          animate={{ y: [0, -18, 0], rotate: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 6.5, ease: "easeInOut" }}
          src="/floating/sparkle.png" 
          alt="Sparkle" 
          className="w-16 md:w-20 lg:w-24 opacity-80 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] will-change-transform pointer-events-none" 
        />
      </motion.div>

      <motion.div
        drag 
        dragConstraints={containerRef}
        whileDrag={{ scale: 1.1, cursor: "grabbing" }}
        className="absolute top-[60%] lg:top-[55%] left-[8%] lg:left-[25%] z-[20] cursor-grab"
      >
        <motion.img 
          animate={{ y: [0, -22, 0], rotate: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut" }}
          src="/floating/lightning.png" 
          alt="Lightning" 
          className="w-14 md:w-16 lg:w-20 opacity-80 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] will-change-transform pointer-events-none" 
        />
      </motion.div>
      
      {/* Desktop Split Grid / Mobile Stack */}
      <div className="w-full max-w-[1600px] mx-auto px-[clamp(1.5rem,5vw,4rem)] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center z-10 pt-32 pb-20 lg:py-0">
        
        {/* Left Column - Typography */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left relative">
          


          <h1 className="font-display font-bold leading-[0.85] mb-6 flex flex-col items-center lg:items-start relative">
            <span className="hero-name-part block text-[clamp(2.5rem,10vw,8rem)] lg:text-[clamp(3.5rem,7vw,8rem)] text-[var(--text-primary)]">FOUNDING</span>
            <span className="hero-name-part block text-[clamp(2.5rem,10vw,8rem)] lg:text-[clamp(3.5rem,7vw,8rem)] text-[var(--text-primary)]">ENGINEER</span>
            

          </h1>
          
          <div className="h-[2.5rem] flex items-center mb-6">
            <Typewriter 
              phrases={[
                "Engineering the Invisible.",
                "Building systems that feel alive.",
                "From WebGL to serverless.",
                "Precision is not an option. It's the baseline.",
                "I don't believe in templates.",
                "Let's build something that shouldn't exist.",
                "Your code is bad and you should feel bad.",
                "I architect. You execute. We ship.",
                "If it compiles on the first try, you're not trying hard enough.",
                "I don't do meetings. I do deployments.",
                "My stack is not a list. It's a loop.",
                "Break things. Fix them. Break them better."
              ]} 
              className="font-bold text-[clamp(1rem,2.5vw,1.5rem)] text-[#a1a1a6]" 
            />
          </div>
          
          <ScrollRevealText className="text-[clamp(0.875rem,1.5vw,1.125rem)] text-[var(--text-tertiary)] max-w-[90%] lg:max-w-[48ch] mx-auto lg:mx-0 leading-[1.6]">
            I build systems that feel alive. From WebGL shaders to serverless infrastructure, every pixel and every packet is intentional.
          </ScrollRevealText>

          {/* Mobile Portrait */}
          <div className="lg:hidden mt-12 w-full flex flex-col items-center">
            <div ref={portraitMobileRef} className="relative w-[80%] max-w-[320px] aspect-[4/5] rounded-[1.5rem] mb-6 border border-[#00d4ff]/10 shadow-[0_0_30px_rgba(0,212,255,0.05)] transition-all duration-700 hover:border-[#00d4ff]/30 hover:shadow-[0_0_40px_rgba(0,212,255,0.15)] group">
              <ImageParallax
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
                alt="Joshua Wilson Portrait"
                containerClassName="w-full h-full rounded-[1.5rem] bg-[var(--bg-surface)] shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
              />
            </div>
            <span className="uppercase text-[0.75rem] tracking-[0.15em] text-[var(--text-tertiary)] font-mono">
              /CREATING SINCE 2022
            </span>
          </div>
        </div>

        {/* Right Column - Portrait (Desktop Only) */}
        <div className="hidden lg:flex flex-col items-center justify-center pr-[clamp(1rem,4vw,6rem)]">
          <div ref={portraitRef} className="relative w-full max-w-[450px] aspect-[4/5] rounded-[1.5rem] mb-6 border border-[#00d4ff]/10 shadow-[0_0_30px_rgba(0,212,255,0.05)] transition-all duration-700 hover:border-[#00d4ff]/30 hover:shadow-[0_0_40px_rgba(0,212,255,0.15)] group">
            <ImageParallax
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
              alt="Joshua Wilson Portrait"
              containerClassName="w-full h-full rounded-[1.5rem] bg-[var(--bg-surface)] shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
            />
          </div>
          <span className="uppercase text-[0.75rem] tracking-[0.15em] text-[var(--text-tertiary)] font-mono self-center pr-[clamp(1rem,4vw,6rem)]">
            /CREATING SINCE 2022
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
