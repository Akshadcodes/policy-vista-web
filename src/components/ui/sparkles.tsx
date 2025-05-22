"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface SparklesProps {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleColor?: string | string[];
  particleDensity?: number;
  particleSpeed?: number;
  speed?: number;
  children?: React.ReactNode;
  rainbow?: boolean;
}

export const SparklesCore = ({
  id,
  className,
  background = "transparent",
  minSize = 0.4,
  maxSize = 1.5,
  speed = 1,
  particleColor = "#FFF",
  particleDensity = 100,
  particleSpeed = 0.5,
  children,
  rainbow = false,
}: SparklesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [devicePixelRatio, setDevicePixelRatio] = useState(1);
  const particlesRef = useRef<any[]>([]);

  const rainbowColors = [
    "#FF5E5B", // Red
    "#FF9E43", // Orange
    "#FFD166", // Yellow
    "#06D6A0", // Green
    "#118AB2", // Blue
    "#7209B7", // Indigo
    "#9D4EDD"  // Violet
  ];

  // Initialize the canvas and context
  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      setContext(ctx);

      // Set canvas dimensions
      updateDimensions();

      // Add resize event listener
      window.addEventListener("resize", updateDimensions);
      
      return () => {
        window.removeEventListener("resize", updateDimensions);
      };
    }
  }, []);

  // Handle window resize
  const updateDimensions = () => {
    if (!canvasRef.current) return;
    
    const dpr = window.devicePixelRatio || 1;
    const rect = canvasRef.current.getBoundingClientRect();
    
    setWidth(rect.width);
    setHeight(rect.height);
    setDevicePixelRatio(dpr);
    
    canvasRef.current.width = rect.width * dpr;
    canvasRef.current.height = rect.height * dpr;

    if (context) {
      context.scale(dpr, dpr);
    }

    // Generate new particles based on new dimensions
    generateParticles(rect.width, rect.height);
  };

  // Get a color for a particle
  const getParticleColor = () => {
    if (rainbow) {
      return rainbowColors[Math.floor(Math.random() * rainbowColors.length)];
    } else if (Array.isArray(particleColor)) {
      return particleColor[Math.floor(Math.random() * particleColor.length)];
    }
    return particleColor as string;
  };

  // Generate particles based on density and dimensions
  const generateParticles = (width: number, height: number) => {
    const newParticles = [];
    const particleCount = Math.floor((width * height) / 10000 * particleDensity);
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: minSize + Math.random() * (maxSize - minSize),
        speedX: (Math.random() - 0.5) * particleSpeed,
        speedY: (Math.random() - 0.5) * particleSpeed,
        opacity: 0.1 + Math.random() * 0.4,
        fadeRate: 0.005 + Math.random() * 0.01,
        color: getParticleColor(),
        colorIndex: rainbow ? Math.floor(Math.random() * rainbowColors.length) : 0,
        colorTransition: Math.random() * 0.01,
      });
    }
    particlesRef.current = newParticles;
  };

  // Animation frame to update and draw particles
  useEffect(() => {
    if (!context || !width || !height) return;
    let animationFrameId: number;
    const animate = () => {
      context.clearRect(0, 0, width, height);
      if (background !== "transparent") {
        context.fillStyle = background;
        context.fillRect(0, 0, width, height);
      }
      const updatedParticles = particlesRef.current;
      updatedParticles.forEach((particle, i) => {
        particle.x += particle.speedX * speed;
        particle.y += particle.speedY * speed;
        particle.opacity += Math.random() * particle.fadeRate * 2 - particle.fadeRate;
        particle.opacity = Math.max(0.1, Math.min(particle.opacity, 0.5));
        if (rainbow && particle.colorIndex !== undefined && particle.colorTransition) {
          particle.colorIndex = (particle.colorIndex + particle.colorTransition) % rainbowColors.length;
          particle.color = rainbowColors[Math.floor(particle.colorIndex)];
        }
        if (particle.x < 0) particle.x = width;
        if (particle.x > width) particle.x = 0;
        if (particle.y < 0) particle.y = height;
        if (particle.y > height) particle.y = 0;
        context.beginPath();
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        const color = particle.color.startsWith('#') 
          ? particle.color + Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')
          : particle.color.replace(')', `,${particle.opacity})`).replace('rgb', 'rgba');
        context.fillStyle = color;
        context.fill();
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [context, width, height, background, rainbow, particleColor, speed]);

  // Regenerate particles on resize or prop change
  useEffect(() => {
    if (width && height) {
      generateParticles(width, height);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width, height, particleDensity, minSize, maxSize, particleSpeed, rainbow, particleColor]);

  return (
    <div className={cn("relative w-full h-full", className)} id={id}>
      <canvas
        ref={canvasRef}
        width={width * devicePixelRatio}
        height={height * devicePixelRatio}
        style={{ width: "100%", height: "100%" }}
      />
      {children && <div className="absolute inset-0 z-10">{children}</div>}
    </div>
  );
};
