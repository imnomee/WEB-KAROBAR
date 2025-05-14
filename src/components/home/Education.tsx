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
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={courseCardVariants}
          >
            <Card hoverable className="h-full">
              <Card.Image
                src={course.image}
                alt={course.title}
                className="h-48"
              />
              <Card.Content>
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {course.level}
                  </span>
                  <div className="flex items-center text-dark-500 text-sm">
                    <Clock size={14} className="mr-1" />
                    {course.duration}
                  </div>
                </div>
                <Card.Title>{course.title}</Card.Title>
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
                >
                  Learn More
                </Button>
              </Card.Footer>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="bg-dark-800 rounded-xl p-8 md:p-12">
        <h3 className="text-2xl font-bold text-white mb-8 text-center">
          Why Choose Our Educational Program?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={featureVariants}
              className="text-center"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-primary-900 bg-opacity-50 rounded-full text-primary-400 mx-auto mb-4">
                {feature.icon}
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
              <p className="text-dark-300">{feature.description}</p>
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
          >
            Browse All Courses
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default Education;