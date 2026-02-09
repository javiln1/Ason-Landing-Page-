import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import { useTypeform } from "@/context/TypeformContext";

const metrics = [
  { value: "$2,000+", label: "Avg. Order Value" },
  { value: "25-40%", label: "Profit Margins" },
  { value: "3-5x", label: "Target ROAS" },
  { value: "50+", label: "Active Dealers" },
];

const LPHeroSection = () => {
  const { openTypeform } = useTypeform();

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden noise-overlay">
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

      <div className="container-wide relative z-10 pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 md:mb-8"
          >
            <span className="section-label">
              High-Ticket eCommerce System
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-heading md:text-display lg:text-display-lg mb-5 md:mb-8 font-display"
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
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed font-body"
          >
            Become an authorized dealer of high-ticket brands. We give you the
            suppliers, the store, and the ad system. You keep the profits.
          </motion.p>

          {/* Video placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative max-w-4xl mx-auto mb-8 md:mb-12"
          >
            <button
              onClick={openTypeform}
              className="card-premium p-1.5 md:p-2 glow-gold gold-corner-frame block cursor-pointer w-full"
            >
              <div className="aspect-video bg-gradient-to-br from-secondary to-muted rounded-xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-radial from-gold/5 via-transparent to-transparent" />
                <div className="text-center relative z-10">
                  <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-3 md:mb-4 border border-gold/30">
                    <Play className="h-5 w-5 md:h-8 md:w-8 text-gold" />
                  </div>
                  <p className="text-muted-foreground font-display text-xs md:text-sm uppercase tracking-widest">
                    Watch Free Training
                  </p>
                </div>
              </div>
            </button>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-14 md:mb-20"
          >
            <Button
              size="lg"
              className="btn-primary text-sm md:text-base group animate-gold-pulse"
              onClick={openTypeform}
            >
              Apply Now
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>

        {/* Metrics strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {metrics.map((metric, index) => (
              <div key={index} className="metric-card">
                <span className="text-xl md:text-3xl font-bold text-gradient-gold font-display">
                  {metric.value}
                </span>
                <span className="text-xs md:text-sm text-muted-foreground mt-1 font-body">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground mt-4 md:mt-6 font-body">
            Results vary. These are examples from our network of dealers.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LPHeroSection;
