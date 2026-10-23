// TODO: todo el contenido es de ejemplo. Reemplázalo con tu información real.
export const site = {
  name: "Salome Arboleda",
  handle: "salome.dev",
  description: "Portafolio de Salome Arboleda: software developer, ciberseguridad y computación cuántica.",
  city: "Medellín, Colombia",
  year: new Date().getFullYear(),
};

export const links = {
  instagram: "https://www.instagram.com/dvvsalom3/",
  linkedin: "https://www.linkedin.com/",
  github: "https://github.com/",
  email: "mailto:hola@ejemplo.dev",
};

export const nav = [
  { href: "#proyectos", label: "Proyectos" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#contacto", label: "Contacto" },
];

export const hero = {
  badge: "Disponible para nuevos proyectos",
  stats: [
    { value: "+20", label: "proyectos publicados" },
    { value: "+15", label: "charlas y hackatons" },
    { value: "3", label: "años construyendo" },
  ],
};

export const skills = [
  "TypeScript", "React", "Next.js", "Node.js", "Python", "PostgreSQL",
  "Ciberseguridad", "Computación cuántica", "Qiskit", "Docker", "Git", "IA aplicada",
];

export type Project = {
  id: string;
  title: string;
  text: string;
  tags: string[];
  href: string;
  accent: "pink" | "violet" | "blue" | "amber";
};

export const projects: Project[] = [
  { id: "p1", title: "Proyecto de ejemplo uno", text: "Una app web con Next.js y una API en Node. Descripción corta de qué problema resuelve y para quién.", tags: ["Next.js", "TypeScript", "PostgreSQL"], href: "#", accent: "pink" },
  { id: "p2", title: "Simulador cuántico", text: "Visualizador interactivo del algoritmo de Grover para explicar computación cuántica sin fórmulas.", tags: ["React", "Qiskit", "Canvas"], href: "#", accent: "violet" },
  { id: "p3", title: "Auditor de seguridad", text: "Herramienta que revisa configuraciones comunes y reporta riesgos con recomendaciones claras.", tags: ["Node.js", "Seguridad", "CLI"], href: "#", accent: "blue" },
  { id: "p4", title: "Asistente con IA", text: "Chat con contexto propio para un equipo, con streaming de respuestas y herramientas conectadas.", tags: ["IA", "Next.js", "Edge"], href: "#", accent: "amber" },
];

export type Job = { period: string; role: string; org: string; text: string; tags: string[] };

export const experience: Job[] = [
  { period: "2025 — Presente", role: "Software Developer", org: "Urpe AI Lab", text: "Construyo productos con IA de punta a punta: frontend, APIs y despliegue. (Texto de ejemplo.)", tags: ["TypeScript", "React", "Node.js"] },
  { period: "2024 — 2025", role: "Frontend Developer", org: "Empresa de ejemplo", text: "Interfaces accesibles y rápidas para un producto con miles de usuarios. (Texto de ejemplo.)", tags: ["Next.js", "CSS"] },
  { period: "2023 — 2024", role: "Hackatons y charlas", org: "Comunidad", text: "Participación y charlas sobre computación cuántica y seguridad en eventos del Caribe y Medellín. (Texto de ejemplo.)", tags: ["Charlas", "Cuántica"] },
];

export const about = {
  title: "Hola, soy Salome.",
  paragraphs: [
    "Soy software developer y estudio ciberseguridad y computación cuántica. Me gusta explicar cosas difíciles de forma sencilla.",
    "Cuando no estoy programando, estoy en una tarima, en una hackaton o buscando el próximo reto que dé un poquito de miedo. (Texto de ejemplo.)",
  ],
};
