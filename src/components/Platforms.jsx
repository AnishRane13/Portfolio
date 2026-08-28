import {
  Landmark,
  Database,
  ShieldCheck,
  LayoutTemplate,
  Sparkles,
  Building2,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

// Client platforms shipped across Mactores and Chintan Systems.
const platforms = [
  {
    icon: Landmark,
    title: "Water Street AI",
    subtitle: "PRIVATE EQUITY DEAL PLATFORM",
    description:
      "Deal-centric workspace for a healthcare private equity firm: documents, legal review and NDA redaction, financial modeling, memo drafting and target sourcing. Multi-session AI chat streams over WebSockets while users move freely across the app.",
    stack: ["Next.js 16", "React 19", "TypeScript", "MSAL", "S3 + CloudFront"],
  },
  {
    icon: Database,
    title: "Boeing UDP",
    subtitle: "DATA INGESTION CONSOLE",
    description:
      "Operator console for SeaTunnel as Boeing's ingestion layer. Register sources and sinks, design pipelines with table discovery and transform DAGs, then watch runs on live dashboards — pipeline metrics, throughput charts and cluster health, all socket-driven.",
    stack: ["React", "Vite", "WebSockets", "HOCON", "REST"],
  },
  {
    icon: ShieldCheck,
    title: "Aedeon",
    subtitle: "AI WEB APPLICATION",
    description:
      "Next.js application on AWS with invitation-based access: Cognito sign-up, admin approval, Lambda-generated 48-hour login links persisted in DynamoDB, plus a WebSocket chat that answers questions across a connected repository and dataset.",
    stack: ["Next.js", "Cognito", "Lambda", "DynamoDB", "WebSockets"],
  },
  {
    icon: LayoutTemplate,
    title: "agilityx.ai + mactores.com",
    subtitle: "HUBSPOT CMS",
    description:
      "Designed and shipped both marketing sites on HubSpot. Custom HubL modules and theme templates give content managers navbar, footer and drag-and-drop sections by default, wired to HubSpot forms and automation workflows.",
    stack: ["HubL", "HubSpot CMS", "v0", "Forms", "Workflows"],
  },
  {
    icon: Sparkles,
    title: "Pixel Plus AI",
    subtitle: "AI AD & MARKETING STUDIO",
    description:
      "Ad generation studio with a template editor, brand kit (colour pickers, Google Fonts, brand-book parsing) and a chat-style generator across ad maker, ad scaler and concept genie. Marketing Genie turns a 10-question intake into a full marketing kit, gated by Stripe credit plans.",
    stack: ["React", "NestJS", "TypeScript", "OpenAI", "Stripe", "Polotno"],
  },
  {
    icon: Building2,
    title: "AAF + Chaos",
    subtitle: "EVENTS & SOCIETY MANAGEMENT",
    description:
      "Two production line-of-business apps: an events platform with OTP registration, Redis sessions, Razorpay payments and type-ahead admin search, and a society management suite covering units, members, bill heads and bill templates with a validated formula calculator.",
    stack: ["React", "Deno", "PostgreSQL", "Redis", "Razorpay", "Tailwind"],
  },
];

const Platforms = () => (
  <section id="platforms" className="border-b border-line py-24 lg:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-10">
      <SectionHeading
        index="04"
        kicker="PLATFORMS"
        title="Platform"
        accent="Work"
      />

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {platforms.map(
          ({ icon: Icon, title, subtitle, description, stack }, i) => (
            <div
              key={title}
              className="group flex flex-col border border-line bg-panel p-8 transition-colors hover:border-line-bright"
              data-aos="fade-up"
              data-aos-delay={(i % 3) * 100}
            >
              <Icon className="h-6 w-6 text-accent" />

              <h3 className="mt-7 text-2xl tracking-tight">{title}</h3>
              <p className="mt-2 text-[10px] tracking-[0.25em] text-flame">
                {subtitle}
              </p>

              <p className="mt-6 flex-1 text-sm leading-[1.85] text-mist">
                {description}
              </p>

              <div className="mt-7 flex flex-wrap gap-2 border-t border-line pt-6">
                {stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] tracking-[0.15em] text-mist"
                  >
                    [{tech}]
                  </span>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  </section>
);

export default Platforms;
