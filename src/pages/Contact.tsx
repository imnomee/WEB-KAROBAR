import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { contacts } from '../assets/assets';
export default function Contact() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        <>
            <Helmet>
                <title>Contact Us - WebKarobar | Get in Touch</title>
                <meta
                    name="description"
                    content="Contact WebKarobar for your web development needs. We're here to help transform your digital presence."
                />
                <meta
                    name="keywords"
                    content="contact WebKarobar, web development contact, get in touch, development agency contact"
                />
                <link rel="canonical" href="/contact" />
            </Helmet>

            <div className="py-20">
                {/* Hero Section */}
                <section className="container mx-auto px-4 mb-20">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl font-bold mb-6">
                            Get in Touch
                        </h1>
                        <p className="text-xl text-gray-600">
                            Have a project in mind? We'd love to hear from you.
                            Send us a message and we'll respond as soon as
                            possible.
                        </p>
                    </div>
                </section>

                {/* Contact Information */}
                <section className="container mx-auto px-4 mb-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {contacts.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                className="bg-white p-6 rounded-lg shadow-lg text-center">
                                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-4">
                                    {item.icon()}
                                </div>
                                <h3 className="text-lg font-bold mb-2">
                                    {item.title}
                                </h3>
                                {item.link ? (
                                    <a
                                        href={item.link}
                                        className="text-gray-600 hover:text-blue-600 transition-colors">
                                        {item.content}
                                    </a>
                                ) : (
                                    <p className="text-gray-600">
                                        {item.content}
                                    </p>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Contact Form & Map */}
                <section className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="bg-white p-8 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold mb-6">
                                Send us a Message
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-700 mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="subject"
                                        className="block text-sm font-medium text-gray-700 mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-gray-700 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={6}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors flex items-center justify-center">
                                    Send Message{' '}
                                    <Send className="ml-2 h-5 w-5" />
                                </button>
                            </form>
                        </motion.div>

                        {/* Map */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="h-[600px] rounded-lg overflow-hidden shadow-lg">
                            <iframe
                                title="WebKarobar"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d574.8854605815644!2d73.03584142760414!3d33.57379764120367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df9371293ce2db%3A0x535c22db545b647a!2sWeb%20Mobiles%20Repairing%2C%20Software%20and%20Accessories!5e0!3m2!1sen!2s!4v1740145854330!5m2!1sen!2s"
                                width="100%"
                                height="100%"
                                loading="lazy"></iframe>
                        </motion.div>
                    </div>
                </section>
            </div>
        </>
    );
}
