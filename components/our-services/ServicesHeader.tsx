export default function ServicesHeader() {
  return (
    <div className="grid md:grid-cols-3 gap-4 items-start services-header">
      <p className="text-sm text-gray-500 mb-4 flex items-center gap-2">
        <span className="w-2 h-2 bg-green-600 rounded-full" />
        Our Services
      </p>

      <div className="max-w-lg md:mb-32 text-balance md:mx-auto col-span-2 xl:col-span-1">
        <h2 className="services-heading text-3xl md:text-5xl font-medium text-gray-900 leading-tight">
          Our Services
        </h2>

        <p className="services-subtext mt-4 text-gray-600 text-sm md:text-base">
          Innovative solutions in automation, control, aviation, and IoT to
          enhance efficiency and safety across industries.
        </p>
      </div>
    </div>
  );
}
