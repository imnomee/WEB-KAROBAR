import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Github, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Logo color="text-white" />
              <span className="ml-2 font-bold text-xl">WebKarobar</span>
            </div>
            <p className="text-dark-300 mb-4">
              Professional web development agency specializing in MERN stack solutions
              for businesses and individuals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-dark-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-dark-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-dark-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-dark-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-dark-300 hover:text-white transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-dark-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-dark-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/education" className="text-dark-300 hover:text-white transition-colors">
                  Education
                </Link>
              </li>
              <li>
                <Link to="/consultation" className="text-dark-300 hover:text-white transition-colors">
                  Consultation
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-dark-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-dark-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-dark-300 hover:text-white transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-dark-300 hover:text-white transition-colors">
                  E-commerce Solutions
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-dark-300 hover:text-white transition-colors">
                  API Development
                </Link>
              </li>
              <li>
                <Link to="/education" className="text-dark-300 hover:text-white transition-colors">
                  MERN Stack Courses
                </Link>
              </li>
              <li>
                <Link to="/consultation" className="text-dark-300 hover:text-white transition-colors">
                  Technical Consultations
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-dark-300 hover:text-white transition-colors">
                  Code Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 text-primary-500 mt-1 flex-shrink-0" size={18} />
                <span className="text-dark-300">
                  Kamalabad, Tench Bhatta, Rawalpindi
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-primary-500 flex-shrink-0" size={18} />
                <span className="text-dark-300">03321401023</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 text-primary-500 flex-shrink-0" size={18} />
                <span className="text-dark-300">info@devstudio.com</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-dark-700 my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-dark-400 text-sm">
            &copy; {currentYear} WebKarobar. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
            <Link to="/privacy" className="text-dark-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-dark-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-dark-400 hover:text-white transition-colors">
              Cookies Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;