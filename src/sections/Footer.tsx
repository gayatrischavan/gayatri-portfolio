import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { socialLinks } from '../data/socialLinks';


export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-black/40 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-8 pb-8 border-b border-white/5">

          {/* Left: Branding */}
          <div className="text-center md:text-left">
            <div className="text-2xl font-extrabold tracking-tighter text-foreground mb-2 flex items-center justify-center md:justify-start gap-1">
              GC<span className="text-primary">.</span>
            </div>
            <p className="text-sm text-muted-foreground font-medium">
              Building solutions.<br />
              Creating impact.
            </p>
          </div>

          {/* Center: Copyright */}
          <div className="text-center">
             <p className="text-muted-foreground text-sm font-medium">
              &copy; {new Date().getFullYear()} Gayatri Chavan
            </p>
          </div>

          {/* Right: Links & Top Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-end gap-6">
            <div className="flex gap-4">
               {socialLinks.github && (
                <a href={socialLinks.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
                  <Github size={20} />
                </a>
              )}
              {socialLinks.linkedin && (
                <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
              )}
              {socialLinks.email && (
                <a href={`mailto:${socialLinks.email}`} className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Email">
                  <Mail size={20} />
                </a>
              )}
            </div>

            <button
              onClick={scrollToTop}
              className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-foreground transition-all flex items-center justify-center group"
              aria-label="Back to top"
            >
              <ArrowUp size={18} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="text-center">
           <p className="text-xs text-muted-foreground/50 font-medium">
            Designed and built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};