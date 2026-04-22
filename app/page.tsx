import About from "@/components/About";
import CTASection from "@/components/CTASection";
import GoogleReviews from "@/components/GoogleReviews";
import Hero from "@/components/Hero";
import OurProjects from "@/components/OurProjects";
import OurServices from "@/components/OurServices";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <About />
      <WhyUs />
      <OurServices />
      <OurProjects />
      <GoogleReviews />
      <CTASection />
    </div>
  );
}
