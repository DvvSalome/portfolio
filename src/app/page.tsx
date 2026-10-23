import { Masthead } from "@/components/Masthead";
import { DotHeader, ProjectList } from "@/components/Projects";
import { projects, projectsIntro, site } from "@/data/content";

export default function Home() {
  return (
    <div className="pagewrap" id="inicio">
      <main className="page">
        <Masthead />
        <div className="section">
          <DotHeader {...projectsIntro} />
          <ProjectList projects={projects} />
        </div>
      </main>
      <small className="made-in">
        © {site.year}. Hecho en {site.city}.
      </small>
    </div>
  );
}
