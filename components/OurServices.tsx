"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function OurServices() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!sliderRef.current) return;

    const scrollAmount = 400;

    sliderRef.current.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full bg-[#f5f5f5] py-20 md:py-28 px-6 md:px-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-4 items-start">
          <p className="text-sm text-gray-500 mb-20 flex items-center gap-2">
            <span className="w-2 h-2 bg-gray-400 rounded-full" />
            Our Services
          </p>

          {/* HEADING */}
          <div className="max-w-lg mb-32 text-balance mx-auto">
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
        <div className="relative">
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar"
          >
            {/* CARD 1 */}
            <ServiceCard
              variant="text"
              title="Electric Supplies"
              description="At Evostel, we provide a comprehensive range of high-quality electric supplies designed to meet the demanding needs of industrial, commercial, and infrastructure projects."
              color="bg-teal-500 text-white"
            />

            {/* CARD 2 IMAGE */}
            <div className="min-w-[800px] h-[500px] relative rounded-xl overflow-hidden">
              <Image
                src="/about.png"
                alt="Service"
                fill
                className="object-cover"
              />
            </div>

            {/* CARD 3 */}
            <ServiceCard
              variant="text"
              title="Control & Automation Supplies"
              description="Evostel empowers industries to achieve smarter operations through a full suite of control and automation products."
              color="bg-purple-200 text-black"
              buttonStyle="dark"
            />
            {/* CARD 4 IMAGE */}
            <div className="min-w-[800px] h-[500px] relative rounded-xl overflow-hidden">
              <Image
                src="/about.png"
                alt="Service"
                fill
                className="object-cover"
              />
            </div>

            {/* CARD 5 */}
            <ServiceCard
              variant="text"
              title="Control & Automation Supplies"
              description="Evostel empowers industries to achieve smarter operations through a full suite of control and automation products."
              color="bg-purple-200 text-black"
              buttonStyle="dark"
            />
            {/* CARD 6 IMAGE */}
            <div className="min-w-[800px] h-[500px] relative rounded-xl overflow-hidden">
              <Image
                src="/about.png"
                alt="Service"
                fill
                className="object-cover"
              />
            </div>

            {/* CARD 7 */}
            <ServiceCard
              variant="text"
              title="Control & Automation Supplies"
              description="Evostel empowers industries to achieve smarter operations through a full suite of control and automation products."
              color="bg-purple-200 text-black"
              buttonStyle="dark"
            />
          </div>

          {/* CONTROLS */}
          <div className="flex items-center justify-between mt-20">
            {/* PROGRESS BAR */}
            <div className="flex-1 h-[3px] bg-gray-200 rounded-full overflow-hidden mr-6">
              <div className="w-1/3 h-full bg-gray-700" />
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
}: {
  variant: "text";
  title: string;
  description: string;
  color: string;
  buttonStyle?: "light" | "dark";
}) {
  return (
    <div
      className={`min-w-[400px] h-[500px] rounded-xl p-8 flex flex-col justify-between ${color}`}
    >
      <div>
        <h3 className="text-2xl font-medium">{title}</h3>
        <p className="mt-4 text-sm opacity-80">{description}</p>
      </div>

      <button
        className={`w-fit px-4 py-2 rounded-md text-sm ${
          buttonStyle === "dark" ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        Read more
      </button>
    </div>
  );
}
