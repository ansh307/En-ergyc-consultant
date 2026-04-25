"use client";

import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="w-full bg-[#f5f5f5] pt-20 pb-10 md:py-28 px-6 md:px-32 relative">
      <div className="absolute inset-0 ">
        {/* Pattern */}
        <Image
          src="/bg-pattern.png"
          alt="bg pattern"
          fill
          className="object-cover "
        />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Top Label */}
        <p className="text-sm text-gray-500 mb-14 lg:mb-48 flex items-center gap-2">
          <span className="w-2 h-2 bg-green-600 rounded-full" />
          About us
        </p>

        {/* Content */}
        <div className="grid md:grid-cols-5 gap-20 items-center">
          {/* LEFT TEXT */}
          <div className="col-span-5 lg:col-span-3">
            <h2 className="text-2xl md:text-3xl leading-tight text-gray-900 mr-10">
              Welcome to En ergyc Consultant, delivering scalable electrical,
              automation, and{" "}
              <span className="text-green-600 font-medium">
                electrification solutions
              </span>{" "}
              across industries—from EV fleet infrastructure and smart energy
              systems to aviation and IoT technologies.
            </h2>

            {/* CTA */}
            <Link
              href="/about-us"
              className="mt-8 inline-flex items-center gap-2  bg-green-600 text-white px-6 py-3 rounded-md text-sm hover:scale-105 transition shadow-sm"
            >
              About us →
            </Link>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full h-[260px] md:h-[320px] rounded-xl overflow-hidden col-span-5 lg:col-span-2 group">
            <Image
              src="/about.png"
              alt="About En ergyc Consultant"
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
