import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import TechnologyStack from './components/features/TechnologyStack';
import IntegrationSection from './components/integration/IntegrationSection';
import GrowthSteps from './components/growth/GrowthSteps';
import StartupGuide from './components/startup/StartupGuide';
import PricingPlans from './components/pricing/PricingPlans';
import About from './components/About';
import SuccessStories from './components/success/SuccessStories';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="scroll-smooth">
        <Hero />
        <Features />
        <TechnologyStack />
        <IntegrationSection />
        <StartupGuide />
        <GrowthSteps />
        <PricingPlans />
        <About />
        <SuccessStories />
        <Contact />
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2024 AI Start. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;