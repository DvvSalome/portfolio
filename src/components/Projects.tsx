import { links, projectsIntro, site, stats } from "@/data/content";
import { InstagramIcon, LinkedInIcon } from "./icons";
import { ProjectGrid } from "./ProjectGrid";
import { RevealOnScroll } from "./RevealOnScroll";

/** Sección de proyectos debajo del hero. */
export function ProjectsSection() {
  return (
    <section className="work" id={projectsIntro.id} aria-labelledby="proyectos-title" tabIndex={-1}>
      <div className="work__inner">
        <header className="work__head reveal">
          <p className="dpill">
            <span className="dpill__dot" aria-hidden="true" />
            {projectsIntro.badge}
          </p>
          <h2 className="work__title" id="proyectos-title">
            Cosas que he <span className="dchip">construido</span> con <span className="dbrace">{"{"}</span>
            <span className="dgrad">código</span>
            <span className="dbrace">{"}"}</span>
          </h2>
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
      <footer className="work__foot">
        © {site.year} {site.name} · Hecho en {site.city}
      </footer>
      <RevealOnScroll />
    </section>
  );
}
