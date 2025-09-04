import { motion } from "framer-motion";

const experiences = [
  {
    company: "Kairiz",
    role: "Web Developer",
    period: "06/2024 – 07/2025",
  },
  {
    company: "BlueByte Solutions",
    role: "Full Stack Developer",
    period: "07/2024 – 09/2024",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{exp.company}</h3>
                <span className="text-xs rounded-full bg-accent px-2 py-1 text-foreground/80">{exp.period}</span>
              </div>
              <p className="mt-2 text-foreground/70">{exp.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
