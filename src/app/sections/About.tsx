"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ImageParallax from "../components/ImageParallax";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
        toggleActions: "play none none none",
      },
      defaults: { duration: 0.8, ease: "cubic-bezier(0.16, 1, 0.3, 1)" }
    });

    // Section entrance
    tl.fromTo(containerRef.current, { autoAlpha: 0, y: 60 }, { autoAlpha: 1, y: 0 });

    // Text paragraphs stagger
    tl.fromTo(
      ".bio-paragraph",
      { autoAlpha: 0, y: 30 },
      { autoAlpha: 1, y: 0, stagger: 0.15 },
      "-=0.4"
    );
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="w-full max-w-[1400px] mx-auto px-[clamp(1.5rem,5vw,4rem)] py-[clamp(6rem,15vh,12rem)] invisible"
      id="about"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-center">
        {/* Image Column - 40% (5 cols) */}
        <div className="md:col-span-5 order-2 md:order-1">
          <ImageParallax
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
            alt="Joshua Wilson Portrait - TODO: REPLACE"
            containerClassName="aspect-[3/4] w-full"
          />
        </div>

        {/* Text Column - 60% (7 cols) */}
        <div className="md:col-span-7 order-1 md:order-2 flex flex-col gap-6">
          <h2 className="text-[clamp(2rem,5vw,4rem)] font-bold tracking-tight mb-4">
            Elder Plinius energy. <br className="hidden md:block" />
            Modern execution.
          </h2>
          
          <div className="space-y-6 text-base leading-[1.6]">
            <p className="bio-paragraph text-[var(--text-primary)] font-medium text-lg">
              I am an engineer and creative technologist building at the intersection of rigorous systems and spatial design. I do not believe in templates. I build products that feel like they have a pulse.
            </p>
            <p className="bio-paragraph text-[var(--text-secondary)]">
              With a background in low-level systems and high-fidelity graphics, I operate across the entire stack. From writing custom WebGL shaders to architecting scalable serverless infrastructure, my goal is always to deliver experiences that are dense with value and devoid of friction.
            </p>
            <p className="bio-paragraph text-[var(--text-secondary)]">
              When I'm not writing code, I'm studying industrial design, dissecting the aesthetics of fluid mechanics, or relentlessly iterating on internal tools. Precision is not an option. It is the baseline.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
