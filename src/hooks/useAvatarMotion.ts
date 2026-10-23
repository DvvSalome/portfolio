"use client";

import { useEffect, useState, type RefObject } from "react";

type Styled = Element & ElementCSSInlineStyle;

const clamp = (v: number) => Math.max(-1, Math.min(1, v));

/**
 * Mueve las capas del avatar según el cursor (parallax con perspectiva) y detecta
 * cuando se sacude el mouse para marearlo. Devuelve `true` mientras está mareado.
 */
export function useAvatarMotion(rootRef: RefObject<HTMLElement | null>): boolean {
  const [dizzy, setDizzy] = useState(false);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const one = (selector: string) => root.querySelector<Styled>(selector);
    const yaw = one(".head__yaw");
    const rot = one(".head__rotation");
    const hairBack = one(".hair-back");
    const brows = one(".brows");
    const tilts = [...root.querySelectorAll<HTMLElement>("[data-tilt]")].map((el) => ({
      el,
      k: Number(el.dataset.tilt ?? 1),
    }));
    const eyes = [...root.querySelectorAll<Styled>(".eyes__dots")];

    let raf = 0;
    let mx = innerWidth / 2;
    let my = innerHeight / 2;
    let isDizzy = false;
    let dizzyTimer: ReturnType<typeof setTimeout> | undefined;
    let lastX = 0;
    let lastT = 0;
    let lastDir = 0;
    let flips = 0;

    const apply = () => {
      raf = 0;
      const r = root.getBoundingClientRect();
      const x = clamp((mx - (r.left + r.width / 2)) / (innerWidth / 2));
      const y = clamp((my - (r.top + r.height * 0.42)) / (innerHeight / 2));

      if (yaw) yaw.style.transform = `translateX(${x * 8}px) rotateY(${x * 14}deg) rotateX(${-y * 6}deg)`;
      if (rot) rot.style.transform = `rotate(${x * 2}deg)`;
      if (hairBack) hairBack.style.transform = `translate(${-x * 6}px, ${-y * 3}px)`;
      if (brows) brows.style.transform = `translateY(${Math.min(0, y) * 5}px)`;
      for (const { el, k } of tilts) el.style.transform = `translate(${x * 16 * k}px, ${y * 10 * k}px)`;
      if (!isDizzy) for (const eye of eyes) eye.style.transform = `translate(${x * 6}px, ${y * 3.5}px)`;
    };

    const onMove = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;

      // Mareo: varios cambios bruscos de dirección en poco tiempo.
      const now = performance.now();
      const dx = e.clientX - lastX;
      const dir = Math.sign(dx);
      if (Math.abs(dx) > 25 && dir && dir !== lastDir) {
        flips = now - lastT < 180 ? flips + 1 : 1;
        lastDir = dir;
        lastT = now;
      }
      lastX = e.clientX;

      if (flips >= 6) {
        flips = 0;
        isDizzy = true;
        setDizzy(true);
        for (const eye of eyes) eye.style.transform = "";
        clearTimeout(dizzyTimer);
        dizzyTimer = setTimeout(() => {
          isDizzy = false;
          setDizzy(false);
        }, 3000);
      }

      if (!raf) raf = requestAnimationFrame(apply);
    };

    addEventListener("pointermove", onMove, { passive: true });
    return () => {
      removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
      clearTimeout(dizzyTimer);
    };
  }, [rootRef]);

  return dizzy;
}
