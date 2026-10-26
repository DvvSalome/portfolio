import Image from "next/image";
import Link from "next/link";
import { projects, statusLabel } from "@/data/content";
import { illustrations } from "../illustrations";

/**
 * "Mundo" horizontal: en pantallas grandes la sección se queda fija y el scroll
 * vertical mueve las tarjetas de lado. En celular (o sin JS) es un carrusel normal.
 */
export function ProjectsWorld() {
  const list = projects.filter((p) => p.featured);
  return (
    <section className="world" data-hscroll aria-labelledby="world-title">
      <div className="world__sticky">
        <p className="world__bgtext" aria-hidden="true">
          proyectos · proyectos · proyectos ·
        </p>
        <div className="world__head">
          <div>
            <p className="hhead__path">~/proyectos --destacados</p>
            <h2 className="hhead__title" id="world-title">
              Lo que he construido
            </h2>
          </div>
          <p className="world__hint" aria-hidden="true">
            <span>Sigue bajando</span>
            <i />
          </p>
        </div>

        <ul className="world__track" data-hscroll-track>
          {list.map((p, i) => {
            const Art = illustrations[p.art];
            return (
              <li key={p.id} className="world__item">
                <Link href={`/proyectos/${p.id}`} className={`wcard tilt pcard--${p.accent}`}>
                  <span className="wcard__media" aria-hidden="true">
                    {p.image ? (
                      <Image src={p.image} alt="" fill sizes="(max-width: 900px) 85vw, 620px" />
                    ) : (
                      <span className="wcard__art">
                        <Art />
                      </span>
                    )}
                    <span className="wcard__shine" />
                    {p.award && <span className="pcard__award">★ {p.award}</span>}
                  </span>
                  <span className="wcard__num" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="wcard__body">
                    <span className="wcard__meta">
                      {p.status ? statusLabel[p.status] : p.context ?? ""} · {p.year}
                    </span>
                    <span className="wcard__title">{p.title}</span>
                    <span className="wcard__text">{p.description}</span>
                    <span className="wcard__tags">{p.tags.slice(0, 4).join(" · ")}</span>
                  </span>
                </Link>
              </li>
            );
          })}
          <li className="world__item world__item--end">
            <Link href="/proyectos" className="wend" data-magnetic>
              <span className="wend__count">{projects.length}</span>
              <span className="wend__label">
                proyectos en total
                <b>
                  Verlos todos <span aria-hidden="true">→</span>
                </b>
              </span>
            </Link>
          </li>
        </ul>

        <div className="world__progress" aria-hidden="true">
          <span />
        </div>
      </div>
    </section>
  );
}
