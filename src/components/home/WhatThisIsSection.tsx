import { motion } from "framer-motion";
import { CheckCircle2, Shield, TrendingUp, Package } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Authorized Dealer Status",
    description: "Work directly with manufacturers as an official reseller",
  },
  {
    icon: Package,
    title: "Premium Products",
    description: "Focus on high-ticket items with real profit margins",
  },
  {
    icon: TrendingUp,
    title: "Proven Traffic System",
    description: "Capture buyers already searching for your products",
  },
];

const WhatThisIsSection = () => {
  return (
    <section id="what-this-is" className="section-padding noise-overlay">
      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label mb-4 inline-block">The System</span>
            <h2 className="text-display md:text-display-lg mb-6">
              What This Is
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              HighTicketElites is a complete system for building and scaling
              high-ticket eCommerce stores that sell premium, brand-name
              products. You become an authorized dealer—not a reseller—working
              directly with manufacturers.
            </p>

            <ul className="space-y-4">
              {[
                "Higher price points, fewer transactions, better margins",
                "Legitimate supplier relationships, not dropshipping",
                "Targeted ads that capture ready-to-buy customers",
                "Simplified operations with proven systems",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right - Visual cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid gap-4"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="card-premium-hover p-6 flex items-start gap-5"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatThisIsSection;
