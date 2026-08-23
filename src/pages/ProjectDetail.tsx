import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, ArrowDown, Database, Server, Monitor, Layers } from 'lucide-react';
import { projects } from '../data/projects';
import { motion } from 'framer-motion';

export const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20 pb-12 bg-background">
        <div className="text-center glass-card p-12 rounded-3xl">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Project not found</h2>
          <Link to="/#projects" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary-light transition-colors">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const { details } = project;

  return (
    <div className="pt-24 pb-24 px-4 sm:px-6 lg:px-8 bg-background min-h-screen relative">
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary/5 rounded-[100%] blur-[120px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <Link to="/#projects" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8 group">
          <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        <header className="mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-extrabold text-foreground mb-6 tracking-tight"
          >
            {project.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl"
          >
            {project.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center gap-4"
          >
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center px-6 py-3 border border-white/10 rounded-xl hover:bg-white/5 text-foreground font-semibold transition-colors glass">
                <Github className="mr-2 h-5 w-5" />
                View Source
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary-light font-semibold shadow-lg hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all">
                <ExternalLink className="mr-2 h-5 w-5" />
                Live Demo
              </a>
            )}
          </motion.div>
        </header>

        {details ? (
          <div className="space-y-16">
            <section className="glass-card p-8 md:p-12 rounded-3xl border border-white/5">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{details.overview}</p>
            </section>

            <div className="grid md:grid-cols-2 gap-8">
              <section className="glass-card p-8 md:p-12 rounded-3xl border border-white/5 border-l-4 border-l-red-500/50">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Problem</h2>
                <p className="text-muted-foreground leading-relaxed">{details.problem}</p>
              </section>
              <section className="glass-card p-8 md:p-12 rounded-3xl border border-white/5 border-l-4 border-l-green-500/50">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Solution</h2>
                <p className="text-muted-foreground leading-relaxed">{details.solution}</p>
              </section>
            </div>

            <section>
              <h2 className="text-2xl font-bold mb-8 text-foreground">Technology Stack</h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="px-5 py-2.5 glass-card border border-white/10 text-foreground font-semibold rounded-xl hover:border-primary/50 transition-colors cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {details.architecture && (
              <section>
                <h2 className="text-2xl font-bold mb-8 text-foreground">Architecture Flow</h2>
                <div className="glass-card border border-white/10 p-12 rounded-3xl overflow-x-auto">
                  <div className="flex flex-col items-center min-w-[300px] py-4">
                    {details.architecture.map((layer, idx) => {
                      let Icon = Layers;
                      if(layer.toLowerCase().includes('react')) Icon = Monitor;
                      if(layer.toLowerCase().includes('api')) Icon = Server;
                      if(layer.toLowerCase().includes('postgres') || layer.toLowerCase().includes('sql')) Icon = Database;

                      return (
                        <div key={idx} className="flex flex-col items-center w-full">
                          <div className="px-8 py-4 glass bg-white/5 text-foreground font-bold rounded-2xl w-72 text-center border border-white/10 flex items-center justify-center gap-3 relative group hover:border-primary/50 transition-colors">
                            <Icon className="w-5 h-5 text-primary/70 group-hover:text-primary transition-colors" />
                            {layer}
                          </div>
                          {idx < details.architecture!.length - 1 && (
                            <div className="h-10 flex items-center justify-center text-muted-foreground/50 my-1">
                               <ArrowDown className="w-6 h-6 animate-pulse" />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>
            )}

            <div className="grid md:grid-cols-2 gap-8">
              <section>
                <h2 className="text-2xl font-bold mb-6 text-foreground">My Contributions</h2>
                <ul className="space-y-4 glass-card border border-white/5 p-8 rounded-3xl h-full">
                  {details.myContributions.map((contribution, idx) => (
                    <li key={idx} className="flex items-start text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-4 mt-2.5 flex-shrink-0 shadow-[0_0_8px_rgba(37,99,235,0.8)]"></div>
                      <span className="leading-relaxed">{contribution}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-6 text-foreground">Challenges & Solutions</h2>
                <div className="space-y-6">
                  {details.challengesAndSolutions.map((challenge, idx) => (
                     <div key={idx} className="glass-card border-l-4 border-l-secondary p-6 md:p-8 rounded-r-3xl text-muted-foreground leading-relaxed">
                      {challenge}
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        ) : (
          <div className="text-center py-20 glass-card border border-white/5 rounded-3xl">
             <Layers className="w-16 h-16 text-white/10 mx-auto mb-4" />
             <p className="text-xl text-muted-foreground font-medium">Detailed project information is currently being updated.</p>
          </div>
        )}
      </div>
    </div>
  );
};