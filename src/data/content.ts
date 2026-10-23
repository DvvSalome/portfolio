export type ArtKey = "bitcoin" | "grover" | "trophy" | "laptop" | "beach";

export type Project = {
  id: string;
  art: ArtKey;
  title: string;
  description: string;
  tags: string[];
  year: string;
  /** Color del brillo de la tarjeta. */
  accent: "blue" | "yellow" | "pink";
  cta: { label: string; href: string };
};

export const stack = ["JS/TS", "React", "Next.js", "Node"];

export const site = {
  name: "Salome Arboleda",
  description:
    "Software developer en Urpe AI Lab. Estudia ciberseguridad y computación cuántica, desde Medellín.",
  year: "MMXXVI",
  city: "Medellín",
};

export const links = {
  instagram: "https://www.instagram.com/dvvsalom3/",
  linkedin: "https://www.linkedin.com/in/salome-arboleda-39b745252",
};

export const menuLinks = [
  { href: "#inicio", label: "Inicio", hint: "Volver al principio." },
  { href: "#proyectos", label: "Proyectos", hint: "Lo que he construido." },
] as const;

export const projectsIntro = {
  id: "proyectos",
  badge: "Contenido de ejemplo",
  sub: "Proyectos que he construido de punta a punta. Cambia estos ejemplos en src/data/content.ts.",
};

/** Para agregar un proyecto: copia un objeto, cambia sus textos y elige `art`. */
export const projects: Project[] = [
  {
    id: "proyecto-1",
    art: "laptop",
    title: "Nombre del proyecto",
    description: "Descripción corta de qué hace el proyecto, qué problema resuelve y para quién.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    year: "2026",
    accent: "blue",
    cta: { label: "Ver proyecto", href: "#" },
  },
  {
    id: "proyecto-2",
    art: "grover",
    title: "Simulador cuántico",
    description: "Ejemplo: visualizador del algoritmo de Grover para explicar computación cuántica sin fórmulas.",
    tags: ["Python", "Qiskit", "React"],
    year: "2026",
    accent: "yellow",
    cta: { label: "Ver código", href: "#" },
  },
  {
    id: "proyecto-3",
    art: "trophy",
    title: "Auditor de seguridad",
    description: "Ejemplo: herramienta que revisa configuraciones comunes y reporta riesgos con recomendaciones.",
    tags: ["Node.js", "Seguridad", "CLI"],
    year: "2025",
    accent: "pink",
    cta: { label: "Ver demo", href: "#" },
  },
  {
    id: "proyecto-4",
    art: "bitcoin",
    title: "Otro proyecto",
    description: "Ejemplo: cuenta el reto más difícil del proyecto y cómo lo resolviste.",
    tags: ["React", "Node.js"],
    year: "2025",
    accent: "blue",
    cta: { label: "Ver proyecto", href: "#" },
  },
];

export const stats = [
  { value: "+20", label: "proyectos publicados" },
  { value: "+15", label: "charlas y hackatons" },
  { value: "3", label: "años construyendo" },
];
