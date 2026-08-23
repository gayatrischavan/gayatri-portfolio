import { motion } from 'framer-motion';
import { experiences } from '../data/experience';
import { Briefcase, Building2, CheckCircle2 } from 'lucide-react';

export const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4 flex items-center">
            Experience
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-transparent ml-6 rounded-full"></div>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-white/10 to-transparent"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 md:pl-24"
              >
                {/* Timeline Node */}
                <div className="absolute left-[-4px] md:left-[28px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background/50 shadow-[0_0_10px_rgba(37,99,235,0.5)] z-10"></div>

                <div className="glass-card p-6 md:p-8 rounded-2xl border-l-2 border-l-primary/50 group hover:border-l-primary transition-colors">

                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-primary" />
                        {exp.role}
                      </h3>
                      <p className="text-lg text-muted-foreground flex items-center gap-2 mt-2">
                        <Building2 className="w-4 h-4" />
                        {exp.company}
                      </p>
                    </div>
                    {exp.duration && (
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-muted-foreground whitespace-nowrap">
                        {exp.duration}
                      </div>
                    )}
                  </div>

                  {/* Grouped Responsibilities (Custom formatting for the specific intern data) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="space-y-4">
                      <h4 className="text-sm font-semibold text-primary uppercase tracking-wider">Backend & Architecture</h4>
                      <ul className="space-y-2">
                        {[
                          ".NET backend development",
                          "REST APIs",
                          "PostgreSQL & Entity Framework Core",
                          "Clean Architecture",
                          "CQRS"
                        ].map((item, idx) => (
                           <li key={idx} className="flex items-start text-muted-foreground text-sm">
                            <CheckCircle2 className="w-4 h-4 text-primary/70 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-sm font-semibold text-secondary uppercase tracking-wider">Frontend & Business</h4>
                      <ul className="space-y-2">
                        {[
                          "React frontend development",
                          "ERP/business modules",
                          "Reporting",
                          "Debugging",
                          "QA and issue resolution"
                        ].map((item, idx) => (
                           <li key={idx} className="flex items-start text-muted-foreground text-sm">
                            <CheckCircle2 className="w-4 h-4 text-secondary/70 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-2">
                    {['.NET', 'C#', 'React', 'PostgreSQL', 'EF Core', 'CQRS', 'Clean Arch'].map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded-md bg-white/5 text-xs font-medium text-muted-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};