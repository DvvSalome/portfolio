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
  { href: "#sobre-mi", label: "Sobre mí", hint: "Qué hago y cómo trabajo." },
  { href: "#proyectos", label: "Proyectos", hint: "Lo que he construido." },
  { href: "#charlas", label: "Charlas", hint: "Bitcoin, cuántica y Grover." },
  { href: "#hackatons", label: "Hackatons", hint: "Tarimas, 48 horas y la costa." },
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

export const talksIntro = {
  id: "charlas",
  title: "Charlas",
  text: "Me gusta explicar temas difíciles sin tecnicismos de más. Estas son las dos charlas que más he disfrutado dar.",
};

export const talks: Project[] = [
  {
    id: "bitcoin-cuantico",
    art: "bitcoin",
    meta: "Unconference Colombia · 12 sep 2026",
    title: { lead: "Bitcoin y la era ", bold: "cuántica" },
    paragraphs: [
      "Hablé de cómo se han cruzado Bitcoin y la computación cuántica en los últimos años, desde las primeras propuestas de protección hasta los avances más recientes.",
      "Recorrimos BIP-360, las direcciones resistentes a computadores cuánticos y los primeros experimentos de ataques, sin alarmismo.",
    ],
    cta: { label: "Ver la charla", href: "https://www.instagram.com/p/DeAhS9-FcK5/" },
  },
  {
    id: "grover",
    art: "grover",
    meta: "AI After Hours · Visible Builders, Medellín",
    title: { lead: "Mi primer algoritmo ", bold: "cuántico" },
    paragraphs: [
      "Conté cómo corrí el algoritmo de Grover en un computador cuántico real de IBM, explicado desde cero.",
      "Grover encuentra un elemento marcado amplificando su probabilidad en cada iteración. Eso es lo que muestra la barra alta del dibujo.",
    ],
    cta: { label: "Ver mi Instagram", href: links.instagram },
  },
];

export const hackatonsIntro = {
  id: "hackatons",
  title: "Hackatons",
  text: "Competir en otra ciudad, con poco sueño y mucha presión, es donde más aprendo. Estas son las que más me marcaron.",
};

export const hackatons: Project[] = [
  {
    id: "techcaribe",
    art: "trophy",
    meta: "Techcaribe Show 2026 · Costa Caribe",
    title: { lead: "Ganar en ", bold: "tarima" },
    paragraphs: [
      "Participé en una competencia en vivo con Cooweb. Trabajar con presión frente a todos fue muy loco, y dudé en subir por miedo a fallar. Terminamos ganando.",
      "En ese mismo viaje corrí mis primeros 5K.",
    ],
    cta: { label: "Ver el post", href: "https://www.instagram.com/p/DcHyJ4xjJ84/" },
  },
  {
    id: "build-with-ai",
    art: "laptop",
    meta: "Build with AI · Barranquilla",
    title: { lead: "48 horas sin ", bold: "dormir" },
    paragraphs: [
      "Una competencia de 48 horas en otra ciudad, con un día entero sin dormir, conflictos en el desarrollo y muchísimo aprendizaje en equipo.",
      "Fue mi primer viaje en avión, y hasta entré a la cabina.",
    ],
    cta: { label: "Ver el post", href: "https://www.instagram.com/p/DYxLV2glSrt/" },
  },
  {
    id: "cartagena",
    art: "beach",
    meta: "Hackaton + Caribeconf · Cartagena",
    title: { lead: "Gané y perdí al ", bold: "tiempo" },
    paragraphs: [
      "La hackaton más chistosa de mi vida: gané y perdí al mismo tiempo. Larga historia, pero dejó muchos aprendizajes.",
      "Después vino la playa y el after de Caribeconf, con gente que me dio consejos que todavía uso.",
    ],
    cta: { label: "Ver el post", href: "https://www.instagram.com/p/DcXrb9pFYbM/" },
  },
];
