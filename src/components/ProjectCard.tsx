import Image from "next/image";
import Link from "next/link";
import { statusLabel, type Project } from "@/data/content";
import { illustrations } from "./illustrations";

export function ProjectThumb({ project, priority = false }: { project: Project; priority?: boolean }) {
  const Art = illustrations[project.art];
  return (
    <div className="pcard__thumb" aria-hidden="true">
      {project.image ? (
        <Image src={project.image} alt="" fill sizes="(max-width: 800px) 100vw, 600px" priority={priority} />
      ) : (
        <Art />
      )}
    </div>
  );
}

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const titleId = `${project.id}-title`;
  const href = `/proyectos/${project.id}`;
  return (
    <article
      className={`pcard pcard--${project.accent}${featured ? " pcard--featured" : ""}`}
      aria-labelledby={titleId}
    >
      <ProjectThumb project={project} />
      <div className="pcard__body">
        <div className="pcard__meta">
          {featured && <span className="pcard__star">★ Destacado</span>}
          <span className={`status status--${project.status}`}>{statusLabel[project.status]}</span>
          <span className="pcard__year">{project.year}</span>
        </div>
        <h3 id={titleId}>
          {/* el link del título cubre toda la tarjeta (ver .pcard__stretch en CSS) */}
          <Link href={href} className="pcard__stretch">
            {project.title}
          </Link>
        </h3>
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
          <span className="pcard__case" aria-hidden="true">
            Ver caso <span>→</span>
          </span>
          {project.links.demo && (
            <a href={project.links.demo} aria-label={`Ver demo de ${project.title}`}>
              Demo <span aria-hidden="true">↗</span>
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
