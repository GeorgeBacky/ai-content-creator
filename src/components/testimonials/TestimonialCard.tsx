'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, company, image, content, rating }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full"
      variants={cardVariants}
      whileHover="hover"
    >
      <div className="flex items-center mb-4">
        <img className="w-12 h-12 rounded-full mr-4" src={image} alt={name} />
        <div>
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-gray-600 text-sm">{role} at {company}</p>
        </div>
      </div>
      <p className="text-gray-700 mb-4 flex-grow">{content}</p>
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default TestimonialCard;

