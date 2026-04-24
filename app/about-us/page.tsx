"use client";

import Banner from "@/components/Banner";

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
  { icon: Zap, label: "Power Distribution" },
  { icon: ShieldCheck, label: "Fire and Life Safety" },
  { icon: Power, label: "Temporary Power Design" },
  { icon: Sun, label: "Solar Power System Design" },
  { icon: Fan, label: "HVAC System" },
  { icon: Droplets, label: "Plumbing Design" },
  { icon: Flame, label: "Sprinkler System Design" },
  { icon: AlertTriangle, label: "Fire Alarm System Design" },
  { icon: BatteryCharging, label: "Emergency Power Design" },
  { icon: Car, label: "EV Charger Infrastructure Design" },
  { icon: Calculator, label: "Electrical Construction Cost Est." },
  { icon: Truck, label: "Construction Review" },
];

export default function AboutPage() {
  return (
    <>
      {/* ================= BANNER ================= */}
      <Banner
        label="About Us"
        title="En-ergyc Consultant"
        subtitle="Ontario’s Trusted MEP Engineering Experts — Where We Build Your Visions"
        image="/cta-3.jpg"
      />

      {/* ================= MAIN CONTENT ================= */}
      <section className="w-full bg-[#f5f5f5] py-20 md:py-28 px-6 md:px-32">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* ================= INTRO ================= */}
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-medium text-gray-900 leading-tight">
              Ontario’s Trusted MEP Engineering Experts
            </h2>
            <p className="mt-4 text-gray-600">Where We Build Your Visions</p>
          </div>

          {/* ================= DESCRIPTION ================= */}
          <div className="max-w-4xl space-y-6 text-gray-700 leading-relaxed text-sm md:text-base">
            <p>
              En-ergyc Consultant is a Canadian engineering consulting firm
              specializing in comprehensive electrical and mechanical
              engineering design services for the residential and commercial
              industries. Incorporated in December 2022, our head office is
              located in Cambridge, Ontario.
            </p>

            <p>
              Our team boasts over 30+ years of experience in delivering expert
              mechanical and electrical engineering services, including system
              designs for a wide range of applications. Our electrical expertise
              includes heat tracing, lighting systems, life safety systems, fire
              alarm design, power distribution, and emergency power systems.
            </p>

            <p>
              Our mechanical engineering capabilities include HVAC system
              design, plumbing systems, and sprinkler system design.
            </p>

            <p>
              At En-ergyc Consultant, we believe innovative engineering
              solutions drive better outcomes. We bring extensive experience in
              new builds and renovations including multi-residential buildings
              (4–40 storeys), restaurants, warehouses, and auto dealerships.
            </p>

            <p>
              By combining creativity, technical expertise, and a client-first
              approach, we deliver solutions that exceed expectations.
            </p>
          </div>

          {/* ================= SPECIALIZATION ================= */}
          <div>
            <h3 className="text-2xl md:text-3xl font-medium text-gray-900 mb-6">
              Our Specialization
            </h3>

            <p className="text-gray-600 mb-8 max-w-3xl">
              En-ergyc Consultant specializes in a wide range of electrical and
              mechanical engineering services across Ontario for both commercial
              and residential projects.
            </p>

            {/* SERVICES GRID */}
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-6 text-gray-700">
              {services.map((item, i) => {
                const Icon = item.icon;

                return (
                  <div
                    key={i}
                    className="flex items-center gap-4 group cursor-pointer"
                  >
                    {/* ICON */}
                    <div className="text-teal-600 group-hover:scale-110 transition">
                      <Icon size={20} strokeWidth={2} />
                    </div>

                    {/* TEXT */}
                    <p className="text-sm md:text-base group-hover:text-black transition">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ================= ELECTRIFICATION ================= */}
          <div className="max-w-4xl space-y-6">
            <h3 className="text-2xl md:text-3xl font-medium text-gray-900">
              Fleet / Transit Electrification
            </h3>

            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              En-ergyc Consultant offers expert consulting, design, and system
              implementation support to help organizations achieve their
              net-zero emission goals. Our solutions are fully scalable and
              adaptable to evolving technologies.
            </p>

            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              Whether you are working on a full-scale transit electrification
              project, managing private fleets, or planning for future hydrogen
              systems, we help you stay ahead of rapidly changing technologies.
              From EV charging infrastructure to energy storage solutions, we
              guide you through every step.
            </p>

            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              We also assist in navigating government programs and incentives,
              ensuring your transition is both efficient and cost-effective.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
