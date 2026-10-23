"use client";

import { useEffect } from "react";

/** Marca el body cuando la sección oscura llega arriba, para que el marco y la nav cambien de color. */
export function PastHero() {
  useEffect(() => {
    const dark = document.querySelector<HTMLElement>(".dark");
    if (!dark) return;
    const update = () => {
      const top = dark.getBoundingClientRect().top;
      document.body.classList.toggle("past-hero", top <= innerHeight * 0.5);
      document.body.classList.toggle("nav-dark", top <= 110);
    };
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
