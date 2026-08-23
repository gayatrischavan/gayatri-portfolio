import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, ExternalLink, Layers, Database, PackageOpen } from 'lucide-react';
import { projects } from '../data/projects';
import { cn } from '../lib/utils';

export const FeaturedProjects = () => {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-black/20">
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-secondary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4 inline-block">
            Featured Projects
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-secondary to-transparent mt-4 rounded-full opacity-50"></div>
          </h2>
        </motion.div>

        <div className="space-y-12 lg:space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="group"
            >
              <div className="glass-card rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]">

                <div className="grid grid-cols-1 lg:grid-cols-2">

                  {/* Left: Content */}
                  <div className="p-8 md:p-12 flex flex-col h-full justify-between order-2 lg:order-1">
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <h3 className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {project.name}
                        </h3>
                        <div className="flex gap-3">
                          {project.githubUrl && (
                            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/5 text-muted-foreground hover:text-foreground hover:bg-white/10 transition-colors">
                              <Github size={20} />
                            </a>
                          )}
                          {project.liveUrl && (
                            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                              <ExternalLink size={20} />
                            </a>
                          )}
                        </div>
                      </div>

                      <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                        {project.shortDescription}
                      </p>

                      <div className="mb-8">
                        <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-widest opacity-80">Key Features</h4>
                        <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                          {project.keyFeatures.slice(0, 6).map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 rounded-full bg-secondary/70 mr-2.5"></div>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.technologies.slice(0, 6).map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 bg-background/50 border border-white/5 text-muted-foreground text-xs font-medium rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <Link
                        to={`/project/${project.id}`}
                        className="inline-flex items-center justify-center px-6 py-3 bg-white/5 hover:bg-white/10 text-foreground text-sm font-semibold rounded-xl border border-white/10 transition-all duration-300 group/btn"
                      >
                        View Project Details
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>

                  {/* Right: Abstract Visual Preview */}
                  <div className={cn(
                    "relative overflow-hidden min-h-[300px] lg:min-h-full border-b lg:border-b-0 lg:border-l border-white/10 order-1 lg:order-2",
                    index % 2 !== 0 ? "bg-gradient-to-br from-primary/10 to-transparent" : "bg-gradient-to-bl from-secondary/10 to-transparent"
                  )}>
                    {/* Abstract UI composition to simulate project screenshot */}
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      <div className="w-full h-full max-h-[400px] glass-card rounded-xl border border-white/10 shadow-2xl overflow-hidden flex flex-col transform group-hover:scale-[1.02] transition-transform duration-500">
                        {/* Fake browser/app header */}
                        <div className="h-10 bg-black/40 border-b border-white/5 flex items-center px-4 gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                        </div>
                        {/* Fake app content area */}
                        <div className="flex-1 p-6 flex flex-col gap-4">
                           {/* Skeleton header */}
                           <div className="flex justify-between items-center pb-4 border-b border-white/5">
                             <div className="w-1/3 h-6 bg-white/10 rounded-md"></div>
                             <div className="w-10 h-10 bg-primary/20 rounded-full"></div>
                           </div>
                           {/* Skeleton body layout based on project type */}
                           {project.name.toLowerCase().includes('erp') ? (
                             <div className="flex-1 grid grid-cols-3 gap-4">
                                <div className="col-span-1 glass bg-white/5 rounded-lg p-4 flex flex-col gap-3">
                                  <div className="w-full h-4 bg-white/10 rounded"></div>
                                  <div className="w-3/4 h-4 bg-white/10 rounded"></div>
                                  <div className="w-5/6 h-4 bg-white/10 rounded"></div>
                                </div>
                                <div className="col-span-2 glass bg-white/5 rounded-lg p-4 flex flex-col gap-4">
                                   <div className="w-1/4 h-8 bg-secondary/20 rounded"></div>
                                   <div className="flex-1 bg-white/5 rounded border border-white/5"></div>
                                </div>
                             </div>
                           ) : (
                             <div className="flex-1 flex flex-col gap-4">
                               <div className="flex gap-4">
                                 <div className="h-24 flex-1 glass bg-white/5 rounded-lg border border-white/5 flex items-center justify-center"><PackageOpen className="text-white/20" size={32}/></div>
                                 <div className="h-24 flex-1 glass bg-white/5 rounded-lg border border-white/5 flex items-center justify-center"><Layers className="text-white/20" size={32}/></div>
                                 <div className="h-24 flex-1 glass bg-white/5 rounded-lg border border-white/5 flex items-center justify-center"><Database className="text-white/20" size={32}/></div>
                               </div>
                               <div className="flex-1 glass bg-white/5 rounded-lg border border-white/5 mt-2"></div>
                             </div>
                           )}
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};