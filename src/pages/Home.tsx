
import { Hero } from '../sections/Hero';
import { About } from '../sections/About';
import { Skills } from '../sections/Skills';
import { Experience } from '../sections/Experience';
import { FeaturedProjects } from '../sections/FeaturedProjects';
import { TechnicalJourney } from '../sections/TechnicalJourney';
import { ResumeCTA } from '../sections/ResumeCTA';
import { Contact } from '../sections/Contact';

export const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <FeaturedProjects />
      <TechnicalJourney />
      <ResumeCTA />
      <Contact />
    </main>
  );
};