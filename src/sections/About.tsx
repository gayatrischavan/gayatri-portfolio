import { motion } from 'framer-motion';
import { Server, Code2, Lightbulb, BookOpen } from 'lucide-react';

export const About = () => {
  const focusAreas = [
    {
      title: "Backend Engineering",
      description: "Architecting robust APIs and services using .NET & C#.",
      icon: <Server className="h-6 w-6 text-primary" />
    },
    {
      title: "Clean Architecture",
      description: "Building maintainable systems with Domain-Driven Design principles.",
      icon: <Code2 className="h-6 w-6 text-secondary" />
    },
    {
      title: "Problem Solving",
      description: "Translating complex business requirements into technical solutions.",
      icon: <Lightbulb className="h-6 w-6 text-accent-foreground" />
    },
    {
      title: "Continuous Learning",
      description: "Exploring cloud architectures and distributed systems.",
      icon: <BookOpen className="h-6 w-6 text-blue-400" />
    }
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -left-[20%] top-[20%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4 flex items-center">
            About Me
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-transparent ml-6 rounded-full"></div>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Column: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg dark:prose-invert"
          >
            <p className="text-xl text-foreground font-medium mb-6 leading-relaxed">
              I am a Computer Science graduate and Full-Stack Developer with experience working on real-world business applications.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              My expertise lies in architecting enterprise-grade applications, focusing on clean code, maintainability, and performance. I specialize in building robust and scalable solutions starting from the backend database all the way to the frontend user interface.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether it's designing a CQRS-based backend in .NET, writing complex PostgreSQL queries, or building a responsive React frontend, I enjoy solving problems that deliver real business value.
            </p>
          </motion.div>

          {/* Right Column: Focus Area Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {focusAreas.map((area, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="glass-card p-6 rounded-2xl relative group overflow-hidden"
              >
                {/* Hover gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="mb-4 p-3 bg-white/5 rounded-xl inline-block border border-white/5">
                  {area.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{area.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};