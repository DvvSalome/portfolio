import { Avatar } from "@/components/Avatar";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { about, experience, links, projects, site, skills } from "@/data/content";

export default function Home() {
  const marquee = [...skills, ...skills];
  return (
    <>
      <Header />
      <main className="site">
        <Hero />

        <div className="marquee" aria-label="Tecnologías">
          <ul className="marquee__track">
            {marquee.map((s, i) => (
              <li key={i} aria-hidden={i >= skills.length}>{s}</li>
            ))}
          </ul>
        </div>

        <section className="block" id="proyectos">
          <h2 className="block__title">Proyectos <span>destacados</span></h2>
          <p className="block__lead">Una selección de cosas que he construido. (Ejemplos.)</p>
          <div className="cards">
            {projects.map((p) => (
              <a key={p.id} className={`card card--${p.accent}`} href={p.href}>
                <div className="card__thumb" aria-hidden="true" />
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <ul className="tags">
                  {p.tags.map((t) => <li key={t}>{t}</li>)}
                </ul>
              </a>
            ))}
          </div>
        </section>

        <section className="block" id="experiencia">
          <h2 className="block__title">Experiencia</h2>
          <ol className="timeline">
            {experience.map((j) => (
              <li key={j.role + j.period}>
                <span className="timeline__period">{j.period}</span>
                <div>
                  <h3>{j.role} <em>· {j.org}</em></h3>
                  <p>{j.text}</p>
                  <ul className="tags">{j.tags.map((t) => <li key={t}>{t}</li>)}</ul>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="block about" id="sobre-mi">
          <div className="about__text">
            <h2 className="block__title">{about.title}</h2>
            {about.paragraphs.map((p) => <p key={p}>{p}</p>)}
          </div>
          <div className="avatar-card">
            <Avatar />
            <small>Pásale el mouse. Haz clic. Sacúdelo.</small>
          </div>
        </section>

        <section className="block contact" id="contacto">
          <h2 className="contact__title">¿Hacemos algo <span className="grad">juntos</span>?</h2>
          <p className="block__lead">Cuéntame tu idea, tu hackaton o tu charla.</p>
          <div className="hero__btns">
            <a className="button button--primary" href={links.email}>Escríbeme</a>
            <a className="button button--ghost" href={links.instagram} target="_blank" rel="noopener">@dvvsalom3</a>
            <a className="button button--ghost" href={links.linkedin} target="_blank" rel="noopener">LinkedIn</a>
          </div>
        </section>
      </main>
      <footer className="foot">© {site.year} {site.name} · Hecho en {site.city}</footer>
    </>
  );
}
