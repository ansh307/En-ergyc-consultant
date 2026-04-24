"use client";

import Image from "next/image";

export default function WhyUs() {
  return (
    <section className="w-full bg-[#f5f5f5] py-10 md:py-28 px-6 md:px-32">
      <div className="max-w-7xl mx-auto">
        {/* TOP LABEL */}
        <div className="grid md:grid-cols-3 gap-4 items-start">
          <p className="text-sm text-gray-500 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-600 rounded-full" />
            Why Us
          </p>

          {/* HEADING */}
          <div className="max-w-lg md:mb-12 md:mx-auto col-span-2 xl:col-span-1">
            <h2 className="text-3xl md:text-5xl font-medium text-gray-900 leading-tight">
              Powering the Future of{" "}
              <span className="text-green-600">Industry</span>
            </h2>

            <p className="mt-4 text-gray-600 text-sm md:text-base">
              En-ergyc delivers cutting-edge technologies, tailored solutions,
              and expert services that drive industrial excellence, innovation,
              and reliability across sectors.
            </p>
          </div>
        </div>

        {/* CARDS */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-14">
          <WhyCard
            image="/about.png"
            title="Where Innovation Ignites Industry"
            description="Welcome to En-ergyc, a leading provider with expertise in electrical, control, automation, aviation, runway lighting systems, airport technologies, digital, and IoT supplies for various industries."
          />

          <WhyCard
            image="/about.png"
            title="Transformative Technology for Industry Leaders"
            description="At En-ergyc, we are committed to providing customized supplies that meet market’s unique needs."
          />

          <WhyCard
            image="/about.png"
            title="Setting New Standards"
            description="Our service team are expert and equipped with the latest tools and technologies to design, engineer, test, and energize electrical solutions that serve the industries."
          />
        </div>
      </div>
    </section>
  );
}

function WhyCard({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group">
      {/* IMAGE */}
      <div className="relative w-full h-[220px] md:h-[350px] rounded-xl overflow-hidden shadow-sm">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      {/* TEXT */}
      <h3 className="mt-8 text-lg md:text-xl font-medium text-gray-900  transition">
        {title}
      </h3>

      <p className="mt-4 text-sm text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
