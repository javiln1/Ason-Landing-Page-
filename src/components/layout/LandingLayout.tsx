import { ReactNode, useState, useEffect } from "react";
import { TypeformProvider } from "@/context/TypeformContext";

interface LandingLayoutProps {
  children: ReactNode;
}

const LandingLayout = ({ children }: LandingLayoutProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <TypeformProvider>
      <div className="min-h-screen flex flex-col bg-background">
        {/* Minimal header — logo only, no nav */}
        <header
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
            scrolled
              ? "bg-background/90 backdrop-blur-xl border-b border-border/50"
              : "bg-transparent"
          }`}
        >
          <div className="container-wide">
            <div className="flex items-center justify-center h-20 md:h-24">
              <span className="text-xl md:text-2xl font-bold tracking-tight text-foreground font-display">
                HighTicket
                <span className="text-gradient-gold">Elites</span>
              </span>
            </div>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        {/* Minimal footer — copyright only */}
        <footer className="bg-background border-t border-border">
          <div className="container-wide py-8">
            <p className="text-center text-sm text-muted-foreground font-body">
              &copy; {new Date().getFullYear()} HighTicketElites. All rights
              reserved.
            </p>
          </div>
        </footer>
      </div>
    </TypeformProvider>
  );
};

export default LandingLayout;
