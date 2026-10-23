"use client";

import { useEffect, useState } from "react";
import { links, menuLinks } from "@/data/content";
import { InstagramIcon, LinkedInIcon } from "./icons";

const MOON = "M44 10a26 26 0 1 0 22 38A21 21 0 0 1 44 10Z";
const BUBBLE =
  "M17.5 5C10 5 4.5 9.6 4.5 15.4c0 3.3 1.8 6.2 4.6 8.1L8 30l6.8-3.6c.9.2 1.8.3 2.7.3 7.5 0 13-4.6 13-11.3S25 5 17.5 5Z";

/** Logo, botón de menú, "Contrátame" y el menú a pantalla completa. */
export function SiteNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.classList.remove("menu-open");
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <div className="mainnav">
        <a className="logo" href="#inicio" aria-label="Volver al inicio">
          <svg viewBox="0 0 76 76" aria-hidden="true">
            <g data-shade>
              <path d={MOON} className="f" transform="translate(-5 5)" />
            </g>
            <path d={MOON} className="s" />
            <circle cx="26" cy="40" r="4" className="s s-thin" />
            <circle cx="36" cy="54" r="2.5" className="s s-thin" />
            <circle cx="24" cy="25" r="2" className="fl" />
          </svg>
        </a>
        <div className="menu-link">
          <button
            type="button"
            className="menu-trigger"
            aria-expanded={open}
            aria-controls="mainMenu"
            onClick={() => setOpen((o) => !o)}
          >
            <span>Menú</span>
            <span>Cerrar</span>
          </button>
        </div>
      </div>

      <a className="hire-me" href={links.instagram} target="_blank" rel="noopener">
        <svg viewBox="0 0 35 35" aria-hidden="true">
          <g data-shade>
            <path d={BUBBLE} className="f" transform="translate(-3 3)" />
          </g>
          <path d={BUBBLE} className="s" />
        </svg>
        Contrátame
      </a>

      <nav className="main-menu" id="mainMenu" aria-label="Menú principal">
        <div className="main-menu__mask" />
        <div className="main-menu__flyout">
          <ul className="social-links">
            <li>
              <a href={links.instagram} target="_blank" rel="noopener" aria-label="Instagram">
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a href={links.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
            </li>
          </ul>
          <ul className="primary-links">
            {menuLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
                <small>{l.hint}</small>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
