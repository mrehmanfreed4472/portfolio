import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="mt-8 grid md:grid-cols-3 gap-8 items-start">
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="group relative h-56 w-56 md:h-64 md:w-64 rounded-2xl bg-gradient-to-br from-primary/20 to-fuchsia-500/20 p-1">
              <div className="h-full w-full rounded-2xl bg-background grid place-items-center transition-transform duration-300 group-hover:scale-[1.02]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F1f92479787d647a5873d822973f760c7%2Fd5c60566c70c4506bbf9c23eb84557c0?format=webp&width=800"
                  alt="Profile photo"
                  loading="lazy"
                  className="h-40 w-40 md:h-48 md:w-48 rounded-full object-cover"
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            className="md:col-span-2 text-foreground/80 leading-relaxed"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p>
              I'm <span className="font-semibold">Muhammad Rehman Freed</span>, a Software Engineering student passionate about building modern, scalable web applications. I love solving real-world problems using technologies like React.js, Next.js, TypeScript, and databases. I aim to grow into a full-stack developer creating products that are fast, accessible, and delightful to use.
            </p>
            <p className="mt-4">
              Education has taught me solid fundamentals while hands-on projects have sharpened my practical skills. I'm always learning, collaborating, and exploring opportunities to make an impact.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
