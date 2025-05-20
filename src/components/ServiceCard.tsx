
import React from 'react';
import { Button } from "@/components/ui/button";
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-soft card-hover">
      <div className="p-3 bg-primary/10 rounded-lg inline-block mb-4">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground mb-5">{description}</p>
      <Button variant="outline" className="border-primary text-primary hover:text-white hover:bg-primary">
        Learn More
      </Button>
    </div>
  );
};

export default ServiceCard;
