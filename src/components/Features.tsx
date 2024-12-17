import React from 'react';
import { Brain, Cpu, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: <Brain className="h-8 w-8" />,
    title: 'Advanced AI Models',
    description: 'State-of-the-art machine learning models trained on diverse datasets.'
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: 'Real-time Processing',
    description: 'Lightning-fast processing for immediate insights and decisions.'
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Secure & Private',
    description: 'Enterprise-grade security with end-to-end encryption.'
  },
  {
    icon: <Cpu className="h-8 w-8" />,
    title: 'Scalable Infrastructure',
    description: 'Cloud-native architecture that grows with your needs.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to succeed in the AI-driven world
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-purple-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}