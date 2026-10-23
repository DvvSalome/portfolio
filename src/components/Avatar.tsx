"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { useAvatarMotion } from "@/hooks/useAvatarMotion";

const VIEW = "0 0 460 478";

/**
 * Personaje line-art de Salome. Cada capa es un SVG apilado para poder moverlas
 * por separado: el pelo de atrás se mueve menos que la cara, y las gafas
 * bajan con un clic.
 */
export function Avatar() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [cool, setCool] = useState(false);
  const dizzy = useAvatarMotion(rootRef);

  const toggle = () => setCool((c) => !c);
  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  };

  const className = ["avatar", cool && "is-cool", dizzy && "dizzy"].filter(Boolean).join(" ");

  return (
    <div
      ref={rootRef}
      className={className}
      role="button"
      tabIndex={0}
      aria-pressed={cool}
      aria-label="Ilustración de Salome. Sigue el cursor con la mirada; haz clic para bajarle las gafas."
      onClick={toggle}
      onKeyDown={onKeyDown}
    >
      <div className="avatar__animwrap">
        {/* halo del color de fondo para separar el dibujo de la franja */}
        <svg viewBox={VIEW} aria-hidden="true">
          <g fill="var(--bg)" stroke="var(--bg)" strokeWidth="16" strokeLinejoin="round">
            <use href="#p-hairback" />
            <use href="#p-torso" />
            <use href="#p-curtain" />
            <use href="#p-curtain" transform="matrix(-1 0 0 1 460 0)" />
          </g>
        </svg>

        {/* pelo de atrás */}
        <div className="layer hair-back">
          <svg viewBox={VIEW} aria-hidden="true">
            <g data-shade>
              <use href="#p-hairback" className="f" transform="translate(-6 6)" />
            </g>
            <use href="#p-hairback" className="s" />
            <path d="M300 130 Q322 210 326 300 M312 300 Q318 360 326 420 M160 130 Q138 210 134 300" className="s s-thin" opacity=".6" />
          </svg>
        </div>

        {/* cuerpo */}
        <div className="layer body-breath">
          <svg viewBox={VIEW} aria-hidden="true">
            <path d="M200 300 L198 366 Q230 388 262 366 L260 300Z" className="fb" />
            <path d="M200 318 Q230 344 260 318 L260 342 Q230 366 200 342Z" className="fd" />
            <path d="M200 300 L198 366 M260 300 L262 366" className="s" />
            <g data-shade>
              <use href="#p-torso" fill="url(#dotsDk)" transform="translate(-6 6)" />
              <use href="#p-torso" className="f" opacity=".55" transform="translate(-6 6)" />
            </g>
            <use href="#p-torso" className="s" />
            <path d="M194 366 Q230 400 266 366" className="s" />
            <path d="M190 372 Q230 418 270 372" className="s" strokeDasharray="4 5" />
            <path d="M182 376 Q230 462 278 376" className="s s-thin" />
            <g data-shade>
              <path d="M224 438 H236 V450 H248 V462 H236 V478 H224 V462 H212 V450 H224Z" className="f" transform="translate(-4 4)" />
            </g>
            <path d="M224 438 H236 V450 H248 V462 H236 V478 H224 V462 H212 V450 H224Z" className="s fb" />
          </svg>
        </div>

        {/* cabeza */}
        <div className="layer head__y">
          <div className="layer head__yaw">
            <div className="layer head__rotation">
              <div className="layer">
                <svg viewBox={VIEW} aria-hidden="true">
                  <use href="#p-face" className="fb" />
                  <use href="#p-face" className="s" />
                </svg>
              </div>

              {/* rasgos */}
              <div className="layer face-tilt" data-tilt="1">
                <svg viewBox={VIEW} aria-hidden="true">
                  <ellipse cx="188" cy="252" rx="17" ry="9" className="fd" />
                  <ellipse cx="272" cy="252" rx="17" ry="9" className="fd" />
                  <path d="M206 304 Q230 318 254 304 Q244 314 230 316 Q216 314 206 304Z" className="fd" />

                  <g className="brows">
                    <path d="M180 182 Q198 171 218 178" className="s" style={{ strokeWidth: "6px" }} />
                    <path d="M280 182 Q262 171 242 178" className="s" style={{ strokeWidth: "6px" }} />
                  </g>

                  <g className="lid">
                    <path d="M182 208 Q200 192 218 206 Q200 219 182 208Z" className="fb" />
                    <g clipPath="url(#eyeL)">
                      <g className="eyes__dots eyes__dots--l">
                        <circle cx="200" cy="206" r="7" className="fl" />
                        <circle cx="202.5" cy="203.5" r="2" className="fb" />
                      </g>
                    </g>
                    <path d="M182 208 Q200 192 218 206 M183 207 L171 198" className="s" style={{ strokeWidth: "4.5px" }} />
                    <path d="M187 213 Q200 219 213 211" className="s s-thin" />
                  </g>
                  <g className="lid">
                    <path d="M278 208 Q260 192 242 206 Q260 219 278 208Z" className="fb" />
                    <g clipPath="url(#eyeR)">
                      <g className="eyes__dots eyes__dots--r">
                        <circle cx="260" cy="206" r="7" className="fl" />
                        <circle cx="262.5" cy="203.5" r="2" className="fb" />
                      </g>
                    </g>
                    <path d="M278 208 Q260 192 242 206 M277 207 L289 198" className="s" style={{ strokeWidth: "4.5px" }} />
                    <path d="M273 213 Q260 219 247 211" className="s s-thin" />
                  </g>

                  <path d="M230 214 Q227 238 220 246 Q230 254 240 247" className="s" />

                  <g className="pout">
                    <path d="M212 276 Q221 263 230 269 Q239 263 248 276 Q239 289 230 289 Q221 289 212 276Z" className="f" />
                    <path d="M212 276 Q221 263 230 269 Q239 263 248 276 Q239 289 230 289 Q221 289 212 276Z M215 276 Q230 280 245 276" className="s" />
                  </g>
                  <g className="grin">
                    <path d="M208 270 Q230 300 252 270 Q230 280 208 270Z" className="f" />
                    <path d="M208 270 Q230 300 252 270 Q230 280 208 270Z" className="s" />
                  </g>
                </svg>
              </div>

              {/* pelo de adelante: flequillo cortina */}
              <div className="layer face-tilt" data-tilt="0.8">
                <svg viewBox={VIEW} aria-hidden="true">
                  <g data-shade>
                    <use href="#p-curtain" className="f" transform="translate(-6 6)" />
                    <use href="#p-curtain" className="f" transform="matrix(-1 0 0 1 454 6)" />
                  </g>
                  <use href="#p-curtain" className="s" />
                  <use href="#p-curtain" className="s" transform="matrix(-1 0 0 1 460 0)" />
                  <g data-shade>
                    <path d="M154 192 Q146 56 230 46 Q314 56 306 192 Q294 122 230 106 Q166 122 154 192Z" className="f" transform="translate(-6 6)" />
                  </g>
                  <path d="M154 192 Q146 56 230 46 Q314 56 306 192 Q294 122 230 106 Q166 122 154 192Z" className="f" />
                  <path d="M154 192 Q146 56 230 46 Q314 56 306 192 M154 192 Q166 122 230 106 Q294 122 306 192" className="s" />
                  <path d="M230 48 V106" className="s s-thin" opacity=".7" />
                  <path d="M144 190 Q138 280 132 380 M316 190 Q322 280 328 380" className="s s-thin" opacity=".6" />
                </svg>
              </div>

              {/* gafas */}
              <div className="layer face-tilt" data-tilt="0.9">
                <svg viewBox={VIEW} aria-hidden="true">
                  <g className="glasses">
                    <rect x="171" y="36" width="56" height="26" rx="9" className="fl" />
                    <rect x="233" y="36" width="56" height="26" rx="9" className="fl" />
                    <path d="M227 44 Q230 40 233 44 M171 44 L154 54 M289 44 L306 54" className="s" />
                    <path d="M180 43 H196 M242 43 H258" className="s s-thin" style={{ stroke: "var(--fill)" }} />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
