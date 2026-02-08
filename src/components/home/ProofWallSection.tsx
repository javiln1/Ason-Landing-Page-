import { motion } from "framer-motion";
import { TrendingUp, Quote } from "lucide-react";

const proofItems = [
  {
    type: "revenue",
    category: "Store Win",
    value: "$127,000+",
    label: "Monthly Revenue",
    description: "Single store performance after 6 months",
  },
  {
    type: "testimonial",
    category: "Student Win",
    quote:
      "This system changed everything. I went from zero to $40k/month in 4 months.",
    author: "Marcus T.",
    role: "DFY Client",
  },
  {
    type: "revenue",
    category: "Ads Win",
    value: "4.2x",
    label: "ROAS",
    description: "Average return on ad spend across campaigns",
  },
  {
    type: "testimonial",
    category: "Community Win",
    quote: "The supplier relationships alone are worth 10x the investment.",
    author: "Sarah K.",
    role: "Program Member",
  },
  {
    type: "revenue",
    category: "Store Win",
    value: "$892K",
    label: "Annual Revenue",
    description: "Top performing store in the network",
  },
  {
    type: "testimonial",
    category: "Student Win",
    quote:
      "Finally a business model that actually makes sense. Real products, real margins.",
    author: "David L.",
    role: "6-Month Member",
  },
];

const ProofWallSection = () => {
  return (
    <section
      id="proof"
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
          <span className="section-label mb-4 inline-block">Real Results</span>
          <h2 className="text-display md:text-display-lg">Proof That Speaks</h2>
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {proofItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="break-inside-avoid"
            >
              <div className="card-premium-hover p-6">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-4">
                  {item.category}
                </span>

                {item.type === "revenue" ? (
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="h-5 w-5 text-primary" />
                      <span className="text-3xl font-bold text-gradient-gold">
                        {item.value}
                      </span>
                    </div>
                    <p className="text-lg font-semibold text-foreground mb-1">
                      {item.label}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ) : (
                  <div>
                    <Quote className="h-6 w-6 text-primary/50 mb-3" />
                    <p className="text-foreground leading-relaxed mb-4">
                      "{item.quote}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                        <span className="text-sm font-semibold">
                          {item.author?.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{item.author}</p>
                        <p className="text-xs text-muted-foreground">
                          {item.role}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofWallSection;
