import type { Project } from "@/data/content";
import { Btn } from "./Btn";
import { Reveal } from "./Reveal";
import { illustrations } from "./illustrations";

export function DotHeader({ id, title, text }: { id: string; title: string; text: string }) {
  return (
    <div className="dot-header" id={id}>
      <Reveal className="dot-header__content">
        <h2>
          {title}
          <span className="dot">.</span>
        </h2>
        <p>{text}</p>
      </Reveal>
      <div className="dots" aria-hidden="true" />
    </div>
  );
}

function ProjectRow({ project }: { project: Project }) {
  const Art = illustrations[project.art];
  return (
    <article className="project">
      <div className="project__header">
        <div className="illustration">
          <Art />
        </div>
      </div>
      <div className="project__details">
        <Reveal className="flow">
          <span className="meta">{project.meta}</span>
          <h3>
            {project.title.lead}
            <b>{project.title.bold}</b>
            <span className="dot">.</span>
          </h3>
          {project.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <Btn href={project.cta.href} label={project.cta.label} />
        </Reveal>
      </div>
    </article>
  );
}

export function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <div className="project-promo">
      {projects.map((p) => (
        <ProjectRow key={p.id} project={p} />
      ))}
    </div>
  );
}
