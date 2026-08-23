import { motion } from 'framer-motion';
import { Route, Layers, Zap, Network, Container, Cloud, GitMerge } from 'lucide-react';

export const TechnicalJourney = () => {
  const exploringTopics = [
    { name: "System Design", icon: <Route className="w-5 h-5" /> },
    { name: "Redis", icon: <Zap className="w-5 h-5 text-red-400" /> },
    { name: "Backend Performance", icon: <Layers className="w-5 h-5 text-primary" /> },
    { name: "Distributed Systems", icon: <Network className="w-5 h-5 text-secondary" /> },
    { name: "Docker & CI/CD", icon: <Container className="w-5 h-5 text-blue-400" /> },
    { name: "Cloud Architecture", icon: <Cloud className="w-5 h-5 text-sky-400" /> },
    { name: "DevOps", icon: <GitMerge className="w-5 h-5 text-orange-400" /> }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-background">
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/5 rounded-[100%] blur-[120px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6">Technical Journey</h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-16 max-w-2xl mx-auto leading-relaxed">
            Currently exploring technologies and concepts to build more scalable and reliable systems.
          </p>

          {/* Roadmap Visualization */}
          <div className="relative pt-10 pb-10">
            {/* Winding path SVG background */}
            <div className="absolute inset-0 pointer-events-none opacity-20 hidden md:block">
              <svg width="100%" height="100%" viewBox="0 0 1000 400" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path d="M50 200 C 200 50, 300 350, 500 200 C 700 50, 800 350, 950 200" stroke="url(#paint0_linear)" strokeWidth="4" strokeDasharray="10 10" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="paint0_linear" x1="0" y1="200" x2="1000" y2="200" gradientUnits="userSpaceOnUse">
                    <stop stopColor="hsl(var(--primary))" stopOpacity="0.2"/>
                    <stop offset="0.5" stopColor="hsl(var(--primary))"/>
                    <stop offset="1" stopColor="hsl(var(--secondary))" stopOpacity="0.2"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="flex flex-wrap justify-center gap-6 relative z-10">
              {exploringTopics.map((topic, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="px-6 py-4 glass-card border border-white/10 rounded-2xl shadow-xl flex items-center gap-4 group cursor-default"
                >
                  <div className="p-2 rounded-xl bg-white/5 border border-white/5 group-hover:bg-primary/20 group-hover:border-primary/30 transition-colors">
                    {topic.icon}
                  </div>
                  <span className="text-foreground font-semibold tracking-wide">{topic.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};