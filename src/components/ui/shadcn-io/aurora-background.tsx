"use client";

import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative bg-zinc-950 text-slate-50 dark:bg-black",
        className,
      )}
      {...props}
    >
      <div
        className="absolute inset-0 overflow-hidden"
        style={
          {
            "--aurora":
              "repeating-linear-gradient(100deg, #1e3a8a 10%, #312e81 15%, #1e40af 20%, #4c1d95 25%, #1e3a8a 30%)",
            "--dark-gradient":
              "repeating-linear-gradient(100deg, #000 0%, #000 7%, transparent 10%, transparent 12%, #000 16%)",
          } as React.CSSProperties
        }
      >
        <div
          className={cn(
            "pointer-events-none absolute -inset-[10px] opacity-70 blur-[10px] will-change-transform",
            showRadialGradient &&
              "[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]",
          )}
          style={{
            backgroundImage: "var(--dark-gradient), var(--aurora)",
            backgroundSize: "300%, 200%",
            backgroundPosition: "50% 50%, 50% 50%",
            animation: "aurora 60s linear infinite",
          } as React.CSSProperties}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "var(--dark-gradient), var(--aurora)",
              backgroundSize: "200%, 100%",
              backgroundAttachment: "fixed",
              mixBlendMode: "difference",
              animation: "aurora 60s linear infinite",
            } as React.CSSProperties}
          ></div>
        </div>
      </div>
      {children}
    </div>
  );
};
