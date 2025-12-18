import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Users, 
  Video, 
  FileText, 
  Clock 
} from 'lucide-react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Button from '../ui/Button';

const Education: React.FC = () => {
  const courses = [
    {
      title: 'MERN Stack Fundamentals',
      description: 'Learn the basics of MongoDB, Express, React, and Node.js development.',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      duration: '8 weeks',
      level: 'Beginner',
    },
    {
      title: 'Advanced React Patterns',
      description: 'Master advanced React concepts, state management, and performance optimization.',
      image: 'https://images.pexels.com/photos/92904/pexels-photo-92904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      duration: '6 weeks',
      level: 'Intermediate',
    },
    {
      title: 'Building Scalable APIs',
      description: 'Design and implement robust, high-performance APIs using Node.js and Express.',
      image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      duration: '5 weeks',
      level: 'Advanced',
    },
  ];

  const features = [
    {
      icon: <BookOpen size={24} />,
      title: 'Comprehensive Curriculum',
      description: 'In-depth material covering all aspects of modern web development.',
    },
    {
      icon: <Users size={24} />,
      title: 'Live Workshops',
      description: 'Interactive sessions with industry professionals to enhance learning.',
    },
    {
      icon: <Video size={24} />,
      title: 'HD Video Lessons',
      description: 'High-quality recorded content accessible anytime, anywhere.',
    },
    {
      icon: <FileText size={24} />,
      title: 'Resource Library',
      description: 'Extensive collection of documentation, code samples, and best practices.',
    },
  ];

  const courseCardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  };

  const featureVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 + i * 0.1,
        duration: 0.4,
      },
    }),
  };

  return (
    <Section
      id="education"
      title="Education Hub"
      subtitle="Expand your skills with our professional MERN stack courses and resources."
      centered
      dark
      className="bg-gradient-to-b from-dark-900 to-dark-800"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={courseCardVariants}
          >
            <Card hoverable className="h-full group border-2 border-transparent hover:border-primary-400/50 transition-all duration-300">
              <Card.Image
                src={course.image}
                alt={course.title}
                className="h-48 group-hover:scale-105 transition-transform duration-300"
              />
              <Card.Content>
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                    {course.level}
                  </span>
                  <div className="flex items-center text-gray-400 text-sm font-medium">
                    <Clock size={14} className="mr-1" />
                    {course.duration}
                  </div>
                </div>
                <Card.Title className="group-hover:text-primary-600 transition-colors">{course.title}</Card.Title>
                <Card.Description>{course.description}</Card.Description>
              </Card.Content>
              <Card.Footer>
                <Button 
                  onClick={() => {
                    const section = document.getElementById('contact');
                    section?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  variant="primary" 
                  fullWidth
                  className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Learn More
                </Button>
              </Card.Footer>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="bg-gradient-to-br from-dark-800/80 to-primary-950/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-primary-500/20 shadow-2xl">
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Why Choose Our{' '}
          <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
            Educational Program?
          </span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={featureVariants}
              className="text-center group"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl text-white mx-auto mb-4 shadow-lg shadow-primary-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                {feature.icon}
              </div>
              <h4 className="text-lg font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">{feature.title}</h4>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button 
            onClick={() => {
              const section = document.getElementById('contact');
              section?.scrollIntoView({ behavior: 'smooth' });
            }}
            size="large"
            className="bg-white text-primary-900 hover:bg-gray-100 shadow-xl shadow-white/20 transform hover:scale-105 transition-all duration-300 font-semibold"
          >
            Browse All Courses
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default Education;