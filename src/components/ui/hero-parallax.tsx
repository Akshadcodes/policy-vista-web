
"use client";

import React, { useRef } from "react";
import { useSpring, animated } from "react-spring";
import { cn } from "@/lib/utils";

export const HeroParallax = ({
  children,
  className,
  parallaxStrength = 30,
  reverse = false,
}: {
  children: React.ReactNode;
  className?: string;
  parallaxStrength?: number;
  reverse?: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const [{ xy }, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    
    // Calculate mouse position relative to center of element
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Calculate movement factor (between -1 and 1)
    const factorX = x / (rect.width / 2);
    const factorY = y / (rect.height / 2);
    
    // Apply parallax effect, using strength parameter
    const moveX = factorX * parallaxStrength * (reverse ? -1 : 1);
    const moveY = factorY * parallaxStrength * (reverse ? -1 : 1);
    
    set({ xy: [moveX, moveY] });
  };

  const handleMouseLeave = () => {
    set({ xy: [0, 0] });
  };

  // Transform for parallax effect
  const transform = xy.to((x, y) => `translate3d(${x}px, ${y}px, 0)`);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn("relative overflow-hidden", className)}
    >
      <animated.div style={{ transform }} className="w-full h-full">
        {children}
      </animated.div>
    </div>
  );
};
