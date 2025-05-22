
"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface SparklesProps {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleColor?: string;
  particleDensity?: number;
  particleSpeed?: number;
  speed?: number;
  children?: React.ReactNode;
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
}: SparklesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const [particles, setParticles] = useState<
    Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      fadeRate: number;
    }>
  >([]);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [devicePixelRatio, setDevicePixelRatio] = useState(1);

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
      });
    }
    
    setParticles(newParticles);
  };

  // Animation frame to update and draw particles
  useEffect(() => {
    if (!context || !width || !height) return;

    let animationFrameId: number;
    
    const animate = () => {
      context.clearRect(0, 0, width, height);
      
      // Draw background
      if (background !== "transparent") {
        context.fillStyle = background;
        context.fillRect(0, 0, width, height);
      }
      
      // Update and draw particles
      const updatedParticles = [...particles];
      
      updatedParticles.forEach((particle, i) => {
        // Move particle
        particle.x += particle.speedX * speed;
        particle.y += particle.speedY * speed;
        
        // Make particles twinkle by changing opacity
        particle.opacity += Math.random() * particle.fadeRate * 2 - particle.fadeRate;
        particle.opacity = Math.max(0.1, Math.min(particle.opacity, 0.5));
        
        // Handle particles that go out of bounds
        if (particle.x < 0) particle.x = width;
        if (particle.x > width) particle.x = 0;
        if (particle.y < 0) particle.y = height;
        if (particle.y > height) particle.y = 0;
        
        // Draw the particle
        context.beginPath();
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fillStyle = `${particleColor}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`;
        context.fill();
        
        updatedParticles[i] = particle;
      });
      
      setParticles(updatedParticles);
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [context, particles, width, height, background, particleColor, speed]);

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

