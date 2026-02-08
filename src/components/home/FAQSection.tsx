import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How much capital do I need to start?",
    answer:
      "Plan for $5,000-$15,000 to cover initial inventory deposits, store setup, and ad spend. The exact amount depends on your niche and how aggressively you want to scale.",
  },
  {
    question: "How long until I see results?",
    answer:
      "Most dealers start seeing their first sales within 30-60 days of launching ads. Consistent profitability typically develops over 3-6 months as you optimize your campaigns and expand your product catalog.",
  },
  {
    question: "Is this dropshipping?",
    answer:
      "No. While you may not hold all inventory yourself, you're working with legitimate supplier relationships as an authorized dealer. You have real business agreements, not just scraping products from other retailers.",
  },
  {
    question: "What products can I sell?",
    answer:
      "Premium, brand-name products in categories like appliances, outdoor equipment, home goods, and specialty items. We help you identify niches with strong demand and accessible supplier relationships.",
  },
  {
    question: "Do I need technical experience?",
    answer:
      "Basic computer skills are enough. Shopify handles the technical infrastructure, and we provide training on everything else—from supplier outreach to Google Ads management.",
  },
  {
    question: "What ongoing support do I get?",
    answer:
      "Access to our training library, supplier database, community of active dealers, and direct support for strategy questions. You're not doing this alone.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-secondary/30 noise-overlay">
      <div className="container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 inline-block">FAQ</span>
          <h2 className="text-display md:text-display-lg">Common Questions</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="card-premium px-6 border-none"
              >
                <AccordionTrigger className="text-left text-base font-semibold py-5 hover:no-underline hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
