
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn, SlideIn } from '@/hooks/use-text-animation';
import { BackgroundGradientAnimation } from "@/components/ui/gradient-animations";
import { SparklesCore } from "./ui/sparkles";

// Array of vibrant gradient colors for icons
const iconGradients = [
  "from-pink-500 to-red-500",
  "from-orange-500 to-amber-500",
  "from-green-500 to-emerald-500",
  "from-blue-500 to-cyan-500",
  "from-purple-500 to-violet-500"
];

// Social media icons with colors
const socialIcons = [
  { Icon: Facebook, gradient: "from-blue-500 to-blue-700" },
  { Icon: Twitter, gradient: "from-sky-400 to-blue-500" },
  { Icon: Linkedin, gradient: "from-blue-600 to-blue-800" },
  { Icon: Instagram, gradient: "from-pink-500 via-purple-500 to-orange-500" }
];

// Contact info with gradients
const contactInfo = [
  { 
    Icon: MapPin, 
    text: "123 Insurance Ave, Financial District, New York, NY 10001",
    gradient: "from-red-500 to-pink-500",
    animation: [0, 10, 0, -10, 0]
  },
  { 
    Icon: Phone, 
    text: "(123) 456-7890",
    gradient: "from-green-500 to-emerald-500",
    animation: [0, -10, 0, 10, 0]
  },
  { 
    Icon: Mail, 
    text: "contact@policyvista.com",
    gradient: "from-blue-500 to-cyan-500",
    animation: [0, 5, -5, 5, 0]
  }
];

const Footer = () => {
  // Generate a random gradient for animation
  const getRandomGradient = () => {
    return iconGradients[Math.floor(Math.random() * iconGradients.length)];
  };

  return (
    <footer className="bg-gradient-to-b from-white to-orange-50 relative overflow-hidden">
      {/* Animated multicolor sparkles effect */}
      <div className="h-40 w-full absolute top-0 left-0 z-10 opacity-40">
        <SparklesCore
          id="footer-sparkles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleColor={["#f97316", "#fb923c", "#f59e0b", "#16a34a", "#0ea5e9", "#8b5cf6"]}
          particleDensity={100}
          speed={0.5}
          rainbow={true}
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
                  <motion.div
                    animate={{ 
                      rotate: [0, 10, 0, -10, 0],
                      scale: [1, 1.1, 1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 5,
                      repeat: Infinity,
                      repeatDelay: 3
                    }}
                  >
                    <Shield className="h-7 w-7 text-orange-500" />
                  </motion.div>
                  <span className="text-xl font-bold font-heading text-orange-600">PolicyVista</span>
                </Link>
                <p className="text-gray-700 mb-6">
                  Providing trusted insurance consultation since 2005. Your protection is our priority.
                </p>
                <div className="flex space-x-4">
                  {socialIcons.map((socialIcon, index) => (
                    <motion.a 
                      key={index}
                      href="#" 
                      className={`bg-gradient-to-br ${socialIcon.gradient} p-2 rounded-full text-white hover:shadow-lg transition-all duration-300`}
                      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <socialIcon.Icon size={20} />
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
                    { name: 'Home', path: '/', color: "bg-red-400" },
                    { name: 'About Us', path: '/about', color: "bg-blue-400" },
                    { name: 'Our Services', path: '/services', color: "bg-green-400" },
                    { name: 'Blog', path: '/blog', color: "bg-amber-400" },
                    { name: 'Contact Us', path: '/contact', color: "bg-purple-400" }
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
                          className={`w-2 h-2 rounded-full ${item.color} mr-2`}
                          animate={{ 
                            scale: [1, 1.5, 1],
                            backgroundColor: ["#f87171", "#60a5fa", "#4ade80", "#fbbf24", "#c084fc"]
                          }}
                          transition={{ 
                            repeat: Infinity, 
                            duration: 3, 
                            delay: index * 0.2 
                          }}
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
                    { service: 'Life Insurance', color: "bg-pink-400" },
                    { service: 'Health Insurance', color: "bg-blue-400" },
                    { service: 'Property Insurance', color: "bg-green-400" },
                    { service: 'Auto Insurance', color: "bg-amber-400" },
                    { service: 'Business Insurance', color: "bg-purple-400" }
                  ].map((item, index) => (
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
                          className={`w-2 h-2 rounded-full ${item.color} mr-2`}
                          animate={{ 
                            scale: [1, 1.5, 1],
                            backgroundColor: ["#ec4899", "#3b82f6", "#22c55e", "#f59e0b", "#a855f7"]
                          }}
                          transition={{ 
                            repeat: Infinity, 
                            duration: 3, 
                            delay: index * 0.2 
                          }}
                        />
                        {item.service}
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
                  {contactInfo.map((item, index) => (
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
                        animate={{ rotate: item.animation }}
                        transition={{ 
                          repeat: Infinity, 
                          duration: 3, 
                          delay: index 
                        }}
                        className={`bg-gradient-to-br ${item.gradient} p-1.5 rounded-full text-white`}
                      >
                        <item.Icon className="h-5 w-5" />
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
