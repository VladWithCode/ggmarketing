import { Hero } from "@/components/sections/hero";
import { Clients } from "@/components/sections/clients";
import { ServicesGrid } from "@/components/sections/services-grid";
import { WebDesign } from "@/components/sections/web-design";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Pricing } from "@/components/sections/pricing";
import { Process } from "@/components/sections/process";
import { TechMarquee } from "@/components/sections/tech-marquee";
import { Testimonials } from "@/components/sections/testimonials";
import { Trust } from "@/components/sections/trust";
import { CtaSection } from "@/components/sections/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Clients />
      <ServicesGrid />
      <WebDesign />
      <FeaturedProjects />
      <Pricing />
      <TechMarquee />
      <Process />
      <Testimonials />
      <Trust />
      <CtaSection />
    </>
  );
}
