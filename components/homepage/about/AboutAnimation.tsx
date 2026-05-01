"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function AboutAnimation() {
  useLayoutEffect(() => {
    let split: any;

    const ctx = gsap.context(() => {
      const el = document.querySelector(".about-heading");

      if (!el) return;

      // 🔥 Prevent flicker
      gsap.set(el, { visibility: "visible" });

      const createSplit = () => {
        // Clean previous split (important for resize)
        if (split) {
          split.revert();
        }

        // 🔥 Split text into lines
        split = new SplitText(el, {
          type: "lines",
          linesClass: "line",
        });

        // Wrap each line (mask effect)
        split.lines.forEach((line: Element) => {
          const wrapper = document.createElement("div");
          wrapper.style.overflow = "hidden";

          line.parentNode?.insertBefore(wrapper, line);
          wrapper.appendChild(line);
        });

        // 🔥 Animate lines
        gsap.from(split.lines, {
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            once: true,
          },
          yPercent: 100,
          opacity: 0,
          duration: 1,
          ease: "power4.out",
          stagger: 0.12,
        });
      };

      // Initial run
      createSplit();

      // 🔁 Re-split on resize / refresh
      ScrollTrigger.addEventListener("refreshInit", createSplit);

      // 🖼️ Image animation (kept from your code)
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
    });

    return () => {
      ScrollTrigger.removeEventListener("refreshInit", () => {});
      ctx.revert();
    };
  }, []);

  return null;
}
