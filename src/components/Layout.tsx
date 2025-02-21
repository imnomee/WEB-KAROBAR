import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Code2, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Layout() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const location = useLocation();

    const menuItems = [
        { path: '/', label: 'Home' },
        { path: '/services', label: 'Services' },
        { path: '/portfolio', label: 'Portfolio' },
        { path: '/about', label: 'About' },
        { path: '/contact', label: 'Contact' },
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-white shadow-sm fixed w-full z-50">
                <nav className="container mx-auto p-4">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="flex items-center space-x-2">
                            <Code2 className="h-8 w-8 text-blue-600" />
                            <span className="text-xl font-bold text-gray-900">
                                KarobarWeb
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                                        location.pathname === item.path
                                            ? 'text-blue-600'
                                            : 'text-gray-600'
                                    }`}>
                                    {item.label}
                                </Link>
                            ))}
                            <Link
                                to="/contact"
                                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
                                Get Started
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu">
                            {isMenuOpen ? (
                                <X className="h-6 w-6 text-gray-600" />
                            ) : (
                                <Menu className="h-6 w-6 text-gray-600" />
                            )}
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    <AnimatePresence>
                        {isMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="md:hidden mt-4">
                                <div className="flex flex-col space-y-4">
                                    {menuItems.map((item) => (
                                        <Link
                                            key={item.path}
                                            to={item.path}
                                            className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                                                location.pathname === item.path
                                                    ? 'text-blue-600'
                                                    : 'text-gray-600'
                                            }`}
                                            onClick={() =>
                                                setIsMenuOpen(false)
                                            }>
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </nav>
            </header>

            <main className="flex-grow pt-16">
                <Outlet />
            </main>

            <footer className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <Code2 className="h-8 w-8 text-blue-400" />
                                <span className="text-xl font-bold">
                                    KarobarWeb
                                </span>
                            </div>
                            <p className="text-gray-400">
                                Transforming ideas into exceptional digital
                                experiences.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">
                                Quick Links
                            </h3>
                            <ul className="space-y-2">
                                {menuItems.map((item) => (
                                    <li key={item.path}>
                                        <Link
                                            to={item.path}
                                            className="text-gray-400 hover:text-white transition-colors">
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">
                                Contact
                            </h3>
                            <div className="space-y-2 text-gray-400">
                                <p>Kamalabad, Rawalpindi</p>
                                <p>Pakistan</p>
                                <p className="flex items-center space-x-2">
                                    <Phone className="h-4 w-4" />
                                    <span>+92 335 276 5432</span>
                                </p>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">
                                Follow Us
                            </h3>
                            <div className="flex space-x-4">
                                {/* Add social media icons/links here */}
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
                        <p>
                            &copy; {new Date().getFullYear()} KarobarWeb. All
                            rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
