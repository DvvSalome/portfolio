import { hero } from "@/data/content";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__glow" aria-hidden="true" />
      <p className="pill"><span className="pill__dot" aria-hidden="true" />{hero.badge}</p>
      <h1 className="hero__title">
        Construyo <span className="chip">software</span> con
        <br />
        <span className="brace">{"{"}</span>
        <span className="grad">curiosidad</span>
        <span className="brace">{"}"}</span> y seguridad
      </h1>
      <p className="hero__sub">
        Soy Salome, developer en Urpe AI Lab. Hago web, IA aplicada y me meto con ciberseguridad y computación cuántica.
      </p>
      <div className="hero__btns">
        <a className="button button--primary" href="#proyectos">Ver proyectos <span aria-hidden="true">→</span></a>
        <a className="button button--ghost" href="#contacto">Escríbeme</a>
      </div>
      <ul className="stats" aria-label="Datos rápidos">
        {hero.stats.map((s) => (
          <li key={s.label}><b>{s.value}</b> {s.label}</li>
        ))}
      </ul>
    </section>
  );
}
