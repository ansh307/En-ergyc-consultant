import ProjectsHeader from "./ProjectsHeader";
import ProjectsSlider from "./ProjectsSlider";
import ProjectsAnimation from "./ProjectsAnimation";

export default function OurProjects() {
  return (
    <section className="projects-section w-full bg-white py-10 md:py-28 px-6 md:px-32">
      <div className="max-w-7xl mx-auto">
        <ProjectsHeader />
        <ProjectsSlider />
      </div>

      {/* Animation layer */}
      <ProjectsAnimation />
    </section>
  );
}
