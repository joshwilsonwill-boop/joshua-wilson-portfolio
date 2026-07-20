"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";

const LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About Me", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Works", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const containerRef = useRef<HTMLElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (pathname === '/') {
      const el = document.querySelector(href);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else {
      router.push(`/${href}`);
    }
  };

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
      
      {/* Floating 2D Assets */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute top-[10%] left-[10%] lg:left-[15%] z-[5]"
      >
        <motion.img 
          drag 
          dragConstraints={containerRef}
          whileDrag={{ scale: 1.1, cursor: "grabbing" }}
          src="/floating/sparkle.png" 
          alt="Sparkle" 
          className="w-12 md:w-16 lg:w-20 opacity-40 cursor-grab drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] will-change-transform" 
        />
      </motion.div>

      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute bottom-[40%] right-[10%] lg:right-[15%] z-[5]"
      >
        <motion.img 
          drag 
          dragConstraints={containerRef}
          whileDrag={{ scale: 1.1, cursor: "grabbing" }}
          src="/floating/lightning.png" 
          alt="Lightning" 
          className="w-10 md:w-12 lg:w-16 opacity-40 cursor-grab drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] will-change-transform" 
        />
      </motion.div>

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
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-2 rounded-full border border-[rgba(255,255,255,0.08)] text-[0.875rem] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[rgba(255,255,255,0.2)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <span className="text-[1rem] font-mono tracking-[0.2em] uppercase text-[var(--text-tertiary)]">
            / Connect
          </span>
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-display font-bold leading-tight text-[var(--text-primary)]">
            Scaling Start-ups for Growth.
          </h2>
          <p className="text-[var(--text-secondary)] text-[1rem] leading-[1.6]">
            I'm always open to discussing product architecture, creative engineering, or potential partnerships.
          </p>
          <a href="mailto:joshwilsonwill@gmail.com" className="inline-block mt-4 text-[1.25rem] font-medium text-[var(--text-primary)] hover:text-[var(--chrome-light)] transition-colors underline decoration-[rgba(255,255,255,0.2)] underline-offset-8 hover:decoration-white">
            joshwilsonwill@gmail.com
          </a>
        </div>
      </div>

      <div className="footer-element z-10 mb-8">
        <p className="text-center text-[0.75rem] text-[var(--text-tertiary)]">
          © {new Date().getFullYear()} Joshua Wilson
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
