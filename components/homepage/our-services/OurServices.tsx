// SERVER COMPONENT

import Image from "next/image";
import ServicesAnimation from "./ServicesAnimation";
import ServicesHeader from "./ServicesHeader";
import ServicesSlider from "./ServicesSlider";

export default function OurServices() {
  return (
    <section className="services-section w-full bg-white py-10 md:py-28 px-6 md:px-32 relative">
      <div className="absolute top-20 right-0 w-150 h-96  pointer-events-none">
        <Image
          src="/bg-props/gear-withoutbg.png"
          alt="bg prop gear"
          fill
          className="object-contain opacity-10 xl:opacity-20"
        />
      </div>
      <div className="max-w-7xl mx-auto">
        <ServicesHeader />
        <ServicesSlider />
      </div>

      {/* Animation Layer */}
      <ServicesAnimation />
    </section>
  );
}
