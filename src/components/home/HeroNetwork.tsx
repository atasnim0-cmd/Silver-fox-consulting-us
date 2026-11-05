"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

/**
 * Hero diagram: the parts of an environment an attacker targets, all connected to
 * one hub, with activity pulsing along the lines. Animated with anime.js, which is
 * loaded lazily so it never delays the first paint. Shows a still diagram when the
 * visitor prefers reduced motion, and pauses itself when off screen.
 */

const HUB = { x: 260, y: 220 };
const NODES = [
  { label: "Identity", x: 260, y: 62, anchor: "middle", dy: -24 },
  { label: "Cloud", x: 400, y: 142, anchor: "start", dx: 24 },
  { label: "Endpoints", x: 400, y: 298, anchor: "start", dx: 24 },
  { label: "Data", x: 260, y: 378, anchor: "middle", dy: 36 },
  { label: "Network", x: 120, y: 298, anchor: "end", dx: -24 },
  { label: "Applications", x: 120, y: 142, anchor: "end", dx: -24 },
] as const;

function spoke(n: { x: number; y: number }) {
  const cx = (n.x + HUB.x) / 2 + (n.y - HUB.y) * 0.16;
  const cy = (n.y + HUB.y) / 2 - (n.x - HUB.x) * 0.16;
  return `M${n.x} ${n.y} Q${cx.toFixed(1)} ${cy.toFixed(1)} ${HUB.x} ${HUB.y}`;
}

const RING = `M${NODES.map((n) => `${n.x} ${n.y}`).join(" L")} Z`;

type Playable = { pause: () => unknown; play: () => unknown };

export function HeroNetwork() {
  const root = useRef<HTMLDivElement>(null);
  const anims = useRef<Playable[]>([]);
  const userPaused = useRef(false);
  const [paused, setPaused] = useState(false);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(min-width: 1024px)").matches) return;

    let cancelled = false;
    let revert: (() => void) | undefined;
    let io: IntersectionObserver | undefined;

    import("animejs").then(({ createScope, animate, svg, stagger }) => {
      if (cancelled || !root.current) return;
      setAnimated(true);
      const scope = createScope({ root: root.current }).add(() => {
        const spokes = Array.from(el.querySelectorAll<SVGPathElement>("[data-spoke]"));
        const list: Playable[] = [];
        animate(svg.createDrawable("[data-spoke]"), {
          draw: ["0 0", "0 1"],
          duration: 1000,
          delay: stagger(110),
          ease: "inOutQuad",
        });
        animate("[data-node]", {
          opacity: [0, 1],
          scale: [0.6, 1],
          duration: 650,
          delay: stagger(110, { start: 250 }),
          ease: "outBack",
        });
        animate("[data-hub]", { opacity: [0, 1], scale: [0.85, 1], duration: 700, ease: "outQuad" });
        list.push(
          animate("[data-hub-ring]", {
            scale: [1, 1.5],
            opacity: [0.55, 0],
            duration: 2600,
            loop: true,
            ease: "outQuad",
          }),
        );
        el.querySelectorAll<SVGCircleElement>("[data-pulse]").forEach((dot, i) => {
          list.push(
            animate(dot, {
              ...svg.createMotionPath(spokes[i]),
              opacity: [0, 1, 1, 0],
              duration: 2400,
              delay: 1300 + i * 380,
              loopDelay: 900,
              loop: true,
              ease: "inOutSine",
            }),
          );
        });
        anims.current = list;
      });
      revert = () => scope.revert();

      // Save CPU and battery: run only while the diagram is on screen.
      io = new IntersectionObserver(([entry]) => {
        if (userPaused.current) return;
        anims.current.forEach((a) => (entry.isIntersecting ? a.play() : a.pause()));
      });
      io.observe(el);
    });

    return () => {
      cancelled = true;
      io?.disconnect();
      revert?.();
    };
  }, []);

  const toggle = () => {
    const next = !paused;
    userPaused.current = next;
    setPaused(next);
    anims.current.forEach((a) => (next ? a.pause() : a.play()));
  };

  return (
    <div
      ref={root}
      className="relative rounded-2xl border border-white/10 bg-navy-950/55 p-5 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.7)] backdrop-blur-md"
    >
      <svg
        viewBox="-70 0 660 440"
        className="h-auto w-full"
        role="img"
        aria-label="Diagram of identity, cloud, endpoints, data, network and applications, all connected to one monitored environment."
      >
        <defs>
          <radialGradient id="hub-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#6f97f2" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#6f97f2" stopOpacity="0" />
          </radialGradient>
        </defs>

        <path d={RING} fill="none" stroke="rgba(255,255,255,0.09)" strokeDasharray="3 6" />

        {NODES.map((n) => (
          <path
            key={`s-${n.label}`}
            data-spoke=""
            d={spoke(n)}
            fill="none"
            stroke="rgba(111,151,242,0.55)"
            strokeWidth="1.25"
          />
        ))}

        <circle cx={HUB.x} cy={HUB.y} r="70" fill="url(#hub-glow)" />
        <circle
          data-hub-ring=""
          cx={HUB.x}
          cy={HUB.y}
          r="34"
          fill="none"
          stroke="#6f97f2"
          strokeOpacity="0.5"
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        />
        <g data-hub="" style={{ transformBox: "fill-box", transformOrigin: "center" }}>
          <circle cx={HUB.x} cy={HUB.y} r="34" fill="#13275c" stroke="#6f97f2" strokeWidth="1.5" />
          <g transform={`translate(${HUB.x - 18} ${HUB.y - 18}) scale(0.225)`} fill="#ffffff">
            <g transform="translate(32 22)">
              <path d="M0 56 68 0 56 42 0 108Z" />
              <path d="M32 76 72 44 96 116Z" />
            </g>
          </g>
        </g>

        {NODES.map((n) => (
          <g key={n.label} data-node="" style={{ transformBox: "fill-box", transformOrigin: "center" }}>
            <circle cx={n.x} cy={n.y} r="15" fill="#0a1528" stroke="rgba(255,255,255,0.22)" />
            <circle cx={n.x} cy={n.y} r="5" fill="#6f97f2" />
            <text
              x={n.x + ("dx" in n ? n.dx : 0)}
              y={n.y + ("dy" in n ? n.dy : 5)}
              textAnchor={n.anchor}
              fill="#d3dae4"
              fontSize="13"
              fontWeight="600"
              letterSpacing="0.06em"
              style={{ textTransform: "uppercase" }}
            >
              {n.label}
            </text>
          </g>
        ))}

        {NODES.map((n) => (
          <circle key={`p-${n.label}`} data-pulse="" r="3.5" fill="#a6c0f8" opacity="0" />
        ))}
      </svg>

      {animated && (
        <button
          type="button"
          onClick={toggle}
          aria-pressed={paused}
          aria-label={paused ? "Play animation" : "Pause animation"}
          className="press absolute bottom-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-silver-200 hover:border-white/40 hover:text-white"
        >
          {paused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
        </button>
      )}
    </div>
  );
}
