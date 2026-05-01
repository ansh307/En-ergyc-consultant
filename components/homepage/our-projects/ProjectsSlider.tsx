"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function ProjectsSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const scroll = (dir: "left" | "right") => {
    if (!sliderRef.current) return;

    const container = sliderRef.current;
    const scrollAmount = container.clientWidth * 0.8;

    container.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const container = sliderRef.current;
    if (!container) return;

    const updateProgress = () => {
      const maxScroll = container.scrollWidth - container.clientWidth;
      const percent = (container.scrollLeft / maxScroll) * 100;
      setProgress(percent || 0);
    };

    container.addEventListener("scroll", updateProgress);
    return () => container.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="relative mt-14">
      <div
        ref={sliderRef}
        className="projects-cards flex gap-6 overflow-x-auto scroll-smooth no-scrollbar"
      >
        <ProjectCard
          image="/project-1.png"
          title="Power Infrastructure Upgrade"
          description="Modernized electrical grid systems with advanced transformers and automation."
        />
        <ProjectCard
          image="/project-2.jpg"
          title="Industrial Automation System"
          description="Implemented smart automation for enhanced productivity and safety."
        />
        <ProjectCard
          image="/project-3.jpg"
          title="Airport Lighting Solutions"
          description="Delivered high-performance runway lighting systems for aviation safety."
        />
        <ProjectCard
          image="/project-4.jpg"
          title="IoT Smart Facility"
          description="Integrated IoT systems for real-time monitoring and control."
        />
      </div>

      {/* controls */}
      <div className="flex items-center justify-between mt-14">
        <div className="flex-1 h-[3px] bg-gray-200 rounded-full overflow-hidden mr-6">
          <div
            className="h-full bg-gray-700 transition-all duration-200"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex gap-3">
          <button
            aria-label="Scroll left"
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full border flex items-center justify-center text-black hover:bg-black hover:text-white transition"
          >
            <ArrowLeft size={18} />
          </button>

          <button
            aria-label="Scroll right"
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full border flex items-center justify-center text-black hover:bg-black hover:text-white transition"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ image, title, description }: any) {
  return (
    <div className="project-card min-w-[420px]">
      <div className="project-image relative w-full h-[300px] rounded-xl overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover hover:scale-105 transition duration-500"
        />
      </div>

      <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
    </div>
  );
}
