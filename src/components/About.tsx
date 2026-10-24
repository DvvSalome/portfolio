import Image, { type StaticImageData } from "next/image";
import hackaton from "@/assets/sobre-mi/hackaton-barranquilla.webp";
import luna from "@/assets/sobre-mi/luna.webp";
import selfie from "@/assets/sobre-mi/selfie.webp";
import { about, interests, links, moments } from "@/data/content";
import { InstagramIcon } from "./icons";

type Photo = { src: StaticImageData; alt: string; caption: string; className: string };

const photos: Photo[] = [
  {
    src: hackaton,
    alt: "Salome programando con el portátil sobre las piernas en la hackaton Build with AI de Barranquilla, con camiseta morada del evento.",
    caption: "Build with AI · Barranquilla",
    className: "polaroid--main",
  },
  {
    src: luna,
    alt: "Salome sentada en un sofá blanco debajo de una lámpara grande con forma de luna.",
    caption: "Bajo mi luna",
    className: "polaroid--moon",
  },
  {
    src: selfie,
    alt: "Selfie de Salome en el espejo con gorra negra y buzo blanco.",
    caption: "@dvvsalom3",
    className: "polaroid--selfie",
  },
];

const icons: Record<(typeof interests)[number]["icon"], React.ReactNode> = {
  quantum: (
    <>
      <circle cx="12" cy="12" r="2" />
      <ellipse cx="12" cy="12" rx="10" ry="4" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  spark: <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6" />,
  code: (
    <>
      <path d="m8 7-5 5 5 5M16 7l5 5-5 5" />
      <path d="m14 4-4 16" />
    </>
  ),
};

export function About() {
  return (
    <section className="about" id="sobre-mi" aria-labelledby="sobre-mi-title">
      <div className="about__inner">
        <div className="about__grid">
          <div className="collage reveal">
            <div className="collage__bar" aria-hidden="true" />
            {photos.map((p) => (
              <figure key={p.caption} className={`polaroid ${p.className}`}>
                <Image src={p.src} alt={p.alt} placeholder="blur" sizes="(max-width: 900px) 70vw, 360px" />
                <figcaption>{p.caption}</figcaption>
              </figure>
            ))}
          </div>

          <div className="about__text reveal">
            <p className="about__eyebrow">
              <span className="pulse" aria-hidden="true" />
              Sobre mí
            </p>
            <h2 className="about__title" id="sobre-mi-title">
              {about.title}
            </h2>
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <p className="about__offline">{about.offline}</p>
            <a className="dbtn" href={links.instagram} target="_blank" rel="noopener">
              <InstagramIcon /> Más fotos en Instagram
            </a>
          </div>
        </div>

        <h3 className="about__sub reveal">Lo que me mueve</h3>
        <ul className="interests">
          {interests.map((it) => (
            <li key={it.title} className="interest reveal">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                {icons[it.icon]}
              </svg>
              <h4>{it.title}</h4>
              <p>{it.text}</p>
            </li>
          ))}
        </ul>

        <h3 className="about__sub reveal">Momentos</h3>
        <ol className="moments">
          {moments.map((m) => (
            <li key={m.title} className="moment reveal">
              <span className="moment__when">{m.when}</span>
              <div>
                <h4>
                  {m.href ? (
                    <a href={m.href} target="_blank" rel="noopener">
                      {m.title} <span aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    m.title
                  )}
                </h4>
                <p>{m.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
