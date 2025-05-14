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
                    animate="visible"
                    variants={containerVariants}>
                    <motion.span
                        className="inline-block px-4 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-6"
                        variants={itemVariants}>
                        Expert Consultation
                    </motion.span>

                    <motion.h2
                        className="text-2xl md:text-4xl font-bold mb-6 text-dark-900"
                        variants={itemVariants}>
                        Get Professional Guidance for Your Web Projects
                    </motion.h2>

                    <motion.p
                        className="text-base text-dark-600 mb-8"
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
                                        className="text-success-600 mr-2 mt-1 flex-shrink-0"
                                    />
                                    <span className="text-dark-700">
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
                            size="large">
                            Schedule a Consultation
                        </Button>
                    </motion.div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-md border border-dark-100"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: index * 0.1 + 0.3,
                                duration: 0.5,
                            }}>
                            <div className="mb-4">{service.icon}</div>
                            <h3 className="text-xl font-bold mb-2 text-dark-900">
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
