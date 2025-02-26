import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
const packages = [
    {
        name: 'Basic',
        price: 'PKR 20,000',
        description:
            'Perfect for small businesses just starting their digital journey',
        features: [
            'Responsive Website Design',
            'Up to 3 Pages',
            'Basic SEO Setup',
            'Contact Form',
            'Mobile Optimization',
            'Security Optimization',
            '2 Free Revisions',
        ],
        highlighted: true,
        note: '*Domain & Hosting Fees Not Included*',
    },
    {
        name: 'Standard',
        price: 'PKR 50,000',
        description:
            'Ideal for growing businesses needing more features and customization',
        features: [
            'Everything in Basic',
            'Up to 10 Pages',
            'Advanced SEO Package',
            'WordPress or Custom CMS',
            'Social Media Integration',
            'Analytics Setup',
            'E-commerce Lite (Up to 10 Products)',
            'Speed Optimization',
            '5 Free Revisions',
        ],
        note: '*Includes 1-Year Domain & Cloud Hosting*',
    },
    {
        name: 'Premium',
        price: 'PKR 90,000',
        description: 'Complete digital solution for established businesses',
        features: [
            'Everything in Standard',
            'Unlimited Pages',
            'Custom Functionality',
            'Full E-commerce Solution (Unlimited Products, Cart & Checkout)',
            'Multiple Payment Gateways',
            'Premium Hosting',
            'Priority Support',
            'Monthly Maintenance',
            'Multilingual Support',
            'Custom Admin Dashboard',
            'Blog/News Section',
            '10 Free Revisions',
        ],
        note: '*Includes 2-Year Domain & Cloud Hosting*',
    },
];

export default function Services() {
    return (
        <>
            <Helmet>
                <title>
                    Services & Pricing - WebKarobar | Web Development Agency
                </title>
                <meta
                    name="description"
                    content="Explore our comprehensive web development services and transparent pricing packages. From basic websites to full-scale digital solutions."
                />
                <meta
                    name="keywords"
                    content="web development services, website pricing, digital solutions, WebKarobar services"
                />
                <link rel="canonical" href="/services" />
            </Helmet>

            <div className="py-20">
                {/* Hero Section */}
                <section className="container mx-auto px-4 mb-20">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl font-bold mb-6">
                            Our Services & Pricing
                        </h1>
                        <p className="text-xl text-gray-600">
                            Transparent pricing with no hidden fees. Choose the
                            package that best fits your needs.
                        </p>
                    </div>
                </section>

                {/* Pricing Packages */}
                <section className="container mx-auto px-4 mb-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {packages.map((pkg, index) => (
                            <motion.div
                                key={pkg.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                className={`rounded-lg p-8 ${
                                    pkg.highlighted
                                        ? 'bg-blue-600 text-white shadow-xl scale-105'
                                        : 'bg-white shadow-lg'
                                }`}>
                                <h3 className="text-2xl font-bold mb-4">
                                    {pkg.name}
                                </h3>
                                <div className="mb-4">
                                    <span className="text-4xl font-bold">
                                        {pkg.price}
                                    </span>
                                    <span className="text-sm ml-2">
                                        / project
                                    </span>
                                </div>
                                <p className="text-xl">{pkg.description}</p>
                                <hr className="my-8" />
                                <ul className="space-y-4 text-lg my-8">
                                    {pkg.features.map((feature) => (
                                        <li
                                            key={feature}
                                            className="flex items-center">
                                            <Check className="h-5 w-5 mr-4 flex-shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    className={`w-full py-3 px-4 rounded-md font-medium flex items-center justify-center ${
                                        pkg.highlighted
                                            ? 'bg-white text-blue-600 hover:bg-gray-100'
                                            : 'bg-blue-600 text-white hover:bg-blue-700'
                                    }`}>
                                    Get Started{' '}
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </button>
                                <p className="mt-4 text-xs">{pkg.note}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Custom Quote Section */}
                <section className="container mx-auto px-4">
                    <div className="bg-gray-50 rounded-lg p-12 text-center">
                        <h2 className="text-3xl font-bold mb-4">
                            Need a Custom Solution?
                        </h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Let's discuss your specific requirements and create
                            a tailored package for you.
                        </p>
                        <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors inline-flex items-center">
                            Request Custom Quote{' '}
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </button>
                    </div>
                </section>
            </div>
        </>
    );
}
