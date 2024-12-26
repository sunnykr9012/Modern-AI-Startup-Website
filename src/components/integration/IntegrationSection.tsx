import React from 'react';
import { Code2, GitBranch, Terminal, Webhook } from 'lucide-react';
import GradientText from '../shared/GradientText';
import AnimatedIcon from '../shared/AnimatedIcon';

const integrations = [
  {
    icon: Code2,
    title: 'REST API',
    description: 'Simple and powerful REST APIs for seamless integration.'
  },
  {
    icon: Webhook,
    title: 'Webhooks',
    description: 'Real-time event notifications for your applications.'
  },
  {
    icon: GitBranch,
    title: 'SDKs',
    description: 'Native SDKs for all major programming languages.'
  },
  {
    icon: Terminal,
    title: 'CLI Tools',
    description: 'Command-line tools for automation and deployment.'
  }
];

export default function IntegrationSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <GradientText className="text-4xl font-bold mb-4">
            Easy Integration
          </GradientText>
          <p className="text-xl text-gray-300">
            Multiple ways to integrate with your existing stack
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {integrations.map((item, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-white/10 backdrop-blur-lg hover:bg-white/20 transform hover:-translate-y-1 transition-all duration-300"
            >
              <AnimatedIcon
                Icon={item.icon}
                size={32}
                className="text-purple-400 mb-6"
              />
              <h3 className="text-xl font-semibold mb-4 group-hover:text-purple-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        
          
       
      </div>
    </section>
  );
}