import Footer from '@/components/shared/Footer';
import Award from '@/components/ui/Award';
import Cirtification from '@/components/ui/Cirtification';
import Education from '@/components/ui/Education';
import Hero from '@/components/ui/Hero';
import Projects from '@/components/ui/Projects';
import Skills from '@/components/ui/Skills';
import React from 'react';

const Home = () => {
  return (
    <>
    <Hero />
    <Projects />
    <Skills />
    <Award />
    <Cirtification />
    <Education />
    <Footer />
    </>
  );
};

export default Home;