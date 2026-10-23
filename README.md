# salome-portfolio

Portafolio de Salome Arboleda. Diseño oscuro (hero centrado con chip, llaves y barra de stats) con contenido de EJEMPLO, más tu personaje line-art interactivo en la sección Sobre mí.

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

## Cómo editar

- **Todo el contenido (ejemplo):** `src/data/content.ts`. Estilos nuevos en `src/app/site.css`.
- **Colores:** variables al inicio de `src/app/globals.css` (`--bg`, `--line`, `--fill`, `--text`, `--subtext`).
- **Personaje:** `src/components/Avatar.tsx`. Cada capa es un `<svg>` aparte; las formas grandes (pelo, cara, torso) viven en `SvgDefs.tsx` y se reutilizan con `<use>`.

## Interacciones del personaje

- La cabeza gira en 3D y los rasgos se mueven por capas según el cursor.
- Parpadea y respira solo.
- Clic o Enter: se baja las gafas y sonríe.
- Si sacudes el mouse de lado a lado, se marea.
- Con `prefers-reduced-motion` todo el movimiento se apaga.
