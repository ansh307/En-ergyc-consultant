"use client";

import Image from "next/image";

export default function WhyUs() {
  return (
    <section className="w-full bg-[#f5f5f5] py-20 md:py-28 px-6 md:px-32">
      <div className="max-w-7xl mx-auto">
        {/* TOP LABEL */}
        <div className="grid md:grid-cols-3 gap-4 items-start">
          <p className="text-sm text-gray-500 mb-20 flex items-center gap-2">
            <span className="w-2 h-2 bg-gray-400 rounded-full" />
            Why Us
          </p>

          {/* HEADING */}
          <div className="max-w-lg mb-12 text-balance mx-auto">
            <h2 className="text-3xl md:text-5xl font-medium text-gray-900 leading-tight">
              Powering Progress Across Industries
            </h2>

            <p className="mt-4 text-gray-600 text-sm md:text-base">
              Evostel delivers cutting-edge technologies, tailored solutions,
              and expert services that drive industrial excellence, innovation,
              and reliability across sectors.
            </p>
          </div>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8 mt-14">
          <WhyCard
            image="/about.png"
            title="Where Innovation Ignites Industry"
            description="Welcome to Evostel, a leading provider with expertise in electrical, control, automation, aviation, runway lighting systems, airport technologies, digital, and IoT supplies for various industries."
          />

          <WhyCard
            image="/about.png"
            title="Transformative Technology for Industry Leaders"
            description="At Evostel, we are committed to providing customized supplies that meet market’s unique needs."
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
      <div className="relative w-full h-[220px] md:h-[350px] rounded-xl overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      {/* TEXT */}
      <h3 className="mt-8 text-lg md:text-xl font-medium text-gray-900">
        {title}
      </h3>

      <p className="mt-4 text-sm text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
