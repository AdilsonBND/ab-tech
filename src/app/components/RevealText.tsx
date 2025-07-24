'use client';

import { animate, stagger } from "motion";
import { splitText } from "motion-plus";
import { useEffect, useRef } from "react";

type RevealTextProps = {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
};

export default function RevealText({ 
  children, 
  className, 
  staggerDelay = 0.05 
}: RevealTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!containerRef.current) return;

      containerRef.current.style.visibility = "visible";
      
      const childrenElements = Array.from(containerRef.current.children);
      
      childrenElements.forEach((child, index) => {
        if (child.textContent && child.children.length === 0) {
          const { words } = splitText(child);
          animate(
            words,
            { opacity: [0, 1], y: [10, 0] },
            {
              type: "spring",
              duration: 2,
              bounce: 0,
              delay: stagger(staggerDelay, { from: index * staggerDelay }),
            }
          );
        } 
        else {
          animate(
            child,
            { opacity: [0, 1], y: [10, 0] },
            {
              type: "spring",
              duration: 8,
              bounce: 0,
              delay: index * staggerDelay,
            }
          );
        }
      });
    });
  }, [staggerDelay]);

  return (
    <div ref={containerRef} className={className} style={{ visibility: "hidden" }}>
      {children}
    </div>
  );
}