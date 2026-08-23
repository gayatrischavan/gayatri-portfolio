import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, ExternalLink } from 'lucide-react';
import { socialLinks } from '../data/socialLinks';

export const Contact = () => {
  const contactCards = [
    {
      title: "Email",
      value: socialLinks.email ? "Send me an email" : "Pending Configuration",
      icon: <Mail className="w-6 h-6" />,
      href: socialLinks.email ? `mailto:${socialLinks.email}` : null,
      color: "text-blue-400",
      bgHover: "hover:bg-blue-400/10"
    },
    {
      title: "LinkedIn",
      value: socialLinks.linkedin ? "Connect on LinkedIn" : "Pending Configuration",
      icon: <Linkedin className="w-6 h-6" />,
      href: socialLinks.linkedin || null,
      color: "text-blue-500",
      bgHover: "hover:bg-blue-500/10"
    },
    {
      title: "GitHub",
      value: socialLinks.github ? "View my repositories" : "Pending Configuration",
      icon: <Github className="w-6 h-6" />,
      href: socialLinks.github || null,
      color: "text-foreground",
      bgHover: "hover:bg-white/5"
    },
    {
      title: "Location",
      value: "Pune, India",
      icon: <MapPin className="w-6 h-6" />,
      href: null,
      color: "text-red-400",
      bgHover: "hover:bg-red-400/10"
    }
  ];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">Let's Connect</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm always open to discussing new opportunities, technical challenges, or just having a chat about software architecture. Feel free to reach out through any of these platforms.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {contactCards.map((card, index) => (
              card.href ? (
                <a
                  key={index}
                  href={card.href}
                  target={card.href.startsWith('mailto') ? "_self" : "_blank"}
                  rel="noreferrer"
                  className={`glass-card p-6 rounded-2xl flex items-center gap-5 group transition-all duration-300 ${card.bgHover} border-white/5 hover:border-white/20`}
                >
                  <div className={`p-4 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300 ${card.color}`}>
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">{card.title}</h3>
                    <p className="text-foreground font-medium flex items-center gap-2 group-hover:text-primary transition-colors">
                      {card.value}
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity -ml-2 group-hover:ml-0" />
                    </p>
                  </div>
                </a>
              ) : (
                <div
                  key={index}
                  className="glass-card p-6 rounded-2xl flex items-center gap-5 border-white/5 opacity-70"
                >
                  <div className={`p-4 rounded-xl bg-white/5 border border-white/10 ${card.color}`}>
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">{card.title}</h3>
                    <p className="text-muted-foreground font-medium">{card.value}</p>
                  </div>
                </div>
              )
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};