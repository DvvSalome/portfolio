import Link from "next/link";
import { links, menuLinks, site } from "@/data/content";
import { CommandButton } from "./CommandMenu";

export function SiteFooter() {
  return (
    <footer className="sitefoot">
      <nav aria-label="Pie de página" className="sitefoot__nav">
        {menuLinks.map((l) => (
          <Link key={l.href} href={l.href}>
            {l.label}
          </Link>
        ))}
        <a href={links.github} target="_blank" rel="noopener">
          GitHub
        </a>
      </nav>
      <CommandButton />
      <p>
        © {site.year} {site.name} · Hecho en {site.city}
      </p>
    </footer>
  );
}
