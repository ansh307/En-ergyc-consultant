"use client";

import Image from "next/image";

type BannerProps = {
  title: string;
  subtitle?: string;
  label?: string;
  image: string;
  height?: string; // optional custom height
};

export default function Banner({
  title,
  subtitle,
  label,
  image,
  height = "h-[50vh] min-h-[300px]",
}: BannerProps) {
  return (
    <section
      className={`relative w-full ${height} flex items-center overflow-hidden`}
    >
      {/* BACKGROUND IMAGE */}
      <Image src={image} alt={title} fill priority className="object-cover" />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENT */}
      <div className="relative z-10 w-full px-6 md:px-32">
        <div className="max-w-7xl mx-auto text-white">
          {/* OPTIONAL LABEL */}
          {label && (
            <p className="text-sm text-white/70 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-600 rounded-full" />
              {label}
            </p>
          )}

          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-light leading-tight">
            {title}
          </h1>

          {/* OPTIONAL SUBTITLE */}
          {subtitle && (
            <p className="mt-4 max-w-xl text-sm md:text-base text-white/80">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
