export function Btn({ href, label }: { href: string; label: string }) {
  const external = href.startsWith("http");
  return (
    <a className="btn" href={href} {...(external ? { target: "_blank", rel: "noopener" } : {})}>
      <span className="btn__label">{label}</span>
      <span className="btn__fill" data-shade aria-hidden="true" />
    </a>
  );
}
