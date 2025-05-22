import { motion } from 'framer-motion';
import React from 'react';

// Animation for revealing words one by one
export const AnimatedWords = ({ 
  text, 
  className = "", 
  once = true,
  delay = 0,
  duration = 0.05,
}: { 
  text: string; 
  className?: string;
  once?: boolean;
  delay?: number;
  duration?: number;
}) => {
  const words = text.split(" ");
  
  // Variants for the container of words
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { 
        staggerChildren: duration, 
        delayChildren: delay, 
      },
    }),
  };
  
  // Variants for each word
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };
  
  return (
    <motion.div
      className={`inline-block ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
    >
      {words.map((word, index) => (
        <motion.span
          className="inline-block mr-1"
          variants={child}
          key={index}
        >
          {word}{" "}
        </motion.span>
      ))}
    </motion.div>
  );
};

// Animation for typing text
export const TypingText = ({ 
  text, 
  className = "", 
  once = true,
  delay = 0
}: { 
  text: string; 
  className?: string;
  once?: boolean;
  delay?: number;
}) => {
  const characters = text.split("");
  
  return (
    <motion.p
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      variants={{
        visible: { transition: { staggerChildren: 0.02, delayChildren: delay } },
        hidden: {},
      }}
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 5 },
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.p>
  );
};

// Animation for sliding in elements
export const SlideIn = ({ 
  children, 
  direction = "up", 
  className = "", 
  delay = 0,
  duration = 0.5,
  once = true
}: { 
  children: React.ReactNode; 
  direction?: "up" | "down" | "left" | "right"; 
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
}) => {
  const getDirection = () => {
    switch(direction) {
      case "up": return { y: 50 };
      case "down": return { y: -50 };
      case "left": return { x: 50 };
      case "right": return { x: -50 };
      default: return { y: 50 };
    }
  };
  
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...getDirection() }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once }}
      transition={{ 
        duration: duration, 
        delay: delay,
        type: "spring",
        damping: 15,
        stiffness: 100
      }}
    >
      {children}
    </motion.div>
  );
};

// Animation for fading in elements
export const FadeIn = ({ 
  children, 
  className = "", 
  delay = 0,
  duration = 0.5,
  once = true
}: { 
  children: React.ReactNode; 
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once }}
      transition={{ 
        duration: duration, 
        delay: delay 
      }}
    >
      {children}
    </motion.div>
  );
};

// Create a floating animation (renamed to match import in Home.tsx)
export const FloatingAnimation = ({ 
  children, 
  className = "", 
  duration = 3,
  distance = 15
}: { 
  children: React.ReactNode; 
  className?: string;
  duration?: number;
  distance?: number;
}) => {
  return (
    <motion.div
      className={className}
      animate={{ 
        y: [-distance, distance],
      }}
      transition={{ 
        repeat: Infinity,
        repeatType: "reverse",
        duration: duration,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
};
