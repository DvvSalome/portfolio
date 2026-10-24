import { projects } from "@/data/content";
import { ogCard, ogSize } from "@/lib/og";

export const alt = "Proyecto de Salome Arboleda";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export default async function Image({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const p = projects.find((x) => x.id === id);
  return ogCard({
    eyebrow: "Proyecto · Salome Arboleda",
    title: p?.title ?? "Proyecto",
    subtitle: p?.tags.join(" · ") ?? "",
  });
}
