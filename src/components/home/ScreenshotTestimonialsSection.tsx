import { motion } from "framer-motion";
import { useState } from "react";

const testimonialImages = [
  "038ef7db21e686fbdedc60a361701e8f.png",
  "03f38000794e412e47387cb7eb08d633.png",
  "Pat4.6k.jpg",
  "77kmo kenny.jpg",
  "SR1 (2).jpg",
  "unnamed (2).jpg",
  "unnamed (5).jpg",
  "unnamed (41).jpg",
  "unnamed (68).jpg",
  "unnamed (72).jpg",
];

const ScreenshotTestimonialsSection = () => {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  return (
    <section
      id="screenshot-testimonials"
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
          <span className="section-label mb-4 inline-block">Results</span>
          <h2 className="text-display md:text-display-lg">
            Student <span className="text-gradient-gold">Wins</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {testimonialImages.map((img, index) => (
            <motion.div
              key={img}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="cursor-pointer group"
              onClick={() => setLightboxImg(img)}
            >
              <div className="card-premium overflow-hidden transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-glow-gold">
                <img
                  src={`/testimonials/${img}`}
                  alt={`Student result ${index + 1}`}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm cursor-pointer"
          onClick={() => setLightboxImg(null)}
        >
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            src={`/testimonials/${lightboxImg}`}
            alt="Student result"
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
          />
        </div>
      )}
    </section>
  );
};

export default ScreenshotTestimonialsSection;
