import React, { useEffect } from "react";

import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

export const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20 pb-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <Link to="/" className="text-primary hover:underline flex items-center justify-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const { details } = project;

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-background min-h-screen">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Link>

        <header className="mb-12 border-b border-border pb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">{project.name}</h1>
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center px-4 py-2 border border-border rounded-md hover:bg-muted text-foreground transition-colors">
                <Github className="mr-2 h-5 w-5" />
                View Source
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                <ExternalLink className="mr-2 h-5 w-5" />
                Live Demo
              </a>
            )}
          </div>
        </header>

        {details ? (
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground border-b border-border pb-2 inline-block">Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{details.overview}</p>
            </section>

            <div className="grid md:grid-cols-2 gap-8">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground border-b border-border pb-2 inline-block">Problem</h2>
                <p className="text-muted-foreground leading-relaxed">{details.problem}</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground border-b border-border pb-2 inline-block">Solution</h2>
                <p className="text-muted-foreground leading-relaxed">{details.solution}</p>
              </section>
            </div>

            <section>
              <h2 className="text-2xl font-bold mb-6 text-foreground border-b border-border pb-2 inline-block">Technology Stack</h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="px-4 py-2 bg-card border border-border text-foreground font-medium rounded-lg shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {details.architecture && (
              <section>
                <h2 className="text-2xl font-bold mb-6 text-foreground border-b border-border pb-2 inline-block">Architecture Flow</h2>
                <div className="bg-card border border-border p-6 rounded-xl overflow-x-auto shadow-inner">
                  <div className="flex flex-col items-center min-w-max py-4">
                    {details.architecture.map((layer, idx) => (
                      <React.Fragment key={idx}>
                        <div className="px-6 py-3 bg-muted text-foreground font-semibold rounded-lg shadow-sm w-64 text-center border border-border/50">
                          {layer}
                        </div>
                        {idx < details.architecture!.length - 1 && (
                          <div className="h-6 w-px bg-primary/50 my-1 relative">
                             <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-r-2 border-b-2 border-primary/50 transform rotate-45"></div>
                          </div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </section>
            )}

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground border-b border-border pb-2 inline-block">My Contributions</h2>
              <ul className="space-y-3 bg-card border border-border p-6 rounded-xl">
                {details.myContributions.map((contribution, idx) => (
                  <li key={idx} className="flex items-start text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mr-4 mt-2 flex-shrink-0"></span>
                    <span className="leading-relaxed">{contribution}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground border-b border-border pb-2 inline-block">Challenges & Solutions</h2>
              <div className="space-y-4">
                {details.challengesAndSolutions.map((challenge, idx) => (
                   <div key={idx} className="bg-card border-l-4 border-primary p-5 rounded-r-xl text-muted-foreground leading-relaxed shadow-sm">
                    {challenge}
                  </div>
                ))}
              </div>
            </section>
          </div>
        ) : (
          <div className="text-center py-12 bg-card border border-border rounded-xl">
             <p className="text-muted-foreground">Detailed project information is currently being updated.</p>
          </div>
        )}
      </div>
    </div>
  );
};