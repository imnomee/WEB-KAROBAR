import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import Education from '../components/home/Education';
import Consultation from '../components/home/Consultation';
import Testimonials from '../components/home/Testimonials';
import CTA from '../components/home/CTA';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>DevStudio - Web Development Agency | MERN Stack Specialists</title>
        <meta name="description" content="Professional web development services, educational resources, and consultation. Specialists in MERN stack development." />
      </Helmet>
      
      <Hero />
      <Services />
      <Education />
      <Consultation />
      <Testimonials />
      <CTA />
    </>
  );
};

export default HomePage;