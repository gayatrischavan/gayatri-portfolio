
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export const ResumeCTA = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to work together?</h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Review my full professional background, education, and detailed project history.
          </p>
          <a
            href="/resume/Gayatri-Chavan-Resume.pdf"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-md text-primary bg-background hover:bg-background/90 transition-colors shadow-lg"
          >
            <Download className="mr-2 h-6 w-6" />
            Download Full Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};