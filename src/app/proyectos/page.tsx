import type { Metadata } from "next";
import { ContactCTA } from "@/components/ContactCTA";
import { PageChrome } from "@/components/PageChrome";
import { ProjectsSection } from "@/components/Projects";
import { site } from "@/data/content";

export const metadata: Metadata = {
  title: `Proyectos · ${site.name}`,
  description: "Proyectos de Salome Arboleda: web, IA, ciberseguridad y computación cuántica.",
};

export default function Proyectos() {
  return (
    <main id="contenido" className="subpage">
      <ProjectsSection />
      <div className="subpage__cta">
        <ContactCTA />
      </div>
      <PageChrome />
    </main>
  );
}
