"use client";

import { useState } from "react";

export type Platform = "All" | "X (Twitter)" | "Instagram" | "Telegram";

interface FilterBarProps {
  activeFilter: Platform;
  onFilterChange: (platform: Platform) => void;
}

const PLATFORMS: Platform[] = ["All", "X (Twitter)", "Instagram", "Telegram"];

export default function FilterBar({ activeFilter, onFilterChange }: FilterBarProps) {
  return (
    <div className="flex flex-wrap items-center gap-3 mb-12">
      {PLATFORMS.map((platform) => {
        const isActive = activeFilter === platform;
        return (
          <button
            key={platform}
            onClick={() => onFilterChange(platform)}
            className={`relative px-5 py-2 rounded-full text-[0.875rem] font-medium transition-all duration-300 ${
              isActive 
                ? "text-[var(--text-primary)]" 
                : "text-[var(--text-tertiary)] hover:text-[var(--text-secondary)] border border-[rgba(255,255,255,0.08)] bg-transparent"
            }`}
          >
            {isActive && (
              <span className="absolute inset-0 rounded-full border border-[var(--chrome-mid)] bg-[rgba(255,255,255,0.05)] shadow-[0_0_15px_rgba(255,255,255,0.05)] z-[-1] animate-in zoom-in-95 duration-200" />
            )}
            {platform}
          </button>
        );
      })}
    </div>
  );
}
