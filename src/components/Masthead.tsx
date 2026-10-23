import { Avatar } from "./Avatar";

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
          <h1 className="page-header__title t-outline">
            Hola, me
            <br />
            llamo <b>Salome</b>
            <span className="dot">.</span>
          </h1>
          <p className="page-header__lede t-outline">
            Soy <b>software developer</b> en Urpe AI Lab, desde Medellín, Colombia.
          </p>
          <a className="page-header__scroll" href="#sobre-mi" aria-label="Bajar a Sobre mí">
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
