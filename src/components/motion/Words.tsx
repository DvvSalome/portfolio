/** Texto que se revela palabra por palabra con el scroll (ver [data-words] en ScrollFX). */
export function Words({ parts }: { parts: { text: string; className?: string }[] }) {
  const words: { w: string; className?: string }[] = [];
  for (const p of parts) for (const w of p.text.split(/\s+/).filter(Boolean)) words.push({ w, className: p.className });
  return (
    <span data-words style={{ ["--n" as string]: words.length }}>
      {words.map((x, i) => (
        <span key={i} className={`w${x.className ? ` ${x.className}` : ""}`} style={{ ["--i" as string]: i }}>
          {x.w}{" "}
        </span>
      ))}
    </span>
  );
}
