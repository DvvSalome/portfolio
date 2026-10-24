import Link from "next/link";

/** Cierre corto que lleva a la página de contacto. */
export function ContactCTA() {
  return (
    <div className="dcta reveal">
      <h2 className="dcta__title">
        ¿Tienes una <span className="dgrad">idea</span>?
      </h2>
      <p>Cuéntamela. Respondo rápido.</p>
      <div className="dcta__btns">
        <Link className="dbtn dbtn--primary" href="/contacto">
          Hablemos <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}
