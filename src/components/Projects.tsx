import { projects, projectsIntro, site, stats, type Project } from "@/data/content";
import { illustrations } from "./illustrations";

function ProjectCard({ project }: { project: Project }) {
  const Art = illustrations[project.art];
  return (
    <a className={`pcard pcard--${project.accent}`} href={project.cta.href}>
      <div className="pcard__thumb" aria-hidden="true">
        <Art />
      </div>
      <div className="pcard__body">
        <span className="pcard__year">{project.year}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="pcard__tags">
          {project.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <span className="pcard__cta">
          {project.cta.label} <span aria-hidden="true">→</span>
        </span>
      </div>
    </a>
  );
}

/** Todo lo que va debajo del hero, en estilo oscuro. */
export function ProjectsSection() {
  return (
    <section className="dark" id={projectsIntro.id}>
      <div className="dark__inner">
        <header className="dark__head">
          <p className="dpill">
            <span className="dpill__dot" aria-hidden="true" />
            {projectsIntro.badge}
          </p>
          <h2 className="dark__title">
            Cosas que he <span className="dchip">construido</span> con <span className="dbrace">{"{"}</span>
            <span className="dgrad">código</span>
            <span className="dbrace">{"}"}</span>
          </h2>
          <p className="dark__sub">{projectsIntro.sub}</p>
          <ul className="dstats" aria-label="Datos rápidos">
            {stats.map((s) => (
              <li key={s.label}>
                <b>{s.value}</b> {s.label}
              </li>
            ))}
          </ul>
        </header>

        <div className="pgrid">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
      <footer className="dark__foot">
        © {site.year} {site.name} · Hecho en {site.city}
      </footer>
    </section>
  );
}
