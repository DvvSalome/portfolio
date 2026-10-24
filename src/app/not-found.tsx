import Link from "next/link";
import { Avatar } from "@/components/Avatar";
import { PageChrome } from "@/components/PageChrome";

export default function NotFound() {
  return (
    <main id="contenido" className="subpage lost">
      <div className="lost__inner">
        <div className="lost__avatar">
          <Avatar />
        </div>
        <div className="lost__text">
          <p className="about__eyebrow">
            <span className="pulse" aria-hidden="true" />
            Error 404
          </p>
          <h1 className="about__title">Me perdí.</h1>
          <p className="subhead__lede">
            Esta página no existe (todavía). Sacude el mouse sobre mí si quieres verme mareada, o vuelve al inicio.
          </p>
          <div className="dcta__btns lost__btns">
            <Link className="dbtn dbtn--primary" href="/">
              Volver al inicio
            </Link>
            <Link className="dbtn" href="/proyectos">
              Ver proyectos
            </Link>
          </div>
        </div>
      </div>
      <PageChrome />
    </main>
  );
}
