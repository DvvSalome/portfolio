import { links, projectsIntro, stats } from "@/data/content";
import { ProjectGrid } from "./ProjectGrid";

/** Página de proyectos. */
export function ProjectsSection() {
  return (
    <section className="work" id={projectsIntro.id} aria-labelledby="proyectos-title" tabIndex={-1}>
      <div className="work__inner">
        <header className="work__head reveal">
          <p className="dpill">
            <span className="dpill__dot" aria-hidden="true" />
            {projectsIntro.badge}
          </p>
          <h1 className="work__title" id="proyectos-title">
            Cosas que he <span className="dchip">construido</span> con <span className="dbrace">{"{"}</span>
            <span className="dgrad">código</span>
            <span className="dbrace">{"}"}</span>
          </h1>
          <p className="work__sub">{projectsIntro.sub}</p>
          <ul className="dstats" aria-label="Datos rápidos">
            {stats.map((s) => (
              <li key={s.label}>
                <b>{s.value}</b> {s.label}
              </li>
            ))}
          </ul>
        </header>

        <ProjectGrid />

        <a className="parchive" href={links.github} target="_blank" rel="noopener">
          Ver todo en GitHub <span aria-hidden="true">↗</span>
        </a>

      </div>
    </section>
  );
}
