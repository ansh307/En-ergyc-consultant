"use client";

import Banner from "@/components/Banner";
import CTASection from "@/components/CTASection";
import Image from "next/image";

const projects = [
  {
    name: "Residential High-Rise Project",
    image: "/cta-3.jpg",
  },
  {
    name: "Commercial Office Building",
    image: "/cta-3.jpg",
  },
  {
    name: "Warehouse Electrical Design",
    image: "/cta-3.jpg",
  },
  {
    name: "Restaurant HVAC & Plumbing",
    image: "/cta-3.jpg",
  },
  {
    name: "EV Charging Infrastructure",
    image: "/cta-3.jpg",
  },
  {
    name: "Fire Safety System Installation",
    image: "/cta-3.jpg",
  },
];

export default function ProjectsPage() {
  return (
    <>
      {/* ================= BANNER ================= */}
      <Banner
        label="Our Work"
        title="Projects We Have Built"
        subtitle="Delivering engineering excellence across residential and commercial developments."
        image="/cta-3.jpg"
      />

      {/* ================= PROJECTS ================= */}
      <section className="w-full bg-[#f5f5f5] py-20 md:py-28 px-6 md:px-32">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* HEADER */}
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-medium text-gray-900">
              Our Recent Projects
            </h2>
            <p className="mt-4 text-gray-600">
              A selection of projects showcasing our expertise in electrical and
              MEP engineering.
            </p>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div key={i} className="group cursor-pointer">
                {/* IMAGE */}
                <div className="relative h-[260px] w-full rounded-xl overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />
                </div>

                {/* TITLE */}
                <h3 className="mt-4 text-lg font-medium text-gray-900 group-hover:text-black">
                  {project.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
