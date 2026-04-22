"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero.jpg" // replace with your image
        alt="Hero Background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}

      <div className="relative z-10 flex w-full h-full pb-20 px-6 md:px-32">
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end">
          {/* LEFT TEXT */}
          <div className="max-w-xl">
            <h1 className="text-white text-4xl md:text-6xl font-light leading-tight">
              Experience <br />
              Delivers Solutions
            </h1>
          </div>

          {/* RIGHT STATS */}
          <div className="flex gap-14 mt-10 md:mt-0 text-white">
            <Stat number="47+" label="Years of experience" />
            <Stat number="120+" label="Experts" />
            <Stat number="138" label="Completed project" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center md:text-left">
      <h2 className="text-2xl md:text-5xl">{number}</h2>
      <p className="text-lg text-white/70">{label}</p>
    </div>
  );
}
