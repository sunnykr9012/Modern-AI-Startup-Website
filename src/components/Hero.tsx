import React from 'react';
import { ArrowRight, Sparkles, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 bg-purple-900/50 rounded-full mb-8 border border-purple-500/30">
            <Sparkles className="h-4 w-4 text-purple-400 mr-2" />
            <span className="text-purple-300 font-medium">AI-Powered Future</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">
            Transform Your Business with{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Advanced AI
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Harness the power of artificial intelligence to revolutionize your workflow, 
            enhance productivity, and unlock new possibilities for growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:opacity-90 transition-all flex items-center justify-center">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group border border-purple-500/30 text-white px-8 py-4 rounded-lg hover:bg-purple-900/50 transition-all flex items-center justify-center">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </button>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              ['1M+', 'API Calls Daily'],
              ['500+', 'Enterprise Clients'],
              ['99.9%', 'Uptime SLA'],
              ['24/7', 'Expert Support']
            ].map(([stat, label]) => (
              <div key={label}>
                <p className="text-3xl font-bold text-white mb-1">{stat}</p>
                <p className="text-purple-300">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}