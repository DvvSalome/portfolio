import type { Metadata, Viewport } from "next";
import { Frame } from "@/components/Frame";
import { ShadeMotion } from "@/components/ShadeMotion";
import { SiteNav } from "@/components/SiteNav";
import { SvgDefs } from "@/components/SvgDefs";
import { site } from "@/data/content";
import "@fontsource/bitter/400.css";
import "@fontsource/bitter/700.css";
import "@fontsource-variable/inter";
import "./globals.css";

export const metadata: Metadata = {
  title: site.name,
  description: site.description,
  openGraph: { title: site.name, description: site.description, locale: "es_CO", type: "website" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#fcf7fb",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <a className="skip-link" href="#proyectos">
          Saltar a proyectos
        </a>
        <SvgDefs />
        <Frame />
        <SiteNav />
        <ShadeMotion />
        {children}
      </body>
    </html>
  );
}
