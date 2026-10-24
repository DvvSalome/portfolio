import { PastHero } from "./PastHero";
import { RevealOnScroll } from "./RevealOnScroll";
import { SiteFooter } from "./SiteFooter";

/** Lo que comparten las páginas internas: velo de la nav, aparición al hacer scroll y pie. */
export function PageChrome() {
  return (
    <>
      <SiteFooter />
      <PastHero />
      <RevealOnScroll />
    </>
  );
}
