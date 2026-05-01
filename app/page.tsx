import About from "@/components/homepage/about/About";
import CTASection from "@/components/CTASection";
import GoogleReviews from "@/components/homepage/GoogleReview/GoogleReviews";
import Hero from "@/components/homepage/hero/Hero";
import OurProjects from "@/components/homepage/our-projects/OurProjects";
import OurServices from "@/components/homepage/our-services/OurServices";
import WhyUs from "@/components/homepage/whyus/WhyUs";

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
