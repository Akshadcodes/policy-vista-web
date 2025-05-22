
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn, SlideIn } from '@/hooks/use-text-animation';
import { BackgroundGradientAnimation } from "@/components/ui/gradient-animations";
import { SparklesCore } from "./ui/sparkles";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-orange-50 relative overflow-hidden">
      {/* Sparkles effect */}
      <div className="h-40 w-full absolute top-0 left-0 z-10 opacity-40">
        <SparklesCore
          id="footer-sparkles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleColor="#f97316"
          particleDensity={100}
          speed={0.5}
          className="w-full h-full"
        />
      </div>
      
      <BackgroundGradientAnimation
        containerClassName="z-1"
        gradientBackgroundStart="rgb(255 237 213)"
        gradientBackgroundEnd="rgb(254 215 170)"
      >
        <div className="container-custom pt-16 pb-8 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <FadeIn delay={0.1} className="w-full">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="bg-white bg-opacity-70 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-orange-100 h-full"
              >
                <Link to="/" className="flex items-center gap-2 mb-4">
                  <Shield className="h-7 w-7 text-orange-500" />
                  <span className="text-xl font-bold font-heading text-orange-600">PolicyVista</span>
                </Link>
                <p className="text-gray-700 mb-6">
                  Providing trusted insurance consultation since 2005. Your protection is our priority.
                </p>
                <div className="flex space-x-4">
                  {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                    <motion.a 
                      key={index}
                      href="#" 
                      className="bg-orange-100 p-2 rounded-full text-orange-500 hover:bg-orange-500 hover:text-white transition-colors"
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </FadeIn>

            {/* Quick Links */}
            <SlideIn direction="up" delay={0.2} className="w-full">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="bg-white bg-opacity-70 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-orange-100 h-full"
              >
                <h3 className="text-lg font-bold mb-4 text-orange-600">Quick Links</h3>
                <ul className="space-y-2">
                  {[
                    { name: 'Home', path: '/' },
                    { name: 'About Us', path: '/about' },
                    { name: 'Our Services', path: '/services' },
                    { name: 'Blog', path: '/blog' },
                    { name: 'Contact Us', path: '/contact' }
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      initial={{ x: -10, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 * index }}
                      viewport={{ once: true }}
                    >
                      <Link 
                        to={item.path} 
                        className="text-gray-700 hover:text-orange-500 transition-colors flex items-center"
                      >
                        <motion.span 
                          className="w-2 h-2 rounded-full bg-orange-300 mr-2"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ repeat: Infinity, duration: 2, delay: index * 0.2 }}
                        />
                        {item.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </SlideIn>

            {/* Services */}
            <SlideIn direction="up" delay={0.3} className="w-full">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="bg-white bg-opacity-70 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-orange-100 h-full"
              >
                <h3 className="text-lg font-bold mb-4 text-orange-600">Our Services</h3>
                <ul className="space-y-2">
                  {[
                    'Life Insurance',
                    'Health Insurance',
                    'Property Insurance',
                    'Auto Insurance',
                    'Business Insurance'
                  ].map((service, index) => (
                    <motion.li 
                      key={index}
                      initial={{ x: -10, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 * index }}
                      viewport={{ once: true }}
                    >
                      <Link 
                        to="/services" 
                        className="text-gray-700 hover:text-orange-500 transition-colors flex items-center"
                      >
                        <motion.span 
                          className="w-2 h-2 rounded-full bg-orange-300 mr-2"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ repeat: Infinity, duration: 2, delay: index * 0.2 }}
                        />
                        {service}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </SlideIn>

            {/* Contact Info */}
            <SlideIn direction="up" delay={0.4} className="w-full">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="bg-white bg-opacity-70 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-orange-100 h-full"
              >
                <h3 className="text-lg font-bold mb-4 text-orange-600">Contact Us</h3>
                <div className="space-y-4">
                  {[
                    { Icon: MapPin, text: "123 Insurance Ave, Financial District, New York, NY 10001" },
                    { Icon: Phone, text: "(123) 456-7890" },
                    { Icon: Mail, text: "contact@policyvista.com" }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 * index }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        animate={{ rotate: [0, 10, 0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 3, delay: index }}
                        className="bg-orange-100 p-1.5 rounded-full"
                      >
                        <item.Icon className="h-5 w-5 text-orange-500" />
                      </motion.div>
                      <span className="text-gray-700">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </SlideIn>
          </div>

          <motion.hr 
            className="border-orange-200 my-8" 
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p 
              className="text-gray-600 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              © {new Date().getFullYear()} PolicyVista. All rights reserved.
            </motion.p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              {["Privacy Policy", "Terms of Service"].map((text, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.7 + index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Link to="#" className="text-gray-600 hover:text-orange-500 text-sm transition-colors">
                    {text}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </BackgroundGradientAnimation>
    </footer>
  );
};

export default Footer;
