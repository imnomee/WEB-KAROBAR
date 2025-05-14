import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  centered?: boolean;
  dark?: boolean;
  id?: string;
}

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  title,
  subtitle,
  centered = false,
  dark = false,
  id,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: -15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.1, ease: 'easeOut' },
    },
  };

  return (
    <section
      id={id}
      ref={ref}
      className={`py-16 md:py-24 ${dark ? 'bg-dark-900 text-white' : 'bg-white'} ${className}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        {(title || subtitle) && (
          <div className={`mb-12 ${centered ? 'text-center mx-auto max-w-3xl' : ''}`}>
            {title && (
              <motion.h2
                className={`text-3xl md:text-4xl font-bold mb-4 ${
                  dark ? 'text-white' : 'text-dark-900'
                }`}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={titleVariants}
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p
                className={`text-xl ${dark ? 'text-dark-300' : 'text-dark-600'}`}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={subtitleVariants}
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default Section;