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
        <div
            id="hero"
            className="relative min-h-screen bg-gradient-to-br from-primary-950 via-primary-900 to-secondary-900 flex items-center overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 -left-10 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute top-40 -right-10 w-96 h-96 bg-secondary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-accent-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
                
                {/* Floating particles */}
                <div className="absolute inset-0">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-2 h-2 bg-white rounded-full opacity-20"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
                                animationDelay: `${Math.random() * 5}s`,
                            }}
                        />
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 py-32 relative z-10">
                <motion.div
                    className="max-w-4xl"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}>
                    <motion.div variants={itemVariants}>
                        <span className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 backdrop-blur-sm border border-primary-400/30 text-primary-300 rounded-full text-sm font-semibold mb-8 shadow-lg shadow-primary-500/20">
                            <span className="w-2 h-2 bg-primary-400 rounded-full mr-2 animate-pulse"></span>
                            Professional Web Development Agency
                        </span>
                    </motion.div>

                    <motion.h1
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                        variants={itemVariants}>
                        Transforming Ideas into{' '}
                        <span className="bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent animate-gradient">
                            Exceptional
                        </span>
                        <br />
                        Digital Experiences
                    </motion.h1>

                    <motion.p
                        className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl leading-relaxed"
                        variants={itemVariants}>
                        We specialize in creating modern, high-performance web
                        applications using the MERN stack — delivering seamless
                        user experiences that drive results.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4"
                        variants={itemVariants}>
                        <Button
                            onClick={() => scrollToSection('services')}
                            rightIcon={<ArrowRight size={20} />}
                            size="large"
                            className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 shadow-xl shadow-primary-500/50 transform hover:scale-105 transition-all duration-300">
                            Explore Services
                        </Button>
                        <Button
                            onClick={() => scrollToSection('contact')}
                            variant="outline"
                            size="large"
                            className="border-2 border-white/20 text-white backdrop-blur-sm hover:bg-white/10 hover:border-white/40 shadow-xl transform hover:scale-105 transition-all duration-300">
                            Get in Touch
                        </Button>
                    </motion.div>

                    {/* Stats Section */}
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-white/10"
                        variants={itemVariants}>
                        {[
                            { value: '150+', label: 'Projects Completed' },
                            { value: '50+', label: 'Happy Clients' },
                            { value: '5+', label: 'Years Experience' },
                            { value: '98%', label: 'Client Satisfaction' },
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-gray-400">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
