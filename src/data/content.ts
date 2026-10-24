export type ArtKey = "bitcoin" | "grover" | "trophy" | "laptop" | "beach";

export type Project = {
  id: string;
  art: ArtKey;
  title: string;
  /** Qué problema resuelve, en una o dos frases. */
  description: string;
  /** Qué hiciste tú, concreto. */
  role: string;
  /** Resultado real (sin inventar métricas). */
  result: string;
  tags: string[];
  year: string;
  /** Color del brillo de la tarjeta. */
  accent: "violet" | "rose" | "pink";
  links: { demo?: string; code?: string };
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

/** Para agregar un proyecto: copia un objeto, cambia sus textos y elige `art`. Si no hay demo o código, borra ese link. */
export const projects: Project[] = [
  {
    id: "proyecto-1",
    art: "laptop",
    title: "Nombre del proyecto",
    description: "Qué problema resuelve el proyecto y para quién, en una o dos frases.",
    role: "Qué hiciste tú: frontend, API, diseño, despliegue…",
    result: "Qué cambió gracias a esto. Sin inventar números.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    year: "2026",
    accent: "violet",
    links: { demo: "#", code: "#" },
  },
  {
    id: "proyecto-2",
    art: "grover",
    title: "Simulador cuántico",
    description: "Ejemplo: visualizador del algoritmo de Grover para explicar computación cuántica sin fórmulas.",
    role: "Ejemplo: diseñé la visualización y corrí el circuito en IBM Quantum.",
    result: "Ejemplo: lo usé como apoyo en una charla.",
    tags: ["Python", "Qiskit", "React"],
    year: "2026",
    accent: "rose",
    links: { code: "#" },
  },
  {
    id: "proyecto-3",
    art: "trophy",
    title: "Auditor de seguridad",
    description: "Ejemplo: herramienta que revisa configuraciones comunes y reporta riesgos.",
    role: "Ejemplo: construí el CLI y las reglas de revisión.",
    result: "Ejemplo: detecta configuraciones inseguras antes de desplegar.",
    tags: ["Node.js", "Seguridad", "CLI"],
    year: "2025",
    accent: "pink",
    links: { demo: "#", code: "#" },
  },
  {
    id: "proyecto-4",
    art: "bitcoin",
    title: "Otro proyecto",
    description: "Ejemplo: cuenta el reto más difícil del proyecto.",
    role: "Ejemplo: qué parte construiste tú.",
    result: "Ejemplo: qué aprendiste o qué mejorarías.",
    tags: ["React", "Node.js"],
    year: "2025",
    accent: "violet",
    links: { demo: "#" },
  },
];

export const stats = [
  { value: "4", label: "proyectos destacados" },
  { value: "JS/TS", label: "React · Next.js · Node" },
  { value: "Medellín", label: "Colombia" },
];
