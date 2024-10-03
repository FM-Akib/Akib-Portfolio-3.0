import Footer from '@/components/shared/Footer';
import About from '@/components/ui/About';
import Award from '@/components/ui/Award';
import Cirtification from '@/components/ui/Cirtification';
import ContactForm from '@/components/ui/ContactForm';
import Education from '@/components/ui/Education';
import Hero from '@/components/ui/Hero';
import Projects from '@/components/ui/Projects';
import Skills from '@/components/ui/Skills';
import React from 'react';


const Home = () => {
  return (
    <div >
      <section id="hero">
        <Hero />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="award">
        <Award />
      </section>
      <section id="certification">
        <Cirtification />
      </section>
      <section id="education">
        <Education />
      </section>
      <About/>
      <section id="contact">
      <ContactForm/>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
