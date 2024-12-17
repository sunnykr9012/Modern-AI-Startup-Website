import React, { useState } from 'react';
import { Lightbulb, TrendingUp, Users, Rocket, Target, LineChart } from 'lucide-react';
import GradientText from '../shared/GradientText';
import AnimatedIcon from '../shared/AnimatedIcon';
import ConsultationForm from '../consultation/ConsultationForm';

// ... (previous imports and business ideas array remain the same)

export default function StartupGuide() {
  const [showConsultation, setShowConsultation] = useState(false);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ... (previous content remains the same until the Call to Action section) */}

        {/* Updated Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-500 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
            <p className="text-lg mb-6">
              Get expert guidance and support to launch your AI startup
            </p>
            <button
              onClick={() => setShowConsultation(!showConsultation)}
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Schedule Consultation
            </button>
          </div>
        </div>

        {/* Consultation Form Modal */}
        {showConsultation && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="max-w-4xl w-full">
              <div className="relative">
                <button
                  onClick={() => setShowConsultation(false)}
                  className="absolute -top-4 -right-4 bg-white w-8 h-8 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors"
                >
                  ×
                </button>
                <ConsultationForm />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}