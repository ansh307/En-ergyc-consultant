"use client";

import Image from "next/image";

export default function About() {
  return (
    <section className="w-full bg-[#f5f5f5] py-20 md:py-28 px-6 md:px-32">
      <div className="max-w-7xl mx-auto">
        {/* Top Label */}
        <p className="text-sm text-gray-500 mb-48 flex items-center gap-2">
          <span className="w-2 h-2 bg-gray-400 rounded-full" />
          About us
        </p>

        {/* Content */}
        <div className="grid md:grid-cols-5 gap-20 items-center">
          {/* LEFT TEXT */}
          <div className="col-span-3">
            <h2 className="text-2xl md:text-3xl leading-tight text-gray-900 mr-10">
              Welcome to Evostel, a leading provider with expertise in
              electrical, control, automation, aviation, runway lighting
              systems, airport technologies, digital, and IoT supplies for
              various industries.
            </h2>

            <button className="mt-8 bg-[#6b5b95] text-white px-6 py-3 rounded-md text-sm hover:scale-105 transition flex items-center gap-2">
              About us →
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full h-[260px] md:h-[320px] rounded-xl overflow-hidden col-span-2">
            <Image
              src="/about.png" // 👈 replace with your image
              alt="About Evostel"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
