"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { projects } from "@/data/content";
import { illustrations } from "../illustrations";

/**
 * Lista de trabajo seleccionado. En escritorio, al pasar el mouse por una fila
 * aparece la captura del proyecto siguiendo al cursor. En celular cada fila
 * muestra su miniatura.
 */
export function SelectedWork() {
  const list = projects.filter((p) => p.featured);
  const [active, setActive] = useState<number | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0, tx: 0, ty: 0 });

  useEffect(() => {
    if (!matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const tick = () => {
      const p = pos.current;
      p.x += (p.tx - p.x) * 0.16;
      p.y += (p.ty - p.y) * 0.16;
      const el = previewRef.current;
      if (el) el.style.transform = `translate3d(${p.x.toFixed(1)}px,${p.y.toFixed(1)}px,0) translate(-50%,-50%) rotate(${((p.tx - p.x) * 0.03).toFixed(2)}deg)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="hsec" aria-labelledby="work-title">
      <div className="hsec__inner">
        <div className="hhead reveal">
          <div>
            <p className="hhead__path">trabajo seleccionado</p>
            <h2 className="hhead__title" id="work-title">
              Proyectos
            </h2>
          </div>
          <Link className="hhead__link" href="/proyectos">
            Ver los {projects.length} <span aria-hidden="true">→</span>
          </Link>
        </div>

        <ul
          className={`sw${active !== null ? " sw--hover" : ""}`}
          onPointerMove={(e) => {
            pos.current.tx = e.clientX;
            pos.current.ty = e.clientY;
          }}
          onPointerLeave={() => setActive(null)}
        >
          {list.map((p, i) => {
            const Art = illustrations[p.art];
            return (
              <li key={p.id} className={`sw__row${active === i ? " is-active" : ""}`} onPointerEnter={() => setActive(i)}>
                <Link href={`/proyectos/${p.id}`} className="sw__link">
                  <span className="sw__num" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="sw__thumb" aria-hidden="true">
                    {p.image ? <Image src={p.image} alt="" fill sizes="120px" /> : <Art />}
                  </span>
                  <span className="sw__main">
                    <span className="sw__title">{p.title}</span>
                    <span className="sw__desc">{p.description}</span>
                  </span>
                  <span className="sw__tags">{p.tags.slice(0, 3).join(" · ")}</span>
                  <span className="sw__meta">
                    {p.award ? <span className="sw__award">★ {p.award.split("·")[0]?.trim()}</span> : p.year}
                  </span>
                  <span className="sw__arrow" aria-hidden="true">
                    ↗
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className={`sw__preview${active !== null ? " is-on" : ""}`} ref={previewRef} aria-hidden="true">
        {list.map((p, i) => {
          const Art = illustrations[p.art];
          return (
            <div key={p.id} className={`sw__frame pcard--${p.accent}${active === i ? " is-active" : ""}`}>
              {p.image ? <Image src={p.image} alt="" fill sizes="420px" /> : <Art />}
            </div>
          );
        })}
      </div>
    </section>
  );
}
