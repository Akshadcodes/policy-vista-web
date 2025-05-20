
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { useIsMobile } from '@/hooks/use-mobile';

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

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <motion.nav 
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 
      ${isScrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' 
        : 'bg-transparent py-5'}`}
    >
      <div className="container-custom flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2 text-primary">
          <motion.div
            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.5 }}
          >
            <Shield className="h-8 w-8" />
          </motion.div>
          <motion.span 
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-bold font-heading"
          >
            PolicyVista
          </motion.span>
        </NavLink>
        
        {/* Mobile menu button - only visible on mobile */}
        <motion.button 
          className="md:hidden focus:outline-none" 
          onClick={toggleMenu} 
          aria-label="Toggle menu"
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
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
                          `px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                            isActive 
                              ? "text-primary font-semibold" 
                              : "text-foreground hover:text-primary hover:bg-primary/5"
                          }`
                        }
                      >
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
              className="bg-primary hover:bg-primary/90 shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-2px]"
            >
              Get a Quote
            </Button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <motion.div 
          className={`fixed inset-0 bg-white/95 backdrop-blur-sm z-50 md:hidden ${
            isOpen ? 'block' : 'hidden'
          }`}
          initial={{ x: "100%" }}
          animate={{ x: isOpen ? 0 : "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="p-5 flex flex-col h-full">
            <div className="flex justify-between items-center">
              <NavLink to="/" className="flex items-center gap-2 text-primary" onClick={toggleMenu}>
                <Shield className="h-8 w-8" />
                <span className="text-xl font-bold">PolicyVista</span>
              </NavLink>
              <motion.button 
                onClick={toggleMenu} 
                className="focus:outline-none" 
                aria-label="Close menu"
                whileTap={{ scale: 0.9 }}
              >
                <X size={24} />
              </motion.button>
            </div>
            <div className="flex flex-col gap-5 mt-16">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => 
                      `text-xl py-2 border-b border-gray-100 ${
                        isActive ? "text-primary font-medium" : "text-foreground"
                      }`
                    }
                    onClick={toggleMenu}
                  >
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
                  className="bg-primary hover:bg-primary/90 mt-8 shadow-sm w-full"
                >
                  Get a Quote
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
