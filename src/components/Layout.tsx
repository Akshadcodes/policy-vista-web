
import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import { motion, AnimatePresence } from 'framer-motion';
import { useTransition, animated } from 'react-spring';

const Layout = () => {
  const location = useLocation();
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // React Spring page transition
  const transitions = useTransition(location, {
    from: { opacity: 0, transform: 'translate3d(0,30px,0)' },
    enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(0,30px,0)' },
    config: { tension: 280, friction: 60 },
  });
  
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {transitions((style, item) => (
        <animated.main
          style={style}
          className="flex-grow"
        >
          <Outlet />
        </animated.main>
      ))}

      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Layout;
