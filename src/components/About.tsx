import Image, { type StaticImageData } from "next/image";
import hackaton from "@/assets/sobre-mi/hackaton-barranquilla.webp";
import luna from "@/assets/sobre-mi/luna.webp";
import selfie from "@/assets/sobre-mi/selfie.webp";
import Link from "next/link";
import { about, funFacts, interests, links, talks, toolbox, traits } from "@/data/content";
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

const icons: Record<(typeof interests)[number]["icon"] | (typeof traits)[number]["icon"], React.ReactNode> = {
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
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m20 20-4.2-4.2M8.5 9a3 3 0 0 1 3-2" />
    </>
  ),
  flag: <path d="M5 21V4M5 4h11l-2 4 2 4H5" />,
  mic: (
    <>
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0M12 18v3M8 21h8" />
    </>
  ),
};

export function About() {
  return (
    <section className="about about--page" id="sobre-mi" aria-labelledby="sobre-mi-title">
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
            <h1 className="about__title" id="sobre-mi-title">
              {about.title}
            </h1>
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <div className="talkbox">
              <span className="talkbox__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">{icons.mic}</svg>
              </span>
              <div>
                <p>{talks.text}</p>
                <a className="talkbox__link" href={talks.last.href} target="_blank" rel="noopener">
                  {talks.last.label} <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
            <p className="about__offline">{about.offline}</p>
            <div className="about__btns">
              <Link className="dbtn dbtn--primary" href="/proyectos">
                Ver mis proyectos <span aria-hidden="true">→</span>
              </Link>
              <a className="dbtn" href={links.instagram} target="_blank" rel="noopener">
                <InstagramIcon /> Más fotos en Instagram
              </a>
            </div>
          </div>
        </div>

        <h2 className="about__sub reveal">Así soy</h2>
        <ul className="traits">
          {traits.map((t, i) => (
            <li key={t.title} className="trait reveal">
              <span className="trait__num" aria-hidden="true">
                0{i + 1}
              </span>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                {icons[t.icon]}
              </svg>
              <h3>{t.title}</h3>
              <p>{t.text}</p>
            </li>
          ))}
        </ul>

        <h2 className="about__sub reveal">Temas que me obsesionan</h2>
        <ul className="interests">
          {interests.map((it) => (
            <li key={it.title} className="interest reveal">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                {icons[it.icon]}
              </svg>
              <h3>{it.title}</h3>
              <p>{it.text}</p>
            </li>
          ))}
        </ul>

        <div className="about__duo">
          <section className="toolbox reveal" aria-labelledby="toolbox-title">
            <h2 className="about__sub about__sub--left" id="toolbox-title">
              Mi caja de herramientas
            </h2>
            <dl>
              {toolbox.map((g) => (
                <div key={g.group}>
                  <dt>{g.group}</dt>
                  <dd>
                    <ul className="pcard__tags">
                      {g.items.map((it) => (
                        <li key={it}>{it}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="facts reveal" aria-labelledby="facts-title">
            <h2 className="about__sub about__sub--left" id="facts-title">
              Datos curiosos
            </h2>
            <ul>
              {funFacts.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
}
