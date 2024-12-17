import React from 'react';
import { Brain, Shield, BarChart3, Zap } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Creation',
    description: 'Generate high-quality content with state-of-the-art AI models. From text to images, bring your ideas to life instantly.'
  },
  {
    icon: Shield,
    title: 'Blockchain Security',
    description: 'Protect your intellectual property with immutable blockchain registration. Your content, your proof, your rights.'
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Track your content performance with detailed analytics. Make data-driven decisions to optimize your creations.'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Experience real-time content generation and instant blockchain registration. No more waiting.'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Everything You Need to Create and Protect
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <feature.icon className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;