import type { Metadata } from "next";
import { ContactCTA } from "@/components/ContactCTA";
import { PageChrome } from "@/components/PageChrome";
import { career, site } from "@/data/content";

export const metadata: Metadata = {
  title: `Trayectoria · ${site.name}`,
  description: "Trabajo, charlas, lo que estoy aprendiendo y logros de Salome Arboleda.",
};

export default function Trayectoria() {
  return (
    <main id="contenido" className="subpage">
      <section className="career" aria-labelledby="trayectoria-title">
        <div className="career__inner">
          <header className="subhead reveal">
            <p className="about__eyebrow">
              <span className="pulse" aria-hidden="true" />
              Trayectoria
            </p>
            <h1 className="about__title" id="trayectoria-title">
              Trabajando desde los <span className="dchip">15</span>.
            </h1>
            <p className="subhead__lede">{career.intro}</p>
          </header>

          <section className="cblock reveal" aria-labelledby="exp-title">
            <h2 className="cblock__title" id="exp-title">
              Experiencia
            </h2>
            <ul className="jobs">
              {career.jobs.map((j) => (
                <li key={j.role + j.org} className="job">
                  <span className="job__period">{j.period}</span>
                  <div>
                    <h3>
                      {j.role} <span className="job__org">· {j.org}</span>
                    </h3>
                    <p>{j.text}</p>
                    <ul className="pcard__tags" aria-label="Tecnologías">
                      {j.skills.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section className="cblock reveal" aria-labelledby="talks-title">
            <h2 className="cblock__title" id="talks-title">
              Charlas
            </h2>
            <div className="talks">
              {career.talks.map((t) => (
                <article key={t.title} className="talk">
                  <div className="talk__ticket" aria-hidden="true">
                    <span>{t.date}</span>
                    <span className="talk__mic">
                      <svg viewBox="0 0 24 24">
                        <rect x="9" y="3" width="6" height="11" rx="3" />
                        <path d="M5 11a7 7 0 0 0 14 0M12 18v3M8 21h8" />
                      </svg>
                    </span>
                  </div>
                  <div className="talk__body">
                    <p className="talk__event">{t.event}</p>
                    <h3>{t.title}</h3>
                    <p>{t.text}</p>
                    {t.href && (
                      <a href={t.href} target="_blank" rel="noopener">
                        Ver la charla <span aria-hidden="true">↗</span>
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <div className="cgrid">
            <section className="cblock reveal" aria-labelledby="learn-title">
              <h2 className="cblock__title" id="learn-title">
                Aprendiendo ahora
              </h2>
              <ul className="learn">
                {career.learning.map((l) => (
                  <li key={l.title}>
                    <h3>{l.title}</h3>
                    <p>{l.text}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section className="cblock reveal" aria-labelledby="awards-title">
              <h2 className="cblock__title" id="awards-title">
                Logros
              </h2>
              <ul className="learn learn--awards">
                {career.awards.map((a) => (
                  <li key={a.title}>
                    <h3>
                      <span aria-hidden="true">★ </span>
                      {a.title}
                    </h3>
                    <p>{a.text}</p>
                    {a.href && (
                      <a href={a.href} target="_blank" rel="noopener">
                        Ver el post <span aria-hidden="true">↗</span>
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </section>
      <div className="subpage__cta">
        <ContactCTA />
      </div>
      <PageChrome />
    </main>
  );
}
