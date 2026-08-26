"use client";

import { useRef, useState, useEffect, useSyncExternalStore } from "react";
import { motion, useMotionValue, useSpring, HTMLMotionProps } from "framer-motion";

const subscribeToMobileMediaQuery = (onChange: () => void) => {
  if (typeof window === "undefined") return () => undefined;

  const mediaQuery = window.matchMedia("(max-width: 768px)");
  mediaQuery.addEventListener("change", onChange);
  return () => mediaQuery.removeEventListener("change", onChange);
};

const getMobileMediaQuerySnapshot = () =>
  typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches;

interface MagneticButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  className?: string;
}

export default function MagneticButton({ children, className = "", onClick, ...props }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useSyncExternalStore(
    subscribeToMobileMediaQuery,
    getMobileMediaQuerySnapshot,
    () => false
  );
  
  // Real cursor coordinates (not normalized)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  useEffect(() => {
    if (!isHovered || isMobile || !ref.current) {
      x.set(0);
      y.set(0);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;

      x.set(distanceX * 0.3);
      y.set(distanceY * 0.3);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isHovered, isMobile, x, y]);

  return (
    <motion.button
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      style={{ x: springX, y: springY }}
      className={`relative inline-flex items-center justify-center transition-colors ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
