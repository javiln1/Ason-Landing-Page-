import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container-wide py-16 md:py-20">
        <div className="grid md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold tracking-tight text-foreground font-display">
                HighTicket
                <span className="text-gradient-gold">Elites</span>
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm leading-relaxed font-body">
              Building profitable high-ticket eCommerce businesses through
              authorized dealer relationships and targeted advertising.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4 font-display">
              Navigate
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", to: "/" },
                { label: "How It Works", to: "/how-it-works" },
                { label: "Proof", to: "/proof" },
                { label: "Start Now", to: "/start-now" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-muted-foreground hover:text-foreground transition-colors font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4 font-display">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contact@highticketelites.com"
                  className="text-muted-foreground hover:text-foreground transition-colors font-body"
                >
                  contact@highticketelites.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="divider-gradient mt-12 mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground font-body">
            &copy; {new Date().getFullYear()} HighTicketElites. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground font-body">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
