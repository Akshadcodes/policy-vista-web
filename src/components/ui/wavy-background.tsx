
"use client";

import React from "react";
import { cn } from "@/lib/utils";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  waveWidth = 50,
  backgroundFill = "white",
  blur = 10,
  waveOpacity = 0.5,
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  waveOpacity?: number;
  [key: string]: any;
}) => {
  const uniqueId = React.useId();
  const polygonRef = React.useRef<SVGPolygonElement>(null);

  React.useEffect(() => {
    let animationId: number;
    const animations = [
      { direction: 1, speed: 0.015 },
      { direction: -1, speed: 0.007 },
    ];

    let time = 0;
    const animate = () => {
      const points = animations.map((animation, index) => {
        const initialPoints = createPoints(waveWidth, index);
        return initialPoints.map((point, pointIndex) => {
          const waveHeight = index === 0 ? 30 : 18;
          const modifiedY =
            point[1] +
            Math.sin(time * animation.speed + pointIndex * 0.1) * waveHeight * animation.direction;
          return [point[0], modifiedY];
        });
      });

      const combinedPoints = [...points[0], ...points[1].reverse()];
      const polygonPoints = combinedPoints.map(point => `${point[0]},${point[1]}`).join(" ");
      
      if (polygonRef.current) {
        polygonRef.current.setAttribute("points", polygonPoints);
      }

      time++;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [waveWidth]);

  const createPoints = (width: number, index: number): number[][] => {
    const points: number[][] = [];
    const yOffset = index === 0 ? 0 : 50;
    for (let i = 0; i <= 100; i += width / 25) {
      points.push([i, yOffset]);
    }
    return points;
  };

  return (
    <div
      className={cn("relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 to-orange-100", containerClassName)}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        style={{ filter: `blur(${blur}px)` }}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={`${uniqueId}-gradient`} gradientTransform="rotate(45)">
            <stop offset="5%" stopColor="#FF8F50" stopOpacity={waveOpacity} />
            <stop offset="95%" stopColor="#F97316" stopOpacity={waveOpacity} />
          </linearGradient>
        </defs>
        <polygon
          ref={polygonRef}
          fill={`url(#${uniqueId}-gradient)`}
          fillOpacity={waveOpacity}
        />
      </svg>
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
