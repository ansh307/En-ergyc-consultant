"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      if (headingRef.current) {
        gsap.from(headingRef.current, {
          y: 80,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
        });
      }

      // Stats stagger animation (FIXED)
      if (statsRef.current) {
        const stats = Array.from(statsRef.current.children);

        gsap.from(stats, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
          delay: 0.4,
        });
      }

      // Background zoom
      gsap.to(".hero-bg", {
        scale: 1,
        duration: 2,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="/hero.jpg"
        alt="Hero Background"
        fill
        priority
        className="object-cover hero-bg scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex w-full h-full pb-20 px-6 md:px-32">
        <div className="w-full flex flex-col md:flex-row gap-10 justify-center md:justify-between items-start md:items-end">
          {/* LEFT TEXT */}
          <div className="max-w-xl">
            <h1
              ref={headingRef}
              className="text-white text-4xl lg:text-5xl xl:text-6xl font-light leading-tight"
            >
              <span className="text-green-500 font-medium">Trusted</span>
              <br />
              MEP Engineering
            </h1>
          </div>

          {/* RIGHT STATS */}
          <div ref={statsRef} className="flex gap-14 mt-10 md:mt-0 text-white">
            <Stat number="47+" label="Years of experience" />
            <Stat number="120+" label="Experts" />
            <Stat number="138" label="Completed project" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center md:text-left">
      <h2 className="text-2xl lg:text-4xl xl:text-5xl">{number}</h2>
      <p className="text-md xl:text-lg text-white/70">{label}</p>
    </div>
  );
}
