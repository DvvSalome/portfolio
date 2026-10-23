import type { Metadata, Viewport } from "next";
import { Frame } from "@/components/Frame";
import { ShadeMotion } from "@/components/ShadeMotion";
import { SiteNav } from "@/components/SiteNav";
import { SvgDefs } from "@/components/SvgDefs";
import { site } from "@/data/content";
import "./globals.css";

export const metadata: Metadata = {
  title: site.name,
  description: site.description,
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bitter:wght@400;700&display=swap"
        />
      </head>
      <body>
        <SvgDefs />
        <Frame />
        <SiteNav />
        <ShadeMotion />
        {children}
      </body>
    </html>
  );
}
