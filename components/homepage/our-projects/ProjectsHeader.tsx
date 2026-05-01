export default function ProjectsHeader() {
  return (
    <div className="grid md:grid-cols-3 gap-4 items-start projects-header">
      <p className="text-sm text-gray-500 mb-4 flex items-center gap-2">
        <span className="w-2 h-2 bg-green-600 rounded-full" />
        Our Projects
      </p>

      <div className="max-w-lg md:mb-32 text-balance md:mx-auto col-span-2 xl:col-span-1">
        <h2 className="projects-heading text-3xl md:text-5xl font-medium text-gray-900 leading-tight">
          Recent Projects
        </h2>

        <p className="projects-subtext mt-4 text-gray-600 text-sm md:text-base">
          Explore our latest projects delivering innovation, efficiency, and
          reliability across industries.
        </p>
      </div>
    </div>
  );
}
