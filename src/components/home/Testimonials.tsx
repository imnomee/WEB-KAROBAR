import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Section from '../ui/Section';

const testimonials = [
  {
    id: 1,
    content: "Working with DevStudio was an excellent experience. Their team delivered a complex e-commerce platform that exceeded our expectations, and their ongoing support has been invaluable.",
    author: "Sarah Johnson",
    position: "CEO, FashionStyle",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    content: "The MERN stack course I took with DevStudio completely transformed my development skills. The instructors were knowledgeable, patient, and provided real-world insights that you can't get from books.",
    author: "Michael Chang",
    position: "Frontend Developer, TechSolutions",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    content: "Their consultation services helped us identify critical performance issues in our application. The recommendations were clear, practical, and implementing them improved our load times by 60%.",
    author: "Lisa Rodriguez",
    position: "CTO, DataInsights",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <Section 
      id="testimonials"
      dark
      className="bg-gradient-to-br from-primary-900 to-dark-900"
    >
      <div className="relative max-w-4xl mx-auto">
        <Quote 
          size={60} 
          className="absolute text-white opacity-10 top-0 left-0 transform -translate-x-1/2 -translate-y-1/2"
        />
        
        <div className="relative h-80 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
            >
              <p className="text-xl md:text-2xl text-white mb-8 italic">
                "{testimonials[current].content}"
              </p>
              <div className="flex items-center">
                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].author}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div className="text-left">
                  <p className="font-bold text-white">
                    {testimonials[current].author}
                  </p>
                  <p className="text-primary-300 text-sm">
                    {testimonials[current].position}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === current ? 'bg-primary-500' : 'bg-dark-600'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full md:-translate-x-12">
          <button
            onClick={prev}
            className="p-2 rounded-full bg-dark-700 text-white hover:bg-primary-700 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
        </div>
        
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full md:translate-x-12">
          <button
            onClick={next}
            className="p-2 rounded-full bg-dark-700 text-white hover:bg-primary-700 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;