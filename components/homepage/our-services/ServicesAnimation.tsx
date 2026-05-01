"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function ServicesAnimation() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 🔥 HEADING
      const heading = document.querySelector(".services-heading");

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
            trigger: ".services-header",
            start: "top 80%",
          },
          yPercent: 100,
          stagger: 0.12,
          duration: 1,
          ease: "power4.out",
        });
      }

      // ✨ SUBTEXT
      const sub = document.querySelector(".services-subtext");

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
            trigger: ".services-header",
            start: "top 75%",
          },
          yPercent: 100,
          stagger: 0.08,
          duration: 0.7,
          ease: "power3.out",
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return null;
}
