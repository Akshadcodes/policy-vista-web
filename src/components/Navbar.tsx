
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, Shield } from 'lucide-react';
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
      className={`fixed top-0 w-full z-50 transition-all duration-300 
      ${isScrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' 
        : 'bg-transparent py-5'}`}
    >
      <div className="container-custom flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2 text-primary">
          <Shield className="h-8 w-8" />
          <span className="text-xl font-bold font-heading">PolicyVista</span>
        </NavLink>
        
        {/* Mobile menu button - only visible on mobile */}
        <button className="md:hidden focus:outline-none" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation - always visible on desktop */}
        <div className="hidden md:flex items-center justify-end flex-1 gap-8">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuLink asChild>
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
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-2px]"
          >
            Get a Quote
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`fixed inset-0 bg-white/95 backdrop-blur-sm z-50 md:hidden transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-5 flex flex-col h-full">
            <div className="flex justify-between items-center">
              <NavLink to="/" className="flex items-center gap-2 text-primary" onClick={toggleMenu}>
                <Shield className="h-8 w-8" />
                <span className="text-xl font-bold">PolicyVista</span>
              </NavLink>
              <button onClick={toggleMenu} className="focus:outline-none" aria-label="Close menu">
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col gap-5 mt-16">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
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
              ))}
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 mt-8 shadow-sm"
              >
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
