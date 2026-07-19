"use client";

import { useState, useRef, useEffect } from "react";

export default function DualXPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative inline-block" ref={containerRef}>
      <button 
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        className="hover:text-[var(--text-primary)] hover:scale-110 transition-all duration-300"
        aria-label="X (Twitter) Accounts"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </button>

      {isOpen && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-[280px] bg-[rgba(10,10,15,0.95)] backdrop-blur-xl border border-[rgba(255,255,255,0.08)] rounded-[1rem] p-4 shadow-2xl animate-in fade-in zoom-in-95 duration-200 z-50">
          <div className="flex flex-col gap-2">
            <a 
              href="https://x.com/joshwilson_will" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-2 rounded-lg hover:bg-[rgba(255,255,255,0.03)] hover:translate-x-1 transition-all"
            >
              <div className="flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span className="text-[0.875rem] font-medium text-[var(--text-primary)]">@joshwilson_will</span>
              </div>
              <span className="text-[0.65rem] uppercase tracking-wider px-2 py-0.5 rounded-full border border-[rgba(255,255,255,0.1)] text-[var(--text-tertiary)] group-hover:text-[var(--text-secondary)] transition-colors">
                Personal
              </span>
            </a>

            <a 
              href="https://x.com/gadflyrebel" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-2 rounded-lg hover:bg-[rgba(255,255,255,0.03)] hover:translate-x-1 transition-all"
            >
              <div className="flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span className="text-[0.875rem] font-medium text-[var(--text-primary)]">@gadflyrebel</span>
              </div>
              <span className="text-[0.65rem] uppercase tracking-wider px-2 py-0.5 rounded-full border border-[rgba(255,255,255,0.1)] text-[var(--text-tertiary)] group-hover:text-[var(--text-secondary)] transition-colors">
                Work
              </span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
