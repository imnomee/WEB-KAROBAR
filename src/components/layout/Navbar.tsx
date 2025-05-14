import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '../ui/Logo';
import Button from '../ui/Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Home', sectionId: 'hero' },
    { name: 'Services', sectionId: 'services' },
    { name: 'Education', sectionId: 'education' },
    { name: 'Consultation', sectionId: 'consultation' },
    { name: 'Testimonials', sectionId: 'testimonials' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => scrollToSection('hero')} 
            className={`flex items-center transition-colors hover:opacity-80 active:opacity-70 ${
              isScrolled ? 'text-primary-700' : 'text-white'
            }`}
          >
            <Logo color={isScrolled ? 'text-primary-700' : 'text-white'} />
            <span className="ml-2 font-bold text-xl">DevStudio</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.sectionId)}
                className={`font-medium transition-colors hover:text-primary-500 active:text-primary-600 ${
                  isScrolled ? 'text-dark-800' : 'text-white'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Call to Action Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection('contact')}
              variant={isScrolled ? 'primary' : 'outline'}
              className={!isScrolled ? 'border-white text-white hover:bg-white hover:bg-opacity-10' : ''}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-md transition-colors hover:bg-white hover:bg-opacity-10 ${
                isScrolled ? 'text-dark-900 hover:bg-dark-100' : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg overflow-hidden animate-fade-in">
            <div className="flex flex-col px-4 pt-2 pb-4 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.sectionId)}
                  className="px-3 py-2 rounded-md font-medium text-dark-800 hover:bg-primary-50 hover:text-primary-700 active:bg-primary-100 transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection('contact')}
                fullWidth
                className="mt-2"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;