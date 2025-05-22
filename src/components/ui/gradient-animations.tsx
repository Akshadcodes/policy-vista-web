
"use client";
import React, { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

export const BackgroundGradientAnimation = ({
  children,
  className,
  containerClassName,
  gradientBackgroundStart = "rgb(255 237 213)",
  gradientBackgroundEnd = "rgb(254 215 170)",
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  gradientBackgroundStart?: string;
  gradientBackgroundEnd?: string;
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x, y });
      }
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    const container = containerRef.current;

    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  const size = isHovering ? 400 : 100;
  const backgroundGradient = `radial-gradient(${size}px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(249, 115, 22, 0.1), transparent 60%)`;

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative h-full w-full overflow-hidden rounded-lg",
        containerClassName
      )}
      style={{
        background: `${gradientBackgroundStart}`,
        backgroundImage: `${backgroundGradient}`,
        backgroundSize: "100% 100%",
      }}
    >
      <svg className="absolute inset-0 h-full w-full">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};
