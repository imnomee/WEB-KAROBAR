import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const CTA: React.FC = () => {
    return (
        <section id="contact" className="py-20 bg-primary-600">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-white mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}>
                        Ready to Transform Your Digital Presence?
                    </motion.h2>

                    <motion.p
                        className="text-xl text-primary-100 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}>
                        Let's work together to create exceptional web
                        experiences that elevate your brand and drive results.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row justify-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}>
                        <Button
                            onClick={() => {
                                const section =
                                    document.getElementById('contact');
                                section?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            size="large"
                            className="bg-primary-900 text-white hover:bg-primary-700">
                            Get Started
                        </Button>
                        <Button
                            className="text-primary-900 bg-white hover:bg-primary-100"
                            onClick={() => {
                                const section =
                                    document.getElementById('services');
                                section?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            variant="outline"
                            size="large">
                            Learn More
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
