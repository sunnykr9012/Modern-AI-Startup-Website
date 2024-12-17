import React from 'react';
import { Database, Cloud, Bot, Cpu } from 'lucide-react';
import AnimatedIcon from '../shared/AnimatedIcon';
import GradientText from '../shared/GradientText';

const technologies = [
  {
    icon: Bot,
    title: 'Machine Learning',
    items: ['Neural Networks', 'Deep Learning', 'NLP', 'Computer Vision']
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    items: ['Auto-scaling', 'Load Balancing', 'High Availability', 'Global CDN']
  },
  {
    icon: Database,
    title: 'Data Processing',
    items: ['Real-time Analytics', 'Big Data', 'ETL Pipeline', 'Data Lakes']
  },
  {
    icon: Cpu,
    title: 'AI Hardware',
    items: ['GPU Clusters', 'TPU Support', 'Edge Computing', 'Custom ASIC']
  }
];

export default function TechnologyStack() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <GradientText className="text-4xl font-bold mb-4">
            Cutting-edge Technology Stack
          </GradientText>
          <p className="text-xl text-gray-300">
            Built on modern technologies for maximum performance
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="group p-6 rounded-xl bg-gray-800 hover:bg-gray-700 transform hover:-translate-y-1 transition-all duration-300"
            >
              <AnimatedIcon 
                Icon={tech.icon}
                size={32}
                className="text-purple-400 mb-6"
              />
              <h3 className="text-xl font-semibold mb-4 group-hover:text-purple-400 transition-colors">
                {tech.title}
              </h3>
              <ul className="space-y-2">
                {tech.items.map((item, idx) => (
                  <li key={idx} className="text-gray-300 flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}