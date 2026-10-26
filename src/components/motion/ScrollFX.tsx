"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Motor de animaciones ligado al scroll y al puntero. Un solo rAF para todo.
 *
 * - [data-parallax="0.2"]   → variable --py (px) según la posición en pantalla.
 * - [data-speed="0.3"]      → variable --py = scrollY * velocidad (para el hero).
 * - [data-fade-out]         → se desvanece al bajar la primera pantalla.
 * - [data-words]            → variable --p (0..1) para revelar palabra por palabra.
 * - [data-count="15"]       → cuenta de 0 al número al entrar en pantalla.
 * - [data-hscroll]          → sección fijada que mueve su [data-hscroll-track] en horizontal.
 * - .js-marquee             → cinta que acelera y cambia de sentido con el scroll.
 * - .tilt                   → inclinación 3D + brillo que sigue al mouse.
 * - [data-magnetic]         → el elemento se acerca un poco al cursor.
 *
 * Con prefers-reduced-motion no se anima nada y todo queda en su estado final.
 */
export function ScrollFX() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const bar = document.getElementById("scroll-progress");
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      root.classList.add("fx-off");
      return;
    }
    root.classList.add("fx-on");

    const $ = <T extends HTMLElement>(sel: string) => [...document.querySelectorAll<T>(sel)];
    const parallax = $("[data-parallax]");
    const speed = $("[data-speed]");
    const fades = $("[data-fade-out]");
    const words = $("[data-words]");
    const worlds = $("[data-hscroll]");
    const marquees = $(".js-marquee");

    // ----- scroll horizontal fijado -----
    const wide = matchMedia("(min-width: 900px)");
    const worldState = worlds.map((sec) => ({ sec, track: sec.querySelector<HTMLElement>("[data-hscroll-track]"), max: 0 }));
    const layoutWorlds = () => {
      for (const w of worldState) {
        if (!w.track) continue;
        if (!wide.matches) {
          w.sec.classList.remove("world--on");
          w.sec.style.height = "";
          w.track.style.transform = "";
          continue;
        }
        w.sec.classList.add("world--on");
        w.max = Math.max(0, w.track.scrollWidth - innerWidth + 80);
        w.sec.style.height = `${w.max + innerHeight}px`;
      }
    };
    layoutWorlds();

    // ----- marquee -----
    const mq = marquees.map((el) => ({ el, x: 0, half: el.scrollWidth / 2 }));
    let lastY = scrollY;
    let vel = 0;
    let dir = 1;

    let ticking = false;
    const frame = () => {
      ticking = false;
      const vh = innerHeight;
      const y = scrollY;
      const dy = y - lastY;
      lastY = y;
      vel = vel * 0.85 + dy * 0.15;
      if (dy) dir = dy > 0 ? 1 : -1;

      const max = root.scrollHeight - vh;
      if (bar) bar.style.transform = `scaleX(${max > 0 ? y / max : 0})`;

      for (const el of parallax) {
        const r = el.getBoundingClientRect();
        if (r.bottom < -200 || r.top > vh + 200) continue;
        const s = Number(el.dataset.parallax) || 0.2;
        const off = (r.top + r.height / 2 - vh / 2) * -s;
        el.style.setProperty("--py", `${off.toFixed(1)}px`);
      }
      for (const el of speed) {
        if (y > vh * 1.5) continue;
        el.style.setProperty("--py", `${(y * (Number(el.dataset.speed) || 0.3)).toFixed(1)}px`);
      }
      for (const el of fades) {
        const p = Math.min(1, y / (vh * 0.45));
        el.style.opacity = String(1 - p);
      }
      for (const el of words) {
        const r = el.getBoundingClientRect();
        const p = Math.min(1, Math.max(0, (vh * 0.9 - r.top) / (vh * 0.55)));
        el.style.setProperty("--p", p.toFixed(3));
      }
      for (const w of worldState) {
        if (!w.track || !w.sec.classList.contains("world--on")) continue;
        const r = w.sec.getBoundingClientRect();
        const p = Math.min(1, Math.max(0, -r.top / Math.max(1, r.height - vh)));
        w.track.style.transform = `translate3d(${(-p * w.max).toFixed(1)}px,0,0)`;
        w.sec.style.setProperty("--hp", p.toFixed(4));
      }
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(frame);
      }
    };

    // la cinta corre todo el tiempo; el scroll le da impulso y sentido
    let raf = 0;
    const loop = () => {
      for (const m of mq) {
        if (!m.half) m.half = m.el.scrollWidth / 2;
        m.x -= (0.6 + Math.min(14, Math.abs(vel) * 0.6)) * dir;
        if (m.x <= -m.half) m.x += m.half;
        if (m.x > 0) m.x -= m.half;
        m.el.style.transform = `translate3d(${m.x.toFixed(1)}px,0,0)`;
      }
      vel *= 0.94;
      raf = requestAnimationFrame(loop);
    };
    if (mq.length) raf = requestAnimationFrame(loop);

    // ----- contadores -----
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          io.unobserve(e.target);
          const el = e.target as HTMLElement;
          const target = Number(el.dataset.count);
          const t0 = performance.now();
          const step = (t: number) => {
            const k = Math.min(1, (t - t0) / 1200);
            el.textContent = String(Math.round(target * (1 - Math.pow(1 - k, 3))));
            if (k < 1) requestAnimationFrame(step);
          };
          el.textContent = "0";
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.6 },
    );
    $("[data-count]").forEach((el) => io.observe(el));

    // ----- puntero: tilt + brillo, magnético -----
    const fine = matchMedia("(hover: hover) and (pointer: fine)").matches;
    const offs: (() => void)[] = [];
    if (fine) {
      for (const el of $(".tilt")) {
        const move = (ev: PointerEvent) => {
          const r = el.getBoundingClientRect();
          const x = (ev.clientX - r.left) / r.width;
          const yy = (ev.clientY - r.top) / r.height;
          el.style.setProperty("--rx", `${((0.5 - yy) * 7).toFixed(2)}deg`);
          el.style.setProperty("--ry", `${((x - 0.5) * 9).toFixed(2)}deg`);
          el.style.setProperty("--mx", `${(x * 100).toFixed(1)}%`);
          el.style.setProperty("--my", `${(yy * 100).toFixed(1)}%`);
        };
        const leave = () => {
          el.style.setProperty("--rx", "0deg");
          el.style.setProperty("--ry", "0deg");
        };
        el.addEventListener("pointermove", move);
        el.addEventListener("pointerleave", leave);
        offs.push(() => {
          el.removeEventListener("pointermove", move);
          el.removeEventListener("pointerleave", leave);
        });
      }
      for (const el of $("[data-magnetic]")) {
        const move = (ev: PointerEvent) => {
          const r = el.getBoundingClientRect();
          const dx = ev.clientX - (r.left + r.width / 2);
          const dy = ev.clientY - (r.top + r.height / 2);
          el.style.translate = `${(dx * 0.18).toFixed(1)}px ${(dy * 0.25).toFixed(1)}px`;
        };
        const leave = () => (el.style.translate = "");
        el.addEventListener("pointermove", move);
        el.addEventListener("pointerleave", leave);
        offs.push(() => {
          el.removeEventListener("pointermove", move);
          el.removeEventListener("pointerleave", leave);
        });
      }
    }

    const onResize = () => {
      layoutWorlds();
      mq.forEach((m) => (m.half = m.el.scrollWidth / 2));
      onScroll();
    };
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onResize);
    // las imágenes cambian el ancho de la pista al cargar
    addEventListener("load", onResize);
    frame();

    return () => {
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", onResize);
      removeEventListener("load", onResize);
      cancelAnimationFrame(raf);
      io.disconnect();
      offs.forEach((f) => f());
      for (const w of worldState) {
        w.sec.style.height = "";
        w.sec.classList.remove("world--on");
      }
    };
  }, [pathname]);

  return (
    <div className="scroll-progress" aria-hidden="true">
      <span id="scroll-progress" />
    </div>
  );
}
