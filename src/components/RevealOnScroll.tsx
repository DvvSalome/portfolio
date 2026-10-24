"use client";

import { useEffect } from "react";

/**
 * Hace aparecer los `.reveal` al entrar en pantalla. Sin JavaScript o con
 * movimiento reducido, todo queda visible desde el inicio.
 */
export function RevealOnScroll() {
  useEffect(() => {
    const els = [...document.querySelectorAll<HTMLElement>(".reveal")];
    if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.remove("is-hidden");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    for (const el of els) {
      if (el.getBoundingClientRect().top > innerHeight) {
        el.classList.add("is-hidden");
        io.observe(el);
      }
    }
    return () => io.disconnect();
  }, []);
  return null;
}
