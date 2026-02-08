import { motion } from "framer-motion";
import { FileCheck, Users, Store, Megaphone, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: FileCheck,
    title: "Apply & Get Approved",
    description:
      "Complete your application and get access to our system, training, and supplier contacts.",
  },
  {
    number: "02",
    icon: Users,
    title: "Secure Authorization",
    description:
      "Apply to manufacturers and distributors to become an official authorized dealer.",
  },
  {
    number: "03",
    icon: Store,
    title: "Build Your Store",
    description:
      "Set up a clean, professional Shopify storefront with your authorized product catalog.",
  },
  {
    number: "04",
    icon: Megaphone,
    title: "Launch Ads",
    description:
      "Deploy Google Ads campaigns that capture buyers already searching for your products.",
  },
  {
    number: "05",
    icon: TrendingUp,
    title: "Scale",
    description:
      "Track performance, optimize campaigns, and reinvest profits into growth.",
  },
];

const ProcessSection = () => {
  return (
    <section
      id="process"
      className="section-padding bg-secondary/30 noise-overlay"
    >
      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 inline-block">The Process</span>
          <h2 className="text-display md:text-display-lg">
            Your Path to Success
          </h2>
        </motion.div>

        {/* Desktop horizontal layout */}
        <div className="hidden lg:block">
          <div className="relative max-w-6xl mx-auto">
            {/* Connection line */}
            <div className="absolute top-20 left-[10%] right-[10%] h-0.5 bg-border" />

            <div className="grid grid-cols-5 gap-4">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Number circle */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-card border-2 border-primary flex items-center justify-center mx-auto mb-6">
                    <span className="text-lg font-bold text-primary">
                      {step.number}
                    </span>
                  </div>

                  <div className="card-premium p-5 text-center h-[calc(100%-5rem)]">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2 text-sm">{step.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/tablet stacked layout */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-premium p-6"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-primary">
                    {step.number}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
