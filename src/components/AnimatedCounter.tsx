import React, { useEffect, useState, useRef } from 'react';

interface AnimatedCounterProps {
  value: string; // e.g. "10M+", "4.8x", "250+", "98%"
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value, className = '' }) => {
  const [displayValue, setDisplayValue] = useState('0');
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    // Parse numeric value and suffix
    const numericMatch = value.match(/([\d.]+)/);
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }

    const targetNumber = parseFloat(numericMatch[1]);
    const isDecimal = value.includes('.');
    const suffix = value.replace(numericMatch[1], '');

    const duration = 1200; // ms
    const startTime = performance.now();

    const update = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      // Ease out quartic
      const easeOut = 1 - Math.pow(1 - progress, 4);
      const current = targetNumber * easeOut;

      setDisplayValue(
        (isDecimal ? current.toFixed(1) : Math.floor(current).toString()) + suffix
      );

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(update);
  }, [hasAnimated, value]);

  return (
    <span ref={elementRef} className={`tabular-nums ${className}`}>
      {displayValue}
    </span>
  );
};
