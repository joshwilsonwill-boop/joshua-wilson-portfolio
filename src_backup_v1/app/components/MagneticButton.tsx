"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, HTMLMotionProps } from "framer-motion";
import { useMousePosition } from "../hooks/useMousePosition";

interface MagneticButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  className?: string;
}

export default function MagneticButton({ children, className = "", onClick, ...props }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Real cursor coordinates (not normalized)
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    
    const updateCursor = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateCursor);
    return () => window.removeEventListener("mousemove", updateCursor);
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  useEffect(() => {
    if (isHovered && ref.current && !isMobile) {
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const distanceX = cursorPos.x - centerX;
      const distanceY = cursorPos.y - centerY;
      
      x.set(distanceX * 0.3);
      y.set(distanceY * 0.3);
    } else {
      x.set(0);
      y.set(0);
    }
  }, [cursorPos, isHovered, isMobile, x, y]);

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
