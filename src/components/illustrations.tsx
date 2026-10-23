import type { ComponentType } from "react";
import type { ArtKey } from "@/data/content";

const VIEW = "0 0 400 260";

function Bitcoin() {
  return (
    <svg viewBox={VIEW} aria-hidden="true">
      <g data-shade>
        <g transform="translate(-7 7)">
          <circle cx="200" cy="128" r="62" className="f" />
          <circle cx="66" cy="160" r="8" className="f" />
          <circle cx="334" cy="98" r="8" className="f" />
        </g>
      </g>
      <ellipse cx="200" cy="128" rx="160" ry="40" transform="rotate(-12 200 128)" className="s dash" />
      <circle cx="200" cy="128" r="62" className="fb" />
      <circle cx="200" cy="128" r="62" className="s" />
      <circle cx="200" cy="128" r="49" className="s s-thin dash" />
      <path d="M184 98 V158 M192 90 V98 M206 90 V98 M192 158 V166 M206 158 V166 M180 98 H212 Q228 98 228 113 Q228 127 212 127 H184 M184 127 H216 Q233 127 233 142.5 Q233 158 216 158 H180" className="s" />
      <path d="M42 150 A160 40 -12 0 0 120 172" className="s dash" />
      <circle cx="66" cy="160" r="8" className="s fb" />
      <circle cx="334" cy="98" r="8" className="s fb" />
      <path d="M84 44 V60 M76 52 H92 M330 196 V212 M322 204 H338" className="s s-thin" />
    </svg>
  );
}

function Grover() {
  return (
    <svg viewBox={VIEW} aria-hidden="true">
      <g data-shade>
        <g transform="translate(-7 7)">
          <circle cx="118" cy="128" r="72" className="f" />
          <rect x="298" y="70" width="20" height="150" className="f" />
        </g>
      </g>
      <circle cx="118" cy="128" r="72" className="fb" />
      <circle cx="118" cy="128" r="72" className="s" />
      <ellipse cx="118" cy="128" rx="72" ry="20" className="s s-thin dash" />
      <path d="M118 46 V210" className="s s-thin" />
      <path d="M118 128 L166 80" className="s" />
      <circle cx="166" cy="80" r="7" className="fl" />
      <path d="M226 220 H390" className="s" />
      <rect x="234" y="190" width="20" height="30" className="s fb" />
      <rect x="266" y="190" width="20" height="30" className="s fb" />
      <rect x="298" y="70" width="20" height="150" className="s fb" />
      <rect x="330" y="190" width="20" height="30" className="s fb" />
      <rect x="362" y="190" width="20" height="30" className="s fb" />
      <path d="M308 40 V58 M300 49 H316" className="s s-thin" />
    </svg>
  );
}

function Trophy() {
  return (
    <svg viewBox={VIEW} aria-hidden="true">
      <path d="M40 10 L150 196 M360 10 L250 196" className="s s-thin dash" />
      <g data-shade>
        <g transform="translate(-7 7)">
          <path d="M160 54 H240 V86 Q240 138 200 144 Q160 138 160 86Z" className="f" />
          <rect x="168" y="168" width="64" height="18" rx="3" className="f" />
        </g>
      </g>
      <path d="M160 54 H240 V86 Q240 138 200 144 Q160 138 160 86Z" className="s fb" />
      <path d="M160 68 Q128 68 130 94 Q132 114 162 114 M240 68 Q272 68 270 94 Q268 114 238 114" className="s" />
      <path d="M192 144 V168 M208 144 V168" className="s" />
      <rect x="168" y="168" width="64" height="18" rx="3" className="s fb" />
      <path d="M200 74 L206 88 L221 89 L209 98 L213 113 L200 105 L187 113 L191 98 L179 89 L194 88Z" className="fl" />
      <path d="M50 198 H350 M70 198 V232 M330 198 V232 M50 232 H350" className="s" />
    </svg>
  );
}

function Laptop() {
  return (
    <svg viewBox={VIEW} aria-hidden="true">
      <path d="M298 48 Q240 22 200 40" className="s s-thin dash" />
      <g data-shade>
        <g transform="translate(-7 7)">
          <rect x="108" y="64" width="184" height="114" rx="9" className="f" />
          <path d="M300 46 L362 22 L340 78Z" className="f" />
        </g>
      </g>
      <rect x="108" y="64" width="184" height="114" rx="9" className="s fb" />
      <rect x="122" y="78" width="156" height="86" rx="4" className="s s-thin" />
      <text x="200" y="136" textAnchor="middle" fontFamily="Bitter, Georgia, serif" fontWeight="700" fontSize="40" fill="var(--line)">
        48h
      </text>
      <path d="M86 188 H314 L300 204 H100Z" className="s fb" />
      <path d="M300 46 L362 22 L340 78 L324 58Z M324 58 L362 22" className="s fb" />
    </svg>
  );
}

function Beach() {
  const wave = "M20 214 Q45 200 70 214 T120 214 T170 214 T220 214 T270 214 T320 214 T370 214";
  return (
    <svg viewBox={VIEW} aria-hidden="true">
      <g data-shade>
        <g transform="translate(-7 7)">
          <circle cx="292" cy="70" r="36" className="f" />
          <path d={`${wave} V250 H20Z`} className="f" />
        </g>
      </g>
      <circle cx="292" cy="70" r="36" className="s fb" />
      <path d="M292 20 V8 M342 70 H354 M327 35 L336 26 M327 105 L336 114" className="s s-thin" />
      <path d="M122 214 Q134 150 120 92 M140 214 Q152 150 136 90" className="s" />
      <path d="M128 92 Q96 66 58 94 Q92 84 128 92 Q160 58 202 80 Q164 78 128 92 Q118 52 82 46 Q110 66 128 92 Q150 104 168 140 Q140 112 128 92" className="s fb" />
      <path d={wave} className="s" />
      <path d="M50 238 Q75 226 100 238 T150 238 T200 238 T250 238 T300 238 T350 238" className="s s-thin dash" />
    </svg>
  );
}

export const illustrations: Record<ArtKey, ComponentType> = {
  bitcoin: Bitcoin,
  grover: Grover,
  trophy: Trophy,
  laptop: Laptop,
  beach: Beach,
};
