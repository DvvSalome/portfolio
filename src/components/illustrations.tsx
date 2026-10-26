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
        {"</>"}
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


/* ---------- nuevas (mismo estilo: trazo + relleno corrido) ---------- */
function Shade({ children }: { children: React.ReactNode }) {
  return (
    <g data-shade>
      <g transform="translate(-7 7)">{children}</g>
    </g>
  );
}

function Eye() {
  return (
    <svg viewBox={VIEW} aria-hidden="true">
      <Shade>
        <path d="M60 130 Q200 20 340 130 Q200 240 60 130Z" className="f" />
      </Shade>
      <path d="M60 130 Q200 20 340 130 Q200 240 60 130Z" className="s fb" />
      <circle cx="200" cy="130" r="46" className="s" />
      <circle cx="200" cy="130" r="20" className="fl" />
      <circle cx="210" cy="120" r="6" className="fb" />
      <path d="M40 40 H80 V60 M360 40 H320 V60 M40 220 H80 V200 M360 220 H320 V200" className="s" />
      <path d="M90 130 H60 M340 130 H310" className="s s-thin dash" />
    </svg>
  );
}

function Pulse() {
  return (
    <svg viewBox={VIEW} aria-hidden="true">
      <Shade>
        <path d="M200 214 Q96 150 96 96 Q96 54 138 54 Q176 54 200 90 Q224 54 262 54 Q304 54 304 96 Q304 150 200 214Z" className="f" />
      </Shade>
      <path d="M200 214 Q96 150 96 96 Q96 54 138 54 Q176 54 200 90 Q224 54 262 54 Q304 54 304 96 Q304 150 200 214Z" className="s fb" />
      <path d="M30 134 H150 L168 104 L190 168 L212 92 L230 134 H370" className="s" />
      <path d="M330 40 V64 M318 52 H342" className="s s-thin" />
    </svg>
  );
}

function Cube() {
  return (
    <svg viewBox={VIEW} aria-hidden="true">
      <Shade>
        <path d="M200 40 L290 88 V184 L200 232 L110 184 V88Z" className="f" />
      </Shade>
      <path d="M200 40 L290 88 V184 L200 232 L110 184 V88Z" className="s fb" />
      <path d="M110 88 L200 136 L290 88 M200 136 V232" className="s" />
      <path d="M155 64 L245 112 M245 64 L155 112" className="s s-thin dash" />
      <circle cx="200" cy="136" r="6" className="fl" />
      <path d="M50 70 V96 M37 83 H63 M350 180 V206 M337 193 H363" className="s s-thin" />
    </svg>
  );
}

function Brain() {
  return (
    <svg viewBox={VIEW} aria-hidden="true">
      <Shade>
        <path d="M200 52 Q150 34 128 70 Q92 74 96 112 Q72 136 98 162 Q100 200 142 204 Q168 230 200 210 Q232 230 258 204 Q300 200 302 162 Q328 136 304 112 Q308 74 272 70 Q250 34 200 52Z" className="f" />
      </Shade>
      <path d="M200 52 Q150 34 128 70 Q92 74 96 112 Q72 136 98 162 Q100 200 142 204 Q168 230 200 210 Q232 230 258 204 Q300 200 302 162 Q328 136 304 112 Q308 74 272 70 Q250 34 200 52Z" className="s fb" />
      <path d="M200 52 V210" className="s s-thin" />
      <path d="M128 70 Q150 96 132 120 M98 162 Q130 150 150 172 M272 70 Q250 96 268 120 M302 162 Q270 150 250 172" className="s" />
      <circle cx="170" cy="130" r="6" className="fl" />
      <circle cx="232" cy="110" r="6" className="fl" />
      <circle cx="226" cy="160" r="6" className="fl" />
      <path d="M170 130 L232 110 L226 160 Z" className="s s-thin dash" />
    </svg>
  );
}

function Bolt() {
  return (
    <svg viewBox={VIEW} aria-hidden="true">
      <Shade>
        <path d="M216 24 L132 146 H194 L178 236 L268 104 H206Z" className="f" />
      </Shade>
      <path d="M216 24 L132 146 H194 L178 236 L268 104 H206Z" className="s fb" />
      <rect x="62" y="70" width="44" height="120" rx="8" className="s" />
      <path d="M74 190 V214 M94 190 V214 M70 100 H98 M70 130 H98 M70 160 H98" className="s s-thin" />
      <path d="M300 80 Q340 130 300 180 M318 60 Q378 130 318 200" className="s s-thin dash" />
    </svg>
  );
}

function Scissors() {
  return (
    <svg viewBox={VIEW} aria-hidden="true">
      <Shade>
        <circle cx="120" cy="190" r="34" className="f" />
        <circle cx="280" cy="190" r="34" className="f" />
      </Shade>
      <path d="M140 164 L260 40 M260 164 L140 40" className="s" />
      <circle cx="120" cy="190" r="34" className="s fb" />
      <circle cx="280" cy="190" r="34" className="s fb" />
      <circle cx="200" cy="102" r="8" className="fl" />
      <path d="M40 60 Q70 40 100 60 M300 60 Q330 40 360 60" className="s s-thin dash" />
    </svg>
  );
}

