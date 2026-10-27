import Link from "next/link";
import { awards, events, intro, openSource, profileCard, projects, services } from "@/data/content";
import { GitHubIcon } from "../icons";

const icons = {
  code: (
    <>
      <path d="m8 7-5 5 5 5M16 7l5 5-5 5" />
      <path d="m14 4-4 16" />
    </>
  ),
  spark: <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6" />,
  quantum: (
    <>
      <circle cx="12" cy="12" r="2" />
      <ellipse cx="12" cy="12" rx="10" ry="4" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
    </>
  ),
};

/** Intro corta + ficha tipo JSON (como la tarjeta de perfil de otros portafolios). */
export function ProfileBlock() {
  return (
    <section className="hsec" aria-labelledby="intro-title">
      <div className="hsec__inner intro">
        <div className="intro__text reveal">
          <p className="hhead__path">{intro.label}</p>
          <h2 className="hhead__title" id="intro-title">
            {intro.title}
          </h2>
          <p>{intro.text}</p>
          <div className="intro__btns">
            <Link className="dbtn dbtn--primary" href="/proyectos">
              Ver proyectos <span aria-hidden="true">→</span>
            </Link>
            <a className="dbtn" href="https://github.com/DvvSalome" target="_blank" rel="noopener">
              <GitHubIcon /> GitHub
            </a>
          </div>
        </div>
        <div className="reveal fx-layer" data-parallax="0.06">
          <div className="term pjson">
            <div className="win__bar" aria-hidden="true">
              <span className="win__dots">
                <i />
                <i />
                <i />
              </span>
              <span className="win__title">salome.json</span>
            </div>
            <dl className="pjson__body">
              <span className="pjson__brace" aria-hidden="true">
                {"{"}
              </span>
              {profileCard.map(([k, v], i) => (
                <div key={k} className="pjson__row">
                  <dt>
                    <span aria-hidden="true">&quot;</span>
                    {k}
                    <span aria-hidden="true">&quot;:</span>
                  </dt>
                  <dd>
                    <span aria-hidden="true">&quot;</span>
                    {v}
                    <span aria-hidden="true">&quot;{i < profileCard.length - 1 ? "," : ""}</span>
                  </dd>
                </div>
              ))}
              <span className="pjson__brace" aria-hidden="true">
                {"}"}
              </span>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

/** "Qué hago": tres columnas de servicios con herramientas. */
export function Services() {
  return (
    <section className="hsec" aria-labelledby="services-title">
      <div className="hsec__inner">
        <div className="hhead reveal">
          <div>
            <p className="hhead__path">qué hago</p>
            <h2 className="hhead__title" id="services-title">
              En qué te puedo ayudar
            </h2>
          </div>
        </div>
        <ul className="services">
          {services.map((s) => (
            <li key={s.title} className="service tilt reveal">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                {icons[s.icon]}
              </svg>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <ul className="pcard__tags" aria-label="Herramientas">
                {s.tools.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** "Hecho en público": repos con link directo a GitHub. */
export function OpenSource() {
  const repos = openSource.map((id) => projects.find((p) => p.id === id)).filter((p) => p !== undefined);
  return (
    <section className="hsec" aria-labelledby="oss-title">
      <div className="hsec__inner">
        <div className="hhead reveal">
          <div>
            <p className="hhead__path">código abierto</p>
            <h2 className="hhead__title" id="oss-title">
              Hecho en público
            </h2>
          </div>
          <a className="hhead__link" href="https://github.com/DvvSalome?tab=repositories" target="_blank" rel="noopener">
            Todos los repos <span aria-hidden="true">↗</span>
          </a>
        </div>
        <ul className="repos">
          {repos.map((p) => (
            <li key={p.id} className="reveal">
              <a className="repo tilt" href={p.links.code} target="_blank" rel="noopener">
                <span className="repo__top">
                  <GitHubIcon />
                  <span className="repo__name">DvvSalome/{p.links.code?.split("/").pop()}</span>
                </span>
                <span className="repo__desc">{p.description}</span>
                <span className="repo__langs">
                  {p.tags.slice(0, 3).map((t, i) => (
                    <span key={t}>
                      <i className={`repo__dot repo__dot--${i}`} aria-hidden="true" />
                      {t}
                    </span>
                  ))}
                </span>
                <span className="repo__go">
                  Ver repo <span aria-hidden="true">↗</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Premios + lugares donde he estado. */
export function Recognition() {
  return (
    <section className="hsec hsec--events" aria-labelledby="rec-title">
      <div className="hsec__inner">
        <h2 className="hhead__path hevents__label" id="rec-title">
          premios y eventos
        </h2>
        <ul className="awards">
          {awards.map((a) => (
            <li key={a.title} className="reveal">
              <a className="award" href={a.href} target="_blank" rel="noopener">
                <span className="award__place">{a.place}</span>
                <span>
                  <b>{a.title}</b>
                  <span>{a.text}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
        <ul className="hevents">
          {events.map((e) => (
            <li key={e} className="reveal">
              {e}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
