import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  features: PricingFeature[];
  highlighted?: boolean;
  onSelect: () => void;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  period,
  features,
  highlighted = false,
  onSelect,
}) => {
  return (
    <div className={`rounded-2xl p-8 ${highlighted
        ? 'bg-purple-600 text-white shadow-xl scale-105'
        : 'bg-white text-gray-900 shadow-md'
      }`}>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold">{price}</span>
        <span className="text-sm ml-2">/{period}</span>
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className={`w-5 h-5 mr-2 ${highlighted ? 'text-white' : 'text-purple-600'
              }`} />
            <span className={feature.included ? '' : 'line-through opacity-50'}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
      <Button
        variant={highlighted ? 'default' : 'secondary'}
        className="w-full"
        onClick={onSelect}
      >
        Get Started
      </Button>
    </div>
  );
};

export default PricingCard;