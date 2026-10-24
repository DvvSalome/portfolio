import { ogCard, ogSize } from "@/lib/og";

export const alt = "Salome Arboleda, software developer en Medellín";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogCard({
    eyebrow: "Software developer · Medellín",
    title: "Salome Arboleda",
    subtitle: "Web, IA, ciberseguridad y computación cuántica.",
  });
}
