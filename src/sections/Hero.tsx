import { motion } from 'framer-motion';
import { ArrowRight, Download, Terminal, Database, LayoutTemplate, Box } from 'lucide-react';


export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[20%] left-[-10%] w-[40rem] h-[40rem] bg-primary/20 rounded-full mix-blend-multiply filter blur-[128px] animate-blob"></div>
        <div className="absolute top-[30%] right-[-10%] w-[40rem] h-[40rem] bg-secondary/20 rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-[20%] w-[40rem] h-[40rem] bg-accent/20 rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-4000"></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgwem0yMCAyMGMxLjEgMCAyLS45IDItMnMtLjktMi0yLTItMiAuOS0yIDIgLjkgMiAyIDJ6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=')] opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left Column: Typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase"
              >
                <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                Full-Stack .NET Developer
              </motion.div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]">
                Gayatri Chavan
              </h1>

              <h2 className="text-3xl sm:text-4xl font-bold text-gradient pb-2">
                Building Scalable & Impactful Solutions
              </h2>
            </div>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
              I build scalable and maintainable business applications using <strong className="text-foreground">.NET, React, PostgreSQL</strong> and modern software architecture principles.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#projects" className="inline-flex items-center justify-center px-6 py-3.5 border border-transparent text-base font-semibold rounded-xl text-primary-foreground bg-primary hover:bg-primary-light hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-300">
                View Projects
                <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
              </a>
              <a href="/resume/Gayatri-Chavan-Resume.pdf" className="inline-flex items-center justify-center px-6 py-3.5 border border-white/10 text-base font-semibold rounded-xl text-foreground bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
                <Download className="mr-2 -ml-1 h-5 w-5 text-muted-foreground" aria-hidden="true" />
                Resume
              </a>
            </div>

            <div className="pt-8 border-t border-white/10">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-4">Core Technologies</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: 'C# / .NET', icon: <Terminal size={14} className="mr-1.5" /> },
                  { name: 'React', icon: <LayoutTemplate size={14} className="mr-1.5" /> },
                  { name: 'PostgreSQL', icon: <Database size={14} className="mr-1.5" /> },
                  { name: 'Clean Arch', icon: <Box size={14} className="mr-1.5" /> }
                ].map((tech) => (
                  <span key={tech.name} className="flex items-center px-3.5 py-2 rounded-lg bg-card/50 border border-white/5 text-sm font-medium text-foreground hover:bg-card hover:border-white/20 transition-colors cursor-default glass">
                    {tech.icon}
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Abstract Visual Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:flex justify-center items-center relative h-[600px]"
          >
            {/* Core glowing circle */}
            <div className="absolute w-[400px] h-[400px] bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-2xl animate-pulse"></div>

            {/* Center portrait */}
            <div className="relative w-72 h-72 rounded-full glass-card border border-white/20 overflow-hidden z-10 shadow-2xl">
               <img
                 src="/profile.jpg"
                 alt="Gayatri Chavan"
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-hero-gradient mix-blend-overlay pointer-events-none"></div>
            </div>

            {/* Orbiting Tech Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute w-[500px] h-[500px] rounded-full border border-white/5 border-dashed"
            >
              {/* .NET Node */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 glass-card rounded-2xl flex items-center justify-center rotate-0" style={{ transform: 'translate(-50%, -50%) rotate(-360deg)' }}>
                <span className="font-bold text-sm text-primary">.NET</span>
              </div>

              {/* React Node */}
              <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-16 h-16 glass-card rounded-2xl flex items-center justify-center">
                <LayoutTemplate className="text-secondary" />
              </div>

              {/* PostgreSQL Node */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-16 h-16 glass-card rounded-2xl flex items-center justify-center">
                <Database className="text-blue-400" />
              </div>

              {/* Docker Node */}
              <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-16 h-16 glass-card rounded-2xl flex items-center justify-center">
                <Box className="text-cyan-400" />
              </div>
            </motion.div>

            {/* Inner orbit */}
             <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute w-[350px] h-[350px] rounded-full border border-primary/20"
            >
              <div className="absolute top-1/4 right-0 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(37,99,235,0.8)]"></div>
              <div className="absolute bottom-1/4 left-0 w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_rgba(139,92,246,0.8)]"></div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};