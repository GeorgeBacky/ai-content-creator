'use client'

import React from 'react';
import { motion } from 'framer-motion';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Content Creator',
      company: 'Creative Studios',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80',
      content: 'This platform has revolutionized how I create and protect my content. The AI tools are incredible, and blockchain registration gives me peace of mind.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Digital Artist',
      company: 'ArtBlock',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
      content: 'The combination of AI-powered creation and blockchain security is exactly what I needed. It&#x27;s streamlined my entire workflow.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      company: 'InnovateX',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80',
      content: 'Our team&#x27;s productivity has skyrocketed since we started using this platform. The analytics features are particularly valuable.',
      rating: 4,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-xl text-gray-600">Join thousands of satisfied creators</p>
        </motion.div>
        <motion.div 
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

