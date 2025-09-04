import { motion } from "framer-motion";

const items = [
  {
    title: "Matriculation (Science, 87%)",
    place: "The Educators School",
    period: "2016–2018",
  },
  {
    title: "Intermediate (81%)",
    place: "Student Inn College",
    period: "2018–2020",
  },
  {
    title: "BS Software Engineering",
    place: "National Textile University, Faisalabad",
    period: "2021–2025",
  },
];

export function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>

        <div className="mt-10 relative">
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />
          <ul className="space-y-10">
            {items.map((item, idx) => (
              <motion.li
                key={idx}
                className="relative pl-12 md:pl-16"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px 0px -20% 0px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <div className="absolute left-3.5 md:left-5 top-1.5 h-3 w-3 rounded-full bg-primary shadow ring-8 ring-primary/10" />
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-foreground/70">{item.place}</p>
                <p className="mt-1 text-xs text-foreground/60">{item.period}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
