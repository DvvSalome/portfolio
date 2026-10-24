export type ArtKey = "bitcoin" | "grover" | "trophy" | "laptop" | "beach";

export type Category = "web" | "ia" | "seguridad" | "cuantica";

export const categories: { id: Category | "todos"; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "web", label: "Web" },
  { id: "ia", label: "IA" },
  { id: "seguridad", label: "Seguridad" },
  { id: "cuantica", label: "Cuántica" },
];

export type Status = "produccion" | "progreso" | "experimento";

export const statusLabel: Record<Status, string> = {
  produccion: "En producción",
  progreso: "En progreso",
  experimento: "Experimento",
};

export type Project = {
  /** También es la URL del caso: /proyectos/<id> */
  id: string;
  art: ArtKey;
  /** Captura opcional en /public (ej. "/proyectos/mi-app.png"). Si no hay, se usa la ilustración. */
  image?: string;
  title: string;
  /** Qué problema resuelve, en una o dos frases. */
  description: string;
  /** Qué hiciste tú, concreto. */
  role: string;
  /** Resultado real (sin inventar métricas). */
  result: string;
  tags: string[];
  category: Category;
  status: Status;
  year: string;
  /** El primero con featured: true sale grande arriba. */
  featured?: boolean;
  /** Color del brillo de la tarjeta. */
  accent: "violet" | "rose" | "pink";
  links: { demo?: string; code?: string };
  /** Página del caso. */
  caseStudy: {
    problem: string;
    decisions: string[];
    learned: string;
  };
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
  github: "https://github.com/DvvSalome",
  instagram: "https://www.instagram.com/dvvsalom3/",
  linkedin: "https://www.linkedin.com/in/salome-arboleda-39b745252",
};

export const menuLinks = [
  { href: "/#inicio", label: "Inicio", hint: "Volver al principio." },
  { href: "/#proyectos", label: "Proyectos", hint: "Lo que he construido." },
] as const;

export const projectsIntro = {
  id: "proyectos",
  badge: "Contenido de ejemplo",
  sub: "Proyectos que he construido de punta a punta. Cambia estos ejemplos en src/data/content.ts.",
};

const exampleCase = {
  problem: "Ejemplo: describe el problema con contexto. ¿Quién lo tenía? ¿Por qué importaba?",
  decisions: [
    "Ejemplo: una decisión técnica y por qué la tomaste.",
    "Ejemplo: algo que decidiste NO hacer y por qué.",
    "Ejemplo: cómo comprobaste que funcionaba (tests, usuarios, métricas reales).",
  ],
  learned: "Ejemplo: qué aprendiste y qué mejorarías si lo hicieras otra vez.",
};

/**
 * Para agregar un proyecto: copia un objeto, cambia sus textos y elige `art`
 * (o pon una captura en /public y su ruta en `image`). Si no hay demo o código, borra ese link.
 */
export const projects: Project[] = [
  {
    id: "proyecto-destacado",
    art: "laptop",
    title: "Tu proyecto más importante",
    description: "Qué problema resuelve el proyecto y para quién, en una o dos frases. Este va grande porque es el que mejor te representa.",
    role: "Qué hiciste tú: frontend, API, diseño, despliegue…",
    result: "Qué cambió gracias a esto. Sin inventar números.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    category: "web",
    status: "produccion",
    year: "2026",
    featured: true,
    accent: "violet",
    links: { demo: "#", code: "#" },
    caseStudy: exampleCase,
  },
  {
    id: "simulador-cuantico",
    art: "grover",
    title: "Simulador cuántico",
    description: "Ejemplo: visualizador del algoritmo de Grover para explicar computación cuántica sin fórmulas.",
    role: "Ejemplo: diseñé la visualización y corrí el circuito en IBM Quantum.",
    result: "Ejemplo: lo usé como apoyo en una charla.",
    tags: ["Python", "Qiskit", "React"],
    category: "cuantica",
    status: "experimento",
    year: "2026",
    accent: "rose",
    links: { code: "#" },
    caseStudy: exampleCase,
  },
  {
    id: "auditor-seguridad",
    art: "trophy",
    title: "Auditor de seguridad",
    description: "Ejemplo: herramienta que revisa configuraciones comunes y reporta riesgos.",
    role: "Ejemplo: construí el CLI y las reglas de revisión.",
    result: "Ejemplo: detecta configuraciones inseguras antes de desplegar.",
    tags: ["Node.js", "Seguridad", "CLI"],
    category: "seguridad",
    status: "progreso",
    year: "2025",
    accent: "pink",
    links: { demo: "#", code: "#" },
    caseStudy: exampleCase,
  },
  {
    id: "asistente-ia",
    art: "bitcoin",
    title: "Asistente con IA",
    description: "Ejemplo: chat con contexto propio para un equipo, con respuestas en streaming.",
    role: "Ejemplo: armé el backend y la integración con el modelo.",
    result: "Ejemplo: el equipo lo usa a diario para buscar documentación.",
    tags: ["IA", "Next.js", "Node.js"],
    category: "ia",
    status: "produccion",
    year: "2025",
    accent: "violet",
    links: { demo: "#" },
    caseStudy: exampleCase,
  },
  {
    id: "landing-evento",
    art: "beach",
    title: "Landing de un evento",
    description: "Ejemplo: página para un evento de tecnología con agenda y registro.",
    role: "Ejemplo: diseño y desarrollo completo.",
    result: "Ejemplo: se usó para inscribir a los asistentes.",
    tags: ["React", "CSS"],
    category: "web",
    status: "produccion",
    year: "2024",
    accent: "rose",
    links: { demo: "#", code: "#" },
    caseStudy: exampleCase,
  },
];

export const stats = [
  { value: String(projects.length), label: "proyectos" },
  { value: "JS/TS", label: "React · Next.js · Node" },
  { value: "Medellín", label: "Colombia" },
];
