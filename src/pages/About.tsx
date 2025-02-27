import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { teamMembers, values } from '../assets/assets';

export default function About() {
    return (
        <>
            <Helmet>
                <title>
                    About Us - WebKarobar | Your Trusted Web Development Partner
                </title>
                <meta
                    name="description"
                    content="Learn about WebKarobar's journey, our team of experts, and our commitment to delivering exceptional web development solutions."
                />
                <meta
                    name="keywords"
                    content="about WebKarobar, web development team, company values, digital agency"
                />
                <link rel="canonical" href="/about" />
            </Helmet>

            <div className="py-20">
                {/* Hero Section */}
                <section className="container mx-auto px-4 mb-20">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl font-bold mb-6">
                            About WebKarobar
                        </h1>
                        <p className="text-xl text-gray-600">
                            We're a team of passionate developers and designers
                            creating exceptional digital experiences.
                        </p>
                    </div>
                </section>

                {/* Company Story */}
                <section className="container mx-auto px-4 mb-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}>
                            <h2 className="text-3xl font-bold mb-6">
                                Our Story
                            </h2>
                            <p className="text-gray-600 mb-4">
                                Founded in 2020, WebKarobar emerged from a
                                vision to bridge the gap between businesses and
                                the digital world. We understood that many
                                companies struggled to establish a strong online
                                presence, and we set out to change that.
                            </p>
                            <p className="text-gray-600 mb-4">
                                Today, we're proud to have helped numerous
                                businesses transform their digital presence and
                                achieve their goals. Our commitment to
                                excellence and innovation continues to drive us
                                forward.
                            </p>
                            <div className="flex items-center space-x-8 mt-8">
                                <div>
                                    <div className="text-3xl font-bold text-blue-600">
                                        100+
                                    </div>
                                    <div className="text-gray-600">
                                        Projects Completed
                                    </div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-blue-600">
                                        50+
                                    </div>
                                    <div className="text-gray-600">
                                        Happy Clients
                                    </div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-blue-600">
                                        3+
                                    </div>
                                    <div className="text-gray-600">
                                        Years Experience
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="relative h-96">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                                alt="Team collaboration"
                                className="w-full h-full object-cover rounded-lg shadow-lg"
                            />
                        </motion.div>
                    </div>
                </section>

                {/* Core Values */}
                <section className="bg-gray-50 py-20 mb-20">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">
                            Our Core Values
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {values.map((value, index) => (
                                <motion.div
                                    key={value.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                    className="bg-white p-6 rounded-lg shadow-lg flex items-center flex-col text-center">
                                    <div className="mb-4">{value.icon()}</div>
                                    <h3 className="text-xl font-bold mb-2">
                                        {value.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {value.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="container mx-auto px-4 mb-20">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Meet Our Team
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-96 object-contain"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2">
                                        {member.name}
                                    </h3>
                                    <p className="text-blue-600 mb-4">
                                        {member.role}
                                    </p>
                                    <p className="text-gray-600">
                                        {member.bio}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="container mx-auto px-4">
                    <div className="bg-blue-600 text-white rounded-lg p-12 text-center">
                        <h2 className="text-3xl font-bold mb-4">
                            Ready to Work Together?
                        </h2>
                        <p className="text-xl mb-8">
                            Let's create something amazing for your business.
                        </p>
                        <button className="bg-white text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors inline-flex items-center">
                            Get Started <ArrowRight className="ml-2 h-5 w-5" />
                        </button>
                    </div>
                </section>
            </div>
        </>
    );
}
