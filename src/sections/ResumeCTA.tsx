import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';

export const ResumeCTA = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative bg-black/40">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring" }}
          className="relative rounded-3xl overflow-hidden glass border border-white/20 p-10 md:p-16 text-center"
        >
          {/* Animated Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 bg-[length:200%_auto] animate-[gradient_8s_linear_infinite] opacity-50 mix-blend-overlay"></div>

          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgwem0yMCAyMGMxLjEgMCAyLS45IDItMnMtLjktMi0yLTItMiAuOS0yIDIgLjkgMiAyIDJ6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=')]"></div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-20 h-20 mb-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              <FileText className="w-10 h-10 text-white" />
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Ready to build something meaningful?
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto font-medium">
              Explore my experience, projects and technical journey.
            </p>

            <a
              href="/resume/Gayatri-Chavan-Resume.pdf"
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl text-primary-foreground bg-gradient-to-r from-primary to-secondary hover:from-primary-light hover:to-secondary hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] transition-all duration-300 transform hover:-translate-y-1"
            >
              <Download className="mr-3 h-6 w-6 group-hover:animate-bounce" />
              Download Full Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};