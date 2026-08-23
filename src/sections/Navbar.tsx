
import { Link } from 'react-router-dom';
import { socialLinks } from '../data/socialLinks';
import { Github, Linkedin, Moon, Sun, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold text-primary">GC.</Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                link.href.startsWith('#') ? (
                  <a key={link.name} href={link.href} className="hover:text-primary transition-colors text-sm font-medium">
                    {link.name}
                  </a>
                ) : (
                  <Link key={link.name} to={link.href} className="hover:text-primary transition-colors text-sm font-medium">
                    {link.name}
                  </Link>
                )
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="/resume/Gayatri-Chavan-Resume.pdf" className="text-sm font-medium hover:text-primary transition-colors">Resume</a>
            {socialLinks.github && <a href={socialLinks.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary"><Github size={20} /></a>}
            {socialLinks.linkedin && <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary"><Linkedin size={20} /></a>}
            <button onClick={toggleTheme} className="text-muted-foreground hover:text-primary p-2 rounded-full" aria-label="Toggle theme">
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <button onClick={toggleTheme} className="text-muted-foreground p-2" aria-label="Toggle theme">
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-foreground p-2 focus:outline-none" aria-label="Toggle menu">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
               link.href.startsWith('#') ? (
                 <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:text-primary hover:bg-muted/50">
                   {link.name}
                 </a>
               ) : (
                 <Link key={link.name} to={link.href} onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:text-primary hover:bg-muted/50">
                   {link.name}
                 </Link>
               )
            ))}
            <a href="/resume/Gayatri-Chavan-Resume.pdf" className="block px-3 py-2 rounded-md text-base font-medium hover:text-primary hover:bg-muted/50">Resume</a>
          </div>
        </div>
      )}
    </nav>
  );
};