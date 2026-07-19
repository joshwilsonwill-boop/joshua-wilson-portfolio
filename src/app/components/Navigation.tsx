"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "About Me", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#work" },
  { label: "Thoughts", href: "#thoughts" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useGSAP(() => {
    if (!dropdownRef.current) return;

    // Create a timeline paused by default
    const tl = gsap.timeline({ paused: true, reversed: true });
    
    // First, animate the dropdown container's height/opacity
    tl.to(dropdownRef.current, {
      autoAlpha: 1,
      y: 0,
      duration: 0.4,
      ease: "power3.out",
    });

    // Then stagger the links inside
    const links = dropdownRef.current.querySelectorAll(".nav-link-item");
    tl.fromTo(
      links,
      { autoAlpha: 0, y: 10 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.06,
        ease: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      "-=0.2" // Overlap slightly with container reveal
    );

    tlRef.current = tl;
  }, { scope: containerRef });

  useEffect(() => {
    if (tlRef.current) {
      if (isOpen) {
        tlRef.current.play();
      } else {
        tlRef.current.reverse();
      }
    }
  }, [isOpen]);

  useEffect(() => {
    // Close on escape
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    
    // Close on outside click
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEsc);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-[320px]">
      {/* Pill Header */}
      <div className="relative flex items-center justify-between bg-[rgba(10,10,15,0.8)] backdrop-blur-md border border-[rgba(255,255,255,0.06)] rounded-full px-6 py-3 z-20">
        <span className="font-bold text-[0.875rem] text-[var(--text-primary)] tracking-tight">JOSHUA WILSON</span>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Dropdown Menu */}
      <div 
        ref={dropdownRef}
        className="absolute top-[calc(100%+0.5rem)] left-0 w-full bg-[rgba(10,10,15,0.8)] backdrop-blur-md border border-[rgba(255,255,255,0.06)] rounded-[1.5rem] p-4 invisible -translate-y-4 shadow-2xl z-10"
      >
        <ul className="flex flex-col gap-1">
          {LINKS.map((link) => (
            <li key={link.label} className="nav-link-item invisible">
              <a 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="group flex items-center px-4 py-3 rounded-xl hover:bg-[rgba(255,255,255,0.03)] transition-colors text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              >
                <span className="relative">
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[var(--chrome-light)] to-[var(--chrome-dark)] transition-all duration-300 group-hover:w-full" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
