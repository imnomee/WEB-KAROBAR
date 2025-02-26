import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { reviews, services } from '../assets/assets';

export default function Home() {
    return (
        <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Smart, Fast & Effective Websites for Your Business
                        </h1>
                        <h2 className="text-3xl my-4 font-semibold">
                            Get More Leads, More Customers, More Growth
                        </h2>
                        <p className="text-xl mb-8">
                            We create professional, high-converting websites
                            that help you attract more clients and grow your
                            business. A strong online presence means more calls,
                            more inquiries, and more sales—let’s make it happen!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/contact"
                                className="bg-white text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
                                Free Quote
                            </Link>
                            <Link
                                to="/portfolio"
                                className="border border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-blue-600 transition-colors">
                                View Our Work
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services Preview */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">
                            Our Services
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg tracking-normal">
                            We offer a comprehensive range of digital solutions
                            to help your business thrive in the digital age.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.2,
                                }}
                                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center">
                                <div className="mb-4">{service.icon()}</div>
                                <h3 className="text-xl font-bold mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {service.description}
                                </p>
                                <Link
                                    to="/services"
                                    className="text-blue-600 font-medium flex items-center hover:text-blue-700">
                                    Learn More{' '}
                                    <ArrowRight className="h-4 w-4 ml-2" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="bg-gray-50 py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">
                            What Our Clients Say
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-xl tracking-normal">
                            Don't just take our word for it - hear from some of
                            our satisfied clients.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {reviews.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.2,
                                }}
                                className="bg-white p-8 rounded-lg shadow-lg">
                                <div className="flex mb-4">
                                    {[...Array(testimonial.rating)].map(
                                        (_, i) => (
                                            <Star
                                                key={i}
                                                className="h-5 w-5 text-yellow-400 fill-current"
                                            />
                                        )
                                    )}
                                </div>
                                <p className="text-gray-600 mb-4">
                                    {testimonial.content}
                                </p>
                                <div>
                                    <p className="font-bold">
                                        {testimonial.name}
                                    </p>
                                    <p className="text-gray-600 text-sm">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="bg-blue-600 text-white rounded-lg p-12 text-center">
                        <h2 className="text-3xl font-bold mb-4">
                            Ready to Start Your Project?
                        </h2>
                        <p className="text-xl mb-8">
                            Let's work together to bring your vision to life.
                        </p>
                        <Link
                            to="/contact"
                            className="bg-white text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors inline-flex items-center">
                            Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
