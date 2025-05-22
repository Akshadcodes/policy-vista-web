
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
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
    <nav 
      className={`fixed top-0 w-full z-50 backdrop-blur-sm transition-all duration-300 ${
        isScrolled ? 'bg-white/95 shadow-soft py-3' : 'bg-white/0 py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/7fd7c862-0f5e-4244-b741-ccb7fbe758c2.png" 
            alt="Shri Krishna Insurance Services" 
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
          {isOpen ? <X size={24} className="text-orange-500" /> : <Menu size={24} className="text-orange-500" />}
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
                          `relative px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                            isActive 
                              ? "text-orange-500 font-semibold after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-orange-500 after:bottom-0 after:left-0" 
                              : "text-foreground hover:text-orange-500 hover:bg-orange-50"
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
              className="bg-orange-500 hover:bg-orange-600 shadow-button transition-all duration-300 hover:shadow-hover hover:translate-y-[-2px]"
            >
              Get a Quote
            </Button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <motion.div 
          className={`fixed inset-0 bg-gradient-to-br from-orange-50 to-white backdrop-blur-sm z-50 md:hidden ${
            isOpen ? 'block' : 'hidden'
          }`}
          initial={{ x: "100%" }}
          animate={{ x: isOpen ? 0 : "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="p-5 flex flex-col h-full">
            <div className="flex justify-between items-center">
              <NavLink to="/" onClick={toggleMenu}>
                <img 
                  src="/lovable-uploads/7fd7c862-0f5e-4244-b741-ccb7fbe758c2.png" 
                  alt="Shri Krishna Insurance Services" 
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
                      `text-xl py-2 border-b border-orange-100 ${
                        isActive ? "text-orange-500 font-medium" : "text-foreground"
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
