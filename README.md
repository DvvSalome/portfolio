# salome-portfolio

Portafolio de Salome Arboleda. Un hero con personaje line-art que sigue el cursor y una sección de proyectos, todo hecho en código con Next.js y TypeScript.

## Correrlo

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de producción
npm run typecheck  # tsc --noEmit
```

Requiere Node 20.9 o superior.

## Estructura

```
src/
  app/
    layout.tsx        # fonts, metadata, marco, nav y defs de SVG
    page.tsx          # secciones de la página
    globals.css       # tokens de color, layout y animaciones
    icon.svg          # favicon
  components/
    Avatar.tsx        # personaje en capas de SVG (client)
    Masthead.tsx      # hero: texto + avatar sobre la franja rayada
    SiteNav.tsx       # logo, menú a pantalla completa y "Contrátame" (client)
    Projects.tsx      # DotHeader y filas ilustración | texto
    illustrations.tsx # las 5 ilustraciones de las filas
    Reveal.tsx        # aparición al hacer scroll (client)
    ShadeMotion.tsx   # el relleno de color se corre al lado contrario del cursor
    SvgDefs.tsx       # patrones, clip paths y formas compartidas
  hooks/
    useAvatarMotion.ts  # parallax 3D de la cabeza y detector de "mareo"
  data/
    content.ts        # textos, links, charlas y hackatons
```

## Calidad (medido con Lighthouse 12 y axe-core 4)

| | Móvil | Escritorio |
|---|---|---|
| Rendimiento | 88–91 | 100 |
| Accesibilidad | 100 | 100 |
| Buenas prácticas | 100 | 100 |
| SEO | 100 | 100 |

axe-core: 0 violaciones. Fuentes servidas desde el propio sitio (`@fontsource`), sin peticiones a Google.

## Cómo editar

- **Proyectos:** `projects` en `src/data/content.ts` (proyectos reales, sacados de tus repos). Cada uno tiene `highlights` (qué hace), `tags`, `category` (filtros), `status`, `award`, `context`, `featured` (salen en el inicio) y links de código/demo. `image` opcional para poner una captura en `/public`.
- **Páginas:** `/` (inicio + explora), `/sobre-mi`, `/proyectos`, `/proyectos/<id>`, `/trayectoria`, `/contacto`.
- **Sobre mí:** `about`, `talks` (texto + link a tu última charla), `traits`, `interests`, `toolbox` y `funFacts` de `src/data/content.ts`; fotos en `src/assets/sobre-mi/` (se optimizan solas con `next/image`).
- **Trayectoria:** `career` (experiencia, charlas, aprendiendo, logros). **Contacto:** `contact` y `links`.
- **Textos y links:** `src/data/content.ts`. Cada proyecto lleva descripción, tu rol, resultado, tecnologías y links de demo/código (borra el que no tengas). Para agregar un proyecto, suma un objeto a `projects` y elige una `art` de `illustrations.tsx`.
- **Colores:** variables al inicio de `src/app/globals.css` (`--bg`, `--line`, `--fill`, `--text`, `--subtext`).
- **Personaje:** `src/components/Avatar.tsx`. Cada capa es un `<svg>` aparte; las formas grandes (pelo, cara, torso) viven en `SvgDefs.tsx` y se reutilizan con `<use>`.

## Interacciones del personaje

- La cabeza gira en 3D y los rasgos se mueven por capas según el cursor.
- Parpadea y respira solo.
- Clic o Enter: se baja las gafas y sonríe.
- Si sacudes el mouse de lado a lado, se marea.
- Con `prefers-reduced-motion` todo el movimiento se apaga.

## Extras

- **Buscador:** `⌘K` / `Ctrl+K` (o el botón "Buscar" del pie) para saltar a páginas, proyectos y redes.
- **Vista previa al compartir:** imágenes Open Graph generadas en `src/app/opengraph-image.tsx` y una por proyecto.
- **SEO:** `sitemap.xml` y `robots.txt` automáticos. Si usas dominio propio, define `NEXT_PUBLIC_SITE_URL`.
- **404:** `src/app/not-found.tsx`, con el personaje.
- **Analítica:** Vercel Analytics (solo se carga en Vercel; actívala en el dashboard del proyecto).
