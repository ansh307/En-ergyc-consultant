"use client";

import { useEffect, useRef } from "react";
import { ReviewCard } from "./ReviewCard";

export default function GoogleReviews() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const container = sliderRef.current;
    if (!container) return;

    const speed = 0.5;

    const scroll = () => {
      container.scrollLeft += speed;

      // ✅ seamless loop
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft -= container.scrollWidth / 2;
      }

      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);

    // ✅ pause on hover
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

  const reviews = [
    {
      name: "Michael Turner",
      time: "2 months ago",
      text: "We partnered with En-ergyc Consultant for a multi-residential project, and their electrical design work was exceptional. The team was responsive, detail-oriented, and helped us avoid costly revisions during approvals.",
    },
    {
      name: "Priya Sharma",
      time: "5 months ago",
      text: "Their expertise in HVAC and plumbing design made a huge difference in our commercial build. Everything was well-coordinated, and the execution was smooth from start to finish.",
    },
    {
      name: "David Chen",
      time: "3 months ago",
      text: "En-ergyc guided us through EV charging infrastructure planning for our facility. Their knowledge of current standards and future scalability gave us a lot of confidence.",
    },
    {
      name: "Amit Verma",
      time: "6 months ago",
      text: "Very professional team with strong technical knowledge. They handled our fire alarm and life safety system design efficiently and ensured full compliance with regulations.",
    },
    {
      name: "Sarah Collins",
      time: "4 months ago",
      text: "Clear communication, practical solutions, and timely delivery. Working with En-ergyc made our project coordination much easier.",
    },
  ];

  return (
    <section className="w-full bg-[#f5f5f5] py-10 md:py-28 px-6 md:px-32">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="grid md:grid-cols-3 gap-4 items-start">
          <p className="text-sm text-gray-500 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-600 rounded-full" />
            Google Reviews
          </p>

          <div className="max-w-lg md:mb-32 text-balance md:mx-auto col-span-2 xl:col-span-1">
            <h2 className="text-3xl md:text-5xl font-medium text-gray-900 leading-tight">
              EXCELLENT
            </h2>

            <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
              <span className="font-medium">Google</span>
              <span>• Based on 15 reviews</span>
            </div>
          </div>
        </div>

        {/* SLIDER WITH FADE EDGES */}
        <div className="relative overflow-hidden md:mt-0 mt-14">
          {/* LEFT FADE */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#f5f5f5] to-transparent z-10" />

          {/* RIGHT FADE */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#f5f5f5] to-transparent z-10" />

          {/* SLIDER */}
          <div ref={sliderRef} className="flex gap-6 overflow-hidden">
            {[...reviews, ...reviews].map((review, i) => (
              <ReviewCard key={i} {...review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
