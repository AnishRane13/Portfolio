import { Github, ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    id: "01",
    title: "Freelance Marketplace",
    summary:
      "Full-stack marketplace with real-time bidding, JWT auth and contract management. Live updates over WebSockets, optimized REST APIs and S3 file storage to stay responsive under real-time load.",
    stack: [
      "React.js",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS",
      "WebSockets",
      "AWS",
    ],
    github: "https://github.com/AnishRane13/Freelance-Marketplace",
  },
  {
    id: "02",
    title: "Movix",
    summary:
      "Movie discovery SPA on the TMDB API with real-time search, trending content and trailer playback. Route-based code-splitting and lazy loading improved load time by roughly 40%.",
    stack: ["React.js", "Redux Toolkit", "TMDB API", "Tailwind CSS"],
    github: "https://github.com/AnishRane13/Movix",
  },
];

const Projects = () => (
  <section id="projects" className="border-b border-line py-24 lg:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-10">
      <SectionHeading
        index="05"
        kicker="PROJECTS"
        title="Personal"
        accent="Builds"
      />

      <div className="mt-16 grid gap-6 lg:grid-cols-2">
        {projects.map((project, i) => (
          <a
            key={project.title}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col border border-line bg-panel p-8 transition-colors hover:border-accent"
            data-aos="fade-up"
            data-aos-delay={i * 100}
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-[10px] tracking-[0.3em] text-mist">
                  {project.id}
                </p>
                <h3 className="mt-4 text-2xl tracking-tight transition-colors group-hover:text-accent">
                  {project.title}
                </h3>
              </div>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-mist transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
            </div>

            <p className="mt-6 flex-1 text-sm leading-[1.85] text-mist">
              {project.summary}
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="border border-line-bright/60 px-3 py-1.5 text-[10px] tracking-[0.15em] text-mist"
                >
                  {tech}
                </span>
              ))}
            </div>

            <span className="mt-7 flex items-center gap-2 border-t border-line pt-6 text-[10px] tracking-[0.25em] text-chalk">
              <Github className="h-4 w-4" />
              VIEW SOURCE
            </span>
          </a>
        ))}
      </div>

      <a
        href="https://github.com/AnishRane13?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 inline-flex items-center gap-3 border border-line-bright px-8 py-4 text-[11px] font-bold tracking-[0.2em] text-chalk uppercase transition-colors hover:border-accent hover:text-accent"
        data-aos="fade-up"
      >
        <Github className="h-4 w-4" />
        All Repositories
      </a>
    </div>
  </section>
);

export default Projects;
