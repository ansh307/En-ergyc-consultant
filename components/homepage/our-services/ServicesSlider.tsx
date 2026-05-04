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
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

export default function ServicesSlider() {
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

        <ImageCard img="/service-1.png" />

        <ServiceCard
          title="Smart Engineering Solutions"
          description="We deliver intelligent electrical and engineering systems designed for reliability, efficiency, and long-term performance. From power distribution to HVAC, fire safety, and EV infrastructure, our solutions are tailored to meet modern industry demands."
          color="bg-white text-black"
          buttonStyle="dark"
          isTextonly
        />

        <ImageCard img="/service-2.png" />

        <ServiceCard
          title="Built for Safety & Sustainability"
          description="Our approach combines advanced design with sustainable practices to ensure safe, energy-efficient environments. Whether it’s solar power systems, emergency power, or automation, we create solutions that support both operational excellence and future growth."
          color="bg-white text-black"
          buttonStyle="dark"
          isTextonly
        />

        <ImageCard img="/service-3.png" />
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
        <p className="mt-4 text-md opacity-80">{description}</p>
      </div>

      {!isTextonly && (
        <button
          aria-label="Read more"
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

function ImageCard({ img }: { img: string }) {
  return (
    <div className="min-w-[800px] h-[500px] relative rounded-xl overflow-hidden shadow-md">
      <Image src={img} alt="Service" fill className="object-cover" />
    </div>
  );
}
