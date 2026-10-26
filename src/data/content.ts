// Todo el contenido del portafolio vive aquí.

export type ArtKey =
  | "bitcoin" | "grover" | "trophy" | "laptop" | "beach"
  | "eye" | "pulse" | "cube" | "brain" | "bolt" | "scissors"
  | "leaf" | "gamepad" | "compass" | "diamond" | "chart" | "chat";

/* ---------- Sitio ---------- */
export const stack = ["JS/TS", "React", "Next.js", "Node"];

export const site = {
  name: "Salome Arboleda",
  description:
    "Software developer en Urpe AI Lab. Apasionada por la tecnología: web, IA, ciberseguridad y computación cuántica, desde Medellín.",
  year: "MMXXVI",
  city: "Medellín",
};

export const links = {
  github: "https://github.com/DvvSalome",
  instagram: "https://www.instagram.com/dvvsalom3/",
  linkedin: "https://www.linkedin.com/in/salome-arboleda-39b745252",
};

const gh = (repo: string) => `https://github.com/DvvSalome/${repo}`;

export const menuLinks = [
  { href: "/", label: "Inicio", hint: "Volver al principio." },
  { href: "/sobre-mi", label: "Sobre mí", hint: "Quién soy y qué me mueve." },
  { href: "/proyectos", label: "Proyectos", hint: "Lo que he construido." },
  { href: "/trayectoria", label: "Trayectoria", hint: "Trabajo, aprendizaje y logros." },
  { href: "/contacto", label: "Contacto", hint: "Hablemos." },
] as const;

/* ---------- Proyectos ---------- */
export type Category = "web" | "ia" | "cuantica" | "hackaton";

export const categories: { id: Category | "todos"; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "ia", label: "IA" },
  { id: "web", label: "Web" },
  { id: "hackaton", label: "Hackatons" },
  { id: "cuantica", label: "Cuántica" },
];

export type Status = "produccion" | "hackaton" | "experimento";

export const statusLabel: Record<Status, string> = {
  produccion: "En producción",
  hackaton: "Hackaton",
  experimento: "Experimento",
};

export type Project = {
  /** También es la URL del caso: /proyectos/<id> */
  id: string;
  art: ArtKey;
  /** Captura opcional en /public (ej. "/proyectos/mi-app.png"). Si no hay, se usa la ilustración. */
  image?: string;
  title: string;
  /** Una o dos frases: qué es y para quién. */
  description: string;
  /** Lo que hace, sacado del README del repo. */
  highlights: string[];
  tags: string[];
  category: Category;
  status?: Status;
  /** Premio o reconocimiento, si lo hubo. */
  award?: string;
  /** Dónde nació (hackaton, cliente…). */
  context?: string;
  year: string;
  /** Los que tienen featured salen primero y en el inicio. */
  featured?: boolean;
  accent: "violet" | "rose" | "pink";
  links: { demo?: string; code?: string };
};

