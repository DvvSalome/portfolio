import type { Metadata } from "next";
import { GitHubIcon, InstagramIcon, LinkedInIcon } from "@/components/icons";
import { PageChrome } from "@/components/PageChrome";
import { contact, links, site } from "@/data/content";

export const metadata: Metadata = {
  title: `Contacto · ${site.name}`,
  description: "Escríbele a Salome Arboleda por Instagram, LinkedIn o GitHub.",
};

const channels = [
  { href: links.instagram, label: "Instagram", handle: "@dvvsalom3", note: "Aquí respondo más rápido.", Icon: InstagramIcon, primary: true },
  { href: links.linkedin, label: "LinkedIn", handle: "Salome Arboleda", note: "Para temas de trabajo.", Icon: LinkedInIcon },
  { href: links.github, label: "GitHub", handle: "DvvSalome", note: "Mi código y proyectos.", Icon: GitHubIcon },
];

export default function Contacto() {
  return (
    <main id="contenido" className="subpage">
      <section className="contact" aria-labelledby="contacto-title">
        <div className="contact__inner">
          <header className="subhead subhead--center reveal">
            <p className="about__eyebrow">
              <span className="pulse" aria-hidden="true" />
              Contacto
            </p>
            <h1 className="about__title" id="contacto-title">
              {contact.title}
            </h1>
            <p className="subhead__lede">{contact.lede}</p>
            <ul className="contact__reasons" aria-label="Me puedes escribir para">
              {contact.reasons.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </header>

          <ul className="channels">
            {channels.map(({ href, label, handle, note, Icon, primary }) => (
              <li key={label} className="reveal">
                <a className={`channel${primary ? " channel--primary" : ""}`} href={href} target="_blank" rel="noopener">
                  <span className="channel__icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <span className="channel__label">{label}</span>
                  <span className="channel__handle">{handle}</span>
                  <span className="channel__note">{note}</span>
                  <span className="channel__go" aria-hidden="true">
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <p className="contact__where">{site.city}, Colombia</p>
        </div>
      </section>
      <PageChrome />
    </main>
  );
}
