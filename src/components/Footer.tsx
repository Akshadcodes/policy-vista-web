
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-insurance-blue text-white">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Shield className="h-7 w-7" />
              <span className="text-xl font-bold font-heading">PolicyVista</span>
            </Link>
            <p className="text-gray-300 mb-6">
              Providing trusted insurance consultation since 2005. Your protection is our priority.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Life Insurance</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Health Insurance</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Property Insurance</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Auto Insurance</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Business Insurance</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="text-gray-300">123 Insurance Ave, Financial District, New York, NY 10001</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent" />
                <span className="text-gray-300">(123) 456-7890</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent" />
                <span className="text-gray-300">contact@policyvista.com</span>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} PolicyVista. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</Link>
            <Link to="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
