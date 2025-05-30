import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Info, Settings, Newspaper, PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { useIsMobile } from '@/hooks/use-mobile';

// Array of vibrant colors for icons
const iconColors = [
  "text-pink-500",
  "text-orange-500",
  "text-green-500",
  "text-blue-500",
  "text-purple-500"
];

const navItems = [
  { name: 'Home', path: '/', icon: Home, color: "text-red-500" },
  { name: 'About', path: '/about', icon: Info, color: "text-blue-500" },
  { name: 'Services', path: '/services', icon: Settings, color: "text-green-500" },
  { name: 'Blog', path: '/blog', icon: Newspaper, color: "text-amber-500" },
  { name: 'Contact', path: '/contact', icon: PhoneCall, color: "text-violet-500" }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 backdrop-blur-sm transition-all duration-300 ${
        isScrolled ? 'bg-white/95 shadow-soft py-3' : 'bg-white/0 py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2">
          <img 
            src="/SKIS-uploads/logo.png" 
            alt="SKIS - SHRI KRISHNA INSURANCE SERVICE" 
            className="h-12 md:h-14"
          />
        </NavLink>
        
        {/* Mobile menu button - only visible on mobile */}
        <motion.button 
          className="md:hidden focus:outline-none" 
          onClick={toggleMenu} 
          aria-label="Toggle menu"
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? 
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 90 }}
              transition={{ duration: 0.3 }}
            >
              <X size={24} className="text-orange-500" />
            </motion.div> : 
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 0 }}
              whileHover={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
            >
              <Menu size={24} className="text-orange-500" />
            </motion.div>
          }
        </motion.button>

        {/* Desktop Navigation - always visible on desktop */}
        <div className="hidden md:flex items-center justify-end flex-1 gap-8">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              {navItems.map((item, index) => (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuLink asChild>
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <NavLink
                        to={item.path}
                        className={({ isActive }) => 
                          `relative px-3 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1.5 ${
                            isActive 
                              ? "text-orange-500 font-semibold after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-orange-500 after:bottom-0 after:left-0" 
                              : "text-foreground hover:text-orange-500 hover:bg-orange-50"
                          }`
                        }
                      >
                        <motion.div
                          whileHover={{ 
                            rotate: [0, -10, 10, -5, 0],
                            scale: 1.2,
                            transition: { duration: 0.5 }
                          }}
                          className={item.color}
                        >
                          <item.icon size={16} />
                        </motion.div>
                        {item.name}
                      </NavLink>
                    </motion.div>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 shadow-button transition-all duration-300 hover:shadow-hover hover:translate-y-[-2px]"
            >
              Get a Quote
            </Button>
          </motion.div>
        </div>

        {/* Mobile Navigation Overlay */}
        {isOpen && (
          <div className="fixed inset-0 z-[99] bg-white/95 dark:bg-neutral-900/95 transition-colors duration-300" />
        )}
        {/* Mobile Navigation */}
        <motion.div 
          className={`fixed inset-0 z-[100] md:hidden bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white transition-colors duration-300 ${isOpen ? 'block' : 'hidden'}`}
          style={{ opacity: 1 }}
          initial={{ x: "100%" }}
          animate={{ x: isOpen ? 0 : "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="p-5 flex flex-col h-full">
            <div className="flex justify-between items-center">
              <NavLink to="/" onClick={toggleMenu}>
                <img 
                  src="/SKIS-uploads/logo.png" 
                  alt="SKIS - SHRI KRISHNA INSURANCE SERVICE" 
                  className="h-10"
                />
              </NavLink>
              <motion.button 
                onClick={toggleMenu} 
                className="focus:outline-none" 
                aria-label="Close menu"
                whileTap={{ scale: 0.9 }}
              >
                <X size={24} className="text-orange-500" />
              </motion.button>
            </div>
            <div className="border-b border-gray-200 dark:border-neutral-700 my-4" />
            <div className="flex flex-col gap-5 mt-16">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ x: 10 }}
                  className="rounded-xl bg-white dark:bg-neutral-800 shadow-md transition-colors duration-200"
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => 
                      `text-xl py-2 px-4 border-b border-orange-100 flex items-center gap-3 rounded-xl transition-colors duration-200 ${
                        isActive ? "text-orange-500 font-medium" : "text-neutral-900 dark:text-white"
                      }`
                    }
                    onClick={toggleMenu}
                  >
                    <motion.div 
                      className={`p-2 rounded-full ${isOpen ? item.color : ''} ${isOpen ? "bg-white/80 dark:bg-neutral-700" : ''}`}
                      initial={{ rotate: 0 }}
                      animate={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    >
                      <item.icon size={20} />
                    </motion.div>
                    {item.name}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="bg-orange-500 hover:bg-orange-600 mt-8 shadow-sm w-full"
                >
                  Get a Quote
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
