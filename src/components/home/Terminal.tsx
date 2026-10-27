"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { links, terminal } from "@/data/content";

const jokes = [
  "Le pregunté a un qubit si estaba bien. Me dijo que sí y que no al mismo tiempo.",
  "Mi código funciona y no sé por qué. Mañana no va a funcionar y tampoco voy a saber por qué.",
  "Hay 10 tipos de personas: las que entienden binario y las que no.",
  "Contraseña segura: la que ni yo me acuerdo.",
  "Le pedí a la IA que me hiciera el portafolio. Me pidió un portafolio de referencia.",
  "Un bug no es un error. Es una feature que nadie pidió.",
];

type Line = { kind: "cmd" | "out"; node: ReactNode };

/**
 * Terminal del inicio: primero "se escribe" sola y después la persona puede
 * escribir comandos de verdad (ayuda, chiste, proyectos, sudo contratar…).
 */
export function Terminal() {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const full = terminal.reduce((n, l) => n + l.cmd.length + 1, 0);
  const [typed, setTyped] = useState(full);
  const [lines, setLines] = useState<Line[]>([]);
  const [value, setValue] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [hIndex, setHIndex] = useState(-1);
  const [joke, setJoke] = useState(0);
  const ready = typed >= full;

  useEffect(() => {
    const el = ref.current;
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setTyped(0);
    let timer = 0;
    const io = new IntersectionObserver(([e]) => {
      if (!e?.isIntersecting) return;
      io.disconnect();
      let n = 0;
      timer = window.setInterval(() => {
        n += 1;
        setTyped(n);
        if (n >= full) window.clearInterval(timer);
      }, 32);
    });
    io.observe(el);
    return () => {
      io.disconnect();
      window.clearInterval(timer);
    };
  }, [full]);

  useEffect(() => {
    const b = bodyRef.current;
    if (b) b.scrollTop = b.scrollHeight;
  }, [lines, typed]);

  const out = (...nodes: ReactNode[]): Line[] => nodes.map((node) => ({ kind: "out", node }));

  const run = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    const echo: Line = { kind: "cmd", node: raw };
    if (!cmd) return setLines((l) => [...l, echo]);
    if (cmd === "clear" || cmd === "limpiar") return setLines([]);

    let res: Line[];
    const go = (href: string, label: string) => {
      setTimeout(() => router.push(href), 500);
      return out(`abriendo ${label}…`);
    };
    switch (cmd) {
      case "ayuda":
      case "help":
        res = out(
          "comandos: whoami · ls · proyectos · sobre-mi · contacto",
          "          chiste · cuantico · github · sudo contratar · limpiar",
        );
        break;
      case "whoami":
        res = out("Salome Arboleda · developer · Medellín");
        break;
      case "ls":
        res = out("proyectos/  sobre-mi/  trayectoria/  contacto/  chistes.txt");
        break;
      case "proyectos":
      case "cd proyectos":
        res = go("/proyectos", "~/proyectos");
        break;
      case "sobre-mi":
      case "cd sobre-mi":
        res = go("/sobre-mi", "~/sobre-mi");
        break;
      case "trayectoria":
      case "cd trayectoria":
        res = go("/trayectoria", "~/trayectoria");
        break;
      case "contacto":
      case "cd contacto":
        res = go("/contacto", "~/contacto");
        break;
      case "chiste":
      case "cat chistes.txt":
        res = out(jokes[joke % jokes.length]);
        setJoke((j) => j + 1);
        break;
      case "cuantico":
      case "cuántico":
        res = out("|ψ⟩ = (|0⟩ + |1⟩) / √2", "mitad sí, mitad no. como mis planes del fin de semana.");
        break;
      case "github":
        res = out(
          <a href={links.github} target="_blank" rel="noopener">
            github.com/DvvSalome ↗
          </a>,
        );
        break;
      case "sudo contratar":
        res = out(
          "[sudo] contraseña para visitante: ********",
          "✓ permiso concedido.",
          <Link href="/contacto">escríbeme → /contacto</Link>,
        );
        break;
      case "contratar":
        res = out("permiso denegado. prueba con sudo 😏");
        break;
      case "rm -rf /":
      case "sudo rm -rf /":
        res = out("buen intento.");
        break;
      case "exit":
        res = out("no te vayas todavía, faltan los proyectos.");
        break;
      default:
        res = out(`comando no encontrado: ${raw.trim()}. escribe 'ayuda'.`);
    }
    setLines((l) => [...l, echo, ...res].slice(-40));
  };

  const onKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      run(value);
      if (value.trim()) setHistory((h) => [value, ...h].slice(0, 20));
      setValue("");
      setHIndex(-1);
    } else if (e.key === "ArrowUp" && history.length) {
      e.preventDefault();
      const i = Math.min(hIndex + 1, history.length - 1);
      setHIndex(i);
      setValue(history[i] ?? "");
    } else if (e.key === "ArrowDown" && hIndex >= 0) {
      e.preventDefault();
      const i = hIndex - 1;
      setHIndex(i);
      setValue(i >= 0 ? (history[i] ?? "") : "");
    }
  };

  let budget = typed;
  return (
    <div className="term" ref={ref} onClick={() => ready && inputRef.current?.focus()}>
      <div className="win__bar" aria-hidden="true">
        <span className="win__dots">
          <i />
          <i />
          <i />
        </span>
        <span className="win__title">salome@medellin: ~</span>
      </div>
      <div className="term__body" ref={bodyRef}>
        <p className="vh">Terminal interactiva. Escribe ayuda para ver los comandos.</p>
        <div aria-hidden="true">
          {terminal.map((line) => {
            if (budget <= 0) return null;
            const shown = line.cmd.slice(0, budget);
            const done = budget > line.cmd.length;
            budget -= line.cmd.length + 1;
            return (
              <div key={line.cmd}>
                <p>
                  <span className="term__prompt">❯</span> {shown}
                  {!done && <span className="term__caret" />}
                </p>
                {done && line.out.map((o) => <p key={o} className="term__out">{o}</p>)}
              </div>
            );
          })}
        </div>
        <div aria-live="polite">
          {lines.map((l, i) =>
            l.kind === "cmd" ? (
              <p key={i}>
                <span className="term__prompt">❯</span> {l.node}
              </p>
            ) : (
              <p key={i} className="term__out">
                {l.node}
              </p>
            ),
          )}
        </div>
        {ready && (
          <p className="term__input">
            <span className="term__prompt" aria-hidden="true">
              ❯
            </span>
            <input
              ref={inputRef}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={onKey}
              aria-label="Escribe un comando. Prueba con ayuda."
              placeholder="escribe ayuda"
              spellCheck={false}
              autoComplete="off"
              autoCapitalize="off"
            />
          </p>
        )}
      </div>
    </div>
  );
}
