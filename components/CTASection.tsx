"use client";

import Link from "next/link";

export default function CTASection() {
  return (
    <section
      className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center text-center px-6 md:px-32"
      style={{
        backgroundImage: "url('/cta-3.jpg')",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-2xl text-white">
        <h2 className="text-3xl md:text-5xl font-medium leading-tight">
          Get Your Free Consultation
          {/* <span className="bg-stone-200 text-black px-2">Consultation</span> */}
        </h2>

        <p className="mt-4 text-sm md:text-base text-white/80">
          Get ready to power up your dream project! Schedule an appointment to
          electrify your vision and bring it to life.
        </p>

        <Link
          href="/book-a-meeting"
          className="mt-8 bg-stone-100 text-black px-6 py-3 rounded-md text-sm font-medium hover:scale-105 transition inline-block"
        >
          Book An Appointment →
        </Link>
      </div>
    </section>
  );
}
