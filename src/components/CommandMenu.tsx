"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { links, menuLinks, projects } from "@/data/content";

type Item = { id: string; label: string; group: string; href: string; external?: boolean };

const items: Item[] = [
  ...menuLinks.map((l) => ({ id: `p-${l.href}`, label: l.label, group: "Páginas", href: l.href })),
  ...projects.map((p) => ({ id: `pr-${p.id}`, label: p.title, group: "Proyectos", href: `/proyectos/${p.id}` })),
  { id: "x-ig", label: "Instagram", group: "Redes", href: links.instagram, external: true },
  { id: "x-in", label: "LinkedIn", group: "Redes", href: links.linkedin, external: true },
  { id: "x-gh", label: "GitHub", group: "Redes", href: links.github, external: true },
];

const norm = (s: string) => s.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();

/** Buscador rápido: ⌘K / Ctrl+K desde cualquier página. */
export function CommandMenu() {
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  const results = useMemo(() => items.filter((i) => norm(i.label + " " + i.group).includes(norm(query))), [query]);

  const open = useCallback(() => {
    const d = dialogRef.current;
    if (!d || d.open) return;
    setQuery("");
    setActive(0);
    d.showModal();
    inputRef.current?.focus();
  }, []);

  const close = () => dialogRef.current?.close();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (dialogRef.current?.open) close();
        else open();
      }
    };
    const onOpen = () => open();
    addEventListener("keydown", onKey);
    addEventListener("open-command-menu", onOpen);
    return () => {
      removeEventListener("keydown", onKey);
      removeEventListener("open-command-menu", onOpen);
    };
  }, [open]);

  const go = (item: Item | undefined) => {
    if (!item) return;
    close();
    if (item.external) window.open(item.href, "_blank", "noopener");
    else router.push(item.href);
  };

  const onInputKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      go(results[active]);
    }
  };

  let lastGroup = "";
  return (
    <dialog
      ref={dialogRef}
      className="cmdk"
      aria-label="Buscar en el portafolio"
      onClick={(e) => e.target === dialogRef.current && close()}
    >
      <div className="cmdk__box">
        <div className="cmdk__search">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-4-4" />
          </svg>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActive(0);
            }}
            onKeyDown={onInputKey}
            placeholder="¿A dónde quieres ir?"
            role="combobox"
            aria-expanded="true"
            aria-controls="cmdk-list"
            aria-activedescendant={results[active]?.id}
            aria-label="Buscar páginas, proyectos y redes"
          />
          <kbd>Esc</kbd>
        </div>
        <ul id="cmdk-list" role="listbox" className="cmdk__list" aria-label="Resultados">
          {results.length === 0 && <li className="cmdk__empty">Nada por aquí.</li>}
          {results.map((r, i) => {
            const header = r.group !== lastGroup ? r.group : null;
            lastGroup = r.group;
            return (
              <li key={r.id} role="presentation">
                {header && (
                  <span className="cmdk__group" aria-hidden="true">
                    {header}
                  </span>
                )}
                <div
                  id={r.id}
                  role="option"
                  aria-selected={i === active}
                  className="cmdk__item"
                  onMouseMove={() => setActive(i)}
                  onClick={() => go(r)}
                >
                  {r.label}
                  <span aria-hidden="true">{r.external ? "↗" : "→"}</span>
                </div>
              </li>
            );
          })}
        </ul>
        <p className="cmdk__hint" aria-hidden="true">
          <kbd>↑</kbd> <kbd>↓</kbd> para moverte · <kbd>Enter</kbd> para abrir
        </p>
      </div>
    </dialog>
  );
}

/** Botón visible para abrir el buscador (para quien no use atajos). */
export function CommandButton() {
  return (
    <button type="button" className="cmdk-btn" onClick={() => dispatchEvent(new Event("open-command-menu"))}>
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </svg>
      Buscar
      <kbd aria-hidden="true">⌘K</kbd>
    </button>
  );
}
