import { Btn } from "@/components/Btn";
import { Masthead } from "@/components/Masthead";
import { DotHeader, ProjectList } from "@/components/Projects";
import { Reveal } from "@/components/Reveal";
import { hackatons, hackatonsIntro, links, site, talks, talksIntro } from "@/data/content";

export default function Home() {
  return (
    <div className="pagewrap" id="inicio">
      <main className="page">
        <Masthead />

        <div className="section">
          <div className="panels" id="sobre-mi">
            <div className="panels__main">
              <Reveal className="article-heading">
                <h2 className="article-heading__title">
                  Trabajemos <b>juntos</b>
                  <span className="dot">.</span>
                </h2>
              </Reveal>
              <Reveal className="flow">
                <p>
                  Soy <b>software developer en Urpe AI Lab</b> y estudio ciberseguridad y computación cuántica.
                  Construyo con JS/TS, React, Next.js y Node, y me encanta subirme a una tarima a explicar cosas
                  difíciles de forma sencilla. Si el reto da un poquito de miedo, <b>mejor todavía</b>.
                </p>
                <Btn href={links.linkedin} label="Ver mi LinkedIn" />
              </Reveal>
            </div>
          </div>

          <DotHeader {...talksIntro} />
          <ProjectList projects={talks} />

          <DotHeader {...hackatonsIntro} />
          <ProjectList projects={hackatons} />

          <div className="panels" id="contacto">
            <div className="panels__main">
              <Reveal className="article-heading">
                <h2 className="article-heading__title">
                  ¿<b>Hablamos</b>?
                </h2>
              </Reveal>
              <Reveal className="flow">
                <p>
                  Si tienes un proyecto, una hackaton o una charla en mente, escríbeme. Respondo más rápido por{" "}
                  <b>Instagram</b>.
                </p>
                <div className="btns">
                  <Btn href={links.instagram} label="@dvvsalom3" />
                  <Btn href={links.linkedin} label="LinkedIn" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </main>
      <small className="made-in">
        © {site.year}. Hecho en {site.city}.
      </small>
    </div>
  );
}
