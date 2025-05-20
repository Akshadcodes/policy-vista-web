
import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  centered?: boolean;
  lightText?: boolean;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  centered = true, 
  lightText = false,
  className = ''
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${lightText ? 'text-white' : ''}`}>
        {title}
      </h2>
      <p className={`text-lg ${lightText ? 'text-white/80' : 'text-muted-foreground'} max-w-3xl ${centered ? 'mx-auto' : ''}`}>
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeading;
