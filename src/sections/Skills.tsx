import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';
import { TerminalSquare, MonitorSmartphone, Database, LayoutTemplate, GitBranch } from 'lucide-react';

const categoryIcons: Record<string, React.ReactNode> = {
  "Backend": <TerminalSquare className="w-5 h-5" />,
  "Frontend": <MonitorSmartphone className="w-5 h-5" />,
  "Database": <Database className="w-5 h-5" />,
  "Architecture": <LayoutTemplate className="w-5 h-5" />,
  "DevOps": <GitBranch className="w-5 h-5" />
};

export const Skills = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-black/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4 inline-block">
            Technical Arsenal
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-primary to-transparent mt-4 rounded-full opacity-50"></div>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={item}
              className="glass-card rounded-2xl relative overflow-hidden group h-full flex flex-col"
            >
              {/* Top border gradient highlight on hover */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="p-6 md:p-8 flex-grow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary border border-primary/20">
                    {categoryIcons[category.title] || <TerminalSquare className="w-5 h-5" />}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3.5 py-1.5 bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-foreground text-sm font-medium rounded-lg border border-white/5 hover:border-white/20 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};