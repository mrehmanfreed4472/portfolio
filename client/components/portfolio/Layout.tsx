import { PropsWithChildren } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-accent/50 via-background to-background">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
