import { motion } from "framer-motion";
import { useTypingEffect } from "@/hooks/use-typing-effect";

export function Hero() {
  const typed = useTypingEffect([
    "Software Engineering Student",
    "Web Developer",
  ]);

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-60">
        <motion.div
          className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-fuchsia-400/40 blur-3xl"
          animate={{ y: [0, 30, 0], x: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-16 -right-10 h-80 w-80 rounded-full bg-indigo-400/40 blur-3xl"
          animate={{ y: [0, -30, 0], x: [0, -10, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container pt-16 md:pt-24 pb-20 md:pb-28 grid md:grid-cols-2 items-center gap-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="mb-3 text-sm font-semibold tracking-wide text-primary">Hello, I'm</p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Muhammad Rehman <span className="bg-gradient-to-r from-primary to-fuchsia-500 bg-clip-text text-transparent">Freed</span>
          </h1>
          <p className="mt-3 text-lg md:text-xl text-foreground/80">
            <span className="font-semibold">{typed}</span>
            <span className="inline-block w-1 bg-foreground/80 animate-pulse ml-0.5" style={{ height: "1.25em" }} />
          </p>
          <p className="mt-4 max-w-xl text-foreground/70">
            Passionate about building scalable, modern web applications with expertise in React.js, Next.js, TypeScript, and databases.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="mailto:muhammadrehmanfreed@gmail.com"
              className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-ring"
            >
              Hire Me
            </a>
            <a
              href="/cv"
              className="inline-flex items-center rounded-md border border-border px-6 py-3 text-sm font-semibold hover:bg-accent"
            >
              Download CV
            </a>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {["React.js", "Next.js", "TypeScript", "Tailwind", "Framer Motion", "MongoDB"].map((t, i) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-full border border-border bg-card/70 px-3 py-1 text-xs font-medium text-foreground/80 backdrop-blur"
              >
                {t}
              </motion.span>
            ))}
          </div>
          <a href="#about" className="mt-8 inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-primary">
            <span className="h-5 w-5 rounded-full border border-border grid place-items-center">↓</span>
            Scroll to explore
          </a>
        </motion.div>

        <motion.div
          className="relative mx-auto md:mx-0"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="relative h-56 w-56 md:h-72 md:w-72 rounded-full bg-gradient-to-br from-primary/80 to-fuchsia-500/70 p-1 shadow-2xl">
            <motion.div
              className="pointer-events-none absolute -inset-3 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute inset-0 rounded-full bg-[conic-gradient(var(--tw-gradient-stops))] from-fuchsia-400/25 via-primary/25 to-indigo-400/25 blur-lg" />
            </motion.div>
            <div className="h-full w-full rounded-full bg-background grid place-items-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F1f92479787d647a5873d822973f760c7%2Fd5c60566c70c4506bbf9c23eb84557c0?format=webp&width=800"
                alt="Profile photo"
                loading="eager"
                className="h-48 w-48 md:h-60 md:w-60 rounded-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
