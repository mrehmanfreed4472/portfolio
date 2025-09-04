export function Footer() {
  return (
    <footer className="border-t border-border py-8 mt-16">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-foreground/70">
        <p>© 2025 Muhammad Rehman Freed</p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/mrehmanfreed4472"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary"
          >
            GitHub
          </a>
          <a href="mailto:muhammadrehmanfreed@gmail.com" className="hover:text-primary">
            Email
          </a>
          <a href="/cv" className="hover:text-primary">
            CV
          </a>
        </div>
      </div>
    </footer>
  );
}
