import { Hero } from "@/components/sections/hero";
import { TechMarquee } from "@/components/sections/tech-marquee";
import { ServicesGrid } from "@/components/sections/services-grid";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Process } from "@/components/sections/process";
import { Trust } from "@/components/sections/trust";
import { CtaSection } from "@/components/sections/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <ServicesGrid />
      <FeaturedProjects />
      <Process />
      <Trust />
      <CtaSection />
    </>
  );
}
