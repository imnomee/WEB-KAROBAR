import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

import { projects } from '../assets/assets';

const categories = ['All', 'E-commerce', 'Healthcare', 'Real Estate'];

export default function Portfolio() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedProject, setSelectedProject] = useState(null);

    const filteredProjects =
        selectedCategory === 'All'
            ? projects
            : projects.filter(
                  (project) => project.category === selectedCategory
              );

    return (
        <>
            <Helmet>
                <title>
                    Portfolio - WebKarobar | Web Development Success Stories
                </title>
                <meta
                    name="description"
                    content="Explore our portfolio of successful web development projects. See how we've helped businesses transform their digital presence."
                />
                <meta
                    name="keywords"
                    content="web development portfolio, case studies, project showcase, WebKarobar projects"
                />
                <link rel="canonical" href="/portfolio" />
            </Helmet>

            <div className="py-20">
                {/* Hero Section */}
                <section className="container mx-auto px-4 mb-20">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl font-bold mb-6">
                            Our Portfolio
                        </h1>
                        <p className="text-xl text-gray-600">
                            Explore our successful projects and see how we've
                            helped businesses transform their digital presence.
                        </p>
                    </div>
                </section>

                {/* Filter Buttons */}
                <section className="container mx-auto px-4 mb-12">
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-2 rounded-full ${
                                    selectedCategory === category
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                                }`}>
                                {category}
                            </button>
                        ))}
                    </div>
                </section>

                {/* Projects Grid */}
                <section className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform hover:scale-110"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        {project.challenge}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-gray-100 text-sm rounded-full">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <button
                                        onClick={() =>
                                            setSelectedProject(project)
                                        }
                                        className="text-blue-600 font-medium flex items-center hover:text-blue-700">
                                        View Case Study{' '}
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="container mx-auto px-4 mt-20">
                    <div className="bg-blue-600 text-white rounded-lg p-12 text-center">
                        <h2 className="text-3xl font-bold mb-4">
                            Ready to Start Your Project?
                        </h2>
                        <p className="text-xl mb-8">
                            Let's create something amazing together.
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
