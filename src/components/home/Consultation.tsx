import React from 'react';
import { motion } from 'framer-motion';
import {
    Calendar,
    FileCode,
    BarChart4,
    Lightbulb,
    CheckCircle,
} from 'lucide-react';
import Section from '../ui/Section';
import Button from '../ui/Button';

const Consultation: React.FC = () => {
    const services = [
        {
            icon: <Calendar size={32} className="text-primary-500" />,
            title: 'Project Scoping',
            description:
                'Define project requirements, timelines, and budget estimates.',
        },
        {
            icon: <FileCode size={32} className="text-primary-500" />,
            title: 'Code Review',
            description:
                'Expert analysis of your codebase with actionable improvement recommendations.',
        },
        {
            icon: <BarChart4 size={32} className="text-primary-500" />,
            title: 'Performance Optimization',
            description:
                'Identify bottlenecks and optimize your application for speed and efficiency.',
        },
        {
            icon: <Lightbulb size={32} className="text-primary-500" />,
            title: 'Architecture Planning',
            description:
                'Design scalable, maintainable system architectures for your projects.',
        },
    ];

    const benefits = [
        'Personalized guidance from industry experts',
        'Implementation of best practices',
        'Reduced development time and costs',
        'Future-proof technology recommendations',
        'Actionable insights and documentation',
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <Section id="consultation" className="bg-dark-50">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}>
                    <motion.span
                        className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-800 rounded-full text-sm font-semibold mb-6 border border-primary-200"
                        variants={itemVariants}>
                        <CheckCircle size={16} className="mr-2" />
                        Expert Consultation
                    </motion.span>

                    <motion.h2
                        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-dark-900"
                        variants={itemVariants}>
                        Get Professional Guidance for Your{' '}
                        <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                            Web Projects
                        </span>
                    </motion.h2>

                    <motion.p
                        className="text-lg text-dark-600 mb-8 leading-relaxed"
                        variants={itemVariants}>
                        Our consultation services provide expert advice and
                        strategic planning to ensure your web development
                        projects succeed. Whether you're starting a new project
                        or improving an existing one, our team can help.
                    </motion.p>

                    <motion.div variants={itemVariants}>
                        <h3 className="text-xl font-bold mb-4 text-dark-900">
                            Why Work With Us
                        </h3>
                        <ul className="space-y-3 mb-8">
                            {benefits.map((benefit, index) => (
                                <motion.li
                                    key={index}
                                    className="flex items-start"
                                    variants={itemVariants}>
                                    <CheckCircle
                                        size={20}
                                        className="text-success-600 mr-3 mt-1 flex-shrink-0"
                                    />
                                    <span className="text-dark-700 font-medium">
                                        {benefit}
                                    </span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <Button
                            onClick={() => {
                                const section =
                                    document.getElementById('contact');
                                section?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            size="large"
                            className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 shadow-xl shadow-primary-500/30 transform hover:scale-105 transition-all duration-300">
                            Schedule a Consultation
                        </Button>
                    </motion.div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="group bg-white p-6 rounded-2xl shadow-lg border-2 border-transparent hover:border-primary-400/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * 0.1 + 0.3,
                                duration: 0.5,
                            }}>
                            <div className="mb-4 p-3 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl inline-flex group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-dark-900 group-hover:text-primary-600 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-dark-600">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Consultation;
