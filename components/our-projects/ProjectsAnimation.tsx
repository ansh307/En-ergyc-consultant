"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function ProjectsAnimation() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 🔥 HEADING SPLIT
      const heading = document.querySelector(".projects-heading");

      if (heading) {
        const split = new SplitText(heading, { type: "lines" });

        split.lines.forEach((line) => {
          const wrap = document.createElement("div");
          wrap.style.overflow = "hidden";
          line.parentNode?.insertBefore(wrap, line);
          wrap.appendChild(line);
        });

        gsap.set(heading, { visibility: "visible" });

        gsap.from(split.lines, {
          scrollTrigger: {
            trigger: ".projects-header",
            start: "top 80%",
          },
          yPercent: 100,
          opacity: 0,
          duration: 1,
          stagger: 0.12,
          ease: "power4.out",
        });
      }

      // ✨ SUBTEXT SPLIT
      const sub = document.querySelector(".projects-subtext");

      if (sub) {
        const splitSub = new SplitText(sub, { type: "lines" });

        splitSub.lines.forEach((line) => {
          const wrap = document.createElement("div");
          wrap.style.overflow = "hidden";
          line.parentNode?.insertBefore(wrap, line);
          wrap.appendChild(line);
        });

        gsap.set(sub, { visibility: "visible" });

        gsap.from(splitSub.lines, {
          scrollTrigger: {
            trigger: ".projects-header",
            start: "top 75%",
          },
          yPercent: 100,
          opacity: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
        });
      }

      // 🔥 IMAGE SCALE (0.5 → 1)
      gsap.from(".project-image", {
        scrollTrigger: {
          trigger: ".projects-cards",
          start: "top 80%",
        },
        scale: 0.5,
        opacity: 0,
        duration: 1.2,

        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
