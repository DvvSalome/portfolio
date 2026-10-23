import { links, stack } from "@/data/content";
import { Avatar } from "./Avatar";
import { Btn } from "./Btn";
import { InstagramIcon, LinkedInIcon } from "./icons";

const SCROLL_WORD = "Desliza";

/** Hero a pantalla: texto a la izquierda, personaje a la derecha sobre la franja rayada. */
export function Masthead() {
  return (
    <header className="masthead">
      <div className="avatar-bg">
        <div className="bar" aria-hidden="true" />
        <Avatar />
      </div>

      <div className="page-header__inr section">
        <div className="page-header__content">
          <p className="page-header__eyebrow">
            <span className="pulse" aria-hidden="true" />
            Software developer · Medellín
          </p>
          <h1 className="page-header__title t-outline">
            Hola, me
            <br />
            llamo <b>Salome</b>
            <span className="dot">.</span>
          </h1>
          <p className="page-header__lede t-outline">
            Construyo productos web en <b>Urpe AI Lab</b> y me meto con ciberseguridad y computación cuántica.
          </p>
          <ul className="page-header__stack" aria-label="Stack principal">
            {stack.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <div className="page-header__actions">
            <Btn href="#proyectos" label="Ver proyectos" />
            <a className="icon-link" href={links.instagram} target="_blank" rel="noopener" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a className="icon-link" href={links.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
          </div>
          <a className="page-header__scroll" href="#proyectos" aria-label="Bajar a Proyectos">
            <span className="word" aria-hidden="true">
              {[...SCROLL_WORD].map((ch, i) => (
                <span key={i} style={{ animationDelay: `${(3.0725 + i * 0.0725).toFixed(4)}s` }}>
                  {ch}
                </span>
              ))}
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
