import { Hero } from "@/components/sections/hero";
import { Clients } from "@/components/sections/clients";
import { ServicesGrid } from "@/components/sections/services-grid";
import { WebDesign } from "@/components/sections/web-design";
import { ShowcaseProjects } from "@/components/sections/showcase-projects";
import { TemplatesGallery } from "@/components/sections/templates-gallery";
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
      <ShowcaseProjects />
      <TemplatesGallery />
      <Pricing />
      <TechMarquee />
      <Process />
      <Testimonials />
      <Trust />
      <CtaSection />
    </>
  );
}
