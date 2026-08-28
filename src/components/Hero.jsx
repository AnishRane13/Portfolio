import { useEffect, useState } from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

// Each node of the diagram cycles through the stack it stands for.
const nodes = [
  {
    x: 26,
    y: 22,
    tone: "accent",
    items: ["NEXT.JS", "REACT 19", "TYPESCRIPT", "TAILWIND", "REDUX", "VITE"],
  },
  {
    x: 76,
    y: 22,
    tone: "flame",
    items: ["NESTJS", "NODE.JS", "EXPRESS", "DENO", "REST API", "PYTHON"],
  },
  {
    x: 20,
    y: 50,
    tone: "accent",
    items: ["POSTGRESQL", "MONGODB", "DYNAMODB", "REDIS"],
  },
  {
    x: 26,
    y: 78,
    tone: "flame",
    items: ["AWS", "LAMBDA", "COGNITO", "CLOUDFRONT", "DOCKER", "NGINX"],
  },
  {
    x: 76,
    y: 78,
    tone: "accent",
    live: true,
    items: ["AI AGENTS", "ANTHROPIC", "OPENAI", "WEBSOCKET", "STREAMING"],
  },
];

// Live edges carry a flowing dash plus a travelling arrowhead; dim edges stay static.
const edges = [
  { x1: 26, y1: 22, x2: 76, y2: 22, tone: "accent", live: true, delay: 0 },
  { x1: 26, y1: 22, x2: 26, y2: 78, tone: "accent", live: true, delay: 0.8 },
  { x1: 26, y1: 78, x2: 76, y2: 78, tone: "flame", live: true, delay: 1.6 },
  { x1: 76, y1: 22, x2: 76, y2: 78, tone: "accent", live: true, delay: 2.4 },
  { x1: 26, y1: 22, x2: 76, y2: 78, tone: "dim" },
  { x1: 76, y1: 22, x2: 26, y2: 78, tone: "dim" },
];

const strokes = {
  accent: "#2dd4bf",
  flame: "#ff5a1f",
  dim: "#2c3030",
};

const socials = [
  { Icon: Github, href: "https://github.com/AnishRane13", label: "GitHub" },
  {
    Icon: Linkedin,
    href: "https://www.linkedin.com/in/anish-rane13/",
    label: "LinkedIn",
  },
  { Icon: Twitter, href: "https://x.com/Anish_Rane_178", label: "X" },
];

const stats = [
  { value: "2.10 YRS", label: "EXPERIENCE" },
  { value: "6+", label: "PLATFORMS SHIPPED" },
  { value: "60%", label: "FASTER AD CREATION" },
];

const CYCLE_MS = 3600;
const STAGGER_MS = 900;

// Fixed-size box so rotating labels crossfade without shifting the diagram.
const DiagramNode = ({ node, index }) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    let cycle;
    const stagger = setTimeout(() => {
      cycle = setInterval(() => {
        setActive((current) => (current + 1) % node.items.length);
      }, CYCLE_MS);
    }, index * STAGGER_MS);

    return () => {
      clearTimeout(stagger);
      clearInterval(cycle);
    };
  }, [index, node.items.length]);

  return (
    <div
      className={`absolute flex h-[46px] w-[124px] -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden border bg-ink sm:h-[54px] sm:w-[164px] ${
        node.tone === "flame" ? "border-flame" : "border-accent"
      }`}
      style={{ left: `${node.x}%`, top: `${node.y}%` }}
    >
      {node.items.map((item, i) => (
        <span
          key={item}
          aria-hidden={i !== active}
          className={`absolute text-[10px] tracking-[0.18em] whitespace-nowrap text-chalk transition-all duration-700 ease-out sm:text-xs ${
            i === active
              ? "translate-y-0 opacity-100 blur-0"
              : "-translate-y-1.5 opacity-0 blur-[3px]"
          }`}
        >
          {item}
        </span>
      ))}

      {node.live && (
        <span className="absolute -top-1 -right-1 h-2 w-2 animate-pulse-dot bg-flame" />
      )}
    </div>
  );
};

