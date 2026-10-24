"use client";

import { useEffect } from "react";

/** Activa un velo detrás de la nav fija cuando el contenido pasa por debajo de ella. */
export function PastHero() {
  useEffect(() => {
    const work = document.querySelector<HTMLElement>(".explore, .subpage");
    if (!work) return;
    const update = () => document.body.classList.toggle("nav-over", work.getBoundingClientRect().top <= 110);
    update();
    addEventListener("scroll", update, { passive: true });
    addEventListener("resize", update);
    return () => {
      removeEventListener("scroll", update);
      removeEventListener("resize", update);
    };
  }, []);
  return null;
}
