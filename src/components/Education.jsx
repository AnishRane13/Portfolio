import SectionHeading from "./SectionHeading";

const education = [
  {
    degree: "Master's in Computer Application",
    institute: "VESIT",
    period: "Nov 2022 — May 2024",
    score: "8.5",
  },
  {
    degree: "Bachelor of Science (Information Technology)",
    institute: "Sathaye College",
    period: "Jul 2019 — May 2022",
    score: "8.24",
  },
];

const Education = () => (
  <section id="education" className="border-b border-line py-24 lg:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-10">
      <SectionHeading index="06" kicker="EDUCATION" title="Education" />

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {education.map((item, i) => (
          <div
            key={item.degree}
            className="border border-line bg-panel p-8"
            data-aos="fade-up"
            data-aos-delay={i * 100}
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <h3 className="text-xl leading-tight tracking-tight">
                  {item.institute}
                </h3>
                <p className="mt-3 text-sm text-mist">{item.degree}</p>
              </div>
              <div className="shrink-0 border border-accent/40 px-4 py-3 text-center">
                <p className="text-sm text-accent">{item.score}</p>
                <p className="mt-1 text-[9px] tracking-[0.2em] text-mist">
                  CGPA
                </p>
              </div>
            </div>

            <p className="mt-8 border-t border-line pt-6 text-[10px] tracking-[0.25em] text-mist">
              {item.period.toUpperCase()}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