function Leaf() {
  return (
    <svg viewBox={VIEW} aria-hidden="true">
      <Shade>
        <path d="M110 210 Q90 70 300 40 Q320 200 110 210Z" className="f" />
      </Shade>
      <path d="M110 210 Q90 70 300 40 Q320 200 110 210Z" className="s fb" />
      <path d="M110 210 Q190 140 300 40 M160 170 L150 120 M200 136 L200 90 M240 100 L250 70 M180 152 L230 160 M220 118 L272 120" className="s" />
      <path d="M60 230 Q200 200 340 230" className="s s-thin dash" />
    </svg>
  );
}

function Gamepad() {
  return (
    <svg viewBox={VIEW} aria-hidden="true">
      <Shade>
        <path d="M110 80 H290 Q350 80 356 160 Q360 214 318 212 Q290 210 270 176 H130 Q110 210 82 212 Q40 214 44 160 Q50 80 110 80Z" className="f" />
      </Shade>
      <path d="M110 80 H290 Q350 80 356 160 Q360 214 318 212 Q290 210 270 176 H130 Q110 210 82 212 Q40 214 44 160 Q50 80 110 80Z" className="s fb" />
      <path d="M110 112 V160 M86 136 H134" className="s" />
      <circle cx="282" cy="118" r="10" className="fl" />
      <circle cx="306" cy="146" r="10" className="s" />
      <circle cx="258" cy="146" r="10" className="s" />
      <path d="M180 120 H220" className="s s-thin" />
      <path d="M200 40 V62 M189 51 H211" className="s s-thin" />
    </svg>
  );
}

function Compass() {
  return (
    <svg viewBox={VIEW} aria-hidden="true">
      <Shade>
        <circle cx="200" cy="130" r="92" className="f" />
      </Shade>
      <circle cx="200" cy="130" r="92" className="s fb" />
      <circle cx="200" cy="130" r="74" className="s s-thin dash" />
      <path d="M200 64 L222 130 L200 196 L178 130Z" className="s" />
      <path d="M200 64 L222 130 H178Z" className="fl" />
      <path d="M200 26 V38 M200 222 V234 M96 130 H108 M292 130 H304" className="s" />
      <path d="M330 50 L336 64 L350 66 L340 76 L342 90 L330 83 L318 90 L320 76 L310 66 L324 64Z" className="s s-thin" />
    </svg>
  );
}

function Diamond() {
  return (
    <svg viewBox={VIEW} aria-hidden="true">
      <Shade>
        <path d="M200 30 L290 130 L200 230 L110 130Z" className="f" />
      </Shade>
      <path d="M200 30 L290 130 L200 230 L110 130Z" className="s fb" />
      <path d="M200 62 L260 130 L200 198 L140 130Z" className="s s-thin" />
      <path d="M200 30 V62 M290 130 H260 M200 230 V198 M110 130 H140" className="s" />
      <circle cx="200" cy="130" r="10" className="fl" />
      <path d="M40 60 H90 M40 76 H70 M310 184 H360 M330 200 H360" className="s s-thin" />
    </svg>
  );
}

function Chart() {
  return (
    <svg viewBox={VIEW} aria-hidden="true">
      <Shade>
        <rect x="70" y="40" width="260" height="180" rx="10" className="f" />
      </Shade>
      <rect x="70" y="40" width="260" height="180" rx="10" className="s fb" />
      <path d="M70 72 H330" className="s" />
      <circle cx="92" cy="56" r="5" className="fl" />
      <path d="M100 190 L150 150 L190 168 L240 110 L300 126" className="s" />
      <circle cx="240" cy="110" r="7" className="fl" />
      <path d="M100 100 H170 M100 118 H150" className="s s-thin" />
      <path d="M350 100 Q380 130 350 160" className="s s-thin dash" />
    </svg>
  );
}

function Chat() {
  return (
    <svg viewBox={VIEW} aria-hidden="true">
      <Shade>
        <path d="M80 50 H260 Q280 50 280 70 V150 Q280 170 260 170 H150 L110 204 V170 H80 Q60 170 60 150 V70 Q60 50 80 50Z" className="f" />
      </Shade>
      <path d="M80 50 H260 Q280 50 280 70 V150 Q280 170 260 170 H150 L110 204 V170 H80 Q60 170 60 150 V70 Q60 50 80 50Z" className="s fb" />
      <path d="M96 90 H240 M96 116 H210 M96 142 H180" className="s s-thin" />
      <path d="M300 110 H340 Q352 110 352 122 V176 Q352 188 340 188 H330 V212 L306 188 H300" className="s" />
      <circle cx="318" cy="150" r="5" className="fl" />
      <circle cx="334" cy="150" r="5" className="fl" />
    </svg>
  );
}

export const illustrations: Record<ArtKey, ComponentType> = {
  bitcoin: Bitcoin,
  grover: Grover,
  trophy: Trophy,
  laptop: Laptop,
  beach: Beach,
  eye: Eye,
  pulse: Pulse,
  cube: Cube,
  brain: Brain,
  bolt: Bolt,
  scissors: Scissors,
  leaf: Leaf,
  gamepad: Gamepad,
  compass: Compass,
  diamond: Diamond,
  chart: Chart,
  chat: Chat,
};
