"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function WhyUsAnimation() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const heading = document.querySelector(".why-heading");

      if (heading) {
        // 🔥 Split into lines
        const split = new SplitText(heading, {
          type: "lines",
          linesClass: "line",
        });

        // Wrap each line (mask effect)
        split.lines.forEach((line) => {
          const wrapper = document.createElement("div");
          wrapper.style.overflow = "hidden";

          line.parentNode?.insertBefore(wrapper, line);
          wrapper.appendChild(line);
        });

        // Prevent flicker
        gsap.set(".why-heading", { visibility: "visible" });

        // 🎯 Line reveal animation
        gsap.from(split.lines, {
          scrollTrigger: {
            trigger: ".why-section",
            start: "top 80%",
          },
          yPercent: 100,
          opacity: 0,
          duration: 1,
          ease: "power4.out",
          stagger: 0.12,
        });
      }

      // SUBTEXT SPLIT (NEW)
      const subtext = document.querySelector(".why-subtext");

      if (subtext) {
        const splitSub = new SplitText(subtext, {
          type: "lines",
          linesClass: "sub-line",
        });

        // Wrap lines (same mask effect)
        splitSub.lines.forEach((line) => {
          const wrapper = document.createElement("div");
          wrapper.style.overflow = "hidden";

          line.parentNode?.insertBefore(wrapper, line);
          wrapper.appendChild(line);
        });

        // Prevent flicker
        gsap.set(".why-subtext", { visibility: "visible" });

        // ✨ Softer animation than heading
        gsap.from(splitSub.lines, {
          scrollTrigger: {
            trigger: ".why-section",
            start: "top 75%",
          },
          yPercent: 100,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.08,
        });
      }

      // ✨ Image zoom-in
      gsap.from(".why-image", {
        scrollTrigger: {
          trigger: ".why-cards",
          start: "top 80%",
        },
        scale: 0.5,
        duration: 1.2,

        ease: "power2.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