export const projects: Project[] = [
  {
    id: "pokemonad",
    image: "/proyectos/pokemonad.webp",
    art: "gamepad",
    title: "PokeMonad",
    description:
      "Mundo 3D para aprender blockchain jugando: recorres el mapa, capturas profesores y solo así te explican Monad, en un aula.",
    highlights: [
      "Mundo 3D con React Three Fiber, física con Rapier y estado con Zustand.",
      "Smart contracts en Monad testnet: matrícula, intentos e insignias soulbound para los jefes del Coliseo.",
      "El Coliseo Trueno cierra cada lección con un duelo y una insignia.",
      "Modo demostración si no hay contrato configurado.",
    ],
    tags: ["React Three Fiber", "Three.js", "Solidity", "Monad", "viem", "Supabase"],
    category: "hackaton",
    status: "hackaton",
    award: "2.º puesto · Monad Blitz",
    context: "Hackaton Monad Blitz, 17 de octubre de 2026",
    year: "2026",
    featured: true,
    accent: "rose",
    links: { code: gh("pokemonad") },
  },
  {
    id: "vitalis",
    art: "pulse",
    title: "Vitalis",
    description:
      "Asistente de triaje médico con IA: describes tus síntomas en lenguaje natural y recibes un reporte orientativo estructurado.",
    highlights: [
      "Reporte con posibles causas ordenadas por probabilidad, nivel de urgencia, recomendaciones, señales de alarma y preguntas para llevar a la consulta.",
      "Alerta de emergencia inmediata: detecta señales de alarma en el navegador mientras la persona escribe, sin esperar a la IA.",
      "Salida estructurada con json_schema y validación con Zod de la entrada y de la respuesta del modelo.",
      "Disclaimer obligatorio: no es un diagnóstico médico.",
    ],
    tags: ["Next.js 16", "React 19", "TypeScript", "OpenAI", "Zod", "Tailwind v4"],
    category: "ia",
    status: "hackaton",
    award: "Ganadora · Techcaribe Show 2026",
    context: "Competencia en vivo con el equipo de Cooweb",
    year: "2026",
    featured: true,
    accent: "violet",
    links: { code: "https://github.com/Cooweb-co/dvvsalome-battletechcaribe3" },
  },
  {
    id: "kairos",
    image: "/proyectos/kairos.webp",
    art: "brain",
    title: "Kairós",
    description: "Copiloto de bienestar digital que combina varios modelos de IA, visión por computador y una extensión de Chrome.",
    highlights: [
      "6 consultores LLM especializados con LangChain: ánimo, sueño, foco, energía, pantalla y rachas.",
      "Visión por computador con YOLOv8 y MediaPipe para postura, somnolencia y distracciones.",
      "Extensión de Chrome que mide apps y tiempo de navegación.",
      "Modelo de ML (Gradient Boosting) que predice el riesgo de bienestar, y un orquestador que lo junta todo.",
    ],
    tags: ["Python", "LangChain", "YOLOv8", "MediaPipe", "scikit-learn", "Chrome Extension"],
    category: "hackaton",
    status: "hackaton",
    context: "Build with AI · Barranquilla",
    year: "2026",
    featured: true,
    accent: "violet",
    links: { code: gh("hackaton-barranquia") },
  },
  {
    id: "laboratorio-grover",
    image: "/proyectos/laboratorio-grover.webp",
    art: "grover",
    title: "Laboratorio Grover",
    description:
      "Web para celular que funciona como una vista en vivo del IBM Quantum Composer para entender el algoritmo de Grover paso a paso.",
    highlights: [
      "Circuitos de 2 o 3 qubits y Grover con 1 a 3 iteraciones.",
      "Q-sphere, esfera de Bloch, disco de fase, statevector y medición con ruido.",
      "Recorrido guiado: Inicio, Superposición, Oráculo, Difusión y Medir.",
      "Un solo index.html, sin dependencias ni build. Lo usé en mi charla de computación cuántica.",
    ],
    tags: ["JavaScript", "Computación cuántica", "IBM Quantum", "HTML/CSS"],
    category: "cuantica",
    status: "experimento",
    year: "2026",
    featured: true,
    accent: "pink",
    links: { code: gh("laboratorio-grover") },
  },
  {
    id: "actas-gestiones-electricas",
    image: "/proyectos/actas-gestiones-electricas.webp",
    art: "bolt",
    title: "Actas técnicas",
    description:
      "Formulario digital de actas técnicas y panel de trazabilidad para Gestiones Eléctricas SAS. Los técnicos lo llenan en campo desde el celular.",
    highlights: [
      "Formulario mobile-first con GPS y minimapa, firma, checklist, fotos y PDF generado en el navegador.",
      "Panel administrativo con login, historial, descarga de actas y gestión de usuarios.",
      "Funciones serverless en Vercel con Vercel Blob, y una evolución con Express + Postgres para VPS.",
    ],
    tags: ["JavaScript", "Vercel Functions", "Vercel Blob", "Express", "Postgres"],
    category: "web",
    status: "produccion",
    context: "Proyecto para cliente",
    year: "2026",
    featured: true,
    accent: "violet",
    links: { demo: "https://actas.gestioneselectricas.com", code: gh("gestiones-electricas-actas") },
  },
  {
    id: "quark-tasks",
    image: "/proyectos/quark-tasks.webp",
    art: "chart",
    title: "Quark Tasking",
    description: "App de productividad con un copiloto de IA que se adapta a tu energía y te avisa antes del burnout.",
    highlights: [
      "Copiloto que analiza tus patrones y sugiere cuándo hacer cada tarea.",
      "Dashboard con tareas completadas, horas de foco, rendimiento y rachas.",
      "SPA en React con Radix UI, Recharts y Framer Motion.",
    ],
    tags: ["React", "Radix UI", "Recharts", "Framer Motion"],
    category: "ia",
    status: "experimento",
    year: "2026",
    featured: true,
    accent: "violet",
    links: { code: gh("quarkTasks") },
  },
  {
    id: "barbas-y-bigotes",
    image: "/proyectos/barbas-y-bigotes.webp",
    art: "scissors",
    title: "Barbas & Bigotes",
    description: "Sitio público y panel de gestión para una barbería en Barranquilla.",
    highlights: [
      "Next.js 16 con App Router y React 19.",
      "Supabase con Postgres, autenticación y Row Level Security.",
      "Animaciones con GSAP y Motion, escena 3D con React Three Fiber y notificaciones push.",
    ],
    tags: ["Next.js 16", "Supabase", "GSAP", "Three.js", "PWA"],
    category: "web",
    context: "Proyecto para cliente",
    year: "2026",
    accent: "pink",
    links: { code: gh("barbas-y-bigotes") },
  },
  {
    id: "fourg-inmersivo",
    image: "/proyectos/fourg-inmersivo.webp",
    art: "diamond",
    title: "FourG Solutions inmersivo",
    description: "Renovación del sitio de FourG Solutions como una experiencia por escenas, con estética Art Déco negra y dorada.",
    highlights: [
      "Entrada cinematográfica con audio y un personaje guía (Voltio).",
      "Capítulos de servicios, método y contacto, con galería horizontal de diez sitios reales.",
      "Escena de portafolio con cinco videos generados con IA y animaciones que siguen el puntero.",
    ],
    tags: ["React", "CSS", "Video con IA", "Animación"],
    category: "web",
    context: "Proyecto para cliente",
    year: "2026",
    accent: "rose",
    links: { code: gh("fourgsolutions-immersive-site") },
  },
  {
    id: "alyra",
    image: "/proyectos/alyra.webp",
    art: "leaf",
    title: "Alyra",
    description: "Blog comunitario sobre reciclaje con Guardianes de Colombia, un juego educativo sobre nuestros ecosistemas.",
    highlights: [
      "6 regiones de Colombia y 19 especies con datos curiosos reales.",
      "8 minijuegos distintos: atrapar, emparejar, secuencias, reflejos, ritmo y más.",
      "La salud de cada especie sube solo si ganas los minijuegos.",
    ],
    tags: ["JavaScript", "HTML/CSS", "PHP", "MySQL"],
    category: "web",
    year: "2026",
    accent: "rose",
    links: { code: gh("alyra") },
  },
  {
    id: "argos",
    art: "eye",
    title: "ARGOS",
    description: "Detector de microsueños para conductores con la cámara web, en tiempo real.",
    highlights: [
      "EAR (Eye Aspect Ratio) para detectar ojos cerrados por 2 segundos o más.",
      "Calibración dinámica: los primeros 10 segundos mide tus ojos y ajusta el umbral.",
      "PERCLOS, detección de bostezos (MAR) y cabeceo con estimación de pose 3D.",
      "Alarma sonora cuando detecta somnolencia.",
    ],
    tags: ["Python", "OpenCV", "MediaPipe", "Visión por computador"],
    category: "ia",
    status: "experimento",
    year: "2026",
    accent: "rose",
    links: { code: gh("ARGOS") },
  },
  {
    id: "taller-de-los-suenos",
    art: "compass",
    title: "El Taller de los Sueños",
    description: "Sistema de orientación personal e inteligencia cívica para jóvenes en Medellín.",
    highlights: [
      "Instrumento de 5 bloques y 20 preguntas.",
      "Dos dashboards: uno personal y privado, y otro colectivo y anónimo.",
      "Los participantes entran con un código de equipo, sin crear cuenta.",
    ],
    tags: ["Next.js", "Supabase", "Postgres", "Vercel"],
    category: "web",
    year: "2026",
    accent: "violet",
    links: { code: gh("tallersue-os") },
  },
  {
    id: "cowork-avatars",
    art: "cube",
    title: "Cowork Avatars",
    description: "Generador de avatares 3D estilo chibi para un cowork virtual.",
    highlights: [
      "La IA genera cuatro vistas del personaje con Gemini 2.5 Flash Image.",
      "Meshy convierte las vistas en un modelo 3D con rigging y animaciones (GLB).",
      "Visor 3D que espera el modelo y lo muestra cuando está listo.",
    ],
    tags: ["React", "Vite", "TypeScript", "Gemini", "Meshy", "Supabase"],
    category: "ia",
    status: "experimento",
    year: "2026",
    accent: "pink",
    links: { code: gh("AvataresImagen") },
  },
  {
    id: "agentstudio-actions",
    art: "chat",
    title: "AgentStudio Actions",
    description: "Librería de componentes que un agente de IA renderiza para ejecutar acciones reales dentro del chat.",
    highlights: [
      "Tarjetas de acción y confirmación: rollback de despliegues y escalamiento de incidentes.",
      "MCPComposer: descubre herramientas MCP y arma flujos con varias de ellas.",
      "Constructor de flujos de automatización paso a paso.",
    ],
    tags: ["React", "TypeScript", "Generative UI", "MCP"],
    category: "hackaton",
    status: "hackaton",
    context: "Generative UI Hackathon · mayo 2026",
    year: "2026",
    accent: "pink",
    links: { code: gh("agentstudio-actions") },
  },
];

