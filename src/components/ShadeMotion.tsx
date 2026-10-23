"use client";

import { useEffect } from "react";

/**
 * El relleno de color de cada ilustración está "corrido" del trazo. Aquí se mueve
 * hacia el lado contrario del cursor, como una impresión desalineada.
 */
export function ShadeMotion() {
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const shades = [...document.querySelectorAll<HTMLElement | SVGElement>("[data-shade]")];
    let raf = 0;
    let nx = 0;
    let ny = 0;

    const apply = () => {
      raf = 0;
      for (const el of shades) {
        const k = el instanceof HTMLElement ? 6 : 4;
        el.style.transform = `translate(${-nx * k}px, ${-ny * k}px)`;
      }
    };

    const onMove = (e: PointerEvent) => {
      nx = (e.clientX / innerWidth - 0.5) * 2;
      ny = (e.clientY / innerHeight - 0.5) * 2;
      if (!raf) raf = requestAnimationFrame(apply);
    };

    addEventListener("pointermove", onMove, { passive: true });
    return () => {
      removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
