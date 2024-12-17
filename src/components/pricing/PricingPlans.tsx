import React from 'react';
import { Check, Zap } from 'lucide-react';
import GradientText from '../shared/GradientText';

const plans = [
  {
    name: 'Starter',
    price: '$49',
    description: 'Perfect for small businesses',
    features: [
      'Basic AI Models',
      '5,000 API Calls/month',
      'Email Support',
      'Basic Analytics'
    ]
  },
  {
    name: 'Pro',
    price: '$149',
    description: 'For growing companies',
    features: [
      'Advanced AI Models',
      '50,000 API Calls/month',
      '24/7 Priority Support',
      'Advanced Analytics',
      'Custom Integration'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations',
    features: [
      'Custom AI Models',
      'Unlimited API Calls',
      'Dedicated Support Team',
      'Enterprise Analytics',
      'Custom Integration',
      'SLA Guarantee'
    ]
  }
];

export default function PricingPlans() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <GradientText className="text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </GradientText>
          <p className="text-xl text-gray-600">
            Choose the perfect plan for your business
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-br from-purple-600 to-blue-500 text-white transform hover:-translate-y-2'
                  : 'bg-white border-2 border-gray-200 hover:border-purple-500 hover:shadow-xl'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                    <Zap className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}
              <div className="text-center">
                <h3 className={`text-2xl font-bold mb-2 ${!plan.popular && 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-lg">/month</span>}
                </div>
                <p className={`mb-6 ${!plan.popular && 'text-gray-600'}`}>
                  {plan.description}
                </p>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <Check className={`w-5 h-5 mr-3 ${plan.popular ? 'text-white' : 'text-green-500'}`} />
                    <span className={!plan.popular ? 'text-gray-600' : undefined}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                  plan.popular
                    ? 'bg-white text-purple-600 hover:bg-gray-100'
                    : 'bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:opacity-90'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}