import { ContactCTA } from "@/components/ContactCTA";
import {
  AboutTeaser,
  EventsStrip,
  IntroBlock,
  TechMarquee,
} from "@/components/home/HomeSections";
import { ProjectsWorld } from "@/components/home/ProjectsWorld";
import { Masthead } from "@/components/Masthead";
import { PageChrome } from "@/components/PageChrome";
import { site } from "@/data/content";

export default function Home() {
  return (
    <main id="contenido">
      <div className="pagewrap" id="inicio">
        <div className="page">
          <Masthead />
        </div>
        <small className="made-in" aria-hidden="true">
          © {site.year}. Hecho en {site.city}.
        </small>
      </div>
      <div className="home" id="explora">
        <TechMarquee />
        <IntroBlock />
        <ProjectsWorld />
        <AboutTeaser />
        <EventsStrip />
        <div className="subpage__cta">
          <ContactCTA />
        </div>
      </div>
      <PageChrome />
    </main>
  );
}
