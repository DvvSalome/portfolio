"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Aparece suave al entrar en pantalla. Lo que ya está visible al cargar no se
 * esconde, y sin JavaScript todo se ve desde el primer momento.
 */
export function Reveal({ className = "", children }: { className?: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const show = () => {
      el.classList.remove("pending");
      el.classList.add("is-onscreen");
    };

    if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) {
      show();
      return;
    }

    if (el.getBoundingClientRect().top > innerHeight) el.classList.add("pending");
    else el.classList.add("is-onscreen");

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          show();
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal-content ${className}`.trim()}>
      {children}
    </div>
  );
}
