import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const offers = [
  {
    name: "Program",
    tagline: "For Self-Starters",
    description:
      "Complete training and resources to build your high-ticket store",
    features: [
      "Full training curriculum",
      "Supplier database access",
      "Community membership",
      "Weekly group calls",
      "Templates & SOPs",
    ],
    cta: "Start Now",
    featured: false,
  },
  {
    name: "DFY Infrastructure",
    tagline: "For Fast Movers",
    description:
      "We build your complete store and systems — you focus on growth",
    features: [
      "Everything in Program",
      "Custom Shopify store built for you",
      "Supplier applications done for you",
      "Google Ads account setup",
      "Launch-ready in 30 days",
    ],
    cta: "Start Now",
    featured: true,
  },
  {
    name: "1-on-1 Mentorship",
    tagline: "For Serious Operators",
    description:
      "Direct access to our team for personalized guidance and strategy",
    features: [
      "Everything in DFY",
      "Weekly 1-on-1 calls",
      "Direct Slack access",
      "Custom scaling strategy",
      "Priority supplier intros",
    ],
    cta: "Start Now",
    featured: false,
  },
];

const OffersSection = () => {
  return (
    <section
      id="offers"
      className="section-padding noise-overlay relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-radial-gold" />

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 inline-block">
            Choose Your Path
          </span>
          <h2 className="text-display md:text-display-lg mb-4 font-display">
            Our Offers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
            Three ways to work with us, based on your goals and timeline
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative ${offer.featured ? "md:-mt-4 md:mb-4" : ""}`}
            >
              {offer.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <span className="px-4 py-1 text-xs font-semibold uppercase tracking-wider bg-gold text-surface-dark rounded-full font-display">
                    Most Popular
                  </span>
                </div>
              )}

              <div
                className={`h-full card-premium p-8 flex flex-col ${offer.featured ? "border-gold/50 glow-gold" : ""}`}
              >
                <div className="mb-6">
                  <p className="text-sm text-gold font-medium mb-2 font-display">
                    {offer.tagline}
                  </p>
                  <h3 className="text-2xl font-bold mb-3 font-display">
                    {offer.name}
                  </h3>
                  <p className="text-muted-foreground font-body">
                    {offer.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {offer.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground font-body">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`w-full group ${offer.featured ? "btn-primary" : "btn-secondary"}`}
                >
                  <Link to="/start-now">
                    {offer.cta}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
