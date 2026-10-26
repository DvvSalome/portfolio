import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { CommandMenu } from "@/components/CommandMenu";
import { ScrollFX } from "@/components/motion/ScrollFX";
import { Frame } from "@/components/Frame";
import { ShadeMotion } from "@/components/ShadeMotion";
import { SiteNav } from "@/components/SiteNav";
import { SvgDefs } from "@/components/SvgDefs";
import { site } from "@/data/content";
import { siteUrl } from "@/lib/site-url";
import "@fontsource/bitter/400.css";
import "@fontsource/bitter/700.css";
import "@fontsource-variable/inter";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: site.name,
  description: site.description,
  openGraph: { title: site.name, description: site.description, locale: "es_CO", type: "website", siteName: site.name },
  twitter: { card: "summary_large_image" },
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
        <a className="skip-link" href="#contenido">
          Saltar al contenido
        </a>
        <SvgDefs />
        <Frame />
        <SiteNav />
        <ShadeMotion />
        {children}
        <CommandMenu />
        <ScrollFX />
        {/* solo en Vercel: en local el script no existe y daría 404 */}
        {process.env.VERCEL && <Analytics />}
      </body>
    </html>
  );
}
