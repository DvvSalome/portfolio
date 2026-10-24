import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

const fontPath = (w: number) =>
  join(process.cwd(), "node_modules/@fontsource/bitter/files", `bitter-latin-${w}-normal.woff`);

const MOON = "M44 10a26 26 0 1 0 22 38A21 21 0 0 1 44 10Z";

/** Tarjeta para redes (Open Graph) con la paleta del inicio. */
export async function ogCard({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  const [regular, bold] = await Promise.all([readFile(fontPath(400)), readFile(fontPath(700))]);
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "70px 90px",
          background: "#fcf7fb",
          border: "20px solid #ffffff",
          fontFamily: "Bitter",
          position: "relative",
        }}
      >
        <svg width="520" height="150" viewBox="0 0 520 150" style={{ position: "absolute", right: 0, bottom: 0 }}>
          <defs>
            <pattern id="st" width="11" height="11" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="4" height="11" fill="#f6c4dc" />
            </pattern>
          </defs>
          <rect width="520" height="150" fill="url(#st)" />
        </svg>
        <svg width="120" height="120" viewBox="0 0 76 76" style={{ position: "absolute", right: 90, top: 70 }}>
          <path d={MOON} fill="#f6c4dc" transform="translate(-5 5)" />
          <path d={MOON} fill="none" stroke="#8a1fd6" strokeWidth="4" strokeLinejoin="round" />
        </svg>
        <div style={{ display: "flex", fontSize: 26, letterSpacing: 6, color: "#8a1fd6", fontWeight: 700, textTransform: "uppercase" }}>
          {eyebrow}
        </div>
        <div style={{ display: "flex", marginTop: 18, fontSize: 92, lineHeight: 1.05, fontWeight: 700, color: "#2a0f4f", maxWidth: 900 }}>
          {title}
          <span style={{ color: "#e08cb5" }}>.</span>
        </div>
        <div style={{ display: "flex", marginTop: 28, fontSize: 34, color: "#4a3a5c", maxWidth: 900 }}>{subtitle}</div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Bitter", data: regular, weight: 400, style: "normal" },
        { name: "Bitter", data: bold, weight: 700, style: "normal" },
      ],
    },
  );
}
