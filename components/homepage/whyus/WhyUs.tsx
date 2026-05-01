// WhyUs.tsx

import Image from "next/image";
import WhyUsAnimation from "./WhyUsAnimation";

export default function WhyUs() {
  return (
    <section className="why-section w-full bg-white py-10 md:py-28 px-6 md:px-32 relative">
      {/* CONTENT */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* TOP */}
        <div className="grid md:grid-cols-3 gap-4 items-start">
          <p className=" text-sm text-gray-500 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-600 rounded-full" />
            Why Us
          </p>

          <div className="max-w-lg md:mb-12 md:mx-auto col-span-2 xl:col-span-1">
            <h2 className="why-heading text-3xl md:text-5xl font-medium text-gray-900 leading-tight">
              Powering the Future of{" "}
              <span className="text-green-600">Industry</span>
            </h2>

            <p className="why-subtext mt-4 text-gray-600 text-sm md:text-base">
              DynaBolt Engineering delivers cutting-edge technologies, tailored
              solutions, and expert services that drive industrial excellence,
              innovation, and reliability across sectors.
            </p>
          </div>
        </div>

        {/* CARDS */}
        <div className="why-cards grid lg:grid-cols-2 xl:grid-cols-3 gap-10 mt-14 items-stretch">
          <WhyCard
            image="/why-1.jpg"
            title="Where Innovation Ignites Industry"
            description="Welcome to DynaBolt Engineering, a leading provider with expertise in electrical, control, automation, aviation, runway lighting systems, airport technologies, digital, and IoT supplies for various industries."
          />

          <WhyCard
            image="/why-2.jpg"
            title="Transformative Technology for Industry Leaders"
            description="At DynaBolt Engineering, we are committed to providing customized supplies that meet market’s unique needs."
            active
          />

          <WhyCard
            image="/why-3.jpg"
            title="Setting New Standards"
            description="Our service team are expert and equipped with the latest tools and technologies to design, engineer, test, and energize electrical solutions that serve the industries."
          />
        </div>
      </div>

      {/* Animation Layer */}
      <WhyUsAnimation />
    </section>
  );
}

function WhyCard({ image, title, description, active }: any) {
  return (
    <div className="relative h-full group">
      {/* GREEN OFFSET */}
      {active && (
        <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-xl bg-green-500 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-500" />
      )}

      <div
        className={`relative bg-[#fafafa] lg:bg-[#fafafa] border border-gray-200 lg:border-gray-200 rounded-xl p-4 transition h-full flex flex-col
        ${active ? "shadow-[0_10px_30px_rgba(0,0,0,0.08)]" : ""}`}
      >
        <div className="relative w-full h-[220px] md:h-[300px] rounded-xl overflow-hidden shadow-sm flex-shrink-0">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition duration-500" />
        </div>

        {/* CONTENT */}
        <div className="flex flex-col flex-grow">
          <h3 className="mt-8 text-lg md:text-xl font-medium text-gray-900">
            {title}
          </h3>

          <p className="mt-4 text-sm text-gray-600 leading-relaxed flex-grow">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
