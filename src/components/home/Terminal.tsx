"use client";

import { useEffect, useRef, useState } from "react";
import { terminal } from "@/data/content";

/**
 * Ventana de terminal que "escribe" sola. Arranca cuando entra en pantalla.
 * Con movimiento reducido (o sin JS) muestra todo de una.
 */
export function Terminal() {
  const ref = useRef<HTMLDivElement>(null);
  const full = terminal.reduce((n, l) => n + l.cmd.length + 1, 0);
  const [typed, setTyped] = useState(full);

  useEffect(() => {
    const el = ref.current;
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setTyped(0);
    let timer = 0;
    const io = new IntersectionObserver(([e]) => {
      if (!e?.isIntersecting) return;
      io.disconnect();
      let n = 0;
      timer = window.setInterval(() => {
        n += 1;
        setTyped(n);
        if (n >= full) window.clearInterval(timer);
      }, 38);
    });
    io.observe(el);
    return () => {
      io.disconnect();
      window.clearInterval(timer);
    };
  }, [full]);

  let budget = typed;
  return (
    <div className="term" ref={ref} role="img" aria-label="Terminal: Salome Arboleda, software developer en Medellín; intereses: ciberseguridad, computación cuántica, IA y web; trabajando desde los 15 años; ahora construye con IA en Urpe AI Lab.">
      <div className="win__bar" aria-hidden="true">
        <span className="win__dots">
          <i />
          <i />
          <i />
        </span>
        <span className="win__title">salome@medellin: ~</span>
      </div>
      <div className="term__body" aria-hidden="true">
        {terminal.map((line, i) => {
          if (budget <= 0) return null;
          const shown = line.cmd.slice(0, budget);
          const done = budget > line.cmd.length;
          budget -= line.cmd.length + 1;
          return (
            <div key={line.cmd}>
              <p>
                <span className="term__prompt">❯</span> {shown}
                {!done && <span className="term__caret" />}
              </p>
              {done && line.out.map((o) => <p key={o} className="term__out">{o}</p>)}
              {done && i === terminal.length - 1 && (
                <p>
                  <span className="term__prompt">❯</span> <span className="term__caret" />
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