export const projectsIntro = {
  id: "proyectos",
  badge: "Proyectos reales · código en GitHub",
  sub: "Hackatons, proyectos para clientes y experimentos. Todo lo construí yo o con mi equipo, y el código está en GitHub.",
};

export const stats = [
  { value: String(projects.length), label: "proyectos" },
  { value: String(projects.filter((p) => p.award).length), label: "con premio" },
  { value: "100%", label: "código abierto" },
];

/* ---------- Sobre mí ---------- */
export const about = {
  title: "Curiosa desde siempre.",
  paragraphs: [
    "Empecé a programar desde muy pequeña y trabajo desde los 15 años. Desde entonces no he parado: cada vez que algo me da curiosidad, abro el computador hasta entender cómo funciona por dentro.",
    "Soy una apasionada por todo el mundo de la tecnología. Me gustan los retos y aprender cosas difíciles; así llegué a la ciberseguridad, a la computación cuántica y a la inteligencia artificial. Hoy soy software developer en Urpe AI Lab.",
  ],
  offline: "Fuera del teclado: salir con mis amigos, ir a cine y hacer reír a la gente.",
};

/** Charlas: solo el texto y el link a la última. */
export const talks = {
  text: "Me encanta dar charlas. He hablado sobre computación cuántica: cómo corrí el algoritmo de Grover en un computador cuántico real de IBM y cómo se cruzan Bitcoin y la era cuántica. Explicar algo difícil de forma sencilla es mi manera favorita de aprenderlo.",
  // Cambia este link cuando tengas el video o el post de tu charla más reciente.
  last: { label: "Ver mi última charla", href: "https://www.instagram.com/p/DeAhS9-FcK5/" },
};

