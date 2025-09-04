import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github } from "lucide-react";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

export function Contact() {
  const { register, handleSubmit, reset, formState } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    console.log("Contact form submitted:", data);
    toast.success("Thank you! I'll get back to you soon.");
    reset();
  };

  return (
    <section id="contact" className="py-20">
      <div className="container">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Contact
        </motion.h2>

        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid gap-4">
              <div>
                <label className="text-sm font-medium">Name</label>
                <input
                  className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Your name"
                  {...register("name")}
                />
                {formState.errors.name && (
                  <p className="mt-1 text-xs text-red-600">{formState.errors.name.message}</p>
                )}
              </div>
              <div>
                <label className="text-sm font-medium">Email</label>
                <input
                  className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-ring"
                  placeholder="you@example.com"
                  type="email"
                  {...register("email")}
                />
                {formState.errors.email && (
                  <p className="mt-1 text-xs text-red-600">{formState.errors.email.message}</p>
                )}
              </div>
              <div>
                <label className="text-sm font-medium">Message</label>
                <textarea
                  className="mt-1 min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-ring"
                  placeholder="How can I help?"
                  {...register("message")}
                />
                {formState.errors.message && (
                  <p className="mt-1 text-xs text-red-600">{formState.errors.message.message}</p>
                )}
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-ring"
              >
                Send Message
              </button>
            </div>
          </motion.form>

          <motion.div
            className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="space-y-4">
              <a href="mailto:muhammadrehmanfreed@gmail.com" className="flex items-center gap-3 hover:text-primary">
                <Mail size={18} /> muhammadrehmanfreed@gmail.com
              </a>
              <a href="tel:+923157314047" className="flex items-center gap-3 hover:text-primary">
                <Phone size={18} /> +92 315 7314047
              </a>
              <p className="flex items-center gap-3 text-foreground/80">
                <MapPin size={18} /> Faisalabad, Pakistan
              </p>
              <div className="pt-2 flex items-center gap-4">
                <a
                  href="https://github.com/mrehmanfreed4472"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border hover:bg-accent"
                >
                  <Github size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
