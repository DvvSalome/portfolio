export type ArtKey = "bitcoin" | "grover" | "trophy" | "laptop" | "beach";

export type Project = {
  id: string;
  art: ArtKey;
  meta: string;
  /** Parte normal del título y parte en negrita antes del punto de color. */
  title: { lead: string; bold: string };
  paragraphs: string[];
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
  title: "Proyectos",
  text: "Cosas que he construido. (Contenido de ejemplo: cambia título, texto y link de cada una.)",
};

/** Para agregar un proyecto: copia un objeto, cambia sus textos y elige `art`. */
export const projects: Project[] = [
  {
    id: "proyecto-1",
    art: "laptop",
    meta: "Next.js · TypeScript · 2026",
    title: { lead: "Nombre del ", bold: "proyecto" },
    paragraphs: [
      "Descripción corta de qué hace el proyecto y qué problema resuelve.",
      "Qué tecnologías usé y qué aprendí construyéndolo.",
    ],
    cta: { label: "Ver proyecto", href: "#" },
  },
  {
    id: "proyecto-2",
    art: "grover",
    meta: "Python · Qiskit · 2026",
    title: { lead: "Otro ", bold: "proyecto" },
    paragraphs: [
      "Descripción de ejemplo del segundo proyecto.",
      "Aquí puedes contar el reto más difícil y cómo lo resolviste.",
    ],
    cta: { label: "Ver código", href: "#" },
  },
  {
    id: "proyecto-3",
    art: "trophy",
    meta: "Node.js · Seguridad · 2025",
    title: { lead: "Un tercer ", bold: "proyecto" },
    paragraphs: [
      "Descripción de ejemplo del tercer proyecto.",
      "Resultado, premio o impacto que tuvo.",
    ],
    cta: { label: "Ver demo", href: "#" },
  },
];
