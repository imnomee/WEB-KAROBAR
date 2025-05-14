import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="hero" className="relative min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900 flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-secondary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-32 relative z-10">
        <motion.div 
          className="max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <span className="inline-block px-4 py-1 bg-primary-600 bg-opacity-20 text-primary-400 rounded-full text-sm font-medium mb-6">
              Professional Web Development Agency
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            variants={itemVariants}
          >
            Transforming Ideas into <br />
            <span className="text-primary-400">Exceptional</span> Digital Experiences
          </motion.h1>
          
          <motion.p 
            className="text-xl text-dark-300 mb-8"
            variants={itemVariants}
          >
            We specialize in creating modern, high-performance web applications 
            using the MERN stack — delivering seamless user experiences that drive results.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            variants={itemVariants}
          >
            <Button 
              onClick={() => scrollToSection('services')}
              rightIcon={<ArrowRight size={18} />}
              size="large"
            >
              Explore Services
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline"
              size="large"
              className="border-white text-white hover:bg-white hover:bg-opacity-10"
            >
              Get in Touch
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;