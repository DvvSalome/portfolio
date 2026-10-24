import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectThumb } from "@/components/ProjectCard";
import { projects, site, statusLabel } from "@/data/content";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const p = projects.find((x) => x.id === id);
  return p ? { title: `${p.title} · ${site.name}`, description: p.description } : {};
}

export default async function CaseStudy({ params }: Props) {
  const { id } = await params;
  const i = projects.findIndex((x) => x.id === id);
  const p = projects[i];
  if (!p) notFound();
  const next = projects[(i + 1) % projects.length]!;

  return (
    <main className="work case" id="contenido">
      <div className="work__inner case__inner">
        <Link href="/#proyectos" className="case__back">
          <span aria-hidden="true">←</span> Todos los proyectos
        </Link>

        <header className="case__head">
          <div className="pcard__meta">
            <span className={`status status--${p.status}`}>{statusLabel[p.status]}</span>
            <span className="pcard__year">{p.year}</span>
          </div>
          <h1 className="work__title case__title">{p.title}</h1>
          <p className="work__sub case__lede">{p.description}</p>
        </header>

        <div className={`case__hero pcard--${p.accent}`}>
          <ProjectThumb project={p} priority />
        </div>

        <div className="case__grid">
          <aside className="case__facts" aria-label="Ficha del proyecto">
            <dl>
              <div>
                <dt>Mi rol</dt>
                <dd>{p.role}</dd>
              </div>
              <div>
                <dt>Resultado</dt>
                <dd>{p.result}</dd>
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
                <a className="dbtn dbtn--primary" href={p.links.demo}>
                  Ver demo <span aria-hidden="true">↗</span>
                </a>
              )}
              {p.links.code && (
                <a className="dbtn" href={p.links.code}>
                  Ver código <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          </aside>

          <article className="case__body">
            <h2>El problema</h2>
            <p>{p.caseStudy.problem}</p>
            <h2>Decisiones</h2>
            <ul>
              {p.caseStudy.decisions.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
            <h2>Qué aprendí</h2>
            <p>{p.caseStudy.learned}</p>
          </article>
        </div>

        <Link href={`/proyectos/${next.id}`} className="case__next">
          <span>Siguiente proyecto</span>
          <b>
            {next.title} <span aria-hidden="true">→</span>
          </b>
        </Link>
      </div>
      <footer className="work__foot">
        © {site.year} {site.name} · Hecho en {site.city}
      </footer>
    </main>
  );
}