export const traits = [
  { icon: "search", title: "Curiosa", text: "No me basta con que algo funcione: quiero saber cómo funciona por dentro." },
  { icon: "flag", title: "Amo los retos", text: "Mientras más difícil, mejor. Las hackatons fuera de mi ciudad son mi lugar feliz." },
  { icon: "spark", title: "Apasionada", text: "Me emociona todo el mundo de la tecnología, de la web a los qubits." },
  { icon: "mic", title: "Me gusta enseñar", text: "Subirme a una tarima a explicar algo complejo de forma sencilla." },
] as const;

export const interests = [
  { icon: "quantum", title: "Computación cuántica", text: "Corrí mi primer algoritmo (Grover) en un computador cuántico real de IBM." },
  { icon: "shield", title: "Ciberseguridad", text: "La estudio porque quiero entender cómo se rompen las cosas para protegerlas." },
  { icon: "spark", title: "Inteligencia artificial", text: "Construyo productos con IA de punta a punta en Urpe AI Lab." },
  { icon: "code", title: "Desarrollo web", text: "Mi base de todos los días: TypeScript, React, Next.js y Node." },
] as const;

/** Herramientas que uso, sacadas de mis proyectos. */
export const toolbox = [
  { group: "Frontend", items: ["TypeScript", "React", "Next.js", "Tailwind", "GSAP", "Three.js"] },
  { group: "Backend y datos", items: ["Node.js", "Express", "Supabase", "Postgres", "Python"] },
  { group: "IA", items: ["OpenAI", "Gemini", "LangChain", "YOLOv8", "MediaPipe"] },
  { group: "Cuántica y web3", items: ["IBM Quantum", "Qiskit", "Solidity", "Monad"] },
  { group: "Herramientas", items: ["Git", "GitHub", "Vercel", "Chrome Extensions"] },
];

