"use client";

import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

type SliderProps = {
  images: string[];
  onImageClick?: (src: string) => void;
};

export default function Slider({ images, onImageClick }: SliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  const isClickable = Boolean(onImageClick);

  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider rounded-2xl">
          {images.map((src, index) => {
            const clickProps = isClickable
              ? {
                  role: "button" as const,
                  "aria-label": `Abrir imagem ${index + 1}`,
                  tabIndex: 0,
                  onClick: () => onImageClick?.(src),
                  onKeyDown: (e: React.KeyboardEvent) => {
                    if (e.key === "Enter" || e.key === " ") onImageClick?.(src);
                  },
                }
              : {};

            return (
              <div
                key={index}
                className="keen-slider__slide relative w-full h-64 md:h-96"
                {...clickProps}
              >
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 700px"
                  className={[
                    "object-cover select-none",
                    isClickable ? "cursor-zoom-in transition-transform duration-300 hover:scale-105" : "cursor-default"
                  ].join(" ")}
                  priority={index === 0}
                  draggable={false}
                />
              </div>
            );
          })}
        </div>

        {loaded && instanceRef.current && (
          <>
            <Arrow
              direction="left"
              onClick={() => instanceRef.current?.prev()}
              disabled={currentSlide === 0}
            />
            <Arrow
              direction="right"
              onClick={() => instanceRef.current?.next()}
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>

      {loaded && instanceRef.current && (
        <div className="dots">
          {Array.from({ length: instanceRef.current.track.details.slides.length }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={`dot${currentSlide === idx ? " active" : ""}`}
            />
          ))}
        </div>
      )}
    </>
  );
}

type ArrowProps = {
  direction: "left" | "right";
  onClick: () => void;
  disabled: boolean;
};

function Arrow({ direction, onClick, disabled }: ArrowProps) {
  return (
    <svg
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      className={`arrow arrow--${direction} ${disabled ? "arrow--disabled" : ""}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {direction === "left" ? (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      ) : (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
