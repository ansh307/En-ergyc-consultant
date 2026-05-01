// SERVER COMPONENT

import ServicesAnimation from "./ServicesAnimation";
import ServicesHeader from "./ServicesHeader";
import ServicesSlider from "./ServicesSlider";

export default function OurServices() {
  return (
    <section className="services-section w-full bg-white py-10 md:py-28 px-6 md:px-32">
      <div className="max-w-7xl mx-auto">
        <ServicesHeader />
        <ServicesSlider />
      </div>

      {/* Animation Layer */}
      <ServicesAnimation />
    </section>
  );
}
