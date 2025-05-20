
import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  centered?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{subtitle}</p>
    </div>
  );
};

export default SectionHeading;
