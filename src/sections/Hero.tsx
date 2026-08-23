
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            <span className="block text-foreground">Gayatri Chavan</span>
            <span className="block text-primary text-2xl sm:text-3xl md:text-4xl mt-2 font-bold">Full-Stack .NET Developer</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I build scalable and maintainable business applications using .NET, React, PostgreSQL and modern software architecture principles.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="#projects" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 transition-colors">
              View Projects
              <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
            </a>
            <a href="/resume/Gayatri-Chavan-Resume.pdf" className="inline-flex items-center justify-center px-6 py-3 border border-border text-base font-medium rounded-md text-foreground bg-background hover:bg-muted transition-colors">
              <Download className="mr-2 -ml-1 h-5 w-5" aria-hidden="true" />
              Download Resume
            </a>
            <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 border border-border text-base font-medium rounded-md text-foreground bg-background hover:bg-muted transition-colors">
              <Mail className="mr-2 -ml-1 h-5 w-5" aria-hidden="true" />
              Contact Me
            </a>
          </div>

          <div className="mt-16 border-t border-border pt-8">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Technology Highlights</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['.NET', 'React', 'PostgreSQL', 'Clean Architecture', 'CQRS', 'Docker'].map((tech) => (
                <span key={tech} className="px-4 py-2 rounded-full bg-muted text-sm font-medium text-foreground">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};