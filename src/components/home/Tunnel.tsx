import Link from "next/link";
import { tunnel } from "@/data/content";
import { illustrations } from "../illustrations";
import type { ArtKey } from "@/data/content";

const GAP = 1150; // distancia entre capítulos en el eje Z (px)

// Objetos flotando a los lados del túnel: [ilustración, x en vw, y en vh, profundidad]
const floaters: [ArtKey, number, number, number][] = [
  ["laptop", -34, -14, 600],
  ["grover", 33, 16, 1500],
  ["bolt", -36, 18, 2500],
  ["brain", 35, -16, 3600],
  ["eye", -33, -10, 4700],
  ["cube", 34, 14, 5800],
  ["compass", -32, 16, 6700],
];

// Partículas con posiciones fijas (sin aleatoriedad para que SSR y cliente coincidan)
const dots = Array.from({ length: 34 }, (_, i) => {
  const a = (i * 137.508 * Math.PI) / 180;
  const r = 18 + ((i * 53) % 30);
  return { x: Math.cos(a) * r, y: Math.sin(a) * r * 0.62, z: 200 + ((i * 397) % 7600), s: 4 + (i % 4) * 2 };
});

/**
 * Túnel 3D: la sección se queda fija y el scroll mueve una cámara hacia adelante.
 * Los capítulos, los anillos y los objetos vienen desde el fondo y te pasan por al lado.
 * Sin JS o con movimiento reducido se ve como una lista normal.
 */
export function Tunnel() {
  const depth = tunnel.length * GAP + 600;
  return (
    <section className="tunnel" data-tunnel={depth} aria-labelledby="tunnel-title">
      <div className="tunnel__stage">
        <h2 className="vh" id="tunnel-title">
          Mi historia en seis frases
        </h2>
        <div className="tunnel__hud" aria-hidden="true">
          <span className="tunnel__label">~/viaje --3d</span>
          <span className="tunnel__bar">
            <i />
          </span>
          <span className="tunnel__count">
            <b data-tunnel-count>01</b> / {String(tunnel.length).padStart(2, "0")}
          </span>
        </div>

        <div className="tunnel__world" data-tunnel-world>
          {Array.from({ length: Math.ceil(depth / 520) }, (_, i) => (
            <span key={`r${i}`} className={`tunnel__ring${i % 3 === 1 ? " tunnel__ring--dash" : ""}`} data-z={i * 520 + 260} aria-hidden="true" />
          ))}
          {dots.map((d, i) => (
            <span
              key={`d${i}`}
              className="tunnel__dot"
              data-z={d.z}
              data-x={d.x}
              data-y={d.y}
              style={{ width: d.s, height: d.s }}
              aria-hidden="true"
            />
          ))}
          {floaters.map(([art, x, y, z]) => {
            const Art = illustrations[art];
            return (
              <span key={art} className="tunnel__float" data-z={z} data-x={x} data-y={y} aria-hidden="true">
                <Art />
              </span>
            );
          })}
          <ol className="tunnel__chapters">
            {tunnel.map((c, i) => (
              <li key={c.kicker} className="tunnel__chapter" data-z={(i + 1) * GAP} data-chapter={i + 1}>
                <p className="tunnel__kicker">{c.kicker}</p>
                <p className="tunnel__title">
                  {c.title} <span className="dgrad">{c.accent}</span>
                </p>
              </li>
            ))}
          </ol>
          <div className="tunnel__end" data-z={depth} data-end>
            <p className="tunnel__kicker">fin del viaje (por ahora)</p>
            <Link className="dbtn dbtn--primary" href="/sobre-mi">
              Conóceme mejor <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
