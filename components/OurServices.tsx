"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import {
  Zap,
  Flame,
  Sun,
  Bolt,
  Building2,
  Droplets,
  Shield,
  AlertTriangle,
  BatteryCharging,
  Car,
  Calculator,
  ClipboardCheck,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

export default function OurServices() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const services = [
    { icon: Zap, label: "Power Distribution" },
    { icon: Shield, label: "Fire and Life Safety" },
    { icon: Bolt, label: "Temporary Power Design" },
    { icon: Sun, label: "Solar Power System Design" },
    { icon: Building2, label: "HVAC System" },
    { icon: Droplets, label: "Plumbing Design" },
    { icon: Flame, label: "Sprinkler System Design" },
    { icon: AlertTriangle, label: "Fire Alarm System Design" },
    { icon: BatteryCharging, label: "Emergency Power Design" },
    { icon: Car, label: "EV Charger Infrastructure Design" },
    { icon: Calculator, label: "Electrical Cost Estimation" },
  ];

  // ✅ FIXED SCROLL (responsive)
  const scroll = (dir: "left" | "right") => {
    if (!sliderRef.current) return;

    const container = sliderRef.current;
    const scrollAmount = container.clientWidth * 0.8;

    container.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // ✅ REAL PROGRESS BAR
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
            <span className="w-2 h-2 bg-green-600 rounded-full" />
            Our Services
          </p>

          <div className="max-w-lg md:mb-32 text-balance md:mx-auto col-span-2 xl:col-span-1">
            <h2 className="text-3xl md:text-5xl font-medium text-gray-900 leading-tight">
              Our Services
            </h2>

            <p className="mt-4 text-gray-600 text-sm md:text-base">
              Innovative solutions in automation, control, aviation, and IoT to
              enhance efficiency and safety across industries.
            </p>
          </div>
        </div>

        {/* SLIDER */}
        <div className="relative md:mt-0 mt-14">
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar pb-5"
          >
            <div className="min-w-[400px] h-[500px] rounded-xl p-8 bg-green-600 text-white flex flex-col shadow-md">
              {/* TITLE */}
              <h3 className="text-2xl font-medium mb-6">
                Electrical & Engineering Services
              </h3>

              {/* SERVICES LIST */}
              <div className="grid grid-cols-1 gap-3 overflow-y-auto pr-2">
                {services.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-sm opacity-90 hover:opacity-100 transition"
                    >
                      <Icon size={16} className="text-white/90" />
                      <span>{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <ImageCard />

            <ServiceCard
              title="Control & Automation"
              description="Smart automation systems to optimize operations."
              color="bg-white text-black"
              buttonStyle="dark"
              isTextonly
            />

            <ImageCard />

            <ServiceCard
              title="Advanced Systems"
              description="Cutting-edge industrial solutions."
              color="bg-white text-black"
              buttonStyle="dark"
              isTextonly
            />

            <ImageCard />
          </div>

          {/* CONTROLS */}
          <div className="flex items-center justify-between mt-14 md:mt-20">
            {/* ✅ REAL PROGRESS BAR */}
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

function ServiceCard({
  title,
  description,
  color,
  buttonStyle = "light",
  isTextonly = false,
}: {
  title: string;
  description: string;
  color: string;
  buttonStyle?: "light" | "dark" | "green";
  isTextonly?: boolean;
}) {
  return (
    <div
      className={`min-w-[400px] h-[500px] rounded-xl p-8 flex flex-col justify-between ${color} shadow-md`}
    >
      <div>
        <h3 className="text-2xl font-medium">{title}</h3>
        <p className="mt-4 text-sm opacity-80">{description}</p>
      </div>

      {!isTextonly && (
        <button
          className={`w-fit px-4 py-2 rounded-md text-sm ${
            buttonStyle === "dark"
              ? "bg-black text-white"
              : buttonStyle === "green"
                ? "bg-green-600 text-white"
                : "bg-white text-black"
          }`}
        >
          Read more
        </button>
      )}
    </div>
  );
}

function ImageCard() {
  return (
    <div className="min-w-[800px] h-[500px] relative rounded-xl overflow-hidden">
      <Image src="/about.png" alt="Service" fill className="object-cover" />
    </div>
  );
}
