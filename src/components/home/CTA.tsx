import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const CTA: React.FC = () => {
    return (
        <section id="contact" className="relative py-24 overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-secondary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-8"
                    >
                        <span className="inline-flex items-center px-5 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full text-sm font-semibold mb-6 shadow-lg">
                            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                            Let's Build Something Amazing
                        </span>
                    </motion.div>

                    <motion.h2
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}>
                        Ready to Transform Your{' '}
                        <span className="bg-gradient-to-r from-accent-400 to-secondary-400 bg-clip-text text-transparent">
                            Digital Presence?
                        </span>
                    </motion.h2>

                    <motion.p
                        className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}>
                        Let's work together to create exceptional web
                        experiences that elevate your brand and drive results.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row justify-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}>
                        <Button
                            onClick={() => {
                                window.location.href = 'mailto:info@devstudio.com';
                            }}
                            size="large"
                            className="bg-white text-primary-900 hover:bg-gray-100 shadow-2xl shadow-white/20 transform hover:scale-105 transition-all duration-300 font-semibold">
                            Get Started Now
                        </Button>
                        <Button
                            onClick={() => {
                                const section = document.getElementById('services');
                                section?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            variant="outline"
                            size="large"
                            className="border-2 border-white/40 text-white backdrop-blur-sm hover:bg-white/10 hover:border-white/60 shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold">
                            Learn More
                        </Button>
                    </motion.div>

                    {/* Trust Indicators */}
                    <motion.div
                        className="mt-16 pt-12 border-t border-white/20"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <p className="text-gray-400 mb-6 text-sm uppercase tracking-wider font-semibold">Trusted by Leading Brands</p>
                        <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
                            {['TechCorp', 'InnovateLabs', 'DigitalFirst', 'CloudSystems', 'StartupHub'].map((brand, index) => (
                                <div key={index} className="text-white font-bold text-lg tracking-wide">
                                    {brand}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
