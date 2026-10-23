/** Patrones, clip paths y formas compartidas por todos los SVG de la página. */
export function SvgDefs() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true" focusable="false">
      <defs>
        <pattern id="dots" width="7" height="7" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="var(--fill)" />
          <circle cx="5.5" cy="5.5" r="1.5" fill="var(--fill)" />
        </pattern>
        <pattern id="dotsDk" width="7" height="7" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.6" fill="var(--subtext)" />
          <circle cx="5.5" cy="5.5" r="1.6" fill="var(--subtext)" />
        </pattern>
        <clipPath id="eyeL">
          <path d="M182 208 Q200 192 218 206 Q200 219 182 208Z" />
        </clipPath>
        <clipPath id="eyeR">
          <path d="M278 208 Q260 192 242 206 Q260 219 278 208Z" />
        </clipPath>
        <path id="p-hairback" d="M128 168 Q116 50 230 42 Q344 50 332 168 Q338 290 352 430 L108 430 Q122 290 128 168Z" />
        <path id="p-torso" d="M68 478 L74 442 Q84 394 160 376 L198 364 Q230 386 262 364 L300 376 Q376 394 386 442 L392 478Z" />
        <path id="p-face" d="M160 162 Q158 74 230 70 Q302 74 300 162 Q302 252 268 296 Q230 330 192 296 Q158 252 160 162Z" />
        <path id="p-curtain" d="M230 62 Q170 68 161 140 Q154 212 150 292 Q146 372 130 436 L104 432 Q118 352 122 262 Q124 84 230 62Z" />
      </defs>
    </svg>
  );
}
