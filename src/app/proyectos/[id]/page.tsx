import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GitHubIcon } from "@/components/icons";
import { PageChrome } from "@/components/PageChrome";
import { ProjectMeta, ProjectThumb } from "@/components/ProjectCard";
import { projects, site } from "@/data/content";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const p = projects.find((x) => x.id === id);
  return p ? { title: `${p.title} · ${site.name}`, description: p.description } : {};
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const i = projects.findIndex((x) => x.id === id);
  const p = projects[i];
  if (!p) notFound();
  const next = projects[(i + 1) % projects.length]!;

  return (
    <main className="work case subpage" id="contenido">
      <div className="work__inner case__inner">
        <Link href="/proyectos" className="case__back">
          <span aria-hidden="true">←</span> Todos los proyectos
        </Link>

        <header className="case__head">
          <ProjectMeta project={p} />
          <h1 className="work__title case__title">{p.title}</h1>
          <p className="work__sub case__lede">{p.description}</p>
        </header>

        <div className={`case__hero pcard--${p.accent}`}>
          <ProjectThumb project={p} priority />
        </div>

        <div className="case__grid">
          <aside className="case__facts" aria-label="Ficha del proyecto">
            <dl>
              {p.award && (
                <div>
                  <dt>Reconocimiento</dt>
                  <dd>★ {p.award}</dd>
                </div>
              )}
              {p.context && (
                <div>
                  <dt>Contexto</dt>
                  <dd>{p.context}</dd>
                </div>
              )}
              <div>
                <dt>Año</dt>
                <dd>{p.year}</dd>
              </div>
              <div>
                <dt>Tecnologías</dt>
                <dd>
                  <ul className="pcard__tags">
                    {p.tags.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
            <div className="case__links">
              {p.links.demo && (
                <a className="dbtn dbtn--primary" href={p.links.demo} target="_blank" rel="noopener">
                  Verlo en vivo <span aria-hidden="true">↗</span>
                </a>
              )}
              {p.links.code && (
                <a className={`dbtn${p.links.demo ? "" : " dbtn--primary"}`} href={p.links.code} target="_blank" rel="noopener">
                  <GitHubIcon /> Ver el código
                </a>
              )}
            </div>
          </aside>

          <article className="case__body">
            <h2>Qué hace</h2>
            <ul>
              {p.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </article>
        </div>

        <Link href={`/proyectos/${next.id}`} className="case__next">
          <span>Siguiente proyecto</span>
          <b>
            {next.title} <span aria-hidden="true">→</span>
          </b>
        </Link>
      </div>
      <PageChrome />
    </main>
  );
}
