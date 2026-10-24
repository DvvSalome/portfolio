import { links, projects, projectsIntro, site, stats, type Project } from "@/data/content";
import { InstagramIcon, LinkedInIcon } from "./icons";
import { illustrations } from "./illustrations";
import { RevealOnScroll } from "./RevealOnScroll";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Art = illustrations[project.art];
  const titleId = `${project.id}-title`;
  return (
    <article
      className={`pcard pcard--${project.accent} reveal`}
      style={{ transitionDelay: `${(index % 2) * 90}ms` }}
      aria-labelledby={titleId}
    >
      <div className="pcard__thumb" aria-hidden="true">
        <Art />
      </div>
      <div className="pcard__body">
        <span className="pcard__year">{project.year}</span>
        <h3 id={titleId}>{project.title}</h3>
        <p>{project.description}</p>
        <dl className="pcard__facts">
          <div>
            <dt>Mi rol</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>Resultado</dt>
            <dd>{project.result}</dd>
          </div>
        </dl>
        <ul className="pcard__tags" aria-label="Tecnologías">
          {project.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <div className="pcard__links">
          {project.links.demo && (
            <a href={project.links.demo} aria-label={`Ver demo de ${project.title}`}>
              Ver demo <span aria-hidden="true">↗</span>
            </a>
          )}
          {project.links.code && (
            <a href={project.links.code} aria-label={`Ver código de ${project.title}`}>
              Código <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

/** Todo lo que va debajo del hero, en estilo oscuro. */
export function ProjectsSection() {
  return (
    <section className="dark" id={projectsIntro.id} aria-labelledby="proyectos-title" tabIndex={-1}>
      <div className="dark__inner">
        <header className="dark__head reveal">
          <p className="dpill">
            <span className="dpill__dot" aria-hidden="true" />
            {projectsIntro.badge}
          </p>
          <h2 className="dark__title" id="proyectos-title">
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
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        <div className="dcta reveal">
          <h2 className="dcta__title">
            ¿Tienes una <span className="dgrad">idea</span>?
          </h2>
          <p>Escríbeme. Respondo más rápido por Instagram.</p>
          <div className="dcta__btns">
            <a className="dbtn dbtn--primary" href={links.instagram} target="_blank" rel="noopener">
              <InstagramIcon /> @dvvsalom3
            </a>
            <a className="dbtn" href={links.linkedin} target="_blank" rel="noopener">
              <LinkedInIcon /> LinkedIn
            </a>
          </div>
        </div>
      </div>
      <footer className="dark__foot">
        © {site.year} {site.name} · Hecho en {site.city}
      </footer>
      <RevealOnScroll />
    </section>
  );
}
