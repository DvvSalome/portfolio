import { techMarquee } from "@/data/content";

export function TechMarquee() {
  const row = [...techMarquee, ...techMarquee];
  return (
    <div className="tmarquee" aria-label="Tecnologías con las que trabajo">
      <ul className="tmarquee__track js-marquee">
        {row.map((t, i) => (
          <li key={i} aria-hidden={i >= techMarquee.length}>
            <span aria-hidden="true">✦</span> {t}
          </li>
        ))}
      </ul>
    </div>
  );
}
