import { Layout } from "@/components/portfolio/Layout";

export default function CV() {
  return (
    <Layout>
      <section className="container py-12 print:py-0">
        <div className="mx-auto max-w-3xl bg-card p-8 rounded-2xl border border-border shadow-sm print:shadow-none print:border-none">
          <header className="text-center">
            <h1 className="text-3xl font-extrabold">Muhammad Rehman Freed</h1>
            <p className="mt-1 text-foreground/70">Software Engineering Student | Web Developer</p>
            <p className="mt-1 text-sm text-foreground/60">Faisalabad, Pakistan • muhammadrehmanfreed@gmail.com • +92 315 7314047</p>
          </header>

          <div className="mt-8 space-y-6 text-sm leading-relaxed">
            <section>
              <h2 className="font-semibold text-foreground">Summary</h2>
              <p className="mt-1 text-foreground/80">
                Passionate about building scalable, modern web applications with expertise in React.js, Next.js, TypeScript, and databases.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-foreground">Education</h2>
              <ul className="mt-1 list-disc pl-6">
                <li>BS Software Engineering — National Textile University, Faisalabad (2021–2025)</li>
                <li>Intermediate (81%) — Student Inn College (2018–2020)</li>
                <li>Matriculation (Science, 87%) — The Educators School (2016–2018)</li>
              </ul>
            </section>

            <section>
              <h2 className="font-semibold text-foreground">Experience</h2>
              <ul className="mt-1 list-disc pl-6">
                <li>Kairiz — Web Developer (06/2024 – 07/2025)</li>
                <li>BlueByte Solutions — Full Stack Developer (07/2024 – 09/2024)</li>
              </ul>
            </section>

            <section>
              <h2 className="font-semibold text-foreground">Skills</h2>
              <p>Languages: C++, C#, Python, JavaScript</p>
              <p>Databases: SQL, MongoDB, Microsoft Access</p>
              <p>Tools/Platforms: Git, VS Code, Visual Studio, Figma, Power BI</p>
            </section>

            <section>
              <h2 className="font-semibold text-foreground">Projects</h2>
              <ul className="mt-1 list-disc pl-6">
                <li>Dar Al Maazil — Next.js, TypeScript, Node.js, Framer Motion, MongoDB, Tailwind CSS — https://dar-ul-maazil.vercel.app/</li>
                <li>Shandar Carwheel — HTML, CSS, JavaScript, SQL — https://github.com/mrehmanfreed4472/Shandarwheels</li>
                <li>Desktop Tutorial — TypeScript — https://github.com/mrehmanfreed4472/desktop-tutorial</li>
                <li>ATM Working — TypeScript — https://github.com/mrehmanfreed4472/Assignment_04</li>
                <li>AMS for NTU — Next.js, Postman, Tailwind, MongoDB, Vercel & Render — https://alumniportal-main-10.vercel.app/</li>
              </ul>
            </section>

            <section>
              <h2 className="font-semibold text-foreground">Certifications</h2>
              <ul className="mt-1 list-disc pl-6">
                <li>GitHub Mastery Workshop</li>
                <li>NTU Sport Management Team</li>
                <li>Asana & Jira</li>
                <li>Programming Workshop</li>
              </ul>
            </section>
          </div>

          <div className="mt-8 flex justify-center gap-3 print:hidden">
            <button onClick={() => window.print()} className="rounded-md bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground">Download as PDF</button>
            <a href="/" className="rounded-md border border-border px-5 py-2 text-sm font-semibold">Back Home</a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
