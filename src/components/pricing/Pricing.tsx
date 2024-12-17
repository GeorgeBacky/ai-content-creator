import React from 'react';
import PricingCard from './PricingCard';

const Pricing = () => {
  const plans = [
    {
      title: 'Free',
      price: '$0',
      period: 'month',
      features: [
        { text: '5 AI generations per month', included: true },
        { text: 'Basic content registration', included: true },
        { text: 'Community support', included: true },
        { text: 'Analytics dashboard', included: false },
        { text: 'Priority support', included: false },
      ],
    },
    {
      title: 'Pro',
      price: '$29',
      period: 'month',
      features: [
        { text: 'Unlimited AI generations', included: true },
        { text: 'Advanced content registration', included: true },
        { text: 'Priority support', included: true },
        { text: 'Analytics dashboard', included: true },
        { text: 'API access', included: true },
      ],
    },
    {
      title: 'Enterprise',
      price: '$99',
      period: 'month',
      features: [
        { text: 'Custom AI model training', included: true },
        { text: 'Bulk content registration', included: true },
        { text: 'Dedicated support', included: true },
        { text: 'Advanced analytics', included: true },
        { text: 'Custom API integration', included: true },
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600">Choose the plan that&apos;s right for you</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              {...plan}
              highlighted={index === 1}
              onSelect={() => console.log(`Selected ${plan.title} plan`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;