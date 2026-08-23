
import { motion } from 'framer-motion';
import { experiences } from '../data/experience';

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-foreground">Professional Experience</h2>

          <div className="space-y-12">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative pl-8 md:pl-0">
                <div className="md:grid md:grid-cols-4 md:gap-8 items-start">
                  <div className="hidden md:block col-span-1 pt-1">
                     {/* Placeholder for timeline/date if available in future */}
                  </div>

                  <div className="md:col-span-3">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-foreground">{exp.role}</h3>
                      <p className="text-lg text-primary font-medium">{exp.company}</p>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {exp.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          <span className="leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};