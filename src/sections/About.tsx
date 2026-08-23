
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-foreground">About Me</h2>
          <div className="prose prose-lg dark:prose-invert text-muted-foreground">
            <p className="mb-6">
              I am a Computer Science graduate and Full-Stack Developer with experience working on real-world business applications. I specialize in building robust and scalable solutions from the backend database to the frontend user interface.
            </p>
            <p className="mb-8">
              My expertise lies in architecting enterprise-grade applications, focusing on clean code, maintainability, and performance.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-4">Core Focus Areas</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 list-none p-0">
              {[
                '.NET backend development',
                'React frontend development',
                'REST APIs',
                'PostgreSQL',
                'Entity Framework Core',
                'Clean Architecture',
                'CQRS',
                'Enterprise/business applications'
              ].map((item, index) => (
                <li key={index} className="flex items-center text-muted-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};