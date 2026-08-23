import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Moon, Sun, Menu, X, FileText } from 'lucide-react';
import { socialLinks } from '../data/socialLinks';
import { cn } from '../lib/utils';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Default to dark theme for premium feel
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "glass py-3 border-white/10" : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0"
          >
            <Link to="/" className="text-2xl font-extrabold tracking-tighter text-foreground flex items-center gap-1">
              GC<span className="text-primary">.</span>
            </Link>
          </motion.div>

          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden md:flex items-center space-x-1"
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href || (location.pathname === '/' && location.hash === link.href);

              return link.href.startsWith('#') ? (
                <a
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 relative group",
                    isActive ? "text-primary" : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-active"
                      className="absolute inset-0 bg-primary/10 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 relative group",
                    isActive ? "text-primary" : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-active"
                      className="absolute inset-0 bg-primary/10 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex items-center space-x-3 border-l border-white/10 pl-6 ml-2"
          >
            <a
              href="/resume/Gayatri-Chavan-Resume.pdf"
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors border border-primary/20"
            >
              <FileText size={16} />
              Resume
            </a>

            <div className="flex items-center space-x-1 ml-2">
              {socialLinks.github && (
                <a href={socialLinks.github} target="_blank" rel="noreferrer" className="p-2 text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-full transition-colors">
                  <Github size={18} />
                </a>
              )}
              {socialLinks.linkedin && (
                <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="p-2 text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-full transition-colors">
                  <Linkedin size={18} />
                </a>
              )}
              <button
                onClick={toggleTheme}
                className="p-2 text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-full transition-colors ml-1"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
              </button>
            </div>
          </motion.div>

          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="p-2 text-muted-foreground hover:text-foreground rounded-full"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-foreground focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                 link.href.startsWith('#') ? (
                   <a
                     key={link.name}
                     href={link.href}
                     onClick={() => setIsMobileMenuOpen(false)}
                     className="block px-4 py-3 rounded-xl text-base font-medium text-muted-foreground hover:text-foreground hover:bg-white/5"
                   >
                     {link.name}
                   </a>
                 ) : (
                   <Link
                     key={link.name}
                     to={link.href}
                     onClick={() => setIsMobileMenuOpen(false)}
                     className="block px-4 py-3 rounded-xl text-base font-medium text-muted-foreground hover:text-foreground hover:bg-white/5"
                   >
                     {link.name}
                   </Link>
                 )
              ))}

              <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-4">
                <a
                  href="/resume/Gayatri-Chavan-Resume.pdf"
                  className="flex justify-center items-center gap-2 px-4 py-3 text-base font-semibold rounded-xl bg-primary text-primary-foreground"
                >
                  <FileText size={18} />
                  Download Resume
                </a>
                <div className="flex justify-center gap-6">
                  {socialLinks.github && (
                    <a href={socialLinks.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
                      <Github size={24} />
                    </a>
                  )}
                  {socialLinks.linkedin && (
                    <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
                      <Linkedin size={24} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};