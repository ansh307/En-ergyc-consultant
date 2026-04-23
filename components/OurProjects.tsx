"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function OurProjects() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  // ✅ Scroll
  const scroll = (dir: "left" | "right") => {
    if (!sliderRef.current) return;

    const container = sliderRef.current;
    const scrollAmount = container.clientWidth * 0.8;

    container.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // ✅ Progress bar
  useEffect(() => {
    const container = sliderRef.current;
    if (!container) return;

    const updateProgress = () => {
      const maxScroll = container.scrollWidth - container.clientWidth;
      const current = container.scrollLeft;
      const percent = (current / maxScroll) * 100;
      setProgress(percent || 0);
    };

    container.addEventListener("scroll", updateProgress);
    return () => container.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <section className="w-full bg-[#f5f5f5] py-10 md:py-28 px-6 md:px-32">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="grid md:grid-cols-3 gap-4 items-start">
          <p className="text-sm text-gray-500 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-gray-400 rounded-full" />
            Our Projects
          </p>

          <div className="max-w-lg md:mb-32 text-balance md:mx-auto col-span-2 xl:col-span-1">
            <h2 className="text-3xl md:text-5xl font-medium text-gray-900 leading-tight">
              Recent Projects
            </h2>

            <p className="mt-4 text-gray-600 text-sm md:text-base">
              Explore our latest projects delivering innovation, efficiency, and
              reliability across industries.
            </p>
          </div>
        </div>

        {/* SLIDER */}
        <div className="relative md:mt-0 mt-14">
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar"
          >
            <ProjectCard
              image="/about.png"
              title="Power Infrastructure Upgrade"
              description="Modernized electrical grid systems with advanced transformers and automation."
            />

            <ProjectCard
              image="/about.png"
              title="Industrial Automation System"
              description="Implemented smart automation for enhanced productivity and safety."
            />

            <ProjectCard
              image="/about.png"
              title="Airport Lighting Solutions"
              description="Delivered high-performance runway lighting systems for aviation safety."
            />

            <ProjectCard
              image="/about.png"
              title="IoT Smart Facility"
              description="Integrated IoT systems for real-time monitoring and control."
            />
          </div>

          {/* CONTROLS */}
          <div className="flex items-center justify-between mt-14 md:mt-20">
            {/* PROGRESS BAR */}
            <div className="flex-1 h-[3px] bg-gray-200 rounded-full overflow-hidden mr-6">
              <div
                className="h-full bg-gray-700 transition-all duration-200"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* BUTTONS */}
            <div className="flex gap-3">
              <button
                onClick={() => scroll("left")}
                className="w-10 h-10 rounded-full border flex items-center justify-center text-black hover:bg-black hover:text-white transition"
              >
                <ArrowLeft size={18} />
              </button>

              <button
                onClick={() => scroll("right")}
                className="w-10 h-10 rounded-full border flex items-center justify-center text-black hover:bg-black hover:text-white transition"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ================= COMPONENT =================

function ProjectCard({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <div className="min-w-[420px]">
      {/* IMAGE */}
      <div className="relative w-full h-[300px] rounded-xl overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover hover:scale-105 transition duration-500"
        />
      </div>

      {/* TEXT */}
      <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>

      <p className="mt-2 text-sm text-gray-600">{description}</p>
    </div>
  );
}
