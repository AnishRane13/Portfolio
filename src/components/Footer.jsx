import { Github, Linkedin, Twitter, ArrowUp } from "lucide-react";

const socials = [
  { Icon: Github, href: "https://github.com/AnishRane13", label: "GitHub" },
  {
    Icon: Linkedin,
    href: "https://www.linkedin.com/in/anish-rane13/",
    label: "LinkedIn",
  },
  { Icon: Twitter, href: "https://x.com/Anish_Rane_178", label: "X" },
];

const Footer = () => (
  <footer className="border-t border-line py-12">
    <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-10">
      <div>
        <p className="font-display text-lg tracking-tight">ANISH RANE</p>
        <p className="mt-2 text-[10px] tracking-[0.25em] text-mist">
          FULL-STACK DEVELOPER • MUMBAI, INDIA
        </p>
      </div>

      <div className="flex items-center gap-3">
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
        <a
          href="#home"
          aria-label="Back to top"
          className="border border-line p-3 text-mist transition-colors hover:border-accent hover:text-accent"
        >
          <ArrowUp className="h-4 w-4" />
        </a>
      </div>

      <p className="text-[10px] tracking-[0.25em] text-mist">
        © {new Date().getFullYear()} — BUILT WITH REACT + TAILWIND
      </p>
    </div>
  </footer>
);

export default Footer;
