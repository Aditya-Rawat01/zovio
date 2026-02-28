"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({
  value,
  duration = 2,
  className = "",
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState("0");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    // Extract numeric part and suffix (e.g., "150+" -> 150, "+")
    const match = value.match(/^([\d.]+)(.*)$/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const targetNum = parseFloat(match[1]);
    const suffix = match[2];
    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      
      // Easing function (ease-out cubic)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      const currentValue = startValue + (targetNum - startValue) * easeOut;
      
      // Format based on whether it's a whole number or decimal
      const formatted = Number.isInteger(targetNum)
        ? Math.round(currentValue).toString()
        : currentValue.toFixed(1);
      
      setDisplayValue(formatted + suffix);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}
