import SectionHeading from "./SectionHeading";

const roles = [
  {
    company: "Mactores Cognition",
    role: "Full-Stack Developer",
    period: "Nov 2025 — Present",
    domain: "AI & Data Platforms",
    current: true,
    points: [
      "Built and owned an AI-powered private equity platform (Next.js 16, React 19, TypeScript, Tailwind 4) covering legal review, investment memos, financial modeling and target sourcing for institutional users.",
      "Architected a persistent chat workspace — one WebSocket per deal, concurrent streaming sessions, state surviving route changes — so active AI responses are never interrupted by navigation.",
      "Integrated agentic AI due-diligence workflows with Anthropic APIs, AWS Lambda and DynamoDB, including document upload, background processing and normalized status polling.",
      "Designed invitation-based onboarding on AWS Cognito with RBAC: admin approve/reject, Lambda-generated 48-hour login links, and timestamped state in DynamoDB.",
      "Delivered the Boeing Unified Data Platform ingestion console: pipeline wizard with table discovery, transform DAGs, cron scheduling, per-table metrics and QPS throughput charts.",
      "Replaced polling with a shared reconnecting WebSocket client (backoff, wss) across dashboard, runs, pipeline metrics and cluster health panels.",
      "Unified OneDrive export behind a single upload service used by legal review, target sourcing, financial modeling and MMM reports.",
      "Shipped marketing sites on HubSpot CMS — custom HubL modules for mactores.com and the agilityx.ai theme, drag-and-drop sections, forms and automation workflows.",
      "Deployed the platform as a Next.js static export on S3 + CloudFront with build-time environment injection and no server runtime.",
    ],
  },
  {
    company: "Chintan Systems",
    role: "Software Developer",
    period: "Jan 2024 — Nov 2025",
    domain: "AI SaaS & Fintech",
    points: [
      "Architected an AI-powered ad generation platform (React.js, Vite, NestJS, PostgreSQL) with a custom WYSIWYG template editor and real-time preview — cutting ad creation time by 60%.",
      "Integrated OpenAI and Anthropic APIs for a chat-driven ad workflow and auto-populated templates, reducing manual content input by 40%.",
      "Rebuilt brand-book parsing from OCR to pdfplumber, dropping colour extraction from 7-8 minutes to 30-40 seconds, and named extracted hex codes through an LLM pass.",
      "Built Marketing Genie end-to-end (React + NestJS): a 10-question intake that generates ICPs, landing copy, messaging frameworks, content calendars, email variants and SEO clusters.",
      "Implemented Stripe and Razorpay with webhook-driven transaction flows — four credit-based subscription plans on monthly or yearly validity.",
      "Delivered a full-stack fintech app end-to-end (React, Deno, PostgreSQL, Redis): email + OTP registration, role-aware session management, type-ahead search APIs with pagination and admin dashboards.",
      "Built the society management suite (React, Tailwind, Deno) — users, members, units, bill heads and bill templates, including a formula calculator popup that validates expressions before billing.",
      "Shipped and operated the client-facing sites: multilingual React/Preact pages with Fluent, reCAPTCHA v2 forms, NGINX + Certbot TLS, Docker containers and UFW hardening on the deployment VM.",
      "Published reusable components as Deno modules — an address tree widget, slider, drawer and type-ahead input — consumable by any application.",
    ],
  },
];

const Experience = () => (
  <section id="experience" className="border-b border-line py-24 lg:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-10">
      <SectionHeading index="03" kicker="WORK" title="Experience" />

      <div className="mt-16 space-y-16">
        {roles.map((item) => (
          <div key={item.company} data-aos="fade-up">
            <div className="flex flex-wrap items-center gap-4">
              <h3 className="text-3xl tracking-tight sm:text-4xl">
                {item.company}
              </h3>
              {item.current && (
                <span className="flex items-center gap-2 border border-accent/50 px-3 py-1.5 text-[10px] tracking-[0.2em] text-accent">
                  <span className="h-1.5 w-1.5 animate-pulse-dot bg-accent" />
                  CURRENT
                </span>
              )}
            </div>

            <p className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] tracking-[0.2em] text-mist uppercase">
              <span className="text-chalk">{item.role}</span>
              <span className="text-line-bright">--</span>
              <span className="text-accent">{item.period}</span>
              <span className="text-line-bright">--</span>
              <span>{item.domain}</span>
            </p>

            <ul className="mt-8 space-y-4 border-l border-line pl-6">
              {item.points.map((point) => (
                <li key={point} className="flex gap-4">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-flame" />
                  <span className="text-sm leading-[1.85] text-mist">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
