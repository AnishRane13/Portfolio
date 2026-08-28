import SectionHeading from "./SectionHeading";

const groups = [
  {
    title: "CORE FRONTEND",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Redux Toolkit",
      "React Native",
      "Preact",
      "Tailwind CSS",
    ],
  },
  {
    title: "BACKEND & APIS",
    items: [
      "Node.js",
      "NestJS",
      "Express.js",
      "Deno",
      "Python",
      "REST APIs",
      "WebSockets",
      "HubL",
    ],
  },
  {
    title: "DATABASES",
    items: ["PostgreSQL", "MongoDB", "DynamoDB", "Redis"],
  },
  {
    title: "CLOUD & DEVOPS",
    items: [
      "AWS Cognito",
      "AWS Lambda",
      "S3",
      "CloudFront",
      "Azure",
      "Docker",
      "NGINX",
      "Git",
      "Vite",
    ],
  },
  {
    title: "AI & INTEGRATIONS",
    items: [
      "Anthropic API",
      "OpenAI API",
      "Stripe",
      "Razorpay",
      "Claude Code",
      "Cursor",
    ],
  },
  {
    title: "TESTING & TOOLING",
    items: [
      "Jest",
      "React Testing Library",
      "Code-splitting",
      "Lazy loading",
      "HubSpot CMS",
    ],
  },
];

const Skills = () => (
  <section id="skills" className="border-b border-line py-24 lg:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-10">
      <SectionHeading
        index="02"
        kicker="SKILLS"
        title="Technical"
        accent="Skills"
      />

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((group, i) => (
          <div
            key={group.title}
            className="group border border-line bg-panel p-7 transition-colors hover:border-line-bright"
            data-aos="fade-up"
            data-aos-delay={(i % 3) * 100}
          >
            <div className="mb-6 flex items-baseline justify-between">
              <h3 className="text-xs tracking-[0.25em] text-chalk">
                {group.title}
              </h3>
              <span className="text-[10px] text-mist transition-colors group-hover:text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="border border-line-bright/60 px-3 py-2 text-[11px] text-mist transition-colors hover:border-accent hover:text-accent"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
