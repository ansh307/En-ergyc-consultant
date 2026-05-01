"use client";

export default function BookingSection() {
  return (
    <section className="w-full bg-white py-20 md:py-28 px-6 md:px-32">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-medium text-gray-900">
            Schedule Your Free Consultation
          </h2>
        </div>

        {/* CALENDLY EMBED */}
        <div className="w-full h-[700px] rounded-xl overflow-hidden bg-white">
          <iframe
            src="https://calendly.com/anshsoni55333/free-consultation"
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
