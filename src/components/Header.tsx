import { nav, site } from "@/data/content";

export function Header() {
  return (
    <header className="topbar">
      <a className="topbar__logo" href="#inicio" aria-label="Volver al inicio">
        <span className="topbar__dot" aria-hidden="true" />
        {site.handle}
      </a>
      <nav className="topbar__nav" aria-label="Principal">
        {nav.map((n) => (
          <a key={n.href} href={n.href}>{n.label}</a>
        ))}
      </nav>
      <a className="topbar__cta" href="#contacto">Contrátame</a>
    </header>
  );
}
