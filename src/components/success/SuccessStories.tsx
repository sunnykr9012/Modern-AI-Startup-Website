import React from 'react';
import GradientText from '../shared/GradientText';

const stories = [
  {
    company: 'TechCorp',
    image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    quote: 'AI Start helped us increase our efficiency by 300% within just 6 months.',
    author: 'Sunny',
    role: 'Owner'
  },
  {
    company: 'DataFlow',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    quote: 'The AI solutions provided by NexusAI transformed our business operations completely.',
    author: 'Michael Chen',
    role: 'CEO'
  }
];

export default function SuccessStories() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <GradientText className="text-4xl font-bold mb-4">
            Success Stories
          </GradientText>
          <p className="text-xl text-gray-600">
            See how other startups achieved success with our platform
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {stories.map((story, index) => (
            <div 
              key={index}
              className="group rounded-xl overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={story.image}
                  alt={story.company}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-600 transition-colors">
                  {story.company}
                </h3>
                <p className="text-gray-600 mb-6 italic">"{story.quote}"</p>
                <div className="flex items-center">
                  <div>
                    <p className="font-semibold">{story.author}</p>
                    <p className="text-gray-500">{story.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}