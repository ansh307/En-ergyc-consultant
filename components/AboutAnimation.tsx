"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";
// 👇 adjust path to where you placed the Club plugin

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function AboutAnimation() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const el = document.querySelector(".about-heading");

      if (!el) return;

      // Split into lines (auto handles responsive reflow)
      const split = new SplitText(el, {
        type: "lines",
        linesClass: "line",
      });

      split.lines.forEach((line) => {
        const wrapper = document.createElement("div");
        wrapper.style.overflow = "hidden";

        line.parentNode?.insertBefore(wrapper, line);
        wrapper.appendChild(line);
      });

      // Animate lines
      gsap.from(split.lines, {
        scrollTrigger: {
          trigger: ".about-heading",
          start: "top 80%",
          once: true, // run once
        },
        yPercent: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.12,
      });

      // Image (optional)
      gsap.from(".about-image", {
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 80%",
          once: true,
        },
        scale: 0.5,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      // 🔁 Fix for resize (important for line splitting)
      const onRefresh = () => split.revert();
      ScrollTrigger.addEventListener("refreshInit", onRefresh);
    });

    return () => ctx.revert();
  }, []);

  return null;
}
