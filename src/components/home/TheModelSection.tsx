import { motion } from "framer-motion";
import {
  Store,
  Search,
  CreditCard,
  ArrowRight,
  Truck,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: Store,
    title: "Authorized Dealer",
    description: "Become an official dealer for premium brands",
  },
  {
    icon: Search,
    title: "Google Ads",
    description: "Capture high-intent buyers searching for products",
  },
  {
    icon: CreditCard,
    title: "Customer Buys",
    description: "Process orders through your professional store",
  },
  {
    icon: Truck,
    title: "Supplier Ships",
    description: "Products ship directly from manufacturer",
  },
  {
    icon: TrendingUp,
    title: "You Profit",
    description: "Collect margin on every sale",
  },
];

const TheModelSection = () => {
  return (
    <section
      id="how-it-works"
      className="section-padding noise-overlay relative overflow-hidden"
    >
      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 inline-block">The Model</span>
          <h2 className="text-display md:text-display-lg mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A simple, proven model for building a sustainable eCommerce business
          </p>
        </motion.div>

        {/* Flow diagram */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connection line - desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2" />

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="card-premium-hover p-6 text-center h-full">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <step.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow - mobile/tablet */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center my-4">
                      <ArrowRight className="h-5 w-5 text-muted-foreground rotate-90 md:rotate-0" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Summary cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid md:grid-cols-3 gap-6 mt-16"
          >
            <div className="card-premium p-6 text-center">
              <p className="text-3xl font-bold text-gradient-gold mb-2">
                $2,000+
              </p>
              <p className="text-sm text-muted-foreground">
                Average Order Value
              </p>
            </div>
            <div className="card-premium p-6 text-center">
              <p className="text-3xl font-bold text-gradient-gold mb-2">
                25-40%
              </p>
              <p className="text-sm text-muted-foreground">
                Typical Profit Margins
              </p>
            </div>
            <div className="card-premium p-6 text-center">
              <p className="text-3xl font-bold text-gradient-gold mb-2">3-5x</p>
              <p className="text-sm text-muted-foreground">Target ROAS</p>
            </div>
          </motion.div>

          {/* See How It Works link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button asChild variant="outline" className="btn-secondary">
              <Link to="/how-it-works">
                See the Full Breakdown
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TheModelSection;
