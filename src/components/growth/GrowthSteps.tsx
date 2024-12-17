import React from 'react';
import { Rocket, Target, Users, TrendingUp, LineChart, Award } from 'lucide-react';
import AnimatedIcon from '../shared/AnimatedIcon';
import GradientText from '../shared/GradientText';

const steps = [
  {
    icon: Rocket,
    title: 'Launch Your Startup',
    description: 'Begin with a solid foundation and clear vision for your AI venture.'
  },
  {
    icon: Target,
    title: 'Market Research',
    description: 'Identify your target audience and analyze market opportunities.'
  },
  {
    icon: Users,
    title: 'Build Your Team',
    description: 'Recruit talented individuals who share your vision and values.'
  },
  {
    icon: TrendingUp,
    title: 'Scale Operations',
    description: 'Optimize processes and expand your market reach.'
  },
  {
    icon: LineChart,
    title: 'Measure & Iterate',
    description: 'Track KPIs and continuously improve your product.'
  },
  {
    icon: Award,
    title: 'Achieve Success',
    description: 'Reach your business goals and establish market leadership.'
  }
];

export default function GrowthSteps() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <GradientText className="text-4xl font-bold mb-4">
            Your Path to Success
          </GradientText>
          <p className="text-xl text-gray-600">
            Follow our proven roadmap to grow your AI startup
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="group p-8 rounded-xl bg-white border border-gray-200 hover:border-purple-500 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-xl"
            >
              <AnimatedIcon 
                Icon={step.icon}
                size={32}
                className="text-purple-600 mb-6"
              />
              <h3 className="text-xl font-semibold mb-4 group-hover:text-purple-600 transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}