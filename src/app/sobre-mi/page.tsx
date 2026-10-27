import type { Metadata } from "next";
import { About } from "@/components/About";
import { ContactCTA } from "@/components/ContactCTA";
import { PageChrome } from "@/components/PageChrome";
import { site } from "@/data/content";

export const metadata: Metadata = {
  title: `Sobre mí · ${site.name}`,
  description: "Quién es Salome: developer desde los 15, curiosa, metida en cuántica, ciberseguridad e IA.",
};

export default function SobreMi() {
  return (
    <main id="contenido" className="subpage">
      <About />
      <div className="subpage__cta">
        <ContactCTA />
      </div>
      <PageChrome />
    </main>
  );
}
