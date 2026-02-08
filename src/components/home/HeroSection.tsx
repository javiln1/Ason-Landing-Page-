import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const metrics = [
  { value: "$2,000+", label: "Avg. Order Value" },
  { value: "25-40%", label: "Profit Margins" },
  { value: "3-5x", label: "Target ROAS" },
  { value: "50+", label: "Active Dealers" },
];

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-radial" />
      <div className="absolute inset-0 bg-radial-burgundy" />
      <div className="absolute inset-0 bg-radial-gold" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(rgba(212, 165, 116, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212, 165, 116, 0.3) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Gold glow point */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gold/5 rounded-full blur-[150px]" />

      <div className="container-wide relative z-10 pt-32 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="section-label">High-Ticket eCommerce System</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-display-lg md:text-display-xl lg:text-display-2xl mb-8 font-display"
          >
            Build a <span className="gold-shimmer">Profitable</span>
            <br />
            eCommerce Empire
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed font-body"
          >
            Sell premium, authorized products with proven systems. No inventory
            risk. No guesswork. Just results.
          </motion.p>

          {/* Hero visual — video placeholder with gold corner frames */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative max-w-4xl mx-auto mb-12"
          >
            <Link
              to="/start-now"
              className="card-premium p-2 glow-gold gold-corner-frame block cursor-pointer"
            >
              <div className="aspect-video bg-gradient-to-br from-secondary to-muted rounded-xl flex items-center justify-center relative overflow-hidden">
                {/* Radial glow inside */}
                <div className="absolute inset-0 bg-gradient-radial from-gold/5 via-transparent to-transparent" />
                <div className="text-center relative z-10">
                  <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4 border border-gold/30">
                    <Play className="h-8 w-8 text-gold" />
                  </div>
                  <p className="text-muted-foreground font-display text-sm uppercase tracking-widest">
                    Watch Free Training
                  </p>
                </div>
              </div>
            </Link>

          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
          >
            <Button
              asChild
              size="lg"
              className="btn-primary text-base group animate-gold-pulse"
            >
              <Link to="/start-now">
                Start Now
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="btn-secondary text-base"
            >
              <Link to="/how-it-works">
                <Play className="mr-2 h-4 w-4" />
                See How It Works
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Proof strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {metrics.map((metric, index) => (
              <div key={index} className="metric-card">
                <span className="text-2xl md:text-3xl font-bold text-gradient-gold font-display">
                  {metric.value}
                </span>
                <span className="text-sm text-muted-foreground mt-1 font-body">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground mt-6 font-body">
            Results vary. These are examples from our network of dealers.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
