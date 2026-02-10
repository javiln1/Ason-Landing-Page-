import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, MapPin, Shield, DollarSign, Zap } from "lucide-react";
import VideoTestimonialsSection from "@/components/home/VideoTestimonialsSection";
import ScreenshotTestimonialsSection from "@/components/home/ScreenshotTestimonialsSection";

const milestones = [
  {
    label: "The Starting Point",
    title: "Army Sergeant, $4K/Month",
    description:
      "From Lawrence, Massachusetts — the poorest city in the state. Married with a newborn son, making $4,000/month at peak as an active-duty Army Sergeant. The responsibility grew while the reward kept shrinking.",
    icon: Shield,
  },
  {
    label: "The Failed Attempt",
    title: "Lost $10K on Low-Ticket Dropshipping",
    description:
      "Tried the traditional route — cheap AliExpress products, Facebook ads, YouTube strategies. Tested 36 different products over months. Lost nearly $10,000. It took two full years before making a single dollar in profit from eCommerce.",
    icon: Zap,
  },
  {
    label: "The Shift",
    title: "Discovered High-Ticket Authorized Dealing",
    description:
      "Instead of fighting for margins on cheap products, made it logical — sell premium products from established brands as an authorized dealer. Saunas, wine coolers, pergolas, poker tables. Products that sell forever. Customers who find you through Google, already searching for what you have.",
    icon: DollarSign,
  },
  {
    label: "The Moment",
    title: "First Sale: $2,200 to Tom Harmon",
    description:
      "Sitting in a military counselor's office being convinced to stay in the Army — and a Shopify notification hit. A $2,200 sale. \"I couldn't even hear her anymore. All I could see was my phone. I had never seen a sale that big in my life.\"",
    icon: Zap,
  },
  {
    label: "The Scale",
    title: "$3.5M+ in Product Sales",
    description:
      "$100K in the first year of high-ticket. ~$2.3 million the year after. Over $3.5 million in physical product sales total. Thousands of dollars in daily sales at 25-30% margins. From not having $200 to spare — to $10K in sales over 3 days.",
    icon: TrendingUp,
  },
  {
    label: "The Freedom",
    title: "Miami, Full Autonomy",
    description:
      "Traveled for 6-7 months with family through Spain, Indonesia, and Thailand. Now living in Miami. No boss, no schedule, no ceiling. Built entirely while serving active duty in the military — every statistic said it was impossible.",
    icon: MapPin,
  },
];

const ProofPage = () => {
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
              The Real Story
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              No fabricated case studies. No fake names. This is Ason's actual journey
              — from Army soldier to seven-figure authorized dealer.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Metrics strip */}
      <section className="py-12 border-y border-border bg-secondary/20">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "$3.5M+", label: "In Product Sales" },
              { value: "25-30%", label: "Profit Margins" },
              { value: "$2,200", label: "First High-Ticket Sale" },
              { value: "2 Years", label: "From Broke to Free" },
            ].map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <span className="text-2xl md:text-3xl font-bold text-gradient-gold font-display block">
                  {metric.value}
                </span>
                <span className="text-sm text-muted-foreground mt-1 font-body">
                  {metric.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ason's Story — Timeline */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="section-label mb-4 inline-block">The Full Story</span>
            <h2 className="text-display md:text-display-lg">
              From $4K/Month to Seven Figures
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              Every statistic said a married Army Sergeant with a newborn son couldn't scale
              an online business while serving active duty. He did it anyway.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-16 pb-12 last:pb-0"
                >
                  {/* Timeline line */}
                  {index < milestones.length - 1 && (
                    <div className="absolute left-[22px] top-12 bottom-0 w-px bg-border" />
                  )}

                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0 w-11 h-11 rounded-full bg-secondary border border-border flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="card-premium p-6 md:p-8">
                    <span className="text-xs uppercase tracking-wider text-primary font-medium">
                      {milestone.label}
                    </span>
                    <h3 className="text-xl font-bold mt-2 mb-3">{milestone.title}</h3>
                    <p className="text-secondary-foreground/80 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="py-20 bg-secondary/30 noise-overlay relative">
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
        <div className="container-narrow relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-4xl md:text-5xl text-primary/20 font-display mb-4">"</div>
            <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed font-body italic max-w-3xl mx-auto">
              The real risk is not living the life that you want to live. Plain and simple.
              These things that we call dreams are truly just realities that we can all obtain.
              It's really just skills paired with time, consistency, and determination.
            </blockquote>
            <div className="mt-8">
              <p className="text-sm font-semibold text-foreground">Ason</p>
              <p className="text-xs text-muted-foreground">Founder, High Ticket Elites</p>
            </div>
          </motion.div>
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
              Join the network and start building your own story.
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
