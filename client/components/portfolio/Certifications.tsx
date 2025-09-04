import { motion } from "framer-motion";

const certs = [
  "GitHub Mastery Workshop",
  "NTU Sport Management Team",
  "Asana & Jira",
  "Programming Workshop",
];

export function Certifications() {
  return (
    <section id="certifications" className="py-20">
      <div className="container">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Certifications
        </motion.h2>

        <div className="mt-6 flex flex-wrap gap-3">
          {certs.map((c, i) => (
            <motion.span
              key={c}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="inline-flex items-center rounded-full border border-border bg-card px-4 py-2 text-sm shadow-sm hover:shadow"
            >
              {c}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
