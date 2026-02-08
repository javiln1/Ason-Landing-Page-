import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Store, Search, Settings, Truck, BarChart3, Headphones, ShoppingBag, Target } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const steps = [
  {
    id: 1,
    title: "Become an Authorized Dealer",
    description: "Apply directly to manufacturers and distributors to become an official reseller. This gives you wholesale pricing, brand authorization, and supplier support that typical resellers don't have access to.",
    icon: Store,
    details: [
      "Access to wholesale pricing",
      "Official brand authorization",
      "Direct supplier relationships",
      "Product training & support",
    ],
  },
  {
    id: 2,
    title: "Build Your Premium Store",
    description: "Create a clean, professional Shopify storefront that looks and feels like an established retailer. No flashy gimmicks—just a trustworthy shopping experience that converts.",
    icon: ShoppingBag,
    details: [
      "Professional Shopify store",
      "Optimized product pages",
      "Trust signals & social proof",
      "Mobile-first design",
    ],
  },
  {
    id: 3,
    title: "Launch Targeted Advertising",
    description: "Deploy Google Ads campaigns targeting high-intent searches. When someone searches for a specific product, they're ready to buy. You capture that demand.",
    icon: Target,
    details: [
      "High-intent keyword targeting",
      "Shopping & search campaigns",
      "Conversion optimization",
      "Performance tracking",
    ],
  },
  {
    id: 4,
    title: "Fulfill Through Suppliers",
    description: "When orders come in, your suppliers handle fulfillment. Products ship directly from manufacturers to customers, eliminating inventory risk.",
    icon: Truck,
    details: [
      "Direct manufacturer shipping",
      "No inventory holding",
      "Quality guaranteed",
      "Professional packaging",
    ],
  },
  {
    id: 5,
    title: "Scale & Optimize",
    description: "Track performance, identify winning products, optimize campaigns, and reinvest profits. Build systems that let you scale without proportional effort.",
    icon: BarChart3,
    details: [
      "Data-driven decisions",
      "Campaign optimization",
      "Product expansion",
      "Systematic scaling",
    ],
  },
];

const tools = [
  { name: "Shopify", category: "Store Platform", icon: Store },
  { name: "Google Ads", category: "Traffic", icon: Search },
  { name: "Supplier Network", category: "Fulfillment", icon: Truck },
  { name: "Analytics", category: "Tracking", icon: BarChart3 },
  { name: "Automation", category: "Operations", icon: Settings },
  { name: "Support", category: "Community", icon: Headphones },
];

const HowItWorksPage = () => {
  const [activeStep, setActiveStep] = useState(1);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sectionRefs.current.forEach((ref, index) => {
        if (ref) {
          const { top, bottom } = ref.getBoundingClientRect();
          const absoluteTop = top + window.scrollY;
          const absoluteBottom = bottom + window.scrollY;

          if (scrollPosition >= absoluteTop && scrollPosition <= absoluteBottom) {
            setActiveStep(index + 1);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 noise-overlay relative">
        <div className="absolute inset-0 bg-gradient-radial from-secondary via-background to-background" />
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="section-label mb-4 inline-block">How It Works</span>
            <h1 className="text-display-lg md:text-display-xl mb-6">
              The Complete System
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A step-by-step breakdown of how we help you build a profitable
              high-ticket eCommerce business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Scrollytelling section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-[300px_1fr] gap-12">
            {/* Sticky sidebar */}
            <div className="hidden lg:block">
              <div className="sticky top-32">
                <nav className="space-y-2">
                  {steps.map((step) => (
                    <button
                      key={step.id}
                      onClick={() => {
                        sectionRefs.current[step.id - 1]?.scrollIntoView({
                          behavior: "smooth",
                          block: "center",
                        });
                      }}
                      className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                        activeStep === step.id
                          ? "bg-secondary border border-primary/30 text-foreground"
                          : "text-muted-foreground hover:bg-secondary/50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          activeStep === step.id ? "bg-primary/20" : "bg-secondary"
                        }`}>
                          <span className={`text-sm font-bold ${
                            activeStep === step.id ? "text-primary" : ""
                          }`}>
                            {step.id}
                          </span>
                        </div>
                        <span className="font-medium text-sm">{step.title}</span>
                      </div>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-32">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  ref={(el) => (sectionRefs.current[index] = el)}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="grid md:grid-cols-2 gap-8 items-center"
                  >
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                          <step.icon className="h-7 w-7 text-primary" />
                        </div>
                        <span className="text-5xl font-bold text-muted-foreground/30">
                          0{step.id}
                        </span>
                      </div>
                      <h2 className="text-heading md:text-display mb-4">{step.title}</h2>
                      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        {step.description}
                      </p>
                      <ul className="space-y-3">
                        {step.details.map((detail, dIndex) => (
                          <li key={dIndex} className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span className="text-muted-foreground">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="card-premium p-8 aspect-square flex items-center justify-center">
                      <step.icon className="h-24 w-24 text-primary/20" />
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools section */}
      <section className="section-padding bg-secondary/30 noise-overlay">
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="section-label mb-4 inline-block">Tools & Systems</span>
            <h2 className="text-display md:text-display-lg">
              What You'll Use
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="card-premium-hover p-6 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <tool.icon className="h-6 w-6 text-primary" />
                </div>
                <p className="font-semibold text-sm mb-1">{tool.name}</p>
                <p className="text-xs text-muted-foreground">{tool.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding noise-overlay relative">
        <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
        <div className="container-narrow relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-display md:text-display-lg mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground max-w-xl mx-auto mb-10">
              Apply now to see if you're a good fit for our program.
            </p>
            <Button asChild size="lg" className="btn-primary text-base group">
              <Link to="/start-now">
                Start Now
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorksPage;
