import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Quote } from "lucide-react";
import { useState } from "react";
import VideoTestimonialsSection from "@/components/home/VideoTestimonialsSection";
import ScreenshotTestimonialsSection from "@/components/home/ScreenshotTestimonialsSection";

const categories = [
  { id: "all", label: "All" },
  { id: "student", label: "Student Wins" },
  { id: "dfy", label: "DFY Wins" },
  { id: "store", label: "Store Wins" },
  { id: "ads", label: "Ads Wins" },
  { id: "community", label: "Community" },
];

const proofItems = [
  {
    id: 1,
    category: "store",
    type: "metric",
    value: "$127,000+",
    label: "Monthly Revenue",
    description: "Single store after 8 months of optimization",
  },
  {
    id: 2,
    category: "student",
    type: "testimonial",
    quote: "Went from complete beginner to $40k/month in under 5 months. The system works if you work it.",
    author: "Marcus T.",
    role: "Program Graduate",
    result: "$40k/mo",
  },
  {
    id: 3,
    category: "ads",
    type: "metric",
    value: "4.8x",
    label: "Average ROAS",
    description: "Across Q4 campaigns for premium appliances",
  },
  {
    id: 4,
    category: "dfy",
    type: "testimonial",
    quote: "They built everything for me. I just had to show up and run the ads. First sale within 2 weeks of launch.",
    author: "Sarah K.",
    role: "DFY Client",
    result: "First sale in 14 days",
  },
  {
    id: 5,
    category: "store",
    type: "metric",
    value: "$892K",
    label: "Annual Revenue",
    description: "Top performing store in the network",
  },
  {
    id: 6,
    category: "community",
    type: "testimonial",
    quote: "The community alone is worth 10x the investment. Direct access to people actually doing this.",
    author: "David L.",
    role: "1-Year Member",
    result: "Scaled to $25k/mo",
  },
  {
    id: 7,
    category: "ads",
    type: "metric",
    value: "3.2%",
    label: "Conversion Rate",
    description: "Average across optimized product pages",
  },
  {
    id: 8,
    category: "student",
    type: "testimonial",
    quote: "Finally a business model that makes sense. Real products, real margins, real customers.",
    author: "James R.",
    role: "6-Month Member",
    result: "$18k/mo",
  },
  {
    id: 9,
    category: "dfy",
    type: "metric",
    value: "30",
    label: "Days to Launch",
    description: "Average time from signup to live store",
  },
];

const caseStudies = [
  {
    title: "From Corporate to $50k/month",
    starting: "Senior manager at Fortune 500, no eCommerce experience",
    built: "Premium outdoor equipment store with 3 authorized brands",
    result: "$52,000/month revenue within 10 months",
    category: "student",
  },
  {
    title: "DFY Store Hits $30k in Month 2",
    starting: "Busy professional, limited time to build",
    built: "Done-for-you appliance store with optimized ad campaigns",
    result: "$31,000 revenue in second full month",
    category: "dfy",
  },
  {
    title: "Scaling from $10k to $100k",
    starting: "Existing store owner stuck at $10k/month",
    built: "Expanded supplier relationships, rebuilt ad strategy",
    result: "$108,000/month revenue after 6 months",
    category: "store",
  },
];

const ProofPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProof = activeFilter === "all"
    ? proofItems
    : proofItems.filter(item => item.category === activeFilter);

  const filteredCaseStudies = activeFilter === "all"
    ? caseStudies
    : caseStudies.filter(cs => cs.category === activeFilter);

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
            <span className="section-label mb-4 inline-block">Real Results</span>
            <h1 className="text-display-lg md:text-display-xl mb-6">
              Proof That Speaks
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Results from our network of dealers. Numbers, testimonials, and case studies
              from people actually building with this system.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="py-8 border-b border-border sticky top-20 md:top-24 bg-background/95 backdrop-blur-xl z-40">
        <div className="container-wide">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 md:justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeFilter === cat.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Proof gallery */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredProof.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="break-inside-avoid"
              >
                <div className="card-premium-hover p-6">
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-4 capitalize">
                    {item.category} Win
                  </span>

                  {item.type === "metric" ? (
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="h-5 w-5 text-primary" />
                        <span className="text-3xl font-bold text-gradient-gold">{item.value}</span>
                      </div>
                      <p className="text-lg font-semibold text-foreground mb-1">{item.label}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  ) : (
                    <div>
                      <Quote className="h-6 w-6 text-primary/50 mb-3" />
                      <p className="text-foreground leading-relaxed mb-4">"{item.quote}"</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                            <span className="text-sm font-semibold">{item.author?.charAt(0)}</span>
                          </div>
                          <div>
                            <p className="text-sm font-semibold">{item.author}</p>
                            <p className="text-xs text-muted-foreground">{item.role}</p>
                          </div>
                        </div>
                        {item.result && (
                          <span className="text-sm font-semibold text-primary">{item.result}</span>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="section-padding bg-secondary/30 noise-overlay">
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="section-label mb-4 inline-block">Case Studies</span>
            <h2 className="text-display md:text-display-lg">
              The Full Story
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {filteredCaseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-premium p-8"
              >
                <h3 className="text-xl font-bold mb-6">{study.title}</h3>

                <div className="space-y-4">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Starting Point</p>
                    <p className="text-sm text-foreground">{study.starting}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">What Was Built</p>
                    <p className="text-sm text-foreground">{study.built}</p>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-xs uppercase tracking-wider text-primary mb-1">Result</p>
                    <p className="text-lg font-bold text-gradient-gold">{study.result}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video testimonials */}
      <VideoTestimonialsSection />

      {/* Screenshot testimonials */}
      <ScreenshotTestimonialsSection />

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
              Your Results Are Next
            </h2>
            <p className="text-xl text-muted-foreground max-w-xl mx-auto mb-10">
              Join the network and start building your success story.
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

export default ProofPage;
