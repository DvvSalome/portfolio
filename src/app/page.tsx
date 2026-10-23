import { Masthead } from "@/components/Masthead";
import { PastHero } from "@/components/PastHero";
import { ProjectsSection } from "@/components/Projects";
import { site } from "@/data/content";

export default function Home() {
  return (
    <>
      <div className="pagewrap" id="inicio">
        <main className="page">
          <Masthead />
        </main>
        <small className="made-in">
          © {site.year}. Hecho en {site.city}.
        </small>
      </div>
      <ProjectsSection />
      <PastHero />
    </>
  );
}
