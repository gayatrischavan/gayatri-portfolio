
import { motion } from 'framer-motion';

export const TechnicalJourney = () => {
  const exploringTopics = [
    "System Design",
    "Redis",
    "Backend Performance",
    "Distributed Systems",
    "Docker & CI/CD",
    "Cloud Architecture",
    "DevOps"
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-foreground">Technical Journey</h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Software development is a continuous learning process. Here are the areas I am currently exploring and deepening my knowledge in to build more robust and scalable systems.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {exploringTopics.map((topic, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-card border border-border rounded-full shadow-sm text-foreground font-medium flex items-center"
              >
                <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse"></div>
                {topic}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};