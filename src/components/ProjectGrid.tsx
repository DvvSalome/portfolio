"use client";

import { useMemo, useState } from "react";
import { categories, projects, type Category } from "@/data/content";
import { ProjectCard } from "./ProjectCard";

type Filter = Category | "todos";

/** Filtros por categoría + proyecto destacado + grilla. */
export function ProjectGrid() {
  const [filter, setFilter] = useState<Filter>("todos");

  const featured = filter === "todos" ? projects.find((p) => p.featured) : undefined;
  const list = useMemo(
    () => projects.filter((p) => p !== featured && (filter === "todos" || p.category === filter)),
    [filter, featured],
  );

  const counts = useMemo(() => {
    const c: Record<string, number> = { todos: projects.length };
    for (const p of projects) c[p.category] = (c[p.category] ?? 0) + 1;
    return c;
  }, []);

  return (
    <>
      <div className="pfilters" role="group" aria-label="Filtrar proyectos por categoría">
        {categories
          .filter((c) => counts[c.id])
          .map((c) => (
            <button
              key={c.id}
              type="button"
              className="pfilter"
              aria-pressed={filter === c.id}
              onClick={() => setFilter(c.id)}
            >
              {c.label}
              <span className="pfilter__count">{counts[c.id]}</span>
            </button>
          ))}
      </div>
      <h2 className="vh">Lista de proyectos</h2>
      <p className="vh" aria-live="polite">
        {(featured ? 1 : 0) + list.length} proyectos
      </p>

      {featured && <ProjectCard project={featured} featured />}

      <div className="pgrid" key={filter}>
        {list.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </>
  );
}
