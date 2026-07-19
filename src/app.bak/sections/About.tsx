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
    });

    // Make container visible
    gsap.set(containerRef.current, { autoAlpha: 1 });

    // Image slides from left
    tl.fromTo(
      ".about-image-col",
      { autoAlpha: 0, x: -100 },
      { autoAlpha: 1, x: 0, duration: 1, ease: "power3.out" }
    );

    // Text paragraphs stagger from right
    tl.fromTo(
      ".bio-paragraph",
      { autoAlpha: 0, x: 60 },
      { autoAlpha: 1, x: 0, duration: 0.8, ease: "power3.out", stagger: 0.12 },
      "-=0.6"
    );
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="w-full max-w-[1400px] mx-auto px-[clamp(1.5rem,5vw,4rem)] py-[clamp(8rem,20vh,16rem)] invisible"
      id="about"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-center">
        {/* Image Column - 40% (5 cols) */}
        <div className="about-image-col md:col-span-5 order-1">
          <div className="relative group rounded-xl border border-[rgba(255,255,255,0.1)] overflow-hidden transition-transform duration-500 hover:scale-[1.02]">
            <ImageParallax
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
              alt="Joshua Wilson Portrait - TODO: REPLACE"
              containerClassName="aspect-[3/4] w-full"
            />
            {/* Chromatic Aberration overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-screen"
                 style={{
                   boxShadow: "inset 2px 0 0 0 rgba(255,0,0,0.5), inset -2px 0 0 0 rgba(0,255,255,0.5)"
                 }}
            />
          </div>
        </div>

        {/* Text Column - 60% (7 cols) */}
        <div className="md:col-span-7 order-2 flex flex-col gap-6">
          <div className="space-y-6 text-[1rem] leading-[1.7] skew-on-scroll">
            <p className="bio-paragraph text-[var(--text-primary)] font-medium text-lg">
              I am an engineer and creative technologist building at the intersection of rigorous systems and spatial design. I do not believe in templates. I build products that feel like they have a pulse.
            </p>
            <p className="bio-paragraph text-[var(--text-secondary)]">
              With a background in low-level systems and high-fidelity graphics, I operate across the entire stack. From writing custom WebGL shaders to architecting scalable serverless infrastructure, my goal is always to deliver experiences that are dense with value and devoid of friction.
            </p>
            <p className="bio-paragraph text-[var(--text-secondary)]">
              When I'm not writing code, I'm studying industrial design, dissecting the aesthetics of fluid mechanics, or relentlessly iterating on internal tools. Precision is not an option. It is the baseline.
            </p>
            <p className="bio-paragraph text-[var(--text-secondary)]">
              I work with founders who have impossible ideas and the conviction to see them through. If that sounds like you, we should talk.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
