import Link from "next/link";
import { illustrations } from "./illustrations";

const cards = [
  { href: "/sobre-mi", title: "Sobre mí", text: "Quién soy, de dónde vengo y por qué me obsesiona entender cómo funcionan las cosas.", art: "beach", accent: "pink" },
  { href: "/proyectos", title: "Proyectos", text: "Lo que he construido: web, IA, seguridad y cuántica.", art: "laptop", accent: "violet" },
  { href: "/trayectoria", title: "Trayectoria", text: "Trabajo, charlas, lo que estoy aprendiendo y logros.", art: "trophy", accent: "rose" },
  { href: "/contacto", title: "Contacto", text: "¿Tienes una idea? Escríbeme.", art: "bitcoin", accent: "violet" },
] as const;

/** Puertas a las secciones del portafolio, debajo del hero. */
export function Explore() {
  return (
    <section className="explore" id="explora" aria-labelledby="explora-title">
      <div className="explore__inner">
        <h2 className="about__sub explore__title reveal" id="explora-title">
          Explora el portafolio
        </h2>
        <ul className="doors">
          {cards.map((c, i) => {
            const Art = illustrations[c.art];
            return (
              <li key={c.href} className="reveal">
                <Link href={c.href} className={`door pcard--${c.accent}`}>
                  <span className="door__num" aria-hidden="true">
                    0{i + 1}
                  </span>
                  <span className="door__art" aria-hidden="true">
                    <Art />
                  </span>
                  <span className="door__title">{c.title}</span>
                  <span className="door__text">{c.text}</span>
                  <span className="door__go" aria-hidden="true">
                    →
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