const Hero = () => (
  <section id="home" className="relative overflow-hidden border-b border-line">
    <div className="absolute inset-0 bg-grid opacity-70" />
    <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
    <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-flame/5 blur-3xl" />

    <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 pt-36 pb-24 lg:grid-cols-2 lg:gap-12 lg:px-10 lg:pt-40 lg:pb-32">
      {/* Left: identity */}
      <div>
        <p className="mb-8 text-[11px] tracking-[0.3em] text-mist">
          <span className="text-accent">-- </span>
          FULL-STACK DEVELOPER
          <span className="mx-2 text-line-bright">•</span>
          MUMBAI, INDIA
        </p>

        <h1 className="text-6xl leading-[0.88] tracking-tight sm:text-7xl lg:text-8xl">
          Anish
          <br />
          Rane
          <br />
          Builds <span className="text-accent">AI apps.</span>
        </h1>

        <p className="mt-10 text-sm leading-relaxed text-mist">
          2.10 years. React. Next.js. NestJS. Real-time UIs.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="bg-flame px-8 py-4 text-[11px] font-bold tracking-[0.2em] text-ink uppercase transition-colors hover:bg-chalk"
          >
            Get In Touch
          </a>
          <a
            href="#experience"
            className="border border-line-bright px-8 py-4 text-[11px] font-bold tracking-[0.2em] text-chalk uppercase transition-colors hover:border-accent hover:text-accent"
          >
            View Experience
          </a>
        </div>

        <div className="mt-12 flex gap-3">
          {socials.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="border border-line p-3 text-mist transition-colors hover:border-accent hover:text-accent"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-6 border-t border-line pt-8">
          {stats.map(({ value, label }, i) => (
            <div key={label} className="flex items-center gap-10">
              {i > 0 && <span className="hidden h-8 w-px bg-line sm:block" />}
              <div>
                <p className="text-sm text-accent">{value}</p>
                <p className="mt-1 text-[10px] tracking-[0.25em] text-mist">
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: architecture diagram */}
      <div className="relative aspect-square w-full border border-line bg-panel/60">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {edges.map((edge, i) => {
            const color = strokes[edge.tone];
            const path = `M${edge.x1} ${edge.y1} L${edge.x2} ${edge.y2}`;

            return (
              <g key={i}>
                {/* base track */}
                <line
                  x1={edge.x1}
                  y1={edge.y1}
                  x2={edge.x2}
                  y2={edge.y2}
                  stroke={color}
                  strokeWidth="1"
                  vectorEffect="non-scaling-stroke"
                  opacity={edge.tone === "dim" ? 1 : 0.25}
                />

                {edge.live && (
                  <>
                    {/* flowing dashes */}
                    <line
                      className="animate-dash"
                      x1={edge.x1}
                      y1={edge.y1}
                      x2={edge.x2}
                      y2={edge.y2}
                      stroke={color}
                      strokeWidth="1"
                      vectorEffect="non-scaling-stroke"
                      opacity="0.8"
                    />

                    {/* travelling arrowhead */}
                    <polygon
                      className="flow-arrow"
                      points="0,-1.7 3.2,0 0,1.7"
                      fill={color}
                    >
                      <animateMotion
                        dur="3.2s"
                        begin={`${edge.delay}s`}
                        repeatCount="indefinite"
                        rotate="auto"
                        path={path}
                      />
                    </polygon>
                  </>
                )}
              </g>
            );
          })}
        </svg>

        {nodes.map((node, i) => (
          <DiagramNode key={i} node={node} index={i} />
        ))}

        <p className="absolute bottom-4 left-4 text-[10px] tracking-[0.25em] text-mist">
          STREAMING ARCHITECTURE
        </p>
      </div>
    </div>
  </section>
);

export default Hero;
