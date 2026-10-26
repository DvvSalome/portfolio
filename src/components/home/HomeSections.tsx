import Image from "next/image";
import Link from "next/link";
import hackaton from "@/assets/sobre-mi/hackaton-barranquilla.webp";
import { events, homeStats, projects, statusLabel, techMarquee } from "@/data/content";
import { illustrations } from "../illustrations";
import { Terminal } from "./Terminal";

/** Encabezado de sección del inicio, con etiqueta tipo ruta de archivo. */
function Head({ path, title, href, cta }: { path: string; title: React.ReactNode; href?: string; cta?: string }) {
  return (
    <div className="hhead reveal">
      <div>
        <p className="hhead__path">{path}</p>
        <h2 className="hhead__title">{title}</h2>
      </div>
      {href && (
        <Link className="hhead__link" href={href}>
          {cta} <span aria-hidden="true">→</span>
        </Link>
      )}
    </div>
  );
}

export function TechMarquee() {
  const row = [...techMarquee, ...techMarquee];
  return (
    <div className="tmarquee" aria-label="Tecnologías con las que trabajo">
      <ul className="tmarquee__track">
        {row.map((t, i) => (
          <li key={i} aria-hidden={i >= techMarquee.length}>
            <span aria-hidden="true">✦</span> {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function IntroBlock() {
  return (
    <section className="hsec" aria-labelledby="intro-title">
      <div className="hsec__inner intro">
        <div className="intro__text reveal">
          <p className="hhead__path">~/salome/readme.md</p>
          <h2 className="hhead__title" id="intro-title">
            Curiosa, analítica y <span className="dgrad">enamorada</span> de la tecnología.
          </h2>
          <p>
            Trabajo desde los 15. Si algo me da curiosidad, abro el computador hasta entender cómo funciona por dentro. Así
            llegué a la ciberseguridad, a la computación cuántica y a la IA.
          </p>
          <ul className="hstats">
            {homeStats.map((s) => (
              <li key={s.label}>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="reveal">
          <Terminal />
        </div>
      </div>
    </section>
  );
}

export function FeaturedProjects() {
  const list = projects.filter((p) => p.featured).slice(0, 6);
  return (
    <section className="hsec" aria-labelledby="hp-title">
      <div className="hsec__inner">
        <Head path="~/proyectos --destacados" title={<span id="hp-title">Lo que he construido</span>} href="/proyectos" cta={`Ver los ${projects.length} proyectos`} />
        <ul className="wgrid">
          {list.map((p, i) => {
            const Art = illustrations[p.art];
            return (
              <li key={p.id} className="reveal">
                <Link href={`/proyectos/${p.id}`} className={`win pcard--${p.accent}`}>
                  <span className="win__bar" aria-hidden="true">
                    <span className="win__dots">
                      <i />
                      <i />
                      <i />
                    </span>
                    <span className="win__title">{`0${i + 1}_${p.id}`}</span>
                  </span>
                  <span className={`win__art${p.image ? " win__art--img" : ""}`} aria-hidden="true">
                    {p.image ? <Image src={p.image} alt="" fill sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 380px" /> : <Art />}
                  </span>
                  <span className="win__body">
                    {p.award ? (
                      <span className="win__award">★ {p.award}</span>
                    ) : (
                      p.status && <span className={`status status--${p.status}`}>{statusLabel[p.status]}</span>
                    )}
                    <span className="win__name">{p.title}</span>
                    <span className="win__text">{p.description}</span>
                    <span className="win__tags">{p.tags.join(" · ")}</span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export function AboutTeaser() {
  return (
    <section className="hsec hsec--tint" aria-labelledby="ha-title">
      <div className="hsec__inner ateaser">
        <figure className="polaroid ateaser__photo reveal">
          <Image src={hackaton} alt="Salome programando en la hackaton Build with AI de Barranquilla." placeholder="blur" sizes="(max-width: 900px) 80vw, 380px" />
          <figcaption>Build with AI · Barranquilla</figcaption>
        </figure>
        <div className="reveal">
          <Head path="~/sobre-mi.md" title={<span id="ha-title">48 horas sin dormir y mi primer vuelo en avión.</span>} />
          <p className="ateaser__text">
            Así fue mi primera hackaton fuera de Medellín. Me encanta competir, subirme a una tarima y aprender rodeada de
            gente que sabe más que yo. Fuera del teclado: salir con mis amigos, el cine y hacer reír a la gente.
          </p>
          <Link className="dbtn dbtn--primary" href="/sobre-mi">
            Conóceme <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}


export function EventsStrip() {
  return (
    <section className="hsec hsec--events" aria-labelledby="he-title">
      <div className="hsec__inner">
        <p className="hhead__path hevents__label" id="he-title">
          He estado en
        </p>
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
