import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const forItems = [
  "Business owners ready to invest in a real asset",
  "People who want a system, not a side hustle",
  "Those willing to learn and execute consistently",
  "Entrepreneurs focused on long-term profitability",
];

const notForItems = [
  "Anyone looking for overnight results",
  "People unwilling to follow a proven process",
  "Those without capital to invest properly",
  "Anyone expecting zero effort",
];

const WhoItsForSection = () => {
  return (
    <section
      id="who-its-for"
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
          <span className="section-label mb-4 inline-block">Fit Check</span>
          <h2 className="text-display md:text-display-lg">Who This Is For</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* For */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card-premium p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                <Check className="h-5 w-5 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold">This is for you if:</h3>
            </div>
            <ul className="space-y-4">
              {forItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Not For */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card-premium p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                <X className="h-5 w-5 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold">This is not for you if:</h3>
            </div>
            <ul className="space-y-4">
              {notForItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoItsForSection;
