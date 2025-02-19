import { motion } from 'framer-motion';
import { services } from './assets/assets.js';

const Services = () => {
    return (
        <section id="services">
            <div className="container py-10">
                <h1 className="text-2xl lg:text-4xl font-bold text-left pb-3 lg:pb-6">
                    Services We Offer
                </h1>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
                    {services.map((service) => (
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: service.delay }}
                            key={service.id}
                            className="bg-[#f4f4f4] rounded-2xl flex  flex-col items-center min-h-32 p-3 hover:bg-secondary hover:shadow-2xl hover:text-primary hover:scale-105 transition-all select-none cursor-pointer group">
                            <div className="text-4xl mb-3 group-hover:-rotate-12 transition">
                                {service.icon()}
                            </div>
                            <h1 className="text-sm font-semibold text-center px-3">
                                {service.title}
                            </h1>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
