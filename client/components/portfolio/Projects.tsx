import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Dar Al Maazil",
    stack: ["Next.js", "TypeScript", "Node.js", "Framer Motion", "MongoDB", "Tailwind CSS"],
    link: "https://damf-1-0.vercel.app/",
  },
  {
    name: "Shandar Carwheel",
    stack: ["HTML", "CSS", "JavaScript", "SQL"],
    link: "https://github.com/mrehmanfreed4472/Shandarwheels",
  },
  {
    name: "Desktop Tutorial",
    stack: ["TypeScript"],
    link: "https://github.com/mrehmanfreed4472/desktop-tutorial",
  },
  {
    name: "ATM Working",
    stack: ["TypeScript"],
    link: "https://github.com/mrehmanfreed4472/Assignment_04",
  },
  {
    name: "AMS for NTU",
    stack: ["Next.js", "Postman", "Tailwind", "MongoDB", "Vercel", "Render"],
    link: "https://alumniportal-main-10.vercel.app/",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.a
              key={p.name}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="group relative rounded-2xl border border-border bg-card p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{p.name}</h3>
                  <p className="mt-2 text-sm text-foreground/70">{p.stack.join(", ")}</p>
                </div>
                <ExternalLink className="shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" size={18} />
              </div>
              <div className="mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-primary/70 to-fuchsia-500/70" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
