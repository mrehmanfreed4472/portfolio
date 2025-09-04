import { Mail, Menu } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useActiveSection } from "@/hooks/use-active-section";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const ids = useMemo(() => sections.map((s) => s.id), []);
  const activeId = useActiveSection(ids);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("scroll", close);
    return () => window.removeEventListener("scroll", close);
  }, []);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/30 border-b border-border">
      <div className="container flex h-16 items-center justify-between gap-4">
        <a href="#hero" className="font-extrabold tracking-tight text-lg">
          <span className="bg-gradient-to-r from-primary to-fuchsia-500 bg-clip-text text-transparent">MRF</span>
          <span className="sr-only">Muhammad Rehman Freed</span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-primary ${activeId === s.id ? "text-primary" : "text-foreground/70"}`}
            >
              {s.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="mailto:muhammadrehmanfreed@gmail.com"
            className="hidden md:inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <Mail size={16} /> Hire Me
          </a>
          <button className="md:hidden inline-flex items-center rounded-md p-2 hover:bg-accent" onClick={() => setOpen((v) => !v)}>
            <Menu />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/80 backdrop-blur">
          <div className="container py-2 grid grid-cols-2">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeId === s.id ? "text-primary" : "text-foreground/80"}`}
              >
                {s.label}
              </a>
            ))}
            <a
              href="mailto:muhammadrehmanfreed@gmail.com"
              className="col-span-2 mt-1 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
            >
              <Mail size={16} /> Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
