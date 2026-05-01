"use client";

import { useEffect, useRef } from "react";
import { ReviewCard } from "./ReviewCard";

type Review = {
  name: string;
  time: string;
  text: string;
};

export default function ReviewsSlider({ reviews }: { reviews: Review[] }) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const container = sliderRef.current;
    if (!container) return;

    const speed = 0.5;

    const scroll = () => {
      container.scrollLeft += speed;

      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft -= container.scrollWidth / 2;
      }

      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);

    const handleMouseEnter = () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };

    const handleMouseLeave = () => {
      animationRef.current = requestAnimationFrame(scroll);
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="relative overflow-hidden md:mt-0 mt-14">
      {/* LEFT FADE */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10" />

      {/* RIGHT FADE */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10" />

      {/* SLIDER */}
      <div ref={sliderRef} className="flex gap-6 overflow-hidden pb-5">
        {[...reviews, ...reviews].map((review, i) => (
          <ReviewCard key={i} {...review} />
        ))}
      </div>
    </div>
  );
}
