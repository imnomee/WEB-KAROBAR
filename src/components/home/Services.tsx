import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Code, 
  ShoppingCart, 
  Server, 
  Database, 
  ArrowRight 
} from 'lucide-react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Button from '../ui/Button';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, delay }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        delay: delay * 0.1
      } 
    }
  };

  return (
    <motion.div variants={cardVariants}>
      <Card hoverable className="h-full group relative overflow-hidden border-2 border-transparent hover:border-primary-400/50 transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <Card.Content className="relative z-10">
          <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl text-white mb-6 shadow-lg shadow-primary-500/30 group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
          <Card.Title className="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors">{title}</Card.Title>
          <Card.Description className="text-gray-600">{description}</Card.Description>
        </Card.Content>
        <Card.Footer className="relative z-10">
          <Button 
            variant="text" 
            rightIcon={<ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />}
            className="text-primary-600 hover:text-primary-700 p-0 font-semibold group-hover:gap-2 transition-all"
            onClick={() => {
              const section = document.getElementById('contact');
              section?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Learn More
          </Button>
        </Card.Footer>
      </Card>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: 'Static Websites',
      description: 'Fast, responsive, and SEO-friendly websites built with modern technologies.',
      icon: <Globe size={24} />,
    },
    {
      title: 'Dynamic Web Apps',
      description: 'Interactive applications with real-time data and user authentication.',
      icon: <Code size={24} />,
    },
    {
      title: 'E-commerce Platforms',
      description: 'Custom online stores with secure payment integration and inventory management.',
      icon: <ShoppingCart size={24} />,
    },
    {
      title: 'API Development',
      description: 'Robust RESTful APIs for seamless integration with other services.',
      icon: <Server size={24} />,
    },
    {
      title: 'Full-Stack MERN Solutions',
      description: 'End-to-end web solutions using MongoDB, Express, React, and Node.js.',
      icon: <Database size={24} />,
    },
  ];

  return (
    <Section
      id="services"
      title="Our Services"
      subtitle="We offer a comprehensive range of web development services to help you build and grow your online presence."
      centered
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
            delay={index}
          />
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button 
          onClick={() => {
            const section = document.getElementById('contact');
            section?.scrollIntoView({ behavior: 'smooth' });
          }}
          size="large"
        >
          View All Services
        </Button>
      </div>
    </Section>
  );
};

export default Services;