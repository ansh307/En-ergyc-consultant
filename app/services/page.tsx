"use client";

import Banner from "@/components/Banner";
import CTASection from "@/components/CTASection";
import {
  Zap,
  ShieldCheck,
  Power,
  Sun,
  Fan,
  Droplets,
  Flame,
  AlertTriangle,
  BatteryCharging,
  Car,
  Calculator,
  Truck,
} from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Power Distribution",
    desc: "Design and implementation of efficient and reliable electrical distribution systems.",
  },
  {
    icon: ShieldCheck,
    title: "Fire and Life Safety",
    desc: "Comprehensive safety system designs to ensure compliance and protection.",
  },
  {
    icon: Power,
    title: "Temporary Power Design",
    desc: "Reliable temporary power solutions for construction and industrial sites.",
  },
  {
    icon: Sun,
    title: "Solar Power System Design",
    desc: "Sustainable solar solutions tailored to modern energy needs.",
  },
  {
    icon: Fan,
    title: "HVAC System",
    desc: "Efficient heating, ventilation, and air conditioning system designs.",
  },
  {
    icon: Droplets,
    title: "Plumbing Design",
    desc: "Smart and efficient plumbing systems for residential and commercial projects.",
  },
  {
    icon: Flame,
    title: "Sprinkler System Design",
    desc: "Advanced fire sprinkler systems ensuring safety and compliance.",
  },
  {
    icon: AlertTriangle,
    title: "Fire Alarm System Design",
    desc: "Reliable fire detection and alarm systems for maximum safety.",
  },
  {
    icon: BatteryCharging,
    title: "Emergency Power Design",
    desc: "Backup power systems to ensure uninterrupted operations.",
  },
  {
    icon: Car,
    title: "EV Charger Infrastructure",
    desc: "Future-ready electric vehicle charging infrastructure solutions.",
  },
  {
    icon: Calculator,
    title: "Electrical Cost Estimation",
    desc: "Accurate project cost estimation for better planning and execution.",
  },
  {
    icon: Truck,
    title: "Construction Review",
    desc: "Detailed reviews ensuring quality, compliance, and efficiency.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ================= BANNER ================= */}
      <Banner
        label="Services"
        title="What We Offer"
        subtitle="Comprehensive Electrical & MEP Engineering Solutions Across Ontario"
        image="/banner-1.jpg"
      />

      {/* ================= CONTENT ================= */}
      <section className="w-full bg-white py-20 md:py-28 px-6 md:px-32">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* INTRO */}
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-medium text-gray-900">
              Engineering Services Designed for Modern Infrastructure
            </h2>
            <p className="mt-4 text-gray-600">
              We deliver innovative electrical and mechanical engineering
              solutions tailored for residential and commercial projects across
              Ontario.
            </p>
          </div>

          {/* SERVICES GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => {
              const Icon = service.icon;

              return (
                <div
                  key={i}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
                >
                  {/* ICON */}
                  <div className="text-green-600 mb-4">
                    <Icon size={24} />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-lg font-medium text-gray-900">
                    {service.title}
                  </h3>

                  {/* DESC */}
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