export const funFacts = [
  "Trabajo desde los 15 años.",
  "Mi primer viaje en avión fue para ir a una hackaton.",
  "En el viaje a Techcaribe corrí mis primeros 5K.",
  "Gané y perdí una hackaton al mismo tiempo (larga historia).",
];

/* ---------- Trayectoria ---------- */
export const career: {
  intro: string;
  jobs: { period: string; role: string; org: string; text: string; skills: string[] }[];
  learning: { title: string; text: string }[];
  awards: { title: string; text: string; href?: string }[];
} = {
  intro: "Dónde trabajo, lo que estoy aprendiendo y lo que he logrado.",
  jobs: [
    {
      period: "Hoy",
      role: "Software Developer",
      org: "Urpe AI Lab",
      text: "Construyo productos con IA de punta a punta: interfaces, APIs y despliegue.",
      skills: ["TypeScript", "React", "Next.js", "Node.js", "IA"],
    },
  ],
  learning: [
    { title: "Ciberseguridad", text: "Cómo se rompen los sistemas para poder protegerlos." },
    { title: "Computación cuántica", text: "Algoritmos cuánticos y su impacto en la criptografía." },
  ],
  awards: [
    {
      title: "Ganadora en Techcaribe Show 2026",
      text: "Competencia en vivo con el equipo de Cooweb.",
      href: "https://www.instagram.com/p/DcHyJ4xjJ84/",
    },
    {
      title: "2.º puesto en Monad Blitz",
      text: "Con PokeMonad, un mundo 3D para aprender blockchain jugando.",
      href: gh("pokemonad"),
    },
  ],
};

/* ---------- Contacto ---------- */
export const contact = {
  title: "Hablemos.",
  lede: "Si tienes un proyecto, una charla o una idea en mente, escríbeme.",
  reasons: ["Proyectos web o con IA", "Charlas sobre computación cuántica", "Hackatons y retos nuevos"],
};

/* ---------- Inicio ---------- */
export const techMarquee = [
  "TypeScript", "React", "Next.js", "Node.js", "Python", "Supabase", "Three.js", "LangChain",
  "OpenAI", "Gemini", "IBM Quantum", "Solidity", "Ciberseguridad", "Vercel",
];

/** Números reales, sin inflar. */
export const homeStats = [
  { value: "15", label: "años tenía cuando empecé a trabajar" },
  { value: String(projects.length), label: "proyectos reales en este portafolio" },
  { value: "2", label: "podios en hackatons (1.º y 2.º)" },
  { value: "∞", label: "ganas de entender cosas difíciles" },
];

/** Hackatons y comunidades donde he estado (texto, no logos). */
export const events = [
  "Build with AI · Barranquilla",
  "Techcaribe Show 2026",
  "Monad Blitz",
  "Generative UI Hackathon",
  "Caribeconf · Cartagena",
  "Urpe AI Lab",
];

/** Lo que muestra la terminal del inicio. */
export const terminal = [
  { cmd: "whoami", out: ["Salome Arboleda · software developer"] },
  { cmd: "cat ubicacion.txt", out: ["Medellín, Colombia"] },
  { cmd: "ls intereses/", out: ["ciberseguridad/  computacion-cuantica/  ia/  web/"] },
  { cmd: "echo $TRABAJANDO_DESDE", out: ["15 años"] },
  { cmd: "./ahora.sh", out: ["construyendo con IA en Urpe AI Lab ✦"] },
];

/** Capítulos del túnel 3D del inicio (frases cortas, se leen mientras vuelas). */
export const tunnel = [
  { kicker: "01 · el origen", title: "Todo empezó con una pregunta:", accent: "¿cómo funciona esto por dentro?" },
  { kicker: "02 · desde los 15", title: "Empecé a trabajar a los 15", accent: "y nunca paré de aprender." },
  { kicker: "03 · retos", title: "Mientras más difícil,", accent: "más me engancha." },
  { kicker: "04 · qubits", title: "Corrí un algoritmo en un", accent: "computador cuántico real." },
  { kicker: "05 · seguridad", title: "Estudio cómo se rompen las cosas", accent: "para protegerlas." },
  { kicker: "06 · hoy", title: "Construyo con IA", accent: "en Urpe AI Lab." },
];
