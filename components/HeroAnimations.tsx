"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function HeroAnimations() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading
      gsap.from(".hero-heading", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      // Stats
      gsap.from(".stat-item", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        delay: 0.4,
        ease: "power3.out",
      });

      // Background (no blink)
      gsap.to(".hero-bg", {
        scale: 1,
        duration: 2,
        ease: "power2.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return null; // no UI, only animations
}
