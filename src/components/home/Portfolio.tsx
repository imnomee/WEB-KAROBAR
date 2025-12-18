import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Section from '../ui/Section';
import Button from '../ui/Button';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  delay: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  liveUrl,
  githubUrl,
  delay,
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: delay * 0.15,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary-100 to-secondary-100">
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-dark-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300 z-10"></div>
        <div className="w-full h-full flex items-center justify-center text-6xl font-bold text-primary-500/20">
          {title.substring(0, 2)}
        </div>
        
        {/* Overlay with links */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:bg-primary-500 hover:text-white transition-all transform hover:scale-110"
            >
              <ExternalLink size={20} />
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:bg-dark-900 hover:text-white transition-all transform hover:scale-110"
            >
              <Github size={20} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-dark-900 mb-2 group-hover:text-primary-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gradient-to-r from-primary-50 to-secondary-50 text-primary-700 text-xs font-semibold rounded-full border border-primary-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online store with product management, shopping cart, secure checkout, and payment integration using Stripe.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates, team collaboration, drag-and-drop interface, and analytics.',
      tags: ['React', 'Express', 'Socket.io', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media metrics with data visualization, automated reports, and multi-platform integration.',
      tags: ['React', 'Chart.js', 'REST API', 'Tailwind'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Restaurant Booking System',
      description: 'Complete reservation system with table management, online booking, customer notifications, and POS integration.',
      tags: ['MERN Stack', 'Redux', 'SMS API'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Fitness Tracking App',
      description: 'Mobile-responsive fitness tracker with workout plans, progress monitoring, nutrition tracking, and social features.',
      tags: ['React Native', 'Node.js', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Real Estate Platform',
      description: 'Property listing and search platform with advanced filters, virtual tours, agent dashboard, and CRM integration.',
      tags: ['Next.js', 'Prisma', 'PostgreSQL', 'Maps API'],
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  return (
    <Section
      id="portfolio"
      title="Featured Projects"
      subtitle="Explore our portfolio of successful web applications built for clients across various industries."
      centered
      className="bg-gradient-to-b from-white to-gray-50"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            tags={project.tags}
            liveUrl={project.liveUrl}
            githubUrl={project.githubUrl}
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
          className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 shadow-xl shadow-primary-500/30"
        >
          Start Your Project
        </Button>
      </div>
    </Section>
  );
};

export default Portfolio;
