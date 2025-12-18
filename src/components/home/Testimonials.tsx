import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Section from '../ui/Section';

const testimonials = [
    {
        id: 1,
        content:
            'Working with DevStudio was an excellent experience. Their team delivered a complex e-commerce platform that exceeded our expectations, and their ongoing support has been invaluable.',
        author: 'Sarah Johnson',
        position: 'CEO, FashionStyle',
        image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
        id: 2,
        content:
            "The MERN stack course I took with DevStudio completely transformed my development skills. The instructors were knowledgeable, patient, and provided real-world insights that you can't get from books.",
        author: 'Michael Chang',
        position: 'Frontend Developer, TechSolutions',
        image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
        id: 3,
        content:
            'Their consultation services helped us identify critical performance issues in our application. The recommendations were clear, practical, and implementing them improved our load times by 60%.',
        author: 'Lisa Rodriguez',
        position: 'CTO, DataInsights',
        image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
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
            className="bg-gradient-to-br from-primary-950 via-primary-900 to-secondary-900 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            </div>

            <div className="relative max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        What Our{' '}
                        <span className="bg-gradient-to-r from-accent-400 to-secondary-400 bg-clip-text text-transparent">
                            Clients Say
                        </span>
                    </h2>
                    <p className="text-xl text-gray-300">
                        Don't just take our word for it - hear from our satisfied clients
                    </p>
                </div>

                <Quote
                    size={80}
                    className="absolute text-white opacity-5 top-20 left-10 transform -translate-x-1/2 -translate-y-1/2 z-0"
                />

                <div className="relative h-96 overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl max-w-3xl">
                                <p className="text-xl md:text-2xl text-white mb-8 italic leading-relaxed">
                                    "{testimonials[current].content}"
                                </p>
                                <div className="flex items-center justify-center">
                                    <img
                                        src={testimonials[current].image}
                                        alt={testimonials[current].author}
                                        className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-white/20 shadow-lg"
                                    />
                                    <div className="text-left">
                                        <p className="font-bold text-white text-lg">
                                            {testimonials[current].author}
                                        </p>
                                        <p className="text-primary-300 text-sm">
                                            {testimonials[current].position}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="flex justify-center mt-12 space-x-3">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`h-3 rounded-full transition-all duration-300 ${
                                index === current
                                    ? 'bg-gradient-to-r from-primary-400 to-secondary-400 w-12 shadow-lg shadow-primary-400/50'
                                    : 'bg-white/30 w-3 hover:bg-white/50'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-4 md:-translate-x-16">
                    <button
                        onClick={prev}
                        className="p-3 md:p-4 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 border border-white/20 transition-all shadow-xl hover:scale-110 duration-300"
                        aria-label="Previous testimonial">
                        <ChevronLeft size={24} />
                    </button>
                </div>

                <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-4 md:translate-x-16">
                    <button
                        onClick={next}
                        className="p-3 md:p-4 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 border border-white/20 transition-all shadow-xl hover:scale-110 duration-300"
                        aria-label="Next testimonial">
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
        </Section>
    );
};

export default Testimonials;
