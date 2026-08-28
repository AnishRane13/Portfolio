import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Profile", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Work", href: "#experience" },
  { name: "Platforms", href: "#platforms" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Certs", href: "#certifications" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll spy: highlight the section currently filling the viewport.
  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-ink/90 backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex h-20 items-center justify-between">
          {/* Monogram */}
          <a href="#home" className="group flex items-center gap-4">
            <span className="font-display text-2xl tracking-tight text-chalk">
              AR
            </span>
            <span className="hidden h-4 w-px bg-line-bright sm:block" />
            <span className="hidden text-[11px] tracking-[0.3em] text-mist transition-colors group-hover:text-accent sm:block">
              FULL-STACK DEVELOPER
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-6 lg:flex xl:gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-[11px] tracking-[0.2em] uppercase transition-colors ${
                  active === item.href
                    ? "text-accent"
                    : "text-mist hover:text-chalk"
                }`}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-flame px-6 py-3 text-[11px] font-bold tracking-[0.2em] text-ink uppercase transition-colors hover:bg-chalk"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile trigger */}
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            className="border border-line p-3 text-chalk transition-colors hover:border-accent hover:text-accent lg:hidden"
          >
            {isOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-line bg-ink/95 backdrop-blur-md transition-all duration-500 lg:hidden ${
          isOpen ? "max-h-[420px]" : "max-h-0 border-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 py-4">
          {navItems.map((item, i) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 border-b border-line/60 py-4 text-xs tracking-[0.2em] text-mist uppercase transition-colors hover:text-accent"
            >
              <span className="text-accent/60">
                {String(i + 1).padStart(2, "0")}
              </span>
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-5 mb-2 block bg-flame py-4 text-center text-[11px] font-bold tracking-[0.2em] text-ink uppercase"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
