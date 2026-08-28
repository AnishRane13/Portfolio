import { Download, Mail, MapPin, Briefcase } from "lucide-react";
import SectionHeading from "./SectionHeading";

const RESUME_URL =
  "https://drive.google.com/file/d/1HF1jWGFlQxmShCXlHThIzZ9l6bQs4T3A/view?usp=sharing";

const paragraphs = [
  "I am a Full-Stack Developer with 2.9+ years of experience shipping production web applications in AI/SaaS and fintech. Currently at Mactores Cognition, I build AI-powered platforms for institutional users — private equity deal workspaces and data ingestion consoles.",
  "My work sits where dense product UI meets real-time infrastructure: React and Next.js front ends, NestJS and Node services, PostgreSQL and DynamoDB, and WebSocket streams that keep AI responses and pipeline metrics live without a single refresh button.",
  "Whether it is an agentic due-diligence workflow or a Stripe-backed lending dashboard, I treat the frontend as a product surface — typed, componentised, and accountable to whatever the backend is actually doing.",
];

const facts = [
  { icon: Briefcase, label: "ROLE", value: "Full-Stack Developer @ Mactores" },
  { icon: MapPin, label: "BASED IN", value: "Mumbai, Maharashtra, India" },
  { icon: Mail, label: "EMAIL", value: "anishrane1305@gmail.com" },
];

const About = () => (
  <section id="about" className="border-b border-line py-24 lg:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-10">
      <SectionHeading index="01" kicker="PROFILE" title="About" accent="Me" />

      <div className="mt-16 grid gap-12 lg:grid-cols-[1.6fr_1fr]">
        {/* Bio */}
        <div
          className="space-y-6 border-l-2 border-accent pl-6 lg:pl-8"
          data-aos="fade-up"
        >
          {paragraphs.map((text) => (
            <p key={text} className="text-sm leading-[1.9] text-mist">
              {text}
            </p>
          ))}
        </div>

        {/* Fact card */}
        <div
          className="border border-line bg-panel p-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p className="mb-8 text-[10px] tracking-[0.3em] text-accent">
            AT A GLANCE
          </p>

          <div className="space-y-6">
            {facts.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4">
                <Icon className="mt-0.5 h-4 w-4 shrink-0 text-flame" />
                <div className="min-w-0">
                  <p className="text-[10px] tracking-[0.25em] text-mist">
                    {label}
                  </p>
                  <p className="mt-1 truncate text-xs text-chalk">{value}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 flex items-center justify-center gap-3 border border-line-bright py-4 text-[11px] font-bold tracking-[0.2em] text-chalk uppercase transition-colors hover:border-accent hover:text-accent"
          >
            <Download className="h-4 w-4" />
            View Resume
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default About;
