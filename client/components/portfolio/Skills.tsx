import { motion } from "framer-motion";

const categories = [
  {
    name: "Languages",
    items: ["C++", "C#", "Python", "JavaScript"],
  },
  {
    name: "Databases",
    items: ["SQL", "MongoDB", "Microsoft Access"],
  },
  {
    name: "Tools/Platforms",
    items: ["Git", "VS Code", "Visual Studio", "Figma", "Power BI"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <h3 className="font-semibold">{cat.name}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {cat.items.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ scale: 0.6, opacity: 0, y: 6 }}
                    whileInView={{ scale: 1, opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 300, damping: 18, delay: i * 0.04 }}
                    className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-sm font-medium text-foreground/80"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
