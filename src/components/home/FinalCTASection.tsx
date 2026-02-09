import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTypeform } from "@/context/TypeformContext";

const FinalCTASection = () => {
  const { openTypeform } = useTypeform();

  return (
    <section className="section-padding noise-overlay relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-radial-burgundy" />
      <div className="absolute inset-0 bg-radial-gold" />

      <div className="container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-display md:text-display-lg lg:text-display-xl mb-6 font-display">
            Ready to Build Your
            <br />
            <span className="gold-shimmer">Empire?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto mb-10 font-body">
            Join the network of dealers building profitable high-ticket
            eCommerce businesses.
          </p>
          <Button
            size="lg"
            className="btn-primary text-base group animate-gold-pulse"
            onClick={openTypeform}
          >
            Start Now
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
