import { Award, ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

const certifications = [
  {
    issuer: "ANTHROPIC",
    title: "Claude Certified Architect — Foundations",
    issued: "APR 14, 2026",
    valid: "APR 14, 2027",
    href: "https://drive.google.com/file/d/1KAM6xKq9C3Lek2zhjKves75cTmLzNMkI/view?usp=sharing",
  },
  {
    issuer: "OPENAI",
    title: "ChatGPT Deployment Practitioner",
    issued: "AUG 25, 2026",
    valid: "AUG 25, 2027",
    href: "https://drive.google.com/file/d/1I5-loi00-qqd2pYleM60v4Z_Zaj2H4Os/view?usp=sharing",
  },
  {
    issuer: "OPENAI",
    title: "OpenAI Technical Practitioner",
    issued: "AUG 19, 2026",
    valid: "AUG 19, 2027",
    href: "https://drive.google.com/file/d/1I5-loi00-qqd2pYleM60v4Z_Zaj2H4Os/view?usp=sharing",
  },
  {
    issuer: "OPENAI",
    title: "Codex Deployment Practitioner",
    issued: "AUG 11, 2026",
    valid: "AUG 11, 2027",
    href: "https://drive.google.com/file/d/1jyzozIlH3bzaW4KZuhhlta4i5m8EOs1Y/view?usp=sharing",
  },
  {
    issuer: "OPENAI",
    title: "OpenAI Foundational Knowledge",
    issued: "AUG 11, 2026",
    valid: "AUG 11, 2027",
    href: "https://drive.google.com/file/d/1D1KbyjjK5r9_bG-29789UYV756AsdZDw/view?usp=sharing",
  },
  {
    issuer: "OPENAI",
    title: "API Deployment Practitioner",
    issued: "AUG 4, 2026",
    valid: "AUG 4, 2027",
    href: "https://drive.google.com/file/d/1a-Y35R9C-_1IanYyGL5WnD3wwBkCRKwI/view?usp=sharing",
  },
];

const Certifications = () => (
  <section id="certifications" className="border-b border-line py-24 lg:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-10">
      <SectionHeading index="07" kicker="CERTIFICATIONS" title="Certified" />

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => (
          <a
            key={cert.title}
            href={cert.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col border border-line bg-panel p-8 transition-colors hover:border-accent"
            data-aos="fade-up"
            data-aos-delay={(i % 3) * 100}
          >
            <div className="flex items-start justify-between gap-4">
              <Award className="h-5 w-5 text-accent" />
              <span className="text-[10px] tracking-[0.25em] text-flame">
                {cert.issuer}
              </span>
            </div>

            <h3 className="mt-7 flex-1 text-lg leading-tight tracking-tight transition-colors group-hover:text-accent">
              {cert.title}
            </h3>

            <div className="mt-7 flex gap-8 border-t border-line pt-6">
              <div>
                <p className="text-[9px] tracking-[0.2em] text-mist">ISSUED</p>
                <p className="mt-1.5 text-[11px] text-chalk">{cert.issued}</p>
              </div>
              <div>
                <p className="text-[9px] tracking-[0.2em] text-mist">
                  VALID THROUGH
                </p>
                <p className="mt-1.5 text-[11px] text-accent">{cert.valid}</p>
              </div>
            </div>

            <span className="mt-6 flex items-center gap-2 text-[10px] tracking-[0.2em] text-mist transition-colors group-hover:text-accent">
              VIEW CREDENTIAL
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
