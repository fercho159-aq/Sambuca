"use client";

import { useEffect, useState } from "react";
import { PRIZES, type Prize } from "@/lib/prizes";

interface PrizeWheelProps {
  isSpinning: boolean;
  selectedPrize?: Prize | null;
  onSpinComplete?: () => void;
}

export function PrizeWheel({ isSpinning, selectedPrize, onSpinComplete }: PrizeWheelProps) {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    if (isSpinning && selectedPrize) {
      const prizeIndex = PRIZES.findIndex(p => p.id === selectedPrize.id);
      const segmentAngle = 360 / PRIZES.length;

      // Calculate target rotation: multiple full spins + landing on the prize
      // The prize should land at the top (0 degrees), so we need to rotate to align it
      const baseRotation = 360 * 5; // 5 full spins
      const prizeOffset = prizeIndex * segmentAngle;
      // Subtract half segment to center the prize at the pointer
      const targetRotation = baseRotation + (360 - prizeOffset) - (segmentAngle / 2);

      setRotation(targetRotation);

      // Call onSpinComplete after animation
      const timer = setTimeout(() => {
        onSpinComplete?.();
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [isSpinning, selectedPrize, onSpinComplete]);

  const segmentAngle = 360 / PRIZES.length;

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Pointer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 z-10">
        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[30px] border-t-primary drop-shadow-[0_0_10px_hsl(330,100%,71%)]" />
      </div>

      {/* Wheel */}
      <div
        className="relative w-72 h-72 md:w-80 md:h-80 mx-auto rounded-full border-4 border-primary box-glow-primary overflow-hidden"
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: isSpinning ? "transform 4s cubic-bezier(0.17, 0.67, 0.12, 0.99)" : "none",
        }}
      >
        {PRIZES.map((prize, index) => {
          const startAngle = index * segmentAngle;
          const midAngle = startAngle + segmentAngle / 2;

          return (
            <div
              key={prize.id}
              className="absolute w-full h-full"
              style={{
                clipPath: `polygon(50% 50%, ${50 + 50 * Math.cos((startAngle - 90) * Math.PI / 180)}% ${50 + 50 * Math.sin((startAngle - 90) * Math.PI / 180)}%, ${50 + 50 * Math.cos((startAngle + segmentAngle - 90) * Math.PI / 180)}% ${50 + 50 * Math.sin((startAngle + segmentAngle - 90) * Math.PI / 180)}%)`,
                backgroundColor: prize.color,
              }}
            >
              {/* Prize label */}
              <div
                className="absolute text-black font-bold text-[10px] md:text-xs whitespace-nowrap"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: `rotate(${midAngle - 90}deg) translateX(45px)`,
                  transformOrigin: "left center",
                }}
              >
                {prize.nombre}
              </div>
            </div>
          );
        })}

        {/* Center circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 rounded-full bg-black border-4 border-primary flex items-center justify-center">
          <span className="text-primary font-headline text-lg md:text-xl">S</span>
        </div>
      </div>

      {/* Glow effect when spinning */}
      {isSpinning && (
        <div className="absolute inset-0 rounded-full animate-pulse bg-primary/20 blur-xl" />
      )}
    </div>
  );
}
