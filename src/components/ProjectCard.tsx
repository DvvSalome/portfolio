import Image from "next/image";
import Link from "next/link";
import { statusLabel, type Project } from "@/data/content";
import { GitHubIcon } from "./icons";
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
      {project.award && <span className="pcard__award">★ {project.award}</span>}
    </div>
  );
}

export function ProjectMeta({ project }: { project: Project }) {
  return (
    <div className="pcard__meta">
      {project.status && <span className={`status status--${project.status}`}>{statusLabel[project.status]}</span>}
      <span className="pcard__year">{project.year}</span>
      {project.context && <span className="pcard__context">· {project.context}</span>}
    </div>
  );
}

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const titleId = `${project.id}-title`;
  return (
    <article
      className={`pcard pcard--${project.accent}${featured ? " pcard--featured" : ""}`}
      aria-labelledby={titleId}
    >
      <ProjectThumb project={project} />
      <div className="pcard__body">
        <ProjectMeta project={project} />
        <h3 id={titleId}>
          {/* el link del título cubre toda la tarjeta (ver .pcard__stretch en CSS) */}
          <Link href={`/proyectos/${project.id}`} className="pcard__stretch">
            {project.title}
          </Link>
        </h3>
        <p>{project.description}</p>
        {featured && (
          <ul className="pcard__highlights">
            {project.highlights.slice(0, 3).map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        )}
        <ul className="pcard__tags" aria-label="Tecnologías">
          {project.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <div className="pcard__links">
          <span className="pcard__case" aria-hidden="true">
            Ver proyecto <span>→</span>
          </span>
          {project.links.demo && (
            <a href={project.links.demo} target="_blank" rel="noopener" aria-label={`Abrir ${project.title} en vivo`}>
              En vivo <span aria-hidden="true">↗</span>
            </a>
          )}
          {project.links.code && (
            <a href={project.links.code} target="_blank" rel="noopener" aria-label={`Código de ${project.title} en GitHub`}>
              <GitHubIcon /> Código
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
