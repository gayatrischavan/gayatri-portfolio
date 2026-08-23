
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';
import { socialLinks } from '../data/socialLinks';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-foreground">Get In Touch</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            {socialLinks.email ? (
              <a
                href={`mailto:${socialLinks.email}`}
                className="flex items-center px-6 py-3 bg-card border border-border rounded-md hover:bg-muted transition-colors w-full sm:w-auto justify-center text-foreground font-medium"
              >
                <Mail className="mr-3 h-5 w-5 text-primary" />
                Email Me
              </a>
            ) : (
               <div className="flex items-center px-6 py-3 bg-card border border-border rounded-md w-full sm:w-auto justify-center text-muted-foreground font-medium">
                <Mail className="mr-3 h-5 w-5 opacity-50" />
                Email (Pending Configuration)
              </div>
            )}

            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center px-6 py-3 bg-card border border-border rounded-md hover:bg-muted transition-colors w-full sm:w-auto justify-center text-foreground font-medium"
              >
                <Linkedin className="mr-3 h-5 w-5 text-primary" />
                LinkedIn
              </a>
            )}

            {socialLinks.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center px-6 py-3 bg-card border border-border rounded-md hover:bg-muted transition-colors w-full sm:w-auto justify-center text-foreground font-medium"
              >
                <Github className="mr-3 h-5 w-5 text-primary" />
                GitHub
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};