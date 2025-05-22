
import React from 'react';
import { Button } from "@/components/ui/button";
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color?: string;
}

// Array of vibrant colors for icons
const iconColors = [
  "from-pink-500 to-rose-500",
  "from-orange-500 to-amber-500",
  "from-green-500 to-emerald-500",
  "from-blue-500 to-cyan-500",
  "from-purple-500 to-violet-500",
  "from-yellow-500 to-amber-500",
  "from-red-500 to-pink-500",
  "from-teal-500 to-cyan-500"
];

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  color = iconColors[Math.floor(Math.random() * iconColors.length)]
}) => {
  return (
    <motion.div 
      className="bg-white rounded-2xl p-6 shadow-soft card-hover"
      whileHover={{ 
        y: -8,
        boxShadow: "0 20px 40px rgba(249, 115, 22, 0.15)"
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20
      }}
    >
      <motion.div 
        className={`p-3 bg-gradient-to-br ${color} rounded-lg inline-block mb-4`}
        initial={{ rotate: 0 }}
        whileHover={{ 
          rotate: [0, -10, 10, -5, 5, 0],
          scale: 1.1,
          transition: { duration: 0.5 }
        }}
      >
        <Icon className="h-6 w-6 text-white" />
      </motion.div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground mb-5">{description}</p>
      <Button 
        variant="outline" 
        className="border-primary text-primary hover:text-white hover:bg-primary transition-all duration-300 hover:translate-y-[-2px]"
      >
        Learn More
      </Button>
    </motion.div>
  );
};

export default ServiceCard;
