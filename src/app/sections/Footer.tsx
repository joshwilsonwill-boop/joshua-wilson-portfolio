"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About Me", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Works", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.fromTo(
      containerRef.current.querySelectorAll(".footer-element"),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "cubic-bezier(0.16, 1, 0.3, 1)",
        stagger: 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
          once: true,
        },
      }
    );
  }, { scope: containerRef });

  return (
    <footer ref={containerRef} className="relative w-full overflow-hidden bg-[var(--bg-primary)] pt-32 pb-8 flex flex-col items-center">
      
      <div className="w-full max-w-[1400px] mx-auto px-[clamp(1.5rem,5vw,4rem)] flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-32 z-10">
        <div className="footer-element">
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-[var(--text-primary)] max-w-[15ch] leading-tight">
            Engineering the Invisible.
          </h2>
        </div>

        <div className="footer-element flex flex-col gap-8">
          <div className="flex flex-wrap gap-3">
            {LINKS.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                className="px-4 py-2 rounded-full border border-[rgba(255,255,255,0.08)] text-[0.875rem] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[rgba(255,255,255,0.2)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[0.75rem] text-[var(--text-tertiary)] uppercase tracking-wider">/Contact</span>
            <a href="mailto:joshua@prometheus.io" className="group text-[1.125rem] text-[var(--text-primary)] transition-colors">
              <span className="relative">
                hello@joshuawilson.dev
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--chrome-mid)] transition-all duration-300 group-hover:w-full" />
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-element z-10 mb-8">
        <p className="text-[0.75rem] text-[var(--text-tertiary)]">
          © {new Date().getFullYear()} Joshua Wilson. Built with Next.js, R3F, and GSAP.
        </p>
      </div>

      <div className="absolute bottom-[-15%] left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0">
        <h1 className="font-display font-bold text-[clamp(6rem,20vw,16rem)] text-[rgba(255,255,255,0.03)] whitespace-nowrap leading-none tracking-tighter">
          JOSHUA WILSON
        </h1>
      </div>
    </footer>
  );
}
