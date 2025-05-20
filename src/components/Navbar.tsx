
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, Shield } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-soft py-3' : 'bg-transparent py-5'}`}>
      <div className="container-custom flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2 text-primary">
          <Shield className="h-8 w-8" />
          <span className="text-xl font-bold font-heading">PolicyVista</span>
        </NavLink>
        
        {/* Mobile menu button */}
        <button className="lg:hidden" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex space-x-6">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => 
                  isActive 
                    ? "text-primary font-medium" 
                    : "text-foreground hover:text-primary transition-colors"
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          <Button className="bg-primary hover:bg-primary/90">Get a Quote</Button>
        </div>

        {/* Mobile Navigation */}
        <div className={`fixed inset-0 bg-white z-50 lg:hidden transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-5 flex flex-col h-full">
            <div className="flex justify-between items-center">
              <NavLink to="/" className="flex items-center gap-2 text-primary" onClick={toggleMenu}>
                <Shield className="h-8 w-8" />
                <span className="text-xl font-bold">PolicyVista</span>
              </NavLink>
              <button onClick={toggleMenu}>
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col gap-5 mt-10">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) => 
                    `text-lg ${isActive ? "text-primary font-medium" : "text-foreground"}`
                  }
                  onClick={toggleMenu}
                >
                  {item.name}
                </NavLink>
              ))}
              <Button className="bg-primary hover:bg-primary/90 mt-4">Get a Quote</Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
