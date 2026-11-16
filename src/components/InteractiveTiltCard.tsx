"use client";

import React, { useRef, useState, useCallback } from "react";

interface InteractiveTiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // max tilt degrees (default: 5)
  showGlare?: boolean;
  glareOpacity?: number;
}

export default function InteractiveTiltCard({
  children,
  className = "",
  maxTilt = 4,
  showGlare = true,
  glareOpacity = 0.12,
}: InteractiveTiltCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [transformStyle, setTransformStyle] = useState<string>(
    "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)"
  );
  const [glarePosition, setGlarePosition] = useState<{ x: number; y: number } | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const card = cardRef.current;
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Calculate tilt (-maxTilt to +maxTilt)
      const rotateX = -((y - centerY) / centerY) * maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      setTransformStyle(
        `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(
          2
        )}deg) translateY(-4px) translateZ(8px)`
      );

      if (showGlare) {
        setGlarePosition({
          x: (x / rect.width) * 100,
          y: (y / rect.height) * 100,
        });
      }
    },
    [maxTilt, showGlare]
  );

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransformStyle(
      "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) translateZ(0px)"
    );
    setGlarePosition(null);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        transition: isHovered
          ? "transform 0.1s ease-out"
          : "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      className={`relative preserve-3d will-change-transform ${className}`}
    >
      {children}

      {/* Subtle 3D Interactive Glare Reflection */}
      {showGlare && isHovered && glarePosition && (
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300 z-30 overflow-hidden"
          style={{
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(245, 158, 11, ${glareOpacity}), transparent 60%)`,
          }}
        />
      )}
    </div>
  );
}
