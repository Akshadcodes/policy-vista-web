
import React from 'react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  position: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, position, image }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-soft">
      <div className="mb-4">
        <svg className="text-accent h-8 w-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <p className="text-gray-600 mb-6 italic">{quote}</p>
      <div className="flex items-center">
        <img src={image} alt={name} className="h-12 w-12 rounded-full object-cover mr-4" />
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-gray-500">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
