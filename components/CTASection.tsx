"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function CTASection() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (!bgRef.current) return;

          const rect = bgRef.current.getBoundingClientRect();
          const offset = rect.top * 0.2; // subtle = premium

          bgRef.current.style.transform = `translateY(${offset}px) scale(2)`;

          ticking = false;
        });

        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center text-center px-6 md:px-32 overflow-hidden">
      {/* PARALLAX BACKGROUND */}
      <div
        ref={bgRef}
        className="absolute inset-0 -z-10 bg-center bg-cover will-change-transform"
        style={{
          backgroundImage: "url('/cta-3.jpg')",
          transform: "translateY(0px) scale(2)", // 👈 important
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-2xl text-white">
        <h2 className="text-3xl md:text-5xl font-medium leading-tight">
          Get Your Free Consultation
        </h2>

        <p className="mt-4 text-sm md:text-base text-white/80">
          Get ready to power up your dream project! Schedule an appointment to
          electrify your vision and bring it to life.
        </p>

        <Link
          href="/book-a-meeting"
          className="mt-8 bg-green-500 text-black px-6 py-3 rounded-md text-sm font-medium hover:scale-105 transition inline-block"
        >
          Book An Appointment →
        </Link>
      </div>
    </section>
  );
}
