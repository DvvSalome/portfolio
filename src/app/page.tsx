import { Explore } from "@/components/Explore";
import { Masthead } from "@/components/Masthead";
import { PageChrome } from "@/components/PageChrome";
import { site } from "@/data/content";

export default function Home() {
  return (
    <main id="contenido">
      <div className="pagewrap" id="inicio">
        <div className="page">
          <Masthead />
        </div>
        <small className="made-in" aria-hidden="true">
          © {site.year}. Hecho en {site.city}.
        </small>
      </div>
      <Explore />
      <PageChrome />
    </main>
  );
}
