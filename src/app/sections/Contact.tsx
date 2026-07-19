"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import MagneticButton from "../components/MagneticButton";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    // Contact content enters with scale up and blur filter clearing
    gsap.fromTo(
      containerRef.current.querySelectorAll(".contact-element"),
      { autoAlpha: 0, scale: 0.8, filter: "blur(10px)" },
      {
        autoAlpha: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 1,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="w-full max-w-[1400px] mx-auto px-[clamp(1.5rem,5vw,4rem)] py-[clamp(8rem,20vh,16rem)] flex flex-col items-center justify-center text-center"
      id="contact"
    >
      <h2 className="contact-element text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-tight mb-8 max-w-[20ch] leading-tight text-[var(--text-primary)] skew-on-scroll">
        Let's build something that shouldn't exist.
      </h2>
      
      <p className="contact-element max-w-[60ch] text-[var(--text-secondary)] text-[1rem] leading-[1.7] mb-12 skew-on-scroll">
        I am currently open to select projects, advisory roles, and collaborations with founders who think in systems, not features. If you have an impossible idea and the conviction to ship it, I want to hear from you.
      </p>
      
      <div className="contact-element mb-16 skew-on-scroll">
        <MagneticButton
          onClick={() => window.location.href = "mailto:hello@joshuawilson.dev"}
          className="bg-[var(--accent-cyan)] text-[var(--bg-primary)] px-8 py-4 rounded-full font-bold text-lg hover:brightness-110 transition-all shadow-[0_0_15px_rgba(0,212,255,0.3)] hover:shadow-[0_0_25px_rgba(0,212,255,0.6)]"
        >
          Start a Conversation
        </MagneticButton>
      </div>

      <div className="contact-element flex items-center gap-6 text-[var(--text-secondary)] skew-on-scroll">
        <MagneticButton className="p-2 hover:text-[var(--text-primary)] transition-colors" onClick={() => window.open("#", "_blank")}>
          <span className="sr-only">GitHub</span>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
        </MagneticButton>
        <MagneticButton className="p-2 hover:text-[var(--text-primary)] transition-colors" onClick={() => window.open("#", "_blank")}>
          <span className="sr-only">LinkedIn</span>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
          </svg>
        </MagneticButton>
        <MagneticButton className="p-2 hover:text-[var(--text-primary)] transition-colors" onClick={() => window.open("#", "_blank")}>
          <span className="sr-only">Twitter</span>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </MagneticButton>
      </div>
      
      <p className="contact-element mt-24 text-sm text-[var(--text-tertiary)] skew-on-scroll">
        © 2026 Joshua Wilson. Built with Next.js, R3F, and GSAP.
      </p>
    </section>
  );
}
