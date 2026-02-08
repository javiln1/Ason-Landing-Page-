import { motion } from "framer-motion";

const videos = [
  {
    id: "oAx0s0vz5Oc",
    title: "Student Success Story",
  },
  {
    id: "B4Uu0gTrhiU",
    title: "Program Results",
  },
];

const VideoTestimonialsSection = () => {
  return (
    <section
      id="video-testimonials"
      className="section-padding noise-overlay relative overflow-hidden"
    >
      {/* Radial accent backgrounds */}
      <div className="absolute inset-0 bg-radial-burgundy" />
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
            Success Stories
          </span>
          <h2 className="text-display md:text-display-lg">
            Hear From Our <span className="gold-shimmer">Students</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="card-premium-hover overflow-hidden gold-corner-frame">
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonialsSection;
